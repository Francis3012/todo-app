import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];

  constructor(
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.loadAllTodoList();
  }

  loadAllTodoList(): void {
    this.todos = this.todoService.getAllTodos();
  }

  onClickEditTodo(id: number): void {
    this.router.navigate(['/todo-detail'], { queryParams: { id:id } });
  }

  onClickAddTodo(): void {
    this.router.navigate(['/todo-detail']);
  }

  onClickDeleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.loadAllTodoList();
  }
}
