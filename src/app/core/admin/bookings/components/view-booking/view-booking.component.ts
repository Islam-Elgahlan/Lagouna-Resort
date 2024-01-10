import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss']
})
export class ViewBookingComponent {
  constructor(public dialogRef: MatDialogRef<ViewBookingComponent> ,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    private _Toastr:ToastrService){
      console.log(data);
      
      this.getAdsData(data)
      
  }
  
ngOnInit(): void {

}
viewForm=new FormGroup({
    roomNumber:new FormControl(null),
  price:new FormControl(null),
  startDate:new FormControl(null),
  endDate:new FormControl(null),
 })
 getAdsData(data:any){
  this.viewForm.patchValue({
    roomNumber:data.roomNumber,
    price:data.totalPrice,
    startDate:data.startDate,
    endDate:data.endDate
  }),this.disableForm()
 }
 disableForm(): void {
  this.viewForm.controls['roomNumber'].disable();
  this.viewForm.controls['price'].disable();
  this.viewForm.controls['startDate'].disable();
  this.viewForm.controls['endDate'].disable();

  
}
  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data)
  }
}
