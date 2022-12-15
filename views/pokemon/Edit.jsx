import React, { Component } from "react";

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

export default class Edit extends Component {
  render() {
    //Other way to do it: const {pokemon} = this.props;
    // console.log(pokemons);
    return (
      <body style={bodyStyle}>
        <div>
          <nav>
            <a href="/pokemon"> No changes needed </a>
          </nav>
          <h1 style={headerStyle}> Edit Pokemon </h1>
          <form action = {`/pokemon/${this.props.pokemon.id}?_method=PUT`} method="POST"></form>
          <form>
            Name:{" "}
            <input
              type="text"
              name="name"
              defaultValue={this.props.pokemon.name}
            />{" "}
            <br />
            Image :{" "}
            <input
              type="text"
              name="img"
              defaultValue={this.props.pokemon.img}
            />{" "}
            <br />
            <input type="submit" name="" value="Update Pokemon"></input>
          </form>
        </div>
      </body>
    );
  }
}


