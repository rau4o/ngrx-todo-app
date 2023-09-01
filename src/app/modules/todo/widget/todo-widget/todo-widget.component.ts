import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {TodoState} from "../../store/todo/todo.reducer";
import {TodoCreateAction, TodoDeleteAction} from "../../store/todo/todo.actions";
import {Todo} from "../../model/todo";
import {todoListSelector} from "../../store/todo/todo.selectors";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {

  public todoList$?: Observable<Todo[]>;

  constructor(private store$: Store<TodoState>) { }

  ngOnInit(): void {
    this.todoList$ = this.store$.pipe(select(todoListSelector));
  }

  public onCreate(name: string): void {
    this.store$.dispatch(new TodoCreateAction({name}));
  }

  public onDelete(id: number): void {
    this.store$.dispatch(new TodoDeleteAction({id}));
  }

}
