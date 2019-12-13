import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { AdminRoutingModule } from './admin-routing.module';
import { AuditorComponent } from './register/auditor/auditor.component';
import { HttpClientModule } from '@angular/common/http';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { BlockUIModule } from 'primeng/blockui';
import { OrderListModule } from 'primeng/orderlist';
import { PickListModule } from 'primeng/picklist';
import { EnterpriseComponent } from './register/enterprise/enterprise.component';
import { EditComponent } from './audits/custom/edit/edit.component';
import { CreateComponent } from './audits/custom/create/create.component';
import { AuditorsComponent } from './index/auditors/auditors.component';
import { EnterprisesComponent } from './index/enterprises/enterprises.component';
import { HomeauditsComponent } from './audits/homeaudits/homeaudits.component';
import { HometemplateComponent } from './audits/template/hometemplate/hometemplate.component';
import { InternalauditComponent } from './audits/template/internalaudit/internalaudit.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { IndexComponent } from './index/index.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { AssignComponent } from './index/assign/assign.component';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TypePipe } from './audits/type.pipe';
import { OptionPipe } from './audits/option.pipe';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [AuditorComponent, EnterpriseComponent, EditComponent,CreateComponent, AuditorsComponent, EnterprisesComponent, HomeauditsComponent, HometemplateComponent, InternalauditComponent, HomeadminComponent, IndexComponent, AssignComponent, TypePipe, OptionPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FieldsetModule,    
    RadioButtonModule,
    PasswordModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    PanelModule,
    BlockUIModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    InputTextModule,
    TableModule,
    CardModule,
    MenuModule,
    DialogModule,
    OverlayPanelModule,
    PaginatorModule,
    OrderListModule,
    PickListModule,
    SplitButtonModule    
  ],
})
export class AdminModule { }
