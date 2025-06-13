import React, { useState } from "react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

export default function Todo({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    if (!text.trim()) return;
    editTodo(todo.id, text);
    setEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "done" : ""}`}>
      <div className="left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <span>{todo.text}</span>
        )}
      </div>
      <div className="actions">
        {isEditing ? (
          <FaCheck className="icon green" onClick={handleSave} />
        ) : (
          <FaEdit className="icon blue" onClick={() => setEditing(true)} />
        )}
        <FaTrash className="icon red" onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
}
