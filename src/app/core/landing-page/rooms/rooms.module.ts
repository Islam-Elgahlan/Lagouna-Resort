import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomDetailsComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedModule
  ]
})
export class RoomsModule { }
