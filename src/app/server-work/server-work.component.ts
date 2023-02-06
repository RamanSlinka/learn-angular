import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe(todos => {
        console.log(todos)
        this.todos = todos
      })
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
}
