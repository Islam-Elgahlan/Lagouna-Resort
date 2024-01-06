import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsHomeComponent } from './components/rooms-home/rooms-home.component';
import { AddEditViewRoomsComponent } from './components/add-edit-view-rooms/add-edit-view-rooms.component';

const routes: Routes = [
  {path:'',redirectTo:'roomsHome',pathMatch:'full'},
  {path:'roomsHome',component:RoomsHomeComponent},
  {path:'addeditview',component:AddEditViewRoomsComponent},
  {path:'addeditview/:id',component:AddEditViewRoomsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
