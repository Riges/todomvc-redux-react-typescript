import classNames from 'classnames';
import * as React from 'react';

interface ITodoTextInputProps {
  onSave: (text: string) => void;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}

interface ITodoTextInputState {
  text: string;
}

export default class TodoTextInput extends React.Component<ITodoTextInputProps, ITodoTextInputState> {
  constructor(props, context) {
    super(props, context);
    this.state = {text: this.props.text || ''};
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  render() {
    return (
      <input
        className={classNames({'edit': this.props.editing, 'new-todo': this.props.newTodo })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)}
      />
    );
  }
}
