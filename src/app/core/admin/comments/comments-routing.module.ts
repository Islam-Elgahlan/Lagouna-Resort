import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { UpdateCommentComponent } from './components/update-comment/update-comment.component';

const routes: Routes = [
  {path:'',redirectTo:'review',pathMatch:'full'},
  {path:'',component:CommentsComponent},
  {path:'update-comment',component:UpdateCommentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
