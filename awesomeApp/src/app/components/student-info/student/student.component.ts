import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createStudentForm()
  }

  ngOnInit(): void {
  }

  createStudentForm() {
    this.studentForm = this.fb.group({
      firstName: ["", [Validators.required]]
    })
  }
}
