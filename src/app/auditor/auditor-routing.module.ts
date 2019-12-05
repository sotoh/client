import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeauditorComponent } from './homeauditor/homeauditor.component';
import { ProfileauditorComponent } from './profileauditor/profileauditor.component';
import { AuditsComponent } from './audits/audits.component';


const routes: Routes = [
  {path:'auditor', component: HomeauditorComponent,
 children: [
   {path:'perfil', component: ProfileauditorComponent },
   {path:'auditorias', component: AuditsComponent }
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditorRoutingModule { }
