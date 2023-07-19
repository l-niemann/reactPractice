import { useRef, useState } from "react";
import { useOnClickOutside } from "./useOnClickOutside";

export function InputToggle({notesArr, setNotesArr}) {
  const [isActive, setIsActive] = useState(true);
  const ref = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  useOnClickOutside(ref, () => {
    setIsActive(true);
  });

  function handleAdd() {
    let isUnique = true;
    notesArr.forEach(element => {
      if (element.title === titleRef.current.value){
        alert("ERROR: Notes require unique titles");
        isUnique = false;
      }
    });
    if (isUnique){
      let newNode = {
        title: titleRef.current.value,
        desc: descRef.current.value,
      };
      setNotesArr([...notesArr,newNode]);
      console.log(notesArr);
    }
}

  return (
    <div>
      {isActive ? (
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          Add note
        </button>
      ) : (
        <div ref={ref}>
          <label htmlFor="title">Title: </label>
          <input id="title" type="text" ref={titleRef} />
          <br />
          <label htmlFor="desc">Content: </label>
          <input id="desc" type="text" ref={descRef} />
          <button onClick={handleAdd}>Add</button>
        </div>
      )}
    </div>
  );
}
