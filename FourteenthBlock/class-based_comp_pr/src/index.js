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
import App from './components/App';

const maName = 'Sergey';

ReactDOM.render(<App username={maName} />, document.getElementById("root"));
