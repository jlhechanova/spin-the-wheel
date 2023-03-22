import{S as J,i as Z,s as x,K as pe,k as y,q as Y,a as H,l as C,m as T,r as K,h as f,c as L,n as o,b as P,E as p,L as S,I as Q,M as $,N as ve,w as re,O as U,P as A,p as G,Q as X,C as ae,R as ge,T as we,F as ie,G as ue,H as ce,g as W,d as R,U as ke,V as be,y as te,z as se,A as le,W as Me,f as Ee,X as Te,B as ne,e as he,v as Ie,Y as ye,u as Ce}from"../chunks/index.27b8d7d1.js";function Ne(n){let t,e,s,l,r,i,_,v,w,k,u,d,h,b,m,g,a;return pe(n[9]),{c(){t=y("div"),e=y("canvas"),s=Y("This is a spin the wheel app, where you fill in your inputs then spin the wheel to get a random result from your given inputs."),_=H(),v=y("div"),w=y("span"),k=H(),u=y("button"),d=y("span"),h=H(),b=y("span"),m=Y("SPIN"),this.h()},l(M){t=C(M,"DIV",{class:!0});var I=T(t);e=C(I,"CANVAS",{style:!0,height:!0,width:!0,class:!0});var z=T(e);s=K(z,"This is a spin the wheel app, where you fill in your inputs then spin the wheel to get a random result from your given inputs."),z.forEach(f),_=L(I),v=C(I,"DIV",{class:!0});var O=T(v);w=C(O,"SPAN",{class:!0}),T(w).forEach(f),O.forEach(f),k=L(I),u=C(I,"BUTTON",{class:!0});var N=T(u);d=C(N,"SPAN",{class:!0}),T(d).forEach(f),h=L(N),b=C(N,"SPAN",{class:!0});var q=T(b);m=K(q,"SPIN"),q.forEach(f),N.forEach(f),I.forEach(f),this.h()},h(){o(e,"style",l=`transform: rotate(${n[4]}deg); ${n[3]?"transition: transform 10s cubic-bezier(0.25, -0.04, 0.2, 1.03)":""}`),o(e,"height",r=n[5]?n[5]:640),o(e,"width",i=n[5]?n[5]:640),o(e,"class","svelte-tqvae5"),o(w,"class","top svelte-tqvae5"),o(v,"class","marker svelte-tqvae5"),o(d,"class","shadow svelte-tqvae5"),o(b,"class","top svelte-tqvae5"),u.disabled=n[3],o(u,"class","svelte-tqvae5"),o(t,"class","svelte-tqvae5")},m(M,I){P(M,t,I),p(t,e),p(e,s),n[10](e),p(t,_),p(t,v),p(v,w),p(t,k),p(t,u),p(u,d),p(u,h),p(u,b),p(b,m),g||(a=[S(window,"resize",n[9]),S(e,"transitionend",n[7]),S(u,"click",n[6])],g=!0)},p(M,[I]){I&24&&l!==(l=`transform: rotate(${M[4]}deg); ${M[3]?"transition: transform 10s cubic-bezier(0.25, -0.04, 0.2, 1.03)":""}`)&&o(e,"style",l),I&32&&r!==(r=M[5]?M[5]:640)&&o(e,"height",r),I&32&&i!==(i=M[5]?M[5]:640)&&o(e,"width",i),I&8&&(u.disabled=M[3])},i:Q,o:Q,d(M){M&&f(t),n[10](null),g=!1,$(a)}}}function Be(n,t,e){let s,{items:l}=t,r,i,_,v=!1,w=0,k=90*(Math.random()+1);const u=()=>{v||e(4,k=k%360);const a=r.getContext("2d");a.font="600 extra-condensed 2em Nunito, sans-serif",a.fillText("",0,0),a.clearRect(0,0,r.width,r.height),a.save();let M=r.width/2;a.translate(M,M);let I=2*Math.PI/l.length;for(let z=0;z<l.length;z++){a.fillStyle=`rgb(${l[z].color})`,a.beginPath(),a.moveTo(0,0),a.arc(0,0,M,-I/2,I/2),a.closePath(),a.fill(),a.font="600 extra-condensed 2em Nunito, sans-serif",a.textBaseline="middle",a.fillStyle=`rgb(${l[z].textColor}`;let O=s<342?32:40,N=l[z].value,q=a.measureText(N).width,D=M-O-16,c=N.length-1;if(q*.75>D&&(a.font="600 extra-condensed 1.5em Nunito, sans-serif",q=a.measureText(N).width,q*.75>D)){let E=0,B=c,j=D-a.measureText("...").width;for(;E<B;){c=Math.floor((E+B)/2);let V=a.measureText(N.slice(0,c)).width*.75,F=a.measureText(N.slice(0,c+1)).width*.75;if(V>j&&F>j)B=c-1;else if(V<j&&F<j)E=c+1;else break}}a.fillText(c===N.length-1?N:N.slice(0,c)+"...",Math.max(M-20-q,O+8),0,D),a.rotate(I)}a.restore()},d=()=>{if(l.length>0){let a=360/l.length;w=Math.floor(Math.random()*l.length),e(4,k=7200+(l.length-w-.5+Math.random())*a),e(3,v=!0)}},h=ve(),b=()=>{e(3,v=!1),e(4,k=k%360),h("result",{result:w})};function m(){e(1,i=window.innerHeight),e(2,_=window.innerWidth)}function g(a){re[a?"unshift":"push"](()=>{r=a,e(0,r)})}return n.$$set=a=>{"items"in a&&e(8,l=a.items)},n.$$.update=()=>{n.$$.dirty&6&&e(5,s=Math.min(640,i-48,_-48)),n.$$.dirty&257&&l&&r&&(e(3,v=!1),requestAnimationFrame(u)),n.$$.dirty&5&&r&&_&&requestAnimationFrame(u)},[r,i,_,v,k,s,d,b,l,m,g]}class ze extends J{constructor(t){super(),Z(this,t,Be,Ne,x,{items:8})}}function Oe(n){let t,e;return{c(){t=U("svg"),e=U("path"),this.h()},l(s){t=A(s,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0});var l=T(t);e=A(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),T(e).forEach(f),l.forEach(f),this.h()},h(){o(e,"stroke-linecap","round"),o(e,"stroke-linejoin","round"),o(e,"d","M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"fill","none"),o(t,"viewBox","0 0 24 24"),o(t,"stroke-width","2.25"),o(t,"stroke","currentColor")},m(s,l){P(s,t,l),p(t,e)},d(s){s&&f(t)}}}function Se(n){let t,e,s;return{c(){t=U("svg"),e=U("path"),s=U("path"),this.h()},l(l){t=A(l,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0});var r=T(t);e=A(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),T(e).forEach(f),s=A(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),T(s).forEach(f),r.forEach(f),this.h()},h(){o(e,"stroke-linecap","round"),o(e,"stroke-linejoin","round"),o(e,"d","M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"),o(s,"stroke-linecap","round"),o(s,"stroke-linejoin","round"),o(s,"d","M15 12a3 3 0 11-6 0 3 3 0 016 0z"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"fill","none"),o(t,"viewBox","0 0 24 24"),o(t,"stroke-width","2.25"),o(t,"stroke","currentColor")},m(l,r){P(l,t,r),p(t,e),p(t,s)},d(l){l&&f(t)}}}function je(n){let t,e,s,l,r,i,_,v,w,k,u,d,h;function b(a,M){return a[2].isHidden?Oe:Se}let m=b(n),g=m(n);return{c(){t=y("li"),e=y("form"),s=y("input"),l=H(),r=y("button"),i=H(),_=y("button"),g.c(),v=H(),w=y("button"),k=U("svg"),u=U("path"),this.h()},l(a){t=C(a,"LI",{class:!0});var M=T(t);e=C(M,"FORM",{class:!0});var I=T(e);s=C(I,"INPUT",{class:!0}),l=L(I),r=C(I,"BUTTON",{class:!0}),T(r).forEach(f),I.forEach(f),i=L(M),_=C(M,"BUTTON",{class:!0});var z=T(_);g.l(z),z.forEach(f),v=L(M),w=C(M,"BUTTON",{class:!0});var O=T(w);k=A(O,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0});var N=T(k);u=A(N,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),T(u).forEach(f),N.forEach(f),O.forEach(f),M.forEach(f),this.h()},h(){o(s,"class","svelte-1vaemsg"),G(s,"background-color",`rgb(${n[2].color})`),G(s,"color",`rgb(${n[2].textColor})`),o(r,"class","svelte-1vaemsg"),o(e,"class","svelte-1vaemsg"),o(_,"class","svelte-1vaemsg"),G(_,"padding","0.4rem"),o(u,"stroke-linecap","round"),o(u,"stroke-linejoin","round"),o(u,"d","M6 18L18 6M6 6l12 12"),o(k,"xmlns","http://www.w3.org/2000/svg"),o(k,"fill","none"),o(k,"viewBox","0 0 24 24"),o(k,"stroke-width","2.5"),o(k,"stroke","currentColor"),o(w,"class","svelte-1vaemsg"),o(t,"class","svelte-1vaemsg")},m(a,M){P(a,t,M),p(t,e),p(e,s),X(s,n[4]),p(e,l),p(e,r),p(t,i),p(t,_),g.m(_,null),p(t,v),p(t,w),p(w,k),p(k,u),d||(h=[S(s,"input",n[5]),S(s,"blur",n[6]),S(e,"submit",n[7]),S(_,"click",n[8]),S(w,"click",n[9])],d=!0)},p(a,[M]){M&16&&s.value!==a[4]&&X(s,a[4]),M&4&&G(s,"background-color",`rgb(${a[2].color})`),M&4&&G(s,"color",`rgb(${a[2].textColor})`),m!==(m=b(a))&&(g.d(1),g=m(a),g&&(g.c(),g.m(_,null)))},i:Q,o:Q,d(a){a&&f(t),g.d(),d=!1,$(h)}}}function He(n,t,e){let{rmInput:s}=t,{editInput:l}=t,{item:r}=t,{id:i}=t,_=r.value;function v(){_=this.value,e(4,_)}const w=()=>l(i,{...r,value:_}),k=h=>{h.preventDefault(),l(i,{...r,value:_})},u=()=>l(i,{...r,isHidden:!r.isHidden}),d=()=>s(i);return n.$$set=h=>{"rmInput"in h&&e(0,s=h.rmInput),"editInput"in h&&e(1,l=h.editInput),"item"in h&&e(2,r=h.item),"id"in h&&e(3,i=h.id)},[s,l,r,i,_,v,w,k,u,d]}class Le extends J{constructor(t){super(),Z(this,t,He,je,x,{rmInput:0,editInput:1,item:2,id:3})}}const Pe=n=>({}),fe=n=>({});function Ue(n){let t,e,s,l,r,i,_,v,w,k;const u=n[3].header,d=ae(u,n,n[2],fe),h=n[3].default,b=ae(h,n,n[2],null);return{c(){t=y("dialog"),e=y("div"),s=y("button"),l=U("svg"),r=U("path"),i=H(),d&&d.c(),_=H(),b&&b.c(),this.h()},l(m){t=C(m,"DIALOG",{class:!0});var g=T(t);e=C(g,"DIV",{class:!0});var a=T(e);s=C(a,"BUTTON",{class:!0});var M=T(s);l=A(M,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0});var I=T(l);r=A(I,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),T(r).forEach(f),I.forEach(f),M.forEach(f),i=L(a),d&&d.l(a),_=L(a),b&&b.l(a),a.forEach(f),g.forEach(f),this.h()},h(){o(r,"stroke-linecap","round"),o(r,"stroke-linejoin","round"),o(r,"d","M8 16L16 8M8 8L16 16"),o(l,"xmlns","http://www.w3.org/2000/svg"),o(l,"fill","none"),o(l,"viewBox","0 0 24 24"),o(l,"stroke-width","3"),o(l,"stroke","currentColor"),s.autofocus=!0,o(s,"class","svelte-1e2ft63"),o(e,"class","svelte-1e2ft63"),o(t,"class","svelte-1e2ft63")},m(m,g){P(m,t,g),p(t,e),p(e,s),p(s,l),p(l,r),p(e,i),d&&d.m(e,null),p(e,_),b&&b.m(e,null),n[6](t),v=!0,s.focus(),w||(k=[S(s,"click",n[5]),S(e,"click",ge(n[4])),S(t,"click",we(n[7]))],w=!0)},p(m,[g]){d&&d.p&&(!v||g&4)&&ie(d,u,m,m[2],v?ce(u,m[2],g,Pe):ue(m[2]),fe),b&&b.p&&(!v||g&4)&&ie(b,h,m,m[2],v?ce(h,m[2],g,null):ue(m[2]),null)},i(m){v||(W(d,m),W(b,m),v=!0)},o(m){R(d,m),R(b,m),v=!1},d(m){m&&f(t),d&&d.d(m),b&&b.d(m),n[6](null),w=!1,$(k)}}}function Ae(n,t,e){let{$$slots:s={},$$scope:l}=t,{showModal:r}=t,i;function _(u){ke.call(this,n,u)}const v=()=>i.close();function w(u){re[u?"unshift":"push"](()=>{i=u,e(1,i)})}const k=()=>e(0,r=!1);return n.$$set=u=>{"showModal"in u&&e(0,r=u.showModal),"$$scope"in u&&e(2,l=u.$$scope)},n.$$.update=()=>{n.$$.dirty&3&&i&&(r?i.showModal():i.close())},[r,i,l,s,_,v,w,k]}class qe extends J{constructor(t){super(),Z(this,t,Ae,Ue,x,{showModal:0})}}const De=(n,t,e)=>(n*.299+t*.587+e*.114)/256;function de(n,t,e){const s=n.slice();return s[11]=t[e],s[13]=e,s}function _e(n,t){let e,s,l;return s=new Le({props:{item:t[11],id:t[13],rmInput:t[5],editInput:t[6]}}),{key:n,first:null,c(){e=he(),te(s.$$.fragment),this.h()},l(r){e=he(),se(s.$$.fragment,r),this.h()},h(){this.first=e},m(r,i){P(r,e,i),le(s,r,i),l=!0},p(r,i){t=r;const _={};i&2&&(_.item=t[11]),i&2&&(_.id=t[13]),s.$set(_)},i(r){l||(W(s.$$.fragment,r),l=!0)},o(r){R(s.$$.fragment,r),l=!1},d(r){r&&f(e),ne(s,r)}}}function We(n){var k;let t,e,s=((k=n[1][n[2]])==null?void 0:k.value)+"",l,r,i,_,v,w;return{c(){t=y("div"),e=y("p"),l=Y(s),r=H(),i=y("button"),_=Y("Hide Choice"),this.h()},l(u){t=C(u,"DIV",{class:!0});var d=T(t);e=C(d,"P",{class:!0});var h=T(e);l=K(h,s),h.forEach(f),d.forEach(f),r=L(u),i=C(u,"BUTTON",{class:!0});var b=T(i);_=K(b,"Hide Choice"),b.forEach(f),this.h()},h(){o(e,"class","winnertext svelte-lwgkzf"),o(t,"class","winnermodal svelte-lwgkzf"),o(i,"class","svelte-lwgkzf")},m(u,d){P(u,t,d),p(t,e),p(e,l),P(u,r,d),P(u,i,d),p(i,_),v||(w=S(i,"click",n[8]),v=!0)},p(u,d){var h;d&6&&s!==(s=((h=u[1][u[2]])==null?void 0:h.value)+"")&&Ce(l,s)},d(u){u&&f(t),u&&f(r),u&&f(i),v=!1,w()}}}function Re(n){let t,e;return{c(){t=y("h2"),e=Y("YOU GOT"),this.h()},l(s){t=C(s,"H2",{slot:!0,class:!0});var l=T(t);e=K(l,"YOU GOT"),l.forEach(f),this.h()},h(){o(t,"slot","header"),o(t,"class","svelte-lwgkzf")},m(s,l){P(s,t,l),p(t,e)},p:Q,d(s){s&&f(t)}}}function Ve(n){let t,e,s,l,r,i,_,v,w,k,u,d,h=[],b=new Map,m,g,a,M,I,z;e=new ze({props:{items:n[1].filter(me)}}),e.$on("result",n[7]);let O=n[1];const N=c=>c[11].value+c[11].color;for(let c=0;c<O.length;c+=1){let E=de(n,O,c),B=N(E);b.set(B,h[c]=_e(B,E))}function q(c){n[10](c)}let D={$$slots:{header:[Re],default:[We]},$$scope:{ctx:n}};return n[3]!==void 0&&(D.showModal=n[3]),g=new qe({props:D}),re.push(()=>be(g,"showModal",q)),{c(){t=y("main"),te(e.$$.fragment),s=H(),l=y("section"),r=y("form"),i=y("input"),_=H(),v=y("button"),w=U("svg"),k=U("path"),u=H(),d=y("ul");for(let c=0;c<h.length;c+=1)h[c].c();m=H(),te(g.$$.fragment),this.h()},l(c){t=C(c,"MAIN",{class:!0});var E=T(t);se(e.$$.fragment,E),s=L(E),l=C(E,"SECTION",{class:!0});var B=T(l);r=C(B,"FORM",{class:!0});var j=T(r);i=C(j,"INPUT",{placeholder:!0,class:!0}),_=L(j),v=C(j,"BUTTON",{class:!0});var V=T(v);w=A(V,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0});var F=T(w);k=A(F,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),T(k).forEach(f),F.forEach(f),V.forEach(f),j.forEach(f),u=L(B),d=C(B,"UL",{class:!0});var oe=T(d);for(let ee=0;ee<h.length;ee+=1)h[ee].l(oe);oe.forEach(f),B.forEach(f),E.forEach(f),m=L(c),se(g.$$.fragment,c),this.h()},h(){o(i,"placeholder","Type here..."),o(i,"class","svelte-lwgkzf"),o(k,"stroke-linecap","round"),o(k,"stroke-linejoin","round"),o(k,"d","M12 5.5v13m6.5-6.5h-13"),o(w,"xmlns","http://www.w3.org/2000/svg"),o(w,"fill","none"),o(w,"viewBox","0 0 24 24"),o(w,"stroke-width","3"),o(w,"stroke","currentColor"),o(v,"class","svelte-lwgkzf"),o(r,"class","svelte-lwgkzf"),o(d,"class","svelte-lwgkzf"),o(l,"class","svelte-lwgkzf"),o(t,"class","svelte-lwgkzf")},m(c,E){P(c,t,E),le(e,t,null),p(t,s),p(t,l),p(l,r),p(r,i),X(i,n[0]),p(r,_),p(r,v),p(v,w),p(w,k),p(l,u),p(l,d);for(let B=0;B<h.length;B+=1)h[B]&&h[B].m(d,null);P(c,m,E),le(g,c,E),M=!0,I||(z=[S(i,"input",n[9]),S(r,"submit",n[4])],I=!0)},p(c,[E]){const B={};E&2&&(B.items=c[1].filter(me)),e.$set(B),E&1&&i.value!==c[0]&&X(i,c[0]),E&98&&(O=c[1],Ie(),h=Me(h,E,N,1,c,O,b,d,ye,_e,null,de),Ee());const j={};E&16390&&(j.$$scope={dirty:E,ctx:c}),!a&&E&8&&(a=!0,j.showModal=c[3],Te(()=>a=!1)),g.$set(j)},i(c){if(!M){W(e.$$.fragment,c);for(let E=0;E<O.length;E+=1)W(h[E]);W(g.$$.fragment,c),M=!0}},o(c){R(e.$$.fragment,c);for(let E=0;E<h.length;E+=1)R(h[E]);R(g.$$.fragment,c),M=!1},d(c){c&&f(t),ne(e);for(let E=0;E<h.length;E+=1)h[E].d();c&&f(m),ne(g,c),I=!1,$(z)}}}const me=n=>!n.isHidden;function Fe(n,t,e){let s="",l=[],r,i=!1;const _=b=>{if(b.preventDefault(),s.length>0){const m=Math.random()*255,g=Math.random()*255,a=Math.random()*255;e(1,l=[...l,{value:s.trim(),color:`${m},${g},${a}`,textColor:De(m,g,a)<.55?"255,255,255":"0,0,0",isHidden:!1}]),e(0,s="")}},v=b=>{e(1,l=l.filter((m,g)=>g!==b))},w=(b,m)=>{e(1,l=l.map((g,a)=>a===b?m:g))},k=b=>{e(2,r=b.detail.result),e(3,i=!0)},u=()=>{e(1,l[r].isHidden=!0,l),e(1,l),e(3,i=!1)};function d(){s=this.value,e(0,s)}function h(b){i=b,e(3,i)}return[s,l,r,i,_,v,w,k,u,d,h]}class Ye extends J{constructor(t){super(),Z(this,t,Fe,Ve,x,{})}}export{Ye as default};