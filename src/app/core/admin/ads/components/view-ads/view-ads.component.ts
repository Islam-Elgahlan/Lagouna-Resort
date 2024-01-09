import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdsService } from '../../services/ads.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-ads',
  templateUrl: './view-ads.component.html',
  styleUrls: ['./view-ads.component.scss']
})
export class ViewAdsComponent {
 
  constructor(public dialogRef: MatDialogRef<ViewAdsComponent> ,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _AdsService:AdsService,
    private _Toastr:ToastrService){
      console.log(data);
      
      this.getAdsData(data)
      
  }
  
ngOnInit(): void {

}
viewForm=new FormGroup({
    roomNumber:new FormControl(null),
  discount:new FormControl(null),
  isActive:new FormControl(null),
 })
 getAdsData(data:any){
  this.viewForm.patchValue({
    roomNumber:data.room?.roomNumber,
    discount:data.room?.discount,
    isActive:data.isActive
  }),this.disableForm()
 }
 disableForm(): void {
  this.viewForm.controls['roomNumber'].disable();
  this.viewForm.controls['discount'].disable();
  this.viewForm.controls['isActive'].disable();

  
}
  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data)
  }
}
