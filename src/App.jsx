import Header from './components/Header';
import Tabs from './components/Tabs';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);

  const [selectedTab, setSelectedTab] = useState('All');

  const handleAddTodo = (newTask) => {
    if (!newTask) return;
    const newTodoList = [...todos, { input: newTask, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleCompleteTodo = (index) => {
    const newTodoList = [...todos];
    const completedTodo = todos[index];
    completedTodo['complete'] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((task, taskIndex) => taskIndex !== index);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleSaveData = (currentTodos) => {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }));
  };

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) return;
    const db = JSON.parse(localStorage.getItem('todo-app'));
    setTodos(db.todos);
  }, []);

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
