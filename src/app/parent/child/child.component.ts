import {Component, Input} from '@angular/core';
import {Address} from "../parent.component";

@Component({
  selector: 'ang-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
name = 'Robert'
  @Input()  surnameProps: string = ''
  // @Input()  surnameProps?: string   -->  also may be used
  @Input() address?: Address
}
