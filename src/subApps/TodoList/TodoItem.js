import { useState, useRef } from "react";

export function TodoItem({ name, itemArr, setItemArr }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    isChecked
      ? (text.current.style.textDecorationLine = "none")
      : (text.current.style.textDecorationLine = "line-through");
    setIsChecked(!isChecked);
  }

  function handleDelete() {
    let newArr = itemArr.filter((element) => element.name !== name);
    setItemArr(newArr);
  }

  const text = useRef(null);

  return (
    <>
      <div className="todo-item">
        <button className="todo-button" onClick={handleDelete}>
          X
        </button>
        <p ref={text} className="todo-p">
          {name}
        </p>
        <input
          type="checkbox"
          onClick={handleCheck}
          className="todo-box"
        ></input>
      </div>
    </>
  );
}
