import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css']
})
export class LinkFormComponent implements OnInit {

  @Input() link;

  constructor() { }

  ngOnInit() {
  }

}
