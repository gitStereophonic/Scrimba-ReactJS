/**
 * @author Raccoon Developer
 * @date 04.04.2019
 *
 * Create the boilerplate to get React to render something on the screen
 * Render an <App /> component, which you'll need to create separately
 * 
 * Create 2 new components - Header and MemeGenerator
 * Header will only display things
 * MemeGenerator will be calling to an API and holding on to data
 * Each should be in their own file of the same name
 */

import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById("root"));
