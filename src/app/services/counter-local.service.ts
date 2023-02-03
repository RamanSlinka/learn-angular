import { Injectable } from '@angular/core';
import {BeautyLoggerService} from "./beauty-logger.service";

@Injectable()
export class CounterLocalService {

  constructor(private beautyLoggerService :BeautyLoggerService) {
  }
  counter = 0

  increase() {
    this.counter ++
    this.beautyLoggerService.log('increase', 'success')
  }
  decrease () {
    this.counter--
    this.beautyLoggerService.log('decrease', 'warning')
  }
}
