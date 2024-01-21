import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { HomeService } from '../../services/home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FavoritesService } from '../../../favorites/services/favorites.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  rooms:any;
  ads:any;
  showItem:boolean=false;
  
  constructor(public _HelperService:HelperService , public translate: TranslateService,private _HomeService:HomeService,
    private _FavoritesService:FavoritesService,private _ToastrService:ToastrService){
      let token = localStorage.getItem('userToken') ;
      if (!token) {
        this.showItem = false
      }else{
        this.showItem = true
      }
  }
  ngOnInit(): void {
    this.onGetallRooms();
    this.onGetallAds()
  }
  onChangeLang(lang:string){
    this._HelperService.onChangeLang(lang)
    // console.log(this.translate.currentLang);
    
  }

  onGetallRooms(){
    this._HomeService.getAllRooms().subscribe({
      next:(res)=>{
        console.log(res.data.rooms);
        this.rooms=res.data.rooms.slice(0,4)
      }
    })
  }
  onGetallAds(){
    this._HomeService.getAllAds().subscribe({
      next:(res)=>{
        console.log(res.data.ads);
        this.ads=res.data.ads
      }
    })
  }
  addToFavorites(id:string){
    if (this.showItem) {
      this._FavoritesService.addFavorites(id).subscribe({
        next:(res)=>{
          console.log(res);
          this._ToastrService.success(res.message)
        },error:(err)=> {
          this._ToastrService.warning(err.error.message)
        },
      })
    } else {
      this._ToastrService.warning('Please Log In First')
    }
     
   
  }
}
