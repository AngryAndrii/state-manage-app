import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksReducer";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
