import { useState } from "react";
import { HomeLink } from "../../HomeLink";
import { TodoSection } from "./TodoSection";
import { AddTodo } from "./AddTodo";

export function TodoList() {
  const [sectionArr, setSectionArr] = useState([]);

  return (
    <>
      <HomeLink />
      <h1>Todo List:</h1>
      {sectionArr.map((section) => {
        return (
          <TodoSection
            key={section.name}
            name={section.name}
            sectionArr={sectionArr}
            setSectionArr={setSectionArr}
          />
        );
      })}
      <AddTodo
        todoArr={sectionArr}
        setTodoArr={setSectionArr}
        cls={"todo-section"}
      />
    </>
  );
}
