import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from '../../services/room.service';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  pageSize: number = 100;
  pageNumber: number | undefined = 1;
  tableResponse: any;
  tableData: any[] = [];
  routingTitle1: string = '';
  routingTitle2: string = '';
  constructor(
    private _toastr: ToastrService,
    private _RoomService: RoomService,
    private _TitleService: Title,
    private _TranslateService: TranslateService,
    private _HelperService: HelperService
  ) {}

  ngOnInit() {
    this.onGetAllRooms();
    this.getTitle();
  }
  getTitle() {
    this.routingTitle1 = this._TitleService.getTitle();
    this.routingTitle2 = this.routingTitle1.substring(11);
    console.log(this.routingTitle2);
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
  onChangeLang(lang: string) {
    this._HelperService.onChangeLang(lang);
    // console.log(this.translate.currentLang);
  }
}
