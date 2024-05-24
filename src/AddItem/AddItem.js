// src/AddItem.js
import {React, useState} from 'react';
import './styles.css';

function AddItem(props) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(text);
  }
  
  return (
    <form onSubmit={handleSubmit} className='add-item'>
      <input type="text" className='add-input' onChange={(e)=> setText(e.target.value)}/>
      <button type='submit' className='add-button'>Add</button>
    </form>
  );
}

export default AddItem;
