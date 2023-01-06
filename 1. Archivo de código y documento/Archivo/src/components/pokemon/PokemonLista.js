import React from 'react'
import PokemonCarta from './PokemonCarta'
import '../pokemon/css/PokemonLista.css'

const PokemonLista = ({pokemones}) => {
  
  return (
    <div>
      <div className='container-pokemon'>
        <div className='cards-pokemon'>
          {
            pokemones.map(p => (
              <div className='card-item' key={p.name}>
                <PokemonCarta name={p.name} url={p.url} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PokemonLista