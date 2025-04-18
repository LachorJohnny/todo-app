const Header = (props) => {
  const { todos } = props;
  const todosLength = todos.length;
  const taskOrTasks = todosLength !== 1 ? 'tasks' : 'task';

  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} open {taskOrTasks}.
      </h1>
    </header>
  );
};

export default Header;
