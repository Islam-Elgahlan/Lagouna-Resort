import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from '../../services/room.service';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { FavoritesService } from '../../../favorites/services/favorites.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit{
  pageSize: number = 10;
  pageNumber: number | undefined = 1;
  tableResponse: any;
  tableData: any[] = [];
  pageIndex: number = 0
  routingTitle1: string = '';
  routingTitle2: string = '';

  showItem:boolean=false;
  startDate:string='';
  endDate:string='';
  capacity:number=1;

  constructor(
    private _toastr: ToastrService,
    private _RoomService: RoomService,
    private _TitleService: Title,
    private _TranslateService: TranslateService,
    private _HelperService: HelperService,
    private _FavoritesService: FavoritesService,
    private _ToastrService: ToastrService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    let token = localStorage.getItem('userToken');
    if (!token) {
      this.showItem = false
    } else {
      this.showItem = true

    }
    _ActivatedRoute.queryParams.subscribe(params => {
      this.startDate = params['startDate'];
      this.endDate = params['endDate'];
      console.log(this.startDate);

    });}


    ngOnInit(): void {
      this.getTitle()
      if (this.startDate&& this.endDate) {
        let x = {
          size: 100,
          page: 1,
          startDate:this.startDate,
          endDate:this.startDate,
          capacity:this.capacity
         
        };
        this.onGetAllRooms(x);
      } else {
        let x = {
          size: 100,
          page: 1,
        
      }
      this.onGetAllRooms(x)
    }
  }
 
  getTitle() {
    this.routingTitle1 = this._TitleService.getTitle();

    this.routingTitle2 = this.routingTitle1.substring(11);
    // console.log(this.routingTitle2);
  }
  onGetAllRooms(x:any) {
  

    this._RoomService.getAllRooms(x).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res.data;
        this.tableData = res.data.rooms;
        console.log(this.tableData);
        console.log(this.tableResponse);
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
  addToFavorites(id: string) {
    if (this.showItem) {
      this._FavoritesService.addFavorites(id).subscribe({
        next: (res) => {
          console.log(res);
          this._ToastrService.success(res.message)
        }, error: (err) => {
          this._ToastrService.warning('The Room alreedy in favorites')
        },
      })
    } else {
      this._ToastrService.warning('Please Sign In First')
      console.log("l");

    }


  }
  handlePageEvent(e:any){

    // console.log(e);
    this.pageSize = e.pageSize
    this.pageNumber = e.pageIndex + 1
    // this.onGetAllRooms()
  }


  
  }
