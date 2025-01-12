import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExploreComponent} from './explore.component';
import {PlacesCarouselComponent} from './places-carousel/places-carousel.component';
import {DeferModule} from "primeng/defer";
import {ExploreRoutingModule} from "./explore-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {CarouselModule} from "primeng/carousel";


@NgModule({
  declarations: [ExploreComponent, PlacesCarouselComponent],
  imports: [
    CommonModule,
    DeferModule,
    ExploreRoutingModule,
    SharedModule,
    ProgressSpinnerModule,
    CarouselModule
  ]
})
export class ExploreModule {
}
