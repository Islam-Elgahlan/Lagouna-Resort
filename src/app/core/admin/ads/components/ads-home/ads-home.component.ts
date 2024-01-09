import { Component } from '@angular/core';
import { AdsService } from '../../services/ads.service';
import { Ads } from '../../interfaces/ads';
import { AddEditViewComponent } from '../edit-view/add-edit-view.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ads-home',
  templateUrl: './ads-home.component.html',
  styleUrls: ['./ads-home.component.scss']
})
export class AdsHomeComponent {
adsData!:Ads[]
constructor(private _AdsService:AdsService,
  private _toastr: ToastrService,
  public dialog:MatDialog){
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


openViewDialog(data:any){
  const dialogRef = this.dialog.open(AddEditViewComponent, {
    data: data,
    width: '30%'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // console.log(result);
    
    this.getAllAds()
    

  });
}

openAddDialog(){
  const dialogRef = this.dialog.open(AddEditViewComponent, {
    width: '30%'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if (result) {
    console.log(result);
    
    }

  });
}
}
