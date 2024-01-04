import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsHomeComponent } from './components/rooms-home/rooms-home.component';
import { AddEditViewRoomsComponent } from './components/add-edit-view-rooms/add-edit-view-rooms.component';


@NgModule({
  declarations: [
    RoomsHomeComponent,
    AddEditViewRoomsComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
