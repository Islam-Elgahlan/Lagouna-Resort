import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent {
  roomData: any;
  roomId: string = '';
  imgs: [] = [];
  constructor(private _ActivatedRoute: ActivatedRoute, private _RoomService: RoomService) {
    this.roomId = _ActivatedRoute.snapshot.params['id']
    console.log(this.roomId);

  }
  ngOnInit() {
    this.getRoomById(this.roomId);
  }

  getRoomById(id: string) {
    this._RoomService.getRoombyId(id).subscribe({
      next: (res) => {
        console.log(res.data.room);
        this.roomData = res.data.room
      }, error: (err) => {

      }, complete: () => {
        console.log(this.roomData.images);
        this.roomData.images = this.imgs;




      }
    })
  }
}
