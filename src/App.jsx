import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [count, setCount] = useState(1);

  const taskAddFunction = (e) => {
    e.preventDefault();
    setCount((prev) => {
      return prev + 1;
    });
    const task = {
      id: count,
      content: inputText,
    };
    setTaskList((prev) => [...prev, task]);
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
              {el.id} {el.content} <button className="del">Delete</button>
              <button>Done</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
