import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HeroComponent} from './hero/hero.component';
import {InstructionComponent} from './instruction/instruction.component';
import {NavButtonsComponent} from './nav-buttons/nav-buttons.component';
import {DeferModule} from "primeng/defer";
import {HomeRoutingModule} from "./home-routing.module";


@NgModule({
  declarations: [HomeComponent, HeroComponent, InstructionComponent, NavButtonsComponent],
  imports: [
    CommonModule,
    DeferModule,
    HomeRoutingModule
  ],
  exports: [
    HeroComponent, InstructionComponent, NavButtonsComponent
  ]
})
export class HomeModule {
}
