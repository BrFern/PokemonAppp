import React, {Component} from 'react'
// import pokemon from '../models/pokemon'

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



// const imageStyle = {
  
// }


class Show extends Component {
  
  render() 
  { const pokemon = this.props.pokemon 
    return (
    <body style= {divStyle}>
    <div>
     <h1 style = {headingStyle}> Gotta Catch Them All! </h1>
           <h2 style= {headerTwo}> {pokemon.name}
             {/* {pokemon.name.charAt(0).toUpperCase()}
            {pokemon.name.slice(1)}  */}
            </h2>
            <div>
           <img style={{display: "block", alignItems: "center", justifyContent: "center", border: "solid", width: "600px", margin: "auto"}} src={`${pokemon.img}.jpg`}  />
           </div>
           <a href ='/pokemon'> Back </a>
           
    </div>
    </body>
  )
}
}
 

module.exports = Show