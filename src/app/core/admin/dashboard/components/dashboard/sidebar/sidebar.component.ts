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
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isOpened: boolean = true;
  toggleSidebar(){
    this.isOpened=!this.isOpened;

    // this.isOpenedflag.emit(this.isOpened)
  }

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
      link: '/admin/dashboard/dashboard/home',
      isActive: true,
    },
    {
      icon: 'fa-solid fa-user-group fs-4',
      title: 'Users',
      link: '/admin/dashboard/dashboard/users',
      isActive: true,
    },
    {
      icon:'fa-solid fa-cubes-stacked fs-4',
      title: 'Rooms',
      link: '/admin/dashboard/dashboard/rooms',
      isActive: true,
    },

    {
      icon: 'fa-brands fa-buysellads fs-4',
      title: 'Ads',
      link: '/admin/dashboard/dashboard/ads',
      isActive: true,
    },
    {
      icon: 'fa-solid fa-users fs-4',
      title: 'Bookings',
      link: '/admin/dashboard/dashboard/bookings',
      isActive: true,
    },
    {
      icon: 'fa-solid fa-layer-group fs-4',
      title: 'Facilities',
      link: '/admin/dashboard/dashboard/facilities',
      isActive: true,
    },
    {
      icon: 'fa-solid fa-layer-group fs-4',
      title: 'Change Password',
      link: '/admin/dashboard/change',
      isActive: true,
    },
    
    {
      icon: 'fa-solid fa-right-from-bracket fs-4',
      title: 'Logout',
      link: '/admin/dashboard/logout',
      isActive: true,
    },
  ];
}
