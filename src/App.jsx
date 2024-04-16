import { useState } from "react";
import { uid } from "uid";
import { create } from "zustand";

const useStore = create((set) => ({
  tasks: [
    { id: "fdsfs", task: "do something" },
    { id: "kokn", task: "do something else" },
  ],
  addTask: (text) =>
    set((state) => ({
      tasks: [...state.tasks, { id: uid(), task: text }],
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: [...state.tasks, { id: uid(), task: text }],
    })),
}));

export default function App() {
  const [inputText, setInputText] = useState("");
  const { addTask, tasks } = useStore();

  const inputChange = (e) => {
    setInputText(e.target.value);
  };

  const addTaskToList = (e) => {
    e.preventDefault();
    if (inputText == "") {
      return;
    }
    addTask(inputText);
    setInputText("");
  };

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          addTaskToList(e);
        }}
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            inputChange(e);
          }}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((el) => {
          return (
            <li key={el.id}>
              {el.task}
              <button className="del">Delete</button>
              <button>Done</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
