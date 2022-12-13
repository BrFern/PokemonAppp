import React from 'react'
import pokemon from '../models/pokemon'

const headerStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    textAlign: 'center',

}

const bodyStyle = {
    backgroundImage: `url("https://i.ytimg.com/vi/ltWyw3JKNsw/maxresdefault.jpg")`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    bakgroundRepeat: 'no-repeat'

}

const listStyle = {

}

function Index({pokemons}) {
  return (
    <div >
        <h1 style = {headerStyle}> See all the Pokemon! </h1> 
        <body style = {bodyStyle}>
        <ul>
            {pokemons.map((pokemon, i) => {
                return (
                    <li key = {i}>
                        <a href = {`/pokemon/${i}`}>

                        {pokemon.name.charAt(0).toUpperCase()}
                        {pokemon.name.slice(1)} 
                        </a>
                
                    </li>
                )
            })}
        </ul>

        </body>
        </div>
        
  )
}

export default Index


// {pokemons.name.charAt(0).toUpperCase()}
// {pokemons.name.slice(1)} 

//Making only the first letter be a capital
