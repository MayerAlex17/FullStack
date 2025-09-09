import React, { useState } from 'react';
import AddItemForm from './AddItemForm';
import ShoppingList from './ShoppingList';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    setItems([...items, { id: Date.now(), text }]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">🛒 My Shopping List</h1>
      <AddItemForm onAdd={addItem} />
      <ShoppingList items={items} onRemove={removeItem} />
    </div>
  );
}

export default App;