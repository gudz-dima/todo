import { Todo } from './../model/todo.model';
import { AppState } from './../../app.reducers';
import * as fromFilter from './../../filter/filter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteAllTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  public filtrsValid: fromFilter.filtrsValid[] = [
    'все',
    'активные',
    'выполенные',
  ];
  public filtrNow: fromFilter.filtrsValid;
  public todoCountActive: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filtrNow = state.filter;
      this.countTodo(state.todos);
    });
  }

  changeFiltr(filtr: fromFilter.filtrsValid) {
    const action = new fromFilter.SetFiltrAction(filtr);
    this.store.dispatch(action);
  }

  countTodo(todos:Todo[]){
    this.todoCountActive = todos.filter((td) => td.complete === false).length;
  }

  clearComplet(){
    const action = new DeleteAllTodoAction();
    this.store.dispatch(action);
  }
}
