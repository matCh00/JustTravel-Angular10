import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TravelModule} from "./feature/travel/travel.module";
import {ReviewModule} from "./feature/review/review.module";
import {MapModule} from "./feature/map/map.module";
import {AdminPanelModule} from "./feature/admin-panel/admin-panel.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    TravelModule,
    ReviewModule,
    MapModule,
    AdminPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
