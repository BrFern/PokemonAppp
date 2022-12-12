import React from 'react'
import pokemon from '../models/pokemon'

function Show({pokemons}) {

  return (
    <div>{pokemons.name}</div>
  )
}

export default Show