import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  textDirection: string = 'ltr'
  
  constructor(public translate: TranslateService) {
  
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // do something
      console.log(event.lang);
      if(event.lang === 'en'){
        this.textDirection = 'ltr'
      }else{
        this.textDirection = 'rtl'
      }
      
    });
   this.onChangeLang('en')
    
}
onChangeLang(lang:string){
  this.translate.setDefaultLang(lang);
  this.translate.use(lang);
localStorage.setItem('lang',lang)
}
}

