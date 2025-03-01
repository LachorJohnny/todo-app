const Tabs = (props) => {
  const { todos } = props;
  const tabs = ['All', 'Open', 'Completed'];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === 'All'
            ? todos.length
            : tab === 'Open'
            ? todos.filter((task) => !task.complete).length
            : todos.filter((task) => task.complete).length;

        return (
          <button key={tabIndex} className="tab-button">
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
