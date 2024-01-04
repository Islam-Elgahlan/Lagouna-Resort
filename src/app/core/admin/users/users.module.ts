import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersHomeComponent } from './components/users-home/users-home.component';
import { AddEditViewUserComponent } from './components/add-edit-view-user/add-edit-view-user.component';


@NgModule({
  declarations: [
    UsersHomeComponent,
    AddEditViewUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
