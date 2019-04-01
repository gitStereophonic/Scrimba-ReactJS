import React, { Component } from 'react';

import Header from './Header';
import Greeting from './Greeting';

class App extends Component {
  render() {
    return (
      <div>
        <Header username={this.props.username} />
        <Greeting />
      </div>
    );
  }
}

export default App;
