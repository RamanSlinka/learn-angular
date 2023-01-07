import {Component, OnInit} from '@angular/core';
import {ValueService} from "../services/value.service";
import {Observable} from "rxjs";
import {BeautyLoggerService} from "../services/beauty-logger.service";


@Component({
  selector: 'ang-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  // providers:[ValueService]
})
export class ParentComponent implements OnInit {

  value$ = new Observable()

  constructor(private valueService: ValueService, private beautyLoggerService: BeautyLoggerService) {
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
    this.beautyLoggerService.log('add value', 'success')
  }
}
