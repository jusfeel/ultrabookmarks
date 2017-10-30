import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LinkListComponent } from './link-list/link-list.component';
import { HomeMainNavbarComponent } from './home-main-navbar/home-main-navbar.component';
import { SystemListComponent } from './system-list/system-list.component';
import { SystemFormComponent } from './system-form/system-form.component';

const routes = [
  { path: '', redirectTo: '/links', pathMatch: 'full'},
  { path: 'links', component: LinkListComponent },
  { path: 'systems', component: SystemListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LinkListComponent,
    HomeMainNavbarComponent,
    SystemListComponent,
    SystemFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
