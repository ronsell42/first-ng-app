import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../services/todos';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit{
  todoService = inject(TodoService);

  ngOnInit(): void {
    console.log(this.todoService.todoItems);
  }
}
