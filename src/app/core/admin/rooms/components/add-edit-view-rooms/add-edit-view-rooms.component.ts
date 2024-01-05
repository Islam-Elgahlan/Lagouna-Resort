import { Component } from '@angular/core';

@Component({
  selector: 'app-add-edit-view-rooms',
  templateUrl: './add-edit-view-rooms.component.html',
  styleUrls: ['./add-edit-view-rooms.component.scss']
})
export class AddEditViewRoomsComponent {
  files: File[] = [];
imgSrc:any
constructor(){}



  onSelect(event: any) {
    
    this.imgSrc = event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    
    this.files.splice(this.files.indexOf(event), 1);
  }
}
