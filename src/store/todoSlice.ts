import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TaskRedactorData } from '@src/components/TaskRedactor/TaskRedactor.interface';
import getDateNow from '@src/utils/getDateNow';


interface TaskData {
  taskId: number;
  taskName: string;
  taskDescription: string;
  taskStatus: 'complete' | 'progress' | 'expired';
  date: string;
}

const initialState: TaskData[] = JSON.parse(localStorage.getItem('taskData') || "") || undefined;

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setNewTask(state, action: PayloadAction<TaskRedactorData>) {
      const newTask: TaskData = {
        taskId: state.length,
        taskName: action.payload.taskName,
        taskDescription: action.payload.taskDescription,
        taskStatus: 'progress',
        date: getDateNow()
      }
      state = [...state, newTask];
    },
    // updateTask(state, action: PayloadAction<TaskRedactorData>) {
    //   const newTask: TaskData = {
    //     taskId: 1,
    //     taskName: action.payload.taskName,
    //     taskDescription: action.payload.taskDescription,
    //     taskStatus: 'progress',
    //     date: getDateNow()
    //   }
    //   state = [...state, newTask];
    // },

    removeTask(state, action: PayloadAction<number>) {
      state = state.filter((task: TaskData) => task.taskId !== action.payload)
    },
    completeTask(state, action: PayloadAction<number>) {
      state = state.map((task: TaskData) => {
        if (task.taskId === action.payload) task.taskStatus = 'complete';
        return task;
      })
    },
  },
});

export const {
  setNewTask,
  removeTask,
  completeTask,
  // updateTask,
} = taskSlice.actions;
export default taskSlice.reducer;