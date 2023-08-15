import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import UUID library
import InputData from './inputData';
import Items from './items';

const TodosLogic = () => {
  const [data, setData] = useState('');
  const [items, setItems] = useState([]);

  const handleInput = (event) => {
    setData(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newItem = {
        id: uuidv4(),
        text: data,
      };

      setItems((prevItems) => [...prevItems, newItem]);
      setData('');
    }
  };

  return (
    <div className="todosLogic">
      <InputData
        value={data}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <Items items={items} />
      <button type="button" className="delBtn">Delete</button>
    </div>
  );
};

export default TodosLogic;
