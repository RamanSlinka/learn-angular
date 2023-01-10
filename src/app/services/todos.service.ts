import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";

export interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

export interface TodoResponse<T = {}> {
  data: T
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])


  constructor(private http: HttpClient) {
  }

  httpOptions = {
    withCredentials: true, headers: {
      'api-Key': '6f873684-0ca2-4d77-8522-60a9b4a13f78'
    }
  }

  getTodos() {
    return this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpOptions).subscribe((todos) => {
      this.todos$.next(todos)
    })
  }


  createTodo(title: string) {
    return this.http.post<TodoResponse<{ item: Todo }>>(`https://social-network.samuraijs.com/api/1.1/todo-lists`, {title}, this.httpOptions)
      .pipe(
        map((res) => {
          const stateTodos = this.todos$.getValue()
          const newTodo = res.data.item
          return [newTodo, ...stateTodos]
        })
      )
      .subscribe((todos) => {
        this.todos$.next(todos)
      })
  }


  deleteTodo(todoId: string) {
    return this.http.delete<TodoResponse>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, this.httpOptions)
      .pipe(
        map(() => {
          return this.todos$.getValue().filter(td => td.id !== todoId)
        })
      )
      .subscribe((todos) => {
        this.todos$.next(todos)
      })
  }


}
