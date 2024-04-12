import { createSlice } from "@reduxjs/toolkit";

const tasks = [];

const slice = createSlice({
  name: "tasks",
  initialState: tasks,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    deleteTask(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = slice.actions;
export const tasksReducer = slice.reducer;
