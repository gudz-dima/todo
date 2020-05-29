import { Todo } from './../todo/model/todo.model';
import { Pipe, PipeTransform } from '@angular/core';
import * as fromFilter from './filter.actions';
@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filtro: fromFilter.filtrsValid): Todo[] {
    switch (filtro) {
      case 'активные':
        return (todos = todos.filter((td) => !td.complete));

      case 'выполенные':
        return (todos = todos.filter((td) => td.complete));

      default:
        return todos;
    }
  }
}
