import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";
import {NewTodosService, Todo} from "../services/new-todos.service";


@Component({
  selector: 'ang-server-work',
  templateUrl: './server-work.component.html',
  styleUrls: ['./server-work.component.scss']
})
export class ServerWorkComponent implements OnInit {
  todos: Todo[] = []
  todoTitle = ''
  loading = false

  constructor(private todoService: NewTodosService) {
  }

  ngOnInit() {
    this.fetchTodos()
  }

  createTodo() {
    if (!this.todoTitle.trim()) {
      return
    }
    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    }
    this.todoService.addTodo(newTodo)
      .subscribe(todo => {
        this.todos.push(todo)
        this.todoTitle = ''
      })
  }

  fetchTodos() {
    this.loading = true
    this.todoService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      })
  }

  removeTodo(id: any) {
    this.todoService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id)
      })
  }
}
