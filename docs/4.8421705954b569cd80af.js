(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{dgmN:function(n,t,e){"use strict";e.r(t),e.d(t,"PagesModule",(function(){return G}));var c=e("tyNb"),o=e("mrSG"),i=e("fXoL"),r=e("AytR"),a=e("lJxs"),s=e("tk/3");let g=(()=>{class n{constructor(n){this.http=n}getTopChart(n=2){return this.http.get(`${r.a.api_url}?method=chart.gettoptracks&page=${n}&limit=50`).pipe(Object(a.a)(n=>n.tracks))}}return n.\u0275fac=function(t){return new(t||n)(i.cc(s.b))},n.\u0275prov=i.Kb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var l=e("ofXK"),f=e("aceb");function d(n,t){if(1&n){const n=i.Vb();i.Ub(0,"div",4),i.Ub(1,"nb-alert",5),i.fc("close",(function(){return i.wc(n),i.hc().alertText=null})),i.Gc(2),i.Tb(),i.Tb()}if(2&n){const n=i.hc();i.Bb(2),i.Ic(" ",n.alertText," ")}}function h(n,t){if(1&n){const n=i.Vb();i.Ub(0,"div",10),i.Ub(1,"nb-card",11),i.fc("click",(function(){i.wc(n);const e=t.$implicit;return i.hc(2).navToTrackPage(e.url)})),i.Pb(2,"img",12),i.Ub(3,"h4"),i.Gc(4),i.Tb(),i.Ub(5,"p"),i.Gc(6),i.Tb(),i.Tb(),i.Tb()}if(2&n){const n=t.$implicit,e=i.hc(2);i.Bb(2),i.nc("src",n.image.length>0?n.image[0]["#text"]:e.defaultImgSrc,i.yc),i.Bb(2),i.Hc(n.name),i.Bb(2),i.Hc(n.artist.name)}}function b(n,t){if(1&n&&(i.Ub(0,"div",6),i.Ub(1,"h2",7),i.Gc(2,"Top Charts"),i.Tb(),i.Ub(3,"div",8),i.Ec(4,h,7,3,"div",9),i.Tb(),i.Tb()),2&n){const n=i.hc();i.Bb(4),i.nc("ngForOf",n.tracks)}}function u(n,t){1&n&&(i.Ub(0,"li",16),i.Ub(1,"a",17),i.Gc(2,"Previous"),i.Tb(),i.Tb())}function p(n,t){if(1&n){const n=i.Vb();i.Ub(0,"li",16),i.Ub(1,"a",18),i.fc("click",(function(){i.wc(n);const e=t.$implicit;return i.hc(2).onPageChange(e)})),i.Gc(2),i.Tb(),i.Tb()}if(2&n){const n=t.$implicit,e=i.hc(2);i.Gb("active",e.page===n),i.Bb(2),i.Hc(n)}}function m(n,t){1&n&&(i.Ub(0,"li",16),i.Ub(1,"a",19),i.Gc(2,"Next"),i.Tb(),i.Tb())}function v(n,t){if(1&n&&(i.Ub(0,"nav"),i.Ub(1,"ul",13),i.Ec(2,u,3,0,"li",14),i.Ec(3,p,3,3,"li",15),i.Ec(4,m,3,0,"li",14),i.Tb(),i.Tb()),2&n){const n=i.hc();i.Bb(2),i.nc("ngIf",1!==n.page),i.Bb(1),i.nc("ngForOf",n.paginationItems),i.Bb(1),i.nc("ngIf",n.page<n.collectionSize)}}function P(n,t){1&n&&(i.Ub(0,"div",20),i.Pb(1,"div",21),i.Tb())}let O=(()=>{class n{constructor(n){this.chartService=n,this.isLoading=!1,this.tracks=[],this.defaultImgSrc="assets/images/defaultImg.png",this.page=1,this.collectionSize=1,this.paginationItems=[]}onResize(n){this.screenWidth=window.innerWidth,this.countPagination()}ngOnInit(){this.getTopChart(this.page),this.screenWidth=window.innerWidth}getTopChart(n){var t;return Object(o.a)(this,void 0,void 0,(function*(){this.isLoading=!0;try{let t=yield this.chartService.getTopChart(n).toPromise();this.tracks=t.track;for(let n of this.tracks)n.image=n.image.filter(n=>"extralarge"===n.size);this.metaData=t["@attr"],this.countPagination()}catch(e){console.log(e),this.alertText=null===(t=null==e?void 0:e.error)||void 0===t?void 0:t.message}finally{this.isLoading=!1}}))}countPagination(){this.collectionSize=parseInt(this.metaData.totalPages);let n=Array.from(Array(this.collectionSize).keys());this.paginationItems=n.filter(this.screenWidth<768?n=>n<=this.page&&0!==n&&n>this.page-2||n>this.page&&n<this.page+2:n=>n<=this.page&&0!==n&&n>this.page-5||n>this.page&&n<this.page+5)}onPageChange(n){this.page=n,this.getTopChart(n)}navToTrackPage(n){window.open(n,"_blank").focus()}}return n.\u0275fac=function(t){return new(t||n)(i.Ob(g))},n.\u0275cmp=i.Ib({type:n,selectors:[["app-home"]],hostBindings:function(n,t){1&n&&i.fc("resize",(function(n){return t.onResize(n)}),!1,i.vc)},decls:5,vars:4,consts:[["class","position-fixed","style","z-index: 1",4,"ngIf"],["class","container-fluid",4,"ngIf","ngIfElse"],[4,"ngIf"],["loader",""],[1,"position-fixed",2,"z-index","1"],["status","warning","closable","",3,"close"],[1,"container-fluid"],[1,"mb-4"],[1,"row","d-flex","flex-wrap"],["class","col m-auto track-div",4,"ngFor","ngForOf"],[1,"col","m-auto","track-div"],["size","medium",3,"click"],["alt","",3,"src"],[1,"pagination","justify-content-center"],["class","page-item",4,"ngIf"],["class","page-item",3,"active",4,"ngFor","ngForOf"],[1,"page-item"],[1,"page-link"],[1,"page-link",3,"click"],["href","#",1,"page-link"],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-grow","text-warning"]],template:function(n,t){if(1&n&&(i.Ec(0,d,3,1,"div",0),i.Ec(1,b,5,1,"div",1),i.Ec(2,v,5,3,"nav",2),i.Ec(3,P,2,0,"ng-template",null,3,i.Fc)),2&n){const n=i.uc(4);i.nc("ngIf",t.alertText),i.Bb(1),i.nc("ngIf",!t.isLoading)("ngIfElse",n),i.Bb(1),i.nc("ngIf",!t.isLoading)}},directives:[l.n,f.a,l.m,f.c],styles:["h2[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;color:#ffc94d;margin-bottom:10px}.col[_ngcontent-%COMP%]{max-width:342px}nb-card[_ngcontent-%COMP%]{background:transparent;border:none;height:25rem!important;cursor:pointer;transition:.3s}nb-card[_ngcontent-%COMP%]:hover{transition:.3s ease-in-out;transform:scale(1.1)}nb-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{border:1px solid #db8b00;transition:.3s ease-in-out;box-shadow:none}nb-card[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%], nb-card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#db8b00;transition:.3s ease-in-out}nb-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:1px solid #ffcd57;transition:.3s;box-shadow:2px 1px 3px 0 rgba(255,201,77,.45098039215686275)}nb-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], nb-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#ffc94d;margin:2px;font-family:Turret Road,cursive;transition:.3s}.page-link[_ngcontent-%COMP%]{color:#db8b00;border:1px solid #ffc94d}.page-link[_ngcontent-%COMP%]:hover{color:#fff;background-color:#db8b00;border:1px solid #ffc94d}.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{background-color:#ffc94d;color:#fff;border-color:#ffc94d}"]}),n})();var C=e("3Pt+");let M=(()=>{class n{constructor(n){this.http=n}searchTrack(n){return this.http.get(`${r.a.api_url}?method=track.search&track=${n}`).pipe(Object(a.a)(n=>n.results))}}return n.\u0275fac=function(t){return new(t||n)(i.cc(s.b))},n.\u0275prov=i.Kb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function x(n,t){if(1&n){const n=i.Vb();i.Ub(0,"div",5),i.Ub(1,"nb-alert",6),i.fc("close",(function(){return i.wc(n),i.hc().alertText=null})),i.Gc(2),i.Tb(),i.Tb()}if(2&n){const n=i.hc();i.Bb(2),i.Ic(" ",n.alertText," ")}}function _(n,t){if(1&n){const n=i.Vb();i.Ub(0,"div",19),i.Ub(1,"nb-card",20),i.fc("click",(function(){i.wc(n);const e=t.$implicit;return i.hc(4).navToTrackPage(e.url)})),i.Pb(2,"img",21),i.Ub(3,"h4"),i.Gc(4),i.Tb(),i.Ub(5,"p"),i.Gc(6),i.Tb(),i.Tb(),i.Tb()}if(2&n){const n=t.$implicit,e=i.hc(4);i.Bb(2),i.nc("src",n.image[0]["#text"]&&n.image[0]["#text"].length>0?n.image[0]["#text"]:e.defaultImgSrc,i.yc),i.Bb(2),i.Hc(n.name),i.Bb(2),i.Hc(n.artist)}}function T(n,t){if(1&n&&(i.Ub(0,"div",17),i.Ec(1,_,7,3,"div",18),i.Tb()),2&n){const n=i.hc(3);i.Bb(1),i.nc("ngForOf",n.tracks)}}function k(n,t){if(1&n&&(i.Ub(0,"div"),i.Ec(1,T,2,1,"div",16),i.Tb()),2&n){const n=i.hc(2),t=i.uc(3);i.Bb(1),i.nc("ngIf",n.query)("ngIfElse",t)}}function w(n,t){if(1&n){const n=i.Vb();i.Ub(0,"div",7),i.Ub(1,"div",8),i.Ub(2,"div",9),i.Ub(3,"h1",10),i.Gc(4),i.Tb(),i.Tb(),i.Ub(5,"div",11),i.Ub(6,"form",12),i.fc("ngSubmit",(function(){return i.wc(n),i.hc().search()})),i.Ub(7,"div",13),i.Ub(8,"div"),i.Ub(9,"input",14),i.fc("ngModelChange",(function(){return i.wc(n),i.hc().onInputChange()})),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ec(10,k,2,2,"div",15),i.Tb()}if(2&n){const n=i.hc(),t=i.uc(6);i.Bb(4),i.Hc(n.tracks.length>0?"Results":"Search tracks"),i.Bb(2),i.nc("formGroup",n.form),i.Bb(4),i.nc("ngIf",!n.isSearching)("ngIfElse",t)}}function y(n,t){1&n&&(i.Ub(0,"div",22),i.Ub(1,"p"),i.Gc(2,"You may start search by clicking magnifier"),i.Tb(),i.Tb())}function I(n,t){if(1&n&&(i.Ub(0,"div",22),i.Ub(1,"p"),i.Gc(2),i.Tb(),i.Tb()),2&n){const n=i.hc();i.Bb(2),i.Hc(n.hitEnterMessage)}}function U(n,t){1&n&&(i.Ub(0,"div",23),i.Pb(1,"div",24),i.Tb())}const E=[{path:"",children:[{path:"",redirectTo:"home"},{path:"home",component:O}]},{path:"search",component:(()=>{class n{constructor(n,t){this.searchService=n,this.formBuilder=t,this.isLoading=!1,this.isSearching=!1,this.tracks=[],this.defaultImgSrc="assets/images/defaultImg.png",this.hitEnterMessage="",this.form=this.formBuilder.group({searchQuery:new C.c("")})}ngOnInit(){}get query(){return this.form.get("searchQuery").value}search(){var n;return Object(o.a)(this,void 0,void 0,(function*(){if(this.hitEnterMessage="",0!==this.query.length){this.isSearching=!0;try{let n=yield this.searchService.searchTrack(this.query).toPromise();this.tracks=n.trackmatches.track;for(let t of this.tracks)t.image=t.image.filter(n=>"extralarge"===n.size);console.log(n)}catch(t){this.alertText=null===(n=null==t?void 0:t.error)||void 0===n?void 0:n.message,console.log(t)}finally{this.isSearching=!1}}}))}onInputChange(){0===this.query.length?(this.tracks=[],this.isSearching=!1):0===this.tracks.length&&this.form.dirty&&(this.hitEnterMessage="Hit Enter to start search")}navToTrackPage(n){window.open(n,"_blank").focus()}}return n.\u0275fac=function(t){return new(t||n)(i.Ob(M),i.Ob(C.b))},n.\u0275cmp=i.Ib({type:n,selectors:[["app-search"]],decls:7,vars:4,consts:[["class","position-fixed","style","z-index: 1",4,"ngIf"],["class","container-fluid",4,"ngIf","ngIfElse"],["startSearch",""],[3,"ngIf"],["loader",""],[1,"position-fixed",2,"z-index","1"],["status","warning","closable","",3,"close"],[1,"container-fluid"],[1,"row","justify-content-between","mb-4"],[1,"col"],[1,"m-auto"],[1,"col","d-flex","align-items-center","pb-3","justify-content-end"],[3,"formGroup","ngSubmit"],[1,"search"],["formControlName","searchQuery","placeholder","Search track","type","text",3,"ngModelChange"],[4,"ngIf","ngIfElse"],["class","row d-flex flex-wrap",4,"ngIf","ngIfElse"],[1,"row","d-flex","flex-wrap"],["class","col m-auto track-div",4,"ngFor","ngForOf"],[1,"col","m-auto","track-div"],["size","medium",3,"click"],["alt","",3,"src"],[1,"mt-5","d-flex","justify-content-center","align-content-center"],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-grow","text-warning"]],template:function(n,t){if(1&n&&(i.Ec(0,x,3,1,"div",0),i.Ec(1,w,11,4,"div",1),i.Ec(2,y,3,0,"ng-template",null,2,i.Fc),i.Ec(4,I,3,1,"ng-template",3),i.Ec(5,U,2,0,"ng-template",null,4,i.Fc)),2&n){const n=i.uc(6);i.nc("ngIf",t.alertText),i.Bb(1),i.nc("ngIf",!t.isLoading)("ngIfElse",n),i.Bb(3),i.nc("ngIf",t.hitEnterMessage.length>0)}},directives:[l.n,f.a,C.q,C.j,C.e,C.a,C.i,C.d,l.m,f.c],styles:['h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Turret Road,cursive;color:#ffcd57;margin-bottom:10px}.col[_ngcontent-%COMP%]{max-width:342px}input[_ngcontent-%COMP%]{font-family:Turret Road,cursive}nb-card[_ngcontent-%COMP%]{background:transparent;border:none;height:25rem!important;cursor:pointer;transition:.3s}nb-card[_ngcontent-%COMP%]:hover{transition:.3s ease-in-out;transform:scale(1.1)}nb-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{border:1px solid #db8b00;transition:.3s ease-in-out;box-shadow:none}nb-card[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%], nb-card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#db8b00;transition:.3s ease-in-out}nb-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:1px solid #ffcd57;transition:.3s;box-shadow:2px 1px 3px 0 rgba(255,201,77,.45098039215686275)}nb-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], nb-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#db8b00;margin:2px;font-family:Turret Road,cursive;transition:.3s}.page-link[_ngcontent-%COMP%]{color:#db8b00;border:1px solid #ffc94d}.page-link[_ngcontent-%COMP%]:hover{color:#fff;background-color:#db8b00;border:1px solid #ffc94d}.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{background-color:#ffc94d;color:#fff;border-color:#ffc94d}.search[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;position:relative}.search[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{content:"";background:#ffcd57;width:4px;height:20px;position:absolute;top:20px;transform:rotate(135deg)}.search[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{color:#ffcd57;font-size:16px;background:transparent;width:25px;height:25px;padding:10px;border:3px solid #ffcd57;outline:none;border-radius:35px;transition:width .5s;cursor:pointer}.search[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]::placeholder{color:#ffcd57;opacity:0;transition:opacity .15s ease-out}.search[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus::placeholder{opacity:1}.search[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus, .search[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:not(:placeholder-shown){width:250px}@media only screen and (max-width:768px){.search[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus, .search[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:not(:placeholder-shown){width:10em}}']}),n})()}];let B=(()=>{class n{}return n.\u0275mod=i.Mb({type:n}),n.\u0275inj=i.Lb({factory:function(t){return new(t||n)},imports:[[c.g.forChild(E)],c.g]}),n})();var S=e("1kSV");let G=(()=>{class n{}return n.\u0275mod=i.Mb({type:n}),n.\u0275inj=i.Lb({factory:function(t){return new(t||n)},imports:[[f.d,l.c,f.n,S.b,f.h,C.n,f.m,f.b],B]}),n})()},mrSG:function(n,t,e){"use strict";function c(n,t,e,c){return new(e||(e=Promise))((function(o,i){function r(n){try{s(c.next(n))}catch(t){i(t)}}function a(n){try{s(c.throw(n))}catch(t){i(t)}}function s(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(r,a)}s((c=c.apply(n,t||[])).next())}))}e.d(t,"a",(function(){return c}))}}]);