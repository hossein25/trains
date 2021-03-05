import { uuid } from 'uuidv4';

export type TodoType = {
  id: string;
  title: string;
  completed?: boolean;
};

export type TodoState = {
  todos: TodoType[];
};

export enum TodoActionTypes {
  ADD = 'ADD_TODO',
  DELETE = 'DELETE_TODO',
  TOGGLE = 'TOGGLE_TODO',
}

type AddTodoType = { type: TodoActionTypes.ADD; title: string }
interface IDeleteTodo { type: TodoActionTypes.DELETE; id: string }
type IToggleTodo = { type: TodoActionTypes.TOGGLE; id: string }


export type Action = AddTodoType | IDeleteTodo | IToggleTodo

export const initialState: TodoState = {
  todos: [
    { id: uuid(), title: 'Wash dishes' },
    { id: uuid(), title: 'Study JS' },
    { id: uuid(), title: 'Buy ticket' },
  ],
};


export const todoReducer: React.Reducer<TodoState, Action> = (state, action): TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD:
      return {
        ...state,
        todos: [...state.todos, { id: uuid(), title: action.title }],
      };
    case TodoActionTypes.DELETE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    case TodoActionTypes.TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};