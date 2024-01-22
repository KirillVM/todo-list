import './App.module.scss';
import TaskRedactor from './components/TaskRedactor/TaskRedactor';

function App() {
  return (
    <>
      <header>
        <h1>TODO</h1>
      </header>
      <main>
        <TaskRedactor />
      </main>
    </>
  );
}

export default App;
