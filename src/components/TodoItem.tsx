import classNames from 'classnames';
import * as React from 'react';
import TodoTextInput from './TodoTextInput';

interface ITodoItemProps {
  todo: ITodo;
  editTodo: (id: string, message: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

interface ITodoItemState {
  editing: boolean;
}

export default class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {
  constructor(props, context) {
    super(props, context);
    this.state = {editing: false};
  }

  handleDoubleClick = () => {
    this.setState({ editing: true });
  }

  handleSave = (id: string, text: string) => {
    if (text.length === 0) {
      this.props.removeTodo(id);
    } else {
      this.props.editTodo(id, text);
    }

    this.setState({ editing: false });
  }

  render() {
    const { removeTodo, todo, toggleTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          onSave={(text) => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <label onDoubleClick={this.handleDoubleClick}>{todo.message}</label>
          <button className="destroy" onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
      );
    }

    return (
      <li key={todo.id} className={classNames({completed: todo.completed, editing: this.state.editing})}>
        {element}
      </li>
    );
  }
}
