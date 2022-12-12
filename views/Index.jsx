import React from 'react'
import pokemon from '../models/pokemon'

function Index({pokemons}) {
  return (
    <div>
        <h1>See all the Pokemon! </h1> 
        <ul>
            {pokemons.map((pokemon, i) => {
                return (
                    <li key = {i}>
                        <a href = {`/pokemon/${i}`}>

                            {pokemon.name.toUpperCase()}
                        </a>
                    


                        
                    </li>
                )
            })}
        </ul>
        </div>
  )
}

export default Index