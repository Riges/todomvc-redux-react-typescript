import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addTodo, removeTodo, toggleTodo} from './actions';
import App from './components/App';
import reduce from './reducers';

const store = createStore(reduce);
const unsubscribe = store.subscribe(() =>
  console.log(store.getState().toArray())
);
store.dispatch(addTodo('Coder la SPA'));
store.dispatch(addTodo('Builder la SPA'));
store.dispatch(addTodo('Deployer la SPA sur Azure Storage'));
store.dispatch(addTodo('Deployer la SPA sur WebApp'));
store.dispatch(toggleTodo((store.getState().get(0).id)));
store.dispatch(toggleTodo((store.getState().get(1).id)));

unsubscribe();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
