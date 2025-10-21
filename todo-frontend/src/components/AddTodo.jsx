import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (todoName && dueDate) {
      onNewItem(todoName, dueDate);
      setDueDate("");
      setTodoName("");
    }
  };

  return (
    <div className="flex gap-4 mb-8 items-center justify-center">
      <input
        type="text"
        placeholder="Enter Todo Here"
        value={todoName}
        onChange={handleNameChange}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="date"
        value={dueDate}
        onChange={handleDateChange}
        min={new Date().toISOString().split('T')[0]}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={handleAddButtonClicked}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
