import { Todo } from './../todo/model/todo.model';
import * as fromFilter from './filter.actions';

const estadoInicial: fromFilter.filtrsValid = 'все';

export function filterReducer(
  state = estadoInicial,
  action: fromFilter.actions
): fromFilter.filtrsValid {
  switch (action.type) {
    case fromFilter.SET_FILTR:
      return action.filtr;

    default:
      return state;
  }
}
