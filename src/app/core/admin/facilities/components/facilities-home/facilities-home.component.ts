import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from '../../services/facilities.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-facilities-home',
  templateUrl: './facilities-home.component.html',
  styleUrls: ['./facilities-home.component.scss'],
})
export class FacilitiesHomeComponent implements OnInit {
  tableData: any;
  constructor(
    private _Facilities: FacilitiesService,
    public dialog: MatDialog,
    private _toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllFacilities();
  }

  getAllFacilities() {
    this._Facilities.getAllFacilities().subscribe({
      next: (res) => {
        console.log(res.data.facilities);
        this.tableData = res.data.facilities;
      },
      error: (err) => {},
      complete: () => {},
    });
  }
  openAddDialog(data: any) {
    // console.log(data);

    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data: data,
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // console.log(result);
      if (result) {
        this.deleteItem(result._id);
        this.getAllFacilities();
      }
    });
  }
  deleteItem(id: string) {
    this._Facilities.deleteFacility(id).subscribe({
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
