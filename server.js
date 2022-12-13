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

//Connect to Mongoose/Remove Deprication Warnings
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})


//GET Route

app.get("/" , (req, res) => {
    res.send('Welcome to the Pokemon App!')
   
} )

//GET Route Pokemon--Index?

app.get ("/pokemon", (req, res) => {
    res.render("Index", {pokemons:pokemon})
    Pokemon.find({}, (error, allPokemon) => {
        res.render('pokemon/Index',{
            pokemon: allPokemon
        })
    })
     
})


//Pokemon route

app.get("/pokemon/:id"), (req, res) => {
    res.send(req.params.id);
}

//New Route (add new pokemon)

app.get('/pokemon/new', (req,res) => {
    res.render('New');
})

//POST

app.post('/pokemon', (req,res) => {
    if(req.body.name === 'true') {
        req.body.name = true;
    } else {
        req.body.name = false;
    }
   Pokemon.create(req.body, (error, createdPokemon) => {
    res.send(createdPokemon)
    res.redirect('./models/pokemon')
   })
} )



//Show route

app.get('/pokemon/:indexOfPokemonArray', (req,res) => {
    // pokemons.findById(req.params.id) //Added
    res.render("Show",{pokemons: pokemon[req.params.indexOfPokemonArray]});
        // pokemon : foundPokemon //Added
});

app.listen(3000, () => {
    console.log('listening')
})

