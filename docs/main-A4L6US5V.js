import{b as Z}from"./chunk-3IS4SD6P.js";import{a as J}from"./chunk-X4UF5IBL.js";import{a as k,b as I,c as T,e as z,f as j,g as q,h as B,i as L,k as V,n as W,o as H,p as U,q as Y,r as G,y as X}from"./chunk-CV7BMLDL.js";import"./chunk-WXI33M2S.js";import{$ as v,Fa as h,Ga as g,Ha as b,Ja as P,La as S,Na as w,Oa as O,Pb as R,T as x,V as C,ab as r,bb as a,cb as l,ea as m,fb as E,ha as _,pb as d,qb as F,sb as N,tb as A,ub as D,wb as p,ya as M}from"./chunk-EFJEN73E.js";var K=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["app-nao-encontrada"]],standalone:!0,features:[p],decls:4,vars:0,consts:[[1,"container"],[1,"fa-solid","fa-x"]],template:function(t,s){t&1&&(r(0,"section",0),l(1,"i",1),r(2,"h2"),d(3,"404 P\xE1gina n\xE3o encontrada"),a()())},styles:[".container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;height:400px}.container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:200px}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:44px}"]});let o=e;return o})();var Q=[{path:"produtos",loadChildren:()=>import("./chunk-LNEFBWRE.js").then(o=>o.ProdutosModule)},{path:"",redirectTo:"produtos",pathMatch:"full"},{path:"carrinho",loadChildren:()=>import("./chunk-EGDZPXH4.js").then(o=>o.CarrinhoModule)},{path:"contato",loadChildren:()=>import("./chunk-NIDIVWLH.js").then(o=>o.ContatoModule)},{path:"**",component:K}];var ae="@",se=(()=>{let e=class e{constructor(n,t,s,c,u){this.doc=n,this.delegate=t,this.zone=s,this.animationType=c,this.moduleImpl=u,this._rendererFactoryPromise=null,this.scheduler=v(P,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-5YLYFWFQ.js")).catch(t=>{throw new x(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:s})=>{this._engine=t(this.animationType,this.doc,this.scheduler);let c=new s(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(n,t){let s=this.delegate.createRenderer(n,t);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let c=new y(s);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let re=u.createRenderer(n,t);c.use(re)}).catch(u=>{c.use(s)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(t){b()},e.\u0275prov=C({token:e,factory:e.\u0275fac});let o=e;return o})(),y=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let i of this.replay)i(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,i){return this.delegate.createElement(e,i)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,i){this.delegate.appendChild(e,i)}insertBefore(e,i,n,t){this.delegate.insertBefore(e,i,n,t)}removeChild(e,i,n){this.delegate.removeChild(e,i,n)}selectRootElement(e,i){return this.delegate.selectRootElement(e,i)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,i,n,t){this.delegate.setAttribute(e,i,n,t)}removeAttribute(e,i,n){this.delegate.removeAttribute(e,i,n)}addClass(e,i){this.delegate.addClass(e,i)}removeClass(e,i){this.delegate.removeClass(e,i)}setStyle(e,i,n,t){this.delegate.setStyle(e,i,n,t)}removeStyle(e,i,n){this.delegate.removeStyle(e,i,n)}setProperty(e,i,n){this.shouldReplay(i)&&this.replay.push(t=>t.setProperty(e,i,n)),this.delegate.setProperty(e,i,n)}setValue(e,i){this.delegate.setValue(e,i)}listen(e,i,n){return this.shouldReplay(i)&&this.replay.push(t=>t.listen(e,i,n)),this.delegate.listen(e,i,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(ae)}};function $(o="animations"){return w("NgAsyncAnimations"),_([{provide:S,useFactory:(e,i,n)=>new se(e,i,n,o),deps:[R,k,O]},{provide:M,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ee={providers:[B(Q),T(),$()]};var te=(()=>{let e=class e{constructor(n){this.router=n,this.descricao=""}pesquisar(){if(this.descricao){this.router.navigate(["produtos"],{queryParams:{descricao:this.descricao}});return}this.router.navigate(["produtos"])}};e.\u0275fac=function(t){return new(t||e)(g(j))},e.\u0275cmp=m({type:e,selectors:[["app-barra-pesquisa"]],standalone:!0,features:[p],decls:4,vars:1,consts:[[1,"search-form",3,"ngSubmit"],["type","text","name","descricao",3,"ngModelChange","ngModel"],[1,"fa-solid","fa-magnifying-glass"]],template:function(t,s){t&1&&(r(0,"form",0),E("ngSubmit",function(){return s.pesquisar()}),r(1,"input",1),D("ngModelChange",function(u){return A(s.descricao,u)||(s.descricao=u),u}),a(),r(2,"button"),l(3,"i",2),a()()),t&2&&(h(),N("ngModel",s.descricao))},dependencies:[X,G,V,W,H,Y,U],styles:[".search-form[_ngcontent-%COMP%]{height:44px;display:flex}.search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{box-sizing:border-box;height:56px;padding:28px;flex:1;background-color:var(--light-gray);color:var(--gray);border:none;transition:all -3s ease-in-out;font-size:22px}.search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:56px;height:56px;background-color:var(--blue);border:none;color:#fff;font-size:22px}"]});let o=e;return o})();var ne=(()=>{let e=class e{constructor(n){this.carrinhoService=n}};e.\u0275fac=function(t){return new(t||e)(g(J))},e.\u0275cmp=m({type:e,selectors:[["app-header"]],standalone:!0,features:[p],decls:34,vars:1,consts:[[1,"main-header"],[1,"main-header__title"],[1,"main-header__title--blue"],[1,"main-header__title--orange"],[1,"container-menu"],[1,"main-header__menu"],["routerLink","produtos"],[1,"fa-solid","fa-cart-shopping"],["routerLink","carrinho"],[1,"badge-carrinho"],["routerLink","contato"],[1,"fa-brands","fa-facebook"],[1,"fa-brands","fa-instagram"],[1,"fa-brands","fa-twitter"],[1,"fa-brands","fa-linkedin"]],template:function(t,s){t&1&&(r(0,"header",0)(1,"h1",1)(2,"span",2),d(3,"Yan"),a(),r(4,"span",3),d(5,"Express"),a()(),r(6,"div",4)(7,"nav",5)(8,"ul")(9,"li")(10,"a",6),d(11,"Produtos"),a()(),r(12,"li"),l(13,"i",7),r(14,"a",8),d(15,"Carrinho "),r(16,"span",9),d(17),a()()(),r(18,"li")(19,"a",10),d(20,"Contato"),a()(),r(21,"li")(22,"a"),l(23,"i",11),a()(),r(24,"li")(25,"a"),l(26,"i",12),a()(),r(27,"li")(28,"a"),l(29,"i",13),a()(),r(30,"li")(31,"a"),l(32,"i",14),a()()()(),l(33,"app-barra-pesquisa"),a()()),t&2&&(h(17),F(s.carrinhoService.obtemCarrinho().length))},dependencies:[L,q,te],styles:[".main-header[_ngcontent-%COMP%]{padding:10px 0;display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center;column-gap:40px}.main-header__title[_ngcontent-%COMP%]{font-size:80px;letter-spacing:-1.5px}.main-header__title--blue[_ngcontent-%COMP%]{color:var(--blue);color:#00f;font-size:60px}.main-header__title--orange[_ngcontent-%COMP%]{color:var(--orange);color:orange;font-size:60px}.main-header__menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.main-header__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px;color:var(--gray);font-weight:400;font-size:22px;text-decoration:none;transition:all .3s ease-in-out}.main-header__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:var(--blue);color:#fff}.container-menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:20px;flex:1}.badge-carrinho[_ngcontent-%COMP%]{background-color:var(--dark-blue);padding:5px 10px;border-radius:4px;color:#fff}"]});let o=e;return o})();var oe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["app-footer"]],standalone:!0,features:[p],decls:22,vars:0,consts:[[1,"footer"],[1,"footer__container"],[1,"footer__title"],[1,"footer__about-text"],[1,"fa-solid","fa-envelope"],[1,"fa-solid","fa-phone"],[1,"fa-brands","fa-whatsapp"],[1,"footer__copyright"]],template:function(t,s){t&1&&(r(0,"footer",0)(1,"div",1)(2,"section")(3,"h2",2),d(4,"Sobre"),a(),r(5,"p",3),d(6," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ratione modi alias a sed dignissimos cumque vel, minima quis officiis tenetur laboriosam id! Impedit, sint doloribus quidem expedita sunt neque! "),a()(),r(7,"address")(8,"h2",2),d(9,"Contato"),a(),r(10,"ul")(11,"li"),l(12,"i",4),d(13," email.email.com"),a(),r(14,"li"),l(15,"i",5),d(16," (79) 99999-9999"),a(),r(17,"li"),l(18,"i",6),d(19," (79) 99999-9999"),a()()()(),r(20,"section",7),d(21," \xA9 Todos os direitos reservados "),a()())},styles:[".footer[_ngcontent-%COMP%]{background-color:var(--light-gray);color:var(--gray);font-size:18px}.footer__container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;flex-flow:row wrap;padding:20px}.footer__copyright[_ngcontent-%COMP%]{text-align:center;margin-top:20px;background-color:var(--light-gray-2);font-weight:700;padding:20px;color:var(--gray)}.footer__title[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:var(--blue);margin-bottom:5px}.footer__about-text[_ngcontent-%COMP%]{width:400px;text-align:justify}.footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--orange)}.footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:10px 0}"]});let o=e;return o})();var ie=(()=>{let e=class e{constructor(){this.title="vendas-computers"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:4,vars:0,consts:[[1,"container"]],template:function(t,s){t&1&&(r(0,"div",0),l(1,"app-header")(2,"router-outlet"),a(),l(3,"app-footer"))},dependencies:[z,ne,oe,Z],styles:['.container[_ngcontent-%COMP%]{width:"80%";margin:auto;padding:20px}']});let o=e;return o})();I(ie,ee).catch(o=>console.error(o));