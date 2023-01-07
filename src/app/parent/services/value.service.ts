import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  // value = 10
  value$: BehaviorSubject<number> = new BehaviorSubject<number>(10)

  addValue() {
    // this.value =   this.value +1
    this.value$.next(this.value$.getValue() + 1)

  }

  decValue() {
    // this.value = this.value -1
    this.value$.next(this.value$.getValue() - 1)

  }
}
