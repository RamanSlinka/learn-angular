import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo, TodosService} from "../../services/todos.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";


@Component({
  selector: 'ang-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {

  todos: Todo[] = []
  error = ''
  subscription: Subscription = new Subscription()

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.getTodos()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  getTodos() {
    this.subscription.add(
      this.todosService.getTodos().subscribe({
        next: (res: Todo[]) => {
          this.todos = res
        },
        error: (error: HttpErrorResponse) => {
          this.error = error.message
        }
      })
    )

  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber

    this.subscription.add(
      this.todosService.createTodo(title)
        .subscribe((res) => {
          const newTodo = res.data.item
          this.todos.unshift(newTodo)
        })
    )

  }

  deleteTodo() {
    const todoId = '85ebf366-583c-4a92-b686-3bc430dbdb92'
    this.subscription.add(
      this.todosService.deleteTodo(todoId).subscribe(() => {
        this.todos = this.todos.filter(td => td.id !== todoId)
      })
    )
  }
}




