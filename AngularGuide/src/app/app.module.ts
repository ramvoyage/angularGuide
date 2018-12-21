import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './modules/master/master.component';
import { MaterialDesignModule } from './materials.module';
import { LayoutMaster } from './core/layout/layout-master.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    LayoutMaster
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
