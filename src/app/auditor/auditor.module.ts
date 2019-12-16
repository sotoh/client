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
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { StatusPipe } from '../models/status.pipe';
import { HomequestionsComponent } from './homequestions/homequestions.component';
import { QuestionsComponent } from './questions/questions.component';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { OfiComponent } from './ofi/ofi.component';
import { SpinnerModule } from 'primeng/spinner';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { RangePipe } from './range.pipe';
import { IsorangePipe } from './isorange.pipe';
import { FinishComponent } from './finish/finish.component';


@NgModule({
  declarations: [ HomeauditorComponent, ProfileauditorComponent, AuditsauditorComponent, StatusPipe, HomequestionsComponent, QuestionsComponent, OfiComponent, RangePipe, IsorangePipe, FinishComponent],
  imports: [
    CommonModule,
    AuditorRoutingModule,
    DataViewModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    StepsModule,
    CardModule,
    TableModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule,
    InputSwitchModule,
    KeyFilterModule,
    MessageModule,
    MessagesModule,
    SpinnerModule,
    TriStateCheckboxModule
  ]
})
export class AuditorModule { }
