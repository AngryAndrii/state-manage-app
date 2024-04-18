import { useState } from "react";
import { uid } from "uid";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [inputText, setInputText] = useState("");

  const taskAddFunction = (e) => {
    e.preventDefault();
    const task = {
      id: uid(),
      content: inputText,
    };
    setTaskList((prev) => [...prev, task]);
    setInputText("");
  };

  const deleteTaskFunction = (taskId) => {
    setTaskList(taskList.filter((el) => el.id !== taskId));
  };

  const inputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          taskAddFunction(e);
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
        {taskList.map((el) => {
          return (
            <li key={el.id}>
              {el.content}
              <button
                className="del"
                onClick={() => {
                  deleteTaskFunction(el.id);
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

export default App;
