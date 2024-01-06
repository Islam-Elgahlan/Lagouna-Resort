import { Component } from '@angular/core';
import { AddeditviewFacilityComponent } from '../addeditview-facility/addeditview-facility.component';
import { FacilitiesService } from '../../services/facilities.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-facilities-home',
  templateUrl: './facilities-home.component.html',
  styleUrls: ['./facilities-home.component.scss']
})
export class FacilitiesHomeComponent {
tableData:any;

constructor(private _FacilitiesService: FacilitiesService,
  private _MatDialog: MatDialog) { }

openDialog(): void {
  const dialogRef = this._MatDialog.open(AddeditviewFacilityComponent, {
    data: {},
    width: '40%',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    if (result) {
      this.onAddFacility(result)
      // this.getTableData()
    }
  });
}
onAddFacility(data: string) {
  this._FacilitiesService.addFacility(data).subscribe((res) => {
    // this.getTableData()
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

}
