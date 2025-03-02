import TodoCard from './TodoCard';

const TodoList = (props) => {
  const { todos } = props;

  const tab = 'All';
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
