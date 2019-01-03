import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {DashboardComponent} from './dashboard.component';
import {HeaderComponent} from '../layout/header/header.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: '1',component:HeaderComponent}
    ]
  }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }