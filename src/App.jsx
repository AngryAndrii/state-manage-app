import { useState } from "react";
import tasks from "./tasks";

function App() {
  console.log(tasks);
  const [taskList, setTaskList] = useState(tasks);
  const taskAddFunction = (e) => {
    event.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          taskAddFunction(e);
        }}
      >
        <input type="text" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {taskList.map((el) => {
          return (
            <li key={el.id}>
              {el.id} {el.content} <button>Delete</button> <button>Done</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
