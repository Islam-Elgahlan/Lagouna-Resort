import { Component } from '@angular/core';
import { AdsService } from '../../services/ads.service';
import { Ads } from '../../interfaces/ads';

import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { AddEditViewComponent } from '../edit-view/add-edit-view.component';
import { ViewAdsComponent } from '../view-ads/view-ads.component';

ToastrService;
@Component({
  selector: 'app-ads-home',
  templateUrl: './ads-home.component.html',
  styleUrls: ['./ads-home.component.scss'],
})
export class AdsHomeComponent {
adsData!:Ads[]
constructor(private _AdsService:AdsService,
  private _toastr: ToastrService,
  public dialog:MatDialog){
this.getAllAds()
}
 

  getAllAds() {
    this._AdsService.getAllAds().subscribe({
      next: (res) => {
        console.log(res.data.ads);
        this.adsData = res.data.ads;
      },
      error: (err) => {},
      complete: () => {},
    });
  }

   

openEditDialog(data:any){
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
openViewDialog(data:any){
  const dialogRef = this.dialog.open(ViewAdsComponent, {
    data: data,
    width: '30%'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  
  });
}


  openDeleteDialog(data: any) {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data: data,
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteItem(result._id);
        this.getAllAds();
      }
    });
  }
  deleteItem(id: string) {
    this._AdsService.deleteAd(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        
        this._toastr.error('Try Again');
      },
      complete: () => {
        this._toastr.success('Room deleted Successfully');
        this.getAllAds();
      },
    });
  }
}
