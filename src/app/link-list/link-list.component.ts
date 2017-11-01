import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Link } from '../link';
import { System } from '../system/system';

import { LinkService } from '../link.service';
import { SystemService } from '../system/system.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
  providers: [ LinkService, SystemService ]
})
export class LinkListComponent implements OnInit {

  links:   Observable<Link[]>;
  systems: Observable<System[]>;

  constructor(
    private linkService:   LinkService,
    private systemService: SystemService
    ) { }

  ngOnInit() {
    this.links = this.linkService.all();
    // this.systems = this.systemService.all();
  }

  saveSystem($event: System): void {
    this.systemService.save($event)
     .subscribe(
        result => {
          console.log(result);
          // close form
      },
        error => {
          console.error( error);
          // form failed
      }
    );
  }

  deleteSystem(system: System) {
    this.systemService.delete(system)
    .subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );

  }

}
