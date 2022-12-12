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




app.listen(3000, () => {
    console.log('listening')
})

