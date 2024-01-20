import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent {
  roomData: any | undefined;
  firstImgs: [] = [];
  imgs: [] = [];
  remainingImgs : [] | undefined  = [] ;

  // roomDataSecond : any = this.roomData.images.shift();
  roomId: string = '';
  constructor(private _ActivatedRoute: ActivatedRoute, private _RoomService: RoomService) {
    this.roomId = _ActivatedRoute.snapshot.params['id']
    // console.log(this.roomId);

  }
  ngOnInit() {
    this.getRoomById(this.roomId);
  }

  getRoomById(id: string) {
    this._RoomService.getRoombyId(id).subscribe({
      next: (res) => {
        // console.log(res.data.room);
        this.roomData = res.data.room
      }, error: (err) => {

      }, complete: () => {
        // console.log(this.roomData.images);
        this.firstImgs = this.roomData.images[0]
        
        this.imgs = this.roomData.images;
      
        this.imgs.shift();
        console.log( this.imgs);
        
        



      }
    })
  }
}
