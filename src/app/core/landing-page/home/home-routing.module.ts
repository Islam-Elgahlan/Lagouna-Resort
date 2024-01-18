import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { RoomDetailsComponent } from '../rooms/components/room-details/room-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},{
    path:'',component:HomeComponent
  },{
    path:'rooms-details/:id',component:RoomDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
