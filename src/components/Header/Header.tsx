import todoLogo from '@assets/logo.svg';
import styles from './Header.module.scss';
import clsx from 'clsx';

const Header = (): JSX.Element => {
  return (
    <header className={clsx(styles.header)}>
      <h1>TODO list</h1>
      <div className={clsx(styles.container)}>
        <img className={clsx(styles.todo__logo)} src={todoLogo} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
