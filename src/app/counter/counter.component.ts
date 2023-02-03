import { Component } from '@angular/core';
import {CounterService} from "../services/counter.service";
import {CounterLocalService} from "../services/counter-local.service";

@Component({
  selector: 'ang-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [CounterLocalService]
})
export class CounterComponent {

  constructor(
    public counterService: CounterService,
    public  counterLocalService: CounterLocalService
  ) {  }

}
