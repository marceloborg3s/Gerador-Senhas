(()=>{"use strict";var r,n,e,t,o,a,i,c,s,u,A,p,d,f,l,m,h,C,g,E,v,b,y,x,B,k,w={122:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(537),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]),i.push([r.id,':root {\r\n  --primary-color: rgb(15, 106,134);\r\n  --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n\r\nbody{\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--primary-color);\r\n  font-family: \'Open sans\', sans-serif;\r\n  font-size: 1.3em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 50px auto;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n  font-size: 24px;\r\n  height: 50px;\r\n  padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n  outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  margin-top: 25px;\r\n}\r\n\r\nform button:hover {\r\n  background: var(--primary-color-darker);\r\n}\r\n\r\n.senha-gerada {\r\n  font-size: 2em;\r\n  color: var(--primary-color);\r\n  margin: 40px 0;\r\n}\r\n\r\ninput[type="number"] {\r\n  width: 50px;\r\n}\r\n\r\ninput[type= "checkbox"] {\r\n  width: 14px;\r\n  height: 14px;\r\n}\r\n\r\nbutton {\r\n  display:block;\r\n  margin: 40px 0;\r\n  font-size: 1em;\r\n}',"",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,cAAc;EACd,2BAA2B;EAC3B,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,cAAc;EACd,cAAc;AAChB",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");\r\n:root {\r\n  --primary-color: rgb(15, 106,134);\r\n  --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n\r\nbody{\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--primary-color);\r\n  font-family: \'Open sans\', sans-serif;\r\n  font-size: 1.3em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 50px auto;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n  font-size: 24px;\r\n  height: 50px;\r\n  padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n  outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  margin-top: 25px;\r\n}\r\n\r\nform button:hover {\r\n  background: var(--primary-color-darker);\r\n}\r\n\r\n.senha-gerada {\r\n  font-size: 2em;\r\n  color: var(--primary-color);\r\n  margin: 40px 0;\r\n}\r\n\r\ninput[type="number"] {\r\n  width: 50px;\r\n}\r\n\r\ninput[type= "checkbox"] {\r\n  width: 14px;\r\n  height: 14px;\r\n}\r\n\r\nbutton {\r\n  display:block;\r\n  margin: 40px 0;\r\n  font-size: 1em;\r\n}'],sourceRoot:""}]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<r.length;u++){var A=[].concat(r[u]);t&&i[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),e&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=e):A[2]=e),o&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=o):A[4]="".concat(o)),n.push(A))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],u=t.base?s[0]+t.base:s[0],A=a[u]||0,p="".concat(u," ").concat(A);a[u]=A+1;var d=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var l=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:l,references:1})}i.push(p)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),u=0;u<a.length;u++){var A=e(a[u]);0===n[A].references&&(n[A].updater(),n.splice(A,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},S={};function z(r){var n=S[r];if(void 0!==n)return n.exports;var e=S[r]={id:r,exports:{}};return w[r](e,e.exports,z),e.exports}z.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return z.d(n,{a:n}),n},z.d=(r,n)=>{for(var e in n)z.o(n,e)&&!z.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},z.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),z.nc=void 0,r=function(r,n){return Math.floor(Math.random()*(n-r)+r)},n=function(){return String.fromCharCode(r(65,91))},e=function(){return String.fromCharCode(r(97,123))},t=function(){return String.fromCharCode(r(48,58))},o=function(){return",.;~^@#$%&*()_+-=[]{}<>?!"[r(0,25)]},a=document.querySelector(".senha-gerada"),i=document.querySelector(".qtd-caracteres"),c=document.querySelector(".chk-maiusculas"),s=document.querySelector(".chk-minusculas"),u=document.querySelector(".chk-numeros"),A=document.querySelector(".chk-simbolos"),p=document.querySelector(".gerar-senha"),d=z(379),f=z.n(d),l=z(795),m=z.n(l),h=z(569),C=z.n(h),g=z(565),E=z.n(g),v=z(216),b=z.n(v),y=z(589),x=z.n(y),B=z(122),(k={}).styleTagTransform=x(),k.setAttributes=E(),k.insert=C().bind(null,"head"),k.domAPI=m(),k.insertStyleElement=b(),f()(B.Z,k),B.Z&&B.Z.locals&&B.Z.locals,p.addEventListener("click",(function(){a.innerHTML=function(r,a,i,c,s){var u=[];r=Number(r);var A=[];a&&A.push(n),i&&A.push(e),c&&A.push(t),c&&A.push(t),c&&A.push(t),s&&A.push(o);for(var p=A.map((function(r){return{sort:Math.random(),value:r}})).sort((function(r,n){return r.sort-n.sort})).map((function(r){return r.value})),d=0;d<r;d++)u.push(p[d%p.length]());return u.join("")}(i.value,c.checked,s.checked,u.checked,A.checked)||"Nada selecionado"}))})();
//# sourceMappingURL=bundle.js.map