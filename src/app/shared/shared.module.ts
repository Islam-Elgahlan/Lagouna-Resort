import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDropzoneModule
    
  ],
  exports: [ReactiveFormsModule,FormsModule,NgxDropzoneModule]
})
export class SharedModule { }
