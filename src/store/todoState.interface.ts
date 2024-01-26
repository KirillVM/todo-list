export interface TaskData {
  id: number;
  name: string;
  status: 'complete' | 'progress' | 'expired';
  date: string;
}
