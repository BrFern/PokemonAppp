import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <h1> New Pokemon Page</h1>
        <form action="/pokemon" method="post">
            Name: <input type = "text" name="name"/> <br/>
            Image : <input type = "url" name="image"/> <br/> 
            <input type = "submit" name ="" value="Create Pokemon"></input>

            {/* Look into putting the image there */}
        </form>
      </div>
    )
  }
}

