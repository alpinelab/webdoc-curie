!function(t){"function"==typeof define&&define.amd?define(jQuery||["jquery"],t):t("object"==typeof exports?jQuery||require("jquery"):jQuery)}(function(t){function e(e,s){function o(){return M.options.dotsSnap&&h(),first_child=b.first().clone(),last_child=b.last().clone(),C.append(first_child),C.prepend(last_child),C.css("width",j.width*(b.length+2)),a(),M.move(0,M.options.interval),M}function a(){var n=W?"touchstart":"mousedown";W?(e[0].ontouchstart=w,e[0].ontouchmove=g,e[0].ontouchend=v):y.bind(n,w),M.options.dotsSnap&&e.delegate(".dot",n,function(e){return e.preventDefault(),e.stopImmediatePropagation(),clearTimeout(x),0===P&&M.move(t(this).text()-1),M.start(),!1})}function r(t){x=setTimeout(function(){M.move(void 0!==b[M.slideCurrent+1]?M.slideCurrent+1:0,!0)},t?50:M.options.intervalTime)}function u(t){return t*(Math.PI/180)}function d(t){return 180*t/Math.PI}function h(){var n=document.createDocumentFragment();S.remove(),b=b.remove(),b.each(function(e,i){var s=S.clone(),o=M.options.dots?360*e/b.length+M.options.shift:parseInt(t(i).attr("data-degrees"),10),a={top:-Math.cos(u(o))*M.options.radius+_.height/2-I.height/2,left:Math.sin(u(o))*M.options.radius+_.width/2-I.width/2};s.addClass(t(i).attr("data-classname")),s.css(a),T.push({angle:o,slide:i,dot:s}),n.appendChild(s[0])}),T.sort(function(t,e){return t.angle-e.angle}),t.each(T,function(e,n){t(n.dot).addClass("dot-"+(e+1)),C.append(n.slide)}),e.append(n),S=e.find(".dot")}function l(t,e){var n,i,s;return t>e?(n=t-e,i=-(e+360-t)):(n=t+360-e,i=-(e-t)),s=n<Math.abs(i)?n:i,[s,i,n]}function c(e){var n=9999,i=9999,s=9999,o=0,a=0,r=0;return t.each(T,function(t,u){var d=l(u.angle,e);Math.abs(d[0])<Math.abs(s)&&(s=d[0],r=t),Math.abs(d[1])<Math.abs(n)&&(n=d[1],o=t),Math.abs(d[2])<Math.abs(i)&&(i=d[2],a=t)}),[[r,o,a],[s,n,i]]}function f(t){return 0>t?360+t%-360:t%360}function p(t,e,n,i){P+=1;var s=f(Math.round(P*t+M.angleCurrent));P===n&&i&&M.start(),m(s,P===n),n>P?D=setTimeout(function(){p(t,e,n,i),BV.getPlayer()&&BV.show(playlist[slideIndex],{ambient:!0})},50):(P=0,M.angleCurrent=e)}function g(t){var n=e.offset(),i={left:t.pageX-n.left-_.width/2,top:t.pageY-n.top-_.height/2};return M.angleCurrent=f(d(Math.atan2(i.left,-i.top))),m(M.angleCurrent),!1}function m(t,n){closestSlidesAndAngles=c(t),closestSlides=closestSlidesAndAngles[0],closestAngles=closestSlidesAndAngles[1],M.options.dots?C.css("left",-((t-M.options.shift)/360*j.width*b.length)-j.width):C.css("left",-(closestSlides[1]*j.width+Math.abs(closestAngles[1])*j.width/(Math.abs(closestAngles[1])+Math.abs(closestAngles[2])))-j.width),y.css({top:-Math.cos(u(t))*M.options.radius+(_.height/2-H.height/2),left:Math.sin(u(t))*M.options.radius+(_.width/2-H.width/2)}),A.css({transform:"rotate("+t+"deg)"}),y.attr("data-closest-slide",b[closestSlides[0]].className),n&&e.trigger("move",[b[M.slideCurrent],M.slideCurrent])}function v(e){return t(e.target).hasClass("dot")?!1:(e.preventDefault(),clearTimeout(D),W||(t(document).unbind("mousemove mouseup"),y.unbind("mouseup")),M.options.dotsSnap&&M.move(c(M.angleCurrent)[0][0]),void M.start())}function w(e){return e.preventDefault(),t(e.target).hasClass("dot")?!1:(clearTimeout(x),void(W||(t(document).mousemove(g),t(document).mouseup(v),y.mouseup(v))))}this.options=t.extend({},i,s),this._defaults=i,this._name=n;var M=this,C=(e.find(".viewport"),e.find(".compass-inner")),b=C.children(),y=e.find(".thumb"),A=y.find(".arrow"),S=e.find(".dot"),T=(e.find("#compass"),b.find("a"),[]),_={width:e.outerWidth(!0),height:e.outerHeight(!0)},j={width:b.first().outerWidth(!0),height:b.first().outerHeight(!0)},H={width:y.outerWidth(!0),height:y.outerHeight(!0)},I={width:S.outerWidth(),height:S.outerHeight()},x=null,D=null,P=0,W="ontouchstart"in document.documentElement;return this.slideCurrent=0,this.angleCurrent=10,this.start=function(t){return M.options.interval&&r(t),M},this.stop=function(){return clearTimeout(x),M},this.move=function(t,e){var n=T[t]&&T[t].angle||0,i=l(n,M.angleCurrent)[0],s=Math.ceil(Math.abs(i)/10),o=i/s||0;return M.slideCurrent=t,p(o,n,s,e),M},o()}var n="tinycircleslider",i={interval:!1,intervalTime:3500,dots:!0,dotsSnap:!1,dotsHide:!0,radius:140,shift:0};t.fn[n]=function(i){return this.each(function(){t.data(this,"plugin_"+n)||t.data(this,"plugin_"+n,new e(t(this),i))})}});