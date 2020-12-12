import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss']
})
export class InputControlComponent implements OnInit {

  @Input() control: AbstractControl;
  @Input() label: string;
  @Input() elementId: string;
  @Input() isRequired: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
