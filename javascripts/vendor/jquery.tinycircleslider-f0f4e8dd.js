!function(t){"function"==typeof define&&define.amd?define(jQuery||["jquery"],t):t("object"==typeof exports?jQuery||require("jquery"):jQuery)}(function(t){function e(e,s){function o(){return C.options.dotsSnap&&l(),first_child=b.first().clone(),last_child=b.last().clone(),M.append(first_child),M.prepend(last_child),M.css("width",j.width*(b.length+2)),r(),C.move(0,C.options.interval),C}function r(){var n=q?"touchstart":"mousedown";q?(e[0].ontouchstart=w,e[0].ontouchmove=g,e[0].ontouchend=v):y.bind(n,w),C.options.dotsSnap&&e.delegate(".dot",n,function(e){return e.preventDefault(),e.stopImmediatePropagation(),clearTimeout(I),0===W&&C.move(t(this).text()-1),C.start(),!1})}function a(t){I=setTimeout(function(){C.move(void 0!==b[C.slideCurrent+1]?C.slideCurrent+1:0,!0)},t?50:C.options.intervalTime)}function u(t){return t*(Math.PI/180)}function d(t){return 180*t/Math.PI}function l(){var n=document.createDocumentFragment();S.remove(),b=b.remove(),b.each(function(e,i){var s=S.clone(),o=C.options.dots?360*e/b.length+C.options.shift:parseInt(t(i).attr("data-degrees"),10),r={top:-Math.cos(u(o))*C.options.radius+_.height/2-D.height/2,left:Math.sin(u(o))*C.options.radius+_.width/2-D.width/2};s.addClass(t(i).attr("data-classname")),s.css(r),T.push({angle:o,slide:i,dot:s}),n.appendChild(s[0])}),T.sort(function(t,e){return t.angle-e.angle}),t.each(T,function(e,n){t(n.dot).addClass("dot-"+(e+1)),M.append(n.slide)}),e.append(n),S=e.find(".dot")}function h(t,e){var n,i,s;return t>e?(n=t-e,i=-(e+360-t)):(n=t+360-e,i=-(e-t)),s=n<Math.abs(i)?n:i,[s,i,n]}function c(e){var n=9999,i=9999,s=9999,o=0,r=0,a=0;return t.each(T,function(t,u){var d=h(u.angle,e);Math.abs(d[0])<Math.abs(s)&&(s=d[0],a=t),Math.abs(d[1])<Math.abs(n)&&(n=d[1],o=t),Math.abs(d[2])<Math.abs(i)&&(i=d[2],r=t)}),[[a,o,r],[s,n,i]]}function f(t){return 0>t?360+t%-360:t%360}function p(e,n,i,s){W+=1;var o=f(Math.round(W*e+C.angleCurrent));W===i&&s&&C.start(),m(o,W===i),i>W?P=setTimeout(function(){p(e,n,i,s)},50):(W=0,C.angleCurrent=n,t.BV.getPlayer()&&(t(".big-image").attr("src",playlist[C.slideCurrent][0].poster),t(".big-image").css({opacity:1}),t.BV.show(playlist[C.slideCurrent],{ambient:!0})))}function g(t){var n=e.offset(),i={left:t.pageX-n.left-_.width/2,top:t.pageY-n.top-_.height/2};return C.angleCurrent=f(d(Math.atan2(i.left,-i.top))),m(C.angleCurrent),!1}function m(t,n){closestSlidesAndAngles=c(t),closestSlides=closestSlidesAndAngles[0],closestAngles=closestSlidesAndAngles[1],C.options.dots?M.css("left",-((t-C.options.shift)/360*j.width*b.length)-j.width):M.css("left",-(closestSlides[1]*j.width+Math.abs(closestAngles[1])*j.width/(Math.abs(closestAngles[1])+Math.abs(closestAngles[2])))-j.width),y.css({top:-Math.cos(u(t))*C.options.radius+(_.height/2-H.height/2),left:Math.sin(u(t))*C.options.radius+(_.width/2-H.width/2)}),A.css({transform:"rotate("+t+"deg)"}),y.attr("data-closest-slide",b[closestSlides[0]].className),n&&e.trigger("move",[b[C.slideCurrent],C.slideCurrent])}function v(e){return t(e.target).hasClass("dot")?!1:(e.preventDefault(),clearTimeout(P),q||(t(document).unbind("mousemove mouseup"),y.unbind("mouseup")),C.options.dotsSnap&&C.move(c(C.angleCurrent)[0][0]),void C.start())}function w(e){return e.preventDefault(),t(e.target).hasClass("dot")?!1:(clearTimeout(I),void(q||(t(document).mousemove(g),t(document).mouseup(v),y.mouseup(v))))}this.options=t.extend({},i,s),this._defaults=i,this._name=n;var C=this,M=(e.find(".viewport"),e.find(".compass-inner")),b=M.children(),y=e.find(".thumb"),A=y.find(".arrow"),S=e.find(".dot"),T=(e.find("#compass"),b.find("a"),[]),_={width:e.outerWidth(!0),height:e.outerHeight(!0)},j={width:b.first().outerWidth(!0),height:b.first().outerHeight(!0)},H={width:y.outerWidth(!0),height:y.outerHeight(!0)},D={width:S.outerWidth(),height:S.outerHeight()},I=null,P=null,W=0,q="ontouchstart"in document.documentElement;return this.slideCurrent=0,this.angleCurrent=10,this.start=function(t){return C.options.interval&&a(t),C},this.stop=function(){return clearTimeout(I),C},this.move=function(t,e){var n=T[t]&&T[t].angle||0,i=h(n,C.angleCurrent)[0],s=Math.ceil(Math.abs(i)/10),o=i/s||0;return C.slideCurrent=t,p(o,n,s,e),C},o()}var n="tinycircleslider",i={interval:!1,intervalTime:3500,dots:!0,dotsSnap:!1,dotsHide:!0,radius:140,shift:0};t.fn[n]=function(i){return this.each(function(){t.data(this,"plugin_"+n)||t.data(this,"plugin_"+n,new e(t(this),i))})}});