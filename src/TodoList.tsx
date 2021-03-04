import React, { useReducer, useState, useMemo, FC } from 'react';
import NewTodo from './NewTodo';
import { initialState, todoReducer } from './store';
import TodoItem from './TodoItem';

const TodoList: FC = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [query, setQuery] = useState('');
  const todos = useMemo(() => state.todos.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase())), [
    query,
  ]);

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...{ dispatch, todo }} />
        ))}
        <NewTodo dispatch={dispatch} />
      </ul>
      <div>
        Highlight Query for incomplete items:
        <input value={query} onChange={handleChangeQuery} />
      </div>
    </div>
  );
};

export default TodoList;
