import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsHomeComponent } from './components/rooms-home/rooms-home.component';
import { AddEditViewRoomsComponent } from './components/add-edit-view-rooms/add-edit-view-rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RoomsHomeComponent,
    AddEditViewRoomsComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedModule
  ]
})
export class RoomsModule { }
