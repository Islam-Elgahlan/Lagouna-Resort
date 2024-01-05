import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDropzoneModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
    
  ],
  exports: [ReactiveFormsModule,FormsModule,NgxDropzoneModule,MatIconModule,MatButtonModule,MatPaginatorModule]
})
export class SharedModule { }
