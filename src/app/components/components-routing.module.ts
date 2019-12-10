import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [  
  { path: 'login', component: LoginComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
