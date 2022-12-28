import { Component } from '@angular/core';


interface IUser {
  age: number
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Learn-angular';

  user: IUser= {
    age: 25,
    name: 'Valdemar'
  };
  isAppLoading = true
  text = ''
  text2 = 'start value'

  constructor() {
  setTimeout(()=> {
    this.isAppLoading = false
    }, 3000)
  }

  changeTitleHandler() {
    this.title = 'Angular is amazing !'
  }

  changeTextHandler(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value
  }

  changeText2Handler(event: Event) {
    this.text2 = (event.currentTarget as HTMLInputElement).value
  }
}
