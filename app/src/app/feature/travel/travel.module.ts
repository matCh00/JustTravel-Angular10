import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TravelListComponent} from './travel-list/travel-list.component';
import {TravelDetailsComponent} from './travel-details/travel-details.component';


@NgModule({
  declarations: [TravelListComponent, TravelDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class TravelModule {
}
