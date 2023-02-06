import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";

export interface Todo {
  completed: boolean
  id?: number
  title: string
}

@Component({
  selector: 'ang-server-work',
  templateUrl: './server-work.component.html',
  styleUrls: ['./server-work.component.scss']
})
export class ServerWorkComponent implements OnInit {
  todos: Todo[] = []
  todoTitle = ''
  loading = false

  constructor(private http: HttpClient) {
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
    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(todo => {
        console.log(todo)
        this.todos.push(todo)
        this.todoTitle = ''
      })
  }

  fetchTodos() {
    this.loading = true
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      })
  }

  removeTodo(id: any) {
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id)
      })
  }
}
