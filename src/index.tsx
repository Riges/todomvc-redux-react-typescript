import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addTodo, removeTodo, toggleTodo} from './actions';
import App from './components/App';
import reduce from './reducers';

const store = createStore(reduce);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
