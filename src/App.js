import React, { useState, useEffect } from 'react'; // <-- Add useEffect
import AddItemForm from './AddItemForm';
import ShoppingList from './ShoppingList';

function App() {
  const [items, setItems] = useState([]);

  // Load items from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('shoppingList');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  // Save items to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  const addItem = (text) => {
    setItems([...items, { id: Date.now(), text }]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="shopping-list-container">
      <div className="shopping-list">
        <h1 className="text-3xl font-bold mb-4 text-center">🛒 My Shopping List</h1>
        <AddItemForm onAdd={addItem} />
        <ShoppingList items={items} onRemove={removeItem} />
      </div>
    </div>
  );
}

export default App;