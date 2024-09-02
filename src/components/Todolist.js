import React, { useState } from 'react';

export const Todolist = () => {
  const [state, setState] = useState([]); // Start with an empty array
  const [name, setName] = useState("");
  const [id, setId] = useState(0);

  function addfnc() {
    setId(id + 1); // Increment id before adding
    setState([...state, { name: name, id: id }]);
    setName(""); // Clear input after adding
  }

  function deleteItem(id) {
    const newState = state.filter(item => item.id !== id);//filters the list with the ele such that all ele where id!=desired id gets passed
    setState(newState);
  }

  function Ele(props) {
    return (
    <div className='list_divider'>
      <div className='list_ele'>
        <li><b>{props.task.name}</b></li>
        <button onClick={() => props.onDelete(props.task.id)}>-</button>
      </div>
      <p className='divider'>________________________________________________________________________</p>
    </div>
    );
  }

  return (

    <div className='container'>
        <h1>To Do List</h1>
      <ul>
        {state.map((item) => (
          <Ele 
          
            task={item} 
            onDelete={deleteItem} 
          />
        ))}
      </ul>

      <input 
        type="text" 
        placeholder="Enter task to be completed" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />

      <button onClick={addfnc}>+</button>
    </div>
  );
}
