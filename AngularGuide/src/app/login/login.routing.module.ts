import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FooterComponent } from '../core/layout/footer/footer.component';


const routes: Routes = [
    {
        path: 'login',  
        component: FooterComponent,
        children: [
            {
                path:'',component:LoginComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule { }