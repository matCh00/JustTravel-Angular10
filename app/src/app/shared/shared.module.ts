import {NgModule} from '@angular/core';
import {GoogleMapsComponent} from './components/google-maps/google-maps.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [GoogleMapsComponent],
  exports: [
    GoogleMapsComponent
  ],
  imports: [
    GoogleMapsModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ]
})
export class SharedModule {
}
