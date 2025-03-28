import React, { useState, useEffect } from 'react';
import { ListTodo } from 'lucide-react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load todos from local storage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storedTodos);
  }, []);

  // Save todos to local storage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-xl"> {/* shadow-lg */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center">
        <ListTodo className="mr-3 text-blue-600" /> Todo List
      </h1>
      
      {/* Add Todo Component */}
      <AddTodo addTodo={addTodo} />
      
      {/* Filter Component */}
      <div className="flex justify-center mb-4 space-x-2">
        <button 
          onClick={() => setFilter('all')} 
          className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('pending')} 
          className={`px-3 py-1 rounded ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Pending
        </button>
        <button 
          onClick={() => setFilter('completed')} 
          className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Completed
        </button>
      </div>
      
      {/* Todo List Component */}
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo}
        filter={filter}
      />
    </div>
  );
};

export default TodoApp;