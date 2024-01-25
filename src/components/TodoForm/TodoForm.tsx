import clsx from 'clsx';
import styles from './TodoForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import taskRedactorSchema from './TodoForm.schema';
import { TodoFormData } from './TodoForm.interface';
import { useAppDispatch } from '@src/store/hooks';
import { addNewTask } from '@src/store/todoSlice';

const TodoForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const methods = useForm<TodoFormData>({
    resolver: yupResolver(taskRedactorSchema),
    mode: 'onChange',
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<TodoFormData> = (data) => {
    dispatch(addNewTask(data));
    console.log(data);
  };

  return (
    <>
      <form
        className={clsx(styles.form)}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <label htmlFor="taskName" className={clsx(styles.form__name)}>
          <input
            {...register('taskName', { required: true })}
            id="taskName"
            type="text"
            placeholder="Add your task"
            className={clsx(styles.form__input)}
          />
          {errors.taskName ? (
            <p className={clsx(styles.error)}>{errors.taskName.message}</p>
          ) : (
            <p className={clsx(styles.error)}> </p>
          )}
        </label>
        {/* <input type='date'/> */}
        <button className={clsx(styles.button_submit)}>Add</button>
      </form>
    </>
  );
};

export default TodoForm;
