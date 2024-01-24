import clsx from 'clsx';
import github_logo from './assets/github.svg';
import styles from './App.module.scss';
import TaskRedactor from './components/TaskRedactor/TaskRedactor';

function App() {
  return (
    <>
      <header className={clsx(styles.header)}>
        <div className={clsx(styles.container)}>
          <h1>TODO</h1>
        </div>

      </header>
      <main className={clsx(styles.main)}>
        <TaskRedactor />
      </main>
      <footer>
        <div className={styles.container}>
          <p className={styles.year}>2024</p>
          <div className={styles.githubs}>
              <a
                target="_blank"
                href={`https://github.com/KirillVM`}
                rel="noreferrer"
              >
                <img src={github_logo} alt="Github icon" />
              </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
