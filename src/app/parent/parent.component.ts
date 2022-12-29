import {Component} from '@angular/core';

export interface Address {
  city: string
  street: string
  house: number
}

@Component({
  selector: 'ang-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  name = 'Raman'
  surname = 'Slinka'
  address : Address = {
    city: 'Poznan',
    street: 'Slowanska',
    house: 38
  }
}
