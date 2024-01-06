import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesHomeComponent } from './components/facilities-home/facilities-home.component';
import { AddeditviewFacilityComponent } from './components/addeditview-facility/addeditview-facility.component';


@NgModule({
  declarations: [
    FacilitiesHomeComponent,
    AddeditviewFacilityComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule
  ]
})
export class FacilitiesModule { }
