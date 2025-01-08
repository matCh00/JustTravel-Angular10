import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map/map.component';
import {TravelComponent} from "./travel.component";
import {TravelRoutingModule} from "./travel-routing.module";
import {GoogleMapsModule} from "@angular/google-maps";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [TravelComponent, MapComponent],
  imports: [
    CommonModule,
    TravelRoutingModule,
    GoogleMapsModule,
    InputTextModule,
    ButtonModule,
  ]
})
export class TravelModule {
}
