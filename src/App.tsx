import clsx from 'clsx';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TodoPage from './pages/Todo/Todo';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorBoundaryPage from './pages/ErrorBoundary/ErrorBoundaryPage';

function App() {
  return (
    <>
      <ErrorBoundary fallback={<ErrorBoundaryPage />}>
        <div className={clsx(styles.app)}>
          <Header />
          <main className={clsx(styles.main)}>
            <TodoPage />
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;
