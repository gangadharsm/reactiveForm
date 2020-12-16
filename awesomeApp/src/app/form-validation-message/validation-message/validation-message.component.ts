import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/core/services';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss'],
})
export class ValidationMessageComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label = '';
  constructor() { }

  ngOnInit(): void {
  }

  get validationMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidationMessgae(propertyName, this.control.errors[propertyName], this.label);
      }
    }
    return null
  }

}
