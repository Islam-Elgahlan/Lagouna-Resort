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
imgSrc:any
hideRequiredMarker:boolean=true;
facilities:IFacilities[]=[]
constructor(private _RoomsService:RoomsService,private _ActivatedRoute:ActivatedRoute, private _ToastrService :ToastrService,
  private _Router :Router){}
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
   let mydata=new FormData;
   let myMap = new Map(Object.entries(data.value))
   mydata.append('roomNumber',data.value.roomNumber),
   mydata.append('price',data.value.price),
   mydata.append('discount',data.value.discount),
   mydata.append('capacity',data.value.capacity),
   mydata.append('facilities',JSON.stringify(data.value.facilities)),
  //  for (const [key,value] of myMap) {
  //   mydata.append(key,data.value[key])
  //   console.log(key,data.value[key]);
    
  //  }
   console.log(mydata);
   
   if (this.imgSrc == null) {
    // No Action
  } else {
    mydata.append('imgs', this.imgSrc, this.imgSrc.name);
  }

  console.log(mydata);
  
  this._RoomsService.addRoom(mydata).subscribe({
    next:(res)=>{
      console.log(res);
      
    },error:(err)=>{

    },complete:()=> {
      
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
