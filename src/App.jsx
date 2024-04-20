import { useState } from "react";
import { uid } from "uid";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      tasks: [],
      addTask: (text) =>
        set((state) => ({
          tasks: [...state.tasks, { id: uid(), task: text }],
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: "task-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default function App() {
  const [inputText, setInputText] = useState("");
  const { addTask, tasks, deleteTask } = useStore();

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
              <button
                className="del"
                onClick={() => {
                  deleteTask(el.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
