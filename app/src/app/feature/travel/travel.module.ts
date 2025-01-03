import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TravelListComponent} from './travel-list/travel-list.component';
import {TravelDetailsComponent} from './travel-details/travel-details.component';
import { TravelComponent } from './travel.component';
import { TravelCarouselComponent } from './travel-carousel/travel-carousel.component';


@NgModule({
  declarations: [TravelListComponent, TravelDetailsComponent, TravelComponent, TravelCarouselComponent],
  imports: [
    CommonModule
  ]
})
export class TravelModule {
}
