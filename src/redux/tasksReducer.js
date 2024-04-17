import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

const slice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask(state, action) {
      state.push({
        id: uid(),
        task: action.payload,
      });
    },
    deleteTask(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = slice.actions;
const tasksReducer = slice.reducer;
export default tasksReducer;
