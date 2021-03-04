import * as React from 'react';
import { useState } from 'react';
import { Action, TodoActionTypes } from './store';

interface NewTodoProps {
  dispatch: (value: Action) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ dispatch }) => {
  const [text, setText] = useState('');

  const addTodo = () => {
    dispatch({ type: TodoActionTypes.ADD, title: text });
    setText('');
  };

  return (
    <li>
      <input value={text} placeholder="Enter title..." onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </li>
  );
};

export default React.memo(NewTodo);
