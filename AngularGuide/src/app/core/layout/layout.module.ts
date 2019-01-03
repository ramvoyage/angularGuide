import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MaterialDesignModule } from 'src/app/materials.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MaterialDesignModule
  ],
  exports: [
    MainLayoutComponent,
    
  ],
  declarations: [
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }