import React, { Component } from 'react'

const headerStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
  textAlign: "center",
};

const bodyStyle = {
  backgroundImage: `url("https://i.ytimg.com/vi/ltWyw3JKNsw/maxresdefault.jpg")`,
  backgroundSize: "cover",
  overflow: "hidden",
  bakgroundRepeat: "no-repeat",
};

const formStyle = {
  
}

export default class New extends Component {
  render() {
    return (
      <body style = {bodyStyle} >
      <div>
        <h1 style = {headerStyle}> Add a new Pokemon! </h1>
        <form action="/pokemon" method="POST">
            Name: <input type = "text" name="name"/> <br/>
            Image : <input type = "text" name="img"/> <br/> 
            <input type = "submit" name ="" value="Create Pokemon"></input>

        </form>

        <a href= 'https://pokemondb.net/pokedex/national'> Pokedex </a> 
      </div>
      </body>
    )
  }
}

module.exports = New;