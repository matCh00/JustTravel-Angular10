import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminPanelComponent } from './admin-panel.component';


@NgModule({
  declarations: [DashboardComponent, UsersListComponent, AdminPanelComponent],
  imports: [
    CommonModule
  ]
})
export class AdminPanelModule {
}
