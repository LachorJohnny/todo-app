import Header from './components/Header';
import Tabs from './components/Tabs';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);

  const [selectedTab, setSelectedTab] = useState('All');

  const handleAddTodo = (newTask) => {
    if (!newTask) return;
    const newTodoList = [...todos, { input: newTask, complete: false }];
    setTodos(newTodoList);
  };

  const handleEditTodo = () => {};

  const handleDeleteTodo = () => {};

  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList selectedTab={selectedTab} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
};

export default App;
