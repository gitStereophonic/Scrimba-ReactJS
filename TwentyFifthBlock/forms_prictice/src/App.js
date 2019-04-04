import React, { Component } from "react";

/**
 * @author Raccoon Developer
 * @date 04.04.2019
 * 
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox" ?
      this.setState({
        [name]: checked
      }) :
      this.setState({
        [name]: value
      });
  }

  render() {
    return (
      <main>
        <form>
          <label>First name: </label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.onChangeHandler}
          />
          <br />
          <label>Last name: </label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.onChangeHandler}
          />
          <br />
          <label>Age: </label>
          <input
            type="text"
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.onChangeHandler}
          />
          <br />

          {/* Create radio buttons for gender here */}
          <label>Gender: </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.onChangeHandler}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.onChangeHandler}
            />
            Female
          </label>
          <br />

          {/* Create select box for location here */}
          <label>Location: </label>
          <select
            value={this.state.destination}
            name="destination"
            onChange={this.onChangeHandler}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="Berlin">Berlin</option>
            <option value="London">London</option>
            <option value="Moscow">Moscow</option>
            <option value="Rome">Rome</option>
            <option value="Washington">Washington</option>
            <option value="Madrid">Madrid</option>
          </select>
          <br />

          {/* Create check boxes for dietary restrictions here */}
          <label>Dietary restrictions: </label>
          <label>
            <input
              type="checkbox"
              name="isVegan"
              checked={this.state.isVegan}
              onChange={this.onChangeHandler}
            />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={this.state.isKosher}
              onChange={this.onChangeHandler}
            />
            Kosher
          </label>
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              checked={this.state.isLactoseFree}
              onChange={this.onChangeHandler}
            />
            Lactose Free
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName + " " + this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          {this.state.isVegan ? " Vegan" : ""}
          {this.state.isKosher ? " Kosher" : ""}
          {this.state.isLactoseFree ? " Lactose Free" : ""}
        </p>
      </main>
    );
  }
}

export default App;
