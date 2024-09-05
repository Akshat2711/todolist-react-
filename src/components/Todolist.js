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
          <li className='uncomp_li'><b>{props.task.name}</b></li>
          <button onClick={() => props.onDelete(props.task.id)} className='deletebtn'>Delete 🗑️</button>
          <button onClick={() => props.onComplete(props.task.id)} className='addbtn'>Mark Done ✓</button>
        </div>
        <p className='divider'>_____________________________________________________________________</p>
      </div>
    );
  }

  function Compele(props) {
    return (
      <div className='list_divider'>
        <div className='list_ele'>
          <li className='compl_li'><b>{props.task.name}</b></li>
        </div>
        <p className='divider'>_____________________________________________________________________</p>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1 className='first_head'>To Do List</h1>
      
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


<h1 className='comp_heading'><b>Completed</b></h1>


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

      <button onClick={addfnc} className='addlist_btn'>Add Item +</button>
    </div>
  );
}
