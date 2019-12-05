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


const routes: Routes = [
  { path: 'auditor',  component: AuditorComponent },
  { path: 'empresa',  component: EnterpriseComponent },
  { path: 'empresas',  component: EnterprisesComponent },
  { path: 'auditores',  component: AuditorsComponent },
  { path: 'auditorias',  component: HomeauditsComponent, 
    children: [
      { path: 'crear',  component:  CreateComponent},
      { path: 'editar/:id',  component:  EditComponent},
      { path: 'plantillas',  component: HometemplateComponent,
        children: [
          {path:'interna', component:InternalauditComponent}
        ] }
  ] }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
