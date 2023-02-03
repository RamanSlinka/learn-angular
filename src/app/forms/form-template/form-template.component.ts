import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'ang-forms',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent {

  submitForm(form: NgForm) {
    console.log(form)

    form.reset()
  }


}
