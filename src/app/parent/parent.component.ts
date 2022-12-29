import {Component} from '@angular/core';
import {Grade} from "./child/child.component";


@Component({
  selector: 'ang-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  math?: number
  english?: number

  getGrade(value: Grade) {
    this.math = value.math
    this.english = value.english
  }
}
