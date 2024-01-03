import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { RoomsComponent } from '../rooms/rooms.component';
const routes: Routes = [{ path: '', component: HomeComponent }];
@NgModule({
  imports: [CommonModule], 
  declarations: [HomeComponent],
})
export class HomeModule {}
