import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditorRoutingModule } from './auditor-routing.module';
import { HomeauditorComponent } from './homeauditor/homeauditor.component';
import { ProfileauditorComponent } from './profileauditor/profileauditor.component';
import { AuditsauditorComponent } from './auditsauditor/auditsauditor.component';


@NgModule({
  declarations: [ HomeauditorComponent, ProfileauditorComponent, AuditsauditorComponent],
  imports: [
    CommonModule,
    AuditorRoutingModule
  ]
})
export class AuditorModule { }
