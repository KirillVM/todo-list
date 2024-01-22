import clsx from 'clsx';
import styles from './TaskRedactor.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import taskRedactorSchema from './TaskRedactor.schema';
import { TaskRedactorData } from './TaskRedactor.interface';

const TaskRedactor = (): JSX.Element => {
  const methods = useForm<TaskRedactorData>({
    resolver: yupResolver(taskRedactorSchema),
    mode: 'onChange',
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const { taskName, taskDescription } = errors;

  const onSubmitHandler: SubmitHandler<TaskRedactorData> = (data) => {
    //redux logic
    console.log(data, taskName, taskDescription);
  };
  return (
    <>
      <form
        className={clsx(styles.form)}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <label htmlFor="taskName" className={clsx(styles.form__row)}>
          <span
            className={clsx(styles['form__row-name'], styles['name-container'])}
          >
            Task name
          </span>
          <input
            {...register('taskName', { required: true })}
            id="taskName"
            type="text"
            className={clsx(styles.form__input)}
          />
        </label>
        <label htmlFor="taskDescription" className={clsx(styles.form__row)}>
          <span
            className={clsx(styles['form__row-name'], styles['name-container'])}
          >
            Task description
          </span>
          <textarea
            {...register('taskDescription', { required: true })}
            id="taskDescription"
            cols={30}
            rows={10}
            className={clsx(styles.form__input)}
            style={{ paddingTop: '1rem' }}
          ></textarea>
        </label>
        <button className="">Add</button>
      </form>
    </>
  );
};

export default TaskRedactor;
