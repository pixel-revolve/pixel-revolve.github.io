import{I as E,Z as B,_ as N,d as R,H as q,e as D,j as h,m as z,n as A,q as V,o as l,f as c,w as m,g as H,b as W,l as j,v as O,i as o,x as L,y as S,s as I,T as M,X as U,R as X}from"./app.9fd9aa02.js";import{A as Y,P as Z}from"./Page.27f1d601.js";import{u as G,C as J}from"./Common.3f4c1105.js";import{P as K}from"./Pager.d1d6d09c.js";import{u as Q}from"./useBlog.97ff756b.js";import"./resolveTime.439cd54d.js";const x=({headers:k,activeLink:r})=>{const n=E();return B("ul",{class:{catalog:!0}},k.map(a=>B("li",{class:{active:r===a.slug,[`level-${a.level}`]:!0,[`toc-link-${a.slug}`]:!0},key:a.title,onClick:()=>{n.currentRoute.value.hash!==`#${a.slug}`&&n.push(`#${a.slug}`)}},a.title)))};x.displayName="Catalog";x.props={headers:{type:Object,required:!0},activeLink:{type:String,default:""}};const ee=R({__name:"Post",setup(k){const r=U();q();const n=D(),a=E(),_=X(),b=_.resolve,F=_.pending,i=G(),$=h(()=>i.value?r.value.headers:[]),w=t=>t.children.length>0?[t].concat(...t.children.map(w)):t,u=h(()=>[].concat(...$.value.map(w))),e=z({headerHeight:0,screenWidth:0,catalogTop:0,activeLink:"",isFixed:!1}),p=40,y=80,d=()=>{for(let s=u.value.length-1;s>=0;s--){const C=u.value[s].slug,P=document.querySelector(`#${C}`);if((P?P.getBoundingClientRect().top:0)<=100){e.activeLink=C;break}}window.pageYOffset>e.headerHeight+p-y?(e.isFixed=!0,e.catalogTop=y):(e.isFixed=!1,e.catalogTop=e.headerHeight+p)},g=()=>{const t=document.querySelector(".post-header");e.headerHeight=t?t.offsetHeight:0,e.screenWidth=document.body.clientWidth,e.catalogTop=e.headerHeight+p};let T;A(()=>{window.addEventListener("scroll",d),g(),window.onresize=()=>(()=>{g(),d()})(),T=a.afterEach(()=>{g()})}),V(()=>{window.removeEventListener("scroll",d),T()});const{post:f}=Q(),v=h(()=>{if(!f.value)return{};const t=f.value.next;t&&(t.text=n.value.postNext);const s=f.value.prev;return s&&(s.text=n.value.postPrev),{next:t,prev:s}});return(t,s)=>(l(),c(J,null,{page:m(()=>[H(M,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:o(b),onBeforeLeave:o(F)},{default:m(()=>[W("div",{class:S(["post-wrapper",{"show-catalog":o(i)}])},[j(H(Y,{class:"post-header"},null,512),[[O,o(r).title]]),(l(),c(Z,{key:o(r).path,class:"post-content"},{bottom:m(()=>[o(v).next||o(v).prev?(l(),c(K,{key:0,data:o(v)},null,8,["data"])):L("",!0)]),_:1})),o(i)?(l(),c(o(x),{key:0,headers:o(u),"active-link":e.activeLink,class:S({fixed:e.isFixed}),style:I({top:`${e.catalogTop}px`})},null,8,["headers","active-link","class","style"])):L("",!0)],2)]),_:1},8,["onBeforeEnter","onBeforeLeave"])]),_:1}))}});var ce=N(ee,[["__file","Post.vue"]]);export{ce as default};
