import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReviewFormComponent} from './review-form/review-form.component';
import {ReviewListComponent} from './review-list/review-list.component';


@NgModule({
  declarations: [ReviewFormComponent, ReviewListComponent],
  imports: [
    CommonModule
  ]
})
export class ReviewModule {
}
