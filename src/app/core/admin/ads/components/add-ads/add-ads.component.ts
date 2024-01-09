import { Component, OnInit } from '@angular/core';
import { IRoom } from '../../interfaces/ads';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { AdsService } from '../../services/ads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent implements OnInit{
  pageSize: number = 15;
  pageNumber: number | undefined = 1;
  rooms:IRoom[]=[];
  
  constructor(
  
     private _AdsService:AdsService,
     private _Toastr:ToastrService,
     private _Router:Router,
     private _RoomsService:RoomsService) {
  
      }
  ngOnInit(): void {
  this.getAllrooms()
  }
      
 adsForm =new FormGroup({
      room:new FormControl(null,[Validators.required]),
      discount:new FormControl(null,[Validators.required]),
      isActive:new FormControl(null,[Validators.required]),
     })
     

     getAllrooms(){
      let x = {
        size: this.pageSize,
        page: this.pageNumber,
      };
      this._RoomsService.onGetRooms(x).subscribe({
        next:(res)=>{
          console.log(res.data.rooms);
          this.rooms=res.data.rooms
        
        }
      })
     }
     onSubmit(form:FormGroup){
      console.log(form.value);
     
        this._AdsService.addAds(form.value).subscribe({
          next:(res)=>{
            console.log(res);
            this._Toastr.success(res.message)
           
          },error:(err)=>{
            this._Toastr.success(err.error.message)
          },complete:()=> {
            
            this._Router.navigate(['/admin/dashboard/ads'])
          }
        })
      }
     
    }
     
