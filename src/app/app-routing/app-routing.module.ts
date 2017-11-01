import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LinkListComponent } from '../link-list/link-list.component';
import { SystemListComponent } from '../system/system-list/system-list.component';

const routes = [
  { path: '', redirectTo: '/links', pathMatch: 'full'},
  { path: 'links', component: LinkListComponent },
  { path: 'systems', component: SystemListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
