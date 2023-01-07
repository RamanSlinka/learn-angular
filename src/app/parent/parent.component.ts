import {Component, OnInit} from '@angular/core';
import {ValueService} from "./value.service";
import {Observable} from "rxjs";


@Component({
  selector: 'ang-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  // providers:[ValueService]
})
export class ParentComponent implements OnInit {

  value$ = new Observable()

  constructor(private valueService: ValueService) {
  }

  ngOnInit(): void {
    // this.value = this.valueService.value
    // this.valueService.value$.subscribe((value) => {
    //   this.value = value
    // })
    this.value$ = this.valueService.value$
  }

  addValueHandler() {
    this.valueService.addValue()
  }
}
