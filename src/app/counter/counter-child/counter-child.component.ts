import {Component} from '@angular/core';
import {CounterService} from 'src/app/services/counter.service';
import {CounterLocalService} from "../../services/counter-local.service";

@Component({
  selector: 'ang-counter-child',
  templateUrl: './counter-child.component.html',
  styleUrls: ['./counter-child.component.scss'],
  providers: [CounterLocalService]
})
export class CounterChildComponent {

  constructor(public counterLocalService: CounterLocalService,
              public counterService: CounterService) {
  }

}
