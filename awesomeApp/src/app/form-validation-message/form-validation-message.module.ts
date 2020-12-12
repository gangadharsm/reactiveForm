import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
@NgModule({
  declarations: [ValidationMessageComponent],
  exports: [ValidationMessageComponent],
  imports: [
    CommonModule,
  ]
})
export class FormValidationMessageModule { }
