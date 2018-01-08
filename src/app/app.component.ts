import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="container main-container">
      <div class="row">
        <div class="col-xs-12 text-center">
          <h1>{{title}}</h1>
        </div>
        <app-form></app-form>
      </div>
      <div class="row">
        <app-todo-list></app-todo-list>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'TODO';
}
