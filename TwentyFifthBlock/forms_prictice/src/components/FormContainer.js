import React, { Component } from 'react';
import FormComponent from './FormComponent';

class FormContainer extends Component {
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
      <FormComponent
        onChangeHandler={this.onChangeHandler}
        {...this.state}
      />
    );
  }
}

export default FormContainer;
