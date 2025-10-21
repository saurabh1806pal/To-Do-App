import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems, onDeleteClick, onToggleComplete }) {
  const incompleteTasks = todoItems
    .filter((item) => !item.completed)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  const completedTasks = todoItems
    .filter((item) => item.completed)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  return (
    <div className="space-y-4">
      {/* Incomplete Tasks Section */}
      {incompleteTasks.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Tasks To Do
          </h2>
          {incompleteTasks.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              todoDate={item.dueDate}
              todoName={item.name}
              completed={item.completed}
              onDeleteClick={onDeleteClick}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      )}

      {/* Separator and Completed Tasks Section */}
      {completedTasks.length > 0 && (
        <div className="mt-8">
          <div className="border-t-2 border-gray-200 mb-6"></div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Completed Tasks
          </h2>
          {completedTasks.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              todoDate={item.dueDate}
              todoName={item.name}
              completed={item.completed}
              onDeleteClick={onDeleteClick}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoItems;
