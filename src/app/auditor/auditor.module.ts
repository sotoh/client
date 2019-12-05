import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditorRoutingModule } from './auditor-routing.module';
import { HomeauditorComponent } from './homeauditor/homeauditor.component';
import { AuditsComponent } from './audits/audits.component';
import { ProfileauditorComponent } from './profileauditor/profileauditor.component';


@NgModule({
  declarations: [ HomeauditorComponent, AuditsComponent, ProfileauditorComponent],
  imports: [
    CommonModule,
    AuditorRoutingModule
  ]
})
export class AuditorModule { }
