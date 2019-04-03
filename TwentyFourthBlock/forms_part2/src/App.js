import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "green"
    };

    this.onChangedHandler = this.onChangedHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangedHandler(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
        [name]: checked
      })
      : this.setState({
        [name]: value
      });
  }

  onSubmitHandler(event) {
    // do some submit shit
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
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

          <br />
          {
            /**
             * Other useful form elements:
             * 
             *  <textarea /> element
             *  <input type="checkbox" />
             *  <input type="radio" />
             *  <select> and <option> elements
             */
          }

          <textarea value={this.state.firstName} />

          <br />

          <label>
            <input
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.onChangedHandler}
            />
            Is friendly?
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.onChangedHandler}
            />
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.onChangedHandler}
            />
            Female
          </label>

          <br />

          <label>Favorite Color:</label>
          <select
            value={this.state.favColor}
            onChange={this.onChangedHandler}
            name="favColor"
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
          </select>

          <br />

          {/* Submit method is on the top of the Form component */}
          <button>Submit</button>
        </form>

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are {this.state.gender}</h2>
        <h3>Your favorite color is {this.state.favColor}</h3>

        { /* Look for "Fo rmik" */}
      </div>
    );
  }
}

export default App;
