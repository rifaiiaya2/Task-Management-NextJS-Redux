import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

export interface TaskInterface {
  id: string;
  name: string;
  completed: boolean;
}
interface TasksState {
  tasks: TaskInterface[];
  loading: boolean;
}
const initialState: TasksState = {
  tasks: [],
  loading: false,
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskInterface>) => {
      state.tasks.push(action.payload);
    },

    toggleTask: (state, action: PayloadAction<string>) => {
      const taskIndex = state.tasks.findIndex((t) => t.id === action.payload);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
      }
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});
export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export const selectTasks = (state: RootState) => state.tasks.tasks;

export default tasksSlice.reducer;
