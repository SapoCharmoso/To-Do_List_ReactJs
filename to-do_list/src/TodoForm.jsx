import { useState } from "react";

export function TodoForm(props) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "");

    props.onSubmit(newItem);

    setNewItem("");
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
    </>
  );
}
