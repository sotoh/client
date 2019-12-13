import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditorRoutingModule } from './auditor-routing.module';
import { HomeauditorComponent } from './homeauditor/homeauditor.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProfileauditorComponent } from './profileauditor/profileauditor.component';
import { AuditsauditorComponent } from './auditsauditor/auditsauditor.component';
import { DataViewModule } from 'primeng/dataview';


@NgModule({
  declarations: [ HomeauditorComponent, ProfileauditorComponent, AuditsauditorComponent],
  imports: [
    CommonModule,
    AuditorRoutingModule,
    DataViewModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ]
})
export class AuditorModule { }
