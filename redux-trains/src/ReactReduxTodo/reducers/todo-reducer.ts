import { nanoid } from "@reduxjs/toolkit";
import { ReactReduxReducer } from ".";
import { ITodoState, TodoAction, TodoActionTypes } from "./todo-types";

const initialState: ITodoState = {
    todos: [],
}

export const todoReducer = (state = initialState, action: TodoAction): ITodoState => {
    switch (action.type) {
        case TodoActionTypes.ADD:
            return {
                ...state,
                todos: [...state.todos, { id: nanoid(), completed: false, text: action.text }]
            }
        case TodoActionTypes.DELETE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.todoId)
            }
        default:
            return state
    }
}

export const getTodos = (store: ReactReduxReducer) => store.todoReducer.todos