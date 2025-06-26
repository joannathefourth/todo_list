import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';


const App = () => {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });
    const [input, setInput] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos([...todos, { id: Date.now(), text:input, completed: false }]);
        setInput('');
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => 
            todo.id !== id));
    };

    return (
     <div style={{ padding: 20 }}>
        <h1>To-Do List</h1>
        <form onSubmit={addTodo}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Add a task...'
          />
          <button type="submit">Add</button>
        </form>
        <TodoList
          todos={todos}
          onToggle={toggleComplete}
          onDelete={deleteTodo}
        />
     </div>
    );
};

export default App; 