// src/TodoList.js
import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './styles.css';
import AddItem from '../AddItem/AddItem';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Aprender React' },
    { id: 2, text: 'Construir um projeto' },
    { id: 3, text: 'Publicar no GitHub' }
  ]);
  const handleRemove = (id) => {
    //atualiza o state, filtrando todos os todos, e 'nao deixando passar'o que tiver id igual ao passado
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleAdd = (text) => {
    //cria um novo elemento para ser adicionado n todo
    const newTodo = {
      id: todos.length + 1, 
      text: text
    };
    // atualiza o state todo, adiconando o novo elemento
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <AddItem add={(text) => handleAdd(text)}/>
      {todos.map(todo => (
        <TodoItem key={todo.id} text={todo.text} remove={() => handleRemove(todo.id)} />
      ))}
    </div>
  );
}

export default TodoList;
