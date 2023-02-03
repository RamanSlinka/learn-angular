import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0

  increase() {
    this.counter ++
  }
  decrease () {
    this.counter--
  }
}
