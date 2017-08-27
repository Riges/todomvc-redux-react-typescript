import { Action } from 'redux';

export enum ActionKind {
  AddTodo = 'ADD_TODO',
  RemoveTodo = 'REMOVE_TODO',
  ToggleTodo = 'TOGGLE_TODO',
  EditTodo = 'EDIT_TODO'
}

export interface IAddTodo extends Action {
  readonly type: ActionKind.AddTodo;
  readonly message: string;
}

export const addTodo = (message: string): IAddTodo => ({ type: ActionKind.AddTodo, message });

export interface IRemoveTodo extends Action {
  readonly type: ActionKind.RemoveTodo;
  readonly id: string;
}

export const removeTodo = (id: string): IRemoveTodo => ({ type: ActionKind.RemoveTodo, id });

export interface IToggleTodo extends Action {
  readonly type: ActionKind.ToggleTodo;
  readonly id: string;
}

export const toggleTodo = (id: string): IToggleTodo => ({ type: ActionKind.ToggleTodo, id });

export interface IEditTodo extends Action {
  readonly type: ActionKind.EditTodo;
  readonly id: string;
  readonly message: string;
}

export const editTodo = (id: string, message: string): IEditTodo => ({ type: ActionKind.EditTodo, id, message });

export type TodoAction = IAddTodo | IRemoveTodo | IToggleTodo | IEditTodo;
