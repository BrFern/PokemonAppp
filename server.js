require("dotenv").config();
const express = require("express");
const pokemon = require("./models/pokemon.js");
const app = express();
const mongoose = require("mongoose");
const Pokemon = require("./models/pokemon");
const methodOverride = require("method-override");
// import mongoose from "mongoose";

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//MIDDLEWARE

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

// app.get("/pokemon", (req, res) => {
//     Pokemon
// })

//Connect to Mongoose/Remove Deprication Warnings
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Route

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//Create 

// app.get("pokemon/pokedex", (req, res) => {
  
// }

//INDEX Route Pokemon

app.get("/pokemon", (req, res) => {
  //find all pokemon
  Pokemon.find({}, (error, allPokemon) => {
    res.render("Index", {
      pokemons: allPokemon,
    });
  });
});

//New Route (add new pokemon)

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//Pokemon route

app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    });
  });
});

//POST-Create Route

app.post("/pokemon", (req, res) =>
  Pokemon.create(req.body, (error, createdPokemon) => {
    // res.send(createdPokemon)
    res.redirect("/pokemon");
  })
);

//Show route

app.get("/pokemon/:indexOfPokemonArray", (req, res) => {
  // pokemons.findById(req.params.id) //Added
  // res.render("Show",{pokemons: pokemon[req.params.indexOfPokemonArray]});
  // pokemon : foundPokemon //Added
});

//EDIT

app.get("/pokemon/:id/edit", (req, res) => {
  //find pokemon by id
  //render an edit form
  //pass in the pokemon data / payload (whatever you get back)
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("pokemon/Edit", {
      pokemon: foundPokemon
    });
  });
});

//UPDATE (Put route)

app.put('pokemon/:id', (req, res) => {
  //IMPORTANT: SHe has a check if "fruit" is ready to eat 
  //find pokemon by id and uppdate it
  //redirect to fruit show page

  Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon) => {
    // console.log(updatedPokemon);
    res.redirect(`/pokemon/${req.params.id}`);
    // res.redirect("/pokemon");
  })
})

//Delete

app.delete("/pokemon/:id", (req, res) => {
  Pokemon.findByIdAndRemove(req.params.id, (err, deletedPokemon) => {
    res.redirect("/pokemon");
  });
});

app.listen(3000, () => {
  console.log("listening");
});
