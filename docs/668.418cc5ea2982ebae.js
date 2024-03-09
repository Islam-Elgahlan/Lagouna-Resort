"use strict";(self.webpackChunkLagouna_Resort=self.webpackChunkLagouna_Resort||[]).push([[668],{1668:(H,A,r)=>{r.r(A),r.d(A,{AdsModule:()=>k});var p=r(6814),d=r(2787),m=r(2425),f=r(4116),s=r(6223),u=r(7700),t=r(5879),h=r(9862);let g=(()=>{class i{constructor(e){this._HttpClient=e}getAllAds(e){return this._HttpClient.get("admin/ads",{params:e})}addAds(e){return this._HttpClient.post("admin/ads",e)}updateAds(e,o){return this._HttpClient.put(`admin/ads/${e}`,o)}deleteAd(e){return this._HttpClient.delete(`admin/ads/${e}`)}static#t=this.\u0275fac=function(o){return new(o||i)(t.LFG(h.eN))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),_=(()=>{class i{constructor(e,o,n,a){this.dialogRef=e,this.data=o,this._AdsService=n,this._Toastr=a,this.pageSize=15,this.pageNumber=1,this.rooms=[],this.editForm=new s.cw({discount:new s.NI(null,[s.kI.required]),isActive:new s.NI(null,[s.kI.required])}),console.log(o),this.roomId=o?._id,this.getAdsbyId(o)}ngOnInit(){}onSubmit(e){console.log(e.value),this._AdsService.updateAds(this.roomId,this.editForm.value).subscribe({next:o=>{console.log(o),this._Toastr.success(o.message)},error:o=>{},complete:()=>{this.onNoClick()}})}getAdsbyId(e){this.editForm.patchValue({discount:e.room?.discount,isActive:e.isActive})}onNoClick(){this.dialogRef.close(),console.log(this.data)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(u.so),t.Y36(u.WI),t.Y36(g),t.Y36(m._W))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-edit-view"]],decls:21,vars:2,consts:[[1,"my-card"],[1,"d-flex","align-items-center","justify-content-between"],["routerLink","/admin/dashboard/ads",3,"click"],[1,"pointer","fa-regular","fa-circle-xmark","text-danger"],[3,"formGroup","submit"],[1,"input-group","mb-3","my-4"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-calendar-days"],["type","number","placeholder","Discount","formControlName","discount",1,"form-control","mb-0"],["aria-label","Default select example","placeholder","Is Active","formControlName","isActive",1,"form-select","form-control"],["value","true"],["value","false"],["type","submit","cdkFocusInitial","",1,"btn","btn-primary","w-100",3,"disabled"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h2",1)(2,"span"),t._uU(3,"Ads"),t.qZA(),t.TgZ(4,"span",2),t.NdJ("click",function(){return n.onNoClick()}),t._UZ(5,"i",3),t.qZA()(),t.TgZ(6,"form",4),t.NdJ("submit",function(){return n.onSubmit(n.editForm)}),t.TgZ(7,"div",5)(8,"span",6),t._UZ(9,"i",7),t.qZA(),t._UZ(10,"input",8),t.qZA(),t.TgZ(11,"div",5)(12,"span",6),t._UZ(13,"i",7),t.qZA(),t.TgZ(14,"select",9)(15,"option",10),t._uU(16,"Active"),t.qZA(),t.TgZ(17,"option",11),t._uU(18,"Not Active"),t.qZA()()(),t.TgZ(19,"button",12),t._uU(20,"Save"),t.qZA()()()),2&o&&(t.xp6(6),t.Q6J("formGroup",n.editForm),t.xp6(13),t.Q6J("disabled",n.editForm.invalid))},dependencies:[d.rH,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,s.sg,s.u]})}return i})(),Z=(()=>{class i{constructor(e,o,n,a){this.dialogRef=e,this.data=o,this._AdsService=n,this._Toastr=a,this.viewForm=new s.cw({roomNumber:new s.NI(null),discount:new s.NI(null),isActive:new s.NI(null)}),console.log(o),this.getAdsData(o)}ngOnInit(){}getAdsData(e){this.viewForm.patchValue({roomNumber:e.room?.roomNumber,discount:e.room?.discount,isActive:e.isActive}),this.disableForm()}disableForm(){this.viewForm.controls.roomNumber.disable(),this.viewForm.controls.discount.disable(),this.viewForm.controls.isActive.disable()}onNoClick(){this.dialogRef.close(),console.log(this.data)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(u.so),t.Y36(u.WI),t.Y36(g),t.Y36(m._W))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-view-ads"]],decls:19,vars:1,consts:[[1,"my-card"],[1,"d-flex","align-items-center","justify-content-between"],["routerLink","/admin/dashboard/ads",1,"pointer",3,"click"],[1,"fa-regular","fa-circle-xmark","text-danger"],[3,"formGroup"],[1,"input-group","mb-3","my-4"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-person-shelter"],["type","text","formControlName","roomNumber",1,"form-control","mb-0"],[1,"fa-solid","fa-percent"],["type","number","formControlName","discount",1,"form-control","mb-0"],[1,"fa-solid","fa-check-double"],["type","text","formControlName","isActive",1,"form-control","mb-0"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h2",1)(2,"span"),t._uU(3,"Ads"),t.qZA(),t.TgZ(4,"span",2),t.NdJ("click",function(){return n.onNoClick()}),t._UZ(5,"i",3),t.qZA()(),t.TgZ(6,"form",4)(7,"div",5)(8,"span",6),t._UZ(9,"i",7),t.qZA(),t._UZ(10,"input",8),t.qZA(),t.TgZ(11,"div",5)(12,"span",6),t._UZ(13,"i",9),t.qZA(),t._UZ(14,"input",10),t.qZA(),t.TgZ(15,"div",5)(16,"span",6),t._UZ(17,"i",11),t.qZA(),t._UZ(18,"input",12),t.qZA()()()),2&o&&(t.xp6(6),t.Q6J("formGroup",n.viewForm))},dependencies:[d.rH,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u]})}return i})();var b=r(3365);function v(i,l){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.room.roomNumber)}}function T(i,l){1&i&&(t.TgZ(0,"span"),t._uU(1,"---"),t.qZA())}function x(i,l){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.room.discount)}}function C(i,l){1&i&&(t.TgZ(0,"span"),t._uU(1,"---"),t.qZA())}function N(i,l){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.createdBy.userName)}}function q(i,l){1&i&&(t.TgZ(0,"span"),t._uU(1,"Admin"),t.qZA())}function w(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t.YNc(2,v,2,1,"span",10),t.YNc(3,T,2,0,"span",10),t.qZA(),t.TgZ(4,"td"),t.YNc(5,x,2,1,"span",10),t.YNc(6,C,2,0,"span",10),t.qZA(),t.TgZ(7,"td",11),t.YNc(8,N,2,1,"span",10),t.YNc(9,q,2,0,"span",10),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td")(14,"span",12),t._uU(15),t.qZA()(),t.TgZ(16,"td",13)(17,"div",14)(18,"a",15),t._UZ(19,"i",16),t.qZA(),t.TgZ(20,"ul",17)(21,"li")(22,"a",18),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.openViewDialog(a))}),t.TgZ(23,"span"),t._UZ(24,"i",19),t.qZA(),t._uU(25," View "),t.qZA()(),t.TgZ(26,"li")(27,"a",18),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.openEditDialog(a))}),t.TgZ(28,"span"),t._UZ(29,"i",20),t.qZA(),t._uU(30," Edit "),t.qZA()(),t.TgZ(31,"li")(32,"a",21),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.openDeleteDialog(a))}),t.TgZ(33,"span"),t._UZ(34,"i",22),t.qZA(),t._uU(35," Delete "),t.qZA()()()()()()}if(2&i){const e=l.$implicit;t.Tol(l.even?"":"bg-secondary-subtle"),t.xp6(2),t.Q6J("ngIf",e.room),t.xp6(1),t.Q6J("ngIf",!(null!=e.room&&e.room.roomNumber)),t.xp6(2),t.Q6J("ngIf",null==e.room?null:e.room.discount),t.xp6(1),t.Q6J("ngIf",!(null!=e.room&&e.room.discount)),t.xp6(2),t.Q6J("ngIf",e.createdBy),t.xp6(1),t.Q6J("ngIf",!e.createdBy),t.xp6(2),t.Oqu(t.xi3(12,12,e.createdAt,"dd-MM-yyyy")),t.xp6(3),t.Tol(e.isActive?"active":"notActive"),t.xp6(1),t.Oqu(e.isActive?"Active":"NotActive")}}const y=function(){return[5,10,50,100]};let U=(()=>{class i{constructor(e,o,n){this._AdsService=e,this._toastr=o,this.dialog=n,this.pageIndex=0,this.pageSize=5,this.pageNumber=1,this.tableData=[],this.getAllAds()}getAllAds(){this._AdsService.getAllAds({size:this.pageSize,page:this.pageNumber}).subscribe({next:o=>{this.tableResponse=o.data,this.tableData=o.data.ads},error:o=>{},complete:()=>{}})}openEditDialog(e){this.dialog.open(_,{data:e,width:"30%"}).afterClosed().subscribe(n=>{console.log("The dialog was closed"),this.getAllAds()})}openViewDialog(e){this.dialog.open(Z,{data:e,width:"30%"}).afterClosed().subscribe(n=>{console.log("The dialog was closed")})}openDeleteDialog(e){this.dialog.open(f.N,{data:e,width:"30%"}).afterClosed().subscribe(n=>{n&&(this.deleteItem(n._id),this.getAllAds())})}deleteItem(e){this._AdsService.deleteAd(e).subscribe({next:o=>{console.log(o)},error:o=>{console.log(o),this._toastr.error("Try Again")},complete:()=>{this._toastr.success("Room deleted Successfully"),this.getAllAds()}})}handlePageEvent(e){this.pageSize=e.pageSize,this.pageNumber=e.pageIndex+1,this.getAllAds()}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(g),t.Y36(m._W),t.Y36(u.uw))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-ads-home"]],decls:28,vars:6,consts:[[1,"container","py-3"],[1,"page-header"],[1,"text-muted"],[1,"col-md-3","ms-auto","text-end"],["routerLink","addAds",1,"main-btn","px-4"],[1,"custom-table","my-3"],[1,"text-capitalize"],[3,"class",4,"ngFor","ngForOf"],[1,""],["aria-label","Select page",3,"length","pageSizeOptions","pageSize","pageIndex","page"],[4,"ngIf"],[1,"py-3"],[1,"status"],[1,"taxt-center"],[1,"dropdown"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","text-muted"],[1,"fa-solid","fa-ellipsis","fa-2x"],[1,"dropdown-menu"],[1,"dropdown-item","pointer","py-2","blue",3,"click"],[1,"fa-regular","fa-eye","px-2"],[1,"fa-regular","fa-pen-to-square","px-2"],[1,"dropdown-item","pointer","blue",3,"click"],[1,"fa-solid","fa-trash","px-2"]],template:function(o,n){1&o&&(t.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"h2"),t._uU(4,"Ads Table Details"),t.qZA(),t.TgZ(5,"span",2),t._uU(6,"You can check all details here!"),t.qZA(),t.TgZ(7,"div",3)(8,"button",4),t._uU(9,"Add New Ad"),t.qZA()()()(),t.TgZ(10,"table",5)(11,"thead",6)(12,"th"),t._uU(13,"Room"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Discount"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Created By"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Created At"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Active"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Actions"),t.qZA()(),t.TgZ(24,"tbody"),t.YNc(25,w,36,15,"tr",7),t.qZA()(),t.TgZ(26,"div",8)(27,"mat-paginator",9),t.NdJ("page",function(c){return n.handlePageEvent(c)}),t.qZA()()()),2&o&&(t.xp6(25),t.Q6J("ngForOf",n.tableData),t.xp6(2),t.Q6J("length",null==n.tableResponse?null:n.tableResponse.totalCount)("pageSizeOptions",t.DdM(5,y))("pageSize",null==n.tableResponse?null:n.tableResponse.pageSize)("pageIndex",n.pageIndex))},dependencies:[p.sg,p.O5,d.rH,b.NW,p.uU],styles:[".status.active[_ngcontent-%COMP%]{background-color:#08a508;padding:5px 18px;border-radius:5px}.status.notActive[_ngcontent-%COMP%]{background-color:#e0a910;padding:5px;border-radius:5px}"]})}return i})();var I=r(9788);function F(i,l){if(1&i&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&i){const e=l.$implicit;t.Q6J("value",e._id),t.xp6(1),t.Oqu(e.roomNumber)}}const J=[{path:"",redirectTo:"adsHome",pathMatch:"full"},{path:"",component:U},{path:"addeditview",component:_},{path:"addAds",component:(()=>{class i{constructor(e,o,n,a){this._AdsService=e,this._Toastr=o,this._Router=n,this._RoomsService=a,this.pageSize=15,this.pageNumber=1,this.rooms=[],this.adsForm=new s.cw({room:new s.NI(null,[s.kI.required]),discount:new s.NI(null,[s.kI.required]),isActive:new s.NI(null,[s.kI.required])})}ngOnInit(){this.getAllrooms()}getAllrooms(){this._RoomsService.onGetRooms({size:this.pageSize,page:this.pageNumber}).subscribe({next:o=>{this.rooms=o.data.rooms}})}onSubmit(e){this._AdsService.addAds(e.value).subscribe({next:o=>{console.log(o),this._Toastr.success(o.message)},error:o=>{this._Toastr.error(o.error.message)},complete:()=>{this._Router.navigate(["/admin/dashboard/ads"])}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(g),t.Y36(m._W),t.Y36(d.F0),t.Y36(I.L))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-ads"]],decls:31,vars:5,consts:[[1,"mt-5"],[1,"container"],[1,"row","align-items-center"],[1,"col-md-9","mx-auto"],[3,"formGroup","submit"],[1,"input-group","mb-3","my-4"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-calendar-days"],["aria-label","Default select example","formControlName","room",1,"form-select","form-control"],["selected","","disabled","","hidden","",3,"ngValue"],[3,"value",4,"ngFor","ngForOf"],["type","number","placeholder","Discount","formControlName","discount",1,"form-control","mb-0"],["aria-label","Default select example","formControlName","isActive",1,"form-select","form-control"],["value","true"],["value","false"],[1,"text-end"],["type","button","routerLink","/admin/dashboard/ads",1,"sec-btn"],["type","submit",1,"blue-btn",3,"disabled"],[3,"value"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4),t.NdJ("submit",function(){return n.onSubmit(n.adsForm)}),t.TgZ(5,"div",5)(6,"span",6),t._UZ(7,"i",7),t.qZA(),t.TgZ(8,"select",8)(9,"option",9),t._uU(10,"Select Room Number"),t.qZA(),t.YNc(11,F,2,2,"option",10),t.qZA()(),t.TgZ(12,"div",5)(13,"span",6),t._UZ(14,"i",7),t.qZA(),t._UZ(15,"input",11),t.qZA(),t.TgZ(16,"div",5)(17,"span",6),t._UZ(18,"i",7),t.qZA(),t.TgZ(19,"select",12)(20,"option",9),t._uU(21,"Is Active"),t.qZA(),t.TgZ(22,"option",13),t._uU(23,"Active"),t.qZA(),t.TgZ(24,"option",14),t._uU(25,"Not Active"),t.qZA()()(),t.TgZ(26,"div",15)(27,"button",16),t._uU(28,"Cancel"),t.qZA(),t.TgZ(29,"button",17),t._uU(30,"Save"),t.qZA()()()()()()()),2&o&&(t.xp6(4),t.Q6J("formGroup",n.adsForm),t.xp6(5),t.Q6J("ngValue",null),t.xp6(2),t.Q6J("ngForOf",n.rooms),t.xp6(9),t.Q6J("ngValue",null),t.xp6(9),t.Q6J("disabled",n.adsForm.invalid))},dependencies:[p.sg,d.rH,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,s.sg,s.u],styles:["input[_ngcontent-%COMP%]::placeholder{color:#000}"]})}return i})()}];let S=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(J),d.Bz]})}return i})();var Y=r(9218);let k=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[p.ez,S,Y.m]})}return i})()}}]);