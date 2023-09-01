import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss']
})
export class TodoListUiComponent implements OnInit {

  @Input()
  public todoList: Todo[] | null = [];

  @Output()
  delete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onDelete(id: number): void {
    this.delete.emit(id);
  }

}
