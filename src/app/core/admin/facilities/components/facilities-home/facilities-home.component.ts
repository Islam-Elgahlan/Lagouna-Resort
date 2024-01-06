import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from '../../services/facilities.service';

@Component({
  selector: 'app-facilities-home',
  templateUrl: './facilities-home.component.html',
  styleUrls: ['./facilities-home.component.scss']
})
export class FacilitiesHomeComponent implements OnInit{
tableData:any;
constructor(private _Facilities:FacilitiesService,){}
  ngOnInit(): void {
    this.getAllFacilities()
  }
 
getAllFacilities(){
  this._Facilities.getAllFacilities().subscribe({
    next:(res)=>{
      console.log(res.data.facilities);
      this.tableData=res.data.facilities
    },error:(err)=>{

    },complete:()=> {
      
    },
  })
}


}
