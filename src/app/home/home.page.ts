import { Component } from '@angular/core';
import { APIService } from '../API.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  todos: Array<any>;

  constructor(private apiService: APIService) {
    this.apiService.OnCreateTodoListener.subscribe(evt => {
      const data = (evt as any).value.data.onCreateTodo;
      this.todos = [...this.todos, data];
      console.log('this todos is: ', this.todos);
    });
  }

  createTodo() {
    this.apiService.CreateTodo({
      name: 'ionic',
      description: 'testing'
    });
  }
}
