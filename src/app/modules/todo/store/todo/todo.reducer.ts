import {Todo} from "../../model/todo";
import {TodoActions, todoActionsType} from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: Todo[];
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: []
}

export const todoReducer = (state: TodoState = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idIncrement,
            name: action.payload.,
            completed: false
          }
        ]
      };
    case todoActionsType.delete:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload.id)
      }
    default:
      return;
  }
}
