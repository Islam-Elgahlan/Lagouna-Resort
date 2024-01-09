import { Component } from '@angular/core';
import { AdsService } from '../../services/ads.service';
import { Ads } from '../../interfaces/ads';

@Component({
  selector: 'app-ads-home',
  templateUrl: './ads-home.component.html',
  styleUrls: ['./ads-home.component.scss']
})
export class AdsHomeComponent {
adsData!:Ads[]
constructor(private _AdsService:AdsService){
this.getAllAds()
}

getAllAds(){
  this._AdsService.getAllAds().subscribe({
    next:(res)=>{
      console.log(res.data.ads);
      this.adsData=res.data.ads
    },error:(err)=>{

    },complete:()=> {
      
    }
  })
}
}
