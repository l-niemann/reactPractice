import { Note } from "./Note";
import { HomeLink } from "../../HomeLink";
import { InputToggle } from "./InputToggle";
import { useState } from "react";

export function Notes() {
  const [notesArr, setNotesArr] = useState([]);
  //TODO: Make this look a little nicer. Add delete button. Clean up logs
  return (
    <div>
      <HomeLink />
      <h1>Notes</h1>
      <InputToggle notesArr={notesArr} setNotesArr={setNotesArr} />
      {notesArr.map((note) => {
        console.log(notesArr);
        return <Note key={note.title} title={note.title} desc={note.desc} />;
      })}
    </div>
  );
}
