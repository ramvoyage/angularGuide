import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { MaterialDesignModule } from '../materials.module';
import { RegisterComponent } from '../register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    imports: [
      CommonModule,
      LoginRoutingModule,
      MaterialDesignModule,
      ReactiveFormsModule,
      FormsModule
    ],
    declarations: [
      LoginComponent,
      RegisterComponent
    ],
    exports:[
      LoginComponent,
      RegisterComponent,
    ]
  })
  export class LoginModule { }