import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewComponent } from './components/review/review.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ReviewComponent
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    SharedModule
  ]
})
export class ReviewsModule { }
