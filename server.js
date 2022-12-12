const express = require ('express');
const app = express()

app.listen(3000, () => {
    console.log('listening')
})

//GET Route

app.get("/" , (req, res) => {
    res.send ('Welcome to the Pokemon App!');
} )