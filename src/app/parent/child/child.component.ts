import {Component} from '@angular/core';
import {ValueService} from "../services/value.service";
import {Observable} from "rxjs";
import {BeautyLoggerService} from "../services/beauty-logger.service";


@Component({
  selector: 'ang-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  value$ = new Observable()

  constructor(private valueService: ValueService,  private beautyLoggerService: BeautyLoggerService) {}

  ngOnInit(): void {
    // this.value = this.valueService.value
  // this.valueService.value$.subscribe((value) => {
  //   this.value = value
  this.value$ = this.valueService.value$
    }

  decValueHandler() {
    this.valueService.decValue()
    this.beautyLoggerService.log('dec value', 'info')
  }
}
