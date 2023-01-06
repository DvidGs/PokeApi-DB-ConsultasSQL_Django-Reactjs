import React, {useEffect} from 'react'
import { obtenerDatosPokemonApi } from '../../api/PokeAPI'
import { PokeHooks } from '../../hooks/PokeHooks' 
import '../pokemon/css/PokemonCarta.css'


const PokemonCarta = ({name, url}) => {
    const {loading, datosPokemones, obtenerDatosPokemones} = PokeHooks()
    useEffect(() => {obtenerDatosPokemones(url)}, [])

  return (
    <div>
        {
            loading ?
            'Cargando...'
            :
            <div className='card'>
                <div className='card-title'>  
                    <h1 className='card-name'>{name}</h1>
                </div>
                <div className='card-img'>
                    <img src={datosPokemones.sprites.front_default} alt='pokemon'/>
                </div>
                <div className='card-type'>
                    <p>Tipo:</p>
                    <ul>  
                        {
                            datosPokemones.types.map(a => (
                                <li>{a.type.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='card-abilities'>
                    <p>Habilidades:</p>
                    <ul>  
                        {
                            datosPokemones.abilities.map((a, index) => (
                                <li>
                                    {a.ability.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='card-stats'>
                    <p>Estadisticas Generales:</p>
                    <ul> 
                        {
                            datosPokemones.stats.map((a, index) => (
                                <li>{a.stat.name}: {a.base_stat}</li> 
                            ))
                        }
                    </ul>
                </div>
            </div>
        }
    </div>
  )
}

export default PokemonCarta