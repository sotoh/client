import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
//import { DETAILS_ROUTES } from './details/details.routes';

//{ path: '**', component: PageNotFoundComponent }
const appRoutes: Routes =[
  {path:'**', component: NotfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
