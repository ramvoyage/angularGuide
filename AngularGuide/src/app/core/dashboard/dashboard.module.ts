import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialDesignModule } from 'src/app/materials.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialDesignModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { 

}