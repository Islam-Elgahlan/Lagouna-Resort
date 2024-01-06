import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomsService } from '../../services/rooms.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';

@Component({
  selector: 'app-rooms-home',
  templateUrl: './rooms-home.component.html',
  styleUrls: ['./rooms-home.component.scss'],
})
export class RoomsHomeComponent {
  view: boolean = true;
  pageIndex: number = 0;
  pageSize: number = 15;
  pageNumber: number | undefined = 1;
  tableResponse: any;
  tableData: any[] = [];

  constructor(
    private _toastr: ToastrService,
    private _RoomsService: RoomsService,
    public dialog:MatDialog
  ) { }

  ngOnInit() {
    this.onGetAllRooms();
  }
  numberOfTasks: number = 0;
  onGetAllRooms() {
    let x = {
      size: this.pageSize,
      page: this.pageNumber,
    };

    this._RoomsService.onGetRooms(x).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res.data;
        this.tableData = res.data.rooms;
        console.log(this.tableData);

      },
      error: (err) => {
        console.log(err);
      },
    });

  }
  openAddDialog(data: any) {
    // console.log(data);

    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data: data,
      width: '30%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // console.log(result);
      if (result) {
        this.deleteItem(result._id)
        this.onGetAllRooms();
      }

    });
  }
  deleteItem(id: string) {
    this._RoomsService.deleteRoom(id).subscribe({
      next: (res) => {
        console.log(res);

      }, error: (err) => {
        this._toastr.error('Try Again')
      }, complete: () => {
        this._toastr.success('Room deleted Successfully')
        this.onGetAllRooms();
      },
    })
  }

  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    this.onGetAllRooms();
  }

}
