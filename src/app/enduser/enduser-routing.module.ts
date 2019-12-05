import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { ProfileuserComponent } from './profileuser/profileuser.component';
import { ReportuserComponent } from './reportuser/reportuser.component';


const routes: Routes = [
  {path:'empresa',component: HomeuserComponent, 
children: [
  {path:'perfil',component: ProfileuserComponent },
  {path:'reporte',component: ReportuserComponent }
] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnduserRoutingModule { }
