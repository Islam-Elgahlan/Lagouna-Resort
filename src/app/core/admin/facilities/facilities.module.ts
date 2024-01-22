import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesHomeComponent } from './components/facilities-home/facilities-home.component';
import { AddeditviewFacilityComponent } from './components/addeditview-facility/addeditview-facility.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditViewComponent } from './components/edit-view/edit-view.component';


@NgModule({
  declarations: [
    FacilitiesHomeComponent,
    AddeditviewFacilityComponent,
    EditViewComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    SharedModule
  ]
})
export class FacilitiesModule {}
