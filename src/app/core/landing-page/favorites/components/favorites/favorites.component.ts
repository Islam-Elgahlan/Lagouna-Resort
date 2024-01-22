import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit{
myFavorites:any;
routingTitle1:string='';
  routingTitle2:string='';
constructor(private _FavoritesService:FavoritesService,private _ToasreService:ToastrService
  ,private _TitleService:Title){

}
ngOnInit(): void {
  this.getTitle();
  this.getFavorites()
}
getFavorites(){
  this._FavoritesService.getMyFavorites().subscribe({
    next:(res)=>{
      console.log(res.data.favoriteRooms[0].rooms);
      this.myFavorites=res.data.favoriteRooms[0].rooms
    }
  })
}
getTitle() {
    
  this.routingTitle1=this._TitleService.getTitle();
  this.routingTitle2=this.routingTitle1.substring(11,);
  console.log(this.routingTitle2);
  
}
removeFromFavorites(id:string){
this._FavoritesService.deleteFromFavorites(id).subscribe({
next:(res)=>{
  console.log(res);
  this._ToasreService.success(res.message);
  this.getFavorites()
},
error:(err)=>{
  this._ToasreService.error(err.error.message);
},
})
}
}
