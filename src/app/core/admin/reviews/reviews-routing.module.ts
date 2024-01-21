import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
  {path:'',redirectTo:'review',pathMatch:'full'},
  {path:'',component:ReviewComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
