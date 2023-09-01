import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {TODO_REDUCER_NODE, todoReducer} from "./store/todo/todo.reducer";
import { TodoPageComponent } from './page/todo-page/todo-page.component';
import {RouterModule, Routes} from "@angular/router";
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import {FormsModule} from "@angular/forms";
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent
  }
]

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListUiComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class TodoModule { }
