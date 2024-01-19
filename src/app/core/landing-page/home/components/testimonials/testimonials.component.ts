import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  constructor(public _HelperService:HelperService , public translate: TranslateService){
    
  }
  onChangeLang(lang:string){
    this._HelperService.onChangeLang(lang)
    // console.log(this.translate.currentLang);
    
  }
 
 
}
