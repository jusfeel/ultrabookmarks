import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemListComponent } from './system-list/system-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SystemListComponent
  ],
  exports: [
    SystemListComponent
  ]
})
export class SystemModule { }
