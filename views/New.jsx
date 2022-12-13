import React, { Component } from 'react'


export default class New extends Component {
  render() {
    return (
      <div>
        <h1> New Pokemon Page</h1>
        <form action="/pokemon" method="POST">
            Name: <input type = "text" name="name"/> <br/>
            Image : <input type = "text" name="img" id = ""/> <br/> 
            <input type = "submit" name ="" value="Create Pokemon"></input>

            {/* Look into putting the image there */}
        </form>
      </div>
    )
  }
}

module.exports = New;