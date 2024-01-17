import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';

const routes: Routes = [
  {path:'',redirectTo:'allRooms',pathMatch:'full'},
  {path:'',component:RoomsComponent},
  {path: 'allRooms' , component: RoomsComponent},
  {path: 'room-details/:id' , component: RoomDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
