import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";


export interface Todo {
  completed: boolean
  id?: number
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class NewTodosService {

  constructor(private http: HttpClient) { }

  addTodo(todo: Todo): Observable<Todo> {
  return   this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
  }

  fetchTodos(): Observable<Todo[]> {
    return  this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
  }

  removeTodo(id: number): Observable<void> {
    return     this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
}
