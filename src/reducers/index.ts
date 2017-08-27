import { List } from 'immutable';
import { combineReducers } from 'redux';
import * as uuid from 'uuid';
import {ActionKind, TodoAction} from '../actions';

class Todo implements ITodo {
  id: string;
  message: string;
  completed: boolean;
  constructor(message: string, id?: string, completed?: boolean) {
    this.message = message;
    this.id = (id == null) ? uuid.v4() : id;
    this.completed = (completed == null) ? false : completed;
  }
}

export default function reduce(state: List<ITodo> = List(), action: TodoAction) {
  switch (action.type) {
    case ActionKind.AddTodo: return state.push(new Todo(action.message));
    // case ActionKind.RemoveTodo: return state.remove(action.index);
    case ActionKind.RemoveTodo: return state.delete(
      state.findIndex(
        (t) => t.id === action.id
      ));
    case ActionKind.ToggleTodo: return state.update(
      state.findIndex((t) => t.id === action.id),
      (t) => new Todo(t.message, t.id, !t.completed)
    );
    case ActionKind.EditTodo: return state.update(
      state.findIndex((t) => t.id === action.id),
      (t) => new Todo(action.message, t.id, t.completed)
    );
    default: return state;
  }
}
