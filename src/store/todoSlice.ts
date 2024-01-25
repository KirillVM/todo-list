import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodoFormData } from '@src/components/TodoForm/TodoForm.interface';
import getDateNow from '@src/utils/getDateNow';
import { TaskData } from './todoState.interface';

const todoSlice = createSlice({
  name: 'tasks',
  initialState: [] as TaskData[],
  reducers: {
    addNewTask(state, action: PayloadAction<TodoFormData>) {
      const newTask: TaskData = {
        id: state.length,
        name: action.payload.taskName,
        status: 'progress',
        date: getDateNow(),
      };
      return [...state, newTask];
    },
    removeTask(state, action: PayloadAction<number>) {
      console.log(state.filter((task: TaskData) => task.id !== action.payload));
      return state.filter((task: TaskData) => task.id !== action.payload);
    },
    setTaskComplete(state, action: PayloadAction<number>) {
      state.map((task: TaskData) => {
        if (task.id === action.payload) task.status = 'complete';
        return task;
      });
    },
    setTaskInProgress(state, action: PayloadAction<number>) {
      state.map((task: TaskData) => {
        if (task.id === action.payload) task.status = 'progress';
        return task;
      });
    },
  },
});

export const { addNewTask, removeTask, setTaskComplete, setTaskInProgress } =
  todoSlice.actions;

export default todoSlice.reducer;
