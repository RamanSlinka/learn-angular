import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

export interface TodoResponse <T = {}> {
  data: T
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    withCredentials: true, headers: {
      'api-Key': '6f873684-0ca2-4d77-8522-60a9b4a13f78'}
  }

  getTodos(): Observable<Todo []> {
   return this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpOptions)
  }


  createTodo(title: string): Observable<TodoResponse<{ item: Todo }>> {
   return  this.http.post<TodoResponse<{ item: Todo }>>(`https://social-network.samuraijs.com/api/1.1/todo-lists`, {title}, this.httpOptions)
  }


  deleteTodo(todoId: string): Observable<TodoResponse> {
    return this.http.delete<TodoResponse>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, this.httpOptions)

  }


}
