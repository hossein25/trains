import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/hm-store";
import { IAddTodoAction, ITodo, IToggleTodoAction } from "./todo-types";
import { v4 as uuid } from 'uuid';
import { useAppSelector } from "../../app/hooks";

const initialState: ITodo[] = []
console.log(nanoid());

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        add: (todos, action: PayloadAction<IAddTodoAction>) => {
            todos.push({ id: uuid(), text: action.payload.text, completed: false })
        },
        toggle: (todos, action: PayloadAction<IToggleTodoAction>) => {
            console.log({ action });

            const toEdit = todos.find(todo => todo.id === action.payload.id)!
            toEdit.completed = !toEdit.completed
        },
        deleteTodo: (todos, { payload }: PayloadAction<string>) => {
            const toDeleteIndex = todos.findIndex(todo => todo.id === payload)
            todos.splice(toDeleteIndex, 1)
        }
    }
})

export const { add, toggle, deleteTodo } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todos;

export const useTodosState = () => useAppSelector(selectTodo);

export default todoSlice.reducer