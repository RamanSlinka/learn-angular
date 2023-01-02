import {Component, OnInit} from '@angular/core';
import {ValueService} from "./value.service";


@Component({
  selector: 'ang-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  // providers:[ValueService]
})
export class ParentComponent implements OnInit{

  value = 0

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    // this.value = this.valueService.value
  this.valueService.value$.subscribe((value) => {
    this.value = value
  })

  }

  addValueHandler() {
     this.valueService.addValue()
  }
}
