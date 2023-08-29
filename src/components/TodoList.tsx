import React, { useState } from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  initialTodos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ initialTodos }) => {
  const [newText, setText] = useState<string>("");
  const [newTodo, setTodo] = useState<Todo[]>(initialTodos);

  const handleAddTodo = () => {
    if (newText.trim() !== "") {
      const id = initialTodos.length + 1;
      const todo: Todo = { id, text: newText, completed: false };
      setTodo((prevTodos) => [...prevTodos, todo]);
      setText("");
    }
  };
  const handleToggleCompletion = (id: number) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-list">
      {newTodo.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggleCompletion={() => handleToggleCompletion(todo.id)}
        />
      ))}
      <div className="add-todo">
        <input
          type="text"
          value={newText}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
};
export default TodoList;
