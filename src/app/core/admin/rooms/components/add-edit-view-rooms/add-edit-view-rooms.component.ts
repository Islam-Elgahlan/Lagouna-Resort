import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFacilities } from '../../interfaces/rooms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-view-rooms',
  templateUrl: './add-edit-view-rooms.component.html',
  styleUrls: ['./add-edit-view-rooms.component.scss']
})
export class AddEditViewRoomsComponent implements OnInit{
files: File[] = [];
imgSrc:any;
roomId:string='';
hideRequiredMarker:boolean=true;
facilities:IFacilities[]=[]
isUpdatePge:boolean=false;
roomData:any;
fac:[] = [];
constructor(private _RoomsService:RoomsService,private _ActivatedRoute:ActivatedRoute, private _ToastrService :ToastrService,
  private _Router :Router){
this.roomId=_ActivatedRoute.snapshot.params['id']
console.log(this.roomId);

if (this.roomId) {
  this.isUpdatePge=true;
  this.getRoomById(this.roomId)
}else{
  this.isUpdatePge=false
}
  }
  ngOnInit(): void {
    this.getAllFaclities()
  }


  getAllFaclities(){
    this._RoomsService.getFacilities().subscribe({
      next:(res)=>{
        console.log(res.data.facilities);
        this.facilities=res.data.facilities
        
      },error:(err)=>{
  
      },complete:()=> {
        
      },
    })
  }


  roomForm=new FormGroup({
    roomNumber: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    discount: new FormControl(null, [Validators.required]),
    capacity: new FormControl(null, [Validators.required]),
    facilities: new FormControl(null, [Validators.required]),

  
  })


  onSubmit(data:FormGroup){
    let facc = data.value.facilities
   console.log(facc);
   let mydata=new FormData();
   let myMap = Object.entries(data.value)

   myMap.forEach(([key,value]:any) => {
    if (key == 'facilities' ) {
      value = facc
          mydata.append(key , value)
        }else{
          mydata.append(key,data.value[key])
        }
   });
  
  
   if (this.imgSrc == null) {
    // No Action
  } else {
    mydata.append('imgs', this.imgSrc, this.imgSrc.name);
  }

  console.log(mydata);
  if (this.roomId) {
    this._RoomsService.updateRoom(this.roomId,mydata).subscribe({
      next:(res)=>{
        console.log(res);
        this._ToastrService.success(res.message)
      },error:(err)=>{
        this._ToastrService.error(err.message)
      },complete:()=> {
        this._Router.navigate(['/admin/dashboard/dashboard/rooms/roomsHome'])
      },
    })
  } else {
    this._RoomsService.addRoom(mydata).subscribe({
      next:(res)=>{
        console.log(res);
        this._ToastrService.success(res.message)
      },error:(err)=>{
  
      },complete:()=> {
        this._Router.navigate(['/admin/dashboard/dashboard/rooms/roomsHome'])
      },
    })
  }
 
  }

  getRoomById(id:string){
    this._RoomsService.getRoombyId(id).subscribe({
      next:(res)=>{
        console.log(res.data.room);
        this.roomData=res.data.room
      },error:(err)=>{
  
      },complete:()=> {
        this.imgSrc='http://upskilling-egypt.com/'+ this.roomData.images
        this.roomForm.patchValue(
          {
            roomNumber:this.roomData.roomNumber,
            price:this.roomData.price,
            discount:this.roomData.discount,
            capacity:this.roomData.capacity,
            facilities:this.roomData.facilities
            

          }
        )

      },
    })
  }
  onSelect(event: any) {
    
    this.imgSrc = event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    
    this.files.splice(this.files.indexOf(event), 1);
  }

}
