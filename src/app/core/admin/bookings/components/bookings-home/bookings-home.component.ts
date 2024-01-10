import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ViewBookingComponent } from '../view-booking/view-booking.component';

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
  constructor(private _BookingsService: BookingsService,
    private dialog:MatDialog,
    private _toastr:ToastrService) {}
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
  onViewDialog(data:any){
    const dialogRef = this.dialog.open(ViewBookingComponent, {
      data: data,
      width: '30%'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  openDeleteDialog(data: any) {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data: data,
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        
        this.deleteItem(result._id);
        this.getAllBookings();
      }
    });
  }
  deleteItem(id: string) {
    this._BookingsService.deleteBooking(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        
        this._toastr.error('Try Again');
      },
      complete: () => {
        this._toastr.success('Booking deleted Successfully');
        this.getAllBookings();
      },
    });
  }
}
