import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersHomeComponent } from './components/users-home/users-home.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  {path:'',redirectTo:'usersHome',pathMatch:'full'},
  {path:'',component:UsersHomeComponent},
  {path:'view/:id',component:ViewUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
