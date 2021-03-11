
export interface ITodo {
    id: string;
    text: string;
    completed: boolean;
}

export interface IAddTodoAction {
    text: string
}

export type IToggleTodoAction = {
    id: string;
}