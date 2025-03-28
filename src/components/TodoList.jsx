import React from 'react';
import { X, Check } from 'lucide-react';

const TodoList = ({ todos, toggleTodo, deleteTodo, filter }) => {
  // Filter todos based on the current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="space-y-2">
      {filteredTodos.map(todo => (
        <div 
          key={todo.id} 
          className={`flex items-center p-3 rounded-lg transition duration-300 ${
            todo.completed 
              ? 'bg-green-100 line-through text-gray-500' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="mr-3 form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="flex-grow">{todo.text}</span>
          <button 
            onClick={() => deleteTodo(todo.id)} 
            className="text-red-500 hover:text-red-700 transition duration-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ))}
      
      {/* Task Count */}
      <div className="mt-4 text-center text-gray-600">
        {filteredTodos.length} task(s) {filter} 
      </div>
    </div>
  );
};

export default TodoList;


