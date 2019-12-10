import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnduserRoutingModule } from './enduser-routing.module';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { ReportuserComponent } from './reportuser/reportuser.component';
import { ProfileuserComponent } from './profileuser/profileuser.component';
import { TreeTableModule } from 'primeng/treetable';

@NgModule({
  declarations: [HomeuserComponent, ReportuserComponent, ProfileuserComponent],
  imports: [
    CommonModule,
    EnduserRoutingModule,
    TreeTableModule
  ]
})
export class EnduserModule { }
