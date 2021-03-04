import * as React from 'react';
import { render } from 'react-dom';
import TodoList from './TodoList';

const rootElement = document.getElementById('root');
render(<TodoList />, rootElement);
