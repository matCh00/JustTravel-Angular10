import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TravelsComponent} from './travels.component';
import {TripListComponent} from './trip-list/trip-list.component';
import {TripDialogFormComponent} from './trip-dialog-form/trip-dialog-form.component';
import {TableModule} from "primeng/table";
import {RouterModule} from "@angular/router";
import {TooltipModule} from "primeng/tooltip";
import {ButtonModule} from "primeng/button";
import {TravelsRoutingModule} from "./travels-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {DeferModule} from "primeng/defer";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [TravelsComponent, TripListComponent, TripDialogFormComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule,
    TooltipModule,
    ButtonModule,
    TravelsRoutingModule,
    SharedModule,
    DeferModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    DialogModule
  ]
})
export class TravelsModule {
}
