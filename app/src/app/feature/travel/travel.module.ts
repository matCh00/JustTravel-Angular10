import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TravelListComponent} from './travel-list/travel-list.component';
import {TravelDetailsComponent} from './travel-details/travel-details.component';
import {TravelComponent} from './travel.component';
import {TravelCarouselComponent} from './travel-carousel/travel-carousel.component';
import {TravelRoutingModule} from "./travel-routing.module";
import {DeferModule} from "primeng/defer";
import {CarouselModule} from "primeng/carousel";
import {ProgressSpinnerModule} from "primeng/progressspinner";


@NgModule({
  declarations: [TravelListComponent, TravelDetailsComponent, TravelComponent, TravelCarouselComponent],
    imports: [
        CommonModule,
        TravelRoutingModule,
        DeferModule,
        CarouselModule,
        ProgressSpinnerModule
    ]
})
export class TravelModule {
}
