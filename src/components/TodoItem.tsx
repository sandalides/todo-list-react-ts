import React, { useState } from "react";

interface TodoItemProps {
  text: string;
  completed: boolean;
  onToggleCompletion: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  completed,
  onToggleCompletion,
}) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleClick = () => {
    onToggleCompletion();
  };

  return (
    <div
      className={`todo-item ${completed ? "completed" : ""}`}
      onClick={handleClick}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className={isChecked ? "completed" : ""}>{text}</span>
    </div>
  );
};

export default TodoItem;
