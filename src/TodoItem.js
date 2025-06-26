import React from 'react';
import './TodoItem.css'; 


const TodoItem = ({ todo, onToggle, onDelete }) => (
    <li style={{
       textDecoration: todo.completed ? 'line-through' : 'none', 
       margin: '8px 0'
    }}>
      <input
         type="checkbox"
         checked={todo.completed}
         onChange={() => onToggle(todo.id)}
      />
      {todo.text}
      <button onClick={() => onDelete(todo.id)} className='delete-btn'>❌</button>
    </li>
);

export default TodoItem;