import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public _HelperService:HelperService , public translate: TranslateService){
    
  }
  onChangeLang(lang:string){
    this._HelperService.onChangeLang(lang)
    // console.log(this.translate.currentLang);
    
  }
}
