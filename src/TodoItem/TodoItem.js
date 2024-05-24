// src/TodoItem.js
import React from 'react';
import './styles.css';

function TodoItem(props) {
  return (
    <div className='todo-item'>
      <p className='item-text'>{props.text}</p>
      <button onClick={props.remove} className='item-button'>Delete</button>
    </div>
  );
}

export default TodoItem;
