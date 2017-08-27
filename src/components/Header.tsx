import * as React from 'react';
import TodoTextInput from './TodoTextInput';

interface IHeaderProps {
  addTodo: (message: string) => void;
}

class Header extends React.Component<IHeaderProps> {
  render() {
    return (
      <header>
        <h1>React + Redux + Immutable.js + Typescript Todo list</h1>
        <TodoTextInput
          newTodo
          onSave={this.props.addTodo}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

export default Header;
