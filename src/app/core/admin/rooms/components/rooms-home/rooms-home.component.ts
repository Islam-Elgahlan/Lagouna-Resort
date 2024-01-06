import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomsService } from '../../services/rooms.service';

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
    private _RoomsService: RoomsService
  ) {}

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
        this.tableResponse=res.data;
        this.tableData=res.data.rooms;
        console.log(this.tableData);
        
      },
      error: (err) => {
        console.log(err);
      },
    });
    
  }

  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    this.onGetAllRooms();
  }
}
