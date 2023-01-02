import {Component} from '@angular/core';
import {ValueService} from "../value.service";


@Component({
  selector: 'ang-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  value = 0

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    // this.value = this.valueService.value
  this.valueService.value$.subscribe((value) => {
    this.value = value
  })

  }

  decValueHandler() {
    this.valueService.decValue()
  }
}
