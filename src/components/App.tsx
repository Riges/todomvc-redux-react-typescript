import { List } from 'immutable';
import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch} from 'redux';
import {addTodo, editTodo, removeTodo, toggleTodo} from '../actions';
import Header from './Header';
import TodoItem from './TodoItem';

interface IPropsFromDispatch {
  addTodo: (message: string) => void;
  editTodo: (id: string, message: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

interface IPropsFromState {
  todos: List<ITodo>;
}

function mapStateToProps(state: List<ITodo>): IPropsFromState {
  return { todos: state };
}

function mapDispatchToProps(dispatch: Dispatch<List<ITodo>>): IPropsFromDispatch {
  return {
    addTodo: (message: string) => dispatch(addTodo(message)),
    editTodo: (id: string, message: string) => dispatch(editTodo(id, message)),
    removeTodo: (id: string) => dispatch(removeTodo(id)),
    toggleTodo: (id: string) => dispatch(toggleTodo(id))
  };
}

class AppComponent extends React.Component<IPropsFromDispatch & IPropsFromState> {
  render() {
    const todoItems = this.props.todos.map(
      (t, i) => (
      <TodoItem
        key={i}
        todo={t}
        editTodo={this.props.editTodo}
        removeTodo={this.props.removeTodo}
        toggleTodo={this.props.toggleTodo}
      />
      )
    );
    return (
      <div>
        <Header
          addTodo={this.props.addTodo}
        />
        <ul>{todoItems}</ul>
      </div>
    );
  }
}
const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;
