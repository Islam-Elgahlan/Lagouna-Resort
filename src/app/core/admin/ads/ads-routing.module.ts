import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsHomeComponent } from './components/ads-home/ads-home.component';
import { AddEditViewComponent } from './components/add-edit-view/add-edit-view.component';

const routes: Routes = [
  {path:'',redirectTo:'adsHome',pathMatch:'full'},
  {path:'',component:AdsHomeComponent},
  {path:'addeditview',component:AddEditViewComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
