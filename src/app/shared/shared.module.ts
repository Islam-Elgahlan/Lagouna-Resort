import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { DeleteItemComponent } from './delete-item/delete-item.component';
import { LogoutComponent } from './logout/logout.component';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from './material/material/material.module';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    DeleteItemComponent,
    LogoutComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    MaterialModule,
CarouselModule,
    NgxDropzoneModule,
   
  ],

  
  
  exports: [CarouselModule,ReactiveFormsModule,FormsModule,TranslateModule,NgxDropzoneModule,MaterialModule]


 
})
export class SharedModule {}
