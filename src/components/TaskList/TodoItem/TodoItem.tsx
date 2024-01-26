import styles from './TodoItem.module.scss';
import removeSVG from '@assets/delete.svg';
import completeSVG from '@assets/complete.svg';
import inProgressSVG from '@assets/in-progress.svg';
import { MouseEvent } from 'react';
import { TaskProps } from './TodoItem.interface';
import { useAppDispatch } from '@src/store/hooks';
import {
  removeTask,
  setTaskComplete,
  setTaskInProgress,
} from '@src/store/todoSlice';
import clsx from 'clsx';

const TodoItem = (taskProps: TaskProps): JSX.Element => {
  const { taskData } = taskProps;
  const dispatch = useAppDispatch();

  const handleCompleteClick = () => {
    dispatch(setTaskInProgress(taskData.id));
  };

  const handleInProgressClick = () => {
    dispatch(setTaskComplete(taskData.id));
  };

  const handleRemoveClick = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    dispatch(removeTask(taskData.id));
  };

  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles['status-container'])}>
        {taskData.status === 'complete' ? (
          <img
            className={clsx(styles['checkbox-image'])}
            src={completeSVG}
            alt="Complete button"
            onClick={handleCompleteClick}
          />
        ) : (
          <img
            className={clsx(styles['checkbox-image'])}
            src={inProgressSVG}
            alt="In progress button"
            onClick={handleInProgressClick}
          />
        )}
      </div>
      <div className={clsx(styles.description)}>
        <h4 className={clsx(styles.name)}>{taskData.name}</h4>
        <span className={clsx(styles.date)}>{taskData.date}</span>
      </div>
      <img
        className={clsx(styles['remove-image'])}
        src={removeSVG}
        alt="Remove task"
        onClick={handleRemoveClick}
      />
    </div>
  );
};

export default TodoItem;
