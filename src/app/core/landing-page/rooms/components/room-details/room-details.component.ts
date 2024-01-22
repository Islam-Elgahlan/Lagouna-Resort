import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../services/room.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IRoom } from '../../../interfaces/rooms';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent {
  roomData: IRoom | undefined;
  roomId: string = '';
  imgs: [] = [];
  counter:number=1;
  hideRequiredMarker:boolean=true;
  showFlag:boolean=false;
  comment:string='';
  review:string='';
  rating:string='';
  currentRate = 0;
  maxRating = 5;
  totalPrice:number =0 ; 
  nigntsNum:number =0 ;
 
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _RoomService: RoomService,
    private _HelperService:HelperService,
    private _Router:Router,
    private _ToastrService:ToastrService
  ) {
    this.roomId = _ActivatedRoute.snapshot.params['id'];
    console.log(this.roomId);
    let token = localStorage.getItem('userToken') ;
    if (token) {
      this.showFlag = true
    }else{
      this.showFlag = false
    }
  }
  ngOnInit() {
    this.getRoomById(this.roomId);
  }

  getRoomById(id: string) {
    this._RoomService.getRoombyId(id).subscribe({
      next: (res) => {
        // console.log(res.data.room);
        this.roomData = res.data.room;
      },
      error: (err) => {},
      complete: () => {
        // console.log(this.roomData.images);
        // this.imgs = this.roomData?.images;
        // this.price = this.roomData?.price;
      },
    });
  }

  rangeForm = new FormGroup({
    start: new FormControl<Date | null>(null,[Validators.required]),
    end: new FormControl<Date | null>(null,[Validators.required]),
  });
 
  onChangeLang(lang:string){
    this._HelperService.onChangeLang(lang)
    
  }
  calculateDays(){
    let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    let startDate :any = this.rangeForm.controls.start.value ;
    let endDate :any  = this.rangeForm.controls.end.value ;
    const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
    let price:any = this.roomData?.price ;
    let discount:any = this.roomData?.discount ;
    this.totalPrice = price -  price*discount/100  *diffDays;
    this.nigntsNum = diffDays
      
    console.log(this.nigntsNum);
  }
  createBooking(){
   this.calculateDays()
   let data = {
    startDate: this.rangeForm.controls.start.value ,
    endDate : this.rangeForm.controls.end.value ,
    room : this.roomId,
    totalPrice :this.totalPrice
   }
   this._RoomService.createBooking(data).subscribe((res)=>{
    console.log(res);
    this._ToastrService.success(res.message)
    
   },(error)=>{
    this._ToastrService.error(error.message)
  })

   
  }
  onIncrement(){
    
  this.counter++


  }
  onDecrement(){
    if (this.counter>=1) {
      this.counter--
    }
    
  }
  onSubmit(form:FormGroup){
    // this.calculateDays()
    // console.log(form.value);
    this.createBooking()
    // this._Router.navigate(['/landingPage/rooms/allRooms'])
      }
    
      
      addComment(){
        let data ={
          roomId:this.roomId,
          comment:this.comment
        }
        if (this.showFlag) {
          this._RoomService.createComment(data).subscribe({
            next:(res)=>{
              console.log(res);
              this._ToastrService.success(res.message)
            },error:(err)=>{
              this._ToastrService.error('Please Enter a commet before send')
            }
          })
        } else {
          this._ToastrService.warning('You must be sign in to add a comment');
          this.comment='';
        }
        
      }
      addRate(){
        let data ={
          roomId:this.roomId,
          review:this.review,
          rating:this.currentRate
        }
        if (this.showFlag) {
          this._RoomService.createReview(data).subscribe({
            next:(res)=>{
              console.log(res);
              this._ToastrService.success(res.message)
            },error:(err)=>{
              this._ToastrService.error(err.error.message)
            }
          })
        } else {
          this._ToastrService.warning('You must be sign in to add a review');
          this.review='';
        }
      }
}
