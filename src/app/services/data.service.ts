import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable()
export class DataService {
  lastId: number = 0;
  public todos: Todo[] = [];
  constructor() { }

  // Add TODO
  addTodo(todo: Todo): DataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.unshift(todo);
    return this;
  }
  // Toggle TODO complete
  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
  // Get TODO items completed
  getTodoItemsCompleted(): Todo[] {
    return this.todos.filter(todo => todo.complete);
  }
  // Delete TODO by id
  deleteTodoById(id: number): DataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }
  // Get All TODOS
  getAllTodos(): Todo[] {
    return this.todos;
  }
  // Get TODO by id
  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }
  // Update TODO by id
  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

}
