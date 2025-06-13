import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem("todos");
  try {
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});

  const [input, setInput] = useState("");

  // Load from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: uuidv4(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
    setTodos([])
  };

  return (
    <div className="container">
      <h1 className="header"><span className="check">TO</span>DO</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>ADD</button>
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>

      <div className="clear-btn" onClick={clearCompleted}>
        🧹 Clear Completed
      </div>
    </div>
  );
}

export default App;
