import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDropzoneModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule
    
  ],
  exports: [ReactiveFormsModule,FormsModule,NgxDropzoneModule,MatIconModule,MatButtonModule,MatSelectModule]
})
export class SharedModule { }
