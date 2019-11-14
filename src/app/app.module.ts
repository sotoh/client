import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';
import { AdminModule } from './admin/admin.module';
import { AuditorModule } from './auditor/auditor.module';
import { EnduserModule } from './enduser/enduser.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,    
    AuthModule,
    ComponentsModule,
    AppRoutingModule,
    AdminModule,
    AuditorModule,
    EnduserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
