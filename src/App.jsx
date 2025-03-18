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

  const handleCompleteTodo = (index) => {
    const newTodoList = [...todos];
    const completedTodo = todos[index];
    completedTodo['complete'] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((task, taskIndex) => taskIndex !== index);
    setTodos(newTodoList);
  };

  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
};

export default App;
