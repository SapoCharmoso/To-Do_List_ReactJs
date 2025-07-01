import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  // terminar de fazer o handleSubmit
  function handleSubmit(e) {
    e.preventDefault();

    setTodos(...[todos], {
      id: crypto.randomUUID,
      title: newItem,
      completed: false,
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="item-form">
        <div className="form-row">
          <label htmlFor="item">Novo Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
          />
        </div>
        <button className="btn-add">Add</button>
      </form>
      <h1 className="">Todo List</h1>
      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            item 1
          </label>
          <button>delete</button>
        </li>
      </ul>
    </>
  );
}
