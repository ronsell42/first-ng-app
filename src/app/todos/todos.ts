import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit{
  todoService = inject(TodoService);
  myTodoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService.getTodosFromAPI()
      .pipe(
        catchError(
          (err) => 
          {
            console.log(err);
            throw err;
          }
        )
      ).subscribe(
        (todos) => {
          this.myTodoItems.set(todos);
        }
      )
  }
}
