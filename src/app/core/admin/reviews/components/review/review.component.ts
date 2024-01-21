import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  pageIndex: number = 0;
  pageSize: number = 15;
  pageNumber: number | undefined = 1;
  tableResponse: any;
  tableData: any[] = [];
  constructor(){

  }
  onGetAllReviews(){
    
  }
  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    this.onGetAllReviews();
  }
}
