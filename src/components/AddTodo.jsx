import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      const newTodo = {
        id: Date.now(),
        text: newTodoText,
        completed: false
      };
      addTodo(newTodo);
      setNewTodoText('');
    }
  };

  return (
    <div className="flex mb-4">
      <input 
        type="text" 
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
        placeholder="Add a new task" 
        className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        onClick={handleAddTodo} 
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;