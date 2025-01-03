import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./feature/travel/travel-routing.module").then(m => m.TravelRoutingModule),
  },
  {
    path: "review",
    loadChildren: () => import("./feature/review/review-routing.module").then(m => m.ReviewRoutingModule),
  },
  {
    path: "map",
    loadChildren: () => import("./feature/map/map-routing.module").then(m => m.MapRoutingModule),
  },
  {
    path: "admin-panel",
    loadChildren: () => import("./feature/admin-panel/admin-panel-routing.module").then(r => r.AdminPanelRoutingModule),
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
