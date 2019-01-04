import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { MaterialDesignModule } from '../materials.module';


@NgModule({
    imports: [
      CommonModule,
      LoginRoutingModule,
      MaterialDesignModule
    ],
    declarations: [LoginComponent],
    exports:[LoginComponent]
  })
  export class LoginModule { }