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
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { BlockUIModule } from 'primeng/blockui';
import { EnterpriseComponent } from './register/enterprise/enterprise.component';
import { EditComponent } from './audits/custom/edit/edit.component';
import { CreateComponent } from './audits/custom/create/create.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { AuditorsComponent } from './index/auditors/auditors.component';
import { EnterprisesComponent } from './index/enterprises/enterprises.component';
import { HomeauditsComponent } from './audits/homeaudits/homeaudits.component';
import { HometemplateComponent } from './audits/template/hometemplate/hometemplate.component';
import { InternalauditComponent } from './audits/template/internalaudit/internalaudit.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [AuditorComponent, EnterpriseComponent, EditComponent,CreateComponent, AuditorsComponent, EnterprisesComponent, HomeauditsComponent, HometemplateComponent, InternalauditComponent, HomeadminComponent, IndexComponent],
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
    MessagesModule,
    InputTextModule,
    KeyFilterModule
  ]
})
export class AdminModule { }
