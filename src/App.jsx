import { useState } from "react";
import { uid } from "uid";
import { create } from "zustand";

function App() {
  const [inputText, setInputText] = useState("");

  const useTasks = create((set) => ({
    tasks: [],
    addTask: (text) =>
      set((state) => {
        const newTask = { id: uid(), task: text };
        return { tasks: [...state.tasks, newTask] };
      }),
  }));

  const addTask = useTasks((state) => state.addTask);
  const tasks = useTasks((state) => state.tasks);

  const addTaskToList = (e) => {
    e.preventDefault();
    addTask(inputText);
    setInputText("");
  };

  const inputChange = (e) => {
    setInputText(e.target.value);
  };

  const deleteTaskFromList = (id) => {
    dispatch(deleteTask(id));
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
                  deleteTaskFromList(el.id);
                }}
              >
                Delete
              </button>
              <button>Done</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
