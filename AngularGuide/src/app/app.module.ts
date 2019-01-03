import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './materials.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './core/dashboard/dashboard.module';
import { LayoutModule } from './core/layout/layout.module';
import { RegisterComponent } from './register/register.component';
import { RouteModuleComponent } from './core/route-module/route-module.component';
import { LoginModule } from './login/login.module';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RouteModuleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialDesignModule,
    AppRoutingModule,
    DashboardModule,
    LayoutModule,
    LoginModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
