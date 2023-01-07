import {Component} from '@angular/core';
import {ValueService} from "../value.service";
import {Observable} from "rxjs";


@Component({
  selector: 'ang-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  value$ = new Observable()

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    // this.value = this.valueService.value
  // this.valueService.value$.subscribe((value) => {
  //   this.value = value
  this.value$ = this.valueService.value$
    }

  decValueHandler() {
    this.valueService.decValue()
  }
}
