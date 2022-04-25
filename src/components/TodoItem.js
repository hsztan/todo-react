/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function TodoItem(props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChangeProps(props.todo.id)}
      />
      {props.todo.title}
      <button
        type="button"
        onClick={() => {
          props.deleteTodoProps(props.todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
