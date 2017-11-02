import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeMainNavbarComponent } from './home-main-navbar/home-main-navbar.component';
import { LinkListComponent } from './link-list/link-list.component';
import { SystemModule } from './system/system.module';
import { LinkFormComponent } from './link-form/link-form.component';

import { FlashMessagesModule } from 'angular2-flash-messages/module';

@NgModule({
  declarations: [
    AppComponent,
    LinkListComponent,
    HomeMainNavbarComponent,
    LinkFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SystemModule,
    FlashMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
