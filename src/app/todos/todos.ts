import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit{
  todoService = inject(TodoService);
  myTodoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

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

  updateTodoItem(todoItem: Todo){
    this.myTodoItems.update((todos) => {
      return todos.map(todo => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    })
  }
}
