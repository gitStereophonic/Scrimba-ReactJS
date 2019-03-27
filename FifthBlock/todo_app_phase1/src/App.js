/* 
 * @author Raccoon Developer
 * @date 03.26.2019
 *
 * Task Todo-app Phase 1
 * From scratch, initialize the React app
 * Render an <App /> component
 * Create the <App /> component from scratch
 * Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
 * like you're making a todo list with some hard-coded items on it
 */

import React from 'react';

function App() {
  return (
    <div>
      <input type='checkbox' />
      <p>Task #1</p>

      <input type='checkbox' />
      <p>Task #2</p>

      <input type='checkbox' />
      <p>Task #3</p>

      <input type='checkbox' />
      <p>Task #4</p>
    </div>
  );
}

export default App;
