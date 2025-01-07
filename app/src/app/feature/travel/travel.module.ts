import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map/map.component';
import {TravelComponent} from "./travel.component";
import {TravelRoutingModule} from "./travel-routing.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [TravelComponent, MapComponent],
  imports: [
    CommonModule,
    TravelRoutingModule,
    SharedModule
  ]
})
export class TravelModule {
}
