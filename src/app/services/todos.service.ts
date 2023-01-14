import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, EMPTY, map, Observable, throwError} from "rxjs";
import {BeautyLoggerService} from "./beauty-logger.service";

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


  constructor(private http: HttpClient, private beautyLoggerService: BeautyLoggerService) {
  }

  private errorHandler(err: HttpErrorResponse)  {
  this.beautyLoggerService.log(err.message, "error")
  return EMPTY
  // return  throwError(err)
}

  httpOptions = {
    withCredentials: true, headers: {
      'api-Key': '6f873684-0ca2-4d77-8522-60a9b4a13f78'
    }
  }

  getTodos() {
    return this.http
      .get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpOptions)
      .pipe(catchError(this.errorHandler.bind(this))
      )
      .subscribe((todos) => {
        this.todos$.next(todos)
      })
  }


  createTodo(title: string) {
    return this.http.post<TodoResponse<{ item: Todo }>>(`https://social-network.samuraijs.com/api/1.1/todo-lists`, {title}, this.httpOptions)
      .pipe(
        catchError(this.errorHandler.bind(this)),
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
        catchError(this.errorHandler.bind(this)),
        map(() => {
          return this.todos$.getValue().filter(td => td.id !== todoId)
        })
      )
      .subscribe((todos) => {
        this.todos$.next(todos)
      })
  }


}
