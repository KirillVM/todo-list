import styles from './ErrorBoundaryPage.module.scss';
import clsx from 'clsx';

const ErrorBoundaryFallback = (): JSX.Element => {
  const onClickHandler = () => {
    window.location.reload();
  };

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.container)}>
        <h1>Oops!Somthig went wrong.</h1>
        <button className={clsx(styles.button)} onClick={onClickHandler}>
          Reload page
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundaryFallback;
