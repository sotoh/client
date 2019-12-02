import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { AdminRoutingModule } from './admin-routing.module';
import { AuditorComponent } from './register/auditor/auditor.component';
import { HttpClientModule } from '@angular/common/http';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CreateComponent } from './audits/create/create.component';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { MessageModule } from 'primeng/message';
import { BlockUIModule } from 'primeng/blockui';
import { EnterpriseComponent } from './register/enterprise/enterprise.component';

@NgModule({
  declarations: [AuditorComponent, CreateComponent, EnterpriseComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FieldsetModule,
    ListboxModule,
    RadioButtonModule,
    PasswordModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    PanelModule,
    BlockUIModule,
    MessageModule,
    InputTextModule
  ]
})
export class AdminModule { }
