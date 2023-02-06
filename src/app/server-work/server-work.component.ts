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

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe(todos => {
        console.log(todos)
        this.todos = todos
      })
  }

}
