function TodoItem({ id, todoName, todoDate, completed, onDeleteClick, onToggleComplete }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className={`flex items-center justify-between bg-white p-4 rounded-lg shadow mb-4 ${completed ? 'opacity-70' : ''}`}>
      <div className="flex items-center space-x-4 flex-1">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleComplete(id)}
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <h3 className={`text-lg font-medium ${completed ? 'line-through text-gray-500' : ''}`}>
          {todoName}
        </h3>
      </div>
      <div className="flex-1">
        <p className="text-gray-600">{formatDate(todoDate)}</p>
      </div>
      <button
        onClick={() => onDeleteClick(id)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
