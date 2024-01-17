import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from './material/material/material.module';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { LogoutComponent } from './logout/logout.component';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    DeleteItemComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    
CarouselModule,
    NgxDropzoneModule,
    MatIconModule,
    MatButtonModule,

    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    MaterialModule
  ],

  
  
  exports: [CarouselModule,MaterialModule,ReactiveFormsModule,FormsModule,TranslateModule,NgxDropzoneModule,MatIconModule,MatButtonModule,MatSelectModule,MatPaginatorModule,MatFormFieldModule]


 
})
export class SharedModule {}
