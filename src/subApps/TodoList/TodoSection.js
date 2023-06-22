import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { AddTodo } from "./AddTodo";

export function TodoSection({ name, sectionArr, setSectionArr }) {
  const [itemArr, setItemArr] = useState([]);

  function handleDelete() {
    let newArr = sectionArr.filter((element) => element.name !== name);
    setSectionArr(newArr);
  }

  return (
    <>
      {itemArr.length === 0 ? (
        <button className="todo-section-button" onClick={handleDelete}>
          X
        </button>
      ) : null}
      <h2 className="todo-section-p">{name}:</h2>
      {itemArr.map((item) => {
        return (
          <TodoItem
            key={item.name}
            name={item.name}
            itemArr={itemArr}
            setItemArr={setItemArr}
          />
        );
      })}
      <AddTodo todoArr={itemArr} setTodoArr={setItemArr} cls={"add-item"} />
    </>
  );
}
