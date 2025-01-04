import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./feature/travel/travel.module").then(m => m.TravelModule),
  },
  {
    path: "review",
    loadChildren: () => import("./feature/review/review.module").then(m => m.ReviewModule),
  },
  {
    path: "map",
    loadChildren: () => import("./feature/map/map.module").then(m => m.MapModule),
  },
  {
    path: "admin-panel",
    loadChildren: () => import("./feature/admin-panel/admin-panel.module").then(r => r.AdminPanelModule),
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
