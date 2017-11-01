import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css']
})
export class LinkFormComponent implements OnInit {

  @Input() link: Link;
  @Output() cancel = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  cancelEdit() {
    this.cancel.emit();
  }

}
