import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from '../../services/facilities.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { ToastrService } from 'ngx-toastr';

import { AddeditviewFacilityComponent } from '../addeditview-facility/addeditview-facility.component';

@Component({
  selector: 'app-facilities-home',
  templateUrl: './facilities-home.component.html',
  styleUrls: ['./facilities-home.component.scss'],
})
export class FacilitiesHomeComponent implements OnInit {
  tableData: any;
  constructor(
    private _FacilitiesService: FacilitiesService,
    public _MatDialog: MatDialog,
    private _toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllFacilities();
  }
 
getAllFacilities(){
  this._FacilitiesService.getAllFacilities().subscribe({
    next:(res)=>{
      console.log(res.data.facilities);
      this.tableData=res.data.facilities
    },error:(err)=>{

    },complete:()=> {
      
    },
  })
}



openAddDialogue(): void {
  const dialogRef = this._MatDialog.open(AddeditviewFacilityComponent, {
    data: {},
    width: '40%',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    if (result) {
      this.onAddFacility(result)
    
    }
  });
}
onAddFacility(data: string) {
  this._FacilitiesService.addFacility(data).subscribe((res) => {
this.getAllFacilities()
    console.log(res)
  })
}

onEditDialog(data: any): void {
  const dialogRef = this._MatDialog.open(AddeditviewFacilityComponent, {
    data: {data},
    width: '40%',
  
  });
  // console.log(categoryData.id)
  dialogRef.afterClosed().subscribe(result => {
    console.log(data.id);
    if (result) {
      console.log(result);

      this.onEditFacility(result ,data.id)
      // this.getTableData()
    }
  });
}

onEditFacility(data:any ,id:number) {
  this._FacilitiesService.updateFacility(data , id).subscribe((res) => {
    // this.getTableData()
    // console.log(res)
  })
}


  
  openDeleteDialog(data: any) {
    // console.log(data);

    const dialogRef = this._MatDialog.open(DeleteItemComponent, {
      data: data,
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // console.log(result);
      if (result) {
        this.deleteItem(result._id);
      }
    });
  }
  deleteItem(id: string) {
    this._FacilitiesService.deleteFacility(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this._toastr.error('Try Again');
      },
      complete: () => {
        this._toastr.success('Room deleted Successfully');
        this.getAllFacilities();
      },
    });
  }
}
