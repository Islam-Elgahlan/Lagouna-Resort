import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersHomeComponent } from './components/users-home/users-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewUserComponent } from './components/view-user/view-user.component';


@NgModule({
  declarations: [
    UsersHomeComponent,
    ViewUserComponent,
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
