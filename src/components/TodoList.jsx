import TodoCard from './TodoCard';

const TodoList = (props) => {
  const { selectedTab, todos } = props;

  const tab = selectedTab;
  const filterTodosList =
    tab === 'All'
      ? todos
      : tab === 'Completed'
      ? todos.filter((task) => task.complete)
      : todos.filter((task) => !task.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todo={todo} />;
      })}
    </>
  );
};

export default TodoList;
