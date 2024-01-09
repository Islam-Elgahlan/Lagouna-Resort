import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsHomeComponent } from './components/ads-home/ads-home.component';
import { AddEditViewComponent } from './components/edit-view/add-edit-view.component';
import { AddAdsComponent } from './components/add-ads/add-ads.component';

const routes: Routes = [
  {path:'',redirectTo:'adsHome',pathMatch:'full'},
  {path:'',component:AdsHomeComponent},
  {path:'addeditview',component:AddEditViewComponent},
  {path:'addAds',component:AddAdsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
