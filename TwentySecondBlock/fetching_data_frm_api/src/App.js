import React, { Component } from 'react';

/**
 * About fetch:
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
 * 
 * StarWars API:
 * https://swapi.co/
 * 
 * About promises:
 * https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => this.setState({
        loading: false,
        character: data
      }));
  }

  render() {
    const info = this.state.loading ? <h3>Loading...</h3> :
      <div>
        <h2>{this.state.character.name}</h2>
        <p>Gender: {this.state.character.gender}</p>
        <p>Height: {this.state.character.height}</p>
        <p>Mass: {this.state.character.mass}</p>
        <p>Birth year: {this.state.character.birth_year}</p>
      </div>;
    return (
      <div>
        {info}
      </div>
    );
  }
}

export default App;
