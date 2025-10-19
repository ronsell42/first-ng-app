import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodo } from "../../directives/highlight-completed-todo";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodo, UpperCasePipe],
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.scss']
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todoToggeled = output<Todo>();

  todoClicked() {
    this.todoToggeled.emit(this.todo());
  }
}
