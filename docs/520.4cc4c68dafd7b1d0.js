"use strict";(self.webpackChunkLagouna_Resort=self.webpackChunkLagouna_Resort||[]).push([[520],{2520:(N,m,s)=>{s.r(m),s.d(m,{BookingsModule:()=>U});var c=s(6814),g=s(2787),f=s(4116),a=s(6223),d=s(7700),t=s(5879),u=s(2425);let h=(()=>{class o{constructor(e,n,i){this.dialogRef=e,this.data=n,this._Toastr=i,this.viewForm=new a.cw({roomNumber:new a.NI(null),price:new a.NI(null),startDate:new a.NI(null),endDate:new a.NI(null)}),console.log(n),this.getAdsData(n)}ngOnInit(){}getAdsData(e){this.viewForm.patchValue({roomNumber:e.roomNumber,price:e.totalPrice,startDate:e.startDate,endDate:e.endDate}),this.disableForm()}disableForm(){this.viewForm.controls.roomNumber.disable(),this.viewForm.controls.price.disable(),this.viewForm.controls.startDate.disable(),this.viewForm.controls.endDate.disable()}onNoClick(){this.dialogRef.close(),console.log(this.data)}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(d.so),t.Y36(d.WI),t.Y36(u._W))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-view-booking"]],decls:23,vars:1,consts:[[1,"my-card"],[1,"d-flex","align-items-center","justify-content-between"],["routerLink","/admin/dashboard/bookings",1,"pointer",3,"click"],[1,"fa-regular","fa-circle-xmark","text-danger"],[3,"formGroup"],[1,"input-group","mb-3","my-4"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-person-shelter"],["type","text","formControlName","roomNumber",1,"form-control","mb-0"],[1,"fa-solid","fa-hand-holding-dollar"],["type","number","formControlName","price",1,"form-control","mb-0"],[1,"fa-solid","fa-calendar-days"],["type","text","formControlName","startDate",1,"form-control","mb-0"],["type","text","formControlName","endDate",1,"form-control","mb-0"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"h2",1)(2,"span"),t._uU(3,"Bookings"),t.qZA(),t.TgZ(4,"span",2),t.NdJ("click",function(){return i.onNoClick()}),t._UZ(5,"i",3),t.qZA()(),t.TgZ(6,"form",4)(7,"div",5)(8,"span",6),t._UZ(9,"i",7),t.qZA(),t._UZ(10,"input",8),t.qZA(),t.TgZ(11,"div",5)(12,"span",6),t._UZ(13,"i",9),t.qZA(),t._UZ(14,"input",10),t.qZA(),t.TgZ(15,"div",5)(16,"span",6),t._UZ(17,"i",11),t.qZA(),t._UZ(18,"input",12),t.qZA(),t.TgZ(19,"div",5)(20,"span",6),t._UZ(21,"i",11),t.qZA(),t._UZ(22,"input",13),t.qZA()()()),2&n&&(t.xp6(6),t.Q6J("formGroup",i.viewForm))},dependencies:[g.rH,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.sg,a.u]})}return o})();var Z=s(9862);let _=(()=>{class o{constructor(e){this._HttpClient=e}onGetAllBookings(e){return this._HttpClient.get("admin/booking",{params:e})}deleteBooking(e){return this._HttpClient.delete(`admin/booking/${e}`)}static#t=this.\u0275fac=function(n){return new(n||o)(t.LFG(Z.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var A=s(3365);function b(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.room)}}function k(o,r){1&o&&(t.TgZ(0,"span"),t._uU(1,"---"),t.qZA())}function T(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.user)}}function x(o,r){1&o&&(t.TgZ(0,"span"),t._uU(1,"---"),t.qZA())}function v(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t.YNc(2,b,2,1,"span",8),t.YNc(3,k,2,0,"span",8),t.qZA(),t.TgZ(4,"td",9)(5,"span"),t._uU(6),t.qZA()(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td"),t.YNc(14,T,2,1,"span",8),t.YNc(15,x,2,0,"span",8),t.qZA(),t.TgZ(16,"td",10)(17,"div",11)(18,"a",12),t._UZ(19,"i",13),t.qZA(),t.TgZ(20,"ul",14)(21,"li")(22,"a",15),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.onViewDialog(l))}),t.TgZ(23,"span"),t._UZ(24,"i",16),t.qZA(),t._uU(25," View "),t.qZA()(),t.TgZ(26,"li")(27,"a",17),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.openDeleteDialog(l))}),t.TgZ(28,"span"),t._UZ(29,"i",18),t.qZA(),t._uU(30," Delete "),t.qZA()()()()()()}if(2&o){const e=r.$implicit;t.Tol(r.even?"":"bg-secondary-subtle"),t.xp6(2),t.Q6J("ngIf",e.room),t.xp6(1),t.Q6J("ngIf",!e.room),t.xp6(3),t.hij(" ",e.totalPrice," "),t.xp6(2),t.Oqu(t.xi3(9,9,e.startDate,"dd-MM-yyyy")),t.xp6(3),t.Oqu(t.xi3(12,12,e.endDate,"dd-MM-yyyy")),t.xp6(3),t.Q6J("ngIf",e.user),t.xp6(1),t.Q6J("ngIf",!e.user)}}const B=function(){return[5,10,50,100]},y=[{path:"",redirectTo:"bookingsHome",pathMatch:"full"},{path:"",component:(()=>{class o{ngOnInit(){this.getAllBookings()}constructor(e,n,i){this._BookingsService=e,this.dialog=n,this._toastr=i,this.pageIndex=0,this.pageSize=5,this.pageNumber=1,this.tableData=[]}getAllBookings(){this._BookingsService.onGetAllBookings({size:this.pageSize,page:this.pageNumber}).subscribe({next:n=>{this.tableResponse=n.data,this.tableData=n.data.booking},error:n=>{},complete:()=>{}})}onViewDialog(e){this.dialog.open(h,{data:e,width:"30%"}).afterClosed().subscribe(i=>{console.log("The dialog was closed")})}openDeleteDialog(e){this.dialog.open(f.N,{data:e,width:"30%"}).afterClosed().subscribe(i=>{i&&(console.log(i),this.deleteItem(i._id),this.getAllBookings())})}deleteItem(e){this._BookingsService.deleteBooking(e).subscribe({next:n=>{console.log(n)},error:n=>{console.log(n),this._toastr.error("Try Again")},complete:()=>{this._toastr.success("Booking deleted Successfully"),this.getAllBookings()}})}handlePageEvent(e){this.pageSize=e.pageSize,this.pageNumber=e.pageIndex+1,this.getAllBookings()}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(_),t.Y36(d.uw),t.Y36(u._W))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-bookings-home"]],decls:25,vars:6,consts:[[1,"container","py-3"],[1,"page-header"],[1,"text-muted"],[1,"custom-table","my-3"],[1,"text-capitalize"],[3,"class",4,"ngFor","ngForOf"],[1,""],["aria-label","Select page",3,"length","pageSizeOptions","pageSize","pageIndex","page"],[4,"ngIf"],[1,"py-3"],[1,"taxt-center"],[1,"dropdown"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","text-muted"],[1,"fa-solid","fa-ellipsis","fa-2x"],[1,"dropdown-menu"],[1,"dropdown-item","pointer","py-2","blue",3,"click"],[1,"fa-regular","fa-eye","px-2"],[1,"dropdown-item","pointer","blue",3,"click"],[1,"fa-solid","fa-trash","px-2"]],template:function(n,i){1&n&&(t.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"h2"),t._uU(4,"Booking Table Details"),t.qZA(),t.TgZ(5,"span",2),t._uU(6,"You can check all details here!"),t.qZA()()(),t.TgZ(7,"table",3)(8,"thead",4)(9,"th"),t._uU(10,"Room No."),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Price"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Start Date"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"End Date"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"User"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"Actions"),t.qZA()(),t.TgZ(21,"tbody"),t.YNc(22,v,31,15,"tr",5),t.qZA()(),t.TgZ(23,"div",6)(24,"mat-paginator",7),t.NdJ("page",function(p){return i.handlePageEvent(p)}),t.qZA()()()),2&n&&(t.xp6(22),t.Q6J("ngForOf",i.tableData),t.xp6(2),t.Q6J("length",null==i.tableResponse?null:i.tableResponse.totalCount)("pageSizeOptions",t.DdM(5,B))("pageSize",null==i.tableResponse?null:i.tableResponse.pageSize)("pageIndex",i.pageIndex))},dependencies:[c.sg,c.O5,A.NW,c.uU]})}return o})()},{path:"viewBooking",component:h}];let C=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(y),g.Bz]})}return o})();var w=s(9218);let U=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[c.ez,C,w.m]})}return o})()}}]);