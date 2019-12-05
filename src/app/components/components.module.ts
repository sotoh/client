import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenunavigatorComponent } from './menunavigator/menunavigator.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    TopbarComponent,
    MenunavigatorComponent,
    FooterComponent,
    NotfoundComponent    
  ],
  imports: [
    CommonModule,    
    TabMenuModule,
    ButtonModule,
    AutoCompleteModule,
    InputTextModule,
    BreadcrumbModule
  ],
  exports: [ 
    TopbarComponent,
    MenunavigatorComponent 
  ]
})
export class ComponentsModule { }
