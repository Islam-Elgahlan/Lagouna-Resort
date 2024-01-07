import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addeditview-facility',
  templateUrl: './addeditview-facility.component.html',
  styleUrls: ['./addeditview-facility.component.scss']
})
export class AddeditviewFacilityComponent {
  facility: string = '';
  constructor(
    public dialogRef: MatDialogRef<AddeditviewFacilityComponent> ,
     @Inject(MAT_DIALOG_DATA) public data: any,) {}
    onNoClick(): void {
      this.dialogRef.close();
      console.log(this.data)
    }
}
