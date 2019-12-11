import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { ProfileuserComponent } from './profileuser/profileuser.component';
import { ReportuserComponent } from './reportuser/reportuser.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { EnduserguardService } from './services/enduserguard.service';

//{path:'**', component: NotfoundComponent} 
//,canActivate: [EnduserguardService]
const routes: Routes = [
  {path:'',component: HomeuserComponent, 
children: [
  {path:'perfil',component: ProfileuserComponent },
  {path:'reportes',component: ReportuserComponent }
],canActivate: [EnduserguardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnduserRoutingModule { }
