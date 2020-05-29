import { EditTodoAction, DeleteTodoAction, ToggleTodoAction } from './../todo.actions';
import { AppState } from './../../app.reducers';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../model/todo.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtEditor') txtEdit: ElementRef;

  public edit: boolean;

  public checkFiel: FormControl;
  public txtInput: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkFiel = new FormControl(this.todo.complete);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.checkFiel.valueChanges.subscribe(() => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  editor() {
    this.edit = true;

    setTimeout(() => {
      this.txtEdit.nativeElement.select();
    }, 1);
  }

  endEdit() {
    this.edit = false;

    if (this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.todo.text) {
      return;
    }

    const action = new EditTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  DeleteTodo() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
