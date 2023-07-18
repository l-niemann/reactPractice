import { Note } from "./Note";
import { HomeLink } from "../../HomeLink";
import { InputToggle } from "./InputToggle";
import { useState } from "react";

export function Notes() {
  const [notesArr, setNotesArr] = useState([]);
  //TODO: Make this look a little nicer. Add delete button
  return (
    <div>
      <HomeLink />
      <h1>Notes</h1>
      <InputToggle notesArr={notesArr} setNotesArr={setNotesArr} />
      {
        //TODO: Make each note have a unique key and make input...
        //titles be different
      }
      {notesArr.map((note) => {
        console.log(notesArr);
        return <Note title={note.title} desc={note.desc} />;
      })}
    </div>
  );
}
