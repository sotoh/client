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
import { MenubarModule } from 'primeng/menubar';
import { AboutComponent } from './about/about.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomepageComponent } from './homepage/homepage.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    TopbarComponent,
    MenunavigatorComponent,
    FooterComponent,
    NotfoundComponent,
    AboutComponent,
    HomepageComponent    
  ],
  imports: [
    CommonModule,    
    TabMenuModule,
    ButtonModule,
    AutoCompleteModule,
    InputTextModule,
    BreadcrumbModule,
    CardModule,
    MenubarModule,
    ComponentsRoutingModule,
    AngularFontAwesomeModule
  ],
  exports: [ 
    TopbarComponent,
    MenunavigatorComponent ,
    HomepageComponent
  ]
})
export class ComponentsModule { }
