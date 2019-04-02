import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // GET the data I need to correctly display
  }

  // deprecated: UNSAFE_componentWillReceiveProps
  componentWillReceiveProps(nextProps) {
    // every time component takes new props
    if (nextProps.whatever !== this.props.whatever) {
      // do something important here
    }
  }

  // for optimization. if unnecessary re-render take too much
  // time or resources
  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

  componentWillUnmount() {
    // teardown or cleanup your code before component disappears
    // (E.g. remove event listeners) 
  }

  render() {
    return (
      <div>
        Code goes here
      </div>
    );
  }
}

export default App;
