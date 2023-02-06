import {Component, OnInit} from '@angular/core';
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
  error = ''

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
      },error => {
        this.error = error.message
      })
  }

  removeTodo(id:  number | undefined) {
    this.todoService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id)
      })
  }

  doneTodo(id: number | undefined) {
    this.todoService.completeTodo(id).subscribe(todo => {

      // if (this.todos.find((t: Todo) => t.id === todo.id)) {
      //   console.log(this.todos.find((t: Todo) => t.id === todo.id).completed = true)
      // }

      // this.todos.find((t: Todo) => t.id === todo.id).completed = true

    })

  }
}
