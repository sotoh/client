import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeauditorComponent } from './homeauditor/homeauditor.component';
import { ProfileauditorComponent } from './profileauditor/profileauditor.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { AuditsauditorComponent } from './auditsauditor/auditsauditor.component';
import { AuditorguardService } from './services/auditorguard.service';
import { HomequestionsComponent } from './homequestions/homequestions.component';
import { QuestionsComponent } from './questions/questions.component';

//{path:'**', component: NotfoundComponent}
//, canActivate: [AuditorguardService]
const routes: Routes = [
  { path: 'auditor', component: HomeauditorComponent ,
   children: [
    {path: '',  loadChildren: () => import('../components/components.module').then(m => m.ComponentsModule)}, 
    {path: 'perfil', component: ProfileauditorComponent},
    {path: 'auditorias', component: AuditsauditorComponent}, 
    {path: 'question', component: HomequestionsComponent, children: [
      {path:':audit/:enterprise', component: QuestionsComponent}
    ]}    
  ], canActivate: [AuditorguardService]} ,    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditorRoutingModule { }
