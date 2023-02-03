import { Injectable } from '@angular/core';

@Injectable()
export class CounterLocalService {
  counter = 0

  increase() {
    this.counter ++
  }
  decrease () {
    this.counter--
  }
}
