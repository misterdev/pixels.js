!function(a,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],t):"object"==typeof exports?exports.filterMagic=t(require("lodash")):a.filterMagic=t(a._)}(this,function(a){return function(a){var t={};function n(d){if(t[d])return t[d].exports;var r=t[d]={i:d,l:!1,exports:{}};return a[d].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=a,n.c=t,n.d=function(a,t,d){n.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:d})},n.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,t){if(1&t&&(a=n(a)),8&t)return a;if(4&t&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)n.d(d,r,function(t){return a[t]}.bind(null,r));return d},n.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(t,"a",t),t},n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},n.p="",n(n.s=0)}([function(a,t,n){"use strict";(function(d){Object.defineProperty(t,"__esModule",{value:!0});var r;!function(a){a&&a.__esModule}(n(2));function e(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}var o=void 0,u=void 0,i=void 0;var f=function(){a.exports=!1;try{return a.exports="[object process]"===Object.prototype.toString.call(d.process),console.log("Cannot use browser functions in Node!"),!1}catch(a){return!0}},l=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=255-r.data[o],r.data[o+1]=255-r.data[o+1];return r},c=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=255-r.data[o],r.data[o+2]=255-r.data[o+2];return r},h=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+20,r.data[o+1]=a+30,r.data[o+2]=a+60}return r},g=function(){for(o=0;o<r.data.length;o+=4){r.data[o+1]=void 0==r.data[o+100]?0:r.data[o+20]}return r},s=function(){for(o=0;o<r.data.length;o+=4){r.data[o+2]=void 0==r.data[o+100]?0:r.data[o+20]}return r},v=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=255-r.data[o];return r},m=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=r.data[o+2],r.data[o+1]=r.data[o+1],r.data[o+2]=r.data[o];return r},p=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.4*Math.random(),t=.6+.4*Math.random(),n=.6+.4*Math.random();r.data[o]=.99*r.data[o]*a,r.data[o+1]=.99*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*n}return r},_=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.6*Math.random(),t=.6+.4*Math.random(),n=.6+.4*Math.random();r.data[o]=.99*r.data[o]*a,r.data[o+1]=.99*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*n}return r},M=function(){for(o=0;o<r.data.length;o+=4)r.data[o+1]=255-r.data[o+1];return r},y=function(){for(o=0;o<r.data.length;o+=4)r.data[o+2]=255-r.data[o+2];return r},b=function(){for(o=0;o<r.data.length;o+=4)r.data[o]-=20,r.data[o+1]-=20,r.data[o+2]-=20;return r},w=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=50,r.data[o+1]+=50,r.data[o+2]+=50;return r},x=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a,r.data[o+1]=a,r.data[o+2]=a}return r},j=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+100,r.data[o+1]=a+40,r.data[o+2]=a+20}return r},O=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+20,r.data[o+1]=a+70,r.data[o+2]=a+20}return r},k=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a+=1)>255&&(a=0);var t=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=t+a,r.data[o+1]=t+70,r.data[o+2]=t+20}return r},P=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a+=20)>255&&(a=0);var t=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=t+a,r.data[o+1]=t+70,r.data[o+2]=t+20}return r},S=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a+=20)>255&&(a=0);var t=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=t+5,r.data[o+1]=t+a,r.data[o+2]=t+20}return r},I=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a+=200)>255&&(a=0);var t=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=t+5,r.data[o+1]=t+a,r.data[o+2]=t+20}return r},z=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a=Ma(0,255))>255&&(a=0);var t=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=t+a,r.data[o+1]=t+2,r.data[o+2]=t+5}return r},C=function(){var a=0,t=0;for(o=0;o<r.data.length;o+=4){a=Ma(0,255),t=Ma(0,255),a>255&&(a=0);var n=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=n+a,r.data[o+1]=n+t,r.data[o+2]=n+5}return r},D=function(){var a=0,t=0;for(o=0;o<r.data.length;o+=4){o=Ma(0,r.data.length),a=Ma(0,255),t=Ma(0,255),inc3=Ma(0,255),a>255&&(a=0);var n=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=n+a,r.data[o+1]=n+t,r.data[o+2]=n+5}return r},q=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=255-r.data[o],r.data[o+1]=255-r.data[o+1],r.data[o+2]=255-r.data[o+2];return r},N=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=200-r.data[o];return r},T=function(){for(o=0;o<r.data.length;o+=4)r.data[o+1]=255-r.data[o+1];return r},E=function(){for(o=0;o<r.data.length;o+=4)r.data[o+2]=255-r.data[o+2];return r},F=function(){for(o=0;o<r.data.length;o+=4)r.data[o+1]=120-r.data[o+1],r.data[o+2]=100-r.data[o+2];return r},R=function(){for(o=0;o<r.data.length;o+=4)r.data[o+1]=60-r.data[o+1],r.data[o+2]=100-r.data[o+2];return r},A=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+80,r.data[o+1]=a+20,r.data[o+2]=a+31}return r},B=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+4,r.data[o+1]=a+3,r.data[o+2]=a+12}return r},G=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+90,r.data[o+1]=a+40,r.data[o+2]=a+80}return r},H=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+5,r.data[o+1]=a+40,r.data[o+2]=a+20}return r},J=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+18,r.data[o+1]=a+12,r.data[o+2]=a+20}return r},K=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=10,r.data[o+1]+=20,r.data[o+2]+=90;return r},L=function(){for(o=0;o<r.data.length;o+=4)r.data[o]-=150,r.data[o+1]-=150,r.data[o+2]-=150;return r},Q=function(){for(o=0;o<r.data.length;o+=4){var a=Ma(0,100);a>10&&a<13&&(r.data[o]=120,r.data[o+1]=120,r.data[o+2]=120);var t=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=t+100,r.data[o+1]=t+40,r.data[o+2]=t+20}return r},U=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=Ma(0,100),r.data[o+1]+=20,r.data[o+2]+=Ma(0,255);return r},V=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=80,r.data[o+1]+=40,r.data[o+2]+=120;return r},W=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=10,r.data[o+1]+=40,r.data[o+2]+=90;return r},X=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=90,r.data[o+1]+=10,r.data[o+2]+=90;return r},Y=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=90,r.data[o+1]+=90,r.data[o+2]+=10;return r},Z=function(){for(o=0;o<r.data.length;o+=4)r.data[o+2]=120-r.data[o+2];return r},$=function(){var a;for(o=0;o<r.data.length;o+=4){(a=Ma(0,200))>0&&a<50?(u=20,i=30):a>49&&a<100?(u=10,i=90):(u=30,i=10),r.data[o]+=u,r.data[o+1]+=i,r.data[o+2]+=u}return r},aa=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a=Ma(0,200))>0&&a<50?(u=20,i=30):a>49&&a<100?(u=10,i=90):(u=30,i=10),r.data[o]+0>255?r.data[o]-=0:r.data[o]+=0,r.data[o+1]+0>255?r.data[o+1]-=i:r.data[o]+=i}return r},ta=function(){var a;for(o=0;o<r.data.length;o+=4){(a=Ma(0,200))>0&&a<50?(u=20,i=30):a>49&&a<100?(u=10,i=90):(u=30,i=10),r.data[o]-void 0>255?r.data[o]-=void 0:r.data[o]+=void 0,r.data[o+1]+void 0>255?r.data[o+1]-=i:r.data[o+1]+=i}return r},na=function(){var a=0;for(o=0;o<r.data.length;o+=4)(a=Ma(0,200))>0&&a<50?(u=0,i=30):a>49&&a<100?(u=100,i=90):(u=70,i=10),r.data[o]-void 0>255?r.data[o]-=void 0:r.data[o]+=void 0,r.data[o+1]+void 0>255?r.data[o+1]-=i:r.data[o+2]+=i;return r},da=function(){var a=0;for(o=0;o<r.data.length;o+=4){var t=0,n=0;(a=Ma(0,200))>0&&a<50?(t=20,n=30):a>49&&a<100?(t=20,n=90):(t=10,n=50),r.data[o]-t>255?r.data[o]-=t:r.data[o]+=t,r.data[o+2]+n>255?r.data[o+2]-=n:r.data[o+2]+=n}return r},ra=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=120,r.data[o+1]+=70,r.data[o+2]+=13;return r},ea=function(){for(o=0;o<r.data.length;o+=4){var a=Ma(0,200);a>0&&a<10?(r.data[o]=Ma(0,255),r.data[o+1]=Ma(0,255),r.data[o+2]=Ma(0,255)):(r.data[o]+=10,r.data[o+1]+=20,r.data[o+2]+=90)}return r},oa=function(){for(o=0;o<r.data.length;o+=4)r.data[o]-=150,r.data[o+1]-=150,r.data[o+2]-=150;return r},ua=function(){for(o=0;o<r.data.length;o+=4)r.data[o]-=60,r.data[o+1]-=60,r.data[o+2]-=60;return r},ia=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a=Ma(0,200))>0&&a<50?(u=0,i=30):a>49&&a<100?(u=100,i=90):(u=70,i=10),r.data[o]-0>255?r.data[o]-=0:r.data[o]+=0,r.data[o+1]+0>255?r.data[o+1]-=i:r.data[o+2]+=i}return r},fa=function(){for(o=0;o<r.data.length;o+=4)r.data[o+1]=r.data[o]+50;return r},la=function(){for(o=0;o<r.data.length;o+=4)r.data[o+2]=r.data[o+1]+50;return r},ca=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=r.data[o+2],r.data[o+2]=r.data[o+1]+50;return r},ha=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.5*Math.random(),t=.6+.5*Math.random(),n=.6+.5*Math.random();r.data[o]=.5*r.data[o+1]*a,r.data[o+1]=.99*r.data[o+2]*t,r.data[o+2]=.99*r.data[o]*n}return r},ga=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.5*Math.random(),t=.6+.5*Math.random(),n=.6+.5*Math.random();r.data[o]=.5*r.data[o]*a,r.data[o+1]=.3*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*n}return r},sa=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.1*Math.random(),t=.6+.5*Math.random(),n=.6+.5*Math.random();r.data[o]=.99*r.data[o]*a,r.data[o+1]=.99*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*n}return r},va=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.1*Math.random(),t=.6+.2*Math.random(),n=.6+.7*Math.random();r.data[o]=.99*r.data[o]*a,r.data[o+1]=.99*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*n}return r},ma=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.1*Math.random(),t=.6+.5*Math.random(),n=.6+.4*Math.random();r.data[o]=.99*r.data[o]*a,r.data[o+1]=.99*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*n}return r},pa=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.6*Math.random(),t=.6+.1*Math.random(),n=.6+.4*Math.random();r.data[o]=.99*r.data[o]*a,r.data[o+1]=.99*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*n}return r},_a=function(a){var t=document.createElement("canvas");t.height=a.height,t.width=a.width;var n=t.getContext("2d"),d=n.createPattern(a,"no-repeat");return n.fillStyle=d,n.fillRect(0,0,t.width,t.height),[t,n]},Ma=function(a,t){return Math.floor(Math.random()*(t-a+1))+a};t.default=function(){var a,t=(e(a={a:ia,offset_blue:s,offset_green:g,solange_grey:m,invert:q,lemon:fa,coral:la,dark_purple_min_noise:ga,green_med_noise:ha,teal_min_noise:sa,blue_min_noise:va,green_min_noise:ma},"green_med_noise",ha),e(a,"pink_min_noise",pa),e(a,"red_min_noise",_),e(a,"min_noise",p),e(a,"pane",I),e(a,"add_horizontal_lines",k),e(a,"add_diagonal_lines",P),e(a,"add_green_diagonal_lines",S),e(a,"greengreyscale",O),e(a,"darkify",b),e(a,"incbrightness",w),e(a,"cool_twilight",M),e(a,"blues",y),e(a,"ryo",c),e(a,"lix",l),e(a,"casino",z),e(a,"yellow_casino",C),e(a,"specks",D),e(a,"sat_adj",L),e(a,"noise_centre",U),e(a,"greenspecks",$),e(a,"eclectic",aa),e(a,"matrix",ta),e(a,"cosmic",na),e(a,"solange_dark",N),e(a,"solange",v),e(a,"zapt",T),e(a,"neue",E),e(a,"eon",F),e(a,"aeon",R),e(a,"ocean",K),e(a,"confetti",ea),e(a,"horizon",oa),e(a,"rosetint",A),e(a,"slate",B),e(a,"purplescale",G),e(a,"redgreyscale",j),e(a,"radio",H),e(a,"specks_redscale",Q),e(a,"twenties",J),e(a,"greyscale",x),e(a,"mellow",Z),e(a,"vintage",ra),e(a,"evening",ua),e(a,"bluegreyscale",h),e(a,"perfume",V),e(a,"pink_aura",X),e(a,"serenity",W),e(a,"bluegreyscale",h),e(a,"retroviolet",da),e(a,"haze",Y),e(a,"frontward",ca),a);return{filterImg:function(a,n){var d=f();if(console.log(d),d){console.log("In browser");var e=_a(a),o=e[0],u=e[1];r=u.getImageData(0,0,o.width,o.height),console.log(r);var i=t[n]();console.log(i),u.putImageData(r,0,0),console.log(o,a),a.parentNode.replaceChild(o,a)}else console.log("In node")},filterImgData:function(a,n){return r=a,t[n]()}}}(),a.exports=t.default}).call(this,n(1))},function(a,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(a){"object"==typeof window&&(n=window)}a.exports=n},function(t,n){t.exports=a}])});