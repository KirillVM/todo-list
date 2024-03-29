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
        id: new Date().getTime(),
        name: action.payload.todoName,
        status: 'progress',
        date: getDateNow(),
      };
      return [...state, newTask];
    },
    removeTask(state, action: PayloadAction<number>) {
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
