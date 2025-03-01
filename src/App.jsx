import Header from './components/Header';
import Tabs from './components/Tabs';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const todos = [
    { input: 'Poszprzatac pokoj', complete: true },
    { input: 'Zrobić zakupy', complete: true },
    { input: 'Poćwiczyć', complete: false },
  ];

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput />
    </>
  );
};

export default App;
