import { Component, OnInit } from '@angular/core';
import { AddAdsComponent } from '../../../ads/components/add-ads/add-ads.component';
import { DashService } from '../../services/dash.service';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  allRooms:number=0
  allAds:number=0
  allFacilities:number=0
  allBookingsPending:number=0
  allBookingscompleted:number=0
  users:number=0
  admins:number=0
  chart: any = []
constructor(private _DashService:DashService){}
ngOnInit(): void {
  
  this.getAllData();
}

getAllData(){
  this._DashService.getData().subscribe({
    next:(res)=>{
      console.log(res);
      this.allRooms=res.data.rooms;
      this.allFacilities=res.data.facilities;
      this.allBookingsPending=res.data.bookings.pending;
      console.log(this.allBookingsPending);
      
      this.allBookingscompleted=res.data.bookings.completed;
      this.allAds=res.data.ads;
      this.users=res.data.users.users;
      this.users=res.data.users.user;
      this.admins=res.data.users.admin;
    },complete:()=>{
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: ['user', 'admin'],
          datasets: [
            {
              label: 'Users Number',
              data: [this.users,this.admins],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      this.chart = new Chart('pie', {
        type: 'pie',
        data: {
          labels: [
            'Pending Booking',
            'Completed Booking',
          
          ],
          datasets: [{
            label: 'Number of',
            data: [this.allBookingsPending,this.allBookingscompleted],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)'
            ],
             hoverOffset: 3
          }]
        },
      });
    }
  })
}
}
