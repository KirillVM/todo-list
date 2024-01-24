import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TaskRedactorData, TaskRedactorFormData } from '@src/components/TaskRedactor/TaskRedactor.interface';
import getDateNow from '@src/utils/getDateNow';


interface TaskData {
  id: number;
  name: string;
  description: string;
  status: 'complete' | 'progress' | 'expired';
  date: string[];
}

const initialState: TaskData[] = JSON.parse(localStorage.getItem('taskData') || 'null') || [] as TaskData[];

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setNewTask(state, action: PayloadAction<TaskRedactorFormData>) {
      const newTask: TaskData = {
        id: state.length,
        name: action.payload.taskName,
        description: action.payload.taskDescription,
        status: 'progress',
        date: [`create: ${getDateNow()}`]
      }
      return [...state, newTask];
    },
    updateTask(state, action: PayloadAction<TaskRedactorData>) {
      const updatedTask: TaskData = {
        id: action.payload.id,
        name: action.payload.taskName,
        description: action.payload.taskDescription,
        status: 'progress',
        date: [`update: ${getDateNow()}`]
      }
      return state.map((task) => {
        return task.id === updatedTask.id ? updatedTask : task;
      });
    },

    removeTask(state, action: PayloadAction<number>) {
      return state.filter((task: TaskData) => task.id !== action.payload)
    },
    completeTask(state, action: PayloadAction<number>) {
      return state.map((task: TaskData) => {
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