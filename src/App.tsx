import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const Todos = [
    { id: 1, text: "Learn react", completed: false },
    { id: 2, text: "Build a todo app", completed: true },
  ];

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="list">
        <TodoList initialTodos={Todos} />
      </div>
    </div>
  );
};

export default App;
