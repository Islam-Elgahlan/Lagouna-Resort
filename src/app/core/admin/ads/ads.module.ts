import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsHomeComponent } from './components/ads-home/ads-home.component';
import { AddEditViewComponent } from './components/add-edit-view/add-edit-view.component';


@NgModule({
  declarations: [
    AdsHomeComponent,
    AddEditViewComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule
  ]
})
export class AdsModule { }
