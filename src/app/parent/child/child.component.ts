import {Component, EventEmitter, Output} from '@angular/core';

export interface Grade {
  math: number
  english: number
}

@Component({
  selector: 'ang-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Output() sendGradeEvent = new EventEmitter<Grade>()
  inputGrade = ''
  @Output() sendInputGradeEvent = new EventEmitter<string>()

  sendGradeHandler() {
    const math = 5;
    const english = 10
    this.sendGradeEvent.emit({math, english})


  }

  sendEnteredGrades() {
    this.sendInputGradeEvent.emit(this.inputGrade)
  }
}
