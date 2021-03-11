import React, { FC, FormEvent, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { add, deleteTodo, selectTodo, toggle, useTodosState } from "./todo-slice";

interface TodoAppInterface {}

const TodoApp: FC<TodoAppInterface> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todos = useTodosState();
  const dispatch = useAppDispatch();

  function addTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputRef.current || !inputRef.current.value) return;
    dispatch(add({ text: inputRef.current.value }));
    inputRef.current.value = "";
  }

  return (
    <div>
      {todos.map(({ id, text, completed }) => (
        <div key={id} onClick={() => dispatch(toggle({ id }))}>
          <p style={{ textDecoration: completed ? "line-through" : "none" }}>{text}</p>
          <button
            style={{ color: "red" }}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deleteTodo(id));
            }}
          >
            X
          </button>
        </div>
      ))}
      <form onSubmit={addTodo}>
        <input ref={inputRef} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoApp;
