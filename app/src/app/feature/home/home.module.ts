import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HeroComponent} from './hero/hero.component';
import {InstructionComponent} from './instruction/instruction.component';
import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [HomeComponent, HeroComponent, InstructionComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        ButtonModule
    ],
  exports: [
    HeroComponent, InstructionComponent
  ]
})
export class HomeModule {
}
