import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() isOpenedflag = new EventEmitter<boolean>();
   isOpened:boolean=true;
  toggleSidebar(){
    this.isOpened=!this.isOpened;

    this.isOpenedflag.emit(this.isOpened)
  }

 

  menu: Imenu[] = [
    {
      icon: 'fa-solid fa-house fs-4',
      title: 'home',
      link: '/admin/dashboard/home',
      isActive: true,
    },
    {
      icon: 'fa-solid fa-user-group fs-4',
      title: 'Users',
      link: '/admin/dashboard/users',
      isActive: true,
    },
    {
      icon:'fa-solid fa-cubes-stacked fs-4',
      title: 'Rooms',
      link: '/admin/dashboard/rooms',
      isActive: true,
    },

    {
      icon: 'fa-brands fa-buysellads fs-4',
      title: 'Ads',
      link: '/admin/dashboard/ads',
      isActive: true,
    },
    {
      icon: 'fa-solid fa-users fs-4',
      title: 'Bookings',
      link: '/admin/dashboard/bookings',
      isActive: true,
    },
    {
      icon: 'fa-solid fa-layer-group fs-4',
      title: 'Facilities',
      link: '/admin/dashboard/facilities',
      isActive: true,
    },
   
  ];
}
