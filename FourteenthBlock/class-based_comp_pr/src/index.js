/*
 * @author Raccoon Developer
 * @date 04.02.2019
 *
 * Challenge:
 *   1. Convert all 3 components to be class-based
 *   2. Fix the small bug
 */

import React from "react";
import ReactDOM from "react-dom";

import './style.css';

// #1
function App() {
  return (
    <div>
      <Header username='Sergey' />
      <Greeting />
    </div>
  );
}

// #2
function Header(props) {
  return (
    <header>
      <p>Welcome, {props.username}!</p>
    </header>
  );
}

// #3
function Greeting() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }
  return (
    <h1>Good {timeOfDay} to you, sir or madam!</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
