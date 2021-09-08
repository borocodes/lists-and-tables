const groceryItems = ["Bananas", "Apples", "Oranges"];

// GroceryList.js
export function GroceryList({ items }) {
    const list = items.map((item, index) => <li key={index}>{item}</li>);
    return <ul>{list}</ul>;
  }

