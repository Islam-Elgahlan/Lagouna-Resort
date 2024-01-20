import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  counter:number=1;
  hideRequiredMarker:boolean=true;
  constructor(public _HelperService:HelperService , public translate: TranslateService,
    private _Router:Router){
    
  }
  rangeForm = new FormGroup({
    start: new FormControl<Date | null>(null,[Validators.required]),
    end: new FormControl<Date | null>(null,[Validators.required]),
     capacity:new FormControl(null),
    
  });
  onChangeLang(lang:string){
    this._HelperService.onChangeLang(lang)
    // console.log(this.translate.currentLang);
    
  }
  createBooking(){

  }
  onIncrement(){
    
  this.counter++


  }
  onDecrement(){
    if (this.counter>=1) {
      this.counter--
    }
    
  }
  onSubmit(form:FormGroup){
console.log(form.value);
this._Router.navigate(['/landingPage/rooms/allRooms'])
  }
  
}
