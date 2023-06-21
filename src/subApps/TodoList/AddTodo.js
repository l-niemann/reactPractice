import { useState, useEffect, useRef } from "react";

export function AddTodo({ todoArr, setTodoArr, cls }) {
  const [inputIsActive, setInputIsActive] = useState(false);

  function handleButton() {
    setInputIsActive(!inputIsActive);
  }

  function handleSubmit(e) {
    if (e.keyCode === 13) {
        let addItem = true;
      todoArr.forEach((element) => {
        if (element.name === e.target.value) {
          alert("Cannot enter two items with the same name");
          addItem = false;
        }
      });
      if (addItem){
          setTodoArr([...todoArr, { name: e.target.value }]);
          setInputIsActive(false);
      }
    }
  }

  useEffect(() => {
    const listener = window.addEventListener("click", (e) => {
      if (e.target !== buttonRef.current && e.target !== inputRef.current) {
        setInputIsActive(false);
      }
    });
    return window.removeEventListener("click", listener);
  }, []);

  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  return (
    <>
      <div>
        <button className={cls} ref={buttonRef} onClick={handleButton}>
          +
        </button>
        {inputIsActive ? (
          <input
            className={`input-${cls}`}
            ref={inputRef}
            onKeyDown={(e) => handleSubmit(e)}
          ></input>
        ) : null}
        <br />
      </div>
    </>
  );
}
