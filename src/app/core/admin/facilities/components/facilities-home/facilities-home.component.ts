import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from '../../services/facilities.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { ToastrService } from 'ngx-toastr';
import { AddeditviewFacilityComponent } from '../addeditview-facility/addeditview-facility.component';
import { EditViewComponent } from '../edit-view/edit-view.component';

@Component({
  selector: 'app-facilities-home',
  templateUrl: './facilities-home.component.html',
  styleUrls: ['./facilities-home.component.scss'],
})
export class FacilitiesHomeComponent implements OnInit {
  pageIndex: number = 0;
  pageSize: number = 5;
  pageNumber: number | undefined = 1;
  tableResponse: any;
  tableData: any[] = [];
  constructor(
    private _FacilitiesService: FacilitiesService,
    public _MatDialog: MatDialog,
    private _toastr: ToastrService
  ) { }
  ngOnInit(): void {
    this.getAllFacilities();
  }

  getAllFacilities() {
    let param = {
      size: this.pageSize,
      page: this.pageNumber,
    }
    this._FacilitiesService.getAllFacilities(param).subscribe({
      next: (res) => {
        this.tableResponse = res.data
        this.tableData = res.data.facilities
      }, error: (err) => {

      }, complete: () => {

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
    })
  }

  onEditDialog(data: any): void {
    const dialogRef = this._MatDialog.open(EditViewComponent, {
      data: { data },
      width: '40%',

    });
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.onEditFacility(result, data._id)
      }
    });
  }

  onEditFacility(data: any, id: number) {
    this._FacilitiesService.updateFacility(data, id).subscribe((res) => {
      this._toastr.success('Facility  Updated', 'Success');
      this.getAllFacilities()
    }, (error) => {
      this._toastr.error(error, 'Failed');
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
        this._toastr.success('Facility deleted Successfully');
        this.getAllFacilities();
      },
    });
  }
  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    this.getAllFacilities();
  }
}
