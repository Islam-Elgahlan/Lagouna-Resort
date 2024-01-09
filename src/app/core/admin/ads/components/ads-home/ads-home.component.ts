import { Component } from '@angular/core';
import { AdsService } from '../../services/ads.service';
import { Ads } from '../../interfaces/ads';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { ToastrService } from 'ngx-toastr';
ToastrService;
@Component({
  selector: 'app-ads-home',
  templateUrl: './ads-home.component.html',
  styleUrls: ['./ads-home.component.scss'],
})
export class AdsHomeComponent {
  adsData!: Ads[];
  constructor(
    private _AdsService: AdsService,
    private dialog: MatDialog,
    private _toastr: ToastrService
  ) {
    this.getAllAds();
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
