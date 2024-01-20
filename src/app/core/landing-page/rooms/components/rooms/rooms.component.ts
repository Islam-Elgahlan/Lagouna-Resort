import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  
  pageSize: number = 100;
  pageNumber: number | undefined = 1;
  tableResponse: any;
  tableData: any[] = [];

  constructor(
    private _toastr: ToastrService,
    private _RoomService: RoomService,
  ) { }
  ngOnInit() {
    this.onGetAllRooms();
  }
  onGetAllRooms() {
    let x = {
      size: this.pageSize,
      page: this.pageNumber,
    };

    this._RoomService.getAllRooms(x).subscribe({
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
}
