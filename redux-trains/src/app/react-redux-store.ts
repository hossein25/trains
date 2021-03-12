import { createStore } from "redux";
import reactReduxReducers from "../ReactReduxTodo/reducers";


const reactReduxStore = createStore(reactReduxReducers);

export default reactReduxStore;
