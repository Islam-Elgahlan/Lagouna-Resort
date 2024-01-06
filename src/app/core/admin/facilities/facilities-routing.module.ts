import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitiesHomeComponent } from './components/facilities-home/facilities-home.component';
import { AddeditviewFacilityComponent } from './components/addeditview-facility/addeditview-facility.component';

const routes: Routes = [
  {path:'',redirectTo:'facilitiesHome',pathMatch:'full'},
  {path:'',component:FacilitiesHomeComponent},
  {path:'addeditview',component:AddeditviewFacilityComponent},
  {path:'addeditview/:id',component:AddeditviewFacilityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule { }
