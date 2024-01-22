import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent {
  facility: string = '';
  constructor(
    public dialogRef: MatDialogRef<EditViewComponent> ,
     @Inject(MAT_DIALOG_DATA) public data: any,) {}
    onNoClick(): void {
      this.dialogRef.close();
      console.log(this.data)
    }
}
