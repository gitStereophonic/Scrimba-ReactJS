import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input checked={props.task.completed} type="checkbox" />
      <p>{props.task.text}</p>
    </div>
  )
}

export default TodoItem;
