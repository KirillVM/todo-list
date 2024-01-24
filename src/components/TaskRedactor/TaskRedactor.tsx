import clsx from 'clsx';
import styles from './TaskRedactor.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import taskRedactorSchema from './TaskRedactor.schema';
import { TaskRedactorFormData} from './TaskRedactor.interface';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { setNewTask } from '@src/store/todoSlice';

const TaskRedactor = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const a = useAppSelector((state) => state);

  const methods = useForm<TaskRedactorFormData>({
    resolver: yupResolver(taskRedactorSchema),
    mode: 'onChange',
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<TaskRedactorFormData> = (data) => {
    dispatch(setNewTask(data))
    console.log(data);
  };

  return (
    <>
      <form
        className={clsx(styles.form)}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <label htmlFor="taskName" className={clsx(styles.form__name)}>
          <span
            className={clsx(styles['form__name-label'], styles['name-container'])}
          >
            Task name
          </span>
          <input
            {...register('taskName', { required: true })}
            id="taskName"
            type="text"
            className={clsx(styles.form__input)}
          />
          {errors.taskName ? (
            <p className={clsx(styles.error)}>
              {
                errors.taskName.message
              }
            </p>
          ) : (
            <p className={clsx(styles.error)}> </p>
          )}
        </label>
        <label htmlFor="taskDescription" className={clsx(styles.form__description)}>
          <span
            className={clsx(styles['form__description-label'], styles['name-container'])}
          >
            Task description
          </span>
          <textarea
            {...register('taskDescription', { required: true })}
            id="taskDescription"
            cols={30}
            rows={10}
            className={clsx(styles.form__textarea)}
          ></textarea>
          {errors.taskDescription ? (
            <p className={clsx(styles.error)}>
              {
                errors.taskDescription.message
              }
            </p>
          ) : (
            <p className={clsx(styles.error)}> </p>
          )}
        </label>
        <button className={clsx(styles.button_submit)}>Add</button>
      </form>
    </>
  );
};

export default TaskRedactor;
