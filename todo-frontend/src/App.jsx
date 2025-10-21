import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useEffect, useState } from "react";
import { addItemToServer, deleteItemFromServer, getItemFromServer } from "./services/itemService";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemFromServer().then(initialItems => {
      setTodoItems(initialItems);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const item = await addItemToServer(itemName, itemDueDate);
    const newTodoItems = [
      ...todoItems,
      item,
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    const newTodoItems = todoItems.filter((item) => item.id !== deletedId);
    setTodoItems(newTodoItems);
  };

  const handleToggleComplete = async (id) => {
    const updatedTodoItems = todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoItems(updatedTodoItems);
    // Add API call here if you want to persist the completion state
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
          onToggleComplete={handleToggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
