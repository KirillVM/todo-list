import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TaskRedactorData } from '@src/components/TaskRedactor/TaskRedactor.interface';
import getDateNow from '@src/utils/getDateNow';


interface TaskData {
  id: number;
  name: string;
  description: string;
  status: 'complete' | 'progress' | 'expired';
  date: string[];
}

const initialState: TaskData[] = JSON.parse(localStorage.getItem('taskData') || "") || undefined;

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setNewTask(state, action: PayloadAction<TaskRedactorData>) {
      const newTask: TaskData = {
        id: action.payload.id,
        name: action.payload.taskName,
        description: action.payload.taskDescription,
        status: 'progress',
        date: [`create: ${getDateNow()}`]
      }
      state = [...state, newTask];
    },
    updateTask(state, action: PayloadAction<TaskRedactorData>) {
      const updatedTask: TaskData = {
        id: action.payload.id,
        name: action.payload.taskName,
        description: action.payload.taskDescription,
        status: 'progress',
        date: [`update: ${getDateNow()}`]
      }
      state = state.map((task) => {
        return task.id === updatedTask.id ? updatedTask : task;
      });
    },

    removeTask(state, action: PayloadAction<number>) {
      state = state.filter((task: TaskData) => task.id !== action.payload)
    },
    completeTask(state, action: PayloadAction<number>) {
      state = state.map((task: TaskData) => {
        if (task.id === action.payload) task.status = 'complete';
        return task;
      })
    },
  },
});

export const {
  setNewTask,
  removeTask,
  completeTask,
  updateTask,
} = taskSlice.actions;
export default taskSlice.reducer;