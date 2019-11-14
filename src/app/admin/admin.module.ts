import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuditorComponent } from './register/auditor/auditor.component';
import { EnduserComponent } from './register/enduser/enduser.component';


@NgModule({
  declarations: [AuditorComponent, EnduserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
