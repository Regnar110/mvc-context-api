import './App.css';
import { StateAndDisptachProvider } from './providers/StateProvider';
import { Summary } from './view/Summary';
import { Todo } from './view/ToDo';

function App() {
  return (
    <>
      <StateAndDisptachProvider>
        <Todo />
        <Summary />
      </StateAndDisptachProvider>
    </>
  );
}

export default App;
