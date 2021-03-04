import React, { FC } from 'react';
import { Action, TodoActionTypes, TodoType } from './store';

interface TodoItemProps {
  todo: TodoType;
  dispatch: (value: Action) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo: { id, title, completed }, dispatch }) => {
  const delTodo = () => {
    dispatch({ type: TodoActionTypes.DELETE, id });
  };

  return (
    <li>
      <input type="checkbox" checked={!!completed} onChange={() => dispatch({ type: TodoActionTypes.TOGGLE, id })} />
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {title}
      </span>
      <button onClick={delTodo}>Delete</button>
    </li>
  );
};

export default React.memo(TodoItem);
