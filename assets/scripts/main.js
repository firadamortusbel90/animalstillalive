/*!
 * paway v0.0.4
 * Copyright 2022 GodoFredo <hello@godofredo.ninja> (https://github.com/godofredoninja/Paway.git)
 * Licensed under GPLv3
 */!function i(a,r,o){function s(t,e){if(!r[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=r[t]={exports:{}},a[t][0].call(n.exports,function(e){return s(a[t][1][e]||e)},n,n.exports,i,a,r,o)}return r[t].exports}for(var l="function"==typeof require&&require,e=0;e<o.length;e++)s(o[e]);return s}({1:[function(e,t,n){var i="undefined"!=typeof window?window:{},a=function(i,f,r){"use strict";var h,m,e,B={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in m=i.lazySizesConfig||i.lazysizesConfig||{},B)e in m||(m[e]=B[e]);if(!f||!f.getElementsByClassName)return{init:function(){},cfg:m,noSupport:!0};function d(e,t){s(e,t)||e.setAttribute("class",(e[g]("class")||"").trim()+" "+t)}function u(e,t){(t=s(e,t))&&e.setAttribute("class",(e[g]("class")||"").replace(t," "))}function D(e,t){var n;!P&&(n=i.picturefill||m.pf)?(t&&t.src&&!e[g]("srcset")&&e.setAttribute("srcset",t.src),n({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)}var F,H,O,R,n,y=f.documentElement,P=i.HTMLPictureElement,a="addEventListener",g="getAttribute",t=i[a].bind(i),p=i.setTimeout,$=i.requestAnimationFrame||p,U=i.requestIdleCallback,I=/^picture$/i,G=["load","error","lazyincluded","_lazyloaded"],o={},X=Array.prototype.forEach,s=function(e,t){return o[t]||(o[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),o[t].test(e[g]("class")||"")&&o[t]},Y=function(t,n,e){var i=e?a:"removeEventListener";e&&Y(t,n),G.forEach(function(e){t[i](e,n)})},v=function(e,t,n,i,a){var r=f.createEvent("Event");return(n=n||{}).instance=h,r.initEvent(t,!i,!a),r.detail=n,e.dispatchEvent(r),r},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},J=function(e,t,n){for(n=n||e.offsetWidth;n<m.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},C=(R=[],n=O=[],Q._lsFlush=K,Q);function K(){var e=n;for(n=O.length?R:O,H=!(F=!0);e.length;)e.shift()();F=!1}function Q(e,t){F&&!t?e.apply(this,arguments):(n.push(e),H||(H=!0,(f.hidden?p:$)(K)))}function l(n,e){return e?function(){C(n)}:function(){var e=this,t=arguments;C(function(){n.apply(e,t)})}}function V(e){function t(){var e=r.now()-i;e<99?p(t,99-e):(U||a)(a)}var n,i,a=function(){n=null,e()};return function(){i=r.now(),n=n||p(t,99)}}le=/^img$/i,ce=/^iframe$/i,de="onscroll"in i&&!/(gle|ing)bot/.test(navigator.userAgent),q=-1,ue=function(e){return(M=null==M?"hidden"==z(f.body,"visibility"):M)||!("hidden"==z(e.parentNode,"visibility")&&"hidden"==z(e,"visibility"))},ie=ve,re=x=S=0,oe=m.throttleDelay,c=m.ricTimeout,se=U&&49<c?function(){U(ze,{timeout:c}),c!==m.ricTimeout&&(c=m.ricTimeout)}:l(function(){p(ze)},!0),fe=l(Ce),he=function(e){fe({target:e.target})},me=l(function(t,e,n,i,a){var r,o,s,l,c;(o=v(t,"lazybeforeunveil",e)).defaultPrevented||(i&&(n?d(t,m.autosizesClass):t.setAttribute("sizes",i)),n=t[g](m.srcsetAttr),i=t[g](m.srcAttr),a&&(r=(l=t.parentNode)&&I.test(l.nodeName||"")),s=e.firesLoad||"src"in t&&(n||i||r),o={target:t},d(t,m.loadingClass),s&&(clearTimeout(Z),Z=p(pe,2500),Y(t,he,!0)),r&&X.call(l.getElementsByTagName("source"),be),n?t.setAttribute("srcset",n):i&&!r&&(ce.test(t.nodeName)?(e=i,0==(c=(l=t).getAttribute("data-load-mode")||m.iframeLoadMode)?l.contentWindow.location.replace(e):1==c&&(l.src=e)):t.src=i),a&&(n||r)&&D(t,{src:i})),t._lazyRace&&delete t._lazyRace,u(t,m.lazyClass),C(function(){var e=t.complete&&1<t.naturalWidth;s&&!e||(e&&d(t,m.fastLoadedClass),Ce(o),t._lazyCache=!0,p(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&x--},!0)}),ye=V(function(){m.loadMode=3,T()});var b,E,Z,A,ee,te,ne,w,_,L,N,M,ie,ae,re,oe,c,se,le,ce,de,S,x,q,ue,T,fe,he,me,k,ye,ge={_:function(){ee=r.now(),h.elements=f.getElementsByClassName(m.lazyClass),b=f.getElementsByClassName(m.lazyClass+" "+m.preloadClass),t("scroll",T,!0),t("resize",T,!0),t("pageshow",function(e){var t;e.persisted&&(t=f.querySelectorAll("."+m.loadingClass)).length&&t.forEach&&$(function(){t.forEach(function(e){e.complete&&k(e)})})}),i.MutationObserver?new MutationObserver(T).observe(y,{childList:!0,subtree:!0,attributes:!0}):(y[a]("DOMNodeInserted",T,!0),y[a]("DOMAttrModified",T,!0),setInterval(T,999)),t("hashchange",T,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){f[a](e,T,!0)}),/d$|^c/.test(f.readyState)?W():(t("load",W),f[a]("DOMContentLoaded",T),p(W,2e4)),h.elements.length?(ve(),C._lsFlush()):T()},checkElems:T=function(e){var t;(e=!0===e)&&(c=33),ae||(ae=!0,(t=oe-(r.now()-re))<0&&(t=0),e||t<9?se():p(se,t))},unveil:k=function(e){var t,n,i,a;e._lazyRace||(!(a="auto"==(i=(n=le.test(e.nodeName))&&(e[g](m.sizesAttr)||e[g]("sizes"))))&&E||!n||!e[g]("src")&&!e.srcset||e.complete||s(e,m.errorClass)||!s(e,m.lazyClass))&&(t=v(e,"lazyunveilread").detail,a&&Le.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,x++,me(e,t,a,i,n))},_aLSL:Ee};function pe(e){x--,e&&!(x<0)&&e.target||(x=0)}function ve(){var e,t,n,i,a,r,o,s,l,c,d,u=h.elements;if((A=m.loadMode)&&x<8&&(e=u.length)){for(t=0,q++;t<e;t++)if(u[t]&&!u[t]._lazyRace)if(!de||h.prematureUnveil&&h.prematureUnveil(u[t]))k(u[t]);else if((o=u[t][g]("data-expand"))&&(a=+o)||(a=S),l||(l=!m.expand||m.expand<1?500<y.clientHeight&&500<y.clientWidth?500:370:m.expand,c=(h._defEx=l)*m.expFactor,d=m.hFac,M=null,S<c&&x<1&&2<q&&2<A&&!f.hidden?(S=c,q=0):S=1<A&&1<q&&x<6?l:0),s!==a&&(te=innerWidth+a*d,ne=innerHeight+a,r=-1*a,s=a),c=u[t].getBoundingClientRect(),(N=c.bottom)>=r&&(w=c.top)<=ne&&(L=c.right)>=r*d&&(_=c.left)<=te&&(N||L||_||w)&&(m.loadHidden||ue(u[t]))&&(E&&x<3&&!o&&(A<3||q<4)||function(e,t){var n,i=e,a=ue(e);for(w-=t,N+=t,_-=t,L+=t;a&&(i=i.offsetParent)&&i!=f.body&&i!=y;)(a=0<(z(i,"opacity")||1))&&"visible"!=z(i,"overflow")&&(n=i.getBoundingClientRect(),a=L>n.left&&_<n.right&&N>n.top-1&&w<n.bottom+1);return a}(u[t],a))){if(k(u[t]),i=!0,9<x)break}else!i&&E&&!n&&x<4&&q<4&&2<A&&(b[0]||m.preloadAfterLoad)&&(b[0]||!o&&(N||L||_||w||"auto"!=u[t][g](m.sizesAttr)))&&(n=b[0]||u[t]);n&&!i&&k(n)}}function ze(){ae=!1,re=r.now(),ie()}function Ce(e){var t=e.target;t._lazyCache?delete t._lazyCache:(pe(e),d(t,m.loadedClass),u(t,m.loadingClass),Y(t,he),v(t,"lazyloaded"))}function be(e){var t,n=e[g](m.srcsetAttr);(t=m.customMedia[e[g]("data-media")||e[g]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)}function Ee(){3==m.loadMode&&(m.loadMode=2),ye()}function W(){E||(r.now()-ee<999?p(W,999):(E=!0,m.loadMode=3,T(),t("scroll",Ee,!0)))}we=l(function(e,t,n,i){var a,r,o;if(e._lazysizesWidth=i,e.setAttribute("sizes",i+="px"),I.test(t.nodeName||""))for(r=0,o=(a=t.getElementsByTagName("source")).length;r<o;r++)a[r].setAttribute("sizes",i);n.detail.dataAttr||D(e,n.detail)});var Ae,we,_e,Le={_:function(){Ae=f.getElementsByClassName(m.autosizesClass),t("resize",_e)},checkElems:_e=V(function(){var e,t=Ae.length;if(t)for(e=0;e<t;e++)Ne(Ae[e])}),updateElem:Ne};function Ne(e,t,n){var i=e.parentNode;i&&(n=J(e,i,n),(t=v(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=t.detail.width)&&n!==e._lazysizesWidth&&we(e,i,t,n))}function j(){!j.i&&f.getElementsByClassName&&(j.i=!0,Le._(),ge._())}return p(function(){m.init&&j()}),h={cfg:m,autoSizer:Le,loader:ge,init:j,uP:D,aC:d,rC:u,hC:s,fire:v,gW:J,rAF:C}};a=a(i,i.document,Date),i.lazySizes=a,"object"==typeof t&&t.exports&&(t.exports=a)},{}],2:[function(e,t,n){"use strict";function i(e,t){var n=r.createElement("script");n.src=e,t&&n.addEventListener("load",t),r.body.appendChild(n)}var a,r,o;e("lazysizes"),a=window,(r=document).querySelectorAll(".js-menu-toggle").forEach(function(e){return e.addEventListener("click",function(e){e.preventDefault(),r.body.classList.toggle("has-sidenav")})}),r.querySelector(".post-body")&&((e=r.querySelectorAll(['iframe[src*="player.vimeo.com"]','iframe[src*="dailymotion.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]'].join(","))).length&&e.forEach(function(e){var t=r.createElement("div");t.className="video-responsive",e.parentNode.insertBefore(t,e),t.appendChild(e)}),r.querySelectorAll(".post-body img").forEach(function(e){var t;e.closest("a")||(e.classList.add("paway-light-gallery"),e.setAttribute("data-src",e.src),null!==(t=e.nextSibling)&&"figcaption"===t.nodeName.toLowerCase()&&e.setAttribute("data-sub-html",t.innerHTML))}),r.querySelectorAll(".paway-light-gallery").length&&(e="https://unpkg.com/lightgallery.js/dist/css/lightgallery.min.css",(o=r.createElement("link")).rel="stylesheet",o.href=e,r.head.appendChild(o),i("https://cdn.jsdelivr.net/npm/lightgallery.js@1.1.3/dist/js/lightgallery.min.js",function(){i("https://unpkg.com/lg-zoom.js@1.0.1/dist/lg-zoom.min.js"),a.lightGallery(r.querySelector(".post-body"),{selector:".paway-light-gallery"})})),r.querySelectorAll(".js-share").forEach(function(e){return e.addEventListener("click",function(e){var t=void 0!==a.screenLeft?a.screenLeft:a.screenX,n=void 0!==a.screenTop?a.screenTop:a.screenY,t=(a.innerWidth||r.documentElement.clientWidth||a.screen.width)/2-320+t,n=(a.innerHeight||r.documentElement.clientHeight||a.screen.height)/2-200+n,n=a.open(e.currentTarget.href,"share-window","scrollbars=yes, width=".concat(640,", height=").concat(400,", top=").concat(n,", left=").concat(t));a.focus&&n.focus(),e.preventDefault()})}))},{lazysizes:1}]},{},[2]);