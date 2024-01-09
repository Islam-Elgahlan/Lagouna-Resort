import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsHomeComponent } from './components/ads-home/ads-home.component';
import { AddEditViewComponent } from './components/edit-view/add-edit-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAdsComponent } from './components/add-ads/add-ads.component';
import { ViewAdsComponent } from './components/view-ads/view-ads.component';


@NgModule({
  declarations: [
    AdsHomeComponent,
    AddEditViewComponent,
    AddAdsComponent,
    ViewAdsComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule
  ]
})
export class AdsModule { }
