import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, throwError} from "rxjs";


export interface Todo {
  completed?: boolean
  id?: number
  title?: string
}

@Injectable({
  providedIn: 'root'
})
export class NewTodosService {

  constructor(private http: HttpClient) {
  }

  addTodo(todo: Todo): Observable<Todo> {
const headers =  new HttpHeaders({
  'CustomHeader': "Roman",
  'CustomHeader2': "Slinka"
})
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
      headers
    })
  }

  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams().append('_limit', '4')

    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      // params: new HttpParams().set('_limit', '3')     or  --->
      params
    })
      .pipe(
        delay(1500),
        catchError(err => {
          console.log('error', err.message)
          return throwError(err)
        })
      )
  }

  removeTodo(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  completeTodo(id: number | undefined): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }

}
