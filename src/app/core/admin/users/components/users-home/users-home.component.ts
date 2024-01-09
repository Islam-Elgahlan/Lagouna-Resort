import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss']
})
export class UsersHomeComponent {
  pageIndex: number = 0;
  pageSize: number = 5;
  pageNumber: number | undefined = 1;
  tableResponse: any;
  tableData: any[] = [];
  constructor(
    private _toastr: ToastrService,
    private _UsersService: UsersService,
    public _MatDialog:MatDialog
  ) { }

  ngOnInit() {
    this.onGetAllUsers();
  }
  onGetAllUsers() {
    let param = {
      size: this.pageSize,
      page: this.pageNumber,
    };

    this._UsersService.getAllUsers(param).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res.data;
        this.tableData = res.data.users;
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
    this.onGetAllUsers();
  }
}
