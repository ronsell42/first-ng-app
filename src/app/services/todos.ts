import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  http = inject(HttpClient);
  
  getTodosFromAPI()
  {
    const url = 'http://localhost:3000/todos';
    return this.http.get<Array<Todo>>(url);
  }
}
