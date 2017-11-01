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

  links:   Link[];
  currentLink: Link;
  mode: string = "view";
  systems: Observable<System[]>;

  constructor(
    private linkService:   LinkService,
    private systemService: SystemService
    ) { }

  ngOnInit() {
    this.linkService.all().subscribe(
      (links : Link[]) => this.links = links
      );
    // this.systems = this.systemService.all();
  }

  select(link: Link) : void {
    this.mode = "edit";
    this.currentLink = link;
  }

  close() : void {
    this.currentLink = null;
    this.mode = "view";
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
