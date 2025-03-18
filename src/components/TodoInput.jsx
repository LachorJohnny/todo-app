import { useState } from 'react';

const TodoInput = (props) => {
  const { handleAddTodo } = props;
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add task"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={() => handleAddTodo(inputValue)}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
