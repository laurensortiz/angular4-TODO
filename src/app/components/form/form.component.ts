import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Todo } from '../../todo';

@Component({
  selector: 'app-form',
  styleUrls: ['./form.component.scss'],
  template: `
    <div class="add-todo-form">
      <form #addTodoForm="ngForm">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Ingresar TODO"
            [(ngModel)]="newTodo.title"
            required
            name="newTodo"
          >
          <span class="input-group-btn">
        <button
          class="btn btn-success"
          type="button"
          (click)="addTodo()"
          [disabled]="!addTodoForm.form.valid"
        >
          {{ btnText }}
        </button>
      </span>
        </div>
      </form>
    </div>
  `,
})
export class FormComponent implements OnInit {
  btnText: string = 'Agregar';
  newTodo: Todo = new Todo();
  constructor(private todoDataService: DataService) { }

  ngOnInit() {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
}
