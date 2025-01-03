import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import {ToolbarModule} from "primeng/toolbar";


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    SidebarModule,
    ToolbarModule,
  ]
})
export class CoreModule {
}
