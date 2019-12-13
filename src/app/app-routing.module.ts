import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
//import { AuditorModule } from './auditor/auditor.module';
//import { DETAILS_ROUTES } from './details/details.routes';

//{path:'**', component: NotfoundComponent}
const appRoutes: Routes =[
  /*{ path: 'auditor',loadChildren: () => import('./auditor/auditor.module').then(m => m.AuditorModule)},
  { path: 'admin',loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path: 'usuario',loadChildren: () => import('./enduser/enduser.module').then(m => m.EnduserModule)}*/
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
