// src/TodoItem.js
import React from 'react';
import './styles.css';

function TodoItem(props) {
  return (
    <div className='todo-item'>
      {/* vai dispor o texto, passado via props */}
      <p className='item-text'>{props.text}</p>
      {/* vai chamar a funcao de remover, passada via props */}
      <button onClick={props.remove} className='item-button'>Delete</button>
    </div>
  );
}

export default TodoItem;
