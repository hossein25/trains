import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todo-slice";
import usersReducer from '../features/users/users-slice';

const store = configureStore({
    reducer: {
        todos: todoReducer,
        users: usersReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;