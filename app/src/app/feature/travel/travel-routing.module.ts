import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TravelComponent} from "./travel.component";
import {TravelDetailsComponent} from "./travel-details/travel-details.component";

const routes: Routes = [
  {
    path: "",
    component: TravelComponent,
  },
  {
    path: "travel/:travelId",
    component: TravelDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRoutingModule {
}
