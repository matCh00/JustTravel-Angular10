import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TravelComponent} from "./travel.component";
import {TravelResolver} from "./travel.resolver";

const routes: Routes = [
  {
    path: ":travelId",
    component: TravelComponent,
    resolve: {
      trip: TravelResolver
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRoutingModule {
}
