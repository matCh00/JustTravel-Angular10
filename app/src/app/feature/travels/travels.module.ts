import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TravelsComponent} from './travels.component';
import {TripListComponent} from './trip-list/trip-list.component';
import {TripDialogComponent} from './trip-dialog/trip-dialog.component';
import {TableModule} from "primeng/table";
import {RouterModule} from "@angular/router";
import {TooltipModule} from "primeng/tooltip";
import {ButtonModule} from "primeng/button";
import {TravelsRoutingModule} from "./travels-routing.module";


@NgModule({
  declarations: [TravelsComponent, TripListComponent, TripDialogComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule,
    TooltipModule,
    ButtonModule,
    TravelsRoutingModule
  ]
})
export class TravelsModule {
}
