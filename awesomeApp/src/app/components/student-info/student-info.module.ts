import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentInfoRoutingModule } from './student-info-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { SingleInputControlModule } from '../../single-input-control/single-input-control.module'

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StudentInfoRoutingModule,
    SingleInputControlModule
  ]
})
export class StudentInfoModule { }
