import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public _HelperService:HelperService , public translate: TranslateService){
    
  }
  onChangeLang(lang:string){
    this._HelperService.onChangeLang(lang)
    // console.log(this.translate.currentLang);
    
  }
}
