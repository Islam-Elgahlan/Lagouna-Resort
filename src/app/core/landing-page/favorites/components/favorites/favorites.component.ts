import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
myFavorites:any;
constructor(private _FavoritesService:FavoritesService,private _ToasreService:ToastrService){
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
