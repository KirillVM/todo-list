export interface TodoFormData {
  taskName: string;
}

export interface TodoData extends TodoFormData {
  id: number;
}
