!function t(e,r,i){function n(a,o){if(!r[a]){if(!e[a]){var u="function"==typeof require&&require;if(!o&&u)return u(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var h=r[a]={exports:{}};e[a][0].call(h.exports,(function(t){return n(e[a][1][t]||t)}),h,h.exports,t,e,r,i)}return r[a].exports}for(var s="function"==typeof require&&require,a=0;a<i.length;a++)n(i[a]);return n}({1:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var a,o,u,h,l,f,_,c,p,d,m,g,v,y,T,w,b,x,k,C,S,D,A,P,M,R,E,O,z={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},I={duration:.5,overwrite:!1,delay:0},F=1e-8,L=2*Math.PI,B=L/4,U=0,V=Math.sqrt,q=Math.cos,$=Math.sin,j=function(t){return"string"==typeof t},N=function(t){return"function"==typeof t},Q=function(t){return"number"==typeof t},G=function(t){return void 0===t},W=function(t){return"object"===(void 0===t?"undefined":i(t))},Y=function(t){return!1!==t},H=function(){return"undefined"!=typeof window},J=function(t){return N(t)||j(t)},K="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},X=Array.isArray,Z=/(?:-?\.?\d|\.)+/gi,tt=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,et=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,rt=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,it=/[+-]=-?[.\d]+/,nt=/[^,'"\[\]\s]+/gi,st=/[\d.+\-=]+(?:e[-+]\d*)*/i,at={},ot={},ut=function(t){return(ot=Ot(t,at))&&br},ht=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},lt=function(t,e){return!e&&console.warn(t)},ft=function(t,e){return t&&(at[t]=e)&&ot&&(ot[t]=e)||at},_t=function(){return 0},ct={},pt=[],dt={},mt={},gt={},vt=30,yt=[],Tt="",wt=function(t){var e,r,i=t[0];if(W(i)||N(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=yt.length;r--&&!yt[r].targetTest(i););e=yt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Ye(t[r],e)))||t.splice(r,1);return t},bt=function(t){return t._gsap||wt(ue(t))[0]._gsap},xt=function(t,e,r){return(r=t[e])&&N(r)?t[e]():G(r)&&t.getAttribute&&t.getAttribute(e)||r},kt=function(t,e){return(t=t.split(",")).forEach(e)||t},Ct=function(t){return Math.round(1e5*t)/1e5||0},St=function(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r},Dt=function(){var t,e,r=pt.length,i=pt.slice(0);for(dt={},pt.length=0,t=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},At=function(t,e,r,i){pt.length&&Dt(),t.render(e,r,i),pt.length&&Dt()},Pt=function(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(nt).length<2?e:j(t)?t.trim():t},Mt=function(t){return t},Rt=function(t,e){for(var r in e)r in t||(t[r]=e[r]);return t},Et=function(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])},Ot=function(t,e){for(var r in e)t[r]=e[r];return t},zt=function t(e,r){for(var i in r)"__proto__"!==i&&"constructor"!==i&&"prototype"!==i&&(e[i]=W(r[i])?t(e[i]||(e[i]={}),r[i]):r[i]);return e},It=function(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i},Ft=function(t){var e=t.parent||o,r=t.keyframes?Et:Rt;if(Y(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t},Lt=function(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,s=e._next;n?n._next=s:t[r]===e&&(t[r]=s),s?s._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null},Bt=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Ut=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t},Vt=function t(e){return!e||e._ts&&t(e.parent)},qt=function(t){return t._repeat?$t(t._tTime,t=t.duration()+t._rDelay)*t:0},$t=function(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},jt=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Nt=function(t){return t._end=Ct(t._start+(t._tDur/Math.abs(t._ts||t._rts||F)||0))},Qt=function(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=Ct(r._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Nt(t),r._dirty||Ut(r,t)),t},Gt=function(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=jt(t.rawTime(),e),(!e._dur||ie(0,e.totalDuration(),r)-e._tTime>F)&&e.render(r,!0)),Ut(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;t._zTime=-F}},Wt=function(t,e,r,i){return e.parent&&Bt(e),e._start=Ct((Q(r)?r:r||t!==o?te(t,r,e):t._time)+e._delay),e._end=Ct(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var s,a=t[i];if(n)for(s=e[n];a&&a[n]>s;)a=a._prev;a?(e._next=a._next,a._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),Jt(e)||(t._recent=e),i||Gt(t,e),t},Yt=function(t,e){return(at.ScrollTrigger||ht("scrollTrigger",e))&&at.ScrollTrigger.create(e,t)},Ht=function(t,e,r,i){return tr(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&_!==Ie.frame?(pt.push(t),t._lazy=[e,i],1):void 0:1},Jt=function(t){var e=t.data;return"isFromStart"===e||"isStart"===e},Kt=function(t,e,r,i){var n=t._repeat,s=Ct(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=s/t._dur),t._dur=s,t._tDur=n?n<0?1e10:Ct(s*(n+1)+t._rDelay*n):s,a&&!i?Qt(t,t._tTime=t._tDur*a):t.parent&&Nt(t),r||Ut(t.parent,t),t},Xt=function(t){return t instanceof Je?Ut(t):Kt(t,t._dur)},Zt={_start:0,endTime:_t,totalDuration:_t},te=function t(e,r,i){var n,s,a,o=e.labels,u=e._recent||Zt,h=e.duration()>=1e8?u.endTime(!1):e._dur;return j(r)&&(isNaN(r)||r in o)?(s=r.charAt(0),a="%"===r.substr(-1),n=r.indexOf("="),"<"===s||">"===s?(n>=0&&(r=r.replace(/=/,"")),("<"===s?u._start:u.endTime(u._repeat>=0))+(parseFloat(r.substr(1))||0)*(a?(n<0?u:i).totalDuration()/100:1)):n<0?(r in o||(o[r]=h),o[r]):(s=parseFloat(r.charAt(n-1)+r.substr(n+1)),a&&i&&(s=s/100*(X(i)?i[0]:i).totalDuration()),n>1?t(e,r.substr(0,n-1),i)+s:h+s)):null==r?h:+r},ee=function(t,e,r){var i,n,s=Q(e[1]),a=(s?2:1)+(t<2?0:1),o=e[a];if(s&&(o.duration=e[1]),o.parent=r,t){for(i=o,n=r;n&&!("immediateRender"in i);)i=n.vars.defaults||{},n=Y(n.vars.inherit)&&n.parent;o.immediateRender=Y(i.immediateRender),t<2?o.runBackwards=1:o.startAt=e[a-1]}return new nr(e[0],o,e[a+1])},re=function(t,e){return t||0===t?e(t):e},ie=function(t,e,r){return r<t?t:r>e?e:r},ne=function(t){if("string"!=typeof t)return"";var e=st.exec(t);return e?t.substr(e.index+e[0].length):""},se=function(t,e,r){return re(r,(function(r){return ie(t,e,r)}))},ae=[].slice,oe=function(t,e){return t&&W(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&W(t[0]))&&!t.nodeType&&t!==u},ue=function(t,e,r){return!j(t)||r||!h&&Fe()?X(t)?function(t,e,r){return void 0===r&&(r=[]),t.forEach((function(t){var i;return j(t)&&!e||oe(t,1)?(i=r).push.apply(i,ue(t)):r.push(t)}))||r}(t,r):oe(t)?ae.call(t,0):t?[t]:[]:ae.call((e||l).querySelectorAll(t),0)},he=function(t){return t=ue(t)[0]||lt("Invalid scope")||{},function(e){var r=t.current||t.nativeElement||t;return ue(e,r.querySelectorAll?r:r===t?lt("Invalid scope")||l.createElement("div"):t)}},le=function(t){return t.sort((function(){return.5-Math.random()}))},fe=function(t){if(N(t))return t;var e=W(t)?t:{each:t},r=je(e.ease),i=e.from||0,n=parseFloat(e.base)||0,s={},a=i>0&&i<1,o=isNaN(i)||a,u=e.axis,h=i,l=i;return j(i)?h=l={center:.5,edges:.5,end:1}[i]||0:!a&&o&&(h=i[0],l=i[1]),function(t,a,f){var _,c,p,d,m,g,v,y,T,w=(f||e).length,b=s[w];if(!b){if(!(T="auto"===e.grid?0:(e.grid||[1,1e8])[1])){for(v=-1e8;v<(v=f[T++].getBoundingClientRect().left)&&T<w;);T--}for(b=s[w]=[],_=o?Math.min(T,w)*h-.5:i%T,c=o?w*l/T-.5:i/T|0,v=0,y=1e8,g=0;g<w;g++)p=g%T-_,d=c-(g/T|0),b[g]=m=u?Math.abs("y"===u?d:p):V(p*p+d*d),m>v&&(v=m),m<y&&(y=m);"random"===i&&le(b),b.max=v-y,b.min=y,b.v=w=(parseFloat(e.amount)||parseFloat(e.each)*(T>w?w-1:u?"y"===u?w/T:T:Math.max(T,w/T))||0)*("edges"===i?-1:1),b.b=w<0?n-w:n,b.u=ne(e.amount||e.each)||0,r=r&&w<0?qe(r):r}return w=(b[t]-b.min)/b.max||0,Ct(b.b+(r?r(w):w)*b.v)+b.u}},_e=function(t){var e=t<1?Math.pow(10,(t+"").length-2):1;return function(r){var i=Math.round(parseFloat(r)/t)*t*e;return(i-i%1)/e+(Q(r)?0:ne(r))}},ce=function(t,e){var r,i,n=X(t);return!n&&W(t)&&(r=n=t.radius||1e8,t.values?(t=ue(t.values),(i=!Q(t[0]))&&(r*=r)):t=_e(t.increment)),re(e,n?N(t)?function(e){return i=t(e),Math.abs(i-e)<=r?i:e}:function(e){for(var n,s,a=parseFloat(i?e.x:e),o=parseFloat(i?e.y:0),u=1e8,h=0,l=t.length;l--;)(n=i?(n=t[l].x-a)*n+(s=t[l].y-o)*s:Math.abs(t[l]-a))<u&&(u=n,h=l);return h=!r||u<=r?t[h]:e,i||h===e||Q(e)?h:h+ne(e)}:_e(t))},pe=function(t,e,r,i){return re(X(t)?!e:!0===r?!!(r=0):!i,(function(){return X(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i}))},de=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce((function(t,e){return e(t)}),t)}},me=function(t,e){return function(r){return t(parseFloat(r))+(e||ne(r))}},ge=function(t,e,r){return be(t,e,0,1,r)},ve=function(t,e,r){return re(r,(function(r){return t[~~e(r)]}))},ye=function t(e,r,i){var n=r-e;return X(e)?ve(e,t(0,e.length),r):re(i,(function(t){return(n+(t-e)%n)%n+e}))},Te=function t(e,r,i){var n=r-e,s=2*n;return X(e)?ve(e,t(0,e.length-1),r):re(i,(function(t){return e+((t=(s+(t-e)%s)%s||0)>n?s-t:t)}))},we=function(t){for(var e,r,i,n,s=0,a="";~(e=t.indexOf("random(",s));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?nt:Z),a+=t.substr(s,e-s)+pe(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),s=i+1;return a+t.substr(s,t.length-s)},be=function(t,e,r,i,n){var s=e-t,a=i-r;return re(n,(function(e){return r+((e-t)/s*a||0)}))},xe=function t(e,r,i,n){var s=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!s){var a,o,u,h,l,f=j(e),_={};if(!0===i&&(n=1)&&(i=null),f)e={p:e},r={p:r};else if(X(e)&&!X(r)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(t(e[o-1],e[o]));h--,s=function(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},i=r}else n||(e=Ot(X(e)?[]:{},e));if(!u){for(a in r)Xe.call(_,e,a,"get",r[a]);s=function(t){return cr(t,_)||(f?e.p:e)}}}return re(i,s)},ke=function(t,e,r){var i,n,s,a=t.labels,o=1e8;for(i in a)(n=a[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(s=i,o=n);return s},Ce=function(t,e,r){var i,n,s=t.vars,a=s[e];if(a)return i=s[e+"Params"],n=s.callbackScope||t,r&&pt.length&&Dt(),i?a.apply(n,i):a.call(n)},Se=function(t){return Bt(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Ce(t,"onInterrupt"),t},De={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},Ae=function(t,e,r){return 255*(6*(t=t<0?t+1:t>1?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)+.5|0},Pe=function(t,e,r){var i,n,s,a,o,u,h,l,f,_,c=t?Q(t)?[t>>16,t>>8&255,255&t]:0:De.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),De[t])c=De[t];else if("#"===t.charAt(0)){if(t.length<6&&(i=t.charAt(1),n=t.charAt(2),s=t.charAt(3),t="#"+i+i+n+n+s+s+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(c=parseInt(t.substr(1,6),16))>>16,c>>8&255,255&c,parseInt(t.substr(7),16)/255];c=[(t=parseInt(t.substr(1),16))>>16,t>>8&255,255&t]}else if("hsl"===t.substr(0,3))if(c=_=t.match(Z),e){if(~t.indexOf("="))return c=t.match(tt),r&&c.length<4&&(c[3]=1),c}else a=+c[0]%360/360,o=+c[1]/100,i=2*(u=+c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),c.length>3&&(c[3]*=1),c[0]=Ae(a+1/3,i,n),c[1]=Ae(a,i,n),c[2]=Ae(a-1/3,i,n);else c=t.match(Z)||De.transparent;c=c.map(Number)}return e&&!_&&(i=c[0]/255,n=c[1]/255,s=c[2]/255,u=((h=Math.max(i,n,s))+(l=Math.min(i,n,s)))/2,h===l?a=o=0:(f=h-l,o=u>.5?f/(2-h-l):f/(h+l),a=h===i?(n-s)/f+(n<s?6:0):h===n?(s-i)/f+2:(i-n)/f+4,a*=60),c[0]=~~(a+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c},Me=function(t){var e=[],r=[],i=-1;return t.split(Ee).forEach((function(t){var n=t.match(et)||[];e.push.apply(e,n),r.push(i+=n.length+1)})),e.c=r,e},Re=function(t,e,r){var i,n,s,a,o="",u=(t+o).match(Ee),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map((function(t){return(t=Pe(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"})),r&&(s=Me(t),(i=r.c).join(o)!==s.c.join(o)))for(a=(n=t.replace(Ee,"1").split(et)).length-1;l<a;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(s.length?s:u.length?u:r).shift());if(!n)for(a=(n=t.split(Ee)).length-1;l<a;l++)o+=n[l]+u[l];return o+n[a]},Ee=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in De)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Oe=/hsl[a]?\(/,ze=function(t){var e,r=t.join(" ");if(Ee.lastIndex=0,Ee.test(r))return e=Oe.test(r),t[1]=Re(t[1],e),t[0]=Re(t[0],e,Me(t[1])),!0},Ie=(w=Date.now,b=500,x=33,k=w(),C=k,D=S=1e3/240,P=function t(e){var r,i,n,s,a=w()-C,o=!0===e;if(a>b&&(k+=a-x),((r=(n=(C+=a)-k)-D)>0||o)&&(s=++v.frame,y=n-1e3*v.time,v.time=n/=1e3,D+=r+(r>=S?4:S-r),i=1),o||(d=m(t)),i)for(T=0;T<A.length;T++)A[T](n,y,s,e)},v={time:0,frame:0,tick:function(){P(!0)},deltaRatio:function(t){return y/(1e3/(t||60))},wake:function(){f&&(!h&&H()&&(u=h=window,l=u.document||{},at.gsap=br,(u.gsapVersions||(u.gsapVersions=[])).push(br.version),ut(ot||u.GreenSockGlobals||!u.gsap&&u||{}),g=u.requestAnimationFrame),d&&v.sleep(),m=g||function(t){return setTimeout(t,D-1e3*v.time+1|0)},p=1,P(2))},sleep:function(){(g?u.cancelAnimationFrame:clearTimeout)(d),p=0,m=_t},lagSmoothing:function(t,e){b=t||1/F,x=Math.min(e,b,0)},fps:function(t){S=1e3/(t||240),D=1e3*v.time+S},add:function(t){A.indexOf(t)<0&&A.push(t),Fe()},remove:function(t){var e;~(e=A.indexOf(t))&&A.splice(e,1)&&T>=e&&T--},_listeners:A=[]}),Fe=function(){return!p&&Ie.wake()},Le={},Be=/^[\d.\-M][\d.\-,\s]/,Ue=/["']/g,Ve=function(t){for(var e,r,i,n={},s=t.substr(1,t.length-3).split(":"),a=s[0],o=1,u=s.length;o<u;o++)r=s[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[a]=isNaN(i)?i.replace(Ue,"").trim():+i,a=r.substr(e+1).trim();return n},qe=function(t){return function(e){return 1-t(1-e)}},$e=function t(e,r){for(var i,n=e._first;n;)n instanceof Je?t(n,r):!n.vars.yoyoEase||n._yoyo&&n._repeat||n._yoyo===r||(n.timeline?t(n.timeline,r):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=r)),n=n._next},je=function(t,e){return t&&(N(t)?t:Le[t]||function(t){var e,r,i,n,s=(t+"").split("("),a=Le[s[0]];return a&&s.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[Ve(s[1])]:(e=t,r=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",r),e.substring(r,~n&&n<i?e.indexOf(")",i+1):i)).split(",").map(Pt)):Le._CE&&Be.test(t)?Le._CE("",t):a}(t))||e},Ne=function(t,e,r,i){void 0===r&&(r=function(t){return 1-e(1-t)}),void 0===i&&(i=function(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,s={easeIn:e,easeOut:r,easeInOut:i};return kt(t,(function(t){for(var e in Le[t]=at[t]=s,Le[n=t.toLowerCase()]=r,s)Le[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Le[t+"."+e]=s[e]})),s},Qe=function(t){return function(e){return e<.5?(1-t(1-2*e))/2:.5+t(2*(e-.5))/2}},Ge=function t(e,r,i){var n=r>=1?r:1,s=(i||(e?.3:.45))/(r<1?r:1),a=s/L*(Math.asin(1/n)||0),o=function(t){return 1===t?1:n*Math.pow(2,-10*t)*$((t-a)*s)+1},u="out"===e?o:"in"===e?function(t){return 1-o(1-t)}:Qe(o);return s=L/s,u.config=function(r,i){return t(e,r,i)},u},We=function t(e,r){void 0===r&&(r=1.70158);var i=function(t){return t?--t*t*((r+1)*t+r)+1:0},n="out"===e?i:"in"===e?function(t){return 1-i(1-t)}:Qe(i);return n.config=function(r){return t(e,r)},n};kt("Linear,Quad,Cubic,Quart,Quint,Strong",(function(t,e){var r=e<5?e+1:e;Ne(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},(function(t){return 1-Math.pow(1-t,r)}),(function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2}))})),Le.Linear.easeNone=Le.none=Le.Linear.easeIn,Ne("Elastic",Ge("in"),Ge("out"),Ge()),M=7.5625,E=1/(R=2.75),Ne("Bounce",(function(t){return 1-O(1-t)}),O=function(t){return t<E?M*t*t:t<.7272727272727273?M*Math.pow(t-1.5/R,2)+.75:t<.9090909090909092?M*(t-=2.25/R)*t+.9375:M*Math.pow(t-2.625/R,2)+.984375}),Ne("Expo",(function(t){return t?Math.pow(2,10*(t-1)):0})),Ne("Circ",(function(t){return-(V(1-t*t)-1)})),Ne("Sine",(function(t){return 1===t?1:1-q(t*B)})),Ne("Back",We("in"),We("out"),We()),Le.SteppedEase=Le.steps=at.SteppedEase={config:function(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0,s=1-F;return function(t){return((i*ie(0,s,t)|0)+n)*r}}},I.ease=Le["quad.out"],kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",(function(t){return Tt+=t+","+t+"Params,"}));var Ye=r.GSCache=function(t,e){this.id=U++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:xt,this.set=e?e.getSetter:hr},He=r.Animation=function(){function t(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Kt(this,+t.duration,1,1),this.data=t.data,p||Ie.wake()}var e=t.prototype;return e.delay=function(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,Kt(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,e){if(Fe(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Qt(this,t),!r._dp||r.parent||Gt(r,this);r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&Wt(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===F||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),At(this,t,e)),this},e.time=function(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+qt(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},e.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+qt(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?$t(this._tTime,r)+1:1},e.timeScale=function(t){if(!arguments.length)return this._rts===-F?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?jt(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-F?0:this._rts,function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(ie(-this._delay,this._tDur,e),!0))},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fe(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==F&&(this._tTime-=F)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return e&&(e._sort||!this.parent)&&Wt(e,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(Y(t)?this.totalDuration():this.duration())/Math.abs(this._ts)},e.rawTime=function(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jt(e.rawTime(t),this):this._tTime:this._tTime},e.globalTime=function(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,Xt(this)):-2===this._repeat?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var e=this._time;return this._rDelay=t,Xt(this),e?this.time(e):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,e){return this.totalTime(te(this,t),Y(e))},e.restart=function(t,e){return this.play().totalTime(t?-this._delay:0,Y(e))},e.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},e.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},e.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-F:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-F,this},e.isActive=function(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-F))},e.eventCallback=function(t,e,r){var i=this.vars;return arguments.length>1?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},e.then=function(t){var e=this;return new Promise((function(r){var i=N(t)?t:Mt,n=function(){var t=e.then;e.then=null,N(i)&&(i=i(e))&&(i.then||i===e)&&(e.then=t),r(i),e.then=t};e._initted&&1===e.totalProgress()&&e._ts>=0||!e._tTime&&e._ts<0?n():e._prom=n}))},e.kill=function(){Se(this)},t}();Rt(He.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-F,_prom:0,_ps:!1,_rts:1});var Je=r.Timeline=function(t){function e(e,r){var i;return void 0===e&&(e={}),(i=t.call(this,e)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=Y(e.sortChildren),o&&Wt(e.parent||o,n(i),r),e.reversed&&i.reverse(),e.paused&&i.paused(!0),e.scrollTrigger&&Yt(n(i),e.scrollTrigger),i}s(e,t);var r=e.prototype;return r.to=function(t,e,r){return ee(0,arguments,this),this},r.from=function(t,e,r){return ee(1,arguments,this),this},r.fromTo=function(t,e,r,i){return ee(2,arguments,this),this},r.set=function(t,e,r){return e.duration=0,e.parent=this,Ft(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new nr(t,e,te(this,r),1),this},r.call=function(t,e,r){return Wt(this,nr.delayedCall(0,t,e),r)},r.staggerTo=function(t,e,r,i,n,s,a){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=s,r.onCompleteParams=a,r.parent=this,new nr(t,r,te(this,n)),this},r.staggerFrom=function(t,e,r,i,n,s,a){return r.runBackwards=1,Ft(r).immediateRender=Y(r.immediateRender),this.staggerTo(t,e,r,i,n,s,a)},r.staggerFromTo=function(t,e,r,i,n,s,a,o){return i.startAt=r,Ft(i).immediateRender=Y(i.immediateRender),this.staggerTo(t,e,i,n,s,a,o)},r.render=function(t,e,r){var i,n,s,a,u,h,l,f,_,c,p,d,m=this._time,g=this._dirty?this.totalDuration():this._tDur,v=this._dur,y=this!==o&&t>g-F&&t>=0?g:t<F?0:t,T=this._zTime<0!=t<0&&(this._initted||!v);if(y!==this._tTime||r||T){if(m!==this._time&&v&&(y+=this._time-m,t+=this._time-m),i=y,_=this._start,h=!(f=this._ts),T&&(v||(m=this._zTime),(t||!e)&&(this._zTime=t)),this._repeat){if(p=this._yoyo,u=v+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*u+t,e,r);if(i=Ct(y%u),y===g?(a=this._repeat,i=v):((a=~~(y/u))&&a===y/u&&(i=v,a--),i>v&&(i=v)),c=$t(this._tTime,u),!m&&this._tTime&&c!==a&&(c=a),p&&1&a&&(i=v-i,d=1),a!==c&&!this._lock){var w=p&&1&c,b=w===(p&&1&a);if(a<c&&(w=!w),m=w?0:v,this._lock=1,this.render(m||(d?0:Ct(a*u)),e,!v)._lock=0,this._tTime=y,!e&&this.parent&&Ce(this,"onRepeat"),this.vars.repeatRefresh&&!d&&(this.invalidate()._lock=1),m&&m!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(v=this._dur,g=this._tDur,b&&(this._lock=2,m=w?v:-1e-4,this.render(m,!0),this.vars.repeatRefresh&&!d&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;$e(this,d)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(l=function(t,e,r){var i;if(r>e)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,Ct(m),Ct(i)))&&(y-=i-(i=l._start)),this._tTime=y,this._time=i,this._act=!f,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,m=0),!m&&i&&!e&&(Ce(this,"onStart"),this._tTime!==y))return this;if(i>=m&&t>=0)for(n=this._first;n;){if(s=n._next,(n._act||i>=n._start)&&n._ts&&l!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(n._ts>0?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!h){l=0,s&&(y+=this._zTime=-F);break}}n=s}else{n=this._last;for(var x=t<0?t:i;n;){if(s=n._prev,(n._act||x<=n._end)&&n._ts&&l!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(n._ts>0?(x-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(x-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!h){l=0,s&&(y+=this._zTime=x?-F:F);break}}n=s}}if(l&&!e&&(this.pause(),l.render(i>=m?0:-F)._zTime=i>=m?1:-1,this._ts))return this._start=_,Nt(this),this.render(t,e,r);this._onUpdate&&!e&&Ce(this,"onUpdate",!0),(y===g&&g>=this.totalDuration()||!y&&m)&&(_!==this._start&&Math.abs(f)===Math.abs(this._ts)||this._lock||((t||!v)&&(y===g&&this._ts>0||!y&&this._ts<0)&&Bt(this,1),e||t<0&&!m||!y&&!m&&g||(Ce(this,y===g&&t>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(y<g&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(t,e){var r=this;if(Q(e)||(e=te(this,e,t)),!(t instanceof He)){if(X(t))return t.forEach((function(t){return r.add(t,e)})),this;if(j(t))return this.addLabel(t,e);if(!N(t))return this;t=nr.delayedCall(0,t)}return this!==t?Wt(this,t,e):this},r.getChildren=function(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-1e8);for(var n=[],s=this._first;s;)s._start>=i&&(s instanceof nr?e&&n.push(s):(r&&n.push(s),t&&n.push.apply(n,s.getChildren(!0,e,r)))),s=s._next;return n},r.getById=function(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},r.remove=function(t){return j(t)?this.removeLabel(t):N(t)?this.killTweensOf(t):(Lt(this,t),t===this._recent&&(this._recent=this._last),Ut(this))},r.totalTime=function(e,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(Ie.time-(this._ts>0?e/this._ts:(this.totalDuration()-e)/-this._ts))),t.prototype.totalTime.call(this,e,r),this._forcing=0,this):this._tTime},r.addLabel=function(t,e){return this.labels[t]=te(this,e),this},r.removeLabel=function(t){return delete this.labels[t],this},r.addPause=function(t,e,r){var i=nr.delayedCall(0,e||_t,r);return i.data="isPause",this._hasPause=1,Wt(this,i,te(this,t))},r.removePause=function(t){var e=this._first;for(t=te(this,t);e;)e._start===t&&"isPause"===e.data&&Bt(e),e=e._next},r.killTweensOf=function(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Ke!==i[n]&&i[n].kill(t,e);return this},r.getTweensOf=function(t,e){for(var r,i=[],n=ue(t),s=this._first,a=Q(e);s;)s instanceof nr?St(s._targets,n)&&(a?(!Ke||s._initted&&s._ts)&&s.globalTime(0)<=e&&s.globalTime(s.totalDuration())>e:!e||s.isActive())&&i.push(s):(r=s.getTweensOf(n,e)).length&&i.push.apply(i,r),s=s._next;return i},r.tweenTo=function(t,e){e=e||{};var r,i=this,n=te(i,t),s=e,a=s.startAt,o=s.onStart,u=s.onStartParams,h=s.immediateRender,l=nr.to(i,Rt({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||F,onStart:function(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());l._dur!==t&&Kt(l,t,0,1).render(l._time,!0,!0),r=1}o&&o.apply(l,u||[])}},e));return h?l.render(0):l},r.tweenFromTo=function(t,e,r){return this.tweenTo(e,Rt({startAt:{time:te(this,t)}},r))},r.recent=function(){return this._recent},r.nextLabel=function(t){return void 0===t&&(t=this._time),ke(this,te(this,t))},r.previousLabel=function(t){return void 0===t&&(t=this._time),ke(this,te(this,t),1)},r.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+F)},r.shiftChildren=function(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,s=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in s)s[i]>=r&&(s[i]+=t);return Ut(this)},r.invalidate=function(){var e=this._first;for(this._lock=0;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},r.clear=function(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Ut(this)},r.totalDuration=function(t){var e,r,i,n=0,s=this._last,a=1e8;if(arguments.length)return this.timeScale((this._repeat<0?this.duration():this.totalDuration())/(this.reversed()?-t:t));if(this._dirty){for(i=this.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),(r=s._start)>a&&this._sort&&s._ts&&!this._lock?(this._lock=1,Wt(this,s,r-s._delay,1)._lock=0):a=r,r<0&&s._ts&&(n-=r,(!i&&!this._dp||i&&i.smoothChildTiming)&&(this._start+=r/this._ts,this._time-=r,this._tTime-=r),this.shiftChildren(-r,!1,-1/0),a=0),s._end>n&&s._ts&&(n=s._end),s=e;Kt(this,this===o&&this._time>n?this._time:n,1,1),this._dirty=0}return this._tDur},e.updateRoot=function(t){if(o._ts&&(At(o,jt(t,o)),_=Ie.frame),Ie.frame>=vt){vt+=z.autoSleep||120;var e=o._first;if((!e||!e._ts)&&z.autoSleep&&Ie._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Ie.sleep()}}},e}(He);Rt(Je.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ke,Xe=function(t,e,r,i,n,s,a,o,u){N(i)&&(i=i(n||0,t,s));var h,l=t[e],f="get"!==r?r:N(l)?u?t[e.indexOf("set")||!N(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():l,_=N(l)?u?or:ar:sr;if(j(i)&&(~i.indexOf("random(")&&(i=we(i)),"="===i.charAt(1)&&((h=parseFloat(f)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(ne(f)||0))||0===h)&&(i=h)),f!==i)return isNaN(f*i)||""===i?(!l&&!(e in t)&&ht(e,i),function(t,e,r,i,n,s,a){var o,u,h,l,f,_,c,p,d=new vr(this._pt,t,e,0,1,_r,null,n),m=0,g=0;for(d.b=r,d.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=we(i)),s&&(s(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(rt)||[];o=rt.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(_=parseFloat(u[g-1])||0,d._pt={_next:d._pt,p:f||1===g?f:",",s:_,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-_,m:h&&h<4?Math.round:0},m=rt.lastIndex);return d.c=m<i.length?i.substring(m,i.length):"",d.fp=a,(it.test(i)||c)&&(d.e=0),this._pt=d,d}.call(this,t,e,f,i,_,o||z.stringFilter,u)):(h=new vr(this._pt,t,e,+f||0,i-(f||0),"boolean"==typeof l?fr:lr,0,_),u&&(h.fp=u),a&&h.modifier(a,this,t),this._pt=h)},Ze=function(t,e,r,i,n,s){var a,o,u,h;if(mt[t]&&!1!==(a=new mt[t]).init(n,a.rawVars?e[t]:function(t,e,r,i,n){if(N(t)&&(t=er(t,n,e,r,i)),!W(t)||t.style&&t.nodeType||X(t)||K(t))return j(t)?er(t,n,e,r,i):t;var s,a={};for(s in t)a[s]=er(t[s],n,e,r,i);return a}(e[t],i,n,s,r),r,i,s)&&(r._pt=o=new vr(r._pt,n,t,0,1,a.render,a,0,a.priority),r!==c))for(u=r._ptLookup[r._targets.indexOf(n)],h=a._props.length;h--;)u[a._props[h]]=o;return a},tr=function t(e,r){var i,n,s,u,h,l,f,_,c,p,d,m,g,v=e.vars,y=v.ease,T=v.startAt,w=v.immediateRender,b=v.lazy,x=v.onUpdate,k=v.onUpdateParams,C=v.callbackScope,S=v.runBackwards,D=v.yoyoEase,A=v.keyframes,P=v.autoRevert,M=e._dur,R=e._startAt,E=e._targets,O=e.parent,z=O&&"nested"===O.data?O.parent._targets:E,L="auto"===e._overwrite&&!a,B=e.timeline;if(B&&(!A||!y)&&(y="none"),e._ease=je(y,I.ease),e._yEase=D?qe(je(!0===D?y:D,I.ease)):0,D&&e._yoyo&&!e._repeat&&(D=e._yEase,e._yEase=e._ease,e._ease=D),e._from=!B&&!!v.runBackwards,!B){if(m=(_=E[0]?bt(E[0]).harness:0)&&v[_.prop],i=It(v,ct),R&&R.render(-1,!0).kill(),T)if(Bt(e._startAt=nr.set(E,Rt({data:"isStart",overwrite:!1,parent:O,immediateRender:!0,lazy:Y(b),startAt:null,delay:0,onUpdate:x,onUpdateParams:k,callbackScope:C,stagger:0},T))),r<0&&!w&&!P&&e._startAt.render(-1,!0),w){if(r>0&&!P&&(e._startAt=0),M&&r<=0)return void(r&&(e._zTime=r))}else!1===P&&(e._startAt=0);else if(S&&M)if(R)!P&&(e._startAt=0);else if(r&&(w=!1),s=Rt({overwrite:!1,data:"isFromStart",lazy:w&&Y(b),immediateRender:w,stagger:0,parent:O},i),m&&(s[_.prop]=m),Bt(e._startAt=nr.set(E,s)),r<0&&e._startAt.render(-1,!0),w){if(!r)return}else t(e._startAt,F);for(e._pt=0,b=M&&Y(b)||b&&!M,n=0;n<E.length;n++){if(f=(h=E[n])._gsap||wt(E)[n]._gsap,e._ptLookup[n]=p={},dt[f.id]&&pt.length&&Dt(),d=z===E?n:z.indexOf(h),_&&!1!==(c=new _).init(h,m||i,e,d,z)&&(e._pt=u=new vr(e._pt,h,c.name,0,1,c.render,c,0,c.priority),c._props.forEach((function(t){p[t]=u})),c.priority&&(l=1)),!_||m)for(s in i)mt[s]&&(c=Ze(s,i,e,d,h,z))?c.priority&&(l=1):p[s]=u=Xe.call(e,h,s,"get",i[s],d,z,0,v.stringFilter);e._op&&e._op[n]&&e.kill(h,e._op[n]),L&&e._pt&&(Ke=e,o.killTweensOf(h,p,e.globalTime(0)),g=!e.parent,Ke=0),e._pt&&b&&(dt[f.id]=1)}l&&gr(e),e._onInit&&e._onInit(e)}e._onUpdate=x,e._initted=(!e._op||e._pt)&&!g},er=function(t,e,r,i,n){return N(t)?t.call(e,r,i,n):j(t)&&~t.indexOf("random(")?we(t):t},rr=Tt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",ir=(rr+",id,stagger,delay,duration,paused,scrollTrigger").split(","),nr=r.Tween=function(t){function e(e,r,i,s){var u;"number"==typeof r&&(i.duration=r,r=i,i=null);var h,l,f,_,c,p,d,m,g=(u=t.call(this,s?r:Ft(r))||this).vars,v=g.duration,y=g.delay,T=g.immediateRender,w=g.stagger,b=g.overwrite,x=g.keyframes,k=g.defaults,C=g.scrollTrigger,S=g.yoyoEase,D=r.parent||o,A=(X(e)||K(e)?Q(e[0]):"length"in r)?[e]:ue(e);if(u._targets=A.length?wt(A):lt("GSAP target "+e+" not found. https://greensock.com",!z.nullTargetWarn)||[],u._ptLookup=[],u._overwrite=b,x||w||J(v)||J(y)){if(r=u.vars,(h=u.timeline=new Je({data:"nested",defaults:k||{}})).kill(),h.parent=h._dp=n(u),h._start=0,x)Rt(h.vars.defaults,{ease:"none"}),w?A.forEach((function(t,e){return x.forEach((function(r,i){return h.to(t,r,i?">":e*w)}))})):x.forEach((function(t){return h.to(A,t,">")}));else{if(_=A.length,d=w?fe(w):_t,W(w))for(c in w)~rr.indexOf(c)&&(m||(m={}),m[c]=w[c]);for(l=0;l<_;l++){for(c in f={},r)ir.indexOf(c)<0&&(f[c]=r[c]);f.stagger=0,S&&(f.yoyoEase=S),m&&Ot(f,m),p=A[l],f.duration=+er(v,n(u),l,p,A),f.delay=(+er(y,n(u),l,p,A)||0)-u._delay,!w&&1===_&&f.delay&&(u._delay=y=f.delay,u._start+=y,f.delay=0),h.to(p,f,d(l,p,A))}h.duration()?v=y=0:u.timeline=0}v||u.duration(v=h.duration())}else u.timeline=0;return!0!==b||a||(Ke=n(u),o.killTweensOf(A),Ke=0),Wt(D,n(u),i),r.reversed&&u.reverse(),r.paused&&u.paused(!0),(T||!v&&!x&&u._start===Ct(D._time)&&Y(T)&&Vt(n(u))&&"nested"!==D.data)&&(u._tTime=-F,u.render(Math.max(0,-y))),C&&Yt(n(u),C),u}s(e,t);var r=e.prototype;return r.render=function(t,e,r){var i,n,s,a,o,u,h,l,f,_=this._time,c=this._tDur,p=this._dur,d=t>c-F&&t>=0?c:t<F?0:t;if(p){if(d!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=t<0){if(i=d,l=this.timeline,this._repeat){if(a=p+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*a+t,e,r);if(i=Ct(d%a),d===c?(s=this._repeat,i=p):((s=~~(d/a))&&s===d/a&&(i=p,s--),i>p&&(i=p)),(u=this._yoyo&&1&s)&&(f=this._yEase,i=p-i),o=$t(this._tTime,a),i===_&&!r&&this._initted)return this;s!==o&&(l&&this._yEase&&$e(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(Ct(a*s),!0).invalidate()._lock=0))}if(!this._initted){if(Ht(this,t<0?t:i,r,e))return this._tTime=0,this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=d,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!_&&!e&&(Ce(this,"onStart"),this._tTime!==d))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-F:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),Ce(this,"onUpdate")),this._repeat&&s!==o&&this.vars.onRepeat&&!e&&this.parent&&Ce(this,"onRepeat"),d!==this._tDur&&d||this._tTime!==d||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),(t||!p)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Bt(this,1),e||t<0&&!_||!d&&!_||(Ce(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}}else!function(t,e,r,i){var n,s,a,o=t.ratio,u=e<0||!e&&(!t._start&&function t(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||t(r))}(t)&&(t._initted||!Jt(t))||(t._ts<0||t._dp._ts<0)&&!Jt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=ie(0,t._tDur,e),s=$t(l,h),a=$t(t._tTime,h),t._yoyo&&1&s&&(u=1-u),s!==a&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||i||t._zTime===F||!e&&t._zTime){if(!t._initted&&Ht(t,e,i,r))return;for(a=t._zTime,t._zTime=e||(r?F:0),r||(r=e&&!a),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&Ce(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Ce(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&Bt(t,1),r||(Ce(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},r.targets=function(){return this._targets},r.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),t.prototype.invalidate.call(this)},r.kill=function(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?Se(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Ke&&!0!==Ke.vars.overwrite)._first||Se(this),this.parent&&r!==this.timeline.totalDuration()&&Kt(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,s,a,o,u,h,l=this._targets,f=t?ue(t):l,_=this._ptLookup,c=this._pt;if((!e||"all"===e)&&function(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(l,f))return"all"===e&&(this._pt=0),Se(this);for(i=this._op=this._op||[],"all"!==e&&(j(e)&&(o={},kt(e,(function(t){return o[t]=1})),e=o),e=function(t,e){var r,i,n,s,a=t[0]?bt(t[0]).harness:0,o=a&&a.aliases;if(!o)return e;for(i in r=Ot({},e),o)if(i in r)for(n=(s=o[i].split(",")).length;n--;)r[s[n]]=r[i];return r}(l,e)),h=l.length;h--;)if(~f.indexOf(l[h]))for(o in n=_[h],"all"===e?(i[h]=e,a=n,s={}):(s=i[h]=i[h]||{},a=e),a)(u=n&&n[o])&&("kill"in u.d&&!0!==u.d.kill(o)||Lt(this,u,"_pt"),delete n[o]),"all"!==s&&(s[o]=1);return this._initted&&!this._pt&&c&&Se(this),this},e.to=function(t,r){return new e(t,r,arguments[2])},e.from=function(t,e){return ee(1,arguments)},e.delayedCall=function(t,r,i,n){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:r,onReverseComplete:r,onCompleteParams:i,onReverseCompleteParams:i,callbackScope:n})},e.fromTo=function(t,e,r){return ee(2,arguments)},e.set=function(t,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(t,r)},e.killTweensOf=function(t,e,r){return o.killTweensOf(t,e,r)},e}(He);Rt(nr.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),kt("staggerTo,staggerFrom,staggerFromTo",(function(t){nr[t]=function(){var e=new Je,r=ae.call(arguments,0);return r.splice("staggerFromTo"===t?5:4,0,0),e[t].apply(e,r)}}));var sr=function(t,e,r){return t[e]=r},ar=function(t,e,r){return t[e](r)},or=function(t,e,r,i){return t[e](i.fp,r)},ur=function(t,e,r){return t.setAttribute(e,r)},hr=function(t,e){return N(t[e])?ar:G(t[e])&&t.setAttribute?ur:sr},lr=function(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},fr=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},_r=function(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},cr=function(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},pr=function(t,e,r,i){for(var n,s=this._pt;s;)n=s._next,s.p===i&&s.modifier(t,e,r),s=n},dr=function(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?Lt(this,i,"_pt"):i.dep||(e=1),i=r;return!e},mr=function(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)},gr=function(t){for(var e,r,i,n,s=t._pt;s;){for(e=s._next,r=i;r&&r.pr>s.pr;)r=r._next;(s._prev=r?r._prev:n)?s._prev._next=s:i=s,(s._next=r)?r._prev=s:n=s,s=e}t._pt=i},vr=r.PropTween=function(){function t(t,e,r,i,n,s,a,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=s||lr,this.d=a||this,this.set=o||sr,this.pr=u||0,this._next=t,t&&(t._prev=this)}return t.prototype.modifier=function(t,e,r){this.mSet=this.mSet||this.set,this.set=mr,this.m=t,this.mt=r,this.tween=e},t}();kt(Tt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",(function(t){return ct[t]=1})),at.TweenMax=at.TweenLite=nr,at.TimelineLite=at.TimelineMax=Je,o=new Je({sortChildren:!1,defaults:I,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),z.stringFilter=ze;var yr={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach((function(t){return function(t){var e=(t=!t.name&&t.default||t).name,r=N(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:_t,render:cr,add:Xe,kill:dr,modifier:pr,rawVars:0},s={targetTest:0,get:0,getSetter:hr,aliases:{},register:0};if(Fe(),t!==i){if(mt[e])return;Rt(i,Rt(It(t,n),s)),Ot(i.prototype,Ot(n,It(t,s))),mt[i.prop=e]=i,t.targetTest&&(yt.push(i),ct[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ft(e,i),t.register&&t.register(br,i,vr)}(t)}))},timeline:function(t){return new Je(t)},getTweensOf:function(t,e){return o.getTweensOf(t,e)},getProperty:function(t,e,r,i){j(t)&&(t=ue(t)[0]);var n=bt(t||{}).get,s=r?Mt:Pt;return"native"===r&&(r=""),t?e?s((mt[e]&&mt[e].get||n)(t,e,r,i)):function(e,r,i){return s((mt[e]&&mt[e].get||n)(t,e,r,i))}:t},quickSetter:function(t,e,r){if((t=ue(t)).length>1){var i=t.map((function(t){return br.quickSetter(t,e,r)})),n=i.length;return function(t){for(var e=n;e--;)i[e](t)}}t=t[0]||{};var s=mt[e],a=bt(t),o=a.harness&&(a.harness.aliases||{})[e]||e,u=s?function(e){var i=new s;c._pt=0,i.init(t,r?e+r:e,c,0,[t]),i.render(1,i),c._pt&&cr(1,c)}:a.set(t,o);return s?u:function(e){return u(t,o,r?e+r:e,a,1)}},isTweening:function(t){return o.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=je(t.ease,I.ease)),zt(I,t||{})},config:function(t){return zt(z,t||{})},registerEffect:function(t){var e=t.name,r=t.effect,i=t.plugins,n=t.defaults,s=t.extendTimeline;(i||"").split(",").forEach((function(t){return t&&!mt[t]&&!at[t]&&lt(e+" effect requires "+t+" plugin.")})),gt[e]=function(t,e,i){return r(ue(t),Rt(e||{},n),i)},s&&(Je.prototype[e]=function(t,r,i){return this.add(gt[e](t,W(r)?r:(i=r)&&{},this),i)})},registerEase:function(t,e){Le[t]=je(e)},parseEase:function(t,e){return arguments.length?je(t,e):Le},getById:function(t){return o.getById(t)},exportRoot:function(t,e){void 0===t&&(t={});var r,i,n=new Je(t);for(n.smoothChildTiming=Y(t.smoothChildTiming),o.remove(n),n._dp=0,n._time=n._tTime=o._time,r=o._first;r;)i=r._next,!e&&!r._dur&&r instanceof nr&&r.vars.onComplete===r._targets[0]||Wt(n,r,r._start-r._delay),r=i;return Wt(o,n,0),n},utils:{wrap:ye,wrapYoyo:Te,distribute:fe,random:pe,snap:ce,normalize:ge,getUnit:ne,clamp:se,splitColor:Pe,toArray:ue,selector:he,mapRange:be,pipe:de,unitize:me,interpolate:xe,shuffle:le},install:ut,effects:gt,ticker:Ie,updateRoot:Je.updateRoot,plugins:mt,globalTimeline:o,core:{PropTween:vr,globals:ft,Tween:nr,Timeline:Je,Animation:He,getCache:bt,_removeLinkedListItem:Lt,suppressOverwrites:function(t){return a=t}}};kt("to,from,fromTo,delayedCall,set,killTweensOf",(function(t){return yr[t]=nr[t]})),Ie.add(Je.updateRoot),c=yr.to({},{duration:0});var Tr=function(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r},wr=function(t,e){return{name:t,rawVars:1,init:function(t,r,i){i._onInit=function(t){var i,n;if(j(r)&&(i={},kt(r,(function(t){return i[t]=1})),r=i),e){for(n in i={},r)i[n]=e(r[n]);r=i}!function(t,e){var r,i,n,s=t._targets;for(r in e)for(i=s.length;i--;)(n=t._ptLookup[i][r])&&(n=n.d)&&(n._pt&&(n=Tr(n,r)),n&&n.modifier&&n.modifier(e[r],t,s[i],r))}(t,r)}}}},br=r.gsap=yr.registerPlugin({name:"attr",init:function(t,e,r,i,n){var s,a;for(s in e)(a=this.add(t,"setAttribute",(t.getAttribute(s)||0)+"",e[s],i,n,0,0,s))&&(a.op=s),this._props.push(s)}},{name:"endArray",init:function(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},wr("roundProps",_e),wr("modifiers"),wr("snap",ce))||yr;nr.version=Je.version=br.version="3.7.1",f=1,H()&&Fe();var xr=Le.Power0,kr=Le.Power1,Cr=Le.Power2,Sr=Le.Power3,Dr=Le.Power4,Ar=Le.Linear,Pr=Le.Quad,Mr=Le.Cubic,Rr=Le.Quart,Er=Le.Quint,Or=Le.Strong,zr=Le.Elastic,Ir=Le.Back,Fr=Le.SteppedEase,Lr=Le.Bounce,Br=Le.Sine,Ur=Le.Expo,Vr=Le.Circ;r.Power0=xr,r.Power1=kr,r.Power2=Cr,r.Power3=Sr,r.Power4=Dr,r.Linear=Ar,r.Quad=Pr,r.Cubic=Mr,r.Quart=Rr,r.Quint=Er,r.Strong=Or,r.Elastic=zr,r.Back=Ir,r.SteppedEase=Fr,r.Bounce=Lr,r.Sine=Br,r.Expo=Ur,r.Circ=Vr,r.TweenMax=nr,r.TweenLite=nr,r.TimelineMax=Je,r.TimelineLite=Je,r.default=br,r.wrap=ye,r.wrapYoyo=Te,r.distribute=fe,r.random=pe,r.snap=ce,r.normalize=ge,r.getUnit=ne,r.clamp=se,r.splitColor=Pe,r.toArray=ue,r.selector=he,r.mapRange=be,r.pipe=de,r.unitize=me,r.interpolate=xe,r.shuffle=le,r._getProperty=xt,r._numExp=tt,r._numWithUnitExp=et,r._isString=j,r._isUndefined=G,r._renderComplexString=_r,r._relExp=it,r._setDefaults=Rt,r._removeLinkedListItem=Lt,r._forEachName=kt,r._sortPropTweensByPriority=gr,r._colorStringFilter=ze,r._replaceRandom=we,r._checkPlugin=Ze,r._plugins=mt,r._ticker=Ie,r._config=z,r._roundModifier=_e,r._round=Ct,r._missingPlugin=ht,r._getSetter=hr,r._getCache=bt,r._colorExp=Ee},{}],2:[function(t,e,r){"use strict";var i;function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}(i=t("gsap/gsap-core"))&&i.__esModule,$(document).ready((function(){new Swiper(".js-sm-only-platform-imgSlider",{loop:!0,slidePerView:1,pagination:{el:".swiper-pagination",clickable:!0}});var t,e=new Swiper(".js-platform-imgSlider",{loop:!0,slidePerView:1});$(".platformCard button").click((function(){var t=$(this).attr("data-slideCount");$(".platformCard").removeClass("active"),$(this).parents(".platformCard .progresss").removeAttr("style"),$(this).parents(".platformCard").addClass("active"),e.slideTo(t),clearInterval(window.timer),i()}));var r=1;function i(){$(".platformCard .progress").css("width",0);var t=0;window.timer=setInterval((function(){(t+=4)<=100?$(".platformCard.active .progress").css("width",t+"%"):(t=0,clearInterval(window.timer),r<=3?(e.slideTo(++r),$(".platformCard").removeClass("active"),$(".platformCard .collapse").removeClass("show"),$(".platformCard").eq(r-1).addClass("active"),$(".platformCard .collapse").eq(r-1).addClass("show"),i()):(clearInterval(window.timer),r=0,$(".platformCard").removeClass("active"),$(".platformCard .collapse").removeClass("show"),$(".platformCard").eq(r).addClass("active"),$(".platformCard .collapse").eq(r).addClass("show"),i(),clearInterval(window.timer)))}),500)}i();var s=new Swiper(".js-testimonial-img",(n(t={slidesPerView:1,spaceBetween:0,centeredSlides:!0,autoplay:{delay:8e3,disableOnInteraction:!1},speed:1200,effect:"coverflow",grabCursor:!0},"centeredSlides",!0),n(t,"coverflowEffect",{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!1}),t));s.slideTo(0);var a=new Swiper(".js-testimonial-content",{slidesPerView:1,spaceBetween:40,centeredSlides:!0,speed:1e3,slideToClickedSlide:!0,effect:"coverflow",keyboard:{enabled:!0},coverflowEffect:{rotate:5,stretch:0,depth:5,modifier:1,slideShadows:!1},breakpoints:{500:{slidesPerView:1},700:{slidesPerView:1}}});a.slideTo(0),s.controller.control=a,a.controller.control=s,new Swiper(".js-partners-icons-right",{slidesPerView:7,spaceBetween:40,loop:!0,centeredSlides:!0,autoplay:{delay:1e3},speed:3e3,breakpoints:{500:{slidesPerView:2},700:{slidesPerView:2},768:{slidesPerView:4},992:{slidesPerView:3}}}),new Swiper(".js-partners-icons-left",{speed:3e3,centeredSlides:!0,slidesPerView:7,spaceBetween:40,loop:!0,autoplay:{delay:1e3},breakpoints:{500:{slidesPerView:2},700:{slidesPerView:2}}})}))},{"gsap/gsap-core":1}]},{},[2]);





    // ------------------ recurri first slider(2)---------------------------------------------------


    $(function () {
        $("#dg-container").carrousel({
            current: 0,
            autoplay: true,
            nav: true,
            interval: 9000,
        });
    });
    
    !(function (e, n, t) {
        function r(e, n) {
            return typeof e === n;
        }
        function o() {
            var e, n, t, o, s, i, f;
            for (var a in y) {
                if (((e = []), (n = y[a]), n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++)
                    (i = e[s]),
                        (f = i.split(".")),
                        1 === f.length ? (Modernizr[f[0]] = o) : (!Modernizr[f[0]] || Modernizr[f[0]] instanceof Boolean || (Modernizr[f[0]] = new Boolean(Modernizr[f[0]])), (Modernizr[f[0]][f[1]] = o)),
                        C.push((o ? "" : "no-") + f.join("-"));
            }
        }
        function s() {
            return "function" != typeof n.createElement ? n.createElement(arguments[0]) : _ ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
        }
        function i() {
            var e = n.body;
            return e || ((e = s(_ ? "svg" : "body")), (e.fake = !0)), e;
        }
        function f(e, t, r, o) {
            var f,
                a,
                u,
                l,
                p = "modernizr",
                d = s("div"),
                c = i();
            if (parseInt(r, 10)) for (; r--; ) (u = s("div")), (u.id = o ? o[r] : p + (r + 1)), d.appendChild(u);
            return (
                (f = s("style")),
                (f.type = "text/css"),
                (f.id = "s" + p),
                (c.fake ? c : d).appendChild(f),
                c.appendChild(d),
                f.styleSheet ? (f.styleSheet.cssText = e) : f.appendChild(n.createTextNode(e)),
                (d.id = p),
                c.fake && ((c.style.background = ""), (c.style.overflow = "hidden"), (l = S.style.overflow), (S.style.overflow = "hidden"), S.appendChild(c)),
                (a = t(d, e)),
                c.fake ? (c.parentNode.removeChild(c), (S.style.overflow = l), S.offsetHeight) : d.parentNode.removeChild(d),
                !!a
            );
        }
        function a(e, n) {
            return !!~("" + e).indexOf(n);
        }
        function u(e) {
            return e
                .replace(/([a-z])-([a-z])/g, function (e, n, t) {
                    return n + t.toUpperCase();
                })
                .replace(/^-/, "");
        }
        function l(e) {
            return e
                .replace(/([A-Z])/g, function (e, n) {
                    return "-" + n.toLowerCase();
                })
                .replace(/^ms-/, "-ms-");
        }
        function p(n, r) {
            var o = n.length;
            if ("CSS" in e && "supports" in e.CSS) {
                for (; o--; ) if (e.CSS.supports(l(n[o]), r)) return !0;
                return !1;
            }
            if ("CSSSupportsRule" in e) {
                for (var s = []; o--; ) s.push("(" + l(n[o]) + ":" + r + ")");
                return (
                    (s = s.join(" or ")),
                    f("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) {
                        return "absolute" == getComputedStyle(e, null).position;
                    })
                );
            }
            return t;
        }
        function d(e, n, o, i) {
            function f() {
                d && (delete k.style, delete k.modElem);
            }
            if (((i = r(i, "undefined") ? !1 : i), !r(o, "undefined"))) {
                var l = p(e, o);
                if (!r(l, "undefined")) return l;
            }
            for (var d, c, m, v, h, y = ["modernizr", "tspan"]; !k.style; ) (d = !0), (k.modElem = s(y.shift())), (k.style = k.modElem.style);
            for (m = e.length, c = 0; m > c; c++)
                if (((v = e[c]), (h = k.style[v]), a(v, "-") && (v = u(v)), k.style[v] !== t)) {
                    if (i || r(o, "undefined")) return f(), "pfx" == n ? v : !0;
                    try {
                        k.style[v] = o;
                    } catch (g) {}
                    if (k.style[v] != h) return f(), "pfx" == n ? v : !0;
                }
            return f(), !1;
        }
        function c(e, n) {
            return function () {
                return e.apply(n, arguments);
            };
        }
        function m(e, n, t) {
            var o;
            for (var s in e) if (e[s] in n) return t === !1 ? e[s] : ((o = n[e[s]]), r(o, "function") ? c(o, t || n) : o);
            return !1;
        }
        function v(e, n, t, o, s) {
            var i = e.charAt(0).toUpperCase() + e.slice(1),
                f = (e + " " + P.join(i + " ") + i).split(" ");
            return r(n, "string") || r(n, "undefined") ? d(f, n, o, s) : ((f = (e + " " + T.join(i + " ") + i).split(" ")), m(f, n, t));
        }
        function h(e, n, r) {
            return v(e, t, t, n, r);
        }
        var y = [],
            g = {
                _version: "3.0.0",
                _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
                _q: [],
                on: function (e, n) {
                    var t = this;
                    setTimeout(function () {
                        n(t[e]);
                    }, 0);
                },
                addTest: function (e, n, t) {
                    y.push({ name: e, fn: n, options: t });
                },
                addAsyncTest: function (e) {
                    y.push({ name: null, fn: e });
                },
            },
            Modernizr = function () {};
        (Modernizr.prototype = g), (Modernizr = new Modernizr());
        var C = [],
            S = n.documentElement,
            w = "CSS" in e && "supports" in e.CSS,
            x = "supportsCSS" in e;
        Modernizr.addTest("supports", w || x);
        var _ = "svg" === S.nodeName.toLowerCase(),
            b = (g.testStyles = f),
            z = "Moz O ms Webkit",
            P = g._config.usePrefixes ? z.split(" ") : [];
        g._cssomPrefixes = P;
        var T = g._config.usePrefixes ? z.toLowerCase().split(" ") : [];
        g._domPrefixes = T;
        var E = { elem: s("modernizr") };
        Modernizr._q.push(function () {
            delete E.elem;
        });
        var k = { style: E.elem.style };
        Modernizr._q.unshift(function () {
            delete k.style;
        }),
            (g.testAllProps = v),
            (g.testAllProps = h),
            Modernizr.addTest("csstransforms3d", function () {
                var e = !!h("perspective", "1px", !0),
                    n = Modernizr._config.usePrefixes;
                if (e && (!n || "webkitPerspective" in S.style)) {
                    var t;
                    Modernizr.supports ? (t = "@supports (perspective: 1px)") : ((t = "@media (transform-3d)"), n && (t += ",(-webkit-transform-3d)")),
                        (t += "{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}"),
                        b(t, function (n) {
                            e = 9 === n.offsetLeft && 5 === n.offsetHeight;
                        });
                }
                return e;
            }),
            Modernizr.addTest("csstransforms", function () {
                return -1 === navigator.userAgent.indexOf("Android 2.") && h("transform", "scale(1)", !0);
            }),
            o(),
            delete g.addTest,
            delete g.addAsyncTest;
        for (var A = 0; A < Modernizr._q.length; A++) Modernizr._q[A]();
        e.Modernizr = Modernizr;
    })(window, document);
    
    (function ($) {
        $.carrousel = function (options, element) {
            this.$el = $(element);
            this._init(options);
        };
    
        $.carrousel.defaults = {
            current: 0, // index of current item
            autoplay: true, // slideshow on / off
            interval: 9000, // time between transitions
        };
    
        $.carrousel.prototype = {
            // 初始化
            _init: function (options) {
                this.options = $.extend(true, {}, $.carrousel.defaults, options);
    
                this.support3d = Modernizr.csstransforms3d;
                this.support2d = Modernizr.csstransforms;
    
                this.$wrapper = this.$el.find(".dg-wrapper");
                this.$items = this.$wrapper.children();
                this.itemsCount = this.$items.length;
                this.$nav = this.$el.find("nav");
                this.$navPrev = this.$nav.find(".dg-prev");
                this.$navNext = this.$nav.find(".dg-next");
                this.button = $("#lightButton li");
                this.box = $(".banner");
                this.imgWidth = $(".banner .dg-wrapper img").width();
    
                this.indexB = 0;
                this.CSSX = 0;
                this.CSSXout = 0;
    
                this.button[0].classList.add("light");
    
                this.current = this.options.current;
                this.isAnim = false;
                this.$items.css({
                    opacity: 0,
                });
                this._updateWidth();
                this._layout();
                // load the events
                this._loadEvents();
                // slideshow
                if (this.options.autoplay) {
                    this._startSlideshow();
                }
    
                var _self = this;
                for (var i = 0, len = this.button.length; i < len; i++) {
                    // 点击小圆点
                    this.button[i].addEventListener("click", function () {
                        var toIndex = parseInt(this.getAttribute("index"));
                        var toMove = toIndex - _self.indexB;
                        switch (toMove) {
                            case 0:
                                break;
                            case 1:
                                _self._navigate("next", "dg-transition");
                                break;
                            case -1:
                                _self._navigate("prev", "dg-transition");
                                break;
                            default:
                                _self._stopSlideshow();
                                var bTime = setInterval(function () {
                                    if (!_self.isAnim) {
                                        if (!toMove) {
                                            clearInterval(bTime);
                                            if (_self.options.autoplay) {
                                                _self._startSlideshow();
                                            }
                                        } else if (toMove > 0) {
                                            _self._navigate("next", "dg-transition-fast");
                                            toMove--;
                                        } else if (toMove < 0) {
                                            _self._navigate("prev", "dg-transition-fast");
                                            toMove++;
                                        }
                                    }
                                }, 0);
                                break;
                        }
                    });
                }
            },
    
            // 自适应宽度
            _updateWidth: function () {
                if (this.support3d) {
                    if (document.body.clientWidth < 1000) {
                        this.CSSX = ($(this.box).width() - 10 - this.imgWidth * 0.7) / 2;
                        this.CSSXout = 0;
                    } else if (document.body.clientWidth >= 1000) {
                        this.CSSX = (($(this.box).width() * 1.2 + 480 - 10 - this.imgWidth * 0.5) / 2) * 0.5;
                        this.CSSXout = ($(this.box).width() * 1.2 + 480 - 10 - this.imgWidth * 0.5) / 2;
                    }
                } else if (this.support2d) {
                    if (document.body.clientWidth < 1464) {
                        this.CSSX = ($(this.box).width() - 10 - this.imgWidth * 0.9) / 2;
                        this.CSSXout = 0;
                    } else if (document.body.clientWidth >= 1464) {
                        this.CSSX = (($(this.box).width() - 10 - this.imgWidth * 0.8) / 2) * 0.7;
                        this.CSSXout = ($(this.box).width() - 10 - this.imgWidth * 0.8) / 2;
                    }
                }
            },
    
            // 显示小圆点
            _showButton: function () {
                var _self = this;
                for (var i = 0, len = _self.button.length; i < len; i++) {
                    if (_self.button[i].classList.contains("light")) {
                        _self.button[i].classList.remove("light");
                        break;
                    }
                }
                _self.button[_self.indexB].classList.add("light");
            },
    
            // 用来绑定点击事件
            _click: function (element, move) {
                var _self = this;
                element.off("click.gallery");
                element.on("click.gallery", function () {
                    if (!this.isAnim) {
                        _self._navigate(move);
                        if (_self.options.autoplay) {
                            _self._startSlideshow();
                        }
                    }
                });
            },
    
            // 初始样式
            _layout: function () {
                this._setItems();
    
                this.$leftItm.css(this._getCoordinates("left"));
                this.$rightItm.css(this._getCoordinates("right"));
                this.$currentItm.css(this._getCoordinates("center")).addClass("dg-center");
    
                this._click(this.$leftItm, "prev");
                this._click(this.$prevItm, "prev");
    
                this.$currentItm.off("click.carrousel");
    
                this._click(this.$rightItm, "next");
                this._click(this.$nextItm, "next");
    
                this.$nextItm.css(this._getCoordinates("outright"));
                this.$prevItm.css(this._getCoordinates("outleft"));
    
                this.$currentItm[0].href = this.$currentItm[0].getAttribute("link");
            },
    
            // 更新图片位置
            _setItems: function () {
                this.$items.removeClass("dg-center");
    
                this.$currentItm = this.$items.eq(this.current);
                this.$leftItm = this.current === 0 ? this.$items.eq(this.itemsCount - 1) : this.$items.eq(this.current - 1);
                this.$rightItm = this.current === this.itemsCount - 1 ? this.$items.eq(0) : this.$items.eq(this.current + 1);
                this.$nextItm = this.$rightItm.index() === this.itemsCount - 1 ? this.$items.eq(0) : this.$rightItm.next();
                this.$prevItm = this.$leftItm.index() === 0 ? this.$items.eq(this.itemsCount - 1) : this.$leftItm.prev();
            },
    
            _loadEvents: function () {
                var _self = this;
                this.$navPrev.on("click.carrousel", function () {
                    _self._navigate("prev");
                    return false;
                });
    
                this.$navNext.on("click.carrousel", function () {
                    _self._navigate("next");
                    return false;
                });
    
                this.$wrapper.on("webkitTransitionEnd.carrousel transitionend.carrousel OTransitionEnd.carrousel", function () {
                    _self.$currentItm.addClass("dg-center");
                    _self.$items.removeClass("dg-transition");
                    _self.$items.removeClass("dg-transition-fast");
                    _self.isAnim = false;
    
                    // 处理中间元素的href
                    _self.$currentItm[0].href = _self.$currentItm[0].getAttribute("link");
                    _self.$leftItm[0].href = "#";
                    _self.$rightItm[0].href = "#";
    
                    // 处理左右元素的点击事件
                    _self._click(_self.$leftItm, "prev");
                    _self._click(_self.$prevItm, "prev");
    
                    _self.$currentItm.off("click.gallery");
    
                    _self._click(_self.$rightItm, "next");
                    _self._click(_self.$nextItm, "next");
                });
            },
    
            // 定义样式
            _getCoordinates: function (position) {
                if (this.support3d) {
                    switch (position) {
                        case "outleft":
                            return {
                                opacity: 0,
                                visibility: "hidden",
                            };
                            break;
                        case "outright":
                            return {
                                opacity: 0,
                                visibility: "hidden",
                            };
                            break;
                        case "left":
                            return {
                                "-webkit-transform": "translateX(-" + this.CSSX + "px) translateZ(-300px) rotateY(25deg)",
                                "-moz-transform": "translateX(-" + this.CSSX + "px) translateZ(-300px) rotateY(25deg)",
                                "-o-transform": "translateX(-" + this.CSSX + "px) translateZ(-300px) rotateY(25deg)",
                                "-ms-transform": "translateX(-" + this.CSSX + "px) translateZ(-300px) rotateY(25deg)",
                                transform: "translateX(-" + this.CSSX + "px) translateZ(-300px) rotateY(25deg)",
                                opacity: 1,
                                visibility: "visible",
                            };
                            break;
                        case "right":
                            return {
                                "-webkit-transform": "translateX(" + this.CSSX + "px) translateZ(-300px) rotateY(-25deg)",
                                "-moz-transform": "translateX(" + this.CSSX + "px) translateZ(-300px) rotateY(-25deg)",
                                "-o-transform": "translateX(" + this.CSSX + "px) translateZ(-300px) rotateY(-25deg)",
                                "-ms-transform": "translateX(" + this.CSSX + "px) translateZ(-300px) rotateY(-25deg)",
                                transform: "translateX(" + this.CSSX + "px) translateZ(-300px) rotateY(-25deg)",
                                opacity: 1,
                                visibility: "visible",
                            };
                            break;
                        case "center":
                            return {
                                "-webkit-transform": "translateX(0px) translateZ(0px) rotateY(0deg)",
                                "-moz-transform": "translateX(0px) translateZ(0px) rotateY(0deg)",
                                "-o-transform": "translateX(0px) translateZ(0px) rotateY(0deg)",
                                "-ms-transform": "translateX(0px) translateZ(0px) rotateY(0deg)",
                                transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                                opacity: 1,
                                visibility: "visible",
                            };
                            break;
                        case "hide":
                            return {
                                "-webkit-transform": "translate(0px) scale(0.7)",
                                opacity: 1,
                                visibility: "hidden",
                                "z-index": 1,
                            };
                            break;
                    }
                } else if (this.support2d) {
                    switch (position) {
                        case "outleft":
                            return {
                                "-webkit-transform": "translate(-" + this.CSSXout + "px) scale(0.8)",
                                "-moz-transform": "translate(-" + this.CSSXout + "px) scale(0.8)",
                                "-o-transform": "translate(-" + this.CSSXout + "px) scale(0.8)",
                                "-ms-transform": "translate(-" + this.CSSXout + "px) scale(0.8)",
                                transform: "translate(-" + this.CSSXout + "px) scale(0.8)",
                                opacity: 1,
                                "z-index": 2,
                            };
                            break;
                        case "outright":
                            return {
                                "-webkit-transform": "translate(" + this.CSSXout + "px) scale(0.8)",
                                "-moz-transform": "translate(" + this.CSSXout + "px) scale(0.8)",
                                "-o-transform": "translate(" + this.CSSXout + "px) scale(0.8)",
                                "-ms-transform": "translate(" + this.CSSXout + "px) scale(0.8)",
                                transform: "translate(" + this.CSSXout + "px) scale(0.8)",
                                opacity: 1,
                                "z-index": 2,
                            };
                            break;
                        case "left":
                            return {
                                "-webkit-transform": "translate(-" + this.CSSX + "px) scale(0.9)",
                                "-moz-transform": "translate(-" + this.CSSX + "px) scale(0.9)",
                                "-o-transform": "translate(-" + this.CSSX + "px) scale(0.9)",
                                "-ms-transform": "translate(-" + this.CSSX + "px) scale(0.9)",
                                transform: "translate(-" + this.CSSX + "px) scale(0.9)",
                                opacity: 1,
                                visibility: "visible",
                                "z-index": 3,
                            };
                            break;
                        case "right":
                            return {
                                "-webkit-transform": "translate(" + this.CSSX + "px) scale(0.9)",
                                "-moz-transform": "translate(" + this.CSSX + "px) scale(0.9)",
                                "-o-transform": "translate(" + this.CSSX + "px) scale(0.9)",
                                "-ms-transform": "translate(" + this.CSSX + "px) scale(0.9)",
                                transform: "translate(" + this.CSSX + "px) scale(0.9)",
                                opacity: 1,
                                visibility: "visible",
                                "z-index": 3,
                            };
                            break;
                        case "center":
                            return {
                                "-webkit-transform": "translate(0px) scale(1)",
                                "-moz-transform": "translate(0px) scale(1)",
                                "-o-transform": "translate(0px) scale(1)",
                                "-ms-transform": "translate(0px) scale(1)",
                                transform: "translate(0px) scale(1)",
                                opacity: 1,
                                visibility: "visible",
                                "z-index": 4,
                            };
                        case "hide":
                            return {
                                "-webkit-transform": "translate(0px) scale(0.7)",
                                "-moz-transform": "translate(0px) scale(0.7)",
                                "-o-transform": "translate(0px) scale(0.7)",
                                "-ms-transform": "translate(0px) scale(0.7)",
                                transform: "translate(0px) scale(0.7)",
                                opacity: 1,
                                visibility: "hidden",
                                "z-index": 1,
                            };
                            break;
                    }
                }
            },
    
            // 切换
            _navigate: function (dir, speedClass) {
                speedClass = speedClass || "dg-transition";
                if (!this.isAnim) {
                    this._updateWidth();
    
                    this.isAnim = true;
                    var _self = this;
    
                    switch (dir) {
                        case "next":
                            this.indexB++;
                            if (this.indexB === this.itemsCount) {
                                this.indexB = 0;
                            }
                            this._showButton();
                            this.current = this.$rightItm.index();
                            // current item moves left
                            this.$currentItm.addClass(speedClass).css(this._getCoordinates("left"));
    
                            // right item moves to the center
                            this.$rightItm.addClass(speedClass).css(this._getCoordinates("center"));
    
                            // left item moves out
                            this.$leftItm.addClass(speedClass).css(this._getCoordinates("outleft"));
    
                            this.$nextItm.addClass(speedClass).css(this._getCoordinates("right"));
    
                            if (this.itemsCount > 5) {
                                this.$prevItm.addClass(speedClass).css(this._getCoordinates("hide"));
                                this.$prevItm.off("click.carrousel");
                            }
    
                            var nextEle = this.$nextItm.index() === this.itemsCount - 1 ? this.$items.eq(0) : this.$nextItm.next();
                            $(nextEle).addClass(speedClass).css(this._getCoordinates("outright"));
                            $(nextEle).off("click.carrousel");
    
                            break;
    
                        case "prev":
                            this.indexB--;
                            if (this.indexB === -1) {
                                this.indexB = this.itemsCount - 1;
                            }
                            this._showButton();
                            this.current = this.$leftItm.index();
                            // current item moves right
                            this.$currentItm.addClass(speedClass).css(this._getCoordinates("right"));
    
                            // left item moves to the center
                            this.$leftItm.addClass(speedClass).css(this._getCoordinates("center"));
    
                            // right item moves out
                            this.$rightItm.addClass(speedClass).css(this._getCoordinates("outright"));
    
                            this.$prevItm.addClass(speedClass).css(this._getCoordinates("left"));
    
                            if (this.itemsCount > 5) {
                                this.$nextItm.addClass(speedClass).css(this._getCoordinates("hide"));
                                this.$nextItm.off("click.carrousel");
                            }
    
                            var prevEle = this.$prevItm.index() === 0 ? this.$items.eq(this.itemsCount - 1) : this.$prevItm.prev();
                            $(prevEle).addClass(speedClass).css(this._getCoordinates("outleft"));
                            $(prevEle).off("click.carrousel");
    
                            break;
                    }
                    this._setItems();
                }
            },
    
            // 自动切换
            _startSlideshow: function () {
                if (this.slideshow) {
                    clearInterval(this.slideshow);
                }
                var _self = this;
                this.slideshow = setInterval(function () {
                    if ($(".dg-center")[0] && !_self.isAnim) {
                        _self._navigate("next");
                    }
                }, this.options.interval);
            },
    
            _stopSlideshow: function () {
                clearTimeout(this.slideshow);
            },
        };
    
        $.fn.carrousel = function (options) {
            if (typeof options === "object") {
                this.each(function () {
                    var instance = $.data(this, "carrousel");
                    if (!instance) {
                        $.data(this, "carrousel", new $.carrousel(options, this));
                    }
                });
            } else if (typeof options === "string") {
                this.each(function () {
                    var instance = $.data(this, "carrousel");
                    if (instance) {
                        switch (options) {
                            case "play":
                                instance._startSlideshow();
                                instance.options.autoplay = false;
                                break;
                            case "stop":
                                instance._stopSlideshow();
                                instance.options.autoplay = true;
                                break;
                            case "next":
                                instance._navigate("next");
                                break;
                            case "prev":
                                instance._navigate("prev");
                                break;
                        }
                    }
                });
            } else if (typeof options === "number") {
                this.each(function () {
                    var instance = $.data(this, "carrousel");
                    instance.button[options].click();
                });
            }
            return this;
        };
    })(jQuery);

        // ------------------ recurri first slider end(2)---------------------------------------------------
    

    // ========================recurri second slider(2)==============================


    var swiper = new Swiper('.recurri-slider-second .swiper-container', {
        effect: 'coverflow',
        grabCursor: false,
        autoloop: true,
        centeredSlides: true,
        // slidesPerView: 1.5,
        initialSlide: 1,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 800,
          modifier: 1.458,
          slideShadows: true,
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
