import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditorComponent } from './register/auditor/auditor.component';
import { EnterpriseComponent } from './register/enterprise/enterprise.component';


const routes: Routes = [
  { path: 'auditor',  component: AuditorComponent },
  { path: 'empresa',  component: EnterpriseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
