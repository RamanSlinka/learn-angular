import {Component} from '@angular/core';
import {Grade} from "./child/child.component";


interface WeekGrade {
  id: number
  day: string
  gridItem: number
}

interface Lessons {
  id: number
  title: string
  weekGrades: WeekGrade[]
}


@Component({
  selector: 'ang-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  math?: number
  english?: number

  grades: string[] = ['math: 5, physic: 6']

  lessons: Lessons[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {id: 1, day: 'monday', gridItem: 7},
        {id: 2, day: 'wednesday', gridItem: 5},
        {id: 3, day: 'friday', gridItem: 9},
      ]
    }, {
      id: 1,
      title: 'English',
      weekGrades: [
        {id: 1, day: 'tuesday', gridItem: 9},
        {id: 2, day: 'wednesday', gridItem: 10},
        {id: 3, day: 'thursday', gridItem: 8},
      ]
    }
  ]

  isLoading = true

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }



  getGrade(value: Grade) {
    this.math = value.math
    this.english = value.english
  }

  getGradeFomInput(grade: string) {
    this.grades.push(grade)
  }
}
