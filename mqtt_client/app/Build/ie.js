/*! refbuilder 2017-08-21 */

!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){var t,e=Array,r=e.prototype,n=Object,o=n.prototype,i=Function,a=i.prototype,s=String,l=s.prototype,c=Number,u=c.prototype,f=r.slice,h=r.splice,p=r.push,d=r.unshift,g=r.concat,y=r.join,v=a.call,m=a.apply,b=Math.max,w=Math.min,T=o.toString,x="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,S=Function.prototype.toString,E=/^\s*class /,j=function(t){try{var e=S.call(t).replace(/\/\/.*\n/g,"").replace(/\/\*[.\s\S]*\*\//g,"").replace(/\n/gm," ").replace(/ {2}/g," ");return E.test(e)}catch(t){return!1}},D=function(t){try{return!j(t)&&(S.call(t),!0)}catch(t){return!1}},O=function(t){if(!t)return!1;if("function"!=typeof t&&"object"!=typeof t)return!1;if(x)return D(t);if(j(t))return!1;var e=T.call(t);return"[object Function]"===e||"[object GeneratorFunction]"===e},C=RegExp.prototype.exec,M=function(t){try{return C.call(t),!0}catch(t){return!1}};t=function(t){return"object"==typeof t&&(x?M(t):"[object RegExp]"===T.call(t))};var N,F=String.prototype.valueOf,I=function(t){try{return F.call(t),!0}catch(t){return!1}};N=function(t){return"string"==typeof t||"object"==typeof t&&(x?I(t):"[object String]"===T.call(t))};var U=n.defineProperty&&function(){try{var t={};n.defineProperty(t,"x",{enumerable:!1,value:t});for(var e in t)return!1;return t.x===t}catch(t){return!1}}(),k=function(t){var e;return e=U?function(t,e,r,o){!o&&e in t||n.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:r})}:function(t,e,r,n){!n&&e in t||(t[e]=r)},function(r,n,o){for(var i in n)t.call(n,i)&&e(r,i,n[i],o)}}(o.hasOwnProperty),A=function(t){var e=typeof t;return null===t||"object"!==e&&"function"!==e},$=c.isNaN||function(t){return t!==t},R={ToInteger:function(t){var e=+t;return $(e)?e=0:0!==e&&e!==1/0&&e!==-1/0&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e},ToPrimitive:function(t){var e,r,n;if(A(t))return t;if(r=t.valueOf,O(r)&&(e=r.call(t),A(e)))return e;if(n=t.toString,O(n)&&(e=n.call(t),A(e)))return e;throw new TypeError},ToObject:function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return n(t)},ToUint32:function(t){return t>>>0}},z=function(){};k(a,{bind:function(t){var e=this;if(!O(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var r,o=f.call(arguments,1),a=b(0,e.length-o.length),s=[],l=0;l<a;l++)p.call(s,"$"+l);return r=i("binder","return function ("+y.call(s,",")+"){ return binder.apply(this, arguments); }")(function(){if(this instanceof r){var i=m.call(e,this,g.call(o,f.call(arguments)));return n(i)===i?i:this}return m.call(e,t,g.call(o,f.call(arguments)))}),e.prototype&&(z.prototype=e.prototype,r.prototype=new z,z.prototype=null),r}});var J=v.bind(o.hasOwnProperty),P=v.bind(o.toString),Z=v.bind(f),B=m.bind(f),H=v.bind(l.slice),L=v.bind(l.split),_=v.bind(l.indexOf),Y=v.bind(p),q=v.bind(o.propertyIsEnumerable),G=v.bind(r.sort),W=e.isArray||function(t){return"[object Array]"===P(t)},X=1!==[].unshift(0);k(r,{unshift:function(){return d.apply(this,arguments),this.length}},X),k(e,{isArray:W});var Q=n("a"),V="a"!==Q[0]||!(0 in Q),K=function(t){var e=!0,r=!0,n=!1;if(t)try{t.call("foo",function(t,r,n){"object"!=typeof n&&(e=!1)}),t.call([1],function(){"use strict";r="string"==typeof this},"x")}catch(t){n=!0}return!!t&&!n&&e&&r};k(r,{forEach:function(t){var e,r=R.ToObject(this),n=V&&N(this)?L(this,""):r,o=-1,i=R.ToUint32(n.length);if(arguments.length>1&&(e=arguments[1]),!O(t))throw new TypeError("Array.prototype.forEach callback must be a function");for(;++o<i;)o in n&&(void 0===e?t(n[o],o,r):t.call(e,n[o],o,r))}},!K(r.forEach)),k(r,{map:function(t){var r,n=R.ToObject(this),o=V&&N(this)?L(this,""):n,i=R.ToUint32(o.length),a=e(i);if(arguments.length>1&&(r=arguments[1]),!O(t))throw new TypeError("Array.prototype.map callback must be a function");for(var s=0;s<i;s++)s in o&&(a[s]=void 0===r?t(o[s],s,n):t.call(r,o[s],s,n));return a}},!K(r.map)),k(r,{filter:function(t){var e,r,n=R.ToObject(this),o=V&&N(this)?L(this,""):n,i=R.ToUint32(o.length),a=[];if(arguments.length>1&&(r=arguments[1]),!O(t))throw new TypeError("Array.prototype.filter callback must be a function");for(var s=0;s<i;s++)s in o&&(e=o[s],(void 0===r?t(e,s,n):t.call(r,e,s,n))&&Y(a,e));return a}},!K(r.filter)),k(r,{every:function(t){var e,r=R.ToObject(this),n=V&&N(this)?L(this,""):r,o=R.ToUint32(n.length);if(arguments.length>1&&(e=arguments[1]),!O(t))throw new TypeError("Array.prototype.every callback must be a function");for(var i=0;i<o;i++)if(i in n&&!(void 0===e?t(n[i],i,r):t.call(e,n[i],i,r)))return!1;return!0}},!K(r.every)),k(r,{some:function(t){var e,r=R.ToObject(this),n=V&&N(this)?L(this,""):r,o=R.ToUint32(n.length);if(arguments.length>1&&(e=arguments[1]),!O(t))throw new TypeError("Array.prototype.some callback must be a function");for(var i=0;i<o;i++)if(i in n&&(void 0===e?t(n[i],i,r):t.call(e,n[i],i,r)))return!0;return!1}},!K(r.some));var tt=!1;r.reduce&&(tt="object"==typeof r.reduce.call("es5",function(t,e,r,n){return n})),k(r,{reduce:function(t){var e=R.ToObject(this),r=V&&N(this)?L(this,""):e,n=R.ToUint32(r.length);if(!O(t))throw new TypeError("Array.prototype.reduce callback must be a function");if(0===n&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var o,i=0;if(arguments.length>=2)o=arguments[1];else for(;;){if(i in r){o=r[i++];break}if(++i>=n)throw new TypeError("reduce of empty array with no initial value")}for(;i<n;i++)i in r&&(o=t(o,r[i],i,e));return o}},!tt);var et=!1;r.reduceRight&&(et="object"==typeof r.reduceRight.call("es5",function(t,e,r,n){return n})),k(r,{reduceRight:function(t){var e=R.ToObject(this),r=V&&N(this)?L(this,""):e,n=R.ToUint32(r.length);if(!O(t))throw new TypeError("Array.prototype.reduceRight callback must be a function");if(0===n&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var o,i=n-1;if(arguments.length>=2)o=arguments[1];else for(;;){if(i in r){o=r[i--];break}if(--i<0)throw new TypeError("reduceRight of empty array with no initial value")}if(i<0)return o;do{i in r&&(o=t(o,r[i],i,e))}while(i--);return o}},!et);var rt=r.indexOf&&-1!==[0,1].indexOf(1,2);k(r,{indexOf:function(t){var e=V&&N(this)?L(this,""):R.ToObject(this),r=R.ToUint32(e.length);if(0===r)return-1;var n=0;for(arguments.length>1&&(n=R.ToInteger(arguments[1])),n=n>=0?n:b(0,r+n);n<r;n++)if(n in e&&e[n]===t)return n;return-1}},rt);var nt=r.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);k(r,{lastIndexOf:function(t){var e=V&&N(this)?L(this,""):R.ToObject(this),r=R.ToUint32(e.length);if(0===r)return-1;var n=r-1;for(arguments.length>1&&(n=w(n,R.ToInteger(arguments[1]))),n=n>=0?n:r-Math.abs(n);n>=0;n--)if(n in e&&t===e[n])return n;return-1}},nt);var ot=function(){var t=[1,2],e=t.splice();return 2===t.length&&W(e)&&0===e.length}();k(r,{splice:function(t,e){return 0===arguments.length?[]:h.apply(this,arguments)}},!ot);var it=function(){var t={};return r.splice.call(t,0,0,1),1===t.length}();k(r,{splice:function(t,e){if(0===arguments.length)return[];var r=arguments;return this.length=b(R.ToInteger(this.length),0),arguments.length>0&&"number"!=typeof e&&((r=Z(arguments)).length<2?Y(r,this.length-t):r[1]=R.ToInteger(e)),h.apply(this,r)}},!it);var at=function(){var t=new e(1e5);return t[8]="x",t.splice(1,1),7===t.indexOf("x")}(),st=function(){var t=[];return t[256]="a",t.splice(257,0,"b"),"a"===t[256]}();k(r,{splice:function(t,e){for(var r,n=R.ToObject(this),o=[],i=R.ToUint32(n.length),a=R.ToInteger(t),l=a<0?b(i+a,0):w(a,i),c=w(b(R.ToInteger(e),0),i-l),u=0;u<c;)r=s(l+u),J(n,r)&&(o[u]=n[r]),u+=1;var f,h=Z(arguments,2),p=h.length;if(p<c){u=l;for(var d=i-c;u<d;)r=s(u+c),f=s(u+p),J(n,r)?n[f]=n[r]:delete n[f],u+=1;u=i;for(var g=i-c+p;u>g;)delete n[u-1],u-=1}else if(p>c)for(u=i-c;u>l;)r=s(u+c-1),f=s(u+p-1),J(n,r)?n[f]=n[r]:delete n[f],u-=1;u=l;for(var y=0;y<h.length;++y)n[u]=h[y],u+=1;return n.length=i-c+p,o}},!at||!st);var lt,ct=r.join;try{lt="1,2,3"!==Array.prototype.join.call("123",",")}catch(t){lt=!0}lt&&k(r,{join:function(t){var e=void 0===t?",":t;return ct.call(N(this)?L(this,""):this,e)}},lt);var ut="1,2"!==[1,2].join(void 0);ut&&k(r,{join:function(t){var e=void 0===t?",":t;return ct.call(this,e)}},ut);var ft=function(t){for(var e=R.ToObject(this),r=R.ToUint32(e.length),n=0;n<arguments.length;)e[r+n]=arguments[n],n+=1;return e.length=r+n,r+n},ht=function(){var t={};return 1!==Array.prototype.push.call(t,void 0)||1!==t.length||void 0!==t[0]||!J(t,0)}();k(r,{push:function(t){return W(this)?p.apply(this,arguments):ft.apply(this,arguments)}},ht);var pt=function(){var t=[];return 1!==t.push(void 0)||1!==t.length||void 0!==t[0]||!J(t,0)}();k(r,{push:ft},pt),k(r,{slice:function(t,e){var r=N(this)?L(this,""):this;return B(r,arguments)}},V);var dt=function(){try{return[1,2].sort(null),[1,2].sort({}),!0}catch(t){}return!1}(),gt=function(){try{return[1,2].sort(/a/),!1}catch(t){}return!0}(),yt=function(){try{return[1,2].sort(void 0),!0}catch(t){}return!1}();k(r,{sort:function(t){if(void 0===t)return G(this);if(!O(t))throw new TypeError("Array.prototype.sort callback must be a function");return G(this,t)}},dt||!yt||!gt);var vt=!q({toString:null},"toString"),mt=q(function(){},"prototype"),bt=!J("x","0"),wt=function(t){var e=t.constructor;return e&&e.prototype===t},Tt={$window:!0,$console:!0,$parent:!0,$self:!0,$frame:!0,$frames:!0,$frameElement:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$external:!0},xt=function(){if("undefined"==typeof window)return!1;for(var t in window)try{!Tt["$"+t]&&J(window,t)&&null!==window[t]&&"object"==typeof window[t]&&wt(window[t])}catch(t){return!0}return!1}(),St=function(t){if("undefined"==typeof window||!xt)return wt(t);try{return wt(t)}catch(t){return!1}},Et=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],jt=Et.length,Dt=function(t){return"[object Arguments]"===P(t)},Ot=Dt(arguments)?Dt:function(t){return null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&!W(t)&&O(t.callee)};k(n,{keys:function(t){var e=O(t),r=Ot(t),n=null!==t&&"object"==typeof t,o=n&&N(t);if(!n&&!e&&!r)throw new TypeError("Object.keys called on a non-object");var i=[],a=mt&&e;if(o&&bt||r)for(var l=0;l<t.length;++l)Y(i,s(l));if(!r)for(var c in t)a&&"prototype"===c||!J(t,c)||Y(i,s(c));if(vt)for(var u=St(t),f=0;f<jt;f++){var h=Et[f];u&&"constructor"===h||!J(t,h)||Y(i,h)}return i}});var Ct=n.keys&&function(){return 2===n.keys(arguments).length}(1,2),Mt=n.keys&&function(){var t=n.keys(arguments);return 1!==arguments.length||1!==t.length||1!==t[0]}(1),Nt=n.keys;k(n,{keys:function(t){return Nt(Ot(t)?Z(t):t)}},!Ct||Mt);var Ft,It,Ut=0!==new Date(-0xc782b5b342b24).getUTCMonth(),kt=new Date(-0x55d318d56a724),At=new Date(14496624e5),$t="Mon, 01 Jan -45875 11:59:59 GMT"!==kt.toUTCString();kt.getTimezoneOffset()<-720?(Ft="Tue Jan 02 -45875"!==kt.toDateString(),It=!/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(At.toString())):(Ft="Mon Jan 01 -45875"!==kt.toDateString(),It=!/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(At.toString()));var Rt=v.bind(Date.prototype.getFullYear),zt=v.bind(Date.prototype.getMonth),Jt=v.bind(Date.prototype.getDate),Pt=v.bind(Date.prototype.getUTCFullYear),Zt=v.bind(Date.prototype.getUTCMonth),Bt=v.bind(Date.prototype.getUTCDate),Ht=v.bind(Date.prototype.getUTCDay),Lt=v.bind(Date.prototype.getUTCHours),_t=v.bind(Date.prototype.getUTCMinutes),Yt=v.bind(Date.prototype.getUTCSeconds),qt=v.bind(Date.prototype.getUTCMilliseconds),Gt=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Wt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Xt=function(t,e){return Jt(new Date(e,t,0))};k(Date.prototype,{getFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Rt(this);return t<0&&zt(this)>11?t+1:t},getMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Rt(this),e=zt(this);return t<0&&e>11?0:e},getDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Rt(this),e=zt(this),r=Jt(this);return t<0&&e>11?12===e?r:Xt(0,t+1)-r+1:r},getUTCFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Pt(this);return t<0&&Zt(this)>11?t+1:t},getUTCMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Pt(this),e=Zt(this);return t<0&&e>11?0:e},getUTCDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Pt(this),e=Zt(this),r=Bt(this);return t<0&&e>11?12===e?r:Xt(0,t+1)-r+1:r}},Ut),k(Date.prototype,{toUTCString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Ht(this),e=Bt(this),r=Zt(this),n=Pt(this),o=Lt(this),i=_t(this),a=Yt(this);return Gt[t]+", "+(e<10?"0"+e:e)+" "+Wt[r]+" "+n+" "+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+" GMT"}},Ut||$t),k(Date.prototype,{toDateString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear();return Gt[t]+" "+Wt[r]+" "+(e<10?"0"+e:e)+" "+n}},Ut||Ft),(Ut||It)&&(Date.prototype.toString=function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear(),o=this.getHours(),i=this.getMinutes(),a=this.getSeconds(),s=this.getTimezoneOffset(),l=Math.floor(Math.abs(s)/60),c=Math.floor(Math.abs(s)%60);return Gt[t]+" "+Wt[r]+" "+(e<10?"0"+e:e)+" "+n+" "+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+" GMT"+(s>0?"-":"+")+(l<10?"0"+l:l)+(c<10?"0"+c:c)},U&&n.defineProperty(Date.prototype,"toString",{configurable:!0,enumerable:!1,writable:!0}));var Qt=-621987552e5,Vt="-000001",Kt=Date.prototype.toISOString&&-1===new Date(Qt).toISOString().indexOf(Vt),te=Date.prototype.toISOString&&"1969-12-31T23:59:59.999Z"!==new Date(-1).toISOString(),ee=v.bind(Date.prototype.getTime);k(Date.prototype,{toISOString:function(){if(!isFinite(this)||!isFinite(ee(this)))throw new RangeError("Date.prototype.toISOString called on non-finite value.");var t=Pt(this),e=Zt(this);t+=Math.floor(e/12);var r=[(e=(e%12+12)%12)+1,Bt(this),Lt(this),_t(this),Yt(this)];t=(t<0?"-":t>9999?"+":"")+H("00000"+Math.abs(t),0<=t&&t<=9999?-4:-6);for(var n=0;n<r.length;++n)r[n]=H("00"+r[n],-2);return t+"-"+Z(r,0,2).join("-")+"T"+Z(r,2).join(":")+"."+H("000"+qt(this),-3)+"Z"}},Kt||te),function(){try{return Date.prototype.toJSON&&null===new Date(NaN).toJSON()&&-1!==new Date(Qt).toJSON().indexOf(Vt)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(t){return!1}}()||(Date.prototype.toJSON=function(t){var e=n(this),r=R.ToPrimitive(e);if("number"==typeof r&&!isFinite(r))return null;var o=e.toISOString;if(!O(o))throw new TypeError("toISOString property is not callable");return o.call(e)});var re=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),ne=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z"));if(isNaN(Date.parse("2000-01-01T00:00:00.000Z"))||ne||!re){var oe=Math.pow(2,31)-1,ie=$(new Date(1970,0,1,0,0,0,oe+1).getTime());Date=function(t){var e=function(r,n,o,i,a,l,c){var u,f=arguments.length;if(this instanceof t){var h=l,p=c;if(ie&&f>=7&&c>oe){var d=Math.floor(c/oe)*oe,g=Math.floor(d/1e3);h+=g,p-=1e3*g}u=1===f&&s(r)===r?new t(e.parse(r)):f>=7?new t(r,n,o,i,a,h,p):f>=6?new t(r,n,o,i,a,h):f>=5?new t(r,n,o,i,a):f>=4?new t(r,n,o,i):f>=3?new t(r,n,o):f>=2?new t(r,n):f>=1?new t(r instanceof t?+r:r):new t}else u=t.apply(this,arguments);return A(u)||k(u,{constructor:e},!0),u},r=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),n=[0,31,59,90,120,151,181,212,243,273,304,334,365],o=function(t,e){var r=e>1?1:0;return n[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)},i=function(e){var r=0,n=e;if(ie&&n>oe){var o=Math.floor(n/oe)*oe,i=Math.floor(o/1e3);r+=i,n-=1e3*i}return c(new t(1970,0,1,0,0,r,n))};for(var a in t)J(t,a)&&(e[a]=t[a]);k(e,{now:t.now,UTC:t.UTC},!0),e.prototype=t.prototype,k(e.prototype,{constructor:e},!0);return k(e,{parse:function(e){var n=r.exec(e);if(n){var a,s=c(n[1]),l=c(n[2]||1)-1,u=c(n[3]||1)-1,f=c(n[4]||0),h=c(n[5]||0),p=c(n[6]||0),d=Math.floor(1e3*c(n[7]||0)),g=Boolean(n[4]&&!n[8]),y="-"===n[9]?1:-1,v=c(n[10]||0),m=c(n[11]||0);return f<(h>0||p>0||d>0?24:25)&&h<60&&p<60&&d<1e3&&l>-1&&l<12&&v<24&&m<60&&u>-1&&u<o(s,l+1)-o(s,l)&&(a=60*(24*(o(s,l)+u)+f+v*y),a=1e3*(60*(a+h+m*y)+p)+d,g&&(a=i(a)),-864e13<=a&&a<=864e13)?a:NaN}return t.parse.apply(this,arguments)}}),e}(Date)}Date.now||(Date.now=function(){return(new Date).getTime()});var ae=u.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0)),se={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(t,e){for(var r=-1,n=e;++r<se.size;)n+=t*se.data[r],se.data[r]=n%se.base,n=Math.floor(n/se.base)},divide:function(t){for(var e=se.size,r=0;--e>=0;)r+=se.data[e],se.data[e]=Math.floor(r/t),r=r%t*se.base},numToString:function(){for(var t=se.size,e="";--t>=0;)if(""!==e||0===t||0!==se.data[t]){var r=s(se.data[t]);""===e?e=r:e+=H("0000000",0,7-r.length)+r}return e},pow:function t(e,r,n){return 0===r?n:r%2==1?t(e,r-1,n*e):t(e*e,r/2,n)},log:function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}};k(u,{toFixed:function(t){var e,r,n,o,i,a,l,u;if(e=c(t),(e=$(e)?0:Math.floor(e))<0||e>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(r=c(this),$(r))return"NaN";if(r<=-1e21||r>=1e21)return s(r);if(n="",r<0&&(n="-",r=-r),o="0",r>1e-21)if(i=se.log(r*se.pow(2,69,1))-69,a=i<0?r*se.pow(2,-i,1):r/se.pow(2,i,1),a*=4503599627370496,(i=52-i)>0){for(se.multiply(0,a),l=e;l>=7;)se.multiply(1e7,0),l-=7;for(se.multiply(se.pow(10,l,1),0),l=i-1;l>=23;)se.divide(1<<23),l-=23;se.divide(1<<l),se.multiply(1,1),se.divide(2),o=se.numToString()}else se.multiply(0,a),se.multiply(1<<-i,0),o=se.numToString()+H("0.00000000000000000000",2,2+e);return o=e>0?(u=o.length)<=e?n+H("0.0000000000000000000",0,e-u+2)+o:n+H(o,0,u-e)+"."+H(o,u-e):n+o}},ae);var le=function(){try{return"1"===1..toPrecision(void 0)}catch(t){return!0}}(),ce=u.toPrecision;k(u,{toPrecision:function(t){return void 0===t?ce.call(this):ce.call(this,t)}},le),2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?function(){var e=void 0===/()??/.exec("")[1],r=Math.pow(2,32)-1;l.split=function(n,o){var i=String(this);if(void 0===n&&0===o)return[];if(!t(n))return L(this,n,o);var a,s,l,c,u=[],f=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),h=0,d=new RegExp(n.source,f+"g");e||(a=new RegExp("^"+d.source+"$(?!\\s)",f));var g=void 0===o?r:R.ToUint32(o);for(s=d.exec(i);s&&!((l=s.index+s[0].length)>h&&(Y(u,H(i,h,s.index)),!e&&s.length>1&&s[0].replace(a,function(){for(var t=1;t<arguments.length-2;t++)void 0===arguments[t]&&(s[t]=void 0)}),s.length>1&&s.index<i.length&&p.apply(u,Z(s,1)),c=s[0].length,h=l,u.length>=g));)d.lastIndex===s.index&&d.lastIndex++,s=d.exec(i);return h===i.length?!c&&d.test("")||Y(u,""):Y(u,H(i,h)),u.length>g?Z(u,0,g):u}}():"0".split(void 0,0).length&&(l.split=function(t,e){return void 0===t&&0===e?[]:L(this,t,e)});var ue=l.replace;(function(){var t=[];return"x".replace(/x(.)?/g,function(e,r){Y(t,r)}),1===t.length&&void 0===t[0]})()||(l.replace=function(e,r){var n=O(r),o=t(e)&&/\)[*?]/.test(e.source);if(n&&o){return ue.call(this,e,function(t){var n=arguments.length,o=e.lastIndex;e.lastIndex=0;var i=e.exec(t)||[];return e.lastIndex=o,Y(i,arguments[n-2],arguments[n-1]),r.apply(this,i)})}return ue.call(this,e,r)});var fe=l.substr,he="".substr&&"b"!=="0b".substr(-1);k(l,{substr:function(t,e){var r=t;return t<0&&(r=b(this.length+t,0)),fe.call(this,r,e)}},he);var pe="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",de="["+pe+"]",ge=new RegExp("^"+de+de+"*"),ye=new RegExp(de+de+"*$"),ve=l.trim&&(pe.trim()||!"​".trim());k(l,{trim:function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return s(this).replace(ge,"").replace(ye,"")}},ve);var me=v.bind(String.prototype.trim),be=l.lastIndexOf&&-1!=="abcあい".lastIndexOf("あい",2);k(l,{lastIndexOf:function(t){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");for(var e=s(this),r=s(t),n=arguments.length>1?c(arguments[1]):NaN,o=$(n)?1/0:R.ToInteger(n),i=w(b(o,0),e.length),a=r.length,l=i+a;l>0;){l=b(0,l-a);var u=_(H(e,l,i+a),r);if(-1!==u)return l+u}return-1}},be);var we=l.lastIndexOf;if(k(l,{lastIndexOf:function(t){return we.apply(this,arguments)}},1!==l.lastIndexOf.length),8===parseInt(pe+"08")&&22===parseInt(pe+"0x16")||(parseInt=function(t){var e=/^[\-+]?0[xX]/;return function(r,n){var o=me(String(r)),i=c(n)||(e.test(o)?16:10);return t(o,i)}}(parseInt)),1/parseFloat("-0")!=-1/0&&(parseFloat=function(t){return function(e){var r=me(String(e)),n=t(r);return 0===n&&"-"===H(r,0,1)?-0:n}}(parseFloat)),"RangeError: test"!==String(new RangeError("test"))){Error.prototype.toString=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");var t=this.name;void 0===t?t="Error":"string"!=typeof t&&(t=s(t));var e=this.message;return void 0===e?e="":"string"!=typeof e&&(e=s(e)),t?e?t+": "+e:t:e}}if(U){var Te=function(t,e){if(q(t,e)){var r=Object.getOwnPropertyDescriptor(t,e);r.configurable&&(r.enumerable=!1,Object.defineProperty(t,e,r))}};Te(Error.prototype,"message"),""!==Error.prototype.message&&(Error.prototype.message=""),Te(Error.prototype,"name")}if("/a/gim"!==String(/a/gim)){RegExp.prototype.toString=function(){var t="/"+this.source+"/";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),t}}}),function(t,e){function r(t,e){var r=t.createElement("p"),n=t.getElementsByTagName("head")[0]||t.documentElement;return r.innerHTML="x<style>"+e+"</style>",n.insertBefore(r.lastChild,n.firstChild)}function n(){var t=y.elements;return"string"==typeof t?t.split(" "):t}function o(t){var e=g[t[p]];return e||(e={},d++,t[p]=d,g[d]=e),e}function i(t,r,n){if(r||(r=e),c)return r.createElement(t);n||(n=o(r));var i;return!(i=n.cache[t]?n.cache[t].cloneNode():h.test(t)?(n.cache[t]=n.createElem(t)).cloneNode():n.createElem(t)).canHaveChildren||f.test(t)||i.tagUrn?i:n.frag.appendChild(i)}function a(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(r){return y.shivMethods?i(r,t,e):e.createElem(r)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(y,e.frag)}function s(t){t||(t=e);var n=o(t);return!y.shivCSS||l||n.hasCSS||(n.hasCSS=!!r(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||a(t,n),t}var l,c,u=t.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",d=0,g={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,c=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return void 0===t.cloneNode||void 0===t.createDocumentFragment||void 0===t.createElement}()}catch(t){l=!0,c=!0}}();var y={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==u.shivCSS,supportsUnknownElements:c,shivMethods:!1!==u.shivMethods,type:"default",shivDocument:s,createElement:i,createDocumentFragment:function(t,r){if(t||(t=e),c)return t.createDocumentFragment();for(var i=(r=r||o(t)).frag.cloneNode(),a=0,s=n(),l=s.length;l>a;a++)i.createElement(s[a]);return i},addElements:function(t,e){var r=y.elements;"string"!=typeof r&&(r=r.join(" ")),"string"!=typeof t&&(t=t.join(" ")),y.elements=r+" "+t,s(e)}};t.html5=y,s(e),"object"==typeof module&&module.exports&&(module.exports=y)}("undefined"!=typeof window?window:this,document),function(){function t(e,n){function i(t,e){try{t()}catch(t){e&&e()}}function a(t){if(null!=a[t])return a[t];var e;if("bug-string-char-index"==t)e="a"!="a"[0];else if("json"==t)e=a("json-stringify")&&a("date-serialization")&&a("json-parse");else if("date-serialization"==t){if(e=a("json-stringify")&&m){var r=n.stringify;i(function(){e='"-271821-04-20T00:00:00.000Z"'==r(new u(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==r(new u(864e13))&&'"-000001-01-01T00:00:00.000Z"'==r(new u(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==r(new u(-1))})}}else{var o;if("json-stringify"==t){var c="function"==typeof(r=n.stringify);c&&((o=function(){return 1}).toJSON=o,i(function(){c="0"===r(0)&&"0"===r(new s)&&'""'==r(new l)&&r(y)===g&&r(g)===g&&r()===g&&"1"===r(o)&&"[1]"==r([o])&&"[null]"==r([g])&&"null"==r(null)&&"[null,null,null]"==r([g,y,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==r({a:[o,!0,!1,null,"\0\b\n\f\r\t"]})&&"1"===r(null,o)&&"[\n 1,\n 2\n]"==r([1,2],null,1)},function(){c=!1})),e=c}if("json-parse"==t){var f,h=n.parse;"function"==typeof h&&i(function(){0===h("0")&&!h(!1)&&(o=h('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'),f=5==o.a.length&&1===o.a[0])&&(i(function(){f=!h('"\t"')}),f&&i(function(){f=1!==h("01")}),f&&i(function(){f=1!==h("1.")}))},function(){f=!1}),e=f}}return a[t]=!!e}e||(e=o.Object()),n||(n=o.Object());var s=e.Number||o.Number,l=e.String||o.String,c=e.Object||o.Object,u=e.Date||o.Date,f=e.SyntaxError||o.SyntaxError,h=e.TypeError||o.TypeError,p=e.Math||o.Math,d=e.JSON||o.JSON;"object"==typeof d&&d&&(n.stringify=d.stringify,n.parse=d.parse);var g,y=(c=c.prototype).toString,v=c.hasOwnProperty,m=new u(-0xc782b5b800cec);if(i(function(){m=-109252==m.getUTCFullYear()&&0===m.getUTCMonth()&&1===m.getUTCDate()&&10==m.getUTCHours()&&37==m.getUTCMinutes()&&6==m.getUTCSeconds()&&708==m.getUTCMilliseconds()}),a["bug-string-char-index"]=a["date-serialization"]=a.json=a["json-stringify"]=a["json-parse"]=null,!a("json")){var b=a("bug-string-char-index"),w=function(t,e){var n,o,i,a=0;(n=function(){this.valueOf=0}).prototype.valueOf=0,o=new n;for(i in o)v.call(o,i)&&a++;return n=o=null,a?w=function(t,e){var r,n,o="[object Function]"==y.call(t);for(r in t)o&&"prototype"==r||!v.call(t,r)||(n="constructor"===r)||e(r);(n||v.call(t,r="constructor"))&&e(r)}:(o="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),w=function(t,e){var n,i="[object Function]"==y.call(t),a=!i&&"function"!=typeof t.constructor&&r[typeof t.hasOwnProperty]&&t.hasOwnProperty||v;for(n in t)i&&"prototype"==n||!a.call(t,n)||e(n);for(i=o.length;n=o[--i];a.call(t,n)&&e(n));}),w(t,e)};if(!a("json-stringify")||!a(" date-serialization")){var T={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},x=function(t,e){return("000000"+(e||0)).slice(-t)},S=function(t){t=t.charCodeAt(0);var e=T[t];return e||"\\u00"+x(2,t.toString(16))},E=/[\x00-\x1f\x22\x5c]/g,j=function(t){return E.lastIndex=0,'"'+(E.test(t)?t.replace(E,S):t)+'"'},D=function(t){var e,r,n,o,i,a,s,l,c;if(m)e=function(t){r=t.getUTCFullYear(),n=t.getUTCMonth(),o=t.getUTCDate(),a=t.getUTCHours(),s=t.getUTCMinutes(),l=t.getUTCSeconds(),c=t.getUTCMilliseconds()};else{var u=p.floor,f=[0,31,59,90,120,151,181,212,243,273,304,334],h=function(t,e){return f[e]+365*(t-1970)+u((t-1969+(e=+(1<e)))/4)-u((t-1901+e)/100)+u((t-1601+e)/400)};e=function(t){for(o=u(t/864e5),r=u(o/365.2425)+1970-1;h(r+1,0)<=o;r++);for(n=u((o-h(r,0))/30.42);h(r,n+1)<=o;n++);o=1+o-h(r,n),a=u((i=(t%864e5+864e5)%864e5)/36e5)%24,s=u(i/6e4)%60,l=u(i/1e3)%60,c=i%1e3}}return(D=function(t){return t>-1/0&&t<1/0?(e(t),t=(0>=r||1e4<=r?(0>r?"-":"+")+x(6,0>r?-r:r):x(4,r))+"-"+x(2,n+1)+"-"+x(2,o)+"T"+x(2,a)+":"+x(2,s)+":"+x(2,l)+"."+x(3,c)+"Z",r=n=o=a=s=l=c=null):t=null,t})(t)},O=function(t,e,r,n,o,a,s){var l,c,f,p,d,v;if(i(function(){l=e[t]}),"object"==typeof l&&l&&(l.getUTCFullYear&&"[object Date]"==y.call(l)&&l.toJSON===u.prototype.toJSON?l=D(l):"function"==typeof l.toJSON&&(l=l.toJSON(t))),r&&(l=r.call(e,t,l)),l==g)return l===g?l:"null";switch("object"==(c=typeof l)&&(f=y.call(l)),f||c){case"boolean":case"[object Boolean]":return""+l;case"number":case"[object Number]":return l>-1/0&&l<1/0?""+l:"null";case"string":case"[object String]":return j(""+l)}if("object"==typeof l){for(c=s.length;c--;)if(s[c]===l)throw h();if(s.push(l),p=[],v=a,a+=o,"[object Array]"==f){for(d=0,c=l.length;d<c;d++)f=O(d,l,r,n,o,a,s),p.push(f===g?"null":f);c=p.length?o?"[\n"+a+p.join(",\n"+a)+"\n"+v+"]":"["+p.join(",")+"]":"[]"}else w(n||l,function(t){var e=O(t,l,r,n,o,a,s);e!==g&&p.push(j(t)+":"+(o?" ":"")+e)}),c=p.length?o?"{\n"+a+p.join(",\n"+a)+"\n"+v+"}":"{"+p.join(",")+"}":"{}";return s.pop(),c}};n.stringify=function(t,e,n){var o,i,a,s;if(r[typeof e]&&e)if("[object Function]"==(s=y.call(e)))i=e;else if("[object Array]"==s){a={};for(var l,c=0,u=e.length;c<u;l=e[c++],("[object String]"==(s=y.call(l))||"[object Number]"==s)&&(a[l]=1));}if(n)if("[object Number]"==(s=y.call(n))){if(0<(n-=n%1))for(o="",10<n&&(n=10);o.length<n;o+=" ");}else"[object String]"==s&&(o=10>=n.length?n:n.slice(0,10));return O("",(l={},l[""]=t,l),i,a,o,"",[])}}if(!a("json-parse")){var C,M,N=l.fromCharCode,F={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},I=function(){throw C=M=null,f()},U=function(){for(var t,e,r,n,o,i=M,a=i.length;C<a;)switch(o=i.charCodeAt(C)){case 9:case 10:case 13:case 32:C++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=b?i.charAt(C):i[C],C++,t;case 34:for(t="@",C++;C<a;)if(32>(o=i.charCodeAt(C)))I();else if(92==o)switch(o=i.charCodeAt(++C)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=F[o],C++;break;case 117:for(e=++C,r=C+4;C<r;C++)48<=(o=i.charCodeAt(C))&&57>=o||97<=o&&102>=o||65<=o&&70>=o||I();t+=N("0x"+i.slice(e,C));break;default:I()}else{if(34==o)break;for(o=i.charCodeAt(C),e=C;32<=o&&92!=o&&34!=o;)o=i.charCodeAt(++C);t+=i.slice(e,C)}if(34==i.charCodeAt(C))return C++,t;I();default:if(e=C,45==o&&(n=!0,o=i.charCodeAt(++C)),48<=o&&57>=o){for(48==o&&48<=(o=i.charCodeAt(C+1))&&57>=o&&I();C<a&&48<=(o=i.charCodeAt(C))&&57>=o;C++);if(46==i.charCodeAt(C)){for(r=++C;r<a&&48<=(o=i.charCodeAt(r))&&57>=o;r++);r==C&&I(),C=r}if(101==(o=i.charCodeAt(C))||69==o){for(43!=(o=i.charCodeAt(++C))&&45!=o||C++,r=C;r<a&&48<=(o=i.charCodeAt(r))&&57>=o;r++);r==C&&I(),C=r}return+i.slice(e,C)}if(n&&I(),"true"==(t=i.slice(C,C+4)))return C+=4,!0;if("fals"==t&&101==i.charCodeAt(C+4))return C+=5,!1;if("null"==t)return C+=4,null;I()}return"$"},k=function(t){var e,r;if("$"==t&&I(),"string"==typeof t){if("@"==(b?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];"]"!=(t=U());)r?","==t?"]"==(t=U())&&I():I():r=!0,","==t&&I(),e.push(k(t));return e}if("{"==t){for(e={};"}"!=(t=U());)r?","==t?"}"==(t=U())&&I():I():r=!0,","!=t&&"string"==typeof t&&"@"==(b?t.charAt(0):t[0])&&":"==U()||I(),e[t.slice(1)]=k(U());return e}I()}return t},A=function(t,e,r){(r=$(t,e,r))===g?delete t[e]:t[e]=r},$=function(t,e,r){var n,o=t[e];if("object"==typeof o&&o)if("[object Array]"==y.call(o))for(n=o.length;n--;A(o,n,r));else w(o,function(t){A(o,t,r)});return r.call(t,e,o)};n.parse=function(t,e){var r,n;return C=0,M=""+t,r=k(U()),"$"!=U()&&I(),C=M=null,e&&"[object Function]"==y.call(e)?$((n={},n[""]=r,n),"",e):r}}}return n.runInContext=t,n}var e="function"==typeof define&&define.amd,r={function:!0,object:!0},n=r[typeof exports]&&exports&&!exports.nodeType&&exports,o=r[typeof window]&&window||this,i=n&&r[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!i||i.global!==i&&i.window!==i&&i.self!==i||(o=i),n&&!e)t(o,n);else{var a=o.JSON,s=o.JSON3,l=!1,c=t(o,o.JSON3={noConflict:function(){return l||(l=!0,o.JSON=a,o.JSON3=s,a=s=null),c}});o.JSON={parse:c.parse,stringify:c.stringify}}e&&define(function(){return c})}.call(this),function(t){"use strict";t.matchMedia=t.matchMedia||function(t){var e,r=t.documentElement,n=r.firstElementChild||r.firstChild,o=t.createElement("body"),i=t.createElement("div");return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(i),function(t){return i.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',r.insertBefore(o,n),e=42===i.offsetWidth,r.removeChild(o),{matches:e,media:t}}}(t.document)}(this),function(t){"use strict";function e(){w(!0)}var r={};t.respond=r,r.update=function(){};var n=[],o=function(){var e=!1;try{e=new t.XMLHttpRequest}catch(r){e=new t.ActiveXObject("Microsoft.XMLHTTP")}return function(){return e}}(),i=function(t,e){var r=o();r&&(r.open("GET",t,!0),r.onreadystatechange=function(){4!==r.readyState||200!==r.status&&304!==r.status||e(r.responseText)},4!==r.readyState&&r.send(null))},a=function(t){return t.replace(r.regex.minmaxwh,"").match(r.regex.other)};if(r.ajax=i,r.queue=n,r.unsupportedmq=a,r.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},r.mediaQueriesSupported=t.matchMedia&&null!==t.matchMedia("only all")&&t.matchMedia("only all").matches,!r.mediaQueriesSupported){var s,l,c,u=t.document,f=u.documentElement,h=[],p=[],d=[],g={},y=u.getElementsByTagName("head")[0]||f,v=u.getElementsByTagName("base")[0],m=y.getElementsByTagName("link"),b=function(){var t,e=u.createElement("div"),r=u.body,n=f.style.fontSize,o=r&&r.style.fontSize,i=!1;return e.style.cssText="position:absolute;font-size:1em;width:1em",r||(r=i=u.createElement("body"),r.style.background="none"),f.style.fontSize="100%",r.style.fontSize="100%",r.appendChild(e),i&&f.insertBefore(r,f.firstChild),t=e.offsetWidth,i?f.removeChild(r):r.removeChild(e),f.style.fontSize=n,o&&(r.style.fontSize=o),t=c=parseFloat(t)},w=function(e){var r="clientWidth",n=f[r],o="CSS1Compat"===u.compatMode&&n||u.body[r]||n,i={},a=m[m.length-1],g=(new Date).getTime();if(e&&s&&30>g-s)return t.clearTimeout(l),void(l=t.setTimeout(w,30));s=g;for(var v in h)if(h.hasOwnProperty(v)){var T=h[v],x=T.minw,S=T.maxw,E=null===x,j=null===S;x&&(x=parseFloat(x)*(x.indexOf("em")>-1?c||b():1)),S&&(S=parseFloat(S)*(S.indexOf("em")>-1?c||b():1)),T.hasquery&&(E&&j||!(E||o>=x)||!(j||S>=o))||(i[T.media]||(i[T.media]=[]),i[T.media].push(p[T.rules]))}for(var D in d)d.hasOwnProperty(D)&&d[D]&&d[D].parentNode===y&&y.removeChild(d[D]);d.length=0;for(var O in i)if(i.hasOwnProperty(O)){var C=u.createElement("style"),M=i[O].join("\n");C.type="text/css",C.media=O,y.insertBefore(C,a.nextSibling),C.styleSheet?C.styleSheet.cssText=M:C.appendChild(u.createTextNode(M)),d.push(C)}},T=function(t,e,n){var o=t.replace(r.regex.comments,"").replace(r.regex.keyframes,"").match(r.regex.media),i=o&&o.length||0;e=e.substring(0,e.lastIndexOf("/"));var s=function(t){return t.replace(r.regex.urls,"$1"+e+"$2$3")},l=!i&&n;e.length&&(e+="/"),l&&(i=1);for(var c=0;i>c;c++){var u,f,d,g;l?(u=n,p.push(s(t))):(u=o[c].match(r.regex.findStyles)&&RegExp.$1,p.push(RegExp.$2&&s(RegExp.$2))),g=(d=u.split(",")).length;for(var y=0;g>y;y++)f=d[y],a(f)||h.push({media:f.split("(")[0].match(r.regex.only)&&RegExp.$2||"all",rules:p.length-1,hasquery:f.indexOf("(")>-1,minw:f.match(r.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:f.match(r.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}w()},x=function(){if(n.length){var e=n.shift();i(e.href,function(r){T(r,e.href,e.media),g[e.href]=!0,t.setTimeout(function(){x()},0)})}},S=function(){for(var e=0;e<m.length;e++){var r=m[e],o=r.href,i=r.media,a=r.rel&&"stylesheet"===r.rel.toLowerCase();o&&a&&!g[o]&&(r.styleSheet&&r.styleSheet.rawCssText?(T(r.styleSheet.rawCssText,o,i),g[o]=!0):(!/^([a-zA-Z:]*\/\/)/.test(o)&&!v||o.replace(RegExp.$1,"").split("/")[0]===t.location.host)&&("//"===o.substring(0,2)&&(o=t.location.protocol+o),n.push({href:o,media:i})))}x()};S(),r.update=S,r.getEmValue=b,t.addEventListener?t.addEventListener("resize",e,!1):t.attachEvent&&t.attachEvent("onresize",e)}}(this),function(){if("Microsoft Internet Explorer"!=navigator.appName||"MSIE8.0"!=navigator.appVersion.split(";")[1].replace(/[ ]/g,"")){var t=document.createElement("link");t.href="/assets/lib/ie/ieupdate/ie_popup.css",t.rel="stylesheet",t.type="text/css",document.getElementsByTagName("head").item(0).appendChild(t);var e=document.createElement("div");e.className+="blackout";var r=['<div id="ie_popup">'];r.push("<h1>您正在使用Internet Explorer版本太低</h1>"),r.push("<p>建议您升级到 Internet Explorer 8+ 或以下其它浏览器：</p>"),r.push('<ul class="browsers_list big">'),r.push('<li><a href="http://www.baidu.com/s?wd=google%E6%B5%8F%E8%A7%88%E5%99%A8" target="_blank" class="download_link chrome"><span class="caption">Chrome</span></a></li>'),r.push('<li><a href="http://www.mozilla.org/" target="_blank" class="download_link firefox"><span class="caption">Firefox</span></a></li>'),r.push('<li><a href="http://windows.microsoft.com/ie" target="_blank" class="download_link ie"><span class="caption">IE 8+</span></a></li>'),r.push("</ul>"),r.push("</div>"),e.innerHTML=r.join(""),window.onload=function(){document.body.appendChild(e)},window.onerror=function(){return console.log("error:您正在使用Internet Explorer版本太低,需要IE8+"),!0}}}();