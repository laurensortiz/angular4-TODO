import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-todo-list',
  styleUrls: ['./todo-list.component.scss'],
  template: `
    <div class="col-xs-12 todo-list" *ngIf="todos.length > 0">
      <div
        class="input-group"
        *ngFor="let todo of todos; let i = index"
        [class.completed]="todo.complete"
      >
        <span class="input-group-addon">
          <input
            class="toggle"
            type="checkbox"
            (click)="toggleTodoComplete(todo)"
            [checked]="todo.complete"
            id="item-{{i}}"
          >
        </span>
        <input
          type="text"
          class="form-control"
          value="{{todo.title}}"
        >
        <span class="input-group-btn">
          <button
            class="btn btn-danger"
            (click)="removeTodo(todo)"
          >
            <span class="glyphicon glyphicon glyphicon-trash"></span>
          </button>
        </span>
      </div>
      <div class="todo-list-detail">
        <h5>Total de items completados <span class="label label-success">{{todoItemsCompleted.length}}</span> de <span class="label label-primary">{{todos.length}}</span></h5>
      </div>
    </div>
  `,
})
export class TodoListComponent implements OnInit {
  constructor(private todoDataService: DataService) {
  }

  ngOnInit() {
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  get todoItemsCompleted() {
    return this.todoDataService.getTodoItemsCompleted();
  }
}
