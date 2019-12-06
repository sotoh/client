import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeauditorComponent } from './homeauditor/homeauditor.component';
import { ProfileauditorComponent } from './profileauditor/profileauditor.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { AuditsauditorComponent } from './auditsauditor/auditsauditor.component';
import { AuditorguardService } from './services/auditorguard.service';

//{path:'**', component: NotfoundComponent}
//, canActivate: [AuditorguardService]
const routes: Routes = [
  { path:'auditor', component: HomeauditorComponent,
   children: [
    {path:'perfil', component: ProfileauditorComponent },
    {path:'auditorias', component: AuditsauditorComponent }
  ], canActivate: [AuditorguardService]} 
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditorRoutingModule { }
