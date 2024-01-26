import clsx from 'clsx';
import styles from './TodoForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import taskRedactorSchema from './TodoForm.schema';
import { TodoFormData } from './TodoForm.interface';
import { useAppDispatch } from '@src/store/hooks';
import { addNewTask } from '@src/store/todoSlice';
import { useEffect } from 'react';

const TodoForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const methods = useForm<TodoFormData>({
    resolver: yupResolver(taskRedactorSchema),
    mode: 'onChange',
    defaultValues: {
      todoName: '',
    },
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = methods;

  const onSubmitHandler: SubmitHandler<TodoFormData> = (formData) => {
    dispatch(addNewTask(formData));
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <form
        className={clsx(styles.form)}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <label htmlFor="todoName" className={clsx(styles.form__name)}>
          <input
            {...register('todoName', { required: true })}
            id="todoName"
            type="text"
            placeholder="Add your task"
            className={clsx(styles.form__input)}
          />
          {errors.todoName ? (
            <p className={clsx(styles.error)}>{errors.todoName.message}</p>
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
