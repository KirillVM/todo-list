import styles from './TaskList.module.scss';
import { useAppSelector } from '@src/store/hooks';
import TodoItem from './TodoItem/TodoItem';
import clsx from 'clsx';
import { RootState, getTasksData } from '@src/store/store';

const TaskList = (): JSX.Element => {
  const data = useAppSelector((rootState: RootState) =>
    getTasksData(rootState)
  );
  return (
    <>
      <section className={clsx(styles.container, styles.border)}>
        <h3>InProgress</h3>
        {data &&
          data.map((task) => {
            if (task.status === 'progress')
              return <TodoItem key={task.id} taskData={task} />;
          })}
      </section>
      <section className={clsx(styles.container)}>
        <h3>Complete</h3>
        {data &&
          data.map((task) => {
            if (task.status === 'complete')
              return <TodoItem key={task.id} taskData={task} />;
          })}
      </section>
    </>
  );
};

export default TaskList;
