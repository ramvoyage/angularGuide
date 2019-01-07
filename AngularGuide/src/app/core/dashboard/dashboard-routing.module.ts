import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {DashboardComponent} from './dashboard.component';
import {HeaderComponent} from '../layout/header/header.component';
import { RouteModuleComponent } from '../route-module/route-module.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {path:'dashboard',component:DashboardComponent},
      {path: 'route',component:RouteModuleComponent}

  ]
  }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }