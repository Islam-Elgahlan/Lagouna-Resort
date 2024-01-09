import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdsService } from '../../services/ads.service';
import { ToastrService } from 'ngx-toastr';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { IRoom } from '../../interfaces/ads';

@Component({
  selector: 'app-add-edit-view',
  templateUrl: './add-edit-view.component.html',
  styleUrls: ['./add-edit-view.component.scss']
})
export class AddEditViewComponent implements OnInit{
  roomId!:string;
  pageSize: number = 15;
  pageNumber: number | undefined = 1;
  rooms:IRoom[]=[];


  constructor(
    public dialogRef: MatDialogRef<AddEditViewComponent> ,
     @Inject(MAT_DIALOG_DATA) public data: any,
     private _AdsService:AdsService,
     private _Toastr:ToastrService) {
      
      console.log(data);
      this.roomId=data?._id
      
      
      this.getAdsbyId(data)
      
      
     }
ngOnInit(): void {
 
}

    
editForm=new FormGroup({
    
      discount:new FormControl(null,[Validators.required]),
      isActive:new FormControl(null,[Validators.required]),
     })

  onSubmit(form:FormGroup){
      console.log(form.value);
     
        this._AdsService.updateAds(this.roomId,this.editForm.value).subscribe({
          next:(res)=>{
            console.log(res);
            this._Toastr.success(res.message)
          },error:(err)=>{
      
          },complete:()=> {

            this.onNoClick()
          }})
     
      }
     
      
    
     getAdsbyId(data:any){
      this.editForm.patchValue({
        
        discount:data.room?.discount,
        isActive:data.isActive
      })
     }
    onNoClick(): void {
      this.dialogRef.close();
      console.log(this.data)
    }
}
