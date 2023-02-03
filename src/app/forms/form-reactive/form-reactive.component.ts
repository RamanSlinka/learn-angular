import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'ang-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('Raman', Validators.required),
    age: new FormControl('', Validators.required),
    profession: new FormControl('')
  })

  submitForm() {
    console.log(this.form)
  }
}
