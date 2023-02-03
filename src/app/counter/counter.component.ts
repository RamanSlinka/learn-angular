import { Component } from '@angular/core';
import {CounterService} from "../services/counter.service";

@Component({
  selector: 'ang-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  constructor(public counterService: CounterService) {  }

}
