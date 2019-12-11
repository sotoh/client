import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditorComponent } from './register/auditor/auditor.component';
import { EnterpriseComponent } from './register/enterprise/enterprise.component';
import { AuditorsComponent } from './index/auditors/auditors.component';
import { EnterprisesComponent } from './index/enterprises/enterprises.component';
import { CreateComponent } from './audits/custom/create/create.component';
import { EditComponent } from './audits/custom/edit/edit.component';
import { HomeauditsComponent } from './audits/homeaudits/homeaudits.component';
import { HometemplateComponent } from './audits/template/hometemplate/hometemplate.component';
import { InternalauditComponent } from './audits/template/internalaudit/internalaudit.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { IndexComponent } from './index/index.component';
import { AdminguardService } from './services/adminguard.service';
import { AssignComponent } from './index/assign/assign.component';

//{path:'**', component: NotfoundComponent}
//, canActivate: [AdminguardService]
const routes: Routes = [
  { path: '', component: HomeadminComponent, 
  children: [
    { path: 'auditor',  component: AuditorComponent},
    { path: 'empresa',  component: EnterpriseComponent },
    { path: 'usuarios',  component: IndexComponent, 
      children: [
        { path: 'empresas',  component: EnterprisesComponent },
        { path: 'auditores',  component: AuditorsComponent },
        { path: 'auditorias',  component: AssignComponent }
    ]},
    { path: '',  component: HomeauditsComponent, 
      children: [
        { path: 'crear',  component:  CreateComponent},
        { path: 'auditorias',  component: HometemplateComponent,
          children: [
            {path:'plantillas/:id', component:InternalauditComponent},
            {path:'editar/:id',  component:  EditComponent}
        ] }
      ]}
    ], canActivate: [AdminguardService]}
  ];
  /*const routes: Routes = [
      { path: 'auditor',  component: AuditorComponent },
      { path: 'empresa',  component: EnterpriseComponent },
      { path: 'usuarios',  component: IndexComponent, 
        children: [
          { path: 'empresas',  component: EnterprisesComponent },
          { path: 'auditores',  component: AuditorsComponent },
          { path: 'auditorias',  component: AssignComponent }
      ]},
      { path: '',  component: HomeauditsComponent, 
        children: [
          { path: 'crear',  component:  CreateComponent},
          { path: 'auditorias',  component: HometemplateComponent,
            children: [
              {path:'plantillas/:id', component:InternalauditComponent},
              {path:'editar/:id',  component:  EditComponent}
          ] }
        ]}
    ]*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
