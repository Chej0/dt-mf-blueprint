import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutComponent } from './app-layout.component';
import { SidebarComponent } from '../../standalone-components/sidebar/sidebar.component';
import { NavbarComponent } from '../../standalone-components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppLayoutComponent
  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    SidebarComponent,
    NavbarComponent
  ]
})
export class AppLayoutModule { }
