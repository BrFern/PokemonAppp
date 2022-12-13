const express = require ('express');
const pokemon = require('./models/pokemon.js');
const app = express();


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//MIDDLEWARE

app.use(express.urlencoded({extended:false}));

//GET Route

app.get("/" , (req, res) => {
    res.send('Welcome to the Pokemon App!')
   
} )

//GET Route Pokemon

app.get ("/pokemon", (req, res) => {
    res.render("Index", {pokemons:pokemon})
    
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
} )

//add pokemon to the end of the array
// pokemon.push(req.body.name);
// console.log(pokemon)
// res.redirect('/pokemon')

//Show route

app.get('/pokemon/:indexOfPokemonArray', (req,res) => {
    res.render("Show",{pokemons: pokemon[req.params.indexOfPokemonArray]});
});

app.listen(3000, () => {
    console.log('listening')
})

