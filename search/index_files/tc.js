//v83 © 2012 Tynt

Tynt=window.Tynt||[];
if(typeof Tynt.TCL=="undefined"){(function(){var ea=function(){function I(a){var b=I.options;a=b.parser[b.strictMode?"strict":"loose"].exec(a);for(var c={},e=14;e--;)c[b.key[e]]=a[e]||"";c[b.q.name]={};c[b.key[12]].replace(b.q.parser,function(h,f,d){if(f)c[b.q.name][f]=d});return c}I.options={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var g=document,p=g.body,o=g.documentElement,U=eval("/*@cc_on!@*/false"),J=function(a,b){for(var c="",e=0;e<b;e++)c+=a;return c},w=J("a",50),s=(Tynt.e||"")+"ic.tynt.com",V=(Tynt.e||"")+"de.tynt.com/deb/",W=s+"/b/s",C=function(a){return a.replace(/^\s+|\s+$/g,"")},D=function(a,b){for(var c in a)if(a.hasOwnProperty(c))b[c]=
a[c]},K=function(a){for(var b={},c=a.length,e=[],h=0;h<c;h++)if(!b[a[h]]){b[a[h]]=true;e.push(a[h])}return e},L;L=window.addEventListener?function(a,b,c){a.addEventListener(b,c,false)}:function(a,b,c){a.attachEvent("on"+b,c)};var X=function(a,b){var c=location.hostname.split("."),e=2;do{var h=c.slice(c.length-e,c.length).join(".");g.cookie=a+";path=/;domain=."+h+";"+b;e++}while(g.cookie.indexOf(a)==-1&&e<=c.length);if(g.cookie.indexOf(a)==-1)g.cookie=a+";path=/;"+b},M=function(a){g.readyState=="complete"?
a():L(window,"load",function(){setTimeout(function(){if(typeof g.readyState=="undefined"&&!U)g.readyState="complete";a()},10)})},m=function(a,b){var c=[],e=function(h,f){var d="http://"+h.replace("id="+w,"id="+K(Tynt).join("~"));if(d.indexOf(s+"/b/p?")>-1&&typeof Tynt.b=="string")d+="&b="+Tynt.b;var i=new Image(1,1);if(f)i.onerror=f;i.src=d};m=function(h,f){c.push([h,f])};M(function(){m=e;for(var h=0;h<c.length;h++)m(c[h][0],c[h][1]);c=null});m(a,b)},N=function(a){var b=[],c="",e;for(e in a)if(a.hasOwnProperty(e)){b.push(c,
e,"=",a[e]);c="&"}return b.join("")},P=function(a){for(var b=0,c=a.length<100?a.length:100,e=0;e<c;e++)b+=a.charCodeAt(e);a=Math.floor(Math.random()*3844);c=Math.abs((new Date).getTime()-12281184E5);return O(c,7)+O((b+a)%3844,2)},Q=function(a){if(a<62)return"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(this);else{var b=Math.floor(a/62);a=a-b*62;return b>=62?Q(b)+"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(a):"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(b)+
"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(a)}},O=function(a,b){var c=Q(a);return J("0",b-c.length)+c},R=C((g.title||location.hostname).toString()).replace(RegExp(location.hash,"g"),""),Y=function(){for(var a=g.getElementsByTagName("link"),b=0;b<a.length;b++)if(a[b].getAttribute("rel")&&a[b].getAttribute("rel").match("canonical")&&a[b].getAttribute("href")){a=a[b].getAttribute("href");b=location.protocol+"//"+location.host+location.pathname;var c=g.getElementsByTagName("base")[0];
if(c)if(c=c.getAttribute("href"))b=c;if(!a.match(/^http/)){if(a.charAt(0)=="/"){c=b.indexOf("/",9);if(c>-1)b=b.slice(0,c)}else{c=b.lastIndexOf("/");if(c>9)b=b.slice(0,c+1);else b+="/"}a=b+a}return a}return""},x=function(a){return a.replace(/^https?:\/\//,"")},Z=function(a,b){for(var c=b+"=",e=a.split(";"),h=0;h<e.length;h++){for(var f=e[h];f.charAt(0)==" ";)f=f.substring(1,f.length);if(f.indexOf(c)===0)return f.substring(c.length,f.length)}return null},$=function(){var a=Z(g.cookie,"tracertraffic"),
b=encodeURIComponent(x(Y())),c=g.location.hash;c=/tynt=/.test(c)?c.match(/tynt=?([^?&$#]*)/)[1]:false;var e=s+"/b/p?id="+w+(a?"&et="+a:"")+(c?"&a="+c:"")+"&ts="+(new Date).getTime(),h=e+(b?"&cu="+b:""),f=h+(g.referrer?"&r="+encodeURIComponent(x(g.referrer)):"");a=f+"&t="+encodeURIComponent(R);m(a,function(){m(f,function(){m(h,function(){m(e)})})})},aa=function(){M(function(){var a={async:"async",src:"http://"+[V,"v2?id=",K(Tynt).join("~"),"&r=",encodeURIComponent(x(g.referrer))].join("")},b=g.createElement("script");
D(a,b);D(void 0,b.style);a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)})},u=function(){var a=[];return function(b){for(var c=a.length-1;c>=0;c--)if(a[c]==b)return false;a.unshift(b);a.length>3&&a.pop();return true}},ba=u(),ca=u(),da=function(){var a,b=function(){window.removeEventListener("blur",b,false);E(a);return true};return function(c){a=c.target||c.srcElement;window.removeEventListener("blur",b,false);if(a.nodeName=="IMG"&&a.parentNode.nodeName!="A"){window.addEventListener("blur",
b,false);setTimeout(function(){g.removeEventListener("blur",b,false)},1E4)}return true}}(),S=function(a){E(a.target||a.srcElement,true)},y,T=function(a){a=a.target||a.srcElement;y=a.nodeName=="IMG"?a:null},F=function(){var a=function(d){return typeof d.pageX=="number"?{x:d.pageX-(o.scrollLeft?o.scrollLeft:p.scrollLeft),y:d.pageY-(o.scrollTop?o.scrollTop:p.scrollTop)}:{x:d.clientX,y:d.clientY}},b=function(d){d=a(d);return d.x<=0||d.y<=0||d.x>=p.clientWidth||d.y>=p.clientHeight},c=function(d){d=a(d);
return d.x<=0||d.y<=0||d.x>=o.clientWidth||d.y>=o.clientHeight},e=function(d){return d.target.nodeName=="#document"},h=function(d){d=a(d);return d.x<=4||d.y<=4||d.x>=o.clientWidth-4||d.y>=o.clientHeight-4},f=function(d){f=navigator.userAgent.match("MSIE")?!g.compatMode||g.compatMode.indexOf("CSS")==-1?b:c:navigator.userAgent.match("Firefox")?e:h;f(d)};return function(d){if(y&&f(d)){E(y);y=null}return true}}();Tynt.ci=function(){var a;return function(b,c){a=c||a;var e=W+["?ci=",b,"&id=",w,"&g=",a,
"&r=",encodeURIComponent(x(g.referrer)),"&ts=",(new Date).getTime()].join("");m(e)}}();if(Tynt.c)u=function(){};else{Tynt.c=true;Tynt.m=Tynt.m||[];Tynt.n=Tynt.n||[];u=function(){var a=true,b,c=function(e,h){var f;f=(f=C(h))?f.split(/\s+/i).length:0;var d={id:w,wc:f,c:h,f:a?1:0,t:R};D(e,d);a=false;f=d.trace_type;delete d.trace_type;var i=d.g;delete d.g;for(var j=[],k=["id","wc","f","w","h","t","c"],n=0;n<k.length;n++){var v=k[n],q=d[v];q&&j.push([v,encodeURIComponent(q).replace(/\'/g,"%27")]);delete d[v]}for(var l in d)if(d.hasOwnProperty(l))(k=
d[l])&&j.push([l,encodeURIComponent(k).replace(/\'/g,"%27")]);l=[];n=2048-(("http://"+s+"/a/t/x#?").length+(3+i.length)+5);v=j.length;var t=q=0,r=0,G,z,H,A,B=0;for(l[B]={g:i,tp:null};q<v&&l.length<35;){G=j[q][0];d=j[q][1];H=G.length+2;z=n-H-t;if(z>0){k=d.substring(r,r+z);A=k.slice(-2).indexOf("%");if(A>-1){k=d.substring(r,r+z-2+A);t+=A+2}t+=k.length+H;r+=k.length;l[B][G]=k}else t=n;if(t>=n){l[++B]={g:i,p:B};t=0}if(r>=d.length){q++;r=0}}l[0].tp=l.length;m(s+"/b/t/"+f+"?"+N(l[0]));for(i=1;i<l.length;i++)m(s+
"/b/x/"+f+"?"+N(l[i]))};if(window.addEventListener){navigator.userAgent.match(/Firefox\/2\b/)||p.addEventListener("copy",S,false);window.addEventListener("mousedown",T,false);window.addEventListener("dragleave",F,false);window.addEventListener("dragexit",F,false);g.addEventListener("contextmenu",da,false)}else{p.attachEvent("oncopy",S);g.getElementsByTagName("html")[0].attachEvent("ondragleave",F);p.attachEvent("onmousedown",T)}if(g.cookie.indexOf("tracertraffic=")!==-1)if(!g.referrer||g.referrer.indexOf(location.host)==
-1)X("tracertraffic=0","expires=Thu, 01 Jan 1970 00:00:00 GMT");$();aa();return function(e,h){if(!g.getElementById("tyntSh")){var f,d,i;if(h)if(!g.selection||!g.selection.createRange){d=getSelection();i=d.rangeCount>0&&d.getRangeAt(0);f=d.toString()}else{d=g.selection.createRange();i=d.duplicate();f=d.text}var j=e.src;if(j&&!f&&ca(j)){d={trace_type:3,g:P(j),w:e.width,h:e.height};for(i=0;i<Tynt.n.length;i++)Tynt.n[i](d,j);c(d,j)}else if(f&&C(f).length&&e.nodeName!="TEXTAREA"&&e.nodeName!="INPUT"){j=
ba(f);d={trace_type:1};if(j)b=P(f);d.g=b;for(var k=true,n=0;n<Tynt.m.length;n++)k=k&&Tynt.m[n](d,f,i,j);j&&k&&c(d,f)}}}}}if(!(/tracer=test|tracer=no_tracing|disableTracer=/.test(location.href)||/disableTracer=y/.test(g.cookie)))var E=u()};Tynt.TCL=function(){document.body?ea():setTimeout(Tynt.TCL,300)}})();Tynt.TCL()};