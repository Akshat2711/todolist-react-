import React, { useState } from 'react';

export const Todolist = () => {
  const [state, setState] = useState([]); // Start with an empty array
  const [name, setName] = useState("");
  const [id, setId] = useState(0);

  function addfnc() {
    setId(id + 1); // Increment id before adding
    setState([...state, { name: name, id: id, completed: false }]);
    setName(""); // Clear input after adding
  }

  function deleteItem(id) {
    const newState = state.filter(item => item.id !== id); // Filters out the item with the specified id
    setState(newState);
  }

  function completeItem(id) {
    const newState = state.map(item => 
      item.id === id ? { ...item, completed: true } : item // Set `completed` to true for the matching item
    );
    setState(newState);
  }

  function Ele(props) {
    return (
      <div className='list_divider'>
        <div className='list_ele'>
          <li><b>{props.task.name}</b></li>
          <button onClick={() => props.onDelete(props.task.id)}>-</button>
          <button onClick={() => props.onComplete(props.task.id)}>✓</button>
        </div>
        <p className='divider'>________________________________________________________________________</p>
      </div>
    );
  }

  function Compele(props) {
    return (
      <div className='list_divider'>
        <div className='list_ele'>
          <li><b>{props.task.name}</b></li>
        </div>
        <p className='divider'>________________________________________________________________________</p>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>To Do List</h1>
      
      <ul>
        {state.filter(item => !item.completed).map((item) => (
          <Ele 
            key={item.id}
            task={item} 
            onDelete={deleteItem} 
            onComplete={completeItem}
          />
        ))}
      </ul>

      <ul>
        {state.filter(item => item.completed).map((item) => (
          <Compele
            key={item.id}
            task={item} 
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
