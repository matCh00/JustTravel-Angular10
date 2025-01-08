import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExploreComponent} from './explore.component';
import {MapComponent} from './map/map.component';
import {PlacesCarouselComponent} from './places-carousel/places-carousel.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {CarouselModule} from "primeng/carousel";
import {DeferModule} from "primeng/defer";
import {ExploreRoutingModule} from "./explore-routing.module";


@NgModule({
  declarations: [ExploreComponent, MapComponent, PlacesCarouselComponent],
  exports: [
    MapComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    CarouselModule,
    DeferModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule {
}
