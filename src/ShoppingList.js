import React from 'react';

function ShoppingList({ items, onRemove }) {
  return (
    <ul className="space-y-2">
      {items.map(item => (
        <li key={item.id} className="flex justify-between items-center bg-white p-2 rounded shadow">
          <span>{item.text}</span>
          <button
            onClick={() => onRemove(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;