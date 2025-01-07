import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./feature/home/home.module").then(m => m.HomeModule),
  },
  {
    path: "explore",
    loadChildren: () => import("./feature/explore/explore.module").then(m => m.ExploreModule),
  },

  {
    path: "travel",
    loadChildren: () => import("./feature/travel/travel.module").then(m => m.TravelModule),
  },
  {
    path: "travels",
    loadChildren: () => import("./feature/travels/travels.module").then(r => r.TravelsModule),
  },

  {
    path: "**",
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
