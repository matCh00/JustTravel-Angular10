import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TravelListComponent} from './travel-list/travel-list.component';
import {TravelDetailsComponent} from './travel-details/travel-details.component';
import { TravelComponent } from './travel.component';
import { TravelCarouselComponent } from './travel-carousel/travel-carousel.component';
import {TravelRoutingModule} from "./travel-routing.module";


@NgModule({
  declarations: [TravelListComponent, TravelDetailsComponent, TravelComponent, TravelCarouselComponent],
  imports: [
    CommonModule,
    TravelRoutingModule
  ]
})
export class TravelModule {
}
