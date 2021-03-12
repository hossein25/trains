export enum TodoActionTypes {
    ADD = 'ADD_TODO',
    DELETE = 'DELETE_TODO'
}

export interface ITodo {
    id: string;
    text: string;
    completed: boolean;
}

export interface ITodoState {
    todos: ITodo[];
}

export interface IAddTodoAction {
    type: TodoActionTypes.ADD; text: string;
}

export interface IDeleteTodoAction {
    type: TodoActionTypes.DELETE; todoId: string
}

export type TodoAction = IAddTodoAction | IDeleteTodoAction