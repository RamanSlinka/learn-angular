import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}


@Component({
  selector: 'ang-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = []

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
      withCredentials: true, headers: {'api-Key': '6f873684-0ca2-4d77-8522-60a9b4a13f78'}
    }).subscribe((res: Todo[]) => {
      this.todos = res
    })
  }
}
