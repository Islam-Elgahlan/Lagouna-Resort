import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { HomeService } from '../../services/home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  rooms:any;
  constructor(public _HelperService:HelperService , public translate: TranslateService,private _HomeService:HomeService){
    
  }
  ngOnInit(): void {
    this.onGetallRooms()
  }
  onChangeLang(lang:string){
    this._HelperService.onChangeLang(lang)
    // console.log(this.translate.currentLang);
    
  }

  onGetallRooms(){
    this._HomeService.getAllRooms().subscribe({
      next:(res)=>{
        console.log(res.data.rooms);
        this.rooms=res.data.rooms.splice(0,4)
      }
    })
  }
  
}
