import React, { useState ,useEffect } from 'react'
import PokemonLista from '../components/pokemon/PokemonLista'
import { PokeHooks } from '../hooks/PokeHooks'

const PokePage = () => {
    const { loading, pokemones, obtenerPokemones} = PokeHooks()
    const [offset, setOffset] = useState(0);
    
    useEffect(() => {obtenerPokemones(offset)}, [offset])

    const avanzarPosicion = () => {
      setOffset(offset + 4);
    };

    const retrocederPosicion = () => {
      setOffset(offset - 4);
    };

  return (
    <div>
        {
            loading ?
            'Cargando...'
            :
            <PokemonLista pokemones={pokemones.results} />
        }
        <div className='cards-continue'>
          <button onClick={retrocederPosicion} disabled={offset < 4 ? true : false}>Anterior</button>
          <button onClick={avanzarPosicion}>Siguiente</button>
        </div>
    </div>
  )
}

export default PokePage