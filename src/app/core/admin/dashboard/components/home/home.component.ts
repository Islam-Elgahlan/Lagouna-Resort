import { Component, OnInit } from '@angular/core';
import { AddAdsComponent } from '../../../ads/components/add-ads/add-ads.component';
import { DashService } from '../../services/dash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
constructor(private _DashService:DashService){}
ngOnInit(): void {
  this.getAllData()
}
getAllData(){
  this._DashService.getData().subscribe({
    next:(res)=>{
      console.log(res);
      
    }
  })
}
}
