import {Component} from '@angular/core';

@Component({
  selector: 'ang-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  value = ''
  isSuccess = false
  error = false

  constructor() {
    setTimeout(() => {
      this.isSuccess = true
      this.error = true
    }, 3000)
  }
}
