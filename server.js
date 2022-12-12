const express = require ('express');
const pokemon = require('./models/pokemon.js');
const app = express()

app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());



//GET Route

app.get("/" , (req, res) => {
    res.send('Welcome to the Pokemon App!')
   
} )

//GET Route Pokemon

app.get ("/pokemon", (req, res) => {
    res.render("Index", {pokemons:pokemon})
    
})


//New Route

app.get("/pokemon/:id"), (req, res) => {
    res.send(req.params.id);
}

//Show route

app.get('/pokemon/:indexOfPokemonArray', (req,res) => {
    res.render("Show",{pokemons: pokemon[req.params.indexOfPokemonArray]});
});

app.listen(3000, () => {
    console.log('listening')
})

