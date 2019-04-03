import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };

    this.onChangedHandler = this.onChangedHandler.bind(this);
  }

  onChangedHandler(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.onChangedHandler}
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.onChangedHandler}
          />
        </form>

        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </div>
    );
  }
}

export default App;
