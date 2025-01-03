import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReviewFormComponent} from './review-form/review-form.component';
import {ReviewListComponent} from './review-list/review-list.component';
import { ReviewComponent } from './review.component';


@NgModule({
  declarations: [ReviewFormComponent, ReviewListComponent, ReviewComponent],
  imports: [
    CommonModule
  ]
})
export class ReviewModule {
}
