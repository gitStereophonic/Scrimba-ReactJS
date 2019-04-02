/**
 * @author Raccoon Developer
 * @date 04.02.2019
 * 
 * Challenge: Get rid of our warning about not having an onChange on our input. For now, the function that runs onChange can simply console.log something.
 */

import React from "react"

function handleOnChange() {
  console.log("Changed!");
}

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed} onChange={handleOnChange} />
      <p>{props.item.text}</p>
    </div>
  )
}

export default TodoItem
