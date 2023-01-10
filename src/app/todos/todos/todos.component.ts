import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from "../../services/todos.service";
import {Observable} from "rxjs";


@Component({
  selector: 'ang-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos$!: Observable<Todo[]>
  error = ''

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.todos$ = this.todosService.todos$

    this.getTodos()
  }


  getTodos() {
    this.todosService.getTodos()

  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber
    this.todosService.createTodo(title)
  }

  deleteTodo() {
    const todoId = '1688c48d-554f-49c7-91ad-2f7c276c16e1'
    this.todosService.deleteTodo(todoId)
  }
}




