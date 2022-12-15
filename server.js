require('dotenv').config();
const express = require ('express');
const pokemon = require('./models/pokemon.js');
const app = express();
const mongoose = require('mongoose');
const Pokemon = require ("./models/pokemon")
// import mongoose from "mongoose";



app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//MIDDLEWARE

app.use(express.urlencoded({extended:false}));

// app.get("/pokemon", (req, res) => {
//     Pokemon
// })

//Connect to Mongoose/Remove Deprication Warnings
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})



// Route

app.get("/" , (req, res) => {
    res.send('Welcome to the Pokemon App!')
   
} )

//INDEX Route Pokemon


app.get("/pokemon", (req, res) => {
    //find all pokemon
    Pokemon.find({}, (error, allPokemon)=>{
      res.render('Index', {
        pokemons: allPokemon
      })
    }) 
  });
  
//New Route (add new pokemon)

app.get('/pokemon/new', (req,res) => {
    res.render('New');
})


//Pokemon route

app.get("/pokemon/:id", (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
      res.render('Show', {
        pokemon: foundPokemon
      });
    });
  });




//POST-Create Route

app.post('/pokemon', (req,res) => 
   Pokemon.create(req.body, (error, createdPokemon) => {
    // res.send(createdPokemon)
    res.redirect('/pokemon')
   })
 )



//Show route

app.get('/pokemon/:indexOfPokemonArray', (req,res) => {
    // pokemons.findById(req.params.id) //Added
    // res.render("Show",{pokemons: pokemon[req.params.indexOfPokemonArray]});
        // pokemon : foundPokemon //Added
});

app.listen(3000, () => {
    console.log('listening')
})

