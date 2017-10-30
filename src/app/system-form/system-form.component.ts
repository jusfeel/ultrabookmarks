import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { System } from '../system';

@Component({
  selector: 'app-system-form',
  templateUrl: './system-form.component.html',
  styleUrls: ['./system-form.component.css']
})
export class SystemFormComponent implements OnInit {

  systemForm: FormGroup;
  @Output() formSaved: EventEmitter<System> = new EventEmitter;

  constructor() { }

  ngOnInit() {
    this.systemForm = new FormGroup({
      name: new FormControl(""),
      description: new FormControl("")
    });
    console.log(this.systemForm.status);
    console.log(this.systemForm.pristine);
  }

  save(): void {
    this.formSaved.emit(this.systemForm.value);
  }

}
