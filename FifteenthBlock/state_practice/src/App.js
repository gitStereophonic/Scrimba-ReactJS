import React, { Component } from "react";

/*
 * @author Raccoon Developer
 * @date 03.29.2019
 * 
 * Challenge:
 * Given an incomplete class-based component without a constructor, 
 * add a constructor and initialize state to fix the broken component.
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Sergey',
      age: 25
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div >
    );
  }
}

export default App;
