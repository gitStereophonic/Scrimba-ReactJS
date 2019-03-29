/*
 * @author Raccoon Developer
 * @date 03.29.2019
 *
 * Time to have fun styling! But first things first: 
 *
 * 1. Change the input/p combo below to be a new component called <TodoItem />. <TodoItem /> (for now) will just have the same displayed data below (every todo item is the same) hardcoded inside of it. (We'll learn soon how to make the TodoItem more flexible)
 *
 * 2. Style up the page however you want! You're welcome to use regular CSS (in the CSS file) or inline styles, or both!
 */

import React, { Component } from 'react';

import TodoItem from './components/TodoItem';

class App extends Component {
  render() {
    return (
      <div className='todo-list'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}

export default App;
