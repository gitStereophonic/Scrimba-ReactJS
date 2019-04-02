import React, { Component } from "react";

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // will be new soon
  static getDerivedStateFromProps(props, state) {
    // return the new, updated state based upon the props
    // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  }

  // will be new soon
  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
    // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  }

  // deprecated
  // componentWillMount() {
  // }

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

  // for optimization. if unnecessary re-render take too much`
  // time or resources
  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

  // deprecated
  // componentWillUpdate() {
  // }

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
