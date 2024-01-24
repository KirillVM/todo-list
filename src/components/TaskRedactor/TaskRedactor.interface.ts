export interface TaskRedactorFormData {
  taskName: string;
  taskDescription: string;
}

export interface TaskRedactorData extends TaskRedactorFormData {
  id: number;
}