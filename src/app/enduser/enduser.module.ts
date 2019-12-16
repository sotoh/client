import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnduserRoutingModule } from './enduser-routing.module';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { ReportuserComponent } from './reportuser/reportuser.component';
import { ProfileuserComponent } from './profileuser/profileuser.component';
import { TreeTableModule } from 'primeng/treetable';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [HomeuserComponent, ReportuserComponent, ProfileuserComponent],
  imports: [
    CommonModule,
    EnduserRoutingModule,
    TreeTableModule,
    TableModule,
    CardModule,
    ChartModule,
    ButtonModule,
    DataViewModule
  ]
})
export class EnduserModule { }
