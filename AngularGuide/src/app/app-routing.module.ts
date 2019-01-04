import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "", redirectTo: '/dashboard',pathMatch: 'full' },
  // {path:"route",component:RouteModuleComponent}
  // {path:"login",component:LoginComponent},
  // {path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild([])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
