import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-bookings-home',
  templateUrl: './bookings-home.component.html',
  styleUrls: ['./bookings-home.component.scss'],
})
export class BookingsHomeComponent implements OnInit {
  tableData: any;

  ngOnInit() { 
    this.getAllBookings()
  }
  constructor(private _BookingsService: BookingsService) {}
  getAllBookings() {
    this._BookingsService.onGetAllBookings().subscribe({
      next: (res) => {
        console.log(res.data.booking);
        this.tableData = res.data.booking;
      },
      error: (err) => {},
      complete: () => {},
    });
  }
}
