import { Todo } from './model/todo.model';
import * as fromTodo from './todo.actions';

const todo1 = new Todo('Закончить работу');
const todo2 = new Todo('Залить работу на Git');

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(
  state = estadoInicial,
  action: fromTodo.Acciones
): Todo[] {
  switch (action.type) {
    case fromTodo.ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:
      return state.map((todoEdit) => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            complete: !todoEdit.complete,
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map((todoEdit) => {
        return {
          ...todoEdit,
          complete: action.completado,
        };
      });

    case fromTodo.EDIT_TODO:
      return state.map((todoEdit) => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            text: action.text,
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.DELETE_TODO:
      return state.filter((todoDelete) => todoDelete.id != action.id);

    case fromTodo.DELETE_ALL_TODO:
      return state = state.filter(todoDelete=>!todoDelete.complete);

    default:
      return state;
  }
}
