export interface TodoFormData {
  todoName: string;
}

export interface TodoData extends TodoFormData {
  id: number;
}
