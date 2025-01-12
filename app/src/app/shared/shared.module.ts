import {NgModule} from '@angular/core';
import {GoogleMapsComponent} from './components/google-maps/google-maps.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {NavButtonsComponent} from "./components/nav-buttons/nav-buttons.component";
import {TooltipModule} from "primeng/tooltip";
import {GoogleMapsGameComponent} from './components/google-maps-game/google-maps-game.component';


@NgModule({
  declarations: [GoogleMapsComponent, NavButtonsComponent, GoogleMapsGameComponent],
  exports: [
    GoogleMapsComponent,
    NavButtonsComponent,
    GoogleMapsGameComponent
  ],
  imports: [
    GoogleMapsModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    TooltipModule
  ]
})
export class SharedModule {
}
