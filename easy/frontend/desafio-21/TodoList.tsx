import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Buy groceries", done: false },
    { id: 2, text: "Read a book", done: true },
  ]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  }

  function toggleTodo(id: number) {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          // Bug: usando index como key em lista dinâmica
          <li key={index} onClick={() => toggleTodo(todo.id)}>
            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
