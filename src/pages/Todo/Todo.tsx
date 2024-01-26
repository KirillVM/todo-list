import TaskList from '@src/components/TaskList/TaskList';
import TodoForm from '@src/components/TodoForm/TodoForm';

const TodoPage = (): JSX.Element => {
  return (
    <>
      <TodoForm />
      <TaskList />
    </>
  );
};

export default TodoPage;
