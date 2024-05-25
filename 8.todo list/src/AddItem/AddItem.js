// src/AddItem.js
import {React, useState} from 'react';
import './styles.css';

function AddItem(props) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    // previne que a tela recarregue antes de finalizar a funcao
    e.preventDefault();
    // chama a funcao add, passada via props
    props.add(text);
  }
  
  return (
    <form onSubmit={handleSubmit} className='add-item'>
      {/* vai  atualizar o state toda vez que o input for alterado*/}
      <input type="text" className='add-input' onChange={(e)=> setText(e.target.value)}/>
      <button type='submit' className='add-button'>Add</button>
    </form>
  );
}

export default AddItem;
