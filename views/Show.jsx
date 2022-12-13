import React from 'react'
import pokemon from '../models/pokemon'

const headingStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
  textAlign: 'center',
}

const divStyle = {
  backgroundImage: `url("https://i.ytimg.com/vi/ltWyw3JKNsw/maxresdefault.jpg")`,
  backgroundSize: 'cover',
  overflow: 'hidden'
}

const headerTwo = {
  textAlign: 'center',

}



const imageStyle = {
  
}
function Show({pokemon}) {

  return (
    <body style= {divStyle}>
    <div>
     <h1 style = {headingStyle}> Gotta Catch 'Em All!</h1>
           <h2 style= {headerTwo}> {pokemon.name.charAt(0).toUpperCase()}
            {pokemon.name.slice(1)} </h2>
            <div style = {imageStyle}>
           <img style={{display: "block", alignItems: "center", justifyContent: "center", border: "solid", width: "600px", margin: "auto"}} src={`${pokemons.img}.jpg`}  />
           </div>
           <a href ='/pokemon'> Back </a>
           
    </div>
    </body>
  )
}

export default Show