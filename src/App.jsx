import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "./redux/tasksReducer";

function App() {
  const [inputText, setInputText] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const addTaskToList = (e) => {
    e.preventDefault();
    dispatch(addTask(inputText));
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
