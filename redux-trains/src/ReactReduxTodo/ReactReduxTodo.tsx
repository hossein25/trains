import React, { FC, FormEvent, useRef } from "react";
import { connect } from "react-redux";
import { ReactReduxReducer } from "./reducers";
import { getTodos } from "./reducers/todo-reducer";
import { ITodo, TodoActionTypes } from "./reducers/todo-types";

interface ReactReduxTodoProps {
  todos: ITodo[];
  addTodo: (text: string) => void;
  deleteTodo: (todoId: string) => void;
}

const ReactReduxTodo: FC<ReactReduxTodoProps> = ({ todos, addTodo, deleteTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputRef.current || !inputRef.current.value.trim()) return;
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map(({ id, text, completed }) => (
        <div key={id}>
          <p>{text}</p>
          {/* <input type="checkbox" value={completed} onChange={} /> */}
          <button onClick={() => deleteTodo(id)} style={{ color: "red" }}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (store: ReactReduxReducer) => ({
  todos: getTodos(store),
});

const mapDispatchToProps = {
  addTodo: (text: string) => ({ type: TodoActionTypes.ADD, text }),
  deleteTodo: (todoId: string) => ({ type: TodoActionTypes.DELETE, todoId }),
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxTodo);
