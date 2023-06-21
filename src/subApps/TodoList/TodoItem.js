import { useState, useRef } from "react";

export function TodoItem({name, itemArr, setItemArr}) {
    const [isChecked, setIsChecked] = useState(false);

    function handleCheck(){
        if(isChecked){
            setIsChecked(false);
            text.current.style.textDecorationLine = "none";
        } else {
            setIsChecked(true);
            text.current.style.textDecorationLine = "line-through";
        }
    }

    function handleDelete(){
        let newArr = itemArr.filter((element) => {
            if (element.name !== name){
                return element;
            }
        })
        setItemArr(newArr);
    }

    const text = useRef(null);

  return (
    <>
      <div className="todo-item">
        <button className="todo-button" onClick={handleDelete}>X</button>
        <p ref={text} className="todo-p">{name}</p>
        <input type="checkbox" onClick={handleCheck} className="todo-box"></input>
      </div>
    </>
  );
}
