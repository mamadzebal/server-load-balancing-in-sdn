!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="https://d2uowa935fr33t.cloudfront.net/download/",t(0)}({0:function(e,t,n){e.exports=n("./src/support/fallback-mode/index.js")},"./node_modules/css-loader/index.js!./src/support/fallback-mode/confluence-questions-support.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,"body.cq-body{overflow-y:visible;background:#fff;height:auto!important;min-height:500px}body.cq-body .aui-page-panel{border-bottom:0}body.cq-body .cq-page-header .aui-page-header-inner,body.cq-body .cq-page-main .aui-page-panel-inner{max-width:1000px;width:100%}body.cq-body .cq-page-main .aui-page-panel-inner.cq-inner-no-fixed-width{max-width:100%}body.cq-body .onboarding{position:relative;padding-top:110px;width:100%}body.cq-body .onboarding h1{text-transform:uppercase;color:#707070;font-size:12px;font-weight:700}body.cq-body .onboarding .ask-question-image-container{position:absolute;top:0;left:50%;margin-left:-60px}body.cq-body .onboarding .aui{margin-top:20px}body.cq-body #full-height-container{height:auto;background-color:#fff}",""])},"./src/support/fallback-mode/start.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("./src/support/fallback-mode/messages.js"),i=n("./src/support/fallback-mode/metadata.js"),s=o(i);t.default=function(e,t){var o=function(n){e.top.location=n,t.write("<style>body { display:none!important }</style><!--")},i=(0,s.default)(e,t),a=i.isFallbackModeIframe,d=i.isIframeAllowed,c=i.isSpaceQuestions,u=i.isViewPageContentOnly,l=i.isWhitelisted,f=i.bridgeId,p=i.isSpaceOverView,g=(0,r.getMessages)(f),m=g.updateLocationToParent,b=g.onIframeLoaded,h=l||d;if(a&&u){var w=t.createElement("base");w.target="_top",t.getElementsByTagName("head")[0].appendChild(w)}!a&&u&&o(e.location.href.replace("/content-only/","/pages/").replace(/&iframeId=(.*)$/,"")),a&&!h&&o(e.location.href),!a&&h&&c&&o(e.location.href.split("/display").join("/spaces")),a&&d&&!l&&(c&&-1===e.top.location.href.indexOf(e.location.pathname.replace("/display","/spaces"))&&m(e.location.href.split("/display").join("/spaces")),t.addEventListener("DOMContentLoaded",function(){n("./src/support/fallback-mode/confluence-support.css"),n("./src/support/fallback-mode/confluence-tasks-support.css"),n("./src/support/fallback-mode/confluence-questions-support.css"),p&&t.querySelector("body").classList.add("space-overview"),(0,r.initMessaging)(f),b(e.location.href)}))}},"./src/support/fallback-mode/messages.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.initMessaging=t.getMessages=void 0;var r=n("./src/helpers/content-resize-observer.js"),i=n("./src/support/fallback-mode/capture-clicks.js"),s=o(i),a=n("./src/support/fallback-mode/send-message.js"),d=o(a),c=function(){var e=document.body.getBoundingClientRect();return{type:"postIframeSize",width:e.width,height:e.height}},u=function(e){return{type:"postNextIframeLocation",nextLocation:e}},l=function(e){return{type:"postUpdateIframeLocation",nextLocation:e}},f=function(e){return{type:"iframeDOMContentLoaded",location:e}},p=t.getMessages=function(e){var t=(0,d.default)(e),n=function(e){t(f(e))},o=function(e){t(u(e))},r=function(e){t(l(e))},i=function(){t(c())};return{onIframeLoaded:n,pushLocationToParent:o,updateLocationToParent:r,updateIframeSize:i}};t.initMessaging=function(e){var t=p(e),n=t.pushLocationToParent,o=t.updateIframeSize;(0,r.setupContentResizeObserver)(document.body,o),(0,s.default)(function(e){n(e)})}},"./src/helpers/content-resize-observer.js":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.setupContentResizeObserver=function(e,t){if(e){var n=new window.MutationObserver(t);return n.observe(e,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}),n}}},"./src/support/fallback-mode/capture-clicks.js":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=!1,n=void 0;document.addEventListener("click",function(e){e.srcElement&&"A"===e.srcElement.tagName&&(t=!0,n=e.srcElement.href)}),window.addEventListener("beforeunload",function(){t&&(t=!1,e(n))})}},"./src/support/fallback-mode/send-message.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n("./src/facades/window.js");t.default=function(e){return function(t){var n=(0,r.location)(),i=n.origin;i||(i=n.protocol+"//"+n.hostname+(n.port?":"+n.port:"")),(0,r.getWindow)().parent.postMessage(o({},t,{bridgeId:e}),i)}}},"./src/facades/window.js":function(e,t,n){"use strict";function o(e){window.location=e}function r(){return"undefined"!=typeof window?window.location:void 0}function i(){if("undefined"!=typeof window&&window.location){var e=window.location.origin;return e||(e=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),e}}function s(){"undefined"!=typeof window&&window.location.reload()}function a(e){return"undefined"==typeof window?!0:window.confirm(e)}function d(){"undefined"!=typeof window&&window.addEventListener.apply(window,arguments)}function c(){"undefined"!=typeof window&&window.removeEventListener.apply(window,arguments)}function u(e){if("undefined"==typeof window)return e.offsetHeight;var t=window.getComputedStyle(e),n=e.offsetHeight;return n+parseInt(t.marginTop)+parseInt(t.marginBottom)}function l(e){if("undefined"==typeof window)return e.offsetHeight;var t=window.getComputedStyle(e),n=e.offsetHeight;return n-parseInt(t.paddingTop)-parseInt(t.paddingBottom)-parseInt(t.borderTopWidth)-parseInt(t.borderBottomWidth)}function f(e){if("undefined"==typeof window)return e.offsetWidth;var t=window.getComputedStyle(e),n=e.offsetWidth;return n+parseInt(t.marginLeft)+parseInt(t.marginRight)}function p(){return"undefined"==typeof window?0:window.pageYOffset}function g(){return"undefined"==typeof window?0:window.innerWidth}function m(){return"undefined"==typeof window?0:window.innerHeight}function b(){var e=e||{},t=function(e){setTimeout(e,1e3/60)};return e.requestAnimationFrame||t}function h(){return window.require?window.require.apply(window,arguments):void 0}function w(){return"undefined"==typeof window?0:window.history}function y(){return window}Object.defineProperty(t,"__esModule",{value:!0}),t.redirect=o,t.location=r,t.origin=i,t.reload=s,t.confirm=a,t.addEventListener=d,t.removeEventListener=c,t.getOuterHeight=u,t.getInnerHeight=l,t.getOuterWidth=f,t.pageYOffset=p,t.innerWidth=g,t.innerHeight=m,t.requestAnimationFrame=b,t.globalRequire=h,t.getHistory=w,t.getWindow=y},"./src/support/fallback-mode/metadata.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){return Object.keys(d.default).filter(function(t){return-1!==e.indexOf(d.default[t])}).length>0}function i(e,t){var n=e.frameElement&&e.frameElement.getAttribute("name");return n&&n===t}function s(e){return e.frameElement&&e.frameElement.getAttribute("data-bridge-id")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("./src/support/fallback-mode/whitelist.js"),d=o(a);t.default=function(e,t){var n=e.location.href,o=t.getElementsByName("ajs-iframe-allowed-for-spa")[0],a=o&&"true"===o.getAttribute("content")||!1,d="undefined"!=typeof e.__SKIP_FALLBACK_MODE__&&e.__SKIP_FALLBACK_MODE__,c=d||r(n),u=t.getElementById("confluence-space-key"),l=u&&u.getAttribute("content"),f="/display/"+l,p=l&&n.indexOf(f+"/question")>-1||!1,g=n.indexOf("/cq/")>-1&&n.indexOf(".action")>-1||!1,m=n.indexOf("/content-only/")>-1,b=e.top!==e.self&&i(e,"fallback-mode-iframe"),h=s(e),w=n.indexOf("isSpaceOverview=true")>0;return{spaceKey:l,isIframeAllowed:a,isSpaceQuestions:p,isCQActionAndWillReturn:g,isWhitelisted:c,isViewPageContentOnly:m,isFallbackModeIframe:b,bridgeId:h,isSpaceOverView:w}}},"./src/support/fallback-mode/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n("./src/support/fallback-mode/start.js"),i=o(r);(0,i.default)(window,document)},"./src/support/fallback-mode/confluence-support.css":function(e,t,n){var o=n("./node_modules/css-loader/index.js!./src/support/fallback-mode/confluence-support.css");"string"==typeof o&&(o=[[e.id,o,""]]);n("./node_modules/style-loader/addStyles.js")(o,{insertAt:"bottom",singleton:!0});o.locals&&(e.exports=o.locals)},"./node_modules/css-loader/index.js!./src/support/fallback-mode/confluence-support.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,"body.page-gadget,html{height:auto;overflow:hidden}body.page-gadget{background:#fff;opacity:1;padding-top:60px}body.page-gadget #page{position:relative}body.page-gadget #main{padding:0;position:static;width:calc(100% - 110px);margin:0 auto}body.page-gadget.space-overview #main{width:calc(100% - 40px)}body.page-gadget #main.aui-page-panel{border-bottom:0}body.page-gadget #full-height-container,body.page-gadget #page{height:auto}body.theme-default #full-height-container{background-color:#fff}",""])},"./node_modules/css-loader/lib/css-base.js":function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},"./node_modules/style-loader/addStyles.js":function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=p[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(c(o.parts[i],t))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(c(o.parts[i],t));p[o.id]={id:o.id,refs:1,parts:s}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],s=r[1],a=r[2],d=r[3],c={css:s,media:a,sourceMap:d};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=b(),o=y[y.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function d(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,o,r;if(t.singleton){var i=w++;n=h||(h=a(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=d(t),o=f.bind(null,n),r=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),o=l.bind(null,n),r=function(){s(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function l(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var p={},g=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=g(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=g(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,w=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var a=n[s],d=p[a.id];d.refs--,i.push(d)}if(e){var c=r(e);o(c,t)}for(var s=0;s<i.length;s++){var d=i[s];if(0===d.refs){for(var u=0;u<d.parts.length;u++)d.parts[u]();delete p[d.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},"./src/support/fallback-mode/confluence-tasks-support.css":function(e,t,n){var o=n("./node_modules/css-loader/index.js!./src/support/fallback-mode/confluence-tasks-support.css");"string"==typeof o&&(o=[[e.id,o,""]]);n("./node_modules/style-loader/addStyles.js")(o,{insertAt:"bottom",singleton:!0});o.locals&&(e.exports=o.locals)},"./node_modules/css-loader/index.js!./src/support/fallback-mode/confluence-tasks-support.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,"body.confluence-inline-tasks{padding-top:10px}body.page-gadget.confluence-inline-tasks #main{width:100%;padding-left:10px}",""])},"./src/support/fallback-mode/confluence-questions-support.css":function(e,t,n){var o=n("./node_modules/css-loader/index.js!./src/support/fallback-mode/confluence-questions-support.css");"string"==typeof o&&(o=[[e.id,o,""]]);n("./node_modules/style-loader/addStyles.js")(o,{insertAt:"bottom",singleton:!0});o.locals&&(e.exports=o.locals)},"./src/support/fallback-mode/whitelist.js":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}}});