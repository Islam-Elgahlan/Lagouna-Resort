import { Component } from '@angular/core';
interface Imenu {
  title: string;
  icon: string;
  link: string;
  isActive: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  // toggleSidebar(){
  //   this.isOpened=!this.isOpened;

  //   this.isOpenedflag.emit(this.isOpened)
  // }

  isManager(): boolean {
    // if (this._auth.role == 'Manager') {
    //   return this._auth.role == 'Manager'
    // }else{
    //   return false
    // }
    return true;
  }
  isEmployee(): boolean {
    // if (this._auth.role == 'Employee') {
    //   return true
    // }else{
    //   return false
    // }
    return true;
  }

  menu: Imenu[] = [
    {
      icon: 'fa-solid fa-house fs-4',
      title: 'home',
      link: '/dashboard/manager/home',
      isActive: true,
    },
    {
      icon: 'fa-solid fa-house fs-4',
      title: 'Users',
      link: '/dashboard/employee/home',
      isActive: true,
    },
    {
      icon: 'fa-solid fa-layer-group fs-4',
      title: 'Rooms',
      link: '/dashboard/manager/projects',
      isActive: true,
    },

    {
      icon: 'fa-solid fa-users fs-4',
      title: 'Ads',
      link: '/dashboard/manager/users',
      isActive: true,
    },
    {
      icon: 'fa-solid fa-list-check fs-4',
      title: 'Bookings',
      link: '/dashboard/manager/tasks',
      isActive: true,
    },
    {
      icon: 'fa-solid fa-layer-group fs-4',
      title: 'Change Password',
      link: '/dashboard/employee/projects',
      isActive: true,
    },
    {
      icon: 'fa-solid fa-list-check fs-4',
      title: 'Logout',
      link: '/dashboard/employee/tasks',
      isActive: true,
    },
  ];
}
