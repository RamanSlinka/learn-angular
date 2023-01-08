import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

interface TodoResponse <T = {}> {
  data: T
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
}


@Component({
  selector: 'ang-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  httpOptions = {
    withCredentials: true, headers: {'api-Key': '6f873684-0ca2-4d77-8522-60a9b4a13f78'}
  }
  todos: Todo[] = []

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpOptions).subscribe((res: Todo[]) => {
      this.todos = res
    })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber

    this.http.post<TodoResponse<{ item: Todo }>>(`https://social-network.samuraijs.com/api/1.1/todo-lists`, {title}, this.httpOptions)
      .subscribe((res) => {
        const newTodo = res.data.item
        this.todos.unshift(newTodo)
      })
  }

  deleteTodo() {
    const todoId = '85ebf366-583c-4a92-b686-3bc430dbdb92'
    this.http.delete<TodoResponse>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, this.httpOptions)
      .subscribe(() => {
        this.todos = this.todos.filter(td => td.id !==todoId)
      })
  }
}




