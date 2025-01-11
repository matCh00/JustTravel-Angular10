import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map/map.component';
import {TravelComponent} from "./travel.component";
import {TravelRoutingModule} from "./travel-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { TripDetailsFormComponent } from './trip-details-form/trip-details-form.component';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";


@NgModule({
  declarations: [TravelComponent, MapComponent, TripDetailsFormComponent],
  imports: [
    CommonModule,
    TravelRoutingModule,
    SharedModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
  ]
})
export class TravelModule {
}
