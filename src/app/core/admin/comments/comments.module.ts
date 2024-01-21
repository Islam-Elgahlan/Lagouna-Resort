import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './components/comments/comments.component';
import { UpdateCommentComponent } from './components/update-comment/update-comment.component';


@NgModule({
  declarations: [
    CommentsComponent,
    UpdateCommentComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ]
})
export class CommentsModule { }
