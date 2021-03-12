import { combineReducers } from "redux";
import { todoReducer } from './todo-reducer';

const reactReduxReducers = combineReducers({
    todoReducer
})

export default reactReduxReducers;

export type ReactReduxReducer = ReturnType<typeof reactReduxReducers>