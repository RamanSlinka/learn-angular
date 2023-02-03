import {Injectable} from "@angular/core";

@Injectable()
export class CounterService {
  counter = 0

  increase() {
    this.counter ++
  }
  decrease () {
    this.counter--
  }
}
