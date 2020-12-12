import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { InputControlComponent } from './input-control/input-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormValidationMessageModule } from '../form-validation-message/form-validation-message.module';

@NgModule({
  declarations: [InputControlComponent],
  exports: [InputControlComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormValidationMessageModule
  ]
})
export class SingleInputControlModule { }
