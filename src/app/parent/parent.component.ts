import {Component} from '@angular/core';


@Component({
  selector: 'ang-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  title = 'Lorem ipsum dolor sit amet'
  url = 'https://angular.io/api/comon'
  date = new Date(2023, 1, 2, 10)
  cash = 25
}
