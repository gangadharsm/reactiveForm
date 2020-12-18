import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { InputControlComponent } from './input-control/input-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormValidationMessageModule } from '../form-validation-message/form-validation-message.module';
import { TrimFormFieldsDirective } from './directive/trim-form-fields.directive';

@NgModule({
  declarations: [InputControlComponent, TrimFormFieldsDirective],
  exports: [InputControlComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormValidationMessageModule
  ]
})
export class SingleInputControlModule { }
