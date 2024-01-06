import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersHomeComponent } from './components/users-home/users-home.component';
import { AddEditViewUserComponent } from './components/add-edit-view-user/add-edit-view-user.component';

const routes: Routes = [
  {path:'',redirectTo:'usersHome',pathMatch:'full'},
  {path:'',component:UsersHomeComponent},
  {path:'addeditview',component:AddEditViewUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
