const express = require ('express');
const pokemon = require('./models/pokemon.js');
const app = express()







//GET Route

app.get("/" , (req, res) => {
    res.send('Welcome to the Pokemon App!')
   
} )

//GET Route Pokemon

app.get ("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.listen(3000, () => {
    console.log('listening')
})

