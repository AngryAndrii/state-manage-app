import { useState } from "react";
import { uid } from "uid";
import { create } from "zustand";

function App() {
  const [inputText, setInputText] = useState("");

  const useStore = create((set) => ({
    tasks: [
      { id: "fdfsdfsdf", task: "lolo lolo lo" },
      { id: "dwefe", task: "roooo koko ko" },
    ],
    count: 0,
    addTask: (text) =>
      set((state) => ({
        tasks: [{ id: uid(), task: text }, ...state.tasks],
      })),
    plus: () => set((state) => ({ count: state.count + 1 })),
  }));

  const addTask = useStore((state) => state.addTask);
  const tasks = useStore((state) => state.tasks);

  const { count, plus } = useStore();

  const addTaskToList = (e) => {
    e.preventDefault();
    plus;
    addTask({ text: inputText });
    setInputText("");
  };

  const inputChange = (e) => {
    setInputText(e.target.value);
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
      <div>{count}</div>
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

export default App;

// const useStore = create((set) => ({
//   count: 0,
//   plus: () => set((state) => ({ count: state.count + 1 })),
// }));

// export default function App() {
//   const { plus, count } = useStore();

//   return (
//     <main>
//       <h2>{count}</h2>
//       <div className="btn-box">
//         <button onClick={plus} className="btn decrement">
//           +
//         </button>
//       </div>
//     </main>
//   );
// }
