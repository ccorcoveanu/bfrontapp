!function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var s=n(4),r=(i(s),n(5)),o=i(r),a=n(7),u=i(a),h=n(3),c=i(h),l=n(2),d=i(l);n(9),n(10),window.onload=function(){new c["default"]("box--item"),new d["default"],document.addEventListener("touchstart",function(t){},{}),u["default"].init();var t=new o["default"];document.getElementById("hamburger--link").addEventListener("click",function(e){t.toggleState(document.getElementById("hamburger--link"))});for(var e=document.getElementsByClassName("popup--link"),n=function(n){e[n].addEventListener("click",function(i){t.toggleState(e[n])})},i=0;i<e.length;i++)n(i);document.querySelector(".kiss--control .-search").addEventListener("click",function(t){var e=document.getElementsByClassName("search-and-options--container")[0];return!e.classList.contains("-searching")&&(e.classList.add("-searching"),document.querySelector(".search--input").focus(),void document.getElementsByTagName("body")[0].classList.add("-popup__open"))}),document.querySelector(".kiss--control .-back").addEventListener("click",function(t){var e=document.getElementsByClassName("search-and-options--container")[0];return!!e.classList.contains("-searching")&&(e.classList.remove("-searching"),void document.getElementsByTagName("body")[0].classList.remove("-popup__open"))})}},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(){n(this,t),console.log("init"),this.initEvents()}return i(t,[{key:"initEvents",value:function(){this.close(),this.minimize(),this.maximize()}},{key:"close",value:function e(){function e(t){var e=this.getParentArticle(t.target,"box--item");return e.parentNode.removeChild(e)}for(var t=document.querySelectorAll(".box--item .-controls .-close"),n=0;n<t.length;n++)t[n].addEventListener("click",e.bind(this))}},{key:"minimize",value:function s(){function s(t){var e=this.getParentArticle(t.target,"box--item");return e.classList.add("-minimized")}for(var t=document.querySelectorAll(".box--item .-controls .-minus"),e=0;e<t.length;e++)t[e].addEventListener("click",s.bind(this))}},{key:"maximize",value:function r(){function r(t){var e=this.getParentArticle(t.target,"box--item");return e.classList.remove("-minimized")}for(var t=document.querySelectorAll(".box--item .-controls .-plus"),e=0;e<t.length;e++)t[e].addEventListener("click",r.bind(this))}},{key:"getParentArticle",value:function(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}}]),t}();e["default"]=s},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(){n(this,t),this.overlayClassName="dnd-grid__dropzone",this.activeClassName="dnd-active-zone",this.overlay=document.querySelector("."+this.overlayClassName),this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.update=this.update.bind(this),this.targetBCR=null,this.target=null,this.startX=0,this.startY=0,this.currentX=0,this.currentY=0,this.screenX=0,this.screenY=0,this.directionX=0,this.targetX=0,this.targetY=0,this.targetIndex=!1,this.draggingCard=!1,this.hoverBox=!1,this.boxesBounds=this.getBoxesBoundRects(),this.boxes=document.querySelectorAll(".box--item"),this.addEventListeners(),requestAnimationFrame(this.update)}return i(t,[{key:"addEventListeners",value:function(){document.addEventListener("touchstart",this.onStart),document.addEventListener("touchmove",this.onMove),document.addEventListener("touchend",this.onEnd),document.addEventListener("mousedown",this.onStart),document.addEventListener("mousemove",this.onMove),document.addEventListener("mouseup",this.onEnd)}},{key:"onStart",value:function(t){this.target||t.target.classList.contains(this.activeClassName)&&(this.target=t.target.parentNode,this.targetBCR=this.target.getBoundingClientRect(),this.startX=t.pageX||t.touches[0].pageX,this.startY=t.pageY||t.touches[0].pageY,this.offsetX=0,this.offsetY=0,this.currentX=this.startX,this.currentY=this.startY,this.draggingCard=!0,this.target.style.willChange="transform",this.target.style.zIndex=260,this.target.style.position="absolute",this.initDropzone(),t.preventDefault())}},{key:"onMove",value:function(t){if(this.target){var e=(this.currentX,this.currentX);if(this.currentX=t.pageX||t.touches[0].pageX,this.currentY=t.pageY||t.touches[0].pageY,this.directionX=this.getDirection(e,this.currentX),this.draggingCard&&(this.hoverBox=this.getHoverBox()),this.draggingCard&&this.hoverBox!==!1&&this.hoverBox!==parseInt(this.target.dataset.item)){console.log(this.hoverBox);var n=parseInt(this.target.dataset.item);this.hoverBox>n&&this.directionX>=0?(this.offsetX-=this.boxesBounds[this.hoverBox].width,this.boxes[this.hoverBox].classList.contains("-last")&&(this.boxes[this.hoverBox].classList.remove("-last"),this.boxes[n].classList.add("-last")),this.overlay.parentNode.insertBefore(this.overlay,this.boxes[this.hoverBox+1]),this.boxes[this.hoverBox].parentNode.insertBefore(this.boxes[n],this.boxes[this.hoverBox+1]),this.boxes[this.hoverBox].dataset.item=n,this.target.dataset.item=this.hoverBox,this.boxes=document.querySelectorAll(".box--item"),this.boxesBounds=this.getBoxesBoundRects(),this.hoverBox=!1):this.hoverBox<n&&this.directionX<0&&(this.offsetX=this.boxesBounds[this.hoverBox].width,this.boxes[n].classList.contains("-last")&&(this.boxes[n].classList.remove("-last"),this.boxes[this.hoverBox].classList.add("-last")),this.overlay.parentNode.insertBefore(this.overlay,this.boxes[this.hoverBox]),this.boxes[this.hoverBox].parentNode.insertBefore(this.boxes[n],this.boxes[this.hoverBox]),this.boxes[this.hoverBox].dataset.item=n,this.target.dataset.item=this.hoverBox,this.boxes=document.querySelectorAll(".box--item"),this.boxesBounds=this.getBoxesBoundRects(),this.hoverBox=!1)}this.currentX+=this.offsetX,this.currentY+=this.offsetY}}},{key:"getHoverBox",value:function(){for(var t=0;t<this.boxesBounds.length;t++)if(this.currentY>this.boxesBounds[t].top&&this.currentY<this.boxesBounds[t].bottom&&this.currentX>this.boxesBounds[t].left&&this.currentX<this.boxesBounds[t].right)return t;return!1}},{key:"onEnd",value:function(t){this.target&&(this.targetX=0,this.targetY=0,this.offsetX=0,this.offsetY=0,this.draggingCard=!1)}},{key:"update",value:function(){if(requestAnimationFrame(this.update),this.target){this.draggingCard?(this.screenX=this.currentX-this.startX-this.targetBCR.width-10,this.screenY=this.currentY-this.startY):(this.screenX+=(this.targetX-this.screenX-this.targetBCR.width-10)/4,this.screenY+=(this.targetY-this.screenY)/4);var t=this.screenX+this.targetBCR.width+10,e=Math.abs(t)<.1&&Math.abs(this.screenY)<.1&&this.draggingCard===!1;this.target.style.transform="translate("+this.screenX+"px, "+this.screenY+"px)",e&&(this.resetTarget(),this.destroyDropzone(),this.boxesBounds=this.getBoxesBoundRects())}}},{key:"initDropzone",value:function(){this.overlay.style.position="relative",this.overlay.style.width=this.targetBCR.width+"px",this.overlay.style.height=this.targetBCR.height+"px",this.overlay.parentNode.insertBefore(this.overlay,this.target),this.overlay.style.opacity=1}},{key:"destroyDropzone",value:function(){this.overlay.style.width=0,this.overlay.style.height=0,this.overlay.style.opacity=0,this.overlay.style.position="absolute"}},{key:"resetTarget",value:function(){this.target&&(this.target.style.willChange="initial",this.target.style.transform="none",this.target.style.zIndex=250,this.target.style.position="relative",this.target=null)}},{key:"getBoxesBoundRects",value:function(){for(var t=document.querySelectorAll(".box--item"),e=[],n=0;n<t.length;n++){var i=t[n].getBoundingClientRect(),s=Object.assign({},{top:i.top,bottom:i.bottom,left:i.left,right:i.right,width:i.width,height:i.height});s.top+=window.scrollY,s.bottom+=window.scrollY,s.index=n,e.push(s)}return e}},{key:"getDirection",value:function(t,e){return t==e?0:t<e?1:t>e?-1:void 0}}]),t}();e["default"]=s},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=window.MutationObserver||window.WebKitMutationObserver,e="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,n=void 0!==document.documentElement.style["touch-action"]||document.documentElement.style["-ms-touch-action"];!n&&e&&t&&(window.Hammer=window.Hammer||{},window.Hammer.time={getTouchAction:function(t){return this.checkStyleString(t.getAttribute("style"))},checkStyleString:function(t){if(touchMatch.test(t))return touchMatchNone.test(t)?"none":!touchMatchManipulation.test(t)||"manipulation"},shouldHammer:function(t){var e=t.target.hasParent;return!(!e||timeTouch&&!(Date.now()-t.target.lastStart<125))&&e},touchHandler:function(t){var e=this.shouldHammer(t);if("none"===e)this.dropHammer(t);else if("manipulation"===e){var n=t.target.getBoundingClientRect(),i=n.top!==this.pos.top||n.left!==this.pos.left;!i&&this.dropHammer(t)}this.scrolled=!1,delete t.target.lastStart,delete t.target.hasParent},dropHammer:function(t){"touchend"===t.type&&(t.target.focus(),setTimeout(function(){t.target.click()},0)),t.preventDefault()},touchStart:function(t){this.pos=t.target.getBoundingClientRect(),t.target.hasParent=this.hasParent(t.target),timeTouch&&t.target.hasParent&&(t.target.lastStart=Date.now())},styleWatcher:function(t){t.forEach(this.styleUpdater,this)},styleUpdater:function(t){if(t.target.updateNext)return void(t.target.updateNext=!1);var e=this.getTouchAction(t.target);return e?void("none"!==e&&(t.target.hadTouchNone=!1)):void(!e&&(t.oldValue&&this.checkStyleString(t.oldValue)||t.target.hadTouchNone)&&(t.target.hadTouchNone=!0,t.target.updateNext=!1,t.target.setAttribute("style",t.target.getAttribute("style")+" touch-action: none;")))},hasParent:function(t){for(var e,n=t;n&&n.parentNode;n=n.parentNode)if(e=this.getTouchAction(n))return e;return!1},installStartEvents:function(){document.addEventListener("touchstart",this.touchStart.bind(this)),document.addEventListener("mousedown",this.touchStart.bind(this))},installEndEvents:function(){document.addEventListener("touchend",this.touchHandler.bind(this),!0),document.addEventListener("mouseup",this.touchHandler.bind(this),!0)},installObserver:function(){this.observer=new t(this.styleWatcher.bind(this)).observe(document,{subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["style"]})},install:function(){console.log("called"),this.installEndEvents(),this.installStartEvents(),this.installObserver()}},window.Hammer.time.install())};e["default"]=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){return console.log("test2"),t.classList.toggle("-is-active")}return{toggleState:t}};e["default"]=n},function(t,e){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(t,e){return Object.assign(t.style,e),t}function i(t,e){if("add"in e){var i;(i=t.classList).add.apply(i,n(e.add))}if("remove"in e){var s;(s=t.classList).remove.apply(s,n(e.remove))}return t}var s=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return s?("style"in s&&e(t,s.style),void("classList"in s&&i(t,s.classList))):t};e["default"]=i},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(8),r=i(s),o=function(){function t(){u=document.getElementById("sidebar--container--element"),s=!1,a=130,i=new Hammer(document.getElementsByClassName("resize--controller")[0],{direction:Hammer.DIRECTION_HORIZONTAL}),i.get("pan").set({threshold:1}),i.on("panstart",function(t){o=u.offsetWidth,s=!1,r["default"].panStart(u)}),i.on("panend",function(t){return!s&&(o=u.offsetWidth,void r["default"].panEnd(u))}),i.on("swipeleft",function(t){s=!0,r["default"].swipeLeft(u)}),i.on("pan",function(t){return!s&&void r["default"].resize(u,o+t.deltaX)}),i.on("tap",function(t){s=!0,r["default"].bounce(u,320)}),u.addEventListener("touchstart",function(t){"vibrate"in navigator&&navigator.vibrate(20)})}function e(){i.off("pan"),i.off("panstart"),i.off("panend"),i.off("swipeleft"),i=null,t()}var n={init:t,reset:e},i=void 0,s=void 0,o=void 0,a=void 0,u=void 0;return n};e["default"]=o()},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(6),r=i(s),o=function(){function t(t){var e=arguments.length<=1||void 0===arguments[1]||arguments[1];return e&&document.getElementsByTagName("body")[0].classList.add("js-selection-disabled"),(0,r["default"])(t,{classList:{add:["-resizing"],remove:["-animate","-closed","-open","-bounce"]}})}function e(t){var e=arguments.length<=1||void 0===arguments[1]?130:arguments[1],n=arguments.length<=2||void 0===arguments[2]||arguments[2];n&&document.getElementsByTagName("body")[0].classList.remove("js-selection-disabled");var i={classList:{add:["-animate"],remove:["-resizing","-bounce"]}};return t.offsetWidth>e?i.classList.add.push("-open"):(i.classList.add.push("-closed"),i.style={width:""}),(0,r["default"])(t,i)}function n(t){return document.getElementsByTagName("body")[0].classList.remove("js-selection-disabled"),(0,r["default"])(t,{classList:{add:["-animate","-closed"],remove:["-resizing","-bounce"]},style:{width:""}})}function i(t,e){return(0,r["default"])(t,{classList:{remove:["-bounce"]},style:{width:e+"px"}})}function s(t,e){var n=arguments.length<=2||void 0===arguments[2]?"toright":arguments[2];return"toright"===n?(0,r["default"])(t,{classList:{add:["-bounce"],remove:["-closed","-animate"]}}):t}return{resize:i,bounce:s,panStart:t,panEnd:e,swipeLeft:n}};e["default"]=o()},function(t,e){},function(t,e,n){var i;/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
!function(s,r,o,a){"use strict";function u(t,e,n){return setTimeout(f(t,n),e)}function h(t,e,n){return!!Array.isArray(t)&&(c(t,n[e],n),!0)}function c(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function l(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=s.console&&(s.console.warn||s.console.log);return r&&r.call(s.console,i,n),t.apply(this,arguments)}}function d(t,e,n){var i,s=e.prototype;i=t.prototype=Object.create(s),i.constructor=t,i._super=s,n&&vt(i,n)}function f(t,e){return function(){return t.apply(e,arguments)}}function p(t,e){return typeof t==yt?t.apply(e?e[0]||a:a,e):t}function v(t,e){return t===a?e:t}function m(t,e,n){c(T(e),function(e){t.addEventListener(e,n,!1)})}function g(t,e,n){c(T(e),function(e){t.removeEventListener(e,n,!1)})}function y(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function b(t,e){return t.indexOf(e)>-1}function T(t){return t.trim().split(/\s+/g)}function E(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function x(t){return Array.prototype.slice.call(t,0)}function w(t,e,n){for(var i=[],s=[],r=0;r<t.length;){var o=e?t[r][e]:t[r];E(s,o)<0&&i.push(t[r]),s[r]=o,r++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function B(t,e){for(var n,i,s=e[0].toUpperCase()+e.slice(1),r=0;r<mt.length;){if(n=mt[r],i=n?n+s:e,i in t)return i;r++}return a}function S(){return Bt++}function C(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||s}function L(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){p(t.options.enable,[t])&&n.handler(e)},this.init()}function A(t){var e,n=t.options.inputClass;return new(e=n?n:Lt?q:At?j:Ct?U:H)(t,_)}function _(t,e,n){var i=n.pointers.length,s=n.changedPointers.length,r=e&Yt&&i-s===0,o=e&(Dt|kt)&&i-s===0;n.isFirst=!!r,n.isFinal=!!o,r&&(t.session={}),n.eventType=e,X(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function X(t,e){var n=t.session,i=e.pointers,s=i.length;n.firstInput||(n.firstInput=N(e)),s>1&&!n.firstMultiple?n.firstMultiple=N(e):1===s&&(n.firstMultiple=!1);var r=n.firstInput,o=n.firstMultiple,a=o?o.center:r.center,u=e.center=Y(i);e.timeStamp=Et(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=O(a,u),e.distance=k(a,u),I(n,e),e.offsetDirection=D(e.deltaX,e.deltaY);var h=M(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=h.x,e.overallVelocityY=h.y,e.overallVelocity=Tt(h.x)>Tt(h.y)?h.x:h.y,e.scale=o?R(o.pointers,i):1,e.rotation=o?z(o.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,P(n,e);var c=t.element;y(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function I(t,e){var n=e.center,i=t.offsetDelta||{},s=t.prevDelta||{},r=t.prevInput||{};e.eventType!==Yt&&r.eventType!==Dt||(s=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=s.x+(n.x-i.x),e.deltaY=s.y+(n.y-i.y)}function P(t,e){var n,i,s,r,o=t.lastInterval||e,u=e.timeStamp-o.timeStamp;if(e.eventType!=kt&&(u>Nt||o.velocity===a)){var h=e.deltaX-o.deltaX,c=e.deltaY-o.deltaY,l=M(u,h,c);i=l.x,s=l.y,n=Tt(l.x)>Tt(l.y)?l.x:l.y,r=D(h,c),t.lastInterval=e}else n=o.velocity,i=o.velocityX,s=o.velocityY,r=o.direction;e.velocity=n,e.velocityX=i,e.velocityY=s,e.direction=r}function N(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:bt(t.pointers[n].clientX),clientY:bt(t.pointers[n].clientY)},n++;return{timeStamp:Et(),pointers:e,center:Y(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Y(t){var e=t.length;if(1===e)return{x:bt(t[0].clientX),y:bt(t[0].clientY)};for(var n=0,i=0,s=0;s<e;)n+=t[s].clientX,i+=t[s].clientY,s++;return{x:bt(n/e),y:bt(i/e)}}function M(t,e,n){return{x:e/t||0,y:n/t||0}}function D(t,e){return t===e?Ot:Tt(t)>=Tt(e)?t<0?zt:Rt:e<0?Ht:qt}function k(t,e,n){n||(n=Vt);var i=e[n[0]]-t[n[0]],s=e[n[1]]-t[n[1]];return Math.sqrt(i*i+s*s)}function O(t,e,n){n||(n=Vt);var i=e[n[0]]-t[n[0]],s=e[n[1]]-t[n[1]];return 180*Math.atan2(s,i)/Math.PI}function z(t,e){return O(e[1],e[0],Ut)+O(t[1],t[0],Ut)}function R(t,e){return k(e[0],e[1],Ut)/k(t[0],t[1],Ut)}function H(){this.evEl=Zt,this.evWin=Kt,this.pressed=!1,L.apply(this,arguments)}function q(){this.evEl=Qt,this.evWin=te,L.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function F(){this.evTarget=ne,this.evWin=ie,this.started=!1,L.apply(this,arguments)}function W(t,e){var n=x(t.touches),i=x(t.changedTouches);return e&(Dt|kt)&&(n=w(n.concat(i),"identifier",!0)),[n,i]}function j(){this.evTarget=re,this.targetIds={},L.apply(this,arguments)}function V(t,e){var n=x(t.touches),i=this.targetIds;if(e&(Yt|Mt)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var s,r,o=x(t.changedTouches),a=[],u=this.target;if(r=n.filter(function(t){return y(t.target,u)}),e===Yt)for(s=0;s<r.length;)i[r[s].identifier]=!0,s++;for(s=0;s<o.length;)i[o[s].identifier]&&a.push(o[s]),e&(Dt|kt)&&delete i[o[s].identifier],s++;return a.length?[w(r.concat(a),"identifier",!0),a]:void 0}function U(){L.apply(this,arguments);var t=f(this.handler,this);this.touch=new j(this.manager,t),this.mouse=new H(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function G(t,e){t&Yt?(this.primaryTouch=e.changedPointers[0].identifier,Z.call(this,e)):t&(Dt|kt)&&Z.call(this,e)}function Z(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,s=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(s,oe)}}function K(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var s=this.lastTouches[i],r=Math.abs(e-s.x),o=Math.abs(n-s.y);if(r<=ae&&o<=ae)return!0}return!1}function $(t,e){this.manager=t,this.set(e)}function J(t){if(b(t,fe))return fe;var e=b(t,pe),n=b(t,ve);return e&&n?fe:e||n?e?pe:ve:b(t,de)?de:le}function Q(){if(!he)return!1;var t={},e=s.CSS&&s.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||s.CSS.supports("touch-action",n)}),t}function tt(t){this.options=vt({},this.defaults,t||{}),this.id=S(),this.manager=null,this.options.enable=v(this.options.enable,!0),this.state=ge,this.simultaneous={},this.requireFail=[]}function et(t){return t&xe?"cancel":t&Te?"end":t&be?"move":t&ye?"start":""}function nt(t){return t==qt?"down":t==Ht?"up":t==zt?"left":t==Rt?"right":""}function it(t,e){var n=e.manager;return n?n.get(t):t}function st(){tt.apply(this,arguments)}function rt(){st.apply(this,arguments),this.pX=null,this.pY=null}function ot(){st.apply(this,arguments)}function at(){tt.apply(this,arguments),this._timer=null,this._input=null}function ut(){st.apply(this,arguments)}function ht(){st.apply(this,arguments)}function ct(){tt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function lt(t,e){return e=e||{},e.recognizers=v(e.recognizers,lt.defaults.preset),new dt(t,e)}function dt(t,e){this.options=vt({},lt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=A(this),this.touchAction=new $(this,this.options.touchAction),ft(this,!0),c(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ft(t,e){var n=t.element;if(n.style){var i;c(t.options.cssProps,function(s,r){i=B(n.style,r),e?(t.oldCssProps[i]=n.style[i],n.style[i]=s):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function pt(t,e){var n=r.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var vt,mt=["","webkit","Moz","MS","ms","o"],gt=r.createElement("div"),yt="function",bt=Math.round,Tt=Math.abs,Et=Date.now;vt="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var s in i)i.hasOwnProperty(s)&&(e[s]=i[s])}return e}:Object.assign;var xt=l(function(t,e,n){for(var i=Object.keys(e),s=0;s<i.length;)(!n||n&&t[i[s]]===a)&&(t[i[s]]=e[i[s]]),s++;return t},"extend","Use `assign`."),wt=l(function(t,e){return xt(t,e,!0)},"merge","Use `assign`."),Bt=1,St=/mobile|tablet|ip(ad|hone|od)|android/i,Ct="ontouchstart"in s,Lt=B(s,"PointerEvent")!==a,At=Ct&&St.test(navigator.userAgent),_t="touch",Xt="pen",It="mouse",Pt="kinect",Nt=25,Yt=1,Mt=2,Dt=4,kt=8,Ot=1,zt=2,Rt=4,Ht=8,qt=16,Ft=zt|Rt,Wt=Ht|qt,jt=Ft|Wt,Vt=["x","y"],Ut=["clientX","clientY"];L.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(C(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(C(this.element),this.evWin,this.domHandler)}};var Gt={mousedown:Yt,mousemove:Mt,mouseup:Dt},Zt="mousedown",Kt="mousemove mouseup";d(H,L,{handler:function(t){var e=Gt[t.type];e&Yt&&0===t.button&&(this.pressed=!0),e&Mt&&1!==t.which&&(e=Dt),this.pressed&&(e&Dt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:It,srcEvent:t}))}});var $t={pointerdown:Yt,pointermove:Mt,pointerup:Dt,pointercancel:kt,pointerout:kt},Jt={2:_t,3:Xt,4:It,5:Pt},Qt="pointerdown",te="pointermove pointerup pointercancel";s.MSPointerEvent&&!s.PointerEvent&&(Qt="MSPointerDown",te="MSPointerMove MSPointerUp MSPointerCancel"),d(q,L,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),s=$t[i],r=Jt[t.pointerType]||t.pointerType,o=r==_t,a=E(e,t.pointerId,"pointerId");s&Yt&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):s&(Dt|kt)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,s,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),n&&e.splice(a,1))}});var ee={touchstart:Yt,touchmove:Mt,touchend:Dt,touchcancel:kt},ne="touchstart",ie="touchstart touchmove touchend touchcancel";d(F,L,{handler:function(t){var e=ee[t.type];if(e===Yt&&(this.started=!0),this.started){var n=W.call(this,t,e);e&(Dt|kt)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:_t,srcEvent:t})}}});var se={touchstart:Yt,touchmove:Mt,touchend:Dt,touchcancel:kt},re="touchstart touchmove touchend touchcancel";d(j,L,{handler:function(t){var e=se[t.type],n=V.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:_t,srcEvent:t})}});var oe=2500,ae=25;d(U,L,{handler:function(t,e,n){var i=n.pointerType==_t,s=n.pointerType==It;if(!(s&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)G.call(this,e,n);else if(s&&K.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var ue=B(gt.style,"touchAction"),he=ue!==a,ce="compute",le="auto",de="manipulation",fe="none",pe="pan-x",ve="pan-y",me=Q();$.prototype={set:function(t){t==ce&&(t=this.compute()),he&&this.manager.element.style&&me[t]&&(this.manager.element.style[ue]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return c(this.manager.recognizers,function(e){p(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),J(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,s=b(i,fe)&&!me[fe],r=b(i,ve)&&!me[ve],o=b(i,pe)&&!me[pe];if(s){var a=1===t.pointers.length,u=t.distance<2,h=t.deltaTime<250;if(a&&u&&h)return}return o&&r?void 0:s||r&&n&Ft||o&&n&Wt?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ge=1,ye=2,be=4,Te=8,Ee=Te,xe=16,we=32;tt.prototype={defaults:{},set:function(t){return vt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(h(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=it(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return h(t,"dropRecognizeWith",this)?this:(t=it(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(h(t,"requireFailure",this))return this;var e=this.requireFail;return t=it(t,this),E(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(h(t,"dropRequireFailure",this))return this;t=it(t,this);var e=E(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;i<Te&&e(n.options.event+et(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=Te&&e(n.options.event+et(i))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=we)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(we|ge)))return!1;t++}return!0},recognize:function(t){var e=vt({},t);return p(this.options.enable,[this,e])?(this.state&(Ee|xe|we)&&(this.state=ge),this.state=this.process(e),void(this.state&(ye|be|Te|xe)&&this.tryEmit(e))):(this.reset(),void(this.state=we))},process:function(t){},getTouchAction:function(){},reset:function(){}},d(st,tt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(ye|be),s=this.attrTest(t);return i&&(n&kt||!s)?e|xe:i||s?n&Dt?e|Te:e&ye?e|be:ye:we}}),d(rt,st,{defaults:{event:"pan",threshold:10,pointers:1,direction:jt},getTouchAction:function(){var t=this.options.direction,e=[];return t&Ft&&e.push(ve),t&Wt&&e.push(pe),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,s=t.direction,r=t.deltaX,o=t.deltaY;return s&e.direction||(e.direction&Ft?(s=0===r?Ot:r<0?zt:Rt,n=r!=this.pX,i=Math.abs(t.deltaX)):(s=0===o?Ot:o<0?Ht:qt,n=o!=this.pY,i=Math.abs(t.deltaY))),t.direction=s,n&&i>e.threshold&&s&e.direction},attrTest:function(t){return st.prototype.attrTest.call(this,t)&&(this.state&ye||!(this.state&ye)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=nt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),d(ot,st,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[fe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ye)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),d(at,tt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[le]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(Dt|kt)&&!s)this.reset();else if(t.eventType&Yt)this.reset(),this._timer=u(function(){this.state=Ee,this.tryEmit()},e.time,this);else if(t.eventType&Dt)return Ee;return we},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Ee&&(t&&t.eventType&Dt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Et(),this.manager.emit(this.options.event,this._input)))}}),d(ut,st,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[fe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ye)}}),d(ht,st,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Ft|Wt,pointers:1},getTouchAction:function(){return rt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(Ft|Wt)?e=t.overallVelocity:n&Ft?e=t.overallVelocityX:n&Wt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&Tt(e)>this.options.velocity&&t.eventType&Dt},emit:function(t){var e=nt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),d(ct,tt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[de]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&Yt&&0===this.count)return this.failTimeout();if(i&&s&&n){if(t.eventType!=Dt)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||k(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,o&&r?this.count+=1:this.count=1,this._input=t;var a=this.count%e.taps;if(0===a)return this.hasRequireFailures()?(this._timer=u(function(){this.state=Ee,this.tryEmit()},e.interval,this),ye):Ee}return we},failTimeout:function(){return this._timer=u(function(){this.state=we},this.options.interval,this),we},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Ee&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),lt.VERSION="2.0.7",lt.defaults={domEvents:!1,touchAction:ce,enable:!0,inputTarget:null,inputClass:null,preset:[[ut,{enable:!1}],[ot,{enable:!1},["rotate"]],[ht,{direction:Ft}],[rt,{direction:Ft},["swipe"]],[ct],[ct,{event:"doubletap",taps:2},["tap"]],[at]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Be=1,Se=2;dt.prototype={set:function(t){return vt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?Se:Be},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,s=e.curRecognizer;(!s||s&&s.state&Ee)&&(s=e.curRecognizer=null);for(var r=0;r<i.length;)n=i[r],e.stopped===Se||s&&n!=s&&!n.canRecognizeWith(s)?n.reset():n.recognize(t),!s&&n.state&(ye|be|Te)&&(s=e.curRecognizer=n),r++}},get:function(t){if(t instanceof tt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(h(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(h(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=E(e,t);n!==-1&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return c(T(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return c(T(t),function(t){e?n[t]&&n[t].splice(E(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&pt(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ft(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},vt(lt,{INPUT_START:Yt,INPUT_MOVE:Mt,INPUT_END:Dt,INPUT_CANCEL:kt,STATE_POSSIBLE:ge,STATE_BEGAN:ye,STATE_CHANGED:be,STATE_ENDED:Te,STATE_RECOGNIZED:Ee,STATE_CANCELLED:xe,STATE_FAILED:we,DIRECTION_NONE:Ot,DIRECTION_LEFT:zt,DIRECTION_RIGHT:Rt,DIRECTION_UP:Ht,DIRECTION_DOWN:qt,DIRECTION_HORIZONTAL:Ft,DIRECTION_VERTICAL:Wt,DIRECTION_ALL:jt,Manager:dt,Input:L,TouchAction:$,TouchInput:j,MouseInput:H,PointerEventInput:q,TouchMouseInput:U,SingleTouchInput:F,Recognizer:tt,AttrRecognizer:st,Tap:ct,Pan:rt,Swipe:ht,Pinch:ot,Rotate:ut,Press:at,on:m,off:g,each:c,merge:wt,extend:xt,assign:vt,inherit:d,bindFn:f,prefixed:B});var Ce="undefined"!=typeof s?s:"undefined"!=typeof self?self:{};Ce.Hammer=lt,i=function(){return lt}.call(e,n,e,t),!(i!==a&&(t.exports=i))}(window,document,"Hammer")}]);
//# sourceMappingURL=bundle.js.map