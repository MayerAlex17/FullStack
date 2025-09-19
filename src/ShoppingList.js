import React from 'react';
import './ShoppingList.css';

function ShoppingList({ items, onRemove }) {
  return (
    <ul className="space-y-2">
      {items.map(item => (
        <li key={item.id} className="shopping-list-item">
          <span className="item-text">{item.text}</span>
          <button
            className="remove-btn bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.text}`}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;