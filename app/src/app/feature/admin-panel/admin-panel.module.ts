import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersListComponent} from './users-list/users-list.component';
import {AdminPanelComponent} from './admin-panel.component';
import {AdminPanelRoutingModule} from "./admin-panel-routing.module";


@NgModule({
  declarations: [DashboardComponent, UsersListComponent, AdminPanelComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ]
})
export class AdminPanelModule {
}
