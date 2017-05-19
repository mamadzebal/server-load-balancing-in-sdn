WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'soy/pagetree.soy' */
// This file was automatically generated from pagetree.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Pagetree.Macro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Pagetree == 'undefined') { Confluence.Templates.Pagetree = {}; }
if (typeof Confluence.Templates.Pagetree.Macro == 'undefined') { Confluence.Templates.Pagetree.Macro = {}; }


Confluence.Templates.Pagetree.Macro.loadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="plugin_pagetree_children_loading_wrapper"><div class="spinner"/><span class="plugin_pagetree_children_loading">' + soy.$$escapeHtml("Loading...") + '</span></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Pagetree.Macro.loadingIndicator.soyTemplateName = 'Confluence.Templates.Pagetree.Macro.loadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree.js' */
(function(){var a=function(m){this.$=m;var h=this.$;var B=999;var C=true;var k=false;var w={};var d={};var n=function(K,J,F,I,E){if(J==undefined||J==null){J=!b(K)}if(F==undefined||F==null){F=0}if(!l(K,J)){var H=h("#children"+K);if(z(H)){var G=h("#plusminus"+K);if(J==C){G.removeClass("icon-section-closed").addClass("icon-section-opened")}else{G.removeClass("icon-section-opened").addClass("icon-section-closed")}if(J==C){if(E==false){H.slideDown(300)}else{H.removeClass("plugin-pagetree-hide-children");H.animate({opacity:1})}}else{if(E==false){H.slideUp(300)}else{H.animate({opacity:0},{complete:function(){H.addClass("plugin-pagetree-hide-children")}})}}if(I){r(K)}}else{j(K,new Array(),F,"",I,E)}}if(I){r(K)}};var z=function(E){return E.children("ul[id]").length>0};var b=function(F){var E=h("#plusminus"+F);return(E.length>0)?(E.hasClass("icon-minus")||E.hasClass("icon-section-opened")):k};var l=function(F,E){return b(F)==E};var i=function(G,F,E){A(G,C,F,E)};var x=function(G,F,E){A(G,k,F,E)};var A=function(J,H,G,F){g(J);var I=h("#"+J);var E=I.find("div.plugin_pagetree_children_container");E.each(function(K){var L=v(this.id);n(L,H,B,K==E.length-1,F)});G.preventDefault();G.stopPropagation()};var v=function(E){if(!E||E==undefined){return null}if(E.indexOf("plusminus")!=-1){return E.substring("plusminus".length)}if(E.indexOf("children")!=-1){return E.substring("children".length)}return null};var c=function(E){if(!E||E==undefined){return null}return s(E)[1]};var s=function(E){if(!E||E==undefined){return null}return E.split("-")};var g=function(F){var E=c(F);h("div.plugin_pagetree").each(function(G){if(G==E){h(this).find("span.plugin_pagetree_status").removeClass("hidden");h(this).find("div.plugin_pagetree_expandcollapse").addClass("hidden")}})};var r=function(F){var E=c(F);h("div.plugin_pagetree").each(function(G){if(G==E){h(this).find("span.plugin_pagetree_status").addClass("hidden");h(this).find("div.plugin_pagetree_expandcollapse").removeClass("hidden")}})};var f=function(L,F,I,H,K,E,G){var J=w[L];if(F=="Orphan"){J+="&hasRoot=false&spaceKey="+K}else{J+="&hasRoot=true&pageId="+F}J+="&treeId="+L+"&startDepth="+H+"&mobile="+G;h.each(I,function(){J+="&ancestors="+this});J+="&treePageId="+E;if(G==false){J=(AJS.params.serverUrl||"")+J}return J};var q=function(G){var F=G;var E=null;h("div.plugin_pagetree").each(function(H){if(H==F){E=h(this)}});return E};var p=function(E){var F=E.children("fieldset");var G=new Object();if(F.length>0){F.children("input").each(function(){G[this.name]=this.value})}return G};var o=function(E){var G=E.children("fieldset");var H=new Array();if(G.length>0){var F=G.children("fieldset");if(F.length>0){F.children("input").each(function(){H.push(this.value)})}}return H};var e=function(G,F){var E=h("a.plugin_pagetree_childtoggle",G);E.each(function(){var H=h(this);H.attr("href","#").bind("click",function(K){var I=H.parent().parent().children("div.plugin_pagetree_children_container");var J=I.attr("id");var L=J.substring(8);n(L,null,null,null,F);K.preventDefault();K.stopPropagation()})})};var u=function(E){var F=h(document.createElement("div"));F.html(E);return F.find("ul[id^='child_ul']").length};var j=function(N,G,S,Q,J,F,H){var R=N;var K=J;var E=s(N);var I=E[0];var M=E[1];var L=h("#children"+N);var P=p(q(M));var T=false;function O(){L.find(".plugin_pagetree_children_loading_wrapper .spinner").spin("small")}L.append(Confluence.Templates.Pagetree.Macro.loadingIndicator());if(H){setTimeout(function(){if(!T){O()}},250)}else{O()}h.ajax({type:"GET",url:f(M,I,G,S,Q,P.treePageId,F),dataType:"text",success:function(U){if(u(U)){L.html(U);T=true;if(L.children().length&&L.hasClass("hidden")){L.removeClass("hidden")}e(L,F);h("#plusminus"+R).addClass("icon-section-opened").removeClass("icon-section-closed");h("#childrenspan"+d[parseInt(M)]+"-"+M).addClass("plugin_pagetree_current");if(K){r(R)}t(L);if(AJS.PageGadget&&AJS.PageGadget.contentsUpdated){AJS.PageGadget.contentsUpdated()}}else{window.location=P.loginUrl}AJS.trigger("pagetree-children-loaded")},error:function(U){if(U.status=="403"){L.text(P["i18n-pagetree.error.permission"])}else{L.text(P["i18n-pagetree.error.general"])}}})};var t=function(E){h("div.plugin_pagetree_children_container:empty",E).addClass("hidden")};var y=function(E,J){var H=p(E);var K=H.noRoot=="true";var G=K?"Orphan-"+J:H.rootPageId+"-"+J;var F=H.mobile=="true";w[J]=H.treeRequestId;if(F==false){d[J]=AJS.params.pageId}else{d[J]=h("div.content-container").parent().attr("data-content-id")}E.children("fieldset").each(function(){var L=h(this);L.children("input[treeId]").attr("value",J);L.children("input[rootPage]").attr("value",G)});if(K){E.find("div.plugin_pagetree_children").attr("id","childrenOrphan-"+J);E.find("a.plugin_pagetree_expandall").click(function(L){i("childrenOrphan-"+J,L,F);return false});E.find("a.plugin_pagetree_collapseall").click(function(L){x("childrenOrphan-"+J,L,F);return false})}else{E.find("div.plugin_pagetree_children").attr("id","children"+G);E.find("a.plugin_pagetree_expandall").click(function(L){i("children"+G,L,F);return false});E.find("a.plugin_pagetree_collapseall").click(function(L){x("children"+G,L,F);return false})}var I=o(E);j(G,I,H.startDepth,H.spaceKey,"",F,true)};this.initPageTrees=function(){h("div.plugin_pagetree").each(function(E){y(h(this),E)});D()};var D=function(){var E=self.placeFocus;if(E){self.placeFocus=function(){var F=h("form[name='pagetreesearchform']");F.attr("name","inlinecommentform");E();F.attr("name","pagetreesearchform")}}};h(".open-flyout-to-search").bind("click",function(E){if(h(".fly-out-open").length){setTimeout(function(){ConfluenceMobile.flyout.hide()},400)}else{setTimeout(function(){ConfluenceMobile.flyout.show()},400)}E.stopPropagation();E.preventDefault()})};Confluence=Confluence||{};Confluence.Plugins=Confluence.Plugins||{};Confluence.Plugins.PagetreeMacro={bind:function(b){var c=new a(b);c.initPageTrees()}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree-desktop.js' */
AJS.toInit(function(a){Confluence.Plugins.PagetreeMacro.bind(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:help-dialog-extension', location = '/jira/help-dialog.js' */
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"Insert JIRA Issue/Filter"+":",keys:[["Ctrl+Shift+J"]]})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:help-dialog-extension', location = 'js/help-dialog.js' */
AJS.toInit(function(a){Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat.push({action:"@",context:"autoformat.autocomplete",description:"Mention"})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:footer-analytics', location = '/js/confluence-dashboard/utils/footer-analytics.js' */
define("confluence-dashboard/utils/footer-analytics",["exports","jquery","ajs"],function(a,c,b){b.toInit(function(){var e="confluence.footer.item.click";var d=b.Meta.get("page-id");var f=(0,c)("body").hasClass("dashboard");(0,c)("#footer").on("click","a",function(){b.trigger("analytics",{name:e,data:{pageId:d,isDashboard:f}})})})});require(["confluence-dashboard/utils/footer-analytics"]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-dialog2', location = 'node_modules/@atlassian/aui/src/js/aui/dialog2.js' */
("undefined"===typeof window?global:window).__bdbf9d213bf319eb4577ef21ac6c491c=function(){function f(a){return a&&a.__esModule?a:{"default":a}}function e(a){var c=this.$el=a?(0,g.default)(a):(0,g.default)(aui.dialog.dialog2({}));g.default.each(i,function(a,b){var d="data-"+a;c[0].hasAttribute(d)||c.attr(d,b)})}var h={};"use strict";Object.defineProperty(h,"__esModule",{value:!0});var g=f(__307d3e18fd611f85395c67cddeb1fe24),j=f(__574ac67f906effeb9d8ec2753b23cf28),k=f(__4d02fe17b8e885a34493e34af3d145dd),
b=f(__fe0cd0a7ef176e2ef4e0e105d1ce31f5),l=f(__e3152236c406a356c24f20f7bfcccf21),i={"aui-focus":"false","aui-blanketed":"true"};e.prototype.on=function(a,c){(0,b.default)(this.$el).on(a,c);return this};e.prototype.off=function(a,c){(0,b.default)(this.$el).off(a,c);return this};e.prototype.show=function(){(0,b.default)(this.$el).show();return this};e.prototype.hide=function(){(0,b.default)(this.$el).hide();return this};e.prototype.remove=function(){(0,b.default)(this.$el).remove();return this};e.prototype.isVisible=
function(){return(0,b.default)(this.$el).isVisible()};var d=(0,l.default)("dialog2",e);d.on=function(a,c){b.default.on(a,".aui-dialog2",c);return this};d.off=function(a,c){b.default.off(a,".aui-dialog2",c);return this};(0,g.default)(document).on("click",".aui-dialog2-header-close",function(a){a.preventDefault();d((0,g.default)(this).closest(".aui-dialog2")).hide()});d.on("show",function(a,c){var b;[".aui-dialog2-content",".aui-dialog2-footer",".aui-dialog2-header"].some(function(a){b=c.find(a+" :aui-tabbable");
return b.length});b&&b.first().focus()});d.on("hide",function(a,c){var d=(0,b.default)(c);c.data("aui-remove-on-hide")&&d.remove()});(0,j.default)("aui/dialog2",d);(0,k.default)("dialog2",d);h.default=d;return h=h["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:dialog2', location = 'src/soy/dialog2.soy' */
// This file was automatically generated from dialog2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.dialog.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dialog == 'undefined') { aui.dialog = {}; }


aui.dialog.dialog2 = function(opt_data, opt_ignored) {
  return '' + aui.dialog.dialog2Chrome({id: opt_data.id, titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, modal: opt_data.modal, tagName: opt_data.tagName, removeOnHide: opt_data.removeOnHide, visible: opt_data.visible, size: opt_data.size, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: '' + aui.dialog.dialog2Content({id: null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, headerActionContent: opt_data.headerActionContent, headerSecondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal, content: opt_data.content, footerHintText: opt_data.footerHintText, footerHintContent: opt_data.footerHintContent, footerActionContent: opt_data.footerActionContent})});
};
if (goog.DEBUG) {
  aui.dialog.dialog2.soyTemplateName = 'aui.dialog.dialog2';
}


aui.dialog.dialog2Chrome = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.titleId) ? ' aria-labelledby="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' role="dialog" class=" aui-layer aui-dialog2 aui-dialog2-' + soy.$$escapeHtml(opt_data.size ? opt_data.size : 'medium') + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.modal) ? 'data-aui-modal="true"' : '') + ((opt_data.removeOnHide) ? 'data-aui-remove-on-hide="true"' : '') + ((opt_data.visible != true) ? 'aria-hidden="true"' : '') + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + '>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Chrome.soyTemplateName = 'aui.dialog.dialog2Chrome';
}


aui.dialog.dialog2Content = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + aui.dialog.dialog2Header({titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, actionContent: opt_data.headerActionContent, secondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal}) + aui.dialog.dialog2Panel(opt_data) + aui.dialog.dialog2Footer({hintText: opt_data.footerHintText, hintContent: opt_data.footerHintContent, actionContent: opt_data.footerActionContent});
};
if (goog.DEBUG) {
  aui.dialog.dialog2Content.soyTemplateName = 'aui.dialog.dialog2Content';
}


aui.dialog.dialog2Header = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<header' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-header' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><h2 ' + ((opt_data.titleId) ? ' id="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' class="aui-dialog2-header-main">' + ((opt_data.titleText) ? soy.$$escapeHtml(opt_data.titleText) : '') + ((opt_data.titleContent) ? soy.$$filterNoAutoescape(opt_data.titleContent) : '') + '</h2>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-header-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.secondaryContent) ? '<div class="aui-dialog2-header-secondary">' + soy.$$filterNoAutoescape(opt_data.secondaryContent) + '</div>' : '') + ((opt_data.modal != true) ? '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml("Close") + '</span></a>' : '') + '</header>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Header.soyTemplateName = 'aui.dialog.dialog2Header';
}


aui.dialog.dialog2Footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<footer' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-footer' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-footer-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.hintText || opt_data.hintContent) ? '<div class="aui-dialog2-footer-hint">' + ((opt_data.hintText) ? soy.$$escapeHtml(opt_data.hintText) : '') + ((opt_data.hintContent) ? soy.$$filterNoAutoescape(opt_data.hintContent) : '') + '</div>' : '') + '</footer>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Footer.soyTemplateName = 'aui.dialog.dialog2Footer';
}


aui.dialog.dialog2Panel = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-content' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</div>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Panel.soyTemplateName = 'aui.dialog.dialog2Panel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/js/page-loading-indicator.js' */
define("confluence/page-loading-indicator",["jquery","underscore","ajs","confluence/templates"],function(c,g,a,h){return function(b){function d(){return c(".confluence-page-loading-blanket",b)}function e(){return c(".confluence-loading-indicator",b)}return{show:function(){0===d().length&&c(b).append(h.pageLoadingIndicator());d().show();e().spin({lines:12,length:8,width:4,radius:10,trail:60,speed:1.5,color:"#F0F0F0"})},hide:function(){e().stop();d().hide()},showUntilResolved:function(c,b){this.show();
c.always(g.bind(this.hide,this));b&&c.fail(function(){a.messages.error(".confluence-page-loading-errors",{body:b})})},showUntilDialogVisible:function(b,d){var f=this,e=d||"An error has occurred connecting to the server. Please try again.",g=c(".aui-dialog:visible"),h=c(".aui-dialog2:visible");!g.length&&!h.length&&f.show();b.always(f.hide).fail(function(){a.messages.error(".confluence-page-loading-errors",{body:e})});a.bind("show.dialog",function i(){a.unbind("show.dialog",i);f.hide()});if(null!=a.dialog2&&void 0!=a.dialog2)a.dialog2.on("show",
function j(){a.dialog2.off("show",j);f.hide()})},destroy:function(){b.remove(".confluence-page-loading-blanket")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/page-loading-indicator","Confluence.PageLoadingIndicator");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/soy/page-loading-indicator.soy' */
// This file was automatically generated from page-loading-indicator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }


Confluence.Templates.pageLoadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="confluence-page-loading-errors"></div><div class="confluence-page-loading-blanket aui-blanket" aria-hidden="false"><div class="confluence-loading-indicator"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.pageLoadingIndicator.soyTemplateName = 'Confluence.Templates.pageLoadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:event', location = '/includes/js/api/event.js' */
define("confluence/api/event",["ajs"],function(a){return{bind:function(){a.bind.apply(this,arguments)},unbind:function(){a.unbind.apply(this,arguments)},trigger:function(){a.trigger.apply(this,arguments)},stopEvent:function(){a.stopEvent.apply(this,arguments)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/deferred-dialog-loader.js' */
define("confluence/deferred-dialog-loader",["underscore","jquery","ajs","confluence/page-loading-indicator","confluence/api/event"],function(a,d,e,g,f){return function(){var h=g(d("body"));a.each({userStatus:{resource:"confluence.userstatus:userstatus-resources",selector:"#create-user-status-link",event:"deferred.userstatus.click"},movePageDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-page-dialog-link",event:"deferred.page-move.tools-menu"},movePageDialogEditor:{resource:"confluence.web.resources:page-move-resources",
selector:"#rte-button-location",event:"deferred.page-move.editor"},moveBlogDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-blogpost-dialog-link",event:"deferred.blog-move.tools-menu"},availableGadgetsHelp:{resource:"com.atlassian.confluence.plugins.gadgets:gadget-directory-resources",selector:"#gadget-directory-link",event:"deferred.available-gadgets.help-menu"},aboutConfluenceHelp:{resource:"confluence.web.resources:about",selector:"#confluence-about-link",
event:"deferred.about-confluence.help-menu"}},function(b){d("body").on("click",b.selector,function(a){var c=WRM.require("wr!"+b.resource,function(){f.trigger(b.event)});h.showUntilDialogVisible(c);c=b.resource+".requested";e.Analytics?e.Analytics.triggerPrivacyPolicySafeEvent(c):f.trigger("analyticsEvent",{name:c});a.preventDefault()})})}});require("confluence/module-exporter").safeRequire("confluence/deferred-dialog-loader",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/page-permissions-deferred-loader.js' */
define("confluence/page-permissions-deferred-loader","confluence/dark-features confluence/legacy ajs confluence/page-loading-indicator jquery wrm".split(" "),function(c,d,a,e,b,f){var g=e(b("body"));return function(b){var c=f.require("wr!com.atlassian.confluence.plugins.confluence-page-restrictions-dialog:dialog-resources",function(){a.trigger("deferred.page.permissions")});g.showUntilDialogVisible(c,"There was an error loading the page restrictions. Please try again later.");b.preventDefault()}});
require("confluence/module-exporter").safeRequire("confluence/page-permissions-deferred-loader",function(c){var d=require("ajs"),a=require("skate");a("action-page-permissions",{type:a.types.CLASS,events:{click:function(a,b){c(b)}}});a("rte-button-restrictions",{type:a.types.CLASS,events:{click:function(a,b){c(b)}}});d.bind("system-content-metadata.open-restrictions-dialog",c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:site-status-web-item', location = '/includes/js/site-status-web-item.js' */
define("confluence/site-status-web-item",["document","confluence/api/event"],function(a,c){function d(){c.trigger("analyticsEvent",{name:"site-status.requested"})}return{bind:function(){var b=a.getElementById("site-status-menu-link");b&&(b.onclick=d)}}});require("confluence/module-exporter").safeRequire("confluence/site-status-web-item",function(a){require("ajs").toInit(a.bind)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:navigator-context', location = '/includes/js/api/navigator-context.js' */
define("confluence/api/navigator-context",["confluence/meta","confluence/api/querystring","document","window"],function(c,m,b,i){var j=function(a){a=e(a);return"undefined"!==typeof a&&0!==a},e=function(a){a=c.get(a);return isNaN(a)?void 0:Number(a)},k=function(a){return(a=a.match(/[^/?#]*\/plugins\/servlet\/ac\/([^/?#]*)\/([^/?#]*)$/))?{addonKey:a[1],moduleKey:a[2]}:null},l=function(){return!!b.querySelector(".page.view")||!!b.querySelector(".blogpost.view")},f=function(){return!!b.querySelector(".page.edit")||
!!b.querySelector(".blogpost.edit")},g=function(){return c.get("content-type")},d=function(){return e("page-id")},h=function(){return c.get("space-key")};return{getCurrent:function(){if(f()&&0===d()&&j("draft-id"))return{target:"contentcreate",context:{contentId:e("draft-id"),contentType:g(),spaceKey:h()}};if(f()&&!l()&&0!==d())return{target:"contentedit",context:{contentId:d(),contentType:g(),spaceKey:h()}};if(!f()&&l()&&j("page-id"))return{target:"contentview",context:{contentId:d(),contentType:g(),
spaceKey:h()}};if(null!=k(i.location.pathname)){var a=i.location,b=k(a.pathname),c=m.parse(a.search),a=Object.keys(c).reduce(function(a,b){a[decodeURIComponent(b).replace(/^ac\./g,"")]=c[b].map(decodeURIComponent);return a},{});return{target:"addonmodule",context:{addonKey:decodeURIComponent(b.addonKey),moduleKey:decodeURIComponent(b.moduleKey),context:a}}}return{target:"unknown",context:{}}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/AlmondNoConflictPrefix.js' */
window.__require=window.require;window.__requirejs=window.requirejs;window.__define=window.define;
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'thirdparty/almond.js' */
var requirejs,require,define;(function(e){var h,a,l,m,d={},c={},s={},p={},k=Object.prototype.hasOwnProperty,i=[].slice,j=/\.js$/;function t(u,v){return k.call(u,v)}function n(x,v){var F,B,z,C,G,y,I,J,E,D,A,H=v&&v.split("/"),w=s.map,u=(w&&w["*"])||{};if(x&&x.charAt(0)==="."){if(v){x=x.split("/");G=x.length-1;if(s.nodeIdCompat&&j.test(x[G])){x[G]=x[G].replace(j,"")}x=H.slice(0,H.length-1).concat(x);for(E=0;E<x.length;E+=1){A=x[E];if(A==="."){x.splice(E,1);E-=1}else{if(A===".."){if(E===1&&(x[2]===".."||x[0]==="..")){break}else{if(E>0){x.splice(E-1,2);E-=2}}}}}x=x.join("/")}else{if(x.indexOf("./")===0){x=x.substring(2)}}}if((H||u)&&w){F=x.split("/");for(E=F.length;E>0;E-=1){B=F.slice(0,E).join("/");if(H){for(D=H.length;D>0;D-=1){z=w[H.slice(0,D).join("/")];if(z){z=z[B];if(z){C=z;y=E;break}}}}if(C){break}if(!I&&u&&u[B]){I=u[B];J=E}}if(!C&&I){C=I;y=J}if(C){F.splice(0,y,C);x=F.join("/")}}return x}function r(u,v){return function(){var w=i.call(arguments,0);if(typeof w[0]!=="string"&&w.length===1){w.push(null)}return a.apply(e,w.concat([u,v]))}}function o(u){return function(v){return n(v,u)}}function f(u){return function(v){d[u]=v}}function g(v){if(t(c,v)){var u=c[v];delete c[v];p[v]=true;h.apply(e,u)}if(!t(d,v)&&!t(p,v)){throw new Error("No "+v)}return d[v]}function q(v){var w,u=v?v.indexOf("!"):-1;if(u>-1){w=v.substring(0,u);v=v.substring(u+1,v.length)}return[w,v]}l=function(v,u){var w,y=q(v),x=y[0];v=y[1];if(x){x=n(x,u);w=g(x)}if(x){if(w&&w.normalize){v=w.normalize(v,o(u))}else{v=n(v,u)}}else{v=n(v,u);y=q(v);x=y[0];v=y[1];if(x){w=g(x)}}return{f:x?x+"!"+v:v,n:v,pr:x,p:w}};function b(u){return function(){return(s&&s.config&&s.config[u])||{}}}m={require:function(u){return r(u)},exports:function(u){var v=d[u];if(typeof v!=="undefined"){return v}else{return(d[u]={})}},module:function(u){return{id:u,uri:"",exports:d[u],config:b(u)}}};h=function(v,F,E,D){var y,C,z,u,x,A=[],w=typeof E,B;D=D||v;if(w==="undefined"||w==="function"){F=!F.length&&E.length?["require","exports","module"]:F;for(x=0;x<F.length;x+=1){u=l(F[x],D);C=u.f;if(C==="require"){A[x]=m.require(v)}else{if(C==="exports"){A[x]=m.exports(v);B=true}else{if(C==="module"){y=A[x]=m.module(v)}else{if(t(d,C)||t(c,C)||t(p,C)){A[x]=g(C)}else{if(u.p){u.p.load(u.n,r(D,true),f(C),{});A[x]=d[C]}else{throw new Error(v+" missing "+C)}}}}}}z=E?E.apply(d[v],A):undefined;if(v){if(y&&y.exports!==e&&y.exports!==d[v]){d[v]=y.exports}else{if(z!==e||!B){d[v]=z}}}}else{if(v){d[v]=E}}};requirejs=require=a=function(x,y,u,v,w){if(typeof x==="string"){if(m[x]){return m[x](y)}return g(l(x,y).f)}else{if(!x.splice){s=x;if(s.deps){a(s.deps,s.callback)}if(!y){return}if(y.splice){x=y;y=u;u=null}else{x=e}}}y=y||function(){};if(typeof u==="function"){u=v;v=w}if(v){h(e,x,y,u)}else{setTimeout(function(){h(e,x,y,u)},4)}return a};a.config=function(u){return a(u)};requirejs._defined=d;define=function(u,v,w){if(typeof u!=="string"){throw new Error("See almond README: incorrect module build, no module name")}if(!v.splice){w=v;v=[]}if(!t(d,u)&&!t(c,u)){c[u]=[u,v,w]}};define.amd={jQuery:true}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/AlmondNoConflictPostfix.js' */
if(window.__require){window.require=window.__require;window.requirejs=window.__requirejs;window.define=window.__define}else{delete window.define.amd};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/ApexModuleManager.js' */
define("gliffy/amd/apexModuleManager",function(){var a=[];return{reset:function(){a=[]},define:function(){a.push(arguments[0]);window.define.apply(window,arguments)},instantiateAll:function(){a.forEach(function(b){require(b)})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/confluence/AlmondRegistrations.js' */
delete define.amd;define("jquery",[],function(){return jQuery});define("underscore",[],function(){return _});define("selectize",[],function(){return Selectize});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/Util.js' */
define("gliffy/util",[],function(){return{format:function(b){var a=Array.prototype.slice.call(arguments,1);return b.replace(/{(\d+)}/g,function(c,d){return(typeof a[d]!="undefined")?a[d]:"undefined"})},htmlDecode:function(a){var b=document.createElement("div");b.innerHTML=a;return b.childNodes.length===0?"":b.childNodes[0].nodeValue}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/Url.js' */
define("gliffy/url",{buildPath:function(a){return a.reduce(function(b,c){if(c==null){return b}else{if(b){return b+"/"+encodeURIComponent(c)}}return encodeURIComponent(c)},"")},buildQuery:function(a){return _.reduce(a,function(b,d,c){if(d==null){return b}else{if(b){return b+"&"+encodeURIComponent(c)+"="+encodeURIComponent(d)}}return encodeURIComponent(c)+"="+encodeURIComponent(d)},"")},buildPathAndQuery:function(a,c){var b=[this.buildPath(a)];if((typeof c!=="undefined")&&Object.keys(c).length>0){b.push(this.buildQuery(c))}return b.join("?")},buildRootedPathAndQuery:function(b,a,c){return b+"/"+this.buildPathAndQuery(a,c)},parse:function(b){var f=/^(?:([a-z]*):)?(?:\/\/)?(?:([^:@]*)(?::([^@]*))?@)?([0-9a-z-._]+)?(?::([0-9]*))?(\/[^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/i;var g=b.match(f)||[];var e={url:b,scheme:g[1],user:g[2],pass:g[3],host:g[4],port:g[5]&&+g[5],path:g[6],query:g[7],hash:g[8]};e.queryParams={};var c=e.query.split("&");for(var a=0;a<c.length;a++){var d=c[a].split("=");e.queryParams[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}return e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/controls/alert/Alert.soy' */
// This file was automatically generated from Alert.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.controls.alert.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.controls == 'undefined') { gliffySoy.controls = {}; }
if (typeof gliffySoy.controls.alert == 'undefined') { gliffySoy.controls.alert = {}; }


gliffySoy.controls.alert.CompleteAlert = function(opt_data, opt_ignored) {
  return '<div id="gliffy-alert-save-as-complete" class="alert alert-success gliffy-alert"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>' + soy.$$escapeHtml(opt_data.diagramName) + '</strong>&nbsp;' + soy.$$escapeHtml("successfully saved to page") + '&nbsp;<a class="gliffy-alert-link" href="' + soy.$$escapeHtml(opt_data.linkUrl) + '" target="_blank"><img class="page-icon"/><strong>&nbsp;' + soy.$$escapeHtml(opt_data.pageName) + '</strong></a><br/>' + soy.$$escapeHtml("in space") + '&nbsp;<strong>' + soy.$$escapeHtml(opt_data.spaceName) + '</strong></div>';
};
if (goog.DEBUG) {
  gliffySoy.controls.alert.CompleteAlert.soyTemplateName = 'gliffySoy.controls.alert.CompleteAlert';
}


gliffySoy.controls.alert.ErrorAlert = function(opt_data, opt_ignored) {
  return '<div id="gliffy-alert-save-as-error" class="alert alert-error gliffy-alert"><a href="#" class="close" data-dismiss="alert">&times;</a>' + soy.$$filterNoAutoescape(opt_data.errorDetail) + '</div>';
};
if (goog.DEBUG) {
  gliffySoy.controls.alert.ErrorAlert.soyTemplateName = 'gliffySoy.controls.alert.ErrorAlert';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/ObjectValidatorFactory.js' */
define("gliffy/objectValidatorFactory",["jquery","underscore","gliffy/util"],function(d,b,a){var c=function(f){var e=function(g,i,h){throw new Error(a.format("{0} {1} value ({2}) failed predicate: {3}",f.description,g,d.isFunction(i)?"[function]":i,h))};if(!b.isString(f.description)){f.description="ObjectValidator construction parameters";e("description",f.description,"Expected value to be a string.")}if(typeof f.keyToPredicateMap==="undefined"){f.description="ObjectValidator construction parameters";e("keyToPredicateMap",f.keyToPredicateMap,"Expected value to be defined.")}d.each(f.keyToPredicateMap,function(h,g){if(!b.isFunction(g.func)){e("keyToPredicateMap "+h+".func",g.func,"Expected value to be a function.")}if(!b.isString(g.failureMessage)){e("keyToPredicateMap "+h+".failureMessage",g.failureMessage,"Expected value to be a string.")}});this._={keyToPredicateMap:f.keyToPredicateMap,fail:e}};c.prototype.validate=function(f){var e=this;if(f==null){throw new Error("ObjectValidator.validate() requires non-null input.")}d.each(e._.keyToPredicateMap,function(h,g){if(!g.func(f[h])){e._.fail(h,f[h],g.description)}})};return{create:function(e){return new c(e)},predicates:{isString:{func:b.isString,failureMessage:"Expected value to be a string."},isNumber:{func:b.isNumber,failureMessage:"Expected value to be a number."},isFunction:{func:b.isFunction,failureMessage:"Expected value to be a function."},isArray:{func:b.isArray,failureMessage:"Expected value to be an array."},isTruthy:{func:function(e){return e==true},failureMessage:"Expected value to be truthy."},isFalsey:{func:function(e){return e==false},failureMessage:"Expected value to be falsey."},isDefinedAndNotNull:{func:function(e){return e!=null},failureMessage:"Expected value to be defined and not null."},containsAnyKey:{func:function(e){return Object.keys(e).length>0},failureMessage:"Expected value to contain at least one key."}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/confluence/PageFacade.js' */
define("gliffy/confluence/pageFacade",["jquery","gliffy/confluence/rest/webRequestPromiseFactory"],function(g,h){var i=function(m){var o=h.buildGetPageContentPromise(AJS.params.pageId);var p=function(u){var t=u.body.storage.value;var v=g("<div/>").append(t);var r=v.find("ac\\:parameter[ac\\:name='']");r.remove();var s=v.find("p:has(ac\\:parameter[ac\\:name='version'])p:has(ac\\:parameter[ac\\:name='name'])").filter(function(){var y=g(this).find("ac\\:parameter[ac\\:name='version']").text()===m.version.toString();var x=g(this).find("ac\\:parameter[ac\\:name='name']").text()===m.name;var w=g(this).find("ac\\:parameter[ac\\:name='pageid']");var z=((w.length===0)&&(AJS.params.pageId===m.ownerPageId))||(w.text()===m.ownerPageId.toString());return y&&x&&z});var q=s.find("ac\\:parameter[ac\\:name='version']");q.remove();u.body.storage.value=v.html();u.version.number=u.version.number+1;if(u.ancestors){if(u.ancestors.length===0){delete u.ancestors}else{if(u.ancestors.length>1){u.ancestors=[u.ancestors.pop()]}}}return h.buildPutPageContentPromise(AJS.params.pageId,u)};var n=function(){window.location.reload()};g.when(o).then(p).then(n)};var c=function(m){var o=AJS.format("{0}/rpc/json-rpc/confluenceservice-v2",AJS.Confluence.getContextPath());var p=o+"/getPage";var n=[AJS.params.pageId];g.ajax({type:"POST",url:p,contentType:"application/json",data:JSON.stringify(n),success:function(r){var u=r.content;var w=g("<div/>").append(u);var t=w.find("ac\\:parameter[ac\\:name='']");t.remove();var v=w.find("p:has(ac\\:parameter[ac\\:name='version'])p:has(ac\\:parameter[ac\\:name='name'])").filter(function(){var z=g(this).find("ac\\:parameter[ac\\:name='version']").text()===String(m.version);var y=g(this).find("ac\\:parameter[ac\\:name='name']").text()===m.name;var x=g(this).find("ac\\:parameter[ac\\:name='pageid']");var A=((x.length===0)&&(AJS.params.pageId===m.ownerPageId))||(x.text()===m.ownerPageId.toString());return z&&y&&A});var s=v.find("ac\\:parameter[ac\\:name='version']");s.remove();var q={jsonrpc:"2.0",method:"updatePage",params:[{id:r.id,space:r.space,title:r.title,parentId:r.parentId,version:r.version,content:w.html()},{versionComment:"Unpinned macro version",minorEdit:false}],id:AJS.params.pageId};g.ajax({type:"POST",contentType:"application/json",url:o,data:JSON.stringify(q),success:function(){window.location.reload()}})}})};var d=function(m){if(AJS.Rte&&typeof AJS.Rte.getEditor==="function"&&AJS.Rte.getEditor()){var n;if(m.ownerPageId===AJS.params.pageId){n=AJS.format('.editor-inline-macro[data-macro-parameters="name={0}|version={1}"]',m.name,m.version)}else{n=AJS.format('.editor-inline-macro[data-macro-parameters="name={0}|pageid={2}|version={1}"]',m.name,m.version,m.ownerPageId)}var o=AJS.Rte.getEditor().dom.select(n);AJS.$.each(o,function(r,p){var q=k(g(p));q.version=undefined;a(q,p)})}};var f=function(m){var n=g.extend(true,{},m);if(n.ownerPageId!==AJS.params.pageId){n.pageid=n.ownerPageId}delete n.ownerPageId;if(n.version===0){delete n.version}if(n.size==="O"||n.size==="L"){delete n.size}if(!n.border){delete n.border}if(n.chrome==="full"){delete n.chrome}if(!!n.html5){delete n.html5}return n};var b=function(m){return{ownerPageId:m.pageid||AJS.params.pageId,name:m.name,version:m.version,size:m.size,border:m.border,chrome:m.chrome,html5:m.html5}};var e=function(m){return{ownerPageId:m.data("ceoid")||AJS.params.pageId,name:m.data("filename"),version:m.data("version"),size:m.data("size"),border:m.data("border"),chrome:m.data("chrome"),html5:m.data("html5")}};var a=function(n,o){if(AJS.Rte&&typeof AJS.Rte.getEditor==="function"&&AJS.Rte.getEditor()){var m,p={contentId:Confluence.Editor.getContentId(),macro:{name:"gliffy",params:f(n),defaultParameterValue:"",body:""}};if(g.browser.msie&&AJS.$.Deferred){tinymce.confluence.NodeUtils.replaceNode=replaceNode}AJS.Rte.BookmarkManager.restoreBookmark();m=tinymce.confluence.MacroUtils.insertMacro(p,o);if(m&&m.then){m.then(function(){if(g.browser.msie){tinymce.confluence.NodeUtils.replaceNode=j}},function(){if(g.browser.msie){tinymce.confluence.NodeUtils.replaceNode=j}})}l();return m}else{throw"addDiagramReference not yet implemented for non-RTE"}};var k=function(o){if(AJS.Rte&&typeof AJS.Rte.getEditor==="function"&&AJS.Rte.getEditor()){var n={};var m=o.data&&o.data("macro-parameters");m=m||(o.dataset&&o.dataset.macroParameters);if(m){g.each(m.split("|"),function(p,q){var r=q.split("=");n[r[0]]=r[1]})}return b(n)}else{return e(o)}};var l=function(){if(AJS.Rte&&typeof AJS.Rte.getEditorFrame==="function"&&AJS.Rte.getEditorFrame()){g(AJS.Rte.getEditorFrame()).focus()}var m=g("#gliffy-editor")[0];if(m){m.contentWindow.focus()}};var j=(AJS.Rte&&typeof AJS.Rte.getEditor==="function"&&AJS.Rte.getEditor())?tinymce.confluence.NodeUtils.replaceNode:null;return{unpinDiagramReferenceVersion:function(m){if(AJS.Rte&&typeof AJS.Rte.getEditor==="function"&&AJS.Rte.getEditor()){d(m)}else{var o=AJS.version.split(".");var n=!(parseInt(o[0])>=5&&parseInt(o[1])>=4);if(n){c(m)}else{i(m)}}},addDiagramReference:a,getDiagramReference:k,getDiagramReferences:function(){var m=[];var n;if(AJS.Rte&&typeof AJS.Rte.getEditor==="function"&&AJS.Rte.getEditor()){n=g("iframe").contents().find(".editor-inline-macro[data-macro-name='gliffy']")}else{n=g(".gliffy-container")}n.each(function(o,p){m.push(k(g(p)))});return m}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/confluence/rest/UrlFactory.js' */
define("gliffy/confluence/rest/urlFactory",["gliffy/url"],function(a){var c;if(typeof GLIFFY!=="undefined"&&GLIFFY.baseConfluenceUrl!==undefined&&GLIFFY.baseConfluenceUrl!==null){c=GLIFFY.baseConfluenceUrl}else{c=AJS.params.baseUrl}var b=c+"/rest/gliffy/1.0";return{buildPrependDiagramToPageUrl:function(d){return a.buildRootedPathAndQuery(b,["diagrams","saveas",d.sourcePageId,d.sourceDiagramName],{sourceDiagramVersion:d.sourceDiagramVersion,targetPageId:d.targetPageId,space:d.targetSpaceKey,targetDiagramName:d.targetDiagramName,targetPageTitle:d.targetPageTitle,includeAlertLinkUrlParams:d.includeAlertLinkUrlParams})},buildGetSpacesUrl:function(e,d){return a.buildRootedPathAndQuery(b,["spaces"],{start:e,limit:d})},buildSpaceSearchUrl:function(e,f,d){return a.buildRootedPathAndQuery(b,["spaces"],{searchTerm:e,start:f,limit:d});return b+"/"+pathAndQuery},buildPageSearchUrl:function(e,f,g,d){return a.buildRootedPathAndQuery(b,["page","search"],{searchTerm:e||"",start:g,limit:d,expand:"space",spaceKeys:f&&f.join(",")})},buildPageEditPermissionUrl:function(e,d){return AJS.format("{0}/ceo/{1}/permission",e,d)},buildGetDiagramsInPageUrl:function(d){return a.buildRootedPathAndQuery(b,["page",d,"diagrams"])},buildPageWithTitleExistsInSpaceUrl:function(e,d){return a.buildRootedPathAndQuery(b,["spaces",d,"pageExists"],{title:e})},buildUnlinkDiagramUrl:function(d){return a.buildRootedPathAndQuery(b,["diagrams","unlink",d.sourcePageId,d.sourceDiagramName],{sourceDiagramVersion:d.sourceDiagramVersion,targetPageId:d.targetPageId,targetDiagramName:d.targetDiagramName})},buildPageContentUrl:function(d){return AJS.format("{0}/rest/api/content/{1}?expand=body.storage,version,space,ancestors",c,d)},buildEditDiagramPermissionUrl:function(d,e){return a.buildRootedPathAndQuery(b,["ceo",d,"diagrams",e,"permission"])},buildCreateAttachmentPermissionUrl:function(d){return a.buildRootedPathAndQuery(b,["ceo",d,"permission"])},buildPropertyUrl:function(d){return a.buildRootedPathAndQuery(b,["properties",d])},buildDiagramPreviewImageUrl:function(e,f,d){return a.buildRootedPathAndQuery(b,["diagrams","preview"],{name:f,pageId:e,version:d})},buildDiagramThumbnailImageUrl:function(e,f,d){return a.buildRootedPathAndQuery(b,["diagrams","thumbnail"],{name:f,pageId:e,version:d})},buildGetDiagramVersionsUrl:function(d,e){return a.buildRootedPathAndQuery(b,["diagrams","allVersionInformation"],{pageId:d,name:e})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/confluence/rest/WebRequestPromiseFactory.js' */
define("gliffy/confluence/rest/webRequestPromiseFactory",["jquery","gliffy/confluence/rest/urlFactory"],function(a,b){return{buildPrependDiagramToPagePromise:function(e){var g=b.buildPrependDiagramToPageUrl(e);if(window.GLIFFY&&window.GLIFFY.Mouse&&window.GLIFFY.Mouse.editor){var f=window.GLIFFY.Mouse.editor;var c=f.getDocumentManager().getActiveDocument().toObject();var d=f.getDocumentManager().getActiveStage();if(window.GLIFFY.Spinner){window.GLIFFY.Spinner.show(a("body"))}return f.getDocumentManager().getImageData(d,"image/png",function(h,i){c.image=h;i.resolve(c)},false,1).then(function(h){return a.ajax({type:"POST",contentType:"application/json",data:JSON.stringify(h),url:g})})}else{return a.post(g)}},buildGetSpacesPromise:function(d,c){return a.get(b.buildGetSpacesUrl(d,c))},buildSpaceSearchPromise:function(d,e,c){return a.get(b.buildSpaceSearchUrl(d,e,c))},buildPageSearchPromise:function(d,e,f,c){return a.get(b.buildPageSearchUrl(d,e,f,c))},buildGetDiagramsInPagePromise:function(c){return a.get(b.buildGetDiagramsInPageUrl(c))},buildPageWithTitleExistsInSpacePromise:function(d,c){return a.get(b.buildPageWithTitleExistsInSpaceUrl(d,c))},buildUnlinkDiagramPromise:function(c){return a.post(b.buildUnlinkDiagramUrl(c))},buildGetPageContentPromise:function(c){return a.ajax(b.buildPageContentUrl(c))},buildPutPageContentPromise:function(c,d){return a.ajax({type:"PUT",contentType:"application/json; charset=utf-8",url:b.buildPageContentUrl(c),data:JSON.stringify(d),dataType:"text",processData:false})},buildGetEditPagePermissionPromise:function(d,c){return a.ajax({type:"GET",url:b.buildPageEditPermissionUrl(d,c),dataType:"json",cache:false})},buildGetEditDiagramPermissionPromise:function(c,d){return a.ajax({type:"GET",url:b.buildEditDiagramPermissionUrl(c,d),dataType:"json",cache:false})},buildGetCreateAttachmentPermissionPromise:function(c){return a.ajax({type:"GET",url:b.buildCreateAttachmentPermissionUrl(c),dataType:"json",cache:false})},buildGetPropertyValuePromise:function(d){var c=new a.Deferred();a.get(b.buildPropertyUrl(d)).then(function(e){c.resolve(e[d])});return c},buildGetDiagramVersionsPromise:function(c,d){return a.get(b.buildGetDiagramVersionsUrl(c,d))}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/controls/imageselection/ImageSelectionControl.soy' */
// This file was automatically generated from ImageSelectionControl.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.widget.image.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.widget == 'undefined') { gliffySoy.widget = {}; }
if (typeof gliffySoy.widget.image == 'undefined') { gliffySoy.widget.image = {}; }


gliffySoy.widget.image.gliffyImageSelectionWidget = function(opt_data, opt_ignored) {
  return '<div class="gliffy-image-selection"><div class="gliffy-image-selection-inner-panel" title="' + soy.$$escapeHtml(opt_data.labelText) + '"><div class="gliffy-image-selection-spinner"/><div><img class="gliffy-image-selection-image" src="' + soy.$$escapeHtml(opt_data.imageUrl) + '"/><div class="gliffy-image-selection-icon gliffy-image-selection-zoom"><img/></div></div></div><div class="gliffy-image-selection-label">' + soy.$$escapeHtml(opt_data.labelText) + '</div></div>';
};
if (goog.DEBUG) {
  gliffySoy.widget.image.gliffyImageSelectionWidget.soyTemplateName = 'gliffySoy.widget.image.gliffyImageSelectionWidget';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/controls/imageselection/ImageSelectionControlFactory.js' */
define("gliffy/controls/imageselection/imageSelectionControlFactory",["jquery","gliffy/objectValidatorFactory"],function(c,b){var a=function(h){var e=this;b.create({description:"ListTable constructor parameters",keyToPredicateMap:{parent:b.predicates.isDefinedAndNotNull,labelText:b.predicates.isString,imageUrl:b.predicates.isString}}).validate(h);var h=c.extend({isSelected:false},h);var f=gliffySoy.widget.image.gliffyImageSelectionWidget(h);var d=c(f).appendTo(h.parent);d.on("click",function(j){e.setIsSelected(true)});var i=d.find(".gliffy-image-selection-image");var g=d.find(".gliffy-image-selection-zoom");if(i.previewer){g.previewer({src:i.attr("src"),type:"image/png",zindex:10000})}else{g.on("click",function(k){var j=i.clone();j.removeClass("gliffy-image-selection-image");j.addClass("gliffy-image-selection-fancybox-image");c.fancybox({orig:i,content:j,showCloseButton:true,hideOnOverlayClick:true,hideOnContentClick:true})})}this._={domRoot:d,labelText:h.labelText,imageUrl:h.imageUrl,isSelected:!h.isSelected,selectionChangedListeners:[],};this.setIsSelected(h.isSelected)};a.prototype.getIsSelected=function(){return this._.isSelected};a.prototype.setIsSelected=function(e){if(this._.isSelected===e){return}this._.isSelected=e;if(e){this._.domRoot.addClass("gliffy-image-selected")}else{this._.domRoot.removeClass("gliffy-image-selected")}var d=this;this._.selectionChangedListeners.forEach(function(f){f({source:d,isSelected:e})})};a.prototype.getDomRoot=function(){return this._.domRoot};a.prototype.addSelectionChangedListener=function(d){this._.selectionChangedListeners.push(d)};return{create:function(d){return new a(d)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/versionselection/VersionSelectionDialog.soy' */
// This file was automatically generated from VersionSelectionDialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.dialog.version.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.dialog == 'undefined') { gliffySoy.dialog = {}; }
if (typeof gliffySoy.dialog.version == 'undefined') { gliffySoy.dialog.version = {}; }


gliffySoy.dialog.version.versionSelectionDialogBody = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui top-label"><div class="gliffy-version-dialog-panel"><div class="gliffy-version-dialog-description">' + soy.$$escapeHtml(opt_data.promptText) + '</div><div class="gliffy-image-selection-widget-area"/></div></form>';
};
if (goog.DEBUG) {
  gliffySoy.dialog.version.versionSelectionDialogBody.soyTemplateName = 'gliffySoy.dialog.version.versionSelectionDialogBody';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/versionselection/VersionSelectionDialogFactory.js' */
define("gliffy/confluence/versionselection/versionSelectionDialogFactory",["jquery","gliffy/controls/imageselection/imageSelectionControlFactory","gliffy/objectValidatorFactory"],function(c,d,b){var a=function(f){var e=this;var f=c.extend({onCancel:function(){}},f);b.create({description:"VersionSelectionDialog constructor parameters",keyToPredicateMap:{headerText:b.predicates.isString,promptText:b.predicates.isString,attachmentVersion:b.predicates.isNumber,diagramName:b.predicates.isString,ownerPageId:b.predicates.isDefinedAndNotNull,referencePageId:b.predicates.isDefinedAndNotNull,pinnedIsDefault:b.predicates.isDefinedAndNotNull,onComplete:b.predicates.isFunction}}).validate(f);this._={hasBeenShown:false,parameters:f,pinnedVersionIsSelected:f.pinnedIsDefault,buildDom:function(){var h=gliffySoy.dialog.version.versionSelectionDialogBody({promptText:f.promptText});var k=c(h);var j=k.find(".gliffy-image-selection-widget-area");var i=d.create({parent:j,labelText:AJS.format("Version {0}",f.attachmentVersion),imageUrl:AJS.format("{0}/download/attachments/{1}/{2}.png?api=v2&version={3}&modificationDate=0",e._.parameters.contextPath,e._.parameters.ownerPageId,encodeURIComponent(e._.parameters.diagramName),e._.parameters.attachmentVersion),isSelected:f.pinnedIsDefault});var g=d.create({parent:j,labelText:"Latest",imageUrl:AJS.format("{0}/download/attachments/{1}/{2}.png?api=v2&timestamp={3}",e._.parameters.contextPath,e._.parameters.ownerPageId,encodeURIComponent(e._.parameters.diagramName),new Date().getTime()),isSelected:!f.pinnedIsDefault});i.getDomRoot().addClass("left");g.getDomRoot().addClass("right");i.addSelectionChangedListener(function(l){if(l.isSelected){g.setIsSelected(false);e._.pinnedVersionIsSelected=true}});g.addSelectionChangedListener(function(l){if(l.isSelected){i.setIsSelected(false);e._.pinnedVersionIsSelected=false}});return k}}};a.prototype.show=function(){var e=this;if(e._.hasBeenShown){throw new Error("versionSelectionDialogFactory can be shown only once per instance lifetime.")}var f=new AJS.Dialog({width:600,height:380,closeOnOutsideClick:false});f.addHeader(e._.parameters.headerText);f.addPanel("",e._.buildDom(),"panel-body");f.addLink("Cancel",function(g){g.remove()},"aui-button gliffy-dialog-cancel");f.addButton("Select",function(g){g.remove();e._.parameters.onComplete(e._.pinnedVersionIsSelected)});f.show();e._.hasBeenShown=true};return{create:function(e){return new a(e)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/versionselection/VersionSelectionDialogController.js' */
define("gliffy/confluence/versionselection/versionSelectionDialogController",["jquery","gliffy/objectValidatorFactory","gliffy/confluence/versionselection/versionSelectionDialogFactory"],function(b,a,c){return{showUnpinMacroDiagramVersionDialog:function(d){c.create(b.extend({headerText:"Select Diagram Version to Display",promptText:AJS.format("Version {0} is currently pinned to this page. Which version would you like to display?",d.attachmentVersion),pinnedIsDefault:false},d)).show()},showSelectVersionToEditDialog:function(d){c.create(b.extend({headerText:"Select Diagram Version to Edit",promptText:AJS.format("Version {0} is currently pinned to this page. Which version you would like to edit?",d.attachmentVersion),pinnedIsDefault:true},d)).show()}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/versionselection/VersionSelectionController.js' */
require("gliffy/amd/apexModuleManager").define("gliffy/confluence/versionselection/versionSelectionController",["jquery","gliffy/url","gliffy/confluence/pageFacade","gliffy/confluence/versionselection/versionSelectionDialogController"],function(d,c,b,a){var e=function(){var h=window.localStorage.getItem("com.gliffy.confluence.diagram.edited");if(h){window.localStorage.removeItem("com.gliffy.confluence.diagram.edited");var j=JSON.parse(h);if(j){var g=c.parse(j.url).queryParams;var k=0;if(g.originalAttachmentVersion){k=parseInt(g.originalAttachmentVersion)}else{if(g.attachmentVersion){k=parseInt(g.attachmentVersion)}}var i=b.getDiagramReferences().filter(function(l){return(l.name===g.name)});if(k>0&&(g.inline==="true"||i.length>0)){var f={ownerPageId:g.ceoid,name:g.name,version:k};a.showUnpinMacroDiagramVersionDialog({ownerPageId:f.ownerPageId,diagramName:f.name,attachmentVersion:f.version,referencePageId:AJS.params.pageId,contextPath:AJS.Confluence.getContextPath(),onComplete:function(l){if(!l){b.unpinDiagramReferenceVersion(f)}}})}}}};AJS.bind("gliffy.confluence.inlineEditorClosed",function(){e()});d(function(){e()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/editor/EditorLauncher.js' */
define("gliffy/confluence/editor/editorLauncher",["jquery","gliffy/objectValidatorFactory","gliffy/confluence/versionselection/versionSelectionDialogController"],function(d,c,a){var b=function(e,g,f,i,h){if(i&&i>0){d.ajax({url:e+"/rest/gliffy/1.0/diagrams/allVersionInformation",type:"GET",data:{name:g,pageId:f},success:function(j){h(j.numRevisions!==parseInt(i))},error:function(j){h(false)}})}else{h(false)}};return{launchEditorFromViewPage:function(e){var e=d.extend({contextPath:AJS.Confluence.getContextPath()},e);b(e.contextPath,e.diagramName,e.ownerPageId,e.attachmentVersion,function(f){if(f){a.showSelectVersionToEditDialog(d.extend({onComplete:function(g){var h;if(g){h=e.url}else{h=e.url.replace("attachmentVersion=","originalAttachmentVersion=")}window.open(h,"_self")}},e))}else{window.open(e.url,"_self")}})},launchEditorFromEditPage:function(e){var e=d.extend({contextPath:AJS.Confluence.getContextPath()},e);b(e.contextPath,e.diagramName,e.ownerPageId,e.attachmentVersion,function(f){if(f){a.showSelectVersionToEditDialog(d.extend({onComplete:function(g){if(!g){e.originalAttachmentVersion=e.attachmentVersion;e.attachmentVersion=0}AJS.trigger("gliffy.confluence.launchInlineEditor",[e])}},e))}else{AJS.trigger("gliffy.confluence.launchInlineEditor",[e])}})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-spinner', location = 'gliffy/GliffySpinner.js' */
define("GliffySpinner",["thirdparty/spinjs"],function(a){var c=function(e){var f;var d=0;do{f=$(e).css("z-index");e=$(e).parent()[0];d++}while(isNaN(f)&&e.tagName);if(isNaN(f)){f=0}return f};var b=function(e,d){d=d||{};d.radius=d.radius||20;d.color=d.color||"#000";$(e).prepend("<span></span>");this.container=$(e).find("span").get(0);$(this.container).addClass("gliffy-spinner-container");if(d.inline){$(this.container).css("position","relative");this.inline=true}else{var i=c(e);$(this.container).css("position","absolute").css("z-index",i+1)}var f=d.radius;d.length=0.5*f;d.radius=0.5*f;d.lines=12;d.corners=1;d.width=0.4*d.length;var h=a();var g=new h.Spinner(d).spin();this.container.appendChild(g.el);if(!d.inline){$(this.container).css("left",$(e).width()/2-$(this.container).width()/2).css("top",$(e).height()/2-$(this.container).height()/2)}$(this.container).hide();this.start=function(){if($(this.container).parent().css("position")==="static"){if(!this.inline){$(this.container).parent().css("position","relative");this.positioned=true}}$(this.container).show()};this.stop=function(){if(this.positioned){$(e).parent().css("position","static");this.positioned=false}$(this.container).hide()}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-spinner', location = 'thirdparty/spin.js' */
define("thirdparty/spinjs",[],function(){return function(){var a=new Object();(function(b,c){if(typeof exports=="object"){module.exports=c()}else{if(typeof define=="function"&&define.amd){define(c)}else{b.Spinner=c()}}}(a,function(){var f=["webkit","Moz","ms","O"],p={},o,j;function h(q,t){var r=document.createElement(q||"div"),s;for(s in t){r[s]=t[s]}return r}function i(r){for(var q=1,s=arguments.length;q<s;q++){r.appendChild(arguments[q])}return r}function d(u,q,v,y){var r=["opacity",q,~~(u*100),v,y].join("-"),s=0.01+v/y*100,x=Math.max(1-(1-u)/q*(100-s),u),w=o.substring(0,o.indexOf("Animation")).toLowerCase(),t=w&&"-"+w+"-"||"";if(!p[r]){j.insertRule("@"+t+"keyframes "+r+"{0%{opacity:"+x+"}"+s+"%{opacity:"+u+"}"+(s+0.01)+"%{opacity:1}"+(s+q)%100+"%{opacity:"+u+"}100%{opacity:"+x+"}}",j.cssRules.length);p[r]=1}return r}function m(u,v){var t=u.style,q,r;v=v.charAt(0).toUpperCase()+v.slice(1);if(t[v]!==undefined){return v}for(r=0;r<f.length;r++){q=f[r]+v;if(t[q]!==undefined){return q}}}function g(q,s){for(var r in s){q.style[m(q,r)||r]=s[r]}return q}function k(s){for(var q=1;q<arguments.length;q++){var r=arguments[q];for(var t in r){if(s[t]===undefined){s[t]=r[t]}}}return s}function n(r,q){return typeof r=="string"?r:r[q%r.length]}var e={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:1/4,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2000000000,className:"spinner",top:"50%",left:"50%",shadow:false,hwaccel:false,position:"absolute"};function c(q){this.opts=k(q||{},c.defaults,e)}c.defaults={};k(c.prototype,{spin:function(z){this.stop();var B=this,r=B.opts,s=B.el=h(null,{className:r.className});g(s,{position:r.position,width:0,zIndex:r.zIndex,left:r.left,top:r.top});if(z){z.insertBefore(s,z.firstChild||null)}s.setAttribute("role","progressbar");B.lines(s,B.opts);if(!o){var w=0,q=(r.lines-1)*(1-r.direction)/2,v,t=r.fps,y=t/r.speed,x=(1-r.opacity)/(y*r.trail/100),A=y/r.lines;(function u(){w++;for(var C=0;C<r.lines;C++){v=Math.max(1-(w+(r.lines-C)*A)%y*x,r.opacity);B.opacity(s,C*r.direction+q,v,r)}B.timeout=B.el&&setTimeout(u,~~(1000/t))})()}return B},stop:function(){var q=this.el;if(q){clearTimeout(this.timeout);if(q.parentNode){q.parentNode.removeChild(q)}this.el=undefined}return this},lines:function(s,u){var r=0,v=(u.lines-1)*(1-u.direction)/2,q;function t(w,x){return g(h(),{position:"absolute",width:u.scale*(u.length+u.width)+"px",height:u.scale*u.width+"px",background:w,boxShadow:x,transformOrigin:"left",transform:"rotate("+~~(360/u.lines*r+u.rotate)+"deg) translate("+u.scale*u.radius+"px,0)",borderRadius:(u.corners*u.scale*u.width>>1)+"px"})}for(;r<u.lines;r++){q=g(h(),{position:"absolute",top:1+~(u.scale*u.width/2)+"px",transform:u.hwaccel?"translate3d(0,0,0)":"",opacity:u.opacity,animation:o&&d(u.opacity,u.trail,v+r*u.direction,u.lines)+" "+1/u.speed+"s linear infinite"});if(u.shadow){i(q,g(t("#000","0 0 4px #000"),{top:"2px"}))}i(s,i(q,t(n(u.color,r),"0 0 1px rgba(0,0,0,.1)")))}return s},opacity:function(r,q,s){if(q<r.childNodes.length){r.childNodes[q].style.opacity=s}}});function l(){function q(s,r){return h("<"+s+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',r)}j.addRule(".spin-vml","behavior:url(#default#VML)");c.prototype.lines=function(v,u){var t=u.scale*(u.length+u.width),B=u.scale*2*t;function A(){return g(q("group",{coordsize:B+" "+B,coordorigin:-t+" "+-t}),{width:B,height:B})}var w=-(u.width+u.length)*u.scale*2+"px",z=g(A(),{position:"absolute",top:w,left:w}),y;function x(s,r,C){i(z,i(g(A(),{rotation:360/u.lines*s+"deg",left:~~r}),i(g(q("roundrect",{arcsize:u.corners}),{width:t,height:u.scale*u.width,left:u.scale*u.radius,top:-u.scale*u.width>>1,filter:C}),q("fill",{color:n(u.color,s),opacity:u.opacity}),q("stroke",{opacity:0}))))}if(u.shadow){for(y=1;y<=u.lines;y++){x(y,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")}}for(y=1;y<=u.lines;y++){x(y)}return i(v,z)};c.prototype.opacity=function(s,r,u,t){var v=s.firstChild;t=t.shadow&&t.lines||0;if(v&&r+t<v.childNodes.length){v=v.childNodes[r+t];v=v&&v.firstChild;v=v&&v.firstChild;if(v){v.opacity=u}}}}if(typeof document!=="undefined"){j=(function(){var q=h("style",{type:"text/css"});i(document.getElementsByTagName("head")[0],q);return q.sheet||q.styleSheet}());var b=g(h("group"),{behavior:"url(#default#VML)"});if(!m(b,"transform")&&b.adj){l()}else{o=m(b,"animation")}}return c}));return a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-on-confluence-init.js' */
AJS.toInit(function(){AJS.$("table.attachments tr").each(function(a,b){AJS.$(b).find("td.attachment-actions a").each(function(c,d){if(AJS.$(d).attr("href").indexOf("/plugins/gliffy/view")!=-1){AJS.$(b).find("td.filename-column span").removeClass("icon-file-xml icon-file-unknown").addClass("gliffy-document-icon").attr("title","Gliffy File").text("Gliffy File")}})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-blueprint-registration.js' */
AJS.toInit(function(){if(Confluence&&Confluence.Blueprint&&Confluence.Blueprint.register){Confluence.Blueprint.register("com.gliffy.integration.confluence:gliffy-blueprint-item-main",function(e,f,d){window.location=Confluence.getContextPath()+"/pages/createpage.action?showGliffyMacro=true&fromCreateDialog=true&spaceKey="+encodeURIComponent(f)+"&newSpaceKey="+encodeURIComponent(f)+(e.getParentPageId()?"&fromPageId="+e.getParentPageId():"")});var c=function(d){Confluence.Blueprint.register("com.gliffy.integration.confluence:gliffy-blueprint-item-"+d,function(f,g,e){window.location=Confluence.getContextPath()+"/pages/createpage.action?showGliffyMacro=true&createDiagramType="+d+"&spaceKey="+encodeURIComponent(g)+"&newSpaceKey="+encodeURIComponent(g)+(f.getParentPageId()?"&fromPageId="+f.getParentPageId():"")})};var b=["org","network","software"];for(var a=0;a<b.length;a++){c(b[a])}Confluence.Blueprint.register("com.gliffy.integration.confluence:gliffy-blueprint-item-pack",function(e,h,d){var i=e.addPage("myplugin-step-2"),g=function(){var k=$("#my-title").val();var j=$("#my-text-field").val();d(k,{myName:j})};var f='<div class="template-select-container-body"><ol class="templates" tabindex="100"><li class="template selected"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-main"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-main/icon"><div class="template-meta"><div class="template-name" title="Gliffy Diagram">Corporate Org Chart</div><div class="template-description" title="Add a blank page with a Gliffy Diagram.">Add a page with a Corporate Org Chart</div></div></li><li class="template"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-pack"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-pack/icon"><div class="template-meta"><div class="template-name" title="Gliffy Human Resources Pack">Reimbursement Process</div><div class="template-description" title="Choose from a list of diagrams relating to Human Resources.">Add a page with that shows a Reimbursement Process in your organization</div></div></li><li class="template"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-pack"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-pack/icon"><div class="template-meta"><div class="template-name" title="Gliffy Human Resources Pack">Termination Process</div><div class="template-description" title="Choose from a list of diagrams relating to Human Resources.">Shows you how to fire the guy who had ten too many tequila shots at the last company party.</div></div></li></ol></div>';i.addHeader("Gliffy Human Resources Pack").addPanel("SinglePanel",f,"singlePanel").addButton("Previous",function(j){j.prevPage();j.page.pop()},"").addButton("Create",g,"aui-button-primary create-dialog-create-button").addLink("Close",function(j){j.remove()},"");i.getPanel(0).setPadding(0);$("#my-title").focus();$("#myplugin-form").submit(function(){g(e);return false});return false})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-footer.js' */
AJS.toInit(function(){if(AJS.version>="3.0"){var a=AJS.$("#poweredby:visible");if(a.length>0){a.before(AJS.template.load("gliffy-webpanel-footer"))}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'gliffy/confluence/ContextFinalizer.js' */
(function(b,a){b(function(){a.instantiateAll();a.reset()})})(require("jquery"),require("gliffy/amd/apexModuleManager"));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:ajs-amd', location = 'lib/amd/ajs-amd.js' */
define("ajs",function(){return AJS});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:wrm-amd', location = 'lib/amd/wrm-amd.js' */
define("wrm",function(){if(WRM.data instanceof Function){WRM.data.claim=WRM.data}return WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:backbone-amd', location = 'lib/amd/backbone-amd.js' */
define("backbone",function(){return Backbone});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:jquery-amd', location = 'lib/amd/jquery-amd.js' */
define("jquery",function(){return AJS.$});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:underscore-amd', location = 'lib/amd/underscore-amd.js' */
define("underscore",function(){return _});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:discovery-javascript-data', location = 'discovery/hipChatDiscovery.js' */
define('confluence/hipchat/integration/hipchat/discovery',
        [
            'wrm'
        ],
        /**
         * HipChat integration feature discovery
         * @tainted WRM
         * @exports confluence/hipchat/integration/discovery/hipchat
         */
        function (WRM) {
            "use strict";
            var pluginKey = "com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin";

            var dataKey = pluginKey + ":discovery-javascript-data.link-active";

            /**
             * @type {{linkActive:boolean, conditionsMet:boolean, admin: boolean}}
             */
            var discoveryData = typeof WRM.data != 'function' ? WRM.data.claim(dataKey) : WRM.data(dataKey);

            return {
                /**
                 * Is the instance linked to at least one HipChat instance
                 * @returns {boolean}
                 */
                isLinked: function () {
                    return discoveryData.linkActive === true;
                },
                /**
                 * Are the conditions met to show the discovery popups
                 *
                 * i.e. At least 5 users and at least 1 space
                 *
                 * @returns {boolean}
                 */
                isConditionsMet: function () {
                    return discoveryData.conditionsMet === true;
                },
                /**
                 * Is the user a site admin?
                 *
                 * @returns {boolean}
                 */
                isAdmin: function() {
                    return discoveryData.admin === true;
                },
                /**
                 * Get the plugin key of this module
                 *
                 * @returns {string}
                 */
                pluginKey: function () {
                    return pluginKey;
                }
            };
        });


}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:discovery-javascript-data', location = 'discovery/discoveryPopup.js' */
define('confluence/hipchat/integration/hipchat/discovery/popup',
    [
    'jquery'
    ], function(
        $
) {
    return {
        /**
         *
         * @param {{featureKey:string,
         *  analytics:string,
         *  template:function,
         *  shouldShow:function,
         *  name:string,
         *  target: jQuery,
         *  onAccept: function,
         *  onDismiss: function }} opts
         */
        show : function(opts) {
            var shouldShow, pluginDiscovery;
            var featureKey = opts.featureKey;
            if (opts.shouldShow() && Confluence.FeatureDiscovery) {
                pluginDiscovery = Confluence.FeatureDiscovery.forPlugin(opts.pluginKey);
                shouldShow = pluginDiscovery.shouldShow(opts.featureKey, true);
            } else {
                shouldShow = false;
            }

            if (shouldShow) {

                AJS.trigger('analyticsEvent', {name: opts.analytics + '.view', data: {}});

                pluginDiscovery && pluginDiscovery.addDiscoveryView(featureKey);

                var dialog;

                var acceptDialog = function () {
                    pluginDiscovery && pluginDiscovery.markDiscovered(featureKey);
                    dialog.hide();
                    AJS.trigger('analyticsEvent', {name: opts.analytics + '.accept', data: {}});

                    if ($.isFunction(opts.onAccept)) {
                        opts.onAccept();
                    }
                };

                var dismissDialog = function (content) {
                    return function(event) {
                        event.preventDefault();
                        pluginDiscovery && pluginDiscovery.markDiscovered(featureKey);
                        dialog.hide();
                        content.parent().remove();

                        AJS.trigger('analyticsEvent', {name: opts.analytics + '.dismiss', data: {}});

                        if ($.isFunction(opts.onDismiss)) {
                            opts.onDismiss();
                        }
                    }
                };

                dialog = AJS.InlineDialog(opts.target, opts.name,
                        function (content, trigger, showPopup) {
                            content.html(opts.template({}));

                            showPopup();

                            //Bind handlers and apply styles
                            var parent = content.parent();

                            parent.addClass("hipchat-integration-discovery");

                            if (opts.fixed === true) {
                                parent.addClass("hipchat-integration-discovery-fixed");
                            }

                            content.find("#hipchat-integration-discovery-open").click(acceptDialog);

                            content.find("#hipchat-integration-discovery-dismiss").click(dismissDialog(content));
                        }
                        , {noBind: true});

                dialog.show();

                if (opts.fixed === true) {
                    // For fixed inline dialog recalculate position on window resize
                    $(window).resize(function () {
                        dialog.refresh();
                    });
                }
            }
        }
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:discovery-resources', location = 'discovery/integrationDiscovery.soy' */
// This file was automatically generated from integrationDiscovery.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Hipchat.Discovery.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Hipchat == 'undefined') { Confluence.Templates.Hipchat = {}; }
if (typeof Confluence.Templates.Hipchat.Discovery == 'undefined') { Confluence.Templates.Hipchat.Discovery = {}; }


Confluence.Templates.Hipchat.Discovery.integrationDialog = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml("Connect your Confluence site to HipChat") + '</h2><p>' + soy.$$escapeHtml("Set up and send notifications to HipChat rooms.") + '</p><br/><button class="aui-button" id="hipchat-integration-discovery-open">' + soy.$$escapeHtml("Integrate with HipChat") + '</button><a href="#" style="padding-left: 20px" id="hipchat-integration-discovery-dismiss">' + soy.$$escapeHtml("Not now") + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Hipchat.Discovery.integrationDialog.soyTemplateName = 'Confluence.Templates.Hipchat.Discovery.integrationDialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatServerDiscovery', location = 'discovery/integrationDiscovery.js' */
require([
            'jquery',
            'confluence/hipchat/integration/hipchat/discovery',
            'confluence/hipchat/integration/hipchat/discovery/popup'
        ],
        /**
         * HipChat integration feature discovery
         * @exports confluence/hipchat/integration/discovery/server
         * @tainted Confluence.FeatureDiscovery
         * @tainted Confluence.Templates
         */
        function (
                $,
                hipchat,
                discovery) {
            "use strict";

            $(function () {
                var hipChatIntegrationUrl = AJS.contextPath() + "/plugins/servlet/hipchat/configure";

                discovery.show({
                    featureKey: "hipChatServerIntegration",
                    pluginKey: hipchat.pluginKey(),
                    analytics: "notifications.hipchat.discovery",
                    template: Confluence.Templates.Hipchat.Discovery.integrationDialog,
                    name: "hipchat-integration-dialog",
                    target: $("#admin-menu-link"),
                    shouldShow: function () {
                        return ! hipchat.isLinked()
                                && hipchat.isConditionsMet()
                                && hipchat.isAdmin();
                    },
                    onAccept: function () {
                        window.location.assign(hipChatIntegrationUrl);
                    },
                    onDismiss: function() {},
                    fixed:false
                })
            });
        });

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipchat-presence-resources', location = 'presence/presence.soy' */
// This file was automatically generated from presence.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.HipChat.Presence.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.HipChat == 'undefined') { Confluence.Templates.HipChat = {}; }
if (typeof Confluence.Templates.HipChat.Presence == 'undefined') { Confluence.Templates.HipChat.Presence = {}; }


Confluence.Templates.HipChat.Presence.badge = function(opt_data, opt_ignored) {
  return '<span class="hipchat-status aui-icon aui-icon-small hipchat-icon-' + soy.$$escapeHtml(opt_data.statusCode) + '" data-status="' + soy.$$escapeHtml(opt_data.statusCode) + '" title="' + soy.$$escapeHtml(opt_data.statusMessage) + '">' + soy.$$escapeHtml(opt_data.statusMessage) + '</span>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChat.Presence.badge.soyTemplateName = 'Confluence.Templates.HipChat.Presence.badge';
}


Confluence.Templates.HipChat.Presence.chatBar = function(opt_data, opt_ignored) {
  return '<div class="hipchat-chatbar aui-buttons"><button class="aui-button hipchat-chat" title="' + soy.$$escapeHtml("Unable to start chat as this user is not known in HipChat.") + '" aria-disabled="true"><span><span class="aui-icon aui-icon-small hipchat-icon-chat">' + soy.$$escapeHtml("Chat") + '</span></span></button><button class="aui-button hipchat-voice" title="' + soy.$$escapeHtml("Unable to start voice calls as this user is not known in HipChat.") + '" aria-disabled="true" data-call-type="voice"><span><span class="aui-icon aui-icon-small hipchat-icon-voice">' + soy.$$escapeHtml("Voice") + '</span></span></button><button class="aui-button hipchat-video" title="' + soy.$$escapeHtml("Unable to start video calls as this user is not known in HipChat.") + '" aria-disabled="true" data-call-type="video"><span><span class="aui-icon aui-icon-small hipchat-icon-video">' + soy.$$escapeHtml("Video") + '</span></span></button></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChat.Presence.chatBar.soyTemplateName = 'Confluence.Templates.HipChat.Presence.chatBar';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipchat-presence-resources', location = 'presence/presence.js' */
(function($) {
    "use strict";

    var chatBarEnabled = AJS.DarkFeatures.isEnabled('hipchat.chatbar');

    var Routes = {
        hipChatCall: function(userId, callType) {
            if(!userId) {
                return;
            }
            return "hipchat://hipchat.com/user/" +
                    encodeURI(userId) +
                    (callType ? "?call=" + encodeURI(callType) : "");
        }
    };

    var baseUrl = AJS.contextPath() + "/rest/hipchat/integration/1.0/users/";

    var hipChatClickHandler = function(online) {
        return function(e) {
            var button = $(this);

            var confluenceUserId = button.attr('data-user-id');

            var callerId = button.attr('data-caller-id');
            if (!callerId) {
                return;
            }

            var callType = button.attr('data-call-type');

            //If user is offline, then don't allow voice/video calls
            if (! online && callType) {
                return;
            }

            window.location.replace(Routes.hipChatCall(callerId, callType));

            AJS.trigger('analyticsEvent', {
                name: "hipchat.chatbar." + (callType || "chat"),
                data: {
                    userId: confluenceUserId
                }
            });

            e.preventDefault();
        }
    };

    var statusHandler = function (element) {
        return function (response) {
            if(!response || !response.presence) {
                return;
            }

            var confluenceUserId = response.userId;
            var hipChatUserId = response.hipChatUserId;
            var statusCode;
            var statusMessage;

            var buttons = $(element).find('.hipchat-chatbar .aui-button');
            buttons.attr('data-user-id', confluenceUserId);
            buttons.attr('data-caller-id', hipChatUserId);
            // Evil... userlink.js stops propagation of events, so we can't use delegate. :/
            buttons.click(hipChatClickHandler(response.presence.is_online));

            if(response.presence.is_online) {
                if(response.presence.show === "xa" || response.presence.show === "away") {
                    statusCode = "away";
                    statusMessage = "Away";
                } else if (response.presence.show === "dnd") {
                    statusCode = "dnd";
                    statusMessage = "Do not disturb";
                } else {
                    statusCode = "available";
                    statusMessage = "Available";
                }
                buttons.filter('.hipchat-chat').attr('title', "Start chat with this user in HipChat.").removeAttr('aria-disabled');
                buttons.filter('.hipchat-voice').attr('title', "Start a voice call with this user in HipChat.").removeAttr('aria-disabled');
                buttons.filter('.hipchat-video').attr('title', "Start a video call with this user in HipChat.").removeAttr('aria-disabled');
            } else {
                statusCode = "offline";
                statusMessage = "Offline";

                buttons.filter('.hipchat-chat').attr('title', "Start chat with this user in HipChat.").removeAttr('aria-disabled');
                buttons.filter('.hipchat-voice').attr('title', "Unable to start voice calls as this user is not known in HipChat.");
                buttons.filter('.hipchat-video').attr('title', "Unable to start video calls as this user is not known in HipChat.");
            }

            if(response.presence.status) {
                statusMessage += " (" + response.presence.status + ")";
            }

            $("div.values", element).append(Confluence.Templates.HipChat.Presence.badge({
                statusCode: statusCode,
                statusMessage: statusMessage
            }));

            AJS.trigger('analyticsEvent', {
                name: "hipchat.presence.user.found",
                data: {
                    userId: response.userId
                }
            });
        }
    };

    $(document).bind("ajaxComplete", function (e, res, req) {
        // There is no reliable event in the user popup we can use instead
        // this is an improvement over the v1 implementation (which regex'd then entire response text, not a url).
        if (/userinfopopup\.action/.test(req.url)) {
            $.each($(".vcard"), function (i, vcard) {
                var $vcard = $(vcard);

                var $content = $vcard.closest('.contents');
                var $profile = $content.find('.profile-macro').first();
                var $actions = $content.find('.actions').first();

                if ($profile.hasClass("hipchat-status-applied") || !$actions.length) {
                    // already done, or user popup not ready for hipchatification
                    return;
                }

                $profile.addClass("hipchat-status-applied");

                if(chatBarEnabled) {
                    $actions.addClass("hipchat-chatbar-support");

                    $actions.append(Confluence.Templates.HipChat.Presence.chatBar());

                    // restyle
                    $actions.find('.ajs-menu-bar').addClass('aui-buttons');
                    $actions.find('.ajs-button > a').addClass('aui-button');
                    $actions.find('.user-popup-more').addClass('aui-button');
                    $actions.find('.user-popup-more > span > span').addClass('aui-icon aui-icon-small aui-iconfont-more').text('');
                }

                var username = $(".userLogoLink", $vcard).attr('data-username');
                var url = baseUrl + encodeURIComponent(username);
                $.getJSON(url, statusHandler($content)).fail(function(jxr) {
                    if(jxr.status === 404) {
                        // Check is just missing from HipChat
                        try {
                            var result = JSON.parse(jxr.responseText);
                            if(result.userId) {
                                // Confluence user id, so known to Confluence, but unknown to HipChat, so we want to track this event.
                                AJS.trigger('analyticsEvent', {
                                    name: "hipchat.presence.user.unknown",
                                    data: {
                                        userId: result.userId
                                    }
                                });
                            }
                        } catch (e) {
                            // ignore
                        }
                    }
                });
            });
        }
    });
})(AJS.$);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatSpaceDiscovery', location = 'discovery/spacetoroom/spaceDiscoveryData.js' */
define('confluence/hipchat/spacetoroom/hipchat/discovery',
        [
        ],
        /**
         * HipChat integration feature discovery
         * @tainted WRM
         * @exports confluence/hipchat/integration/discovery/hipchat
         */
        function () {
            "use strict";
            var pluginKey = "com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin";

            return {
                isSpaceAdmin: function () {
                    return AJS.Meta.get("is-space-admin") === true;
                },
                hasSpaceConfiguration: function () {
                    return AJS.Meta.get("has-space-config") === true;
                },
                pluginKey: function () {
                    return pluginKey;
                }
            };
        });


}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatSpaceDiscovery', location = 'discovery/spacetoroom/spaceDiscovery.js' */
require([
            'jquery',
            'confluence/hipchat/integration/hipchat/discovery',
            'confluence/hipchat/spacetoroom/hipchat/discovery',
            'confluence/hipchat/integration/hipchat/discovery/popup'
        ],
        /**
         * HipChat space feature discovery
         * @exports confluence/hipchat/integration/discovery/space
         * @tainted Confluence.FeatureDiscovery
         * @tainted Confluence.Templates
         */
        function (
                $,
                integration,
                spacetoroom,
                discovery
        ) {
            "use strict";

            $(function () {
                var hipChatIntegrationUrl = AJS.contextPath() + "/spaces/hipchat2.action?key=" + encodeURIComponent(AJS.Meta.get("space-key"));
                var menuItem = $("#space-tools-menu-trigger");

                if(menuItem.length) {
                    discovery.show({
                        featureKey: "hipChatSpaceIntegration",
                        pluginKey: spacetoroom.pluginKey(),
                        analytics: "notifications.hipchat.space.discovery",
                        template: Confluence.Templates.Hipchat.Discovery.spaceIntegrationDialog,
                        name: "hipchat-space-integration-dialog",
                        target: menuItem,
                        shouldShow: function () {
                            return integration.isLinked()
                                && spacetoroom.isSpaceAdmin()
                                && !spacetoroom.hasSpaceConfiguration();
                        },
                        onAccept: function () {
                            window.location.assign(hipChatIntegrationUrl);
                        },
                        fixed: true
                    });

                    discovery.show({
                        featureKey: "hipChatServerIntegration",
                        pluginKey: spacetoroom.pluginKey(),
                        analytics: "notifications.hipchat.space.link",
                        template: Confluence.Templates.Hipchat.Discovery.spaceLinkDialog,
                        name: "hipchat-space-link-dialog",
                        target: menuItem,
                        /**
                         * Conditions for showing space level integration popup,
                         *      however the popup will only display if the user is not a site admin
                         *      but is a space admin.
                         *
                         * @returns {boolean}
                         */
                        shouldShow: function () {
                            return !integration.isLinked()
                                && integration.isConditionsMet()
                                && !integration.isAdmin()
                                && spacetoroom.isSpaceAdmin();
                        },
                        onAccept: function () {
                            window.location.assign(hipChatIntegrationUrl);
                        },
                        fixed: true
                    });
                }
            });


        });


}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatSpaceDiscovery', location = 'discovery/spacetoroom/spaceDiscovery.soy' */
// This file was automatically generated from spaceDiscovery.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Hipchat.Discovery.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Hipchat == 'undefined') { Confluence.Templates.Hipchat = {}; }
if (typeof Confluence.Templates.Hipchat.Discovery == 'undefined') { Confluence.Templates.Hipchat.Discovery = {}; }


Confluence.Templates.Hipchat.Discovery.spaceIntegrationDialog = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml("Send messages to a HipChat room") + '</h2><p>' + soy.$$escapeHtml("Send notifications for new pages, blog posts or space changes directly to a room in HipChat.") + '</p><br/><button class="aui-button" id="hipchat-integration-discovery-open">' + soy.$$escapeHtml("Add HipChat notifications") + '</button><a href="#" style="padding-left: 20px" id="hipchat-integration-discovery-dismiss">' + soy.$$escapeHtml("Not now") + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Hipchat.Discovery.spaceIntegrationDialog.soyTemplateName = 'Confluence.Templates.Hipchat.Discovery.spaceIntegrationDialog';
}


Confluence.Templates.Hipchat.Discovery.spaceLinkDialog = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml("Connect your Confluence site to HipChat") + '</h2><p>' + soy.$$escapeHtml("Set up and send notifications to HipChat rooms.") + '</p><br/><button class="aui-button" id="hipchat-integration-discovery-open">' + soy.$$escapeHtml("Integrate with HipChat") + '</button><a href="#" style="padding-left: 20px" id="hipchat-integration-discovery-dismiss">' + soy.$$escapeHtml("Not now") + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Hipchat.Discovery.spaceLinkDialog.soyTemplateName = 'Confluence.Templates.Hipchat.Discovery.spaceLinkDialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-autoconvert-resources-v3', location = '/js/confluence/macro/autoconvert.js' */
(function(a,b){b("ac/confluence/macro/autoconvert",[],function(){var d=function(i){return i.replace(/[\-\[\]\/\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
};
var c=function(k,i,j){return j.replace(new RegExp(k,"g"),i)
};
var h=function(i){while(i.indexOf("{}{}")!==-1){i=i.replace("{}{}","{}")
}i=d(i);
i=c("{}","[^/]*?",i);
i="^"+i+"$";
return i
};
var f=function(k){var l=["http://","https://","http://{}","https://{}","http://{}.{}","https://{}.{}","http://{}.{}.{}","https://{}.{}.{}"];
for(var j=0;
j<l.length;
j++){if(k===l[j]){return false
}}return true
};
var g=function(i){return i&&i.macroName&&i.urlParameter&&i.matchers
};
var e=function(i,j){return function(m,o,q){var l=i.macroName;
var k=i.urlParameter;
var s=i.matcher;
var r=m.source.match(s);
if(r){var p={};
if(k){p[k]=m.source
}var n={name:l,params:p};
j(n,q)
}else{q()
}}
};
return{escapePattern:d,replaceAll:c,factory:e,convertPatternToRegex:h,hasAllFields:g,isPatternSafe:f,registerAutoconvertHandlers:function(q,p){if(q){var k=q.length;
for(var n=0;
n<k;
n++){if(g(q[n])){var l=q[n].matchers.length;
for(var m=0;
m<l;
m++){if(f(q[n].matchers[m].pattern)){var o={macroName:q[n].macroName,urlParameter:q[n].urlParameter,matcher:h(q[n].matchers[m])};
p.plugins.Autoconvert.autoConvert.addHandler(e(o,function(j,i){p.plugins.Autoconvert.convertMacroToDom(j,i,function(r,t,s){AJS.log("error converting macro [ "+j.name+" ] to dom elements [ "+s+" ]");
i()
})
}))
}}}}}}}
})
})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-autoconvert-resources-v3', location = '/js/confluence/macro/autoconvert-init.js' */
(function(b,a){a(["ac/confluence/macro/autoconvert"],function(c){AJS.bind("init.rte",function(){var d=WRM.data.claim("com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-autoconvert-resources.connect-autoconvert-data");
c.registerAutoconvertHandlers(d,tinymce)
})
})
})(AJS.$,require);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-content-byline-resources-v3', location = 'js/confluence/contentbyline/content-byline-view.js' */
AJS.toInit(function(f){var d="com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-content-byline-resources.connect-content-byline-data";
var c;
AJS.bind("contentProperty.update",function(m,l){if(!(l&&l.contentProperty&&l.contentProperty.key)){return
}c=c||WRM.data.claim(d);
var n=c[l.contentProperty.key];
if(!n){return
}var i=f(document.getElementById(n));
var k=l.contentProperty.value;
var g=k.name;
var j=k.tooltip;
var h=k.icon;
if(g&&g.value){i.find("span").text(g.value)
}if(j&&j.value){i.attr("title",j.value)
}if(h&&h.url){i.find("img").attr("src",b(h.url,l.context))
}});
function b(h,g){if(a(h)){return h
}return g.remoteOrigin+e(h)
}function a(g){return g.startsWith("http:")||g.startsWith("https:")||g.startsWith("data:")
}function e(g){return g.startsWith("/")?g:("/"+g)
}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:initialise-metrics-collection', location = '/js/initialise-metrics.js' */
define("confluence-collaborative-editor-plugin/initialise-metrics",["confluence/legacy"],function(a){return function(){var b={"confluence.editor":!0,"confluence.editor.preload":!0,"confluence.editor.quick.fetchContent":!0,"confluence.editor.tinymce":!0,"confluence.editor.synchrony":!0,"confluence.editor.synchrony.CR":!0,"confluence.editor.synchrony.connect":!0,"confluence.editor.synchrony.deps":!0,"confluence.editor.synchrony.init":!0,"confluence.editor.synchrony.jsLoad":!0,"confluence.editor.synchrony.snapshot":!0,
"confluence.editor.synchrony.unmarshal":!0},c={"confluence.editor.synchrony.connect":!0};a.registerPerformanceSession&&a.registerPerformanceSession("confluence.editor.quickedit.loading.times",b,c)}});require("confluence/module-exporter").safeRequire("confluence-collaborative-editor-plugin/initialise-metrics",function(a){a()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-first-time-tooltip-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/first-time-tooptip.js' */
AJS.bind("sidebar.finished-loading",function(){var a=AJS.Meta.get("blueprint-index-popup-key");AJS.debug("Index key for "+a);if(a){Confluence.Blueprint.showIndexPagePopup(a)}});Confluence.Blueprint=AJS.$.extend(Confluence.Blueprint,{showIndexPagePopup:function(b){var d=function(i){return function(l,j,k){l.html(Confluence.Templates.Blueprints.sidebarIndexPagePopup({indexPageTitle:i.toLowerCase()}));k()}};var a=AJS.$(AJS.$("li.blueprint."+b)[0]);var h=a.text();var g=AJS.$(".icon",a);var f="blueprintIndexSidebarPopup";var c=AJS.InlineDialog(g.is(":visible")?g:AJS.$(".acs-nav-sections .quick-links-section"),f,d(h),{addActiveClass:false,hideDelay:null,noBind:true});AJS.$(document).bind("showLayer",function(i){var j=f+".inline-dialog-check";AJS.$("body").unbind("click."+j)});c.show();var e=function(i){AJS.$(document).on("click","#dismiss-index-popup",function(){i.hide();return false})}(c);AJS.bind("quickedit.success",function(){c.hide()})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-first-time-tooltip-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/sidebar-index-page-popup.soy' */
// This file was automatically generated from sidebar-index-page-popup.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Blueprints.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.sidebarIndexPagePopup = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml(AJS.format("Find your {0} here",opt_data.indexPageTitle)) + '</h2><p>' + soy.$$escapeHtml(AJS.format("You\x27\x27ve created a {0} page. A shortcut in your sidebar has been added where you can find other {0} in this space.",opt_data.indexPageTitle)) + '</p><br/><form>' + aui.buttons.button({text: "Dismiss", id: 'dismiss-index-popup'}) + '</form>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.sidebarIndexPagePopup.soyTemplateName = 'Confluence.Templates.Blueprints.sidebarIndexPagePopup';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-from-template-macro.js' */
define("confluence-plugins/create-content/create-from-template",["jquery","skate","wrm","confluence/legacy"],function(d,a,b,g){var c="create-from-template-button";function f(i){var j=d(i);if(j.attr("aria-disabled")=="true"){var h={live:true,gravity:"n",title:"data-tooltip",delayIn:250,delayOut:0};j.tooltip(h)}else{j.click(function(k){j.addClass("launching-dialog");g.Blueprint.loadDialogAndOpenTemplate(j.data());return false})}}function e(h){b.require(["wrc!create-content"],function(){f(h)})}a(c,{type:a.types.CLASS,created:e})});require("confluence/module-exporter").safeRequire("confluence-plugins/create-content/create-from-template");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/create-from-template-macro.soy' */
// This file was automatically generated from create-from-template-macro.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Blueprints.CreateFromTemplate.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.CreateFromTemplate == 'undefined') { Confluence.Templates.Blueprints.CreateFromTemplate = {}; }


Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate = function(opt_data, opt_ignored) {
  return '<a class=\'aui-button create-from-template-button\'' + ((! opt_data.hasCreatePermission) ? 'aria-disabled=\'true\' data-tooltip="' + soy.$$escapeHtml("Sorry, you don\x27t have permission to create content. Contact your space administrator to request access.") + '"' : '') + 'data-space-key=\'' + soy.$$escapeHtml(opt_data.spaceKey) + '\' href=\'' + soy.$$escapeHtml(opt_data.createContentUrl) + '\'' + ((opt_data.title) ? 'data-title=\'' + soy.$$escapeHtml(opt_data.title) + '\'' : '') + ((opt_data.templateId) ? 'data-template-id=\'' + soy.$$escapeHtml(opt_data.templateId) + '\'' : '') + ((opt_data.contentBlueprintId) ? 'data-content-blueprint-id=\'' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '\'' : '') + '>' + soy.$$escapeHtml(opt_data.buttonLabel) + '</a>' + soy.$$escapeHtml(webResourceManager_requireResource('com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources'));
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate.soyTemplateName = 'Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.contributors:contributors-web-resources', location = 'com/atlassian/confluence/contributors/scripts/contributors.js' */
require(["ajs","underscore"],function(a,b){a.toInit(function(c){c("div.contributors-macro-ajax-container").each(function(){var e=c(this);var d=c.parseJSON(b.unescape(e.find(".contributors-macro-parameters")[0].innerHTML));e.text("Generating contributors information...");c.ajax({dataType:"json",url:Confluence.getContextPath()+"/rest/com.atlassian.confluence.contributors/1.0/contributors",data:d,success:function(f){if(f.errorMessage){e.text(f.errorMessage)}else{e.html(Confluence.ContributorsMacro.renderContent(f));e.find(".show-hidden-contributors").click(function(){e.find(".hidden-contributor").removeClass("hidden");c(this).parent().remove();return false})}},error:function(h,f,g){e.text("Failed to retrieve contributors information"+": "+g)}})})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.contributors:contributors-web-resources', location = 'com/atlassian/confluence/contributors/templates/contributors-macro.soy' */
// This file was automatically generated from contributors-macro.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.ContributorsMacro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.ContributorsMacro == 'undefined') { Confluence.ContributorsMacro = {}; }


Confluence.ContributorsMacro.ajaxContainer = function(opt_data, opt_ignored) {
  return '<div class="contributors-macro-ajax-container"><div style="display: none;" class="contributors-macro-parameters">' + soy.$$escapeHtml(opt_data.macroParameters) + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.ContributorsMacro.ajaxContainer.soyTemplateName = 'Confluence.ContributorsMacro.ajaxContainer';
}


Confluence.ContributorsMacro.renderContent = function(opt_data, opt_ignored) {
  return '<div class="plugin-contributors">' + ((opt_data.layoutStyle == 'FLAT') ? Confluence.ContributorsMacro.flatLayout(opt_data) : (opt_data.layoutStyle == 'LIST') ? Confluence.ContributorsMacro.listLayout(opt_data) : '<span>Unknown layout style</span>') + '</div>';
};
if (goog.DEBUG) {
  Confluence.ContributorsMacro.renderContent.soyTemplateName = 'Confluence.ContributorsMacro.renderContent';
}


Confluence.ContributorsMacro.flatLayout = function(opt_data, opt_ignored) {
  return '<div class="plugin-contributors"><span><span>' + Confluence.ContributorsMacro.flatContributorsList({contributors: opt_data.visibleContributors, showCount: opt_data.showCount, showTime: opt_data.showTime}) + ((opt_data.hiddenContributors.length > 0) ? ',' : '') + '</span>' + ((opt_data.hiddenContributors.length > 0) ? '<span class="hidden hidden-contributor">' + Confluence.ContributorsMacro.flatContributorsList({contributors: opt_data.hiddenContributors, showCount: opt_data.showCount, showTime: opt_data.showTime}) + '</span><span><a href="#" class="show-hidden-contributors" title="' + soy.$$escapeHtml(AJS.format("{0} more...",opt_data.hiddenContributors.length)) + '">...</a></span>' : '') + '</span></div>';
};
if (goog.DEBUG) {
  Confluence.ContributorsMacro.flatLayout.soyTemplateName = 'Confluence.ContributorsMacro.flatLayout';
}


Confluence.ContributorsMacro.listLayout = function(opt_data, opt_ignored) {
  var output = '<div class="plugin-contributors"><ul class="contributors-list">';
  var contributorList39 = opt_data.visibleContributors;
  var contributorListLen39 = contributorList39.length;
  for (var contributorIndex39 = 0; contributorIndex39 < contributorListLen39; contributorIndex39++) {
    var contributorData39 = contributorList39[contributorIndex39];
    output += '<li>' + Confluence.ContributorsMacro.contributor({contributor: contributorData39, showCount: opt_data.showCount, showTime: opt_data.showTime}) + '</li>';
  }
  if (opt_data.hiddenContributors.length > 0) {
    output += '<li><a href="#" class="show-hidden-contributors" title="' + soy.$$escapeHtml(AJS.format("{0} more...",opt_data.hiddenContributors.length)) + '">...</a></li>';
    var contributorList52 = opt_data.hiddenContributors;
    var contributorListLen52 = contributorList52.length;
    for (var contributorIndex52 = 0; contributorIndex52 < contributorListLen52; contributorIndex52++) {
      var contributorData52 = contributorList52[contributorIndex52];
      output += '<li class="hidden hidden-contributor">' + Confluence.ContributorsMacro.contributor({contributor: contributorData52, showCount: opt_data.showCount, showTime: opt_data.showTime}) + '</li>';
    }
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.ContributorsMacro.listLayout.soyTemplateName = 'Confluence.ContributorsMacro.listLayout';
}


Confluence.ContributorsMacro.flatContributorsList = function(opt_data, opt_ignored) {
  var output = '';
  var contributorList62 = opt_data.contributors;
  var contributorListLen62 = contributorList62.length;
  for (var contributorIndex62 = 0; contributorIndex62 < contributorListLen62; contributorIndex62++) {
    var contributorData62 = contributorList62[contributorIndex62];
    output += ((! (contributorIndex62 == 0)) ? ',' : '') + Confluence.ContributorsMacro.contributor({contributor: contributorData62, showCount: opt_data.showCount, showTime: opt_data.showTime});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.ContributorsMacro.flatContributorsList.soyTemplateName = 'Confluence.ContributorsMacro.flatContributorsList';
}


Confluence.ContributorsMacro.contributor = function(opt_data, opt_ignored) {
  return Confluence.Templates.User.usernameLink({username: opt_data.contributor.idString, fullName: opt_data.contributor.fullNameString, canView: false}) + ' ' + ((opt_data.showCount) ? soy.$$escapeHtml(opt_data.contributor.totalCount) : '') + ' ' + ((opt_data.showTime) ? '(' + soy.$$escapeHtml(opt_data.contributor.relativeLastActiveTimeStr) + ')' : '');
};
if (goog.DEBUG) {
  Confluence.ContributorsMacro.contributor.soyTemplateName = 'Confluence.ContributorsMacro.contributor';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = 'templates/status.soy' */
// This file was automatically generated from status.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Template.Util.Issue.Status.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Template == 'undefined') { JIRA.Template = {}; }
if (typeof JIRA.Template.Util == 'undefined') { JIRA.Template.Util = {}; }
if (typeof JIRA.Template.Util.Issue == 'undefined') { JIRA.Template.Util.Issue = {}; }
if (typeof JIRA.Template.Util.Issue.Status == 'undefined') { JIRA.Template.Util.Issue.Status = {}; }


JIRA.Template.Util.Issue.Status.issueStatusResolver = function(opt_data, opt_ignored) {
  return '' + ((! opt_data.issueStatus) ? '<span class="aui-icon aui-icon-small aui-iconfont-help jira-issue-status-render-error" title="' + soy.$$escapeHtml("No issue status information was provided") + '"></span>' : (opt_data.issueStatus.statusCategory) ? JIRA.Template.Util.Issue.Status.issueStatus(opt_data) : JIRA.Template.Util.Issue.Status.iconStatus({name: opt_data.issueStatus.name, iconUrl: opt_data.issueStatus.iconUrl, description: opt_data.issueStatus.description, isCompact: opt_data.isCompact}));
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.issueStatusResolver.soyTemplateName = 'JIRA.Template.Util.Issue.Status.issueStatusResolver';
}


JIRA.Template.Util.Issue.Status.iconStatus = function(opt_data, opt_ignored) {
  return '<img src="' + soy.$$escapeHtml(opt_data.iconUrl) + '" width="16" height="16" alt="' + soy.$$escapeHtml(opt_data.name) + '" title="' + soy.$$escapeHtml(opt_data.name) + ((opt_data.description) ? ' - ' + soy.$$escapeHtml(opt_data.description) : '') + '" class="jira-issue-status-icon">' + ((! opt_data.isCompact) ? ' ' + soy.$$escapeHtml(opt_data.name) : '');
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.iconStatus.soyTemplateName = 'JIRA.Template.Util.Issue.Status.iconStatus';
}


JIRA.Template.Util.Issue.Status.issueStatus = function(opt_data, opt_ignored) {
  return '' + JIRA.Template.Util.Issue.Status.statusLozenge({name: opt_data.issueStatus.name, categoryKey: opt_data.issueStatus.statusCategory.key, colorName: opt_data.issueStatus.statusCategory.colorName, description: opt_data.issueStatus.description, isSubtle: opt_data.isSubtle, isCompact: opt_data.isCompact, maxWidth: opt_data.maxWidth});
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.issueStatus.soyTemplateName = 'JIRA.Template.Util.Issue.Status.issueStatus';
}


JIRA.Template.Util.Issue.Status.statusLozenge = function(opt_data, opt_ignored) {
  var output = '';
  var maxWidth__soy46 = opt_data.maxWidth ? opt_data.maxWidth : 'medium';
  var tooltipContent__soy47 = '<span class="jira-issue-status-tooltip-title">' + soy.$$escapeHtml(opt_data.name) + '</span>' + ((opt_data.description) ? '<br><span class="jira-issue-status-tooltip-desc">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '');
  output += '<span class=" jira-issue-status-lozenge aui-lozenge ' + JIRA.Template.Util.Issue.Status.statusLozengeClasses(opt_data) + ((opt_data.isSubtle && ! opt_data.isCompact) ? ' aui-lozenge-subtle' : '') + ((opt_data.isCompact) ? ' jira-issue-status-lozenge-compact' : '') + ' jira-issue-status-lozenge-max-width-' + soy.$$escapeHtml(maxWidth__soy46) + '" data-tooltip="' + soy.$$escapeHtml(tooltipContent__soy47) + '">' + soy.$$escapeHtml(opt_data.name) + '</span>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.statusLozenge.soyTemplateName = 'JIRA.Template.Util.Issue.Status.statusLozenge';
}


JIRA.Template.Util.Issue.Status.statusLozengeClasses = function(opt_data, opt_ignored) {
  return 'jira-issue-status-lozenge-' + soy.$$escapeHtml(opt_data.colorName ? opt_data.colorName : 'medium-gray') + ' ' + ((opt_data.categoryKey) ? 'jira-issue-status-lozenge-' + soy.$$escapeHtml(opt_data.categoryKey) : '');
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.statusLozengeClasses.soyTemplateName = 'JIRA.Template.Util.Issue.Status.statusLozengeClasses';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = '/js/issue-status-plugin.js' */
AJS.$(function(){if(AJS.$.fn.tooltip){AJS.$(".jira-issue-status-lozenge[data-tooltip]").tooltip({aria:true,gravity:AJS.$.fn.tipsy.autoWE,delayIn:100,html:true,live:true,title:"data-tooltip",className:"jira-issue-status-tooltip"})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = 'soy/jira-metadata.soy' */
// This file was automatically generated from jira-metadata.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Metadata.JIRA.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Metadata == 'undefined') { Confluence.Templates.Metadata = {}; }
if (typeof Confluence.Templates.Metadata.JIRA == 'undefined') { Confluence.Templates.Metadata.JIRA = {}; }


Confluence.Templates.Metadata.JIRA.metadata = function(opt_data, opt_ignored) {
  var output = '<div id="jira-metadata-dialog" class="rendered-content"><h2 class="title">' + soy.$$escapeHtml("JIRA links") + '</h2><div class="items-section">';
  var groupList6 = opt_data.groups;
  var groupListLen6 = groupList6.length;
  for (var groupIndex6 = 0; groupIndex6 < groupListLen6; groupIndex6++) {
    var groupData6 = groupList6[groupIndex6];
    if (groupData6.items.length) {
      switch (groupData6.type) {
        case 'ISSUES':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Issues", type: groupData6.type, links: groupData6.links});
          break;
        case 'SPRINTS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Sprints", type: groupData6.type, links: groupData6.links});
          break;
        case 'VERSIONS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Versions", type: groupData6.type, links: groupData6.links});
          break;
        case 'EPICS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Epics", type: groupData6.type, links: groupData6.links});
          break;
      }
    }
  }
  output += '</div>' + Confluence.Templates.Metadata.JIRA.renderAuthPrompts({appLinks: opt_data.unauthorisedAppLinks}) + Confluence.Templates.Metadata.JIRA.renderJiraErrors(opt_data) + '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.metadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.metadata';
}


Confluence.Templates.Metadata.JIRA.featureDiscovery = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-feature-discovery"><h2>' + soy.$$escapeHtml("View related JIRA items here") + '</h2><p>' + soy.$$escapeHtml("Now you can see which epics, sprints, versions and issues relate to this page.") + '</p><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner">' + aui.buttons.button({text: "Show me", extraClasses: 'showme'}) + aui.buttons.button({text: "Don\x27t show again", type: 'link', extraClasses: 'close'}) + '</div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.featureDiscovery.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.featureDiscovery';
}


Confluence.Templates.Metadata.JIRA.nometadata = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog" class="rendered-content">' + aui.message.warning({content: '<p>' + soy.$$escapeHtml("JIRA links cannot be displayed. Either you do not have correct JIRA permissions or the links have been removed.") + '</p>'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.nometadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.nometadata';
}


Confluence.Templates.Metadata.JIRA.renderAuthPrompts = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.appLinks.length) {
    var param66 = '';
    if (opt_data.appLinks.length == 1) {
      var appLink__soy69 = opt_data.appLinks[0];
      param66 += '<p>' + soy.$$filterNoAutoescape(AJS.format("{0}Login \x26amp; Approve{1} to retrieve data from {2}",'<a class="jira-metadata-auth-link" href="#" data-href="' + appLink__soy69.authorisationUrl + '">','</a>',appLink__soy69.htmlSafeName)) + '</p>';
    } else {
      param66 += '<p>' + soy.$$escapeHtml("Authenticate to retrieve data from the following instances:") + '</p>';
      var appLinkList78 = opt_data.appLinks;
      var appLinkListLen78 = appLinkList78.length;
      for (var appLinkIndex78 = 0; appLinkIndex78 < appLinkListLen78; appLinkIndex78++) {
        var appLinkData78 = appLinkList78[appLinkIndex78];
        param66 += '<div><a class="jira-metadata-auth-link" href="#" data-href="' + soy.$$escapeHtml(appLinkData78.authorisationUrl) + '">' + soy.$$escapeHtml(appLinkData78.name) + '</a></div>';
      }
    }
    output += aui.message.hint({content: param66});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderAuthPrompts.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderAuthPrompts';
}


Confluence.Templates.Metadata.JIRA.renderGroup = function(opt_data, opt_ignored) {
  var output = '<div class="jira-metadata-section ' + soy.$$escapeHtml(opt_data.type) + '-section"><div class="section-label"><span class="icon"></span><span>' + soy.$$escapeHtml(opt_data.headingText) + '</span></div><ul class="jira-metadata-list jira-' + soy.$$escapeHtml(opt_data.type) + '-list">';
  var itemList94 = opt_data.items;
  var itemListLen94 = itemList94.length;
  for (var itemIndex94 = 0; itemIndex94 < itemListLen94; itemIndex94++) {
    var itemData94 = itemList94[itemIndex94];
    output += '<li class="jira-metadata-item"><span class="item-label"><a href="' + soy.$$escapeHtml("/wiki") + '/plugins/servlet/jira-metadata/redirect?u=' + soy.$$escapeUri(itemData94.url) + '&t=' + soy.$$escapeHtml(opt_data.type) + '" title="' + soy.$$escapeHtml(itemData94.name) + '">' + soy.$$escapeHtml(itemData94.name) + '</a>' + ((itemData94.status) ? '&nbsp;' + ((itemData94.status.statusCategory) ? JIRA.Template.Util.Issue.Status.issueStatusResolver({issueStatus: itemData94.status, isSubtle: true}) : '<span class="item-status">(' + soy.$$escapeHtml(itemData94.status.name) + ')</span>') : '') + '</span>' + ((itemData94.description != '') ? '<span class="item-subtext">' + soy.$$escapeHtml(itemData94.description) + '</span>' : '') + '</li>';
  }
  output += '</ul><ul class="jira-metadata-list ' + soy.$$escapeHtml(opt_data.type) + '-more-link">';
  var linkList130 = opt_data.links;
  var linkListLen130 = linkList130.length;
  for (var linkIndex130 = 0; linkIndex130 < linkListLen130; linkIndex130++) {
    var linkData130 = linkList130[linkIndex130];
    output += '<li class="jira-metadata-item"><a href="' + soy.$$escapeHtml("/wiki") + '/plugins/servlet/jira-metadata/redirect?u=' + soy.$$escapeUri(linkData130.url) + '&t=' + soy.$$escapeHtml(opt_data.type) + '&more">' + soy.$$escapeHtml(AJS.format("View {0} more in {1}",linkData130.numItems,linkData130.appName)) + '</a></li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderGroup.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderGroup';
}


Confluence.Templates.Metadata.JIRA.loadingMetadata = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog"><h2 class="title">' + soy.$$escapeHtml("JIRA links") + '</h2><div class="spinner-container"><div class="spinner"></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.loadingMetadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.loadingMetadata';
}


Confluence.Templates.Metadata.JIRA.renderJiraErrors = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.errors.length == 1) {
    var error__soy150 = opt_data.errors[0];
    output += aui.message.warning({content: '<p>' + soy.$$escapeHtml("Unable to retrieve JIRA metadata.") + ' ' + soy.$$escapeHtml(error__soy150.errorMessage) + '</p>'});
  } else if (opt_data.errors.length > 1) {
    var param159 = '<p>' + soy.$$escapeHtml("Unable to retrieve JIRA metadata. The following errors occurred:") + '</p><ul>';
    var errorList163 = opt_data.errors;
    var errorListLen163 = errorList163.length;
    for (var errorIndex163 = 0; errorIndex163 < errorListLen163; errorIndex163++) {
      var errorData163 = errorList163[errorIndex163];
      param159 += '<li>' + soy.$$escapeHtml(errorData163.errorMessage) + '</li>';
    }
    param159 += '</ul>';
    output += aui.message.warning({content: param159});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderJiraErrors.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderJiraErrors';
}


Confluence.Templates.Metadata.JIRA.unknownError = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog" class="rendered-content">' + aui.message.warning({content: '<p>' + soy.$$escapeHtml("Unable to retrieve JIRA metadata. Could not connect to Confluence") + '</p>'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.unknownError.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.unknownError';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = '/js/jira-metadata.js' */
define("confluence/jira-metadata",["jquery","ajs","confluence/legacy","skate"],function(g,j,l,s){var h="com.atlassian.confluence.plugins.confluence-jira-metadata";var t=false;var p;var m;var r="jira-metadata-dialog";var u;var e="jira-metadata-discovery";var k="linked-issues-dropdown";function q(v,x,w){f(v,x,w);v.removeClass("hidden");if(b(v)){p=j.InlineDialog(v,r,function(z,y,A){j.trigger("analytics",{name:"confluence.jira.metadata.expanded"});if(!m||!t){m=z;A();a(v)}else{A()}return false},{hideDelay:null});v.click(function(){if(g("#"+r).is(":visible")){p.hide()}})}if(v&&i()){n(v);v.one("click",function(){l.FeatureDiscovery.forPlugin(h).markDiscovered(k)})}}function f(v,x,w){if(!w){var y=(x===1)?"1 JIRA link":j.format("{0} JIRA links",x);v.children("span").text(y)}}function b(v){return !v.attr("href")}function n(v){u=j.InlineDialog(v,e,function(x,w,y){x.html(l.Templates.Metadata.JIRA.featureDiscovery());x.find(".showme").on("click",function(){l.FeatureDiscovery.forPlugin(h).markDiscovered(k);u.hide();p.show()});x.find(".close").on("click",function(){l.FeatureDiscovery.forPlugin(h).markDiscovered(k);u.hide()});y()},{noBind:true,closeOthers:false,hideDelay:null});u.show();l.FeatureDiscovery.forPlugin(h).addDiscoveryView(k)}function i(){return !j.Meta.get("blueprint-index-popup-key")&&l.FeatureDiscovery.forPlugin(h).shouldShow(k)}function a(v){d();m.html(l.Templates.Metadata.JIRA.loadingMetadata());m.find(".spinner").spin("medium");var w=v.attr("data-page-id")||j.Meta.get("page-id");g.ajax({url:j.contextPath()+"/rest/jira-metadata/1.0/metadata?pageId="+w,type:"GET",dataType:"json",contentType:"application/json",error:function(x){c();m.html(l.Templates.Metadata.JIRA.unknownError())},success:function(x){c();t=true;f(v,x.count,false);var y;if(x.count===0&&!(x.unauthorisedAppLinks&&x.unauthorisedAppLinks.length>0)&&x.errors.length==0){j.trigger("analytics",{name:"confluence.jira.metadata.error.no-metadata"});y=l.Templates.Metadata.JIRA.nometadata()}else{y=l.Templates.Metadata.JIRA.metadata(x)}m.html(y);setTimeout(function(){m.find("#"+r).addClass("show")},0);o(v)},complete:function(){g("#"+r+" .icon-close").click(function(x){x.stopPropagation();g(this).closest(".closable").remove()})}})}function o(v){g(".jira-metadata-auth-link").click(function(w){w.preventDefault();window.AppLinks.authenticateRemoteCredentials(g(this).data("href"),function(){a(v)},function(){})})}function d(){if(m&&m.height()>0){m.css("height",m.height())}}function c(){m&&m.css("height","")}return{init:function(){s("content-metadata-jira",{type:s.types.CLASS,attached:function(z){var v=g(z);var A=v.attr("data-jira-metadata-count")||j.Meta.get("jira-metadata-count");A=parseInt(A,10);var y=v.attr("data-count-incomplete")||j.Meta.get("jira-metadata-count-incomplete");var w=v.attr("data-page-id")||j.Meta.get("page-id");if(A>0){q(v,A,y)}else{if(A===-1){var x=j.contextPath()+"/rest/jira-metadata/1.0/metadata/aggregate?pageId="+w;g.ajax({url:x,type:"GET",dataType:"json",contentType:"application/json",cache:false,success:function(B){if(B.count>0){q(v,B.count,B.incomplete)}}})}}}})}}});require("confluence/module-exporter").safeRequire("confluence/jira-metadata",function(a){a.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/doctheme-utils.js' */
define("confluence-highlight-actions/js/doctheme-utils",["jquery"],function(c){function d(f){var e=c(f);c(f).appendTo(c("body"));return e}function a(){return c(document).scrollTop()}function b(){return c(document).scrollLeft()}return{appendAbsolutePositionedElement:d,getMainContentScrollTop:a,getMainContentScrollLeft:b}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/doctheme-utils","Confluence.DocThemeUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/scrolling-inline-dialog.js' */
define("confluence-highlight-actions/js/scrolling-inline-dialog",["ajs","jquery"],function(a,b){return function(c,f,e,d){d=d||{};var g=function(k,s,J,z){var v;var L="auto";var G;var p=-7;var q;var w;var u=b(window).width();var K=s.target.position();var i=s.target.outerWidth();var m=K.left+i/2;var C=(window.pageYOffset||document.documentElement.scrollTop)+b(window).height();var n=10;var o=20;G=K.top+s.target.outerHeight()+z.offsetY;var H=k.find(".arrow").outerWidth();var j=k.outerWidth();var D=s.target.outerWidth();if(z.centerOnHighlight){if(j>D){v=K.left-(j-D)/2;q=m-v-H/2}else{v=K.left+z.offsetX;q=(j-H)/2}}else{v=K.left+z.offsetX;if(j>D){q=m-v-H/2}else{q=(j-H)/2}}q=(q<0)?0:q;var h=(K.top-(window.pageYOffset||document.documentElement.scrollTop));var A=z.maxHeight||0;var t=k.height();var r=h>Math.max(t,A);var l=(G+k.height())<C;w=(!l&&r)||z.onTop;z.onTop=w;var y=u-(v+j+n);if(w){G=K.top-t-8;p=t}if(w===false&&l===false){var x=(G+t)-C;var E=(window.pageYOffset||document.documentElement.scrollTop)+x+o;var F=b("html, body");F.stop().animate({scrollTop:E},500)}if(z.isRelativeToMouse){if(y<0){L=n;v="auto";q=J.x-(b(window).width()-z.width)}else{v=J.x-20;q=J.x-v}}else{if(y<0){L=n;v="auto";var I=u-L;var B=I-j;q=m-B-H/2}}return{displayAbove:w,popupCss:{left:v,right:L,top:G},arrowCss:{position:"absolute",left:q,right:"auto",top:p}}};if(!d.calculatePositions){d.calculatePositions=g}return a.InlineDialog.call(this,c,f,e,d)}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/scrolling-inline-dialog","Confluence.ScrollingInlineDialog");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/highlight-analytics.js' */
define("confluence-highlight-actions/js/highlight-analytics",["ajs"],function(c){var b="confluence.highlight.actions.open";var e="confluence.quote.in.comment.insert";var g="confluence.quote.in.comment.append";function d(h,i){c.trigger("analytics",{name:h,data:i})}function a(){d(b)}function f(h){if(h){d(e)}else{d(g)}}return{sendAnalyticsForOpeningHighlightOptionPanel:a,sendAnalyticsForQuoteInComment:f}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/highlight-analytics","Confluence.HighlightAction.Analytics");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = 'js/highlight-ranger-helper.js' */
define("confluence-highlight-actions/js/highlight-ranger-helper",["ajs","jquery","confluence/legacy","confluence-highlight-actions/js/doctheme-utils"],function(e,b,h,l){function r(s){return s.replace(/\u00a0/g,"\u0020")}function d(u,t){var s={};s.first=t[0];s.last=t[t.length-1];if(u.endOffset!=="undefined"){if(u.endOffset===0&&t.length>1){s.last=t[t.length-2]}}return s}function o(t){var u=l.getMainContentScrollTop();var v=l.getMainContentScrollLeft();var z=t.getClientRects();if(!z.length&&t.parentElement()){var A=b(t.parentElement());var s=A.offset();z=[{top:s.top-u,left:s.left-v,bottom:s.top+A.height(),right:s.left+A.width()}]}var C=d(t,z);var x=function(G,F){var E={};E.top=G.top;E.left=G.left+v;E.bottom=F.bottom;if(G.left>=F.right){E.right=G.right}else{E.right=F.right}E.right=E.right+v;E.top=E.top+u;E.bottom=E.bottom+u;E.width=E.right-E.left;E.height=E.bottom-E.top;return E};var w=function(F){var E={};E.width=F.right-F.left;E.height=F.bottom-F.top;E.left=F.left+v;E.right=F.right+v;E.top=F.top+u;E.bottom=F.bottom+u;return E};var D=x(C.first,C.last);var y=w(C.first);if(h.HighlightAction.debug){var B=b("<div>").attr("id","highlight-actions-debug-helper");l.appendAbsolutePositionedElement(B).css(b.extend({position:"absolute",outline:"1px solid red"},D))}return{first:y,average:D}}function p(t){var s=(t.text!==undefined)?t.text:t.toString();return r(s)}function q(s){return(s.cloneContents)?b("<div>").append(s.cloneContents()).html():s.htmlText}function a(t){if(t.commonAncestorContainer){var s=t.commonAncestorContainer;if(s.nodeType===3){return s.parentNode}return s}else{if(t.parentElement){return t.parentElement()}}}function g(s){return{area:o(s),text:p(s),html:q(s),containingElement:a(s),range:s}}function m(s,v){var t=a(v);var u=function(){var w=false;b.each(s,function(x,y){if(y===t||b.contains(y,t)){w=true;return false}});return w};return u()}function i(){if(window.getSelection&&window.getSelection().isCollapsed){return false}if(document.selection&&(document.selection.type==="None"||document.selection.createRange().htmlText==="")){return false}var v;if(window.getSelection){var s=window.getSelection();v=s.getRangeAt(s.rangeCount-1)}else{if(document.selection){v=document.selection.createRange()}}if(/^\s*$/.test(p(v))){var t=q(v);if(!t){return false}var u=t.toLowerCase().indexOf("<img ")!==-1;if(!u){return false}}if(!m(b(".wiki-content"),v)){return false}return v}function c(u,t){var s;if(document.createRange){s=document.createRange();s.setStart(u.get(0),0);s.setEnd(t.endContainer,t.originalEndOffset)}else{s=document.body.createTextRange();s.moveToElementText(u.get(0));s.setEndPoint("EndToEnd",t)}return s}function k(t){if(document.createRange){return t.text()}else{var s=document.body.createTextRange();s.moveToElementText(t.get(0));return s.text}}function j(x,w,u){var v=w.find('.user-mention, a[href^="/"]');w.find('.conf-macro[data-hasbody="false"]').each(function(){if(b(this).text().indexOf(x)>-1){v=v.add(this)}});if(v.length>0){var s=x.replace(/\S/g," ");var t=new RegExp(x.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"g");v.each(function(){var y=b(this).text();b(this).text(y.replace(t,s))});return k(w)}return u}function f(x,v){var t=k(v);t=j(x,v.clone(),t);t=r(t);var w=0;var u=-1;var s=[];while((u=t.indexOf(x,w))>-1){s.push(u);w=u+1}return s}function n(u,t){var s=p(c(u,t));var w=b.trim(p(t));var v=f(w,u);s=s.replace(/\s*$/,"");return{pageId:e.Meta.get("page-id"),selectedText:w,index:b.inArray(s.length-w.length,v),numMatches:v.length}}return{getRangeOption:g,getUserSelectionRange:i,getSelectionRects:o,getSelectionText:p,getSelectionHTML:q,getContainingElement:a,getFirstAndLastSelectionRect:d,isSelectionInsideContent:m,computeSearchTextObject:n}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/highlight-ranger-helper","Confluence.HighlightAction.RangeHelper");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = 'js/highlight-actions.js' */
define("confluence-highlight-actions/js/highlight-actions",["ajs","jquery","confluence/legacy","confluence-highlight-actions/js/highlight-ranger-helper"],function(n,e,o,g){var d={};var b={MAINCONTENT_AND_COMMENT:function(q){return g.isSelectionInsideContent(e(".wiki-content"),q)},MAINCONTENT_ONLY:function(r){var q=e(".wiki-content").first();return g.isSelectionInsideContent(q,r)},COMMENT_ONLY:function(q){return g.isSelectionInsideContent(e(".comment-content"),q)}};function a(r,s){var q={onClick:function(){},shouldDisplay:b.MAINCONTENT_AND_COMMENT};d[r]=e.extend(q,s)}function l(q){var r=d[q];if(!r){r=function(){n.logError("The button with key "+q+" doesn't have a registered handler")}}return r}function c(r){var q=o.getContextPath()+"/rest/highlighting/1.0/insert-storage-fragment";return e.ajax({type:"POST",contentType:"application/json",url:q,data:JSON.stringify(r)})}function f(q){var r=o.getContextPath()+"/rest/highlighting/1.0/insert-storage-column-table";return e.ajax({type:"POST",contentType:"application/json",url:r,data:JSON.stringify(q)})}function p(){return e('meta[name="confluence-request-time"]').attr("content")}function k(r){var q={};q.pageId=r.pageId;q.selectedText=r.selectedText;q.index=r.index;q.numMatches=r.numMatches;q.lastFetchTime=p();return q}function j(s,r,t){var q=k(t);q.tableColumnIndex=r;q.cellModifications=s;return q}function h(q,s){var r=k(s);r.xmlModification=q[0].xmlInsertion;return r}function i(q,s){var r=k(s);r.xmlModification=q;return r}function m(){if(window.getSelection){window.getSelection().empty&&window.getSelection().empty();window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges()}else{window.document.selection&&window.document.selection.empty()}}return{registerButtonHandler:a,getButtonHandler:l,insertContentAtSelectionEnd:c,insertContentsInTableColumnCells:f,createTableInsertionBean:j,createInsertionBean:h,createXMLModificationBean:i,clearTextSelection:m,WORKING_AREA:b}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/highlight-actions","Confluence.HighlightAction");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/highlight-panel.js' */
define("confluence-highlight-actions/js/highlight-panel",["ajs","confluence/meta","skate","jquery","confluence/legacy","confluence-highlight-actions/js/highlight-ranger-helper","confluence-highlight-actions/js/doctheme-utils","confluence-highlight-actions/js/highlight-analytics","confluence-highlight-actions/js/scrolling-inline-dialog","confluence-highlight-actions/js/highlight-actions"],function(h,k,r,d,i,q,l,e,w,u){var n=d("<div>").attr("id","action-dialog-target");var a;var m="selection-action-panel";var x;var f;var t=function(y){var z=i.getContextPath()+"/rest/highlighting/1.0/panel-items?pageId="+y;var A=d.get(z,function(B){if(B.length){v(B)}});g(A)};function p(){var z=d("#confluence-ui").length===0;if(z){var y=k.get("page-id");if(y){t(y)}}var A="spa-highlight-actions-placeholder";r(A,{type:r.types.CLASS,attributes:{"data-content-id":{created:function(B,C){if(C.newValue){t(C.newValue)}else{h.debug("content-id value is not defined.")}}}}})}var c=function(){return d(".wiki-content").first()};function v(D){var G=s();var y=29;var H=false;var J=D.length*y;var I=i.HighlightPanel.Templates.panelContent({webItems:D});var F=false;var A=function(L,K,M){if(!F){L.append(I);L.find(".aui-button").tooltip({gravity:"s"});o(L.parent());L.find("button").click(function(Q){var O=d(this).attr("data-key");var R=u.getButtonHandler(O);H=true;a.hide();var P=q.getRangeOption(x);if(d.trim(P.text)!==""){var N=c();P.searchText=q.computeSearchTextObject(N,x)}R.onClick(P)})}M();F=true;return false};var E=function(K){var L=false;K.find("button").each(function(M){var O=d(this);var N=O.attr("data-key");var Q=u.getButtonHandler(N);var P=Q&&Q.shouldDisplay&&Q.shouldDisplay(x);O.css("display",P?"inline-block":"none");L=L||P});if(!L){a.hide()}else{K.find(".contents").width("auto")}};var z=function(){e.sendAnalyticsForOpeningHighlightOptionPanel();E(this.popup);G.bindHideEvents();n.show()};var C=function(){G.unbindHideEvents();n.hide()};var B={centerOnHighlight:true,onTop:true,fadeTime:0,width:J,persistent:true,initCallback:z,hideCallback:C};a=w(n,m,A,B)}function o(y){y.children().attr("unselectable","on").on("selectstart",false)}function g(A){var y;var z=0;var B=1000;d(document).on("mouseup",function(C){A.done(function(E){if(!(E&&E.length>0)){return}var D=d(C.target);if(D.closest(".aui-inline-dialog").length!==0){return}setTimeout(function(){clearTimeout(y);var F=B;if(d(a[0]).is(":visible")){F=z}y=setTimeout(function(){j()},F)},z)})});A.done(function(){h.bind("quickedit.success",function(){a.hide()})})}function j(){x=q.getUserSelectionRange();var y=function(B){return d.trim(B.toString())!==""};if(x&&x.endOffset!==undefined){x.originalEndOffset=x.endOffset}if(!x||!y(x)){a.hide();return}var A=q.getSelectionRects(x);if(!A){return}var z=b(A);if(z||!d(a[0]).is(":visible")){d(a[0]).hide();a.show()}}function s(){var B=function(){D();A()};var E=function(){y();G()};var z=false;var F=m+".inline-dialog-check";var D=function(){if(!z){d("body").bind("click."+F,function(I){var H=d(I.target);if(H.closest("#inline-dialog-"+m+" .contents").length===0){if(!x){a.hide()}}});z=true}};var y=function(){if(z){d("body").unbind("click."+F)}z=false};var C=function(H){if(H.keyCode===27){a.hide()}};var A=function(){d(document).on("keydown",C)};var G=function(){d(document).off("keydown",C)};return{bindHideEvents:B,unbindHideEvents:E}}function b(z){l.appendAbsolutePositionedElement(n);var y=false;if(!f||z.first.top!=f.first.top||z.first.height!=f.first.height||z.first.left!=f.first.left||z.first.width!=f.first.width){n.css({top:z.first.top,height:z.first.height,left:z.first.left,width:z.first.width});f=z;y=true}return y}return{init:p}});require("confluence/module-exporter").safeRequire("confluence-highlight-actions/js/highlight-panel",function(a){a.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/quote-in-comment.js' */
define("confluence-highlight-actions/js/quote-in-comment",["ajs","jquery","confluence-highlight-actions/js/highlight-analytics","confluence-highlight-actions/js/highlight-actions"],function(j,e,h,f){var a=true;var i=false;function b(n){var m=n.getBody().createTextRange();m.moveToElementText(n.getBody());m.collapse(false);m.select()}function d(){var m=40;var n=e("#rte-toolbar").offset().top;e(document).scrollTop(n-m)}function l(n,o){var p="<p><br/></p>";if(e.browser.msie&&!i){b(n);p="<p></p>"}var m="<blockquote><p>"+o.html+"</p></blockquote>"+p;n.execCommand("mceInsertContent",false,m);i=false}function k(m){f.clearTextSelection();setTimeout(function(){var n=j&&j.Rte&&j.Rte.getEditor&&j.Rte.getEditor();if(n){h.sendAnalyticsForQuoteInComment();d();l(n,m)}else{h.sendAnalyticsForQuoteInComment(a);i=true;var o=function(){l(j.Rte.getEditor(),m);j.unbind("quickedit.visible",o)};j.bind("quickedit.visible",o);c(g(m.containingElement))}},0)}function g(m){var n=e(m).closest("div.comment");return n}function c(m){if(!m.length>0){e(".quick-comment-prompt").click()}else{m.find(".comment-actions .action-reply-comment").click()}}return{actionCallback:k}});require("confluence/module-exporter").safeRequire("confluence-highlight-actions/js/quote-in-comment",function(b){var c="com.atlassian.confluence.plugins.confluence-highlight-actions:quote-comment";var a=require("confluence-highlight-actions/js/highlight-actions");a.registerButtonHandler(c,{onClick:b.actionCallback,shouldDisplay:a.WORKING_AREA.MAINCONTENT_AND_COMMENT})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/soy/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.HighlightPanel.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.HighlightPanel == 'undefined') { Confluence.HighlightPanel = {}; }
if (typeof Confluence.HighlightPanel.Templates == 'undefined') { Confluence.HighlightPanel.Templates = {}; }


Confluence.HighlightPanel.Templates.panelContent = function(opt_data, opt_ignored) {
  var output = '';
  var webItemList3 = opt_data.webItems;
  var webItemListLen3 = webItemList3.length;
  for (var webItemIndex3 = 0; webItemIndex3 < webItemListLen3; webItemIndex3++) {
    var webItemData3 = webItemList3[webItemIndex3];
    output += '<button data-key="' + soy.$$escapeHtml(webItemData3.key) + '" class="aui-button aui-button-compact aui-button-subtle" title="' + soy.$$escapeHtml(webItemData3.label) + '"><span class="aui-icon aui-icon-small ' + soy.$$escapeHtml(webItemData3.styleClass) + '"/></button>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.HighlightPanel.Templates.panelContent.soyTemplateName = 'Confluence.HighlightPanel.Templates.panelContent';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-loader', location = 'com/atlassian/confluence/plugins/createjiracontent/js/page-helper.js' */
define("confluence/cjc/page-helper",["jquery","ajs","skate","confluence/legacy","wrm/require"],function(d,i,e,j,f){var b="com.atlassian.confluence.plugins.confluence-jira-content:create-JIRA-issue-summary";var h="wr!com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources";var a="Loading\u2026";var c=false;j.CreateJiraContent={Dialogs:{}};var g=function(l,k){d("body").append(k);k.css({top:l.top,height:l.height,left:l.left,width:l.width,"z-index":-9999,position:"absolute"}).addClass("confluence-jira-content-dialog-target")};return{initCreatedIssuesNotification:function(){e("jira-issues-created",{type:e.types.CLASS,events:{"click #jira-content-message-panel-view-more-link":function(k,m,l){m.preventDefault();d(l).hide();d(k).find("#jira-content-message-panel-error-warning").show()}},attached:function(m){var k=d(m);if(window.history&&window.history.replaceState){var n=window.location.href;var l=n.substr(0,n.indexOf("JIRAIssuesCreated")-1);window.history.replaceState({},document.title,l)}if(k.hasClass("success")){setTimeout(function(){k.hide()},10000)}}})},init:function(){var k=j.HighlightAction;if(!k){i.error("confluence-jira-content plugin needs dependency confluence-highlight-actions plugin to initialize.");return}k.registerButtonHandler(b,{onClick:function(n){var l;if(!c){var o=function(q,p,r){q.html('<span class="aui-icon aui-icon-wait"></span> '+a);r();return false};l=d("<div>");g(n.area.average,l);var m=j.ScrollingInlineDialog(l,"create-issue-loading-dialog",o,{});m.show();c=true}f(h).done(function(){if(j.CreateJiraContent.FeatureDiscovery.shouldShowFeatureDiscovery()){j.CreateJiraContent.Dialogs.showFeatureDiscoveryDialog(n)}else{j.CreateJiraContent.Dialogs.showCreateIssueDialog(n)}if(typeof l!=="undefined"){l.remove()}})},shouldDisplay:j.HighlightAction.WORKING_AREA.MAINCONTENT_ONLY})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-loader', location = 'com/atlassian/confluence/plugins/createjiracontent/js/page-helper-init.js' */
require(["confluence/cjc/page-helper"],function(a){a.init();a.initCreatedIssuesNotification()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:es6-promise', location = '/includes/js/third-party/es6-promise.js' */
(function(){function y(a){return"function"===typeof a}function j(){for(var a=0;a<k;a+=2)(0,r[a])(r[a+1]),r[a]=void 0,r[a+1]=void 0;k=0}function s(){}function t(a,b){if(a===b)e(a,new TypeError("You cannot resolve a promise with itself"));else if("function"===typeof b||"object"===typeof b&&null!==b)if(b.constructor===a.constructor)b._state===u?l(a,b._result):b._state===m?e(a,b._result):w(b,void 0,function(b){t(a,b)},function(b){e(a,b)});else{var c;try{c=b.then}catch(d){x.error=d,c=x}if(c===x)e(a,x.error);
else if(void 0===c)l(a,b);else if(y(c)){var h=c;n(function(a){var c=!1,d;a:{d=function(d){c||(c=!0,b!==d?t(a,d):l(a,d))};var g=function(b){c||(c=!0,e(a,b))};try{h.call(b,d,g)}catch(i){d=i;break a}d=void 0}!c&&d&&(c=!0,e(a,d))},a)}else l(a,b)}else l(a,b)}function M(a){a._onerror&&a._onerror(a._result);z(a)}function l(a,b){a._state===o&&(a._result=b,a._state=u,0!==a._subscribers.length&&n(z,a))}function e(a,b){a._state===o&&(a._state=m,a._result=b,n(M,a))}function w(a,b,c,d){var h=a._subscribers,f=
h.length;a._onerror=null;h[f]=b;h[f+u]=c;h[f+m]=d;0===f&&a._state&&n(z,a)}function z(a){var b=a._subscribers,c=a._state;if(0!==b.length){for(var d,h,f=a._result,e=0;e<b.length;e+=3)d=b[e],h=b[e+c],d?D(c,d,h,f):h(f);a._subscribers.length=0}}function E(){this.error=null}function D(a,b,c,d){var h=y(c),f,g,i,j;if(h){try{f=c(d)}catch(k){A.error=k,f=A}f===A?(j=!0,g=f.error,f=null):i=!0;if(b===f){e(b,new TypeError("A promises callback cannot return that same promise."));return}}else f=d,i=!0;b._state===
o&&(h&&i?t(b,f):j?e(b,g):a===u?l(b,f):a===m&&e(b,f))}function i(a,b){this._instanceConstructor=a;this.promise=new a(s);this._validateInput(b)?(this._input=b,this._remaining=this.length=b.length,this._init(),0===this.length?l(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&l(this.promise,this._result))):e(this.promise,this._validationError())}function g(a){this._id=N++;this._result=this._state=void 0;this._subscribers=[];if(s!==a){if(!y(a))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
if(!(this instanceof g))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");var b=this;try{a(function(a){t(b,a)},function(a){e(b,a)})}catch(c){e(b,c)}}}var F=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},k=0,G,B,n=function(a,b){r[k]=a;r[k+1]=b;k+=2;2===k&&(B?B(j):p())},q="undefined"!==typeof window?window:void 0,v=q||{},v=v.MutationObserver||v.WebKitMutationObserver,
O="undefined"!==typeof process&&"[object process]"==={}.toString.call(process),P="undefined"!==typeof Uint8ClampedArray&&"undefined"!==typeof importScripts&&"undefined"!==typeof MessageChannel,r=Array(1E3),p;if(O)p=function(){process.nextTick(j)};else if(v){var H=0,q=new v(j),I=document.createTextNode("");q.observe(I,{characterData:!0});p=function(){I.data=H=++H%2}}else if(P){var J=new MessageChannel;J.port1.onmessage=j;p=function(){J.port2.postMessage(0)}}else if(void 0===q&&"function"===typeof require)try{var K=
require("vertx");G=K.runOnLoop||K.runOnContext;p=function(){G(j)}}catch(Q){p=function(){setTimeout(j,1)}}else p=function(){setTimeout(j,1)};var o=void 0,u=1,m=2,x=new E,A=new E;i.prototype._validateInput=function(a){return F(a)};i.prototype._validationError=function(){return Error("Array Methods must be provided an Array")};i.prototype._init=function(){this._result=Array(this.length)};i.prototype._enumerate=function(){for(var a=this.length,b=this.promise,c=this._input,d=0;b._state===o&&d<a;d++)this._eachEntry(c[d],
d)};i.prototype._eachEntry=function(a,b){var c=this._instanceConstructor;"object"===typeof a&&null!==a?a.constructor===c&&a._state!==o?(a._onerror=null,this._settledAt(a._state,b,a._result)):this._willSettleAt(c.resolve(a),b):(this._remaining--,this._result[b]=a)};i.prototype._settledAt=function(a,b,c){var d=this.promise;d._state===o&&(this._remaining--,a===m?e(d,c):this._result[b]=c);0===this._remaining&&l(d,this._result)};i.prototype._willSettleAt=function(a,b){var c=this;w(a,void 0,function(a){c._settledAt(u,
b,a)},function(a){c._settledAt(m,b,a)})};var N=0,L=g;g.all=function(a){return(new i(this,a)).promise};g.race=function(a){function b(a){t(d,a)}function c(a){e(d,a)}var d=new this(s);if(!F(a))return e(d,new TypeError("You must pass an array to race.")),d;for(var h=a.length,f=0;d._state===o&&f<h;f++)w(this.resolve(a[f]),void 0,b,c);return d};g.resolve=function(a){if(a&&"object"===typeof a&&a.constructor===this)return a;var b=new this(s);t(b,a);return b};g.reject=function(a){var b=new this(s);e(b,a);
return b};g._setScheduler=function(a){B=a};g._setAsap=function(a){n=a};g._asap=n;g.prototype={constructor:g,then:function(a,b){var c=this._state;if(c===u&&!a||c===m&&!b)return this;var d=new this.constructor(s),e=this._result;if(c){var f=arguments[c-1];n(function(){D(c,d,f,e)})}else w(this,d,a,b);return d},"catch":function(a){return this.then(null,a)}};var q=function(){var a;if("undefined"!==typeof global)a=global;else if("undefined"!==typeof self)a=self;else try{a=Function("return this")()}catch(b){throw Error("polyfill failed because global object is unavailable in this environment");
}var c=a.Promise;if(!c||"[object Promise]"!==Object.prototype.toString.call(c.resolve())||c.cast)a.Promise=L},C={Promise:L,polyfill:q};"function"===typeof define&&define.amd?define(function(){return C}):"undefined"!==typeof module&&module.exports?module.exports=C:"undefined"!==typeof this&&(this.ES6Promise=C);q()}).call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'probe.js' */
!function(){var n,t,e,r,i,o,u,a,c,s,f,l,h,y,d,p,v;n=function(){return window}(),t=function(n){return!(!n.performance||!n.performance.now)}(n),e=[],r=function(n){return function(t){n.unshift({addReporter:t})}}(e),i=function(n){return function(t){for(;n.length;)t(n.splice(0,1)[0]);n.unshift=t,n.push=t}}(e),o=function(n,t){return function(e){n.push({end:{key:e.key,timestamp:t.performance.now()}})}}(e,n),u=function(n){return n.document}(n),a=function(n){return n.Promise}(n),c=function(){function n(){this._={}}var t=function(e){var r=e[0],i=e[1];i instanceof n?e.length>=3?Object.keys(i._).forEach(function(n){t([r,i._[n],n].concat(e.slice(2)))}):Object.keys(i._).forEach(function(n){t([r,i._[n],n])}):Array.isArray(i)&&r.apply(null,[i].concat(e.slice(2)))};n.prototype.forEach=function(n){t([n,this])},n.prototype.add=function(){for(var t=this,e=null,r=null,i=0;i<arguments.length;i++){if(r=arguments[i],i===arguments.length-1&&Array.isArray(t)){t.push(r);break}i<arguments.length-2&&!t._.hasOwnProperty(r)?t._[r]=new n:i!==arguments.length-2||t._.hasOwnProperty(r)||(t._[r]=[]),t=t._[r],e=r}};var e=function(n,t){if(0!==n.length){var r=n.pop(),i=r[0],o=r[1];i===t?e(n,i):o._.hasOwnProperty(t)&&delete o._[t],0===Object.keys(o).length&&e(n,i)}};return n.prototype.remove=function(){for(var n,t=!1,r=null,i=this,o=[[r,i]],u=null,a=0;a<arguments.length;a++)if(u=arguments[a],Array.isArray(i))n=i.indexOf(u),n>-1&&(i.splice(n,1),0===i.length&&o.length>1&&e(o,r),t=!0);else{if(!i._.hasOwnProperty(u))break;a===arguments.length-1&&(delete i._[u],0===Object.keys(i).length&&o.length>1&&e(o,r),t=!0),r=u,i=i._[u],o.push([r,i])}return t},n.prototype.get=function(n){return this._.hasOwnProperty(n)?this._[n]:[]},n}(),s=function(n,t,e,r){function i(n){return!n||null==n||"null"===n||"undefined"===n}function o(t,e,r){l||(c.observe(n,{attributes:!0,childList:!0,subtree:!0}),l=!0),s.add(t,e,r)}function u(t,e){var r=n.querySelectorAll(t);return r.length&&(i(e)||Array.prototype.every.call(r,function(n){return!n.querySelector(e)}))}function a(n,e){var r;n.forEach||(n=[n]),!i(e)&&Array.isArray(e)&&(e=e.join(", "));var a=new t(function(i,a){var c=[],f=[];n.forEach(function(n){var r,i;u(n,e)||(r=new t(function(t){o(n,e,t),i=function(){s.remove(n,e,t)},f.push(i)}),c.push(r))});var l=function(){f.forEach(function(n){n()})};t.all(c).then(l).then(i,a),r=function(){l(),a()}});return a.dismiss=r,a}var c,s,f=r.MutationObserver,l=!1;return f&&t?(s=new e,c=new f(function(){s.forEach(function(n,t,e){u(e,t)&&(n.forEach(function(n){n()}),s.remove(e,t))})}),a):void 0}(u,a,c,n),f=function(n){return!!n}(s),l=function(n){function t(){c(),n.body.classList.add(u)}function e(){function e(){n.body.classList.remove(u),n.removeEventListener(i,s),n.removeEventListener(o,c),r=null}if(r)return r;var c,s,f=!1;return r=new Promise(function(e,r){"visible"!==n.visibilityState?r():(s=function(){f=!0},c=function(n){n.animationName===a&&(f?r():e())},n.addEventListener(i,s),n.addEventListener(o,c),t())}),r.then(e,e),r}var r,i="visibilitychange",o="animationend",u="browser-metrics-visibility-test",a="browser-metrics-visibility-animation",c=function(){var t=n.createElement("style"),e=["."+u+" {","-webkit-animation-duration: 0.001s;","animation-duration: 0.001s;","-webkit-animation-name: "+a+";","animation-name: "+a+";","-webkit-animation-iteration-count: 1;","animation-iteration-count: 1;","}","@keyframes "+a+" {}","@-webkit-keyframes "+a+" {","from {}","to {}","}"].join("\n");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(n.createTextNode(e)),n.head.appendChild(t),c=function(){}};return e}(u),h=function(n,t,e,r,i){function o(n){return Array.isArray(n)||(n=[n]),n.map(function(n){return"string"==typeof n?{selector:n,hasNone:null}:n})}function u(n){return Array.isArray(n)||"string"==typeof n}function a(n){return u(n)&&(n={rules:n}),n.rules=o(n.rules),n.requirePaint="undefined"==typeof n.requirePaint?!1:n.requirePaint,n}return function(i,o){if(n){i=a(i);var u=function(){},c=new e(function(n,r){var o=[],a=i.rules.map(function(n){var e=new t(n.selector,n.hasNone);return o.push(function(){e.dismiss()}),e});u=function(){o.forEach(function(n){n()}),r()},e.all(a).then(function(n){}).then(n,r)});return c.cancel=u,i.requirePaint&&(c=c.then(r)),"function"==typeof o&&c.then(o),c}}}(f,s,a,l,n),y=function(n,t){function e(){return r}var r=!1;return n.addEventListener("DOMContentLoaded",function(){t.setTimeout(function(){r=!0})}),e}(u,n),d=function(n,t,e,r,i,o,u){function a(){c=null}var c;return function(o){var s="isInitial"in o?o.isInitial:i()===!1,f="threshold"in o?o.threshold:1e3,l="reporters"in o?o.reporters:[];r.push({start:{key:o.key,isInitial:s,threshold:f,timestamp:s?0:u.performance.now(),reporters:Array.isArray(l)?l:[l]}}),c&&(c.cancel(),a()),o.ready&&e&&(c=n(o.ready),c.then(function(){t({key:o.key})}).then(a,a))}}(h,o,f,e,y,a,n),p=function(n){return function(t){n.push({subscribe:t})}}(e),v=function(n,t,e,r,i,o){var u=function(){};return{start:n?i:u,end:n?r:u,addReporter:n?t:u,delegateTo:n?e:u,subscribe:n?o:u}}(t,r,i,o,d,p),window["browser-metrics"]=v,window.define&&window.define("internal/browser-metrics",function(){return v})}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'internal/browser-metrics-aa-beacon.js' */
!function(){var n={};n=function(n){function e(n,e){Object.keys(e).forEach(function(r){n[r]=e[r]})}var r=[],t=[];return n.addUrlCleaner=function(n){t.push(n)},n.cleanUrl=function(n){return t.reduce(function(e,r){var t=r(n);return t.length>e.length?t:e},"")},n.addReportMarshaller=function(n){r.push(n)},n.beacon=function(n){var t={};r.forEach(function(r){var o=r(n);"object"==typeof o&&e(t,o)});var o={name:"browser.metrics.navigation",properties:t};AJS.EventQueue.push(o)},n}(n),window["browser-metrics-aa-beacon"]=n,window.define&&window.define("internal/browser-metrics-aa-beacon",function(){return n})}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'loader.js' */
!function(){var n={},r={},i={};n=function(n){var r=window;return r}(n),r=function(n,r){var i=r.WRM;return i}(r,n),i=function(n,r,i){function t(){u===c&&o&&(o(),o=null)}var u=0,c=0,o=null,e={install:function(n){u+=1,n(function(){c+=1,t()})}};return r["browser-metrics-plugin"]=e,i.require(["wrc!browser-metrics-plugin.contrib"],function(){r.require(["internal/browser-metrics-plugin/collector"],function(n){o=function(){n.install()},t()})}),n}(i,n,r)}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:viewcontent', location = '/js/viewcontent.js' */
require(["confluence/api/event","internal/browser-metrics","ajs","jquery"],function(f,e,c,g){function b(i){if(!g(i.target).hasClass("full-load")){var h=i.data.type;if(c.Meta.getBoolean("shared-drafts")&&c.Meta.getBoolean("synchrony-dark-enabled")){var j="confluence."+h+".edit.collaborative.quick-view";e.start({key:j});c.bind("rte-collab-ready",function(){e.end({key:j});e.start({key:j+".connected"})});c.bind("synchrony.connected",function(){e.end({key:j+".connected"})})}else{if(!c.Meta.getBoolean("shared-drafts")){e.start({key:"confluence."+h+".edit.quick-view",ready:".active-richtext"})}}}}function a(){e.start({key:"confluence.file.preview.firstpage"});f.bind("confluence-previews.fileviewer.completed",function(){e.end({key:"confluence.file.preview.firstpage"})})}function d(){var j=c.Meta.get("content-type");var i=g("#confluence-ui.confluence-dashboard").length;var h=window.location.href.indexOf("/content-only/")>-1;if(j){if(!i&&!h){e.start({key:"confluence."+j+".view",ready:".wiki-content",isInitial:true})}g("#editPageLink").on("click",{type:j},b);g(".confluence-embedded-file-wrapper").on("click",a)}}c.toInit(d)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-init', location = 'sh/asyncLoader.js' */
define("confluence/code-macro/async-loader",["jquery","wrm","underscore"],function(c,a,b){return function(){b.defer(function(){var h=c(".codeHeader .collapse-source");d(h);var i=c("#content").find("pre.syntaxhighlighter-pre");if(i.length>0){var g="wr!com.atlassian.confluence.ext.newcode-macro-plugin:sh-theme-";var f=["wrc!code-macro"];i.each(function(){f.push(g+c(this).data("theme").toLowerCase())});a.require(f).done(function(){window.SyntaxHighlighter.highlight();e(h)})}});function d(f){f.hide();b.forEach(f,function(g){c(g).next(".collapse-spinner-wrapper").spin()})}function e(f){f.show();f.next(".collapse-spinner-wrapper").remove()}}});require("confluence/module-exporter").safeRequire("confluence/code-macro/async-loader",function(a){AJS.toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner.js' */
define("confluence-page-banner/page-banner",["ajs","jquery","skate"],function(i,c,d){function k(){var m=c("#system-content-items");if(m.children(":not(.hidden)").length==0){m.addClass("hidden")}else{m.removeClass("hidden")}}function e(){c("#page-metadata-banner").hide()}function j(){var m=c("#system-content-items a:not(.tipsy-disabled), .page-metadata-item a:not(.tipsy-disabled), .page-metadata-modification-info a.last-modified:not(tipsy-disabled)");a(m);m.click(function(n){g(c(n.target).closest("a"))});c(window).on("click scroll resize",g)}function a(m){c(m).tooltip({live:true,gravity:"n",title:"title",delayIn:500})}function g(m){c(".tipsy").remove();if(m){var n=c(m).data("tipsy");if(n){n.hoverState="out"}}}var f=function(o,q){var p=c("#content-metadata-page-restrictions");var m="";p.removeClass("aui-iconfont-locked aui-iconfont-unlocked restricted");var n=q.hasRestrictions&&!(q.hasExplicitRestrictions||q.hasInheritedRestrictions);if(q.hasExplicitRestrictions||n){p.addClass("aui-icon aui-icon-small aui-iconfont-locked restricted");m="Restrictions apply"}else{if(q.hasInheritedRestrictions){p.addClass("aui-icon aui-icon-small aui-iconfont-unlocked restricted");m="Restrictions apply"}else{p.addClass("aui-icon aui-icon-small aui-iconfont-unlocked");m=q.hasAnyExplicitRestrictions?"Restrictions apply":"Unrestricted"}}p.attr("title",m);a(p);k()};var b=function(){k();i.bind("system-content-metadata.toggled-restrictions",f);i.bind("breadcrumbs.expanded",e);c("#page-metadata-banner").css("visibility","visible");j()};var h=function(){i.unbind("system-content-metadata.toggled-restrictions",f);i.unbind("breadcrumbs.expanded",e)};var l=function(){d("system-metadata-restrictions",{type:d.types.CLASS,events:{click:function(n,m){m.preventDefault();i.trigger("system-content-metadata.open-restrictions-dialog")}},attached:b,detached:h})};l()});require("confluence/module-exporter").safeRequire("confluence-page-banner/page-banner");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner-analytics.js' */
AJS.toInit(function(c){function b(){if(!AJS.Confluence.Analytics||!AJS.Confluence.Analytics.setAnalyticsSource){AJS.log("WARNING: Could not initialise analytics for the page banner: AJS.Confluence.Analytics.setAnalyticsSource is not defined.");return}var e=AJS.Confluence.Analytics.setAnalyticsSource;var f=c("#breadcrumbs > li");e(f.filter(":not(#ellipsis)").find("a"),"breadcrumbs");e(f.filter(".hidden-crumb").find("a"),"breadcrumbs-expanded");e(f.filter(":last").find("a"),"breadcrumbs-parent");var d=c("#com-atlassian-confluence").hasClass("theme-documentation")?"breadcrumbs-homepage":"breadcrumbs-collector";e(f.filter(".first").find("a"),d)}function a(e,d,g){var f=null;e.mouseover(function(){f=setTimeout(g,d)});e.mouseout(function(){clearTimeout(f)})}AJS.bind("breadcrumbs.expanded",function(){AJS.trigger("analyticsEvent",{name:"breadcrumbs-expanded"})});b()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/user.soy' */
// This file was automatically generated from user.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.User.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.User == 'undefined') { Confluence.Templates.User = {}; }


Confluence.Templates.User.userLinkUrl = function(opt_data, opt_ignored) {
  return soy.$$escapeHtml("/wiki") + '/display/~' + soy.$$escapeUri(opt_data.username);
};
if (goog.DEBUG) {
  Confluence.Templates.User.userLinkUrl.soyTemplateName = 'Confluence.Templates.User.userLinkUrl';
}


Confluence.Templates.User.logo = function(opt_data, opt_ignored) {
  return '' + ((opt_data.profilePictureInfo['default'] && opt_data.username == opt_data.currentUsername) ? '<a ' + ((opt_data.canView) ? ' ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '') + ' href="' + soy.$$escapeHtml("/wiki") + '/users/profile/editmyprofilepicture.action" title="' + soy.$$escapeHtml("Add a picture of yourself") + '"><img class="userLogo logo defaultLogo" src="' + soy.$$escapeHtml("/wiki/s/-1473185510/6452/ced864aa0a955b6ef92865c7d3ca599c4c790649/_") + '/images/icons/profilepics/add_profile_pic.png" alt="' + soy.$$escapeHtml("User icon") + ': ' + soy.$$escapeHtml("Add a picture of yourself") + '"></a>' : (opt_data.profilePictureInfo.anonymous) ? '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/wiki/s/-1473185510/6452/ced864aa0a955b6ef92865c7d3ca599c4c790649/_") + '/images/icons/profilepics/anonymous.png" alt="' + soy.$$escapeHtml("User icon") + ': ' + soy.$$escapeHtml("Anonymous") + '" title="' + soy.$$escapeHtml("Anonymous") + '">' : (opt_data.canView) ? '<a ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '" href="' + Confluence.Templates.User.userLinkUrl(opt_data) + '"><img class="userLogo logo" src="' + soy.$$escapeHtml(opt_data.profilePictureInfo.uriReference) + '" alt="' + soy.$$escapeHtml("User icon") + ': ' + soy.$$escapeHtml(opt_data.username) + '" title="' + soy.$$escapeHtml(opt_data.username) + '"></a>' : '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/wiki/s/-1473185510/6452/ced864aa0a955b6ef92865c7d3ca599c4c790649/_") + '/images/icons/profilepics/anonymous.png" alt="' + soy.$$escapeHtml("User icon") + ': ' + soy.$$escapeHtml(opt_data.username) + '" title="' + soy.$$escapeHtml(opt_data.username) + '">');
};
if (goog.DEBUG) {
  Confluence.Templates.User.logo.soyTemplateName = 'Confluence.Templates.User.logo';
}


Confluence.Templates.User.usernameLink = function(opt_data, opt_ignored) {
  return '' + ((opt_data.username && opt_data.username != '') ? '<a href="' + Confluence.Templates.User.userLinkUrl(opt_data) + '"' + ((opt_data.canView) ? 'class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : 'class="url fn"') + '>' + ((opt_data.fullName && opt_data.fullName != '') ? soy.$$escapeHtml(opt_data.fullName) : soy.$$escapeHtml(opt_data.username)) + '</a>' : soy.$$escapeHtml("Anonymous"));
};
if (goog.DEBUG) {
  Confluence.Templates.User.usernameLink.soyTemplateName = 'Confluence.Templates.User.usernameLink';
}


Confluence.Templates.User.fullNameOrAnonymous = function(opt_data, opt_ignored) {
  return '' + ((opt_data.user && opt_data.user.fullName) ? soy.$$escapeHtml(opt_data.user.fullName) : soy.$$escapeHtml("Anonymous"));
};
if (goog.DEBUG) {
  Confluence.Templates.User.fullNameOrAnonymous.soyTemplateName = 'Confluence.Templates.User.fullNameOrAnonymous';
}


Confluence.Templates.User.usernameOrAnonymous = function(opt_data, opt_ignored) {
  return '' + ((opt_data.user && opt_data.user.name) ? soy.$$escapeHtml(opt_data.user.name) : soy.$$escapeHtml("Anonymous"));
};
if (goog.DEBUG) {
  Confluence.Templates.User.usernameOrAnonymous.soyTemplateName = 'Confluence.Templates.User.usernameOrAnonymous';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Icons.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Icons == 'undefined') { Confluence.Templates.Icons = {}; }


Confluence.Templates.Icons.contentIcon = function(opt_data, opt_ignored) {
  return '' + ((opt_data.content.type == 'trackback') ? '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon icon-trackback" title="' + soy.$$escapeHtml("Track back") + '">' + soy.$$escapeHtml("Track back") + ':</a>' : '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</a>');
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.contentIcon.soyTemplateName = 'Confluence.Templates.Icons.contentIcon';
}


Confluence.Templates.Icons.contentIconFont = function(opt_data, opt_ignored) {
  return '' + ((opt_data.content.type == 'trackback') ? '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon icon-trackback" title="' + soy.$$escapeHtml("Track back") + '">' + soy.$$escapeHtml("Track back") + ':</a>' : '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '"><span class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</span></a>');
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.contentIconFont.soyTemplateName = 'Confluence.Templates.Icons.contentIconFont';
}


Confluence.Templates.Icons.iconSpan = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<span class="icon' + ((opt_data.type) ? ' aui-icon aui-icon-small aui-iconfont-' + soy.$$escapeHtml(opt_data.type) : '') + ' ' + ((opt_data.additionalClasses) ? soy.$$escapeHtml(opt_data.additionalClasses) : '') + '">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + '</span>';
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.iconSpan.soyTemplateName = 'Confluence.Templates.Icons.iconSpan';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/captcha.soy' */
// This file was automatically generated from captcha.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Captcha.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Captcha == 'undefined') { Confluence.Templates.Captcha = {}; }


Confluence.Templates.Captcha.form = function(opt_data, opt_ignored) {
  var output = '<div class="captcha field-group"><label id="captcha-response-label" for="captcha-response"><span class="assistive">' + soy.$$escapeHtml("If you are unable to use this CAPTCHA please \x3ca href\x3d\x22administrators.action\x22 tabindex\x3d\x225\x22\x3econtact your administrator\x3c/a\x3e for assistance.") + '</span></label>' + Confluence.Templates.Captcha.image(opt_data) + '<input type="text" id="captcha-response" name="captchaResponse" value="" class="text" placeholder="' + soy.$$escapeHtml("Type the word above") + '">';
  if (opt_data.captchaErrors && opt_data.captchaErrors.length) {
    var errorList13 = opt_data.captchaErrors;
    var errorListLen13 = errorList13.length;
    for (var errorIndex13 = 0; errorIndex13 < errorListLen13; errorIndex13++) {
      var errorData13 = errorList13[errorIndex13];
      output += aui.message.warning({content: errorData13});
    }
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Captcha.form.soyTemplateName = 'Confluence.Templates.Captcha.form';
}


Confluence.Templates.Captcha.image = function(opt_data, opt_ignored) {
  return '<img src="' + soy.$$escapeHtml("/wiki") + '/jcaptcha?id=' + soy.$$escapeHtml(opt_data.captchaId) + '" class="captcha-image" alt="' + soy.$$escapeHtml("CAPTCHA image") + '"><input type="hidden" name="captchaId" value="' + soy.$$escapeHtml(opt_data.captchaId) + '" placeholder="' + soy.$$escapeHtml("Type the word above") + '">';
};
if (goog.DEBUG) {
  Confluence.Templates.Captcha.image.soyTemplateName = 'Confluence.Templates.Captcha.image';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/notifications.soy' */
// This file was automatically generated from notifications.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Notifications.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Notifications == 'undefined') { Confluence.Templates.Notifications = {}; }


Confluence.Templates.Notifications.notLoggedIn = function(opt_data, opt_ignored) {
  return '' + ((! opt_data.isUserAuthenticated) ? '<div id="anonymous-warning" class="aui-message warning closeable">' + soy.$$filterNoAutoescape("You are not logged in. Any changes you make will be marked as \x3cspan class\x3d\x22smalltext\x22\x3eanonymous\x3c/span\x3e.") + ((! opt_data.isExternalUserManagementEnabled) ? ' ' + soy.$$filterNoAutoescape(AJS.format("You may want to \x3ca href\x3d\x22{0}\x22\x3eLog In\x3c/a\x3e if you already have an account.",opt_data.loginURL)) : '') + '</div>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Notifications.notLoggedIn.soyTemplateName = 'Confluence.Templates.Notifications.notLoggedIn';
}


Confluence.Templates.Notifications.actionErrors = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.actionErrors.length > 0) {
    output += '<div class="aui-message aui-message-error ' + ((opt_data.closeable) ? 'closeable' : '') + '"><p class="title">' + soy.$$escapeHtml("The following error(s) occurred:") + '</p><span class="aui-icon icon-error"></span><ul>';
    var errorHtmlList24 = opt_data.actionErrors;
    var errorHtmlListLen24 = errorHtmlList24.length;
    for (var errorHtmlIndex24 = 0; errorHtmlIndex24 < errorHtmlListLen24; errorHtmlIndex24++) {
      var errorHtmlData24 = errorHtmlList24[errorHtmlIndex24];
      output += '<li>' + soy.$$filterNoAutoescape(errorHtmlData24) + '</li>';
    }
    output += '</ul></div>';
  }
  output += '<div id="action-messages"></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Notifications.actionErrors.soyTemplateName = 'Confluence.Templates.Notifications.actionErrors';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:soy-resources', location = 'soy/page-banner.soy' */
// This file was automatically generated from page-banner.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.PageBanner.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.PageBanner == 'undefined') { Confluence.Templates.PageBanner = {}; }


Confluence.Templates.PageBanner.banner = function(opt_data, opt_ignored) {
  var output = '<div id="page-metadata-banner"><ul class="banner">' + Confluence.Templates.PageBanner.renderSystemContentItems(opt_data);
  var itemList6 = opt_data.pageBannerItems;
  var itemListLen6 = itemList6.length;
  for (var itemIndex6 = 0; itemIndex6 < itemListLen6; itemIndex6++) {
    var itemData6 = itemList6[itemIndex6];
    output += Confluence.Templates.PageBanner.renderPageBannerItem(itemData6);
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.banner.soyTemplateName = 'Confluence.Templates.PageBanner.banner';
}


Confluence.Templates.PageBanner.renderSystemContentItems = function(opt_data, opt_ignored) {
  var output = '<li id="system-content-items" class="noprint">';
  var itemList12 = opt_data.systemContentItems;
  var itemListLen12 = itemList12.length;
  for (var itemIndex12 = 0; itemIndex12 < itemListLen12; itemIndex12++) {
    var itemData12 = itemList12[itemIndex12];
    output += Confluence.Templates.PageBanner.itemAnchor(soy.$$augmentMap(itemData12, {isSystemContentItem: true}));
  }
  output += '</li>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.renderSystemContentItems.soyTemplateName = 'Confluence.Templates.PageBanner.renderSystemContentItems';
}


Confluence.Templates.PageBanner.renderPageBannerItem = function(opt_data, opt_ignored) {
  return '<li class="page-metadata-item noprint ' + ((opt_data.isAuiButton) ? 'has-button' : '') + '" ' + ((opt_data.linkId) ? ' id="' + soy.$$escapeHtml(opt_data.linkId) + '-wrapper"' : '') + '>' + Confluence.Templates.PageBanner.itemAnchor(soy.$$augmentMap(opt_data, {isSystemContentItem: false})) + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.renderPageBannerItem.soyTemplateName = 'Confluence.Templates.PageBanner.renderPageBannerItem';
}


Confluence.Templates.PageBanner.itemAnchor = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.href) + '" title="' + soy.$$escapeHtml(opt_data.tooltip) + '" ' + ((opt_data.linkId) ? 'id="' + soy.$$escapeHtml(opt_data.linkId) + '"' : '') + ' ' + ((opt_data.styleClasses) ? 'class="' + soy.$$escapeHtml(opt_data.styleClasses) + '"' : '') + '>' + Confluence.Templates.PageBanner.itemIcon(opt_data) + ((! opt_data.isSystemContentItem) ? '<span>' + soy.$$escapeHtml(opt_data.label) + '</span>' : '') + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.itemAnchor.soyTemplateName = 'Confluence.Templates.PageBanner.itemAnchor';
}


Confluence.Templates.PageBanner.itemIcon = function(opt_data, opt_ignored) {
  return '' + ((opt_data.icon) ? '<img class="page-banner-item-icon" src="' + soy.$$escapeHtml(opt_data.icon.url) + '" style="height: ' + soy.$$escapeHtml(opt_data.icon.height) + 'px; width: ' + soy.$$escapeHtml(opt_data.icon.width) + 'px;"/>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.itemIcon.soyTemplateName = 'Confluence.Templates.PageBanner.itemIcon';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:view-comment', location = '/includes/js/comments.js' */
define("confluence/comments",["ajs","jquery","confluence/storage-manager"],function(b,g,h){function f(){return confirm("Are you sure you want to delete the comment?")?(this.href+="&confirm=yes",!0):!1}return{binder:{bindRemoveConfirmation:function(a){g("#comment-"+a+" .comment-action-remove a").click(f)}},initialiser:function(a){var d=h("confluence","comments");if(a("#comments-section").length){a("#comments-section .comment:odd").addClass("odd");a(".comment-action-remove a").click(f);var e=
a("#addcomment.comment-text"),c=a("#comments-text-editor textarea");c.focus(function(){e.addClass("active")}).blur(function(){a.trim(c.val()).length||e.removeClass("active")}).bind("reset.default-text",function(){e.removeClass("active")});a("form[name='textcommentform']").submit(function(){var d=c.val();return!a.trim(d)?(alert("Comment text is empty. Cannot create empty comments."),!1):!0});a("#add-comment-rte").click(function(){c.hasClass("placeholded")||d.setItem("text-comment",a.trim(c.val()))});a("#addcomment #rte").length&&
b.bind("init.rte",function(a,b){var c=d.getItem("text-comment");c&&(b.editor.setContent(c),d.setItem("text-comment",""))})}}}});require("confluence/module-exporter").safeRequire("confluence/comments",function(b){require("confluence/legacy").Comments=b.binder;require("ajs").toInit(b.initialiser)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:confluence-fixed-headers-utils', location = '/includes/js/fh/utils/dom.js' */
define("confluence/fh/utils/dom",["jquery","ajs","exports"],function(c,p,e){function g(a){if(!g.done||a)j=0!==c("#main .aui-page-panel-outer-content").length?c("#main .aui-page-panel-outer-content"):c("#main"),q=c("#header"),h=c("#main-header"),g.done=!0}function l(){g();var a=parseInt(h.css("top"))+h.outerHeight();isNaN(a)||a===l.lastValue||(l.lastValue=a,p.trigger("sticky-table-headers.change.options",{fixedOffset:a,cacheHeaderHeight:!0}))}function i(a,d,b){if(b){i[b]=i[b]||{};if(d===i[b].lastValue)return;
i[b].lastValue=d}a.css({transform:"translateY("+d+"px)","-webkit-transform":"translateY("+d+"px)"})}function m(a,d,b){var c={};b.forEach(function(b){c[b]=a.css(b)});d.css(c)}var f,j,q,h,n,o,k;n=["margin-top","margin-right","margin-left","margin-bottom"];o=["padding-top","padding-right","padding-left","padding-bottom"];k=["font-family","font-size","font-style","font-weight"];e.forceInitialize=function(){g(!0)};e.addClassToPage=function(){var a=require("tinymce"),d=p.Meta.get("content-type");("page"===
d||"blogpost"===d)&&c(a.activeEditor.getWin().document).find("body#tinymce").addClass("page-edit")};e.adjustMainHeaderSize=function(){g();h.css({width:j.outerWidth()-(parseInt(j.css("padding-left"))+parseInt(j.css("padding-right")))})};e.updateTableStickyHeaderOption=l;e.translateVertical=i;e.createMainHeaderPlaceHolder=function(){g();if(f)return f;f=c('<div id="main-header-placeholder"></div>');var a=c("#title-text"),d=a.find("a"),b=a.clone().removeAttr("id"),e=b.find("a");m(h,f,n.concat(o));f.css({height:h.outerHeight()});
m(a,b,k.concat("text-decoration","letter-spacing","text-align","padding-right","padding-bottom","padding-left","margin-right","margin-bottom","margin-left"));b.css({paddingTop:parseInt(a.css("padding-top"))+Math.round(a.offset().top-h.offset().top)});m(d,e,k.concat(n,o,k,"color","text-decoration","letter-spacing","text-align"));f.append(b);return f};e.removeMainHeaderPlaceHolder=function(){f&&f.remove()};e.scrollIfAnchor=function(a){if(a="string"===typeof a?a:c(this).attr("href")){g();var d=q.outerHeight(),
b=c(a.replace(/(!|\"|\$|%|&|'|\(|\)|\*|\+|,|\.|\/|\:|;|<|=|>|\?|@|\[|\\|\]|\^|`|\{|\||\}|~)/g,"\\$1"));if(b.length&&(window.scrollTo(0,Math.round(b.offset().top)-d),history&&"pushState"in history))return history.pushState({},document.title,window.location.pathname+window.location.search+a),!1}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:confluence-fixed-headers-handlers', location = '/includes/js/fh/handlers/page-view-handler.js' */
define("confluence/fh/handlers/page-view-handler",["confluence/fh/utils/dom","jquery","ajs","exports"],function(h,i,y,a){function k(f){if(!k.done||f)l=i("#header"),c=i("#main .aui-page-panel-outer-content"),0===c.length&&(c=i("#main")),b=i("#main-header"),o=i("#action-menu-link"),h.createMainHeaderPlaceHolder(),v=i(".ia-splitter-left .ia-fixed-sidebar"),z=b.prop("style"),A=c.prop("style"),B=Math.round(l.offset().top),d=l.height(),C=Math.round(b.offset().top)-d-(parseInt(c.css("padding-top"))+parseInt(b.css("margin-top"))),
k.done=!0}function D(){j&&0!==e&&(e=0,b.addClass("overlay-header"),b.css({top:d+"px",zIndex:r}),w&&h.translateVertical(o,e,o.attr("id")),h.updateTableStickyHeaderOption())}var l,c,b,o,v,z,A,B,d,C,p=!1,j=!1,s=!1,x=0,e=0,m=0,r=100,t="by-other",w=!1,E=function(){k();var f=i(window).scrollTop(),a=f>B;a&&parseInt(v.css("top"))<d&&v.css({top:d+"px"});!p&&a?(p=!0,l.addClass("fixed-header"),c.css({marginTop:d+"px"})):a||(l.removeClass("fixed-header"),A.removeProperty("margin-top"),p=!1);a=f>C;!j&&a?(j=!0,
b.find("#title-text").hide(),b.css({position:"fixed",width:c.outerWidth()-(parseInt(c.css("padding-left"))+parseInt(c.css("padding-right"))),right:0,top:d+"px",marginTop:0,paddingTop:parseInt(c.css("padding-top"))+parseInt(b.css("margin-top")),paddingBottom:parseInt(c.css("padding-top"))+parseInt(b.css("margin-top")),paddingLeft:c.css("padding-left"),paddingRight:c.css("padding-right"),zIndex:r}),b.before(h.createMainHeaderPlaceHolder())):a||("position width right top margin-top padding-top padding-bottom padding-left padding-right z-index".split(" ").forEach(function(a){z.removeProperty(a)}),
b.removeClass("overlay-header"),b.find("#title-text").show(),s=j=!1,h.removeMainHeaderPlaceHolder());var g,q,a=b.outerHeight(),n=x-f,u=parseInt(b.css("top"))+n;if(0>=f)e=m=0,g=d;else if(j&&0<n){if(u>d)m=d,e=0,g=d,q=r;else if(m+=Math.abs(n),50<=m||f<=a)e-=Math.abs(n),g=u,q=r;f>a+50&&!s&&(b.addClass("overlay-header"),s=!0);t="by-scroll"}else j&&0>n&&(u<d-a?(m=0,e=a,g=d-a,q=0):(e+=Math.abs(n),g=u));void 0!==q&&void 0!==g?b.css({top:g+"px",zIndex:q}):void 0!==g&&b.css({top:g+"px"});w&&h.translateVertical(o,
e,o.attr("id"));h.updateTableStickyHeaderOption();x=f};a.forceInitialize=function(){k(!0)};a.onScrollHandler=E;a.onHoverActionMenuLinkHandler=function(){k();D();t="by-hover"};a.onClickEditPageLinkHandler=function(){k();D();y.bind("quick-edit.viewport.saved",function(){l.removeAttr("style");h.removeMainHeaderPlaceHolder()});i(window).off("scroll",E).off("resize.confluence-fixed-headers-responsive");y.trigger("analyticsEvent",{name:"view.edit.transition.edit.button.clicked",data:{method:t}})};a.isKeepDotDotDotButton=
w;a.__getShowMainHeaderBy=function(){return t};a.__getFixedHeader=function(){return p};a.__getFixedMainHeader=function(){return j};a.__setFixedHeader=function(a){p=a};a.__setFixedMainHeader=function(a){j=a};a.__setMainHeaderOverlay=function(a){s=a};a.__setScrollPosition=function(a){x=a};a.__setMovingDistance=function(a){e=a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:confluence-fixed-headers-view-content-resources', location = '/includes/js/fh/confluence-fixed-headers.js' */
require(["confluence/fh/utils/dom","confluence/fh/handlers/page-view-handler","ajs","jquery"],function(c,d,e,a){e.toInit(function(){if(e.Meta.get("content-type")){var h=a("#main-header"),i={"margin-left":0,"margin-right":0,"margin-top":-10,"padding-left":0,"padding-right":0,"padding-top":0};if(!Object.keys(i).some(function(a){var c=i[a];return parseInt(h.css(a),10)!==c})&&!(0<a("#main-content").find("style").length)){var k=a("#header"),j=a("#main"),f=a("#content"),l=a("#editPageLink"),m=a("#action-menu-link"),
n=["inline-dialog-notifications-miniview","inline-dialog-confluence-watch","inline-dialog-shareContentPopup","inline-dialog-ap-inline-dialog-content-confstats-connect-dev__confstats-live-watcher","inline-dialog-jira-metadata-dialog"];(new MutationObserver(function(){c.adjustMainHeaderSize()})).observe(j[0],{attributes:!0,attributeFilter:["style"]});var g=new MutationObserver(function(){"0px"===f.css("padding-right")&&f.css({paddingRight:"28px"})});g.observe(f[0],{attributes:!0,attributeFilter:["style"]});
a(window).on("resize.confluence-fixed-headers-responsive",e.debounce(c.adjustMainHeaderSize,100)).on("scroll",d.onScrollHandler).scroll(e.debounceImmediate(function(){var b=a('.aui-dropdown2[aria-hidden="false"]');b.length&&a('.aui-dropdown2-trigger[aria-owns="'+b.attr("id")+'"]').trigger("aui-button-invoke");b=a(".aui-inline-dialog:visible");b.length&&(b=b.filter(function(){var b=a(this),c=b.attr("id");return b.hasClass("non-persistence-dialog")||-1!==n.indexOf(c)}),b.css({display:"none"}),k.find(".aui-button.active, .aui-nav-imagelink.active").removeClass("active"),
h.find(".aui-button.active, .aui-nav-imagelink.active").removeClass("active"),document.activeElement.blur())},250));d.isKeepDotDotDotButton&&(j.addClass("floating-action-menu"),m.on("hover",d.onHoverActionMenuLinkHandler));l.click(function(){g&&g.disconnect();d.onClickEditPageLinkHandler()});setTimeout(function(){c.scrollIfAnchor(window.location.hash)});a("body").on("click",'a[href^="#"]',c.scrollIfAnchor)}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag.js' */
define("confluence/flag",["ajs","jquery"],function(f,d){function h(a){var b=d('<span class="aui-icon icon-close" role="button" tabindex="0"></span>');b.click(function(){g(a)});b.keypress(function(b){if(b.which===f.keyCode.ENTER||b.which===f.keyCode.SPACE)g(a),b.preventDefault()});return a.find(".aui-message").append(b)[0]}function g(a){var b=a.get(0);b.setAttribute("aria-hidden","true");a=a.parent();i(a);b.dispatchEvent(new CustomEvent("aui-flag-close",{bubbles:!0}));return b}function i(a){a.hasClass("aui-flag-stack")&&
a.children('.aui-flag:not([aria-hidden="true"])').length&&(a.children(".aui-flag-stack-top-item").removeClass("aui-flag-stack-top-item"),a.children('.aui-flag:not([aria-hidden="true"])').last().addClass("aui-flag-stack-top-item"))}var j={body:"",close:"manual",title:"",type:"info",fifo:!1};return function(a){var a=d.extend({},j,a),b,c=a,c=f.template('<div class="aui-flag {extraClasses}"><div class="aui-message aui-message-{type} {type} {closeable} shadowed"><p class="title"><strong>{title}</strong></p>{body}<\!-- .aui-message --\></div></div>').fill({"body:html":c.body||
"",closeable:"never"===c.close?"":"closeable",title:c.title||"",type:c.type,extraClasses:c.extraClasses||""}).toString();b=d(c);b[0].close=function(){g(b)};"auto"===a.close?(h(b),b.find(".aui-message").addClass("aui-will-close"),setTimeout(function(){b[0].close()},5E3)):"manual"===a.close&&h(b);d("#aui-flag-container").find(".aui-flag").get().forEach(function(a){a.getAttribute("aria-hidden")==="true"&&d(a).remove()});c=d("#aui-flag-container");c.length||(c=d('<div id="aui-flag-container"></div>'),
d("body").prepend(c));if(a.stack){var e=d('[data-aui-flag-stack="'+a.stack+'"]');e.length||(e=d('<div data-aui-flag-stack="'+a.stack+'" class="aui-flag-stack"></div>'),e.appendTo(c));e.find('[aria-hidden="false"]').length||e.detach().appendTo(c);a.fifo?b.appendTo(e):b.prependTo(e);i(e)}else b.appendTo(c);a=b;a=a.length?a[0]:a;window.getComputedStyle(a,null).getPropertyValue("left");a=b.attr("aria-hidden","false")[0];a.dispatchEvent(new CustomEvent("aui-flag-show",{bubbles:!0}));return a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag-scroll.js' */
define("confluence/flag-scroll",["jquery","ajs","confluence/meta","document"],function(c,j,k,l){function f(){var a=c("#"+g);if(a.find('.aui-flag[aria-hidden="false"]').length){var b;b=0;h?b=c("#header").height()+d:(b=e.scrollTop(),b=b<=i-d?i-Math.max(b,0):d);a.css("top",b)}}var d=20,i=71,g="aui-flag-container",h=!1,e;return function(a){e=(h=a("body").hasClass("theme-documentation"))?a("#splitter-content"):a(window);e.on("scroll",f);l.addEventListener("aui-flag-show",f);j.bind("rte-ready",function(){"page"===
k.get("content-type")&&a("#"+g).find('.aui-flag[aria-hidden="false"]').each(function(){this.close()})})}});require("confluence/module-exporter").safeRequire("confluence/flag-scroll",function(c){require("ajs").toInit(c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'soy/comments.soy' */
// This file was automatically generated from comments.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Comments.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Comments == 'undefined') { Confluence.Templates.Comments = {}; }


Confluence.Templates.Comments.displayReplyEditorLoadingContainer = function(opt_data, opt_ignored) {
  return '<ol class="comment-threads"><li class="comment-thread">' + Confluence.Templates.Comments.displayCommentEditorCommon({comment: {ownerId: opt_data.contentId, parentId: opt_data.parentCommentId}, commenter: opt_data.commenter, state: 'loading', mode: 'reply'}) + '</li></ol>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayReplyEditorLoadingContainer.soyTemplateName = 'Confluence.Templates.Comments.displayReplyEditorLoadingContainer';
}


Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Comments.displayCommentEditorCommon({comment: {ownerId: opt_data.contentId}, commenter: opt_data.commenter, state: 'placeholder', mode: 'add'});
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder.soyTemplateName = 'Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder';
}


Confluence.Templates.Comments.displayEditEditorContainer = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Comments.displayCommentEditorCommon({comment: {ownerId: opt_data.contentId, id: opt_data.commentId}, commenter: opt_data.commenter, state: 'placeholder', mode: 'edit'});
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayEditEditorContainer.soyTemplateName = 'Confluence.Templates.Comments.displayEditEditorContainer';
}


Confluence.Templates.Comments.editorLoadErrorMessage = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$escapeHtml(opt_data.message) + '</p><p><a href="' + soy.$$escapeHtml(opt_data.fallbackUrl) + '">' + soy.$$escapeHtml("Try again") + '</a></p>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.editorLoadErrorMessage.soyTemplateName = 'Confluence.Templates.Comments.editorLoadErrorMessage';
}


Confluence.Templates.Comments.displayCommentEditorCommon = function(opt_data, opt_ignored) {
  var output = '<div class="quick-comment-container comment ' + soy.$$escapeHtml(opt_data.mode) + '">' + Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}) + '<div class="quick-comment-body"><div class="quick-comment-loading-container" style="display:' + ((opt_data.state == 'loading') ? 'block' : 'none') + ';"></div><div id="editor-messages"></div><div id="all-messages"></div><form style="display:' + ((opt_data.state == 'loading') ? 'none' : 'block') + ';" class="quick-comment-form aui" method="post" ';
  switch (opt_data.mode) {
    case 'add':
      output += 'name="inlinecommentform" action="' + soy.$$escapeHtml("/wiki") + '/pages/doaddcomment.action?pageId=' + soy.$$escapeHtml(opt_data.comment.ownerId) + '"';
      break;
    case 'edit':
      output += 'name="editcommentform" action="' + soy.$$escapeHtml("/wiki") + '/pages/doeditcomment.action?pageId=' + soy.$$escapeHtml(opt_data.comment.ownerId) + '&commentId=' + soy.$$escapeHtml(opt_data.comment.id) + '"';
      break;
    case 'reply':
      output += 'name="threadedcommentform"  action="' + soy.$$escapeHtml("/wiki") + '/pages/doaddcomment.action?pageId=' + soy.$$escapeHtml(opt_data.comment.ownerId) + '&parentId=' + soy.$$escapeHtml(opt_data.comment.parentId) + '"';
      break;
  }
  output += ' >' + ((opt_data.mode == 'add') ? '<div title="' + soy.$$escapeHtml("Add a Comment") + '" class="quick-comment-prompt"><span>' + soy.$$escapeHtml("Write a comment\u2026") + '</span></div>' : '') + '</form></div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayCommentEditorCommon.soyTemplateName = 'Confluence.Templates.Comments.displayCommentEditorCommon';
}


Confluence.Templates.Comments.userLogo = function(opt_data, opt_ignored) {
  return '<p class="comment-user-logo">' + ((opt_data.userInfo.userName == null) ? '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/wiki/s/-1473185510/6452/ced864aa0a955b6ef92865c7d3ca599c4c790649/_") + '/images/icons/profilepics/anonymous.png" alt="' + soy.$$escapeHtml("User icon") + ': ' + soy.$$escapeHtml("Anonymous") + '" title="' + soy.$$escapeHtml("Anonymous") + '">' : (opt_data.userInfo.profilePicture.isDefault) ? '<a class="userLogoLink" data-username="' + soy.$$escapeHtml(opt_data.userInfo.userName) + '" href="' + soy.$$escapeHtml("/wiki") + '/users/profile/editmyprofilepicture.action" title="' + soy.$$escapeHtml("Add a picture of yourself") + '"><img class="userLogo logo defaultLogo" src="' + soy.$$escapeHtml("/wiki/s/-1473185510/6452/ced864aa0a955b6ef92865c7d3ca599c4c790649/_") + '/images/icons/profilepics/add_profile_pic.png" alt="' + soy.$$escapeHtml("User icon") + ': ' + soy.$$escapeHtml("Add a picture of yourself") + '"></a>' : '<a class="userLogoLink" data-username="' + soy.$$escapeHtml(opt_data.userInfo.userName) + '" href="' + Confluence.Templates.User.userLinkUrl({username: opt_data.userInfo.userName}) + '"><img class="userLogo logo" src="' + soy.$$escapeHtml(opt_data.userInfo.profilePicture.path) + '" alt="' + soy.$$escapeHtml("User icon") + ': ' + soy.$$escapeHtml(opt_data.userInfo.userName) + '" title="' + soy.$$escapeHtml(opt_data.userInfo.userName) + '"></a>') + '</p>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.userLogo.soyTemplateName = 'Confluence.Templates.Comments.userLogo';
}


Confluence.Templates.Comments.displayComment = function(opt_data, opt_ignored) {
  return '' + ((opt_data.comment.parentId == 0 && opt_data.firstReply) ? (opt_data.isReactViewPageComponentEnabled) ? '<div id="react-comments-section"></div>' : '<div id="comments-section" class="pageSection group"><div class="section-header"><h2 id="comments-section-title" class="section-title">' + soy.$$escapeHtml("1 Comment") + '</h2>' + Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: true}) + '</div></div>' : (opt_data.firstReply) ? Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: false}) : Confluence.Templates.Comments.commentThreadItem({comment: opt_data.comment, commenter: opt_data.commenter, highlight: true}));
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayComment.soyTemplateName = 'Confluence.Templates.Comments.displayComment';
}


Confluence.Templates.Comments.commentThread = function(opt_data, opt_ignored) {
  return '<ol class="comment-threads' + ((opt_data.topLevel) ? ' top-level" id="page-comments' : '') + '">' + Confluence.Templates.Comments.commentThreadItem(opt_data) + '</ol>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.commentThread.soyTemplateName = 'Confluence.Templates.Comments.commentThread';
}


Confluence.Templates.Comments.commentThreadItem = function(opt_data, opt_ignored) {
  return '<li id="comment-thread-' + soy.$$escapeHtml(opt_data.comment.id) + '" class="comment-thread">' + Confluence.Templates.Comments.commentView(opt_data) + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.commentThreadItem.soyTemplateName = 'Confluence.Templates.Comments.commentThreadItem';
}


Confluence.Templates.Comments.commentView = function(opt_data, opt_ignored) {
  return '<div class="comment' + ((opt_data.highlight == true) ? ' focused' : '') + '" id="comment-' + soy.$$escapeHtml(opt_data.comment.id) + '">' + Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}) + '<div class="comment-header"><h4 class="author">' + ((opt_data.commenter.userName == null) ? soy.$$escapeHtml("Anonymous") : '<a href="' + soy.$$escapeHtml("/wiki") + '/display/~' + soy.$$escapeUri(opt_data.commenter.userName) + '" class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.commenter.userName) + '">' + soy.$$escapeHtml(opt_data.commenter.displayName) + '</a>') + '</h4></div><div class="comment-body"><div class="comment-content wiki-content">' + soy.$$filterNoAutoescape(opt_data.comment.html) + '</div><div class="comment-actions">' + Confluence.Templates.Comments.displayCommentActions({section: 'secondary', actions: opt_data.comment.secondaryActions, commentId: opt_data.comment.id}) + Confluence.Templates.Comments.displayCommentActions({section: 'primary', actions: opt_data.comment.primaryActions, commentId: opt_data.comment.id}) + '</div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.commentView.soyTemplateName = 'Confluence.Templates.Comments.commentView';
}


Confluence.Templates.Comments.displayCommentActions = function(opt_data, opt_ignored) {
  var output = '<ul class="comment-actions-' + soy.$$escapeHtml(opt_data.section) + '">';
  if (opt_data.actions != null) {
    var itemList215 = opt_data.actions;
    var itemListLen215 = itemList215.length;
    for (var itemIndex215 = 0; itemIndex215 < itemListLen215; itemIndex215++) {
      var itemData215 = itemList215[itemIndex215];
      output += '<li ' + ((itemData215.style != null) ? ' class="' + soy.$$escapeHtml(itemData215.style) + '"' : '') + '><a ' + ((itemData215.tooltip != null) ? ' title="' + soy.$$escapeHtml(itemData215.tooltip) + '"' : '') + ' href="' + soy.$$escapeHtml(itemData215.url) + '" ' + ((itemData215.id) ? ' id="' + soy.$$escapeHtml(itemData215.id) + '-' + soy.$$escapeHtml(opt_data.commentId) + '"' : '') + '><span>' + soy.$$escapeHtml(itemData215.label) + '</span></a></li>\n';
    }
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayCommentActions.soyTemplateName = 'Confluence.Templates.Comments.displayCommentActions';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'jscripts/comment-display-manager.js' */
define("confluence-quick-edit/comment-display-manager",["ajs","confluence/legacy","confluence/templates","jquery"],function(f,j,h,c){var i={_updateCommentSectionTitle:function(){var a=c("#comments-section-title");if(0!==a.length){var b=this.commentCount();1===b?a.text("1 Comment"):a.text(f.format("{0} Comments",b))}},addComment:function(a,b,g,d){a={comment:b,commenter:a,highlight:g,context:{contextPath:f.Meta.get("context-path"),staticResourceUrlPrefix:f.Meta.get("static-resource-url-prefix")}};
a.isReactViewPageComponentEnabled=f.DarkFeatures.isEnabled("page.comments");if(this.hasComments()){if(0==b.parentId)a.firstReply=!1,g=c("#comments-section .comment-threads.top-level");else{var g=c("#comment-thread-"+b.parentId),e=g.children(".commentThreads");e.length?(a.firstReply=!1,g=e):a.firstReply=!0}d||this.clearFocus();d=c(h.Comments.displayComment(a));d.addClass("fadeInComment");g.append(d);this._updateCommentSectionTitle()}else a.firstReply=!0,d=c(h.Comments.displayComment(a)),d.addClass("fadeInComment"),
c("#comments-section").prepend(d);j.Comments.bindRemoveConfirmation(b.id);b=this.getCommentNode(b.id);b.scrollToElement();return b},addOrUpdateComment:function(a,b,c,d){var e=this.getCommentNode(b.id);return e?(e.find(".comment-content").html(b.html),d||this.clearFocus(),c&&e.addClass("focused"),e.addClass("fadeInComment"),e.scrollToElement(),e):this.addComment.apply(this,arguments)},isVisible:function(){return!c("#page-comments").hasClass("hidden")},hasComments:function(){return 0<this.commentCount()},
commentCount:function(){return c("#comments-section .comment").not(".quick-comment-container").length},clearFocus:function(){c(".comment").removeClass("focused")},getCommentNode:function(a){a=c("#comment-"+a);return a.length?a:null},getParentId:function(a){a=i.getCommentNode(a);return null!=a&&(a=a.closest("div.comment"),a.length)?(a=a.attr("id"),a=/\d+/.exec(a),parseInt(a)):0}};return i});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/comment-display-manager","Confluence.CommentDisplayManager");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'jscripts/scroll-util.js' */
define("confluence-quick-edit/scroll-util",["window","document","jquery"],function(a,c,e){return{scrollToElement:function(){this.scrollWindowToElement()||this.scrollOverflowContainerToElement();return this},scrollWindowToElement:function(){function b(){return"pageYOffset"in a?a.pageYOffset:c.documentElement.scrollTop}var f=b(),d;if("number"===typeof a.innerWidth)d=a.innerHeight;else if(c.documentElement&&c.documentElement.clientWidth)d=c.documentElement.clientHeight;else return this[0].scrollIntoView(!1),
!0;var g=this.offset().top,h=this.height();return g+h+40>f+d?(this[0].scrollIntoView(!1),a.scrollBy(0,40),f!=b()):!0},scrollOverflowContainerToElement:function(){var b=null;this.parents().each(function(){var a=e(this).css("overflow");if("auto"==a||"scroll"==a)return b=e(this),!1});if(!b)return!1;var a=b.height(),d=this.offset().top,c=this.height(),a=a-(d+c+40);0>a&&(b[0].scrollTop-=a);return!0}}});require("confluence/module-exporter").safeRequire("confluence-quick-edit/scroll-util",function(a){require("jquery").fn.extend(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'main/quick-reload.soy' */
// This file was automatically generated from quick-reload.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace QuickReload.Templates.
 */

if (typeof QuickReload == 'undefined') { var QuickReload = {}; }
if (typeof QuickReload.Templates == 'undefined') { QuickReload.Templates = {}; }


QuickReload.Templates.pageEdit = function(opt_data, opt_ignored) {
  return '' + QuickReload.Templates.container({content: '<div class="qr-notice-authors">' + QuickReload.Templates.noticeHeader({users: opt_data.pageEditors}) + '</div><div class="qr-notice-summary">' + aui.buttons.button({text: "Reload page", type: 'text', extraClasses: 'qr-notice-show aui-button-text'}) + QuickReload.Templates.summaryText({users: opt_data.pageEditors}) + '</div>'});
};
if (goog.DEBUG) {
  QuickReload.Templates.pageEdit.soyTemplateName = 'QuickReload.Templates.pageEdit';
}


QuickReload.Templates.pageComment = function(opt_data, opt_ignored) {
  return '' + QuickReload.Templates.container({content: '<div class="qr-notice-authors">' + QuickReload.Templates.noticeHeader({users: opt_data.commentUsers}) + ((opt_data.commentUsers.length == 1) ? '<span class="qr-notice-text">"' + soy.$$escapeHtml(opt_data.noticeText) + '"</span>' : '') + '</div><div class="qr-notice-summary">' + aui.buttons.button({text: '' + ((opt_data.commentUsers.length > 1) ? soy.$$escapeHtml("Show all") : soy.$$escapeHtml("Show")), type: 'text', extraClasses: 'qr-notice-show aui-button-text'}) + QuickReload.Templates.summaryText({users: opt_data.commentUsers}) + '</div>'});
};
if (goog.DEBUG) {
  QuickReload.Templates.pageComment.soyTemplateName = 'QuickReload.Templates.pageComment';
}


QuickReload.Templates.inlineComment = function(opt_data, opt_ignored) {
  return '' + QuickReload.Templates.container({content: '<div class="qr-notice-authors">' + QuickReload.Templates.noticeHeader({users: opt_data.user}) + '<span class="qr-notice-text">"' + soy.$$escapeHtml(opt_data.noticeText) + '"</span></div><div class="qr-notice-summary">' + aui.buttons.button({text: '' + ((opt_data.reloadRequired) ? soy.$$escapeHtml("Reload page") : soy.$$escapeHtml("Show")), type: 'text', extraClasses: 'qr-notice-show aui-button-text', extraAttributes: ['data-reload-required', opt_data.reloadRequired]}) + QuickReload.Templates.summaryText({users: opt_data.user}) + '</div>'});
};
if (goog.DEBUG) {
  QuickReload.Templates.inlineComment.soyTemplateName = 'QuickReload.Templates.inlineComment';
}


QuickReload.Templates.container = function(opt_data, opt_ignored) {
  return '<div class="qr-container">' + soy.$$filterNoAutoescape(opt_data.content) + '</div>';
};
if (goog.DEBUG) {
  QuickReload.Templates.container.soyTemplateName = 'QuickReload.Templates.container';
}


QuickReload.Templates.noticeHeader = function(opt_data, opt_ignored) {
  var output = '';
  var userList68 = opt_data.users;
  var userListLen68 = userList68.length;
  for (var userIndex68 = 0; userIndex68 < userListLen68; userIndex68++) {
    var userData68 = userList68[userIndex68];
    output += (userIndex68 < 8) ? aui.avatar.avatar({size: 'small', avatarImageUrl: userData68.profilePicture.path, title: userData68.displayName != '' ? userData68.displayName : "Anonymous", extraClasses: 'qr-author-avatar'}) : '';
  }
  return output;
};
if (goog.DEBUG) {
  QuickReload.Templates.noticeHeader.soyTemplateName = 'QuickReload.Templates.noticeHeader';
}


QuickReload.Templates.summaryText = function(opt_data, opt_ignored) {
  var output = '';
  var lastModifier__soy78 = opt_data.users[0];
  var others__soy79 = opt_data.users.length - 1;
  output += '<span class="qr-notice-summary-text">' + soy.$$escapeHtml("by") + ' ' + Confluence.Templates.User.usernameLink({canView: false, username: lastModifier__soy78.userName, fullName: lastModifier__soy78.displayName != '' ? lastModifier__soy78.displayName : "Anonymous"}) + ((others__soy79 == 1) ? ' ' + soy.$$escapeHtml("and 1 other") : '') + ((others__soy79 > 1) ? ' ' + soy.$$escapeHtml(AJS.format("and {0} others",others__soy79)) : '') + '</span>';
  return output;
};
if (goog.DEBUG) {
  QuickReload.Templates.summaryText.soyTemplateName = 'QuickReload.Templates.summaryText';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'utils/quick-reload-timer.js' */
define("confluence-quick-reload/utils/quick-reload-timer",["jquery","underscore"],function(c,d){function a(b,a){this.options=c.extend({min:3E4,max:36E5,inactivity:12E4},a);d.bindAll(this,"start","stop","_now","_timeSinceLastSeen","_setActive","_setActivityTrigger","_clamp","_intervalMultiplier");this.callback=b;this._timer=null;this._setActivityTrigger(this._setActive)}a.prototype.start=function(b){this.lastSeenTimestamp=this._now();this.stop();b&&this.callback();var a=function(){this.callback();
c.call(this)},c=function(){this.stop();this._timer=setTimeout(d.bind(a,this),this.options.min*this._intervalMultiplier())};c.call(this)};a.prototype.stop=function(){null!==this._timer&&(clearTimeout(this._timer),this._timer=null)};a.prototype._setActive=function(){if(null!==this._timer){var b=this._timeSinceLastSeen()>this.options.inactivity;this.lastSeenTimestamp=this._now();b&&this.start(!0)}};a.prototype._setActivityTrigger=function(b){document.addEventListener("visibilitychange",function(){document.hidden||
b()},!1);c(window).focus(b);c("body").click(b);c(window).scroll(b)};a.prototype._now=function(){return(new Date).getTime()};a.prototype._timeSinceLastSeen=function(){return this._now()+1-this.lastSeenTimestamp};a.prototype._clamp=function(b,a,c){a=Math.max(Math.min(a,c),b);return isNaN(a)?b:a};a.prototype._intervalMultiplier=function(){var a=(document.hidden?3:1)*Math.ceil(this._timeSinceLastSeen()/this.options.inactivity);return this._clamp(1,this.options.max/this.options.min,a)};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'utils/quick-reload-count.js' */
define("confluence-quick-reload/utils/quick-reload-count",function(){function a(){this.count=0}var b=document.title;a.prototype.getCount=function(){return this.count};a.prototype.setCount=function(a){this.count=a;this._displayCount()};a.prototype._displayCount=function(){document.title=(0<this.count?"("+this.count+") ":"")+b};return new a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'handlers/quick-reload-comments.js' */
define("confluence-quick-reload/handlers/quick-reload-comments","ajs underscore jquery confluence/flag confluence-quick-reload/utils/quick-reload-count confluence/legacy".split(" "),function(i,c,e,k,g,d){function h(c){return c.comment.id}var a,f=[];return{results:[],property:"comments",ignoreOnce:function(c){f.push(c)},filterNewResults:function(d,a){if(a.length===0)return a;var b=c.map(d,h);return c.filter(a,function(a){if(a.comment.isInlineComment)return false;a=h(a);if(c.contains(b,a))return false;
a=e.inArray(a,f);if(a>=0){f.splice(a,1);return false}return true})},render:function(f){g.setCount(g.getCount()+f.length);var f={close:"manual",type:"info",extraClasses:"qr-flag",fifo:true,stack:"quickreload"},j=this.results.length>1?i.format("{0} New comments",this.results.length):"New comment",b;b=c.clone(this.results);b.reverse();b=c.uniq(b,function(a){return a.commenter.userName});b=c.map(b,function(a){return a.commenter});var l=e("<div>").html(this.results[this.results.length-
1].comment.html).text();b=QuickReload.Templates.pageComment({commentUsers:b,noticeText:l});if(a===void 0||a.getAttribute("aria-hidden")==="true"){a=new k(e.extend({},{body:b,title:j},f));e(a).on("click",".qr-notice-show",c.bind(function(){var b=this.results;if(d&&d.CommentDisplayManager){d.CommentDisplayManager.clearFocus();c.map(b,function(a){var b=d.CommentDisplayManager.getCommentNode(h(a))!==null,a=d.CommentDisplayManager.addOrUpdateComment(a.commenter,a.comment,true,true);if(d.Likes&&!b){d.Likes.appendAction(e(a));
d.Likes.updateComment(e(a),{})}});d.CommentDisplayManager._updateCommentSectionTitle()}a.close()},this));e(a).on("aui-flag-close",c.bind(function(){g.setCount(g.getCount()-this.results.length);this.results=[]},this))}else{e(a).find(".qr-container").replaceWith(b);e(a).find(".title").text(j)}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'handlers/quick-reload-inline-comments.js' */
define("confluence-quick-reload/handlers/quick-reload-inline-comments",["underscore","jquery","ajs","confluence/flag","confluence-quick-reload/utils/quick-reload-count"],function(b,f,h,q,l){function o(a,d,b,e,c){a=QuickReload.Templates.inlineComment({user:[a.commenter],noticeText:a&&a.comment&&f("<div>").text(a.comment.html).text(),reloadRequired:d});c=1<c?"New inline comments":"New inline comment";c=new q(f.extend({},{title:c,body:a},{close:"manual",
type:"info",extraClasses:"qr-flag",fifo:!0,stack:"quickreload"}));f(c).find(".qr-notice-show").click(b);d||f(c).find(".qr-notice-show").click(c.close);f(c).on("aui-flag-close",e)}function n(a){return 0===a.comment.parentId}function i(a){return n(a)?a.comment.id:a.comment.parentId}return{results:[],property:"comments",filterNewResults:function(a,d){d=b.clone(d);d=b.filter(d,function(a){return a.comment.isInlineComment&&a.commenter.userName!==h.Meta.get("remote-user")});if(0<d.length)var f=b.map(a,
i),e=b.filter(d,n),c=b.filter(d,function(a){return!n(a)}),g=b.map(e,i),j=b.map(c,i),k=b.difference(j,g),p=[],c=b.filter(c,function(a){return-1!==k.indexOf(a.comment.parentId)&&-1===p.indexOf(a.comment.parentId)?(p.push(a.comment.parentId),!0):!1}),e=e.concat(c),d=b.filter(e,function(a){return-1===f.indexOf(i(a))});return d},render:function(a){l.setCount(l.getCount()+a.length);b.each(a,function(a){var m=i(a),e=function(){h.trigger("qr:show-new-thread",m)},c=function(){var a=h.Meta.Links.canonical(),
b=-1===a.indexOf("?")?"?":"&";window.location=a+b+"focusedCommentId="+m+"#comment-"+m},g=function(){this.results=b.filter(this.results,function(a){return i(a)!==m});l.setCount(l.getCount()-1)},g=b.bind(g,this),j=this.results.length;if(n(a)){var k=new f.Deferred;k.fail(function(a){o(a,!0,c,g,j)});k.done(function(a){o(a,!1,e,g,j)});h.trigger("qr:add-new-highlight",[a,k])}else o(a,!1,e,g,j)},this)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'handlers/quick-reload-page.js' */
define("confluence-quick-reload/handlers/quick-reload-page",["underscore","jquery","ajs","confluence/flag","confluence-quick-reload/utils/quick-reload-count"],function(d,a,g,i,e){var c;return{results:[],property:"page",filterNewResults:function(c,a){return 0<a.length&&"string"!==typeof a[0]?a:[]},render:function(f){e.setCount(e.getCount()+f.length);var f={close:"manual",type:"info",extraClasses:"qr-flag",fifo:!0,stack:"quickreload"},h=1<this.results.length?g.format("{0} new edits",this.results.length):
"New page edits",b;b=d.clone(this.results);b.reverse();b=d.uniq(b,function(a){return a.editor.userName});b=d.map(b,function(a){return a.editor});b=QuickReload.Templates.pageEdit({pageEditors:b});void 0===c||"true"===c.getAttribute("aria-hidden")?(c=new i(a.extend({},{body:b,title:h},f)),a(c).on("click",".qr-notice-show",function(){a(this).prop("disabled",!0).prepend('<span class="aui-icon aui-icon-wait"></span>&nbsp;');window.location.reload()}),a(c).on("aui-flag-close",d.bind(function(){e.setCount(e.getCount()-
this.results.length);this.results=[]},this))):(a(c).find(".qr-container").replaceWith(b),a(c).find(".title").text(h))}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'main/quick-reload-manager.js' */
define("confluence-quick-reload/main/quick-reload-manager",["underscore","jquery","ajs","confluence-quick-reload/utils/quick-reload-timer"],function(h,f,g,i){function a(){this._isEnabled=!1;this.handlers=[];this.lastFetchTime=f('meta[name="confluence-request-time"]').attr("content")||(new Date).getTime();this._timer=null;h.bindAll(this,"addHandler","removeHandler","update","enable","disable","_onUpdateSuccess","_onUpdateError")}a.prototype.addHandler=function(d){for(var a=!1,e=0;e<this.handlers.length;e++)this.handlers[e]===
d&&(a=!0);!0!==a&&this.handlers.push(d)};a.prototype.removeHandler=function(d){if(d)for(var a=0;a<this.handlers.length;a++)if(this.handlers[a]===d){this.handlers.splice(a,1);break}};a.prototype.update=function(){f("body").hasClass("contenteditor")?this.disable():f.ajax({type:"GET",url:g.contextPath()+"/rest/quickreload/latest/"+g.Meta.get("page-id")+"?since="+encodeURIComponent(this.lastFetchTime),dataType:"json"}).done(this._onUpdateSuccess).fail(this._onUpdateError)};a.prototype.enable=function(){null===
this._timer&&(this._timer=new i(this.update));this._timer.start();this._isEnabled=!0};a.prototype.disable=function(){null!==this._timer&&this._timer.stop();this._isEnabled=!1};a.prototype.isEnabled=function(){return this._isEnabled};a.prototype._onUpdateSuccess=function(a,f,e){204!==e.status&&(this.lastFetchTime=a.time,h.map(this.handlers,function(c){var b=a[c.property];Array.isArray(b)||(b=[b]);b=c.filterNewResults(c.results,b);0<b.length&&(c.results=c.results.concat(b),c.render(b))},this))};a.prototype._onUpdateError=
function(a){a=a||{};if(a={404:"not found - the plugin has been probably been removed or disabled from Confluence",500:"generic server error",503:"service unavailable",504:"gateway timeout"}[a.status])this.disable(),g.log('Quick comment reload plugin has been disabled in this page due to a server error: "'+a+'". Please refresh the page to get it back.')};return new a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-bootstrap', location = 'main/quick-reload-main.js' */
require("ajs confluence-quick-reload/main/quick-reload-manager confluence-quick-reload/handlers/quick-reload-comments confluence-quick-reload/handlers/quick-reload-inline-comments confluence-quick-reload/handlers/quick-reload-page confluence/legacy".split(" "),function(b,a,c,d,e,f){b.toInit(function(){if(!(b.DarkFeatures.isEnabled("quickreload.disabled")||!f.CommentDisplayManager||b.Meta.get("page-id")===void 0)){a.addHandler(c);a.addHandler(d);a.addHandler(e);a.enable();b.bind("page.commentAddedOrUpdated",
function(b,a){c.ignoreOnce(a.commentId)})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/tablesorter-date-parser.js' */
(function(A){A(function(){A.tablesorter.addParser({id:"dateAttributeParser",is:function(B,D,C){return A(C).is(".content-report-table-macro .modified")
},format:function(B,D,C,E){return A(C).attr("data-sortable-date")
},type:"numeric"})
})
})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/soy/content-report-table.soy' */
// This file was automatically generated from content-report-table.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Plugins.ContentReport.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Plugins == 'undefined') { Confluence.Templates.Plugins = {}; }
if (typeof Confluence.Templates.Plugins.ContentReport == 'undefined') { Confluence.Templates.Plugins.ContentReport = {}; }


Confluence.Templates.Plugins.ContentReport.contentReportTable = function(opt_data, opt_ignored) {
  var output = '';
  var hasSocialColumn__soy3 = opt_data.showCommentsCount || opt_data.showLikesCount;
  if (opt_data.results.length == 0 && opt_data.blueprintKey) {
    output += '<div class="blueprint-blank-experience ' + soy.$$escapeHtml(opt_data.blueprintKey) + '"><div class="content"><h2>' + soy.$$escapeHtml(opt_data.blankTitle) + '</h2><p>' + soy.$$escapeHtml(opt_data.blankDescription) + '</p></div>' + ((opt_data.createButtonLabel) ? '<p><button class="create-from-template-button aui-button aui-button-primary" data-space-key="' + soy.$$escapeHtml(opt_data.dataSpaceKey) + '" data-content-blueprint-id="' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '" href="' + soy.$$escapeHtml(opt_data.createContentUrl) + '" >' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</button></p>' : '') + '</div>';
  } else {
    output += '<table class="aui content-report-table-macro' + ((hasSocialColumn__soy3) ? ' with-extra-columns' : '') + '"' + ((opt_data.analyticsKey) ? ' data-analytics-key="' + soy.$$escapeHtml(opt_data.analyticsKey) + '"' : '') + '><thead><tr><th>' + soy.$$escapeHtml("Title") + '</th><th>' + soy.$$escapeHtml("Creator") + '</th><th>' + soy.$$escapeHtml("Modified") + '</th></tr></thead><tbody>';
    var resultList43 = opt_data.results;
    var resultListLen43 = resultList43.length;
    if (resultListLen43 > 0) {
      for (var resultIndex43 = 0; resultIndex43 < resultListLen43; resultIndex43++) {
        var resultData43 = resultList43[resultIndex43];
        output += '<tr><td class="title"><a href="' + soy.$$escapeHtml(resultData43.urlPath) + '">' + soy.$$escapeHtml(resultData43.title) + '</a></td><td class="creator">' + Confluence.Templates.User.usernameLink({canView: opt_data.canViewProfiles, username: resultData43.creatorName, fullName: resultData43.creatorFullName, contextPath: opt_data.contextPath}) + '</td><td class="modified" data-sortable-date="' + soy.$$escapeHtml(resultData43.sortableDate) + '">' + soy.$$escapeHtml(resultData43.friendlyModificationDate) + '</td>' + ((hasSocialColumn__soy3) ? '<td class="social">' + ((opt_data.showCommentsCount && resultData43.commentCount != 0) ? '<span class="icon icon-comment"></span> <span class="count">' + soy.$$escapeHtml(resultData43.commentCount) + '</span>' : '') + ((opt_data.showLikesCount && resultData43.likeCount != 0) ? '<span class="icon icon-like"></span> <span class="count">' + soy.$$escapeHtml(resultData43.likeCount) + '</span>' : '') + '</td>' : '') + '</tr>';
      }
    } else {
      output += '<tr><td colspan="3">' + soy.$$escapeHtml("No content found.") + '</td></tr>';
    }
    output += '</tbody></table>' + ((opt_data.searchMoreResultsLinkUrl) ? '<div class="more-results"><a href="' + soy.$$escapeHtml("/wiki") + soy.$$escapeHtml(opt_data.searchMoreResultsLinkUrl) + '">' + soy.$$escapeHtml("Find more results") + '</a></div>' : '');
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Plugins.ContentReport.contentReportTable.soyTemplateName = 'Confluence.Templates.Plugins.ContentReport.contentReportTable';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/content-report-analytics.js' */
AJS.$(function(A){A(".content-report-table-macro").on("click",".title a",function(D){var B=A(D.delegateTarget).data("analytics-key");
if(B){var C="content-report-table-macro.content-click."+B;
AJS.trigger("analytics",{name:C})
}})
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-jquery-jquery-tablesorter', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery.tablesorter.js' */
("undefined"===typeof window?global:window).__c9edf5d8d2fcc7f0411bc8f50451f94a=function(){var h=jQuery;h.extend({tablesorter:new function(){function e(){var a=arguments[0],b=1<arguments.length?Array.prototype.slice.call(arguments):a;if("undefined"!==typeof console&&"undefined"!==typeof console.log)console[/error/i.test(a)?"error":/warn/i.test(a)?"warn":"log"](b);else alert(b)}function o(a,b){e(a+" ("+((new Date).getTime()-b.getTime())+"ms)")}function p(a){for(var b in a)return!1;return!0}function m(a,
b,c){if(!b)return"";var g,d=a.config,j=d.textExtraction||"",e="",e="basic"===j?h(b).attr(d.textAttribute)||b.textContent||b.innerText||h(b).text()||"":"function"===typeof j?j(b,a,c):"function"===typeof(g=f.getColumnData(a,j,c))?g(b,a,c):b.textContent||b.innerText||h(b).text()||"";return h.trim(e)}function t(a){var b,c,g=a.config,d=g.$tbodies=g.$table.children("tbody:not(."+g.cssInfoBlock+")"),j,u,i,l,k,h,r,n,q,p=0,B="",t=d.length;if(0===t)return g.debug?e("Warning: *Empty table!* Not building a parser cache"):
"";g.debug&&(q=new Date,e("Detecting parsers for each column"));b=[];for(c=[];p<t;){j=d[p].rows;if(j[p]){u=g.columns;for(i=0;i<u;i++){l=g.$headers.filter('[data-column="'+i+'"]:last');k=f.getColumnData(a,g.headers,i);n=f.getParserById(f.getData(l,k,"extractor"));r=f.getParserById(f.getData(l,k,"sorter"));h="false"===f.getData(l,k,"parser");g.empties[i]=f.getData(l,k,"empty")||g.emptyTo||(g.emptyToBottom?"bottom":"top");g.strings[i]=f.getData(l,k,"string")||g.stringTo||"max";h&&(r=f.getParserById("no-parser"));
n||(n=!1);if(!r)a:{l=a;k=j;h=-1;r=i;for(var s=void 0,F=f.parsers.length,C=!1,w="",s=!0;""===w&&s;)h++,k[h]?(C=k[h].cells[r],w=m(l,C,r),l.config.debug&&e("Checking if value was empty on row "+h+", column: "+r+': "'+w+'"')):s=!1;for(;0<=--F;)if((s=f.parsers[F])&&"text"!==s.id&&s.is&&s.is(w,l,C)){r=s;break a}r=f.getParserById("text")}g.debug&&(B+="column:"+i+"; extractor:"+n.id+"; parser:"+r.id+"; string:"+g.strings[i]+"; empty: "+g.empties[i]+"\n");c[i]=r;b[i]=n}}p+=c.length?t:1}g.debug&&(e(B?B:"No parsers detected"),
o("Completed detecting parsers",q));g.parsers=c;g.extractors=b}function s(a){var b,c,g,d,j,u,i,l,k,p,r,n=a.config,q=n.$table.children("tbody"),t=n.extractors,s=n.parsers;n.cache={};n.totalRows=0;if(!s)return n.debug?e("Warning: *Empty table!* Not building a cache"):"";n.debug&&(l=new Date);n.showProcessing&&f.isProcessing(a,!0);for(j=0;j<q.length;j++)if(r=[],b=n.cache[j]={normalized:[]},!q.eq(j).hasClass(n.cssInfoBlock)){k=q[j]&&q[j].rows.length||0;for(g=0;g<k;++g)if(p={child:[]},u=h(q[j].rows[g]),
i=[],u.hasClass(n.cssChildRow)&&0!==g)c=b.normalized.length-1,b.normalized[c][n.columns].$row=b.normalized[c][n.columns].$row.add(u),u.prev().hasClass(n.cssChildRow)||u.prev().addClass(f.css.cssHasChild),p.child[c]=h.trim(u[0].textContent||u[0].innerText||u.text()||"");else{p.$row=u;p.order=g;for(d=0;d<n.columns;++d)if("undefined"===typeof s[d])n.debug&&e("No parser found for cell:",u[0].cells[d],"does it have a header?");else if(c=m(a,u[0].cells[d],d),c="undefined"===typeof t[d].id?c:t[d].format(c,
a,u[0].cells[d],d),c="no-parser"===s[d].id?"":s[d].format(c,a,u[0].cells[d],d),i.push(n.ignoreCase&&"string"===typeof c?c.toLowerCase():c),"numeric"===(s[d].type||"").toLowerCase())r[d]=Math.max(Math.abs(c)||0,r[d]||0);i[n.columns]=p;b.normalized.push(i)}b.colMax=r;n.totalRows+=b.normalized.length}n.showProcessing&&f.isProcessing(a);n.debug&&o("Building cache for "+k+" rows",l)}function w(a,b){var c=a.config,g=c.widgetOptions,d=a.tBodies,j=[],e=c.cache,i,l,k,m,r,n;if(p(e))return c.appender?c.appender(a,
j):a.isUpdating?c.$table.trigger("updateComplete",a):"";c.debug&&(n=new Date);for(r=0;r<d.length;r++)if(i=h(d[r]),i.length&&!i.hasClass(c.cssInfoBlock)){k=f.processTbody(a,i,!0);i=e[r].normalized;l=i.length;for(m=0;m<l;m++)j.push(i[m][c.columns].$row),(!c.appender||c.pager&&(!c.pager.removeRows||!g.pager_removeRows)&&!c.pager.ajax)&&k.append(i[m][c.columns].$row);f.processTbody(a,k,!1)}c.appender&&c.appender(a,j);c.debug&&o("Rebuilt table",n);!b&&!c.appender&&f.applyWidget(a);a.isUpdating&&c.$table.trigger("updateComplete",
a)}function z(a){var b,c,g,d,j,u,i,l=a.config;l.headerList=[];l.headerContent=[];l.debug&&(i=new Date);l.columns=f.computeColumnIndex(l.$table.children("thead, tfoot").children("tr"));d=l.cssIcon?'<i class="'+(l.cssIcon===f.css.icon?f.css.icon:l.cssIcon+" "+f.css.icon)+'"></i>':"";l.$headers=h(a).find(l.selectorHeaders).each(function(i){c=h(this);b=f.getColumnData(a,l.headers,i,!0);l.headerContent[i]=h(this).html();j=l.headerTemplate.replace(/\{content\}/g,h(this).html()).replace(/\{icon\}/g,d);l.onRenderTemplate&&
(g=l.onRenderTemplate.apply(c,[i,j]))&&"string"===typeof g&&(j=g);h(this).html('<div class="'+f.css.headerIn+'">'+j+"</div>");l.onRenderHeader&&l.onRenderHeader.apply(c,[i]);this.column=parseInt(h(this).attr("data-column"),10);var e=f.getData(c,b,"sortInitialOrder")||l.sortInitialOrder;this.order=/^d/i.test(e)||1===e?[1,0,2]:[0,1,2];this.count=-1;this.lockedOrder=!1;u=f.getData(c,b,"lockedOrder")||!1;"undefined"!==typeof u&&!1!==u&&(this.order=this.lockedOrder=/^d/i.test(u)||1===u?[1,1,1]:[0,0,0]);
c.addClass(f.css.header+" "+l.cssHeader);l.headerList[i]=this;c.parent().addClass(f.css.headerRow+" "+l.cssHeaderRow).attr("role","row");l.tabIndex&&c.attr("tabindex",0)}).attr({scope:"col",role:"columnheader"});A(a);l.debug&&(o("Built headers:",i),e(l.$headers))}function y(a,b,c){var g=a.config;g.$table.find(g.selectorRemove).remove();t(a);s(a);D(g.$table,b,c)}function A(a){var b,c,g,d=a.config;d.$headers.each(function(j,e){c=h(e);g=f.getColumnData(a,d.headers,j,!0);b="false"===f.getData(e,g,"sorter")||
"false"===f.getData(e,g,"parser");e.sortDisabled=b;c[b?"addClass":"removeClass"]("sorter-false").attr("aria-disabled",""+b);a.id&&(b?c.removeAttr("aria-controls"):c.attr("aria-controls",a.id))})}function x(a){var b,c,g=a.config,d=g.sortList,j=d.length,e=f.css.sortNone+" "+g.cssNone,i=[f.css.sortAsc+" "+g.cssAsc,f.css.sortDesc+" "+g.cssDesc],l=["ascending","descending"],k=h(a).find("tfoot tr").children().add(g.$extraHeaders).removeClass(i.join(" "));g.$headers.removeClass(i.join(" ")).addClass(e).attr("aria-sort",
"none");for(b=0;b<j;b++)if(2!==d[b][1]&&(a=g.$headers.not(".sorter-false").filter('[data-column="'+d[b][0]+'"]'+(1===j?":last":"")),a.length)){for(c=0;c<a.length;c++)a[c].sortDisabled||a.eq(c).removeClass(e).addClass(i[d[b][1]]).attr("aria-sort",l[d[b][1]]);k.length&&k.filter('[data-column="'+d[b][0]+'"]').removeClass(e).addClass(i[d[b][1]])}g.$headers.not(".sorter-false").each(function(){var a=h(this),b=this.order[(this.count+1)%(g.sortReset?3:2)],b=a.text()+": "+f.language[a.hasClass(f.css.sortAsc)?
"sortAsc":a.hasClass(f.css.sortDesc)?"sortDesc":"sortNone"]+f.language[0===b?"nextAsc":1===b?"nextDesc":"nextNone"];a.attr("aria-label",b)})}function G(a,b,c){if(a.isUpdating)return setTimeout(function(){G(a,b,c)},50);var g,d,j,e,i=a.config,l=!c[i.sortMultiSortKey],k=i.$table;k.trigger("sortStart",a);b.count=c[i.sortResetKey]?2:(b.count+1)%(i.sortReset?3:2);i.sortRestart&&(d=b,i.$headers.each(function(){if(this!==d&&(l||!h(this).is("."+f.css.sortDesc+",."+f.css.sortAsc)))this.count=-1}));d=b.column;
if(l){i.sortList=[];if(null!==i.sortForce){g=i.sortForce;for(j=0;j<g.length;j++)g[j][0]!==d&&i.sortList.push(g[j])}g=b.order[b.count];if(2>g&&(i.sortList.push([d,g]),1<b.colSpan))for(j=1;j<b.colSpan;j++)i.sortList.push([d+j,g])}else{if(i.sortAppend&&1<i.sortList.length)for(j=0;j<i.sortAppend.length;j++)e=f.isValueInArray(i.sortAppend[j][0],i.sortList),0<=e&&i.sortList.splice(e,1);if(0<=f.isValueInArray(d,i.sortList))for(j=0;j<i.sortList.length;j++)e=i.sortList[j],g=i.$headers.filter('[data-column="'+
e[0]+'"]:last')[0],e[0]===d&&(e[1]=g.order[b.count],2===e[1]&&(i.sortList.splice(j,1),g.count=-1));else if(g=b.order[b.count],2>g&&(i.sortList.push([d,g]),1<b.colSpan))for(j=1;j<b.colSpan;j++)i.sortList.push([d+j,g])}if(null!==i.sortAppend){g=i.sortAppend;for(j=0;j<g.length;j++)g[j][0]!==d&&i.sortList.push(g[j])}k.trigger("sortBegin",a);setTimeout(function(){x(a);E(a);w(a);k.trigger("sortEnd",a)},1)}function E(a){var b,c,g,d,j,e,i,h,k,m,r,n=0,q=a.config,s=q.textSorter||"",t=q.sortList,v=t.length,
w=a.tBodies.length;if(!q.serverSideSorting&&!p(q.cache)){q.debug&&(j=new Date);for(c=0;c<w;c++)e=q.cache[c].colMax,i=q.cache[c].normalized,i.sort(function(c,j){for(b=0;b<v;b++){d=t[b][0];h=t[b][1];n=0===h;if(q.sortStable&&c[d]===j[d]&&1===v)break;(g=/n/i.test(q.parsers&&q.parsers[d]?q.parsers[d].type||"":""))&&q.strings[d]?(g="boolean"===typeof q.string[q.strings[d]]?(n?1:-1)*(q.string[q.strings[d]]?-1:1):q.strings[d]?q.string[q.strings[d]]||0:0,k=q.numberSorter?q.numberSorter(c[d],j[d],n,e[d],a):
f["sortNumeric"+(n?"Asc":"Desc")](c[d],j[d],g,e[d],d,a)):(m=n?c:j,r=n?j:c,k="function"===typeof s?s(m[d],r[d],n,d,a):"object"===typeof s&&s.hasOwnProperty(d)?s[d](m[d],r[d],n,d,a):f["sortNatural"+(n?"Asc":"Desc")](c[d],j[d],d,a,q));if(k)return k}return c[q.columns].order-j[q.columns].order});q.debug&&o("Sorting on "+t.toString()+" and dir "+h+" time",j)}}function H(a,b){a[0].isUpdating&&a.trigger("updateComplete");h.isFunction(b)&&b(a[0])}function D(a,b,c){var g=a[0].config.sortList;!1!==b&&!a[0].isProcessing&&
g.length?a.trigger("sorton",[g,function(){H(a,c)},!0]):(H(a,c),f.applyWidget(a[0],!1))}function I(a){var b=a.config,c=b.$table;c.unbind("sortReset update updateRows updateCell updateAll addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave".split(" ").join(b.namespace+" ")).bind("sortReset"+b.namespace,function(g,d){g.stopPropagation();b.sortList=[];x(a);E(a);w(a);h.isFunction(d)&&d(a)}).bind("updateAll"+b.namespace,function(g,d,
c){g.stopPropagation();a.isUpdating=!0;f.refreshWidgets(a,!0,!0);f.restoreHeaders(a);z(a);f.bindEvents(a,b.$headers,!0);I(a);y(a,d,c)}).bind("update"+b.namespace+" updateRows"+b.namespace,function(b,d,c){b.stopPropagation();a.isUpdating=!0;A(a);y(a,d,c)}).bind("updateCell"+b.namespace,function(g,d,j,f){g.stopPropagation();a.isUpdating=!0;c.find(b.selectorRemove).remove();var e,l,k;l=c.find("tbody");k=h(d);g=l.index(h.fn.closest?k.closest("tbody"):k.parents("tbody").filter(":first"));e=h.fn.closest?
k.closest("tr"):k.parents("tr").filter(":first");d=k[0];if(l.length&&0<=g){l=l.eq(g).find("tr").index(e);k=k.index();b.cache[g].normalized[l][b.columns].$row=e;e="undefined"===typeof b.extractors[k].id?m(a,d,k):b.extractors[k].format(m(a,d,k),a,d,k);d="no-parser"===b.parsers[k].id?"":b.parsers[k].format(e,a,d,k);b.cache[g].normalized[l][k]=b.ignoreCase&&"string"===typeof d?d.toLowerCase():d;if("numeric"===(b.parsers[k].type||"").toLowerCase())b.cache[g].colMax[k]=Math.max(Math.abs(d)||0,b.cache[g].colMax[k]||
0);D(c,j,f)}}).bind("addRows"+b.namespace,function(g,d,j,e){g.stopPropagation();a.isUpdating=!0;if(p(b.cache))A(a),y(a,j,e);else{var d=h(d).attr("role","row"),f,l,k,o,r,n=d.filter("tr").length,q=c.find("tbody").index(d.parents("tbody").filter(":first"));(!b.parsers||!b.parsers.length)&&t(a);for(g=0;g<n;g++){l=d[g].cells.length;r=[];o={child:[],$row:d.eq(g),order:b.cache[q].normalized.length};for(f=0;f<l;f++)if(k="undefined"===typeof b.extractors[f].id?m(a,d[g].cells[f],f):b.extractors[f].format(m(a,
d[g].cells[f],f),a,d[g].cells[f],f),k="no-parser"===b.parsers[f].id?"":b.parsers[f].format(k,a,d[g].cells[f],f),r[f]=b.ignoreCase&&"string"===typeof k?k.toLowerCase():k,"numeric"===(b.parsers[f].type||"").toLowerCase())b.cache[q].colMax[f]=Math.max(Math.abs(r[f])||0,b.cache[q].colMax[f]||0);r.push(o);b.cache[q].normalized.push(r)}D(c,j,e)}}).bind("updateComplete"+b.namespace,function(){a.isUpdating=!1}).bind("sorton"+b.namespace,function(b,d,j,e){var i=a.config;b.stopPropagation();c.trigger("sortStart",
this);var l,k,o,m,n,q=a.config,b=d||q.sortList;q.sortList=[];h.each(b,function(a,b){m=parseInt(b[0],10);if(o=q.$headers.filter('[data-column="'+m+'"]:last')[0]){k=(k=(""+b[1]).match(/^(1|d|s|o|n)/))?k[0]:"";switch(k){case "1":case "d":k=1;break;case "s":k=n||0;break;case "o":l=o.order[(n||0)%(q.sortReset?3:2)];k=0===l?1:1===l?0:2;break;case "n":o.count+=1;k=o.order[o.count%(q.sortReset?3:2)];break;default:k=0}n=0===a?k:n;l=[m,parseInt(k,10)||0];q.sortList.push(l);k=h.inArray(l[1],o.order);o.count=
0<=k?k:l[1]%(q.sortReset?3:2)}});x(a);i.delayInit&&p(i.cache)&&s(a);c.trigger("sortBegin",this);E(a);w(a,e);c.trigger("sortEnd",this);f.applyWidget(a);h.isFunction(j)&&j(a)}).bind("appendCache"+b.namespace,function(b,d,c){b.stopPropagation();w(a,c);h.isFunction(d)&&d(a)}).bind("updateCache"+b.namespace,function(c,d){(!b.parsers||!b.parsers.length)&&t(a);s(a);h.isFunction(d)&&d(a)}).bind("applyWidgetId"+b.namespace,function(c,d){c.stopPropagation();f.getWidgetById(d).format(a,b,b.widgetOptions)}).bind("applyWidgets"+
b.namespace,function(b,d){b.stopPropagation();f.applyWidget(a,d)}).bind("refreshWidgets"+b.namespace,function(b,d,c){b.stopPropagation();f.refreshWidgets(a,d,c)}).bind("destroy"+b.namespace,function(b,d,c){b.stopPropagation();f.destroy(a,d,c)}).bind("resetToLoadState"+b.namespace,function(){f.refreshWidgets(a,!0,!0);b=h.extend(!0,f.defaults,b.originalSettings);a.hasInitialized=!1;f.setup(a,b)})}var f=this;f.version="2.17.7";f.parsers=[];f.widgets=[];f.defaults={theme:"default",widthFixed:!1,showProcessing:!1,
headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:!0,tabIndex:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0,delayInit:!1,serverSideSorting:!1,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortStable:!1,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",textExtraction:"basic",textAttribute:"data-text",textSorter:null,numberSorter:null,widgets:[],
widgetOptions:{zebra:["even","odd"]},initWidgets:!0,initialized:null,tableClass:"",cssAsc:"",cssDesc:"",cssNone:"",cssHeader:"",cssHeaderRow:"",cssProcessing:"",cssChildRow:"tablesorter-childRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]};f.css={table:"tablesorter",cssHasChild:"tablesorter-hasChildRow",childRow:"tablesorter-childRow",
header:"tablesorter-header",headerRow:"tablesorter-headerRow",headerIn:"tablesorter-header-inner",icon:"tablesorter-icon",info:"tablesorter-infoOnly",processing:"tablesorter-processing",sortAsc:"tablesorter-headerAsc",sortDesc:"tablesorter-headerDesc",sortNone:"tablesorter-headerUnSorted"};f.language={sortAsc:"Ascending sort applied, ",sortDesc:"Descending sort applied, ",sortNone:"No sort applied, ",nextAsc:"activate to apply an ascending sort",nextDesc:"activate to apply a descending sort",nextNone:"activate to remove the sort"};
f.log=e;f.benchmark=o;f.construct=function(a){return this.each(function(){var b=h.extend(!0,{},f.defaults,a);b.originalSettings=a;!this.hasInitialized&&f.buildTable&&"TABLE"!==this.tagName?f.buildTable(this,b):f.setup(this,b)})};f.setup=function(a,b){if(!a||!a.tHead||0===a.tBodies.length||!0===a.hasInitialized)return b.debug?e("ERROR: stopping initialization! No table, thead, tbody or tablesorter has already been initialized"):"";var c="",g=h(a),d=h.metadata;a.hasInitialized=!1;a.isProcessing=!0;
a.config=b;h.data(a,"tablesorter",b);b.debug&&h.data(a,"startoveralltimer",new Date);var j;j=h.fn.jquery.split(".");j[0]=parseInt(j[0],10);j=1<j[0]||1===j[0]&&4<=parseInt(j[1],10);b.supportsDataObject=j;b.string={max:1,min:-1,emptyMin:1,emptyMax:-1,zero:0,none:0,"null":0,top:!0,bottom:!1};/tablesorter\-/.test(g.attr("class"))||(c=""!==b.theme?" tablesorter-"+b.theme:"");b.table=a;b.$table=g.addClass(f.css.table+" "+b.tableClass+c).attr("role","grid");b.$headers=g.find(b.selectorHeaders);b.namespace=
b.namespace?"."+b.namespace.replace(/\W/g,""):".tablesorter"+Math.random().toString(16).slice(2);b.$table.children().children("tr").attr("role","row");b.$tbodies=g.children("tbody:not(."+b.cssInfoBlock+")").attr({"aria-live":"polite","aria-relevant":"all"});b.$table.find("caption").length&&b.$table.attr("aria-labelledby","theCaption");b.widgetInit={};b.textExtraction=b.$table.attr("data-text-extraction")||b.textExtraction||"basic";z(a);if(a.config.widthFixed&&0===h(a).find("colgroup").length){var u=
h("<colgroup>"),i=h(a).width();h(a.tBodies[0]).find("tr:first").children(":visible").each(function(){u.append(h("<col>").css("width",parseInt(1E3*(h(this).width()/i),10)/10+"%"))});h(a).prepend(u)}t(a);b.totalRows=0;b.delayInit||s(a);f.bindEvents(a,b.$headers,!0);I(a);b.supportsDataObject&&"undefined"!==typeof g.data().sortlist?b.sortList=g.data().sortlist:d&&(g.metadata()&&g.metadata().sortlist)&&(b.sortList=g.metadata().sortlist);f.applyWidget(a,!0);0<b.sortList.length?g.trigger("sorton",[b.sortList,
{},!b.initWidgets,!0]):(x(a),b.initWidgets&&f.applyWidget(a,!1));b.showProcessing&&g.unbind("sortBegin"+b.namespace+" sortEnd"+b.namespace).bind("sortBegin"+b.namespace+" sortEnd"+b.namespace,function(d){clearTimeout(b.processTimer);f.isProcessing(a);if(d.type==="sortBegin")b.processTimer=setTimeout(function(){f.isProcessing(a,true)},500)});a.hasInitialized=!0;a.isProcessing=!1;b.debug&&f.benchmark("Overall initialization time",h.data(a,"startoveralltimer"));g.trigger("tablesorter-initialized",a);
"function"===typeof b.initialized&&b.initialized(a)};f.getColumnData=function(a,b,c,g){if(!("undefined"===typeof b||null===b)){var a=h(a)[0],d,f=a.config;if(b[c])return g?b[c]:b[f.$headers.index(f.$headers.filter('[data-column="'+c+'"]:last'))];for(d in b)if("string"===typeof d&&(a=g?f.$headers.eq(c).filter(d):f.$headers.filter('[data-column="'+c+'"]:last').filter(d),a.length))return b[d]}};f.computeColumnIndex=function(a){var b=[],c=0,g,d,f,e,i,l,k,o,m,n;for(g=0;g<a.length;g++){i=a[g].cells;for(d=
0;d<i.length;d++){f=i[d];e=h(f);l=f.parentNode.rowIndex;e.index();k=f.rowSpan||1;o=f.colSpan||1;"undefined"===typeof b[l]&&(b[l]=[]);for(f=0;f<b[l].length+1;f++)if("undefined"===typeof b[l][f]){m=f;break}c=Math.max(m,c);e.attr({"data-column":m});for(f=l;f<l+k;f++){"undefined"===typeof b[f]&&(b[f]=[]);n=b[f];for(e=m;e<m+o;e++)n[e]="x"}}}return c+1};f.isProcessing=function(a,b,c){var a=h(a),g=a[0].config,d=c||a.find("."+f.css.header);b?("undefined"!==typeof c&&0<g.sortList.length&&(d=d.filter(function(){return this.sortDisabled?
!1:0<=f.isValueInArray(parseFloat(h(this).attr("data-column")),g.sortList)})),a.add(d).addClass(f.css.processing+" "+g.cssProcessing)):a.add(d).removeClass(f.css.processing+" "+g.cssProcessing)};f.processTbody=function(a,b,c){a=h(a)[0];if(c)return a.isProcessing=!0,b.before('<span class="tablesorter-savemyplace"/>'),c=h.fn.detach?b.detach():b.remove();c=h(a).find("span.tablesorter-savemyplace");b.insertAfter(c);c.remove();a.isProcessing=!1};f.clearTableBody=function(a){h(a)[0].config.$tbodies.children().detach()};
f.bindEvents=function(a,b,c){var a=h(a)[0],g,d=a.config;!0!==c&&(d.$extraHeaders=d.$extraHeaders?d.$extraHeaders.add(b):b);b.find(d.selectorSort).add(b.filter(d.selectorSort)).unbind(["mousedown","mouseup","sort","keyup"].join(d.namespace+" ")).bind(["mousedown","mouseup","sort","keyup"].join(d.namespace+" "),function(c,f){var e;e=c.type;if(!((c.which||c.button)!==1&&!/sort|keyup/.test(e)||e==="keyup"&&c.which!==13)&&!(e==="mouseup"&&f!==true&&(new Date).getTime()-g>250)){if(e==="mousedown"){g=(new Date).getTime();
return/(input|select|button|textarea)/i.test(c.target.tagName)?"":!d.cancelSelection}d.delayInit&&p(d.cache)&&s(a);e=h.fn.closest?h(this).closest("th, td")[0]:/TH|TD/.test(this.tagName)?this:h(this).parents("th, td")[0];e=d.$headers[b.index(e)];e.sortDisabled||G(a,e,c)}});d.cancelSelection&&b.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none",MozUserSelect:"none"})};f.restoreHeaders=function(a){var b=h(a)[0].config;b.$table.find(b.selectorHeaders).each(function(a){h(this).find("."+
f.css.headerIn).length&&h(this).html(b.headerContent[a])})};f.destroy=function(a,b,c){a=h(a)[0];if(a.hasInitialized){f.refreshWidgets(a,!0,!0);var g=h(a),d=a.config,e=g.find("thead:first"),o=e.find("tr."+f.css.headerRow).removeClass(f.css.headerRow+" "+d.cssHeaderRow),i=g.find("tfoot:first > tr").children("th, td");!1===b&&0<=h.inArray("uitheme",d.widgets)&&(g.trigger("applyWidgetId",["uitheme"]),g.trigger("applyWidgetId",["zebra"]));e.find("tr").not(o).remove();g.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd resetToLoadState".split(" ").join(d.namespace+
" "));d.$headers.add(i).removeClass([f.css.header,d.cssHeader,d.cssAsc,d.cssDesc,f.css.sortAsc,f.css.sortDesc,f.css.sortNone].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled","true");o.find(d.selectorSort).unbind(["mousedown","mouseup","keypress"].join(d.namespace+" "));f.restoreHeaders(a);g.toggleClass(f.css.table+" "+d.tableClass+" tablesorter-"+d.theme,!1===b);a.hasInitialized=!1;delete a.config.cache;"function"===typeof c&&c(a)}};f.regex={chunk:/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
chunks:/(^\\0|\\0$)/,hex:/^0x[0-9a-f]+$/i};f.sortNatural=function(a,b){if(a===b)return 0;var c,g,d,e,h,i;g=f.regex;if(g.hex.test(b)){c=parseInt(a.match(g.hex),16);d=parseInt(b.match(g.hex),16);if(c<d)return-1;if(c>d)return 1}c=a.replace(g.chunk,"\\0$1\\0").replace(g.chunks,"").split("\\0");g=b.replace(g.chunk,"\\0$1\\0").replace(g.chunks,"").split("\\0");i=Math.max(c.length,g.length);for(h=0;h<i;h++){d=isNaN(c[h])?c[h]||0:parseFloat(c[h])||0;e=isNaN(g[h])?g[h]||0:parseFloat(g[h])||0;if(isNaN(d)!==
isNaN(e))return isNaN(d)?1:-1;typeof d!==typeof e&&(d+="",e+="");if(d<e)return-1;if(d>e)return 1}return 0};f.sortNaturalAsc=function(a,b,c,g,d){if(a===b)return 0;c=d.string[d.empties[c]||d.emptyTo];return""===a&&0!==c?"boolean"===typeof c?c?-1:1:-c||-1:""===b&&0!==c?"boolean"===typeof c?c?1:-1:c||1:f.sortNatural(a,b)};f.sortNaturalDesc=function(a,b,c,g,d){if(a===b)return 0;c=d.string[d.empties[c]||d.emptyTo];return""===a&&0!==c?"boolean"===typeof c?c?-1:1:c||1:""===b&&0!==c?"boolean"===typeof c?c?
1:-1:-c||-1:f.sortNatural(b,a)};f.sortText=function(a,b){return a>b?1:a<b?-1:0};f.getTextValue=function(a,b,c){if(c){for(var g=a?a.length:0,d=c+b,c=0;c<g;c++)d+=a.charCodeAt(c);return b*d}return 0};f.sortNumericAsc=function(a,b,c,g,d,e){if(a===b)return 0;e=e.config;d=e.string[e.empties[d]||e.emptyTo];if(""===a&&0!==d)return"boolean"===typeof d?d?-1:1:-d||-1;if(""===b&&0!==d)return"boolean"===typeof d?d?1:-1:d||1;isNaN(a)&&(a=f.getTextValue(a,c,g));isNaN(b)&&(b=f.getTextValue(b,c,g));return a-b};f.sortNumericDesc=
function(a,b,c,g,d,e){if(a===b)return 0;e=e.config;d=e.string[e.empties[d]||e.emptyTo];if(""===a&&0!==d)return"boolean"===typeof d?d?-1:1:d||1;if(""===b&&0!==d)return"boolean"===typeof d?d?1:-1:-d||-1;isNaN(a)&&(a=f.getTextValue(a,c,g));isNaN(b)&&(b=f.getTextValue(b,c,g));return b-a};f.sortNumeric=function(a,b){return a-b};f.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",A:"\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",c:"\u00e7\u0107\u010d",C:"\u00c7\u0106\u010c",e:"\u00e9\u00e8\u00ea\u00eb\u011b\u0119",
E:"\u00c9\u00c8\u00ca\u00cb\u011a\u0118",i:"\u00ed\u00ec\u0130\u00ee\u00ef\u0131",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6",O:"\u00d3\u00d2\u00d4\u00d5\u00d6",ss:"\u00df",SS:"\u1e9e",u:"\u00fa\u00f9\u00fb\u00fc\u016f",U:"\u00da\u00d9\u00db\u00dc\u016e"};f.replaceAccents=function(a){var b,c="[",g=f.characterEquivalents;if(!f.characterRegex){f.characterRegexArray={};for(b in g)"string"===typeof b&&(c+=g[b],f.characterRegexArray[b]=RegExp("["+g[b]+"]","g"));f.characterRegex=
RegExp(c+"]")}if(f.characterRegex.test(a))for(b in g)"string"===typeof b&&(a=a.replace(f.characterRegexArray[b],b));return a};f.isValueInArray=function(a,b){var c,g=b.length;for(c=0;c<g;c++)if(b[c][0]===a)return c;return-1};f.addParser=function(a){var b,c=f.parsers.length,g=!0;for(b=0;b<c;b++)f.parsers[b].id.toLowerCase()===a.id.toLowerCase()&&(g=!1);g&&f.parsers.push(a)};f.getParserById=function(a){if("false"==a)return!1;var b,c=f.parsers.length;for(b=0;b<c;b++)if(f.parsers[b].id.toLowerCase()===
a.toString().toLowerCase())return f.parsers[b];return!1};f.addWidget=function(a){f.widgets.push(a)};f.hasWidget=function(a,b){a=h(a);return a.length&&a[0].config&&a[0].config.widgetInit[b]||!1};f.getWidgetById=function(a){var b,c,g=f.widgets.length;for(b=0;b<g;b++)if((c=f.widgets[b])&&c.hasOwnProperty("id")&&c.id.toLowerCase()===a.toLowerCase())return c};f.applyWidget=function(a,b){var a=h(a)[0],c=a.config,g=c.widgetOptions,d=[],e,m,i;if(!(!1!==b&&a.hasInitialized&&(a.isApplyingWidgets||a.isUpdating)))if(c.debug&&
(e=new Date),c.widgets.length&&(a.isApplyingWidgets=!0,c.widgets=h.grep(c.widgets,function(a,b){return h.inArray(a,c.widgets)===b}),h.each(c.widgets||[],function(a,b){if((i=f.getWidgetById(b))&&i.id)i.priority||(i.priority=10),d[a]=i}),d.sort(function(a,b){return a.priority<b.priority?-1:a.priority===b.priority?0:1}),h.each(d,function(d,e){if(e){if(b||!c.widgetInit[e.id])c.widgetInit[e.id]=!0,e.hasOwnProperty("options")&&(g=a.config.widgetOptions=h.extend(!0,{},e.options,g)),e.hasOwnProperty("init")&&
e.init(a,e,c,g);!b&&e.hasOwnProperty("format")&&e.format(a,c,g,!1)}})),setTimeout(function(){a.isApplyingWidgets=false},0),c.debug)m=c.widgets.length,o("Completed "+(!0===b?"initializing ":"applying ")+m+" widget"+(1!==m?"s":""),e)};f.refreshWidgets=function(a,b,c){var a=h(a)[0],g,d=a.config,j=d.widgets,o=f.widgets,i=o.length;for(g=0;g<i;g++)if(o[g]&&o[g].id&&(b||0>h.inArray(o[g].id,j)))d.debug&&e('Refeshing widgets: Removing "'+o[g].id+'"'),o[g].hasOwnProperty("remove")&&d.widgetInit[o[g].id]&&(o[g].remove(a,
d,d.widgetOptions),d.widgetInit[o[g].id]=!1);!0!==c&&f.applyWidget(a,b)};f.getData=function(a,b,c){var e="",a=h(a),d,f;if(!a.length)return"";d=h.metadata?a.metadata():!1;f=" "+(a.attr("class")||"");"undefined"!==typeof a.data(c)||"undefined"!==typeof a.data(c.toLowerCase())?e+=a.data(c)||a.data(c.toLowerCase()):d&&"undefined"!==typeof d[c]?e+=d[c]:b&&"undefined"!==typeof b[c]?e+=b[c]:" "!==f&&f.match(" "+c+"-")&&(e=f.match(RegExp("\\s"+c+"-([\\w-]+)"))[1]||"");return h.trim(e)};f.formatFloat=function(a,
b){if("string"!==typeof a||""===a)return a;var c,a=(b&&b.config?!1!==b.config.usNumberFormat:"undefined"!==typeof b?b:1)?a.replace(/,/g,""):a.replace(/[\s|\.]/g,"").replace(/,/g,".");/^\s*\([.\d]+\)/.test(a)&&(a=a.replace(/^\s*\(([.\d]+)\)/,"-$1"));c=parseFloat(a);return isNaN(c)?h.trim(a):c};f.isDigit=function(a){return isNaN(a)?/^[\-+(]?\d+[)]?$/.test(a.toString().replace(/[,.'"\s]/g,"")):!0}}});var m=h.tablesorter;h.fn.extend({tablesorter:m.construct});m.addParser({id:"no-parser",is:function(){return!1},
format:function(){return""},type:"text"});m.addParser({id:"text",is:function(){return!0},format:function(e,o){var p=o.config;e&&(e=h.trim(p.ignoreCase?e.toLocaleLowerCase():e),e=p.sortLocaleCompare?m.replaceAccents(e):e);return e},type:"text"});m.addParser({id:"digit",is:function(e){return m.isDigit(e)},format:function(e,o){var p=m.formatFloat((e||"").replace(/[^\w,. \-()]/g,""),o);return e&&"number"===typeof p?p:e?h.trim(e&&o.config.ignoreCase?e.toLocaleLowerCase():e):e},type:"numeric"});m.addParser({id:"currency",
is:function(e){return/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((e||"").replace(/[+\-,. ]/g,""))},format:function(e,o){var p=m.formatFloat((e||"").replace(/[^\w,. \-()]/g,""),o);return e&&"number"===typeof p?p:e?h.trim(e&&o.config.ignoreCase?e.toLocaleLowerCase():e):e},type:"numeric"});m.addParser({id:"ipAddress",is:function(e){return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(e)},format:function(e,h){var p,v=e?e.split("."):"",t="",s=v.length;
for(p=0;p<s;p++)t+=("00"+v[p]).slice(-3);return e?m.formatFloat(t,h):e},type:"numeric"});m.addParser({id:"url",is:function(e){return/^(https?|ftp|file):\/\//.test(e)},format:function(e){return e?h.trim(e.replace(/(https?|ftp|file):\/\//,"")):e},type:"text"});m.addParser({id:"isoDate",is:function(e){return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(e)},format:function(e,h){return e?m.formatFloat(""!==e?(new Date(e.replace(/-/g,"/"))).getTime()||e:"",h):e},type:"numeric"});m.addParser({id:"percent",is:function(e){return/(\d\s*?%|%\s*?\d)/.test(e)&&
15>e.length},format:function(e,h){return e?m.formatFloat(e.replace(/%/g,""),h):e},type:"numeric"});m.addParser({id:"usLongDate",is:function(e){return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(e)||/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(e)},format:function(e,h){return e?m.formatFloat((new Date(e.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||e,h):e},type:"numeric"});m.addParser({id:"shortDate",is:function(e){return/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((e||
"").replace(/\s+/g," ").replace(/[\-.,]/g,"/"))},format:function(e,h,p,v){if(e){var p=h.config,t=p.$headers.filter("[data-column="+v+"]:last"),v=t.length&&t[0].dateFormat||m.getData(t,m.getColumnData(h,p.headers,v),"dateFormat")||p.dateFormat,e=e.replace(/\s+/g," ").replace(/[\-.,]/g,"/");"mmddyyyy"===v?e=e.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2"):"ddmmyyyy"===v?e=e.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1"):"yyyymmdd"===v&&(e=e.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,
"$1/$2/$3"))}return e?m.formatFloat((new Date(e)).getTime()||e,h):e},type:"numeric"});m.addParser({id:"time",is:function(e){return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(e)},format:function(e,h){return e?m.formatFloat((new Date("2000/01/01 "+e.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||e,h):e},type:"numeric"});m.addParser({id:"metadata",is:function(){return!1},format:function(e,m,p){e=m.config;e=!e.parserMetadataName?"sortValue":e.parserMetadataName;return h(p).metadata()[e]},
type:"numeric"});m.addWidget({id:"zebra",priority:90,format:function(e,o,p){var v,t,s,w,z,y,A=RegExp(o.cssChildRow,"i"),x=o.$tbodies;o.debug&&(z=new Date);for(e=0;e<x.length;e++)v=x.eq(e),y=v.children("tr").length,1<y&&(s=0,v=v.children("tr:visible").not(o.selectorRemove),v.each(function(){t=h(this);A.test(this.className)||s++;w=0===s%2;t.removeClass(p.zebra[w?1:0]).addClass(p.zebra[w?0:1])}));o.debug&&m.benchmark("Applying Zebra widget",z)},remove:function(e,m,p){for(var v,m=m.$tbodies,t=(p.zebra||
["even","odd"]).join(" "),p=0;p<m.length;p++)v=h.tablesorter.processTbody(e,m.eq(p),!0),v.children().removeClass(t),h.tablesorter.processTbody(e,v,!1)}});!0;return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-tables-sortable', location = 'node_modules/@atlassian/aui/src/js/aui/tables-sortable.js' */
("undefined"===typeof window?global:window).__e447bd0d7692d52f66ca23f80e610893=function(){function h(e){var b=i;e.find("th").each(function(c,e){var a=(0,d.default)(e);b.headers[c]={};a.hasClass("aui-table-column-unsortable")?b.headers[c].sorter=!1:(a.attr("tabindex","0"),a.wrapInner("<span class='aui-table-header-content'/>"),a.hasClass("aui-table-column-issue-key")&&(b.headers[c].sorter="issue-key"))});e.tablesorter(b)}var f={};"use strict";Object.defineProperty(f,"__esModule",{value:!0});var a=
__307d3e18fd611f85395c67cddeb1fe24,d=a&&a.__esModule?a:{"default":a};__c9edf5d8d2fcc7f0411bc8f50451f94a;var a=(a=__4d02fe17b8e885a34493e34af3d145dd)&&a.__esModule?a:{"default":a},i={sortMultiSortKey:"",headers:{},debug:!1,tabIndex:!1},g={setup:function(){d.default.tablesorter.addParser({id:"issue-key",is:function(){return!1},format:function(a){var b=a.split("-"),a=b[1],b=(b[0]+"..........").slice(0,10);return b+=("000000"+a).slice(-6)},type:"text"});d.default.tablesorter.addParser({id:"textSortAttributeParser",
is:function(a,b,c){return c.hasAttribute("data-sort-value")&&(!c.hasAttribute("data-sort-type")||"text"===c.getAttribute("data-sort-type"))},format:function(a,b,c){return c.getAttribute("data-sort-value")},type:"text"});d.default.tablesorter.addParser({id:"numericSortAttributeParser",is:function(a,b,c){return"numeric"===c.getAttribute("data-sort-type")&&c.hasAttribute("data-sort-value")},format:function(a,b,c){return c.getAttribute("data-sort-value")},type:"numeric"});(0,d.default)(".aui-table-sortable").each(function(){h((0,
d.default)(this))})},setTableSortable:function(a){h(a)}};(0,d.default)(g.setup);(0,a.default)("tablessortable",g);f.default=g;return f=f["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-sortable-tables:sortable-table-resources', location = 'js/SortableTables.js' */
define("confluence-sortable-tables/sortable-tables",["jquery","ajs","document","skate"],function(e,h,i,j){function k(){var a=h.Meta.get("date.format"),b;a&&0!==a.length&&(a=a.toLowerCase()[0],"m"===a?b="mmddyyyy":"d"===a?b="ddmmyyyy":"y"===a&&(b="yyyymmdd"));return b}var f={init:function(a){f.enable(a)},destroy:function(){},shouldSort:function(a){var b=e(a),g=b.find("td, th"),d=a.rows.length&&e(a.rows[0].cells),c;if("false"===b.attr("data-sortable")||-1<a.className.indexOf("tablesorter")||-1<a.className.indexOf("tablesorter")||
e(a).find("> thead:first").is(":visible"))return!1;c=e.Event("makeSortable.SortableTables");b.trigger(c);if(c.isDefaultPrevented()||!d||0===d.length)return!1;c=0;for(var f=g.length;c<f;c++)if(b=g[c],1!=b.rowSpan||1!=b.colSpan)return!1;return e(a.rows[0]).find("table").length||d.filter("th").length!==d.length||d.hasClass("nohighlight")?!1:a.rows[1]},enable:function(a){if(f.shouldSort(a)){var b=a.removeChild(a.tBodies[0]),g=e(b.children),g=Array.prototype.shift.call(g),d=i.createDocumentFragment(),
c=i.createElement("thead");d.appendChild(c);c.appendChild(g);d.appendChild(b);a.appendChild(d);e(a).tablesorter({cssHeader:"sortableHeader",delayInit:!0,textExtraction:function(a){return h.trim(e(a).text())},dateFormat:k()})}}};h.toInit(function(){setTimeout(function(){j("table",{type:j.types.TAG,created:function(a){f.init(a)}})},100)});return f});require("confluence/module-exporter").safeRequire("confluence-sortable-tables/sortable-tables");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.expand-macro:expand-macro-core', location = 'com/atlassian/confluence/plugins/expand/js/expand-macro-core.js' */
(function(){var a=function(b){this.$=b;this.createToggleFunction=function(e){var d=this.$;return function c(i){if(typeof e!="undefined"&&!e(i)){return}var f=d(this),g=d(".expand-control-icon",f),h=d(".expand-content",f.closest(".expand-container")).first();var j;if(h.hasClass("expand-hidden")){h.css("display","block");h.animate({opacity:1});j="expand"}else{h.animate({opacity:0},{complete:function(){h.hide()}});j="collapse"}h.toggleClass("expand-hidden");g.toggleClass("expanded");AJS.trigger("analyticsEvent",{name:"confluence.expand-macro.expand-click",data:{userAction:j}})}};this.getExpandElements=function(c){return this.$(".expand-control",c)}};if(typeof Confluence==="undefined"){Confluence={}}if(typeof Confluence.Plugins==="undefined"){Confluence.Plugins={}}Confluence.Plugins.ExpandMacro={bind:function(b,c,g,f){var e=new a(b);var d=e.getExpandElements(c);d.length&&d.bind(g,e.createToggleFunction(f))}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.expand-macro:expand-macro-desktop-resources', location = 'com/atlassian/confluence/plugins/expand/js/expand-macro.js' */
AJS.toInit(function(a){Confluence.Plugins.ExpandMacro.bind(a,a("body"),"click keyup",function(b){return !(b.type=="keyup"&&b.keyCode!=13)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/soy/sharelinks-urlmacro-templates.soy' */
// This file was automatically generated from sharelinks-urlmacro-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.SharelinksUrlMacro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.SharelinksUrlMacro == 'undefined') { Confluence.Blueprints.SharelinksUrlMacro = {}; }


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink = function(opt_data, opt_ignored) {
  return '<a class="aui-button sharelinks-urlmacro-button" href="' + Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript(opt_data) + '"><span>' + soy.$$escapeHtml("Share on Confluence") + '</span></a>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink.soyTemplateName = 'Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink';
}


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript = function(opt_data, opt_ignored) {
  return 'javascript:(function(){var screenWidth=screen.width,screenHeight=screen.height,popupWidth=640,popupHeight=580,popupLeft=0,popupTop=0; if(screenWidth>popupWidth){popupLeft=Math.round((screenWidth/2)-(popupWidth/2));}if(screenHeight>popupHeight){popupTop=Math.round((screenHeight/2)-(popupHeight/2));}window.open(\'' + soy.$$filterNoAutoescape(opt_data.bookmarkletActionURL) + '?bookmarkedURL=\'+encodeURIComponent(window.location.href), \'\',\'left=\'+popupLeft+\',top=\'+popupTop+\',width=\'+popupWidth+\',height=\'+popupHeight+\',personalbar=0,toolbar=0,scrollbars=1,resizable=1\');}());';
};
if (goog.DEBUG) {
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript.soyTemplateName = 'Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/js/sharelinks-urlmacro.js' */
define("confluence-plugins/business-blueprints/sharelinksurlmacro/sharelinks-urlmacro",["ajs","skate"],function(b,a){a("sharelinks-urlmacro-button",{type:a.types.CLASS,events:{click:function(){alert("Drag this link to your toolbar");return false}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jsUri', location = '/includes/js/third-party/jsUri.js' */
(function(){function g(a){a=decodeURIComponent(a);return a=a.replace("+"," ")}function h(a){var c,b,f,e,d=[];if("undefined"===typeof a||null===a||""===a)return d;0===a.indexOf("?")&&(a=a.substring(1));c=a.toString().split(/[&;]/);for(a=0;a<c.length;a++)b=c[a],f=b.split("="),e=f[0],b=-1===b.indexOf("=")?null:null===f[1]?"":f[1],d.push([e,b]);return d}function d(a){var c=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@\/]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a||
""),b={};"source protocol authority userInfo user password host port relative path directory file query anchor".split(" ").forEach(function(a,e){b[a]=c[e]||""});this.uriParts=b;this.queryPairs=h(this.uriParts.query);this.hasAuthorityPrefixUserPref=null}Array.prototype.forEach||(Array.prototype.forEach=function(a,c){for(var b=0,f=this.length;b<f;++b)a.call(c||this,this[b],b,this)});"protocol userInfo host port path anchor".split(" ").forEach(function(a){d.prototype[a]=function(c){typeof c!=="undefined"&&
(this.uriParts[a]=c);return this.uriParts[a]}});d.prototype.hasAuthorityPrefix=function(a){if(typeof a!=="undefined")this.hasAuthorityPrefixUserPref=a;return this.hasAuthorityPrefixUserPref===null?this.uriParts.source.indexOf("//")!==-1:this.hasAuthorityPrefixUserPref};d.prototype.query=function(a){var c="",b;if(typeof a!=="undefined")this.queryPairs=h(a);for(a=0;a<this.queryPairs.length;a++){b=this.queryPairs[a];c.length>0&&(c=c+"&");c=b[1]===null?c+b[0]:c+b.join("=")}return c.length>0?"?"+c:c};
d.prototype.getQueryParamValue=function(a){var c,b;for(b=0;b<this.queryPairs.length;b++){c=this.queryPairs[b];if(g(a)===g(c[0]))return c[1]}};d.prototype.getQueryParamValues=function(a){var c=[],b,f;for(b=0;b<this.queryPairs.length;b++){f=this.queryPairs[b];g(a)===g(f[0])&&c.push(f[1])}return c};d.prototype.deleteQueryParam=function(a,c){var b=[],f,e,d,h;for(f=0;f<this.queryPairs.length;f++){e=this.queryPairs[f];d=g(e[0])===g(a);h=g(e[1])===g(c);(arguments.length===1&&!d||arguments.length===2&&!d&&
!h)&&b.push(e)}this.queryPairs=b;return this};d.prototype.addQueryParam=function(a,c,b){if(arguments.length===3&&b!==-1){b=Math.min(b,this.queryPairs.length);this.queryPairs.splice(b,0,[a,c])}else arguments.length>0&&this.queryPairs.push([a,c]);return this};d.prototype.replaceQueryParam=function(a,c,b){var d=-1,e,h;if(arguments.length===3){for(e=0;e<this.queryPairs.length;e++){h=this.queryPairs[e];if(g(h[0])===g(a)&&decodeURIComponent(h[1])===g(b)){d=e;break}}this.deleteQueryParam(a,b).addQueryParam(a,
c,d)}else{for(e=0;e<this.queryPairs.length;e++){h=this.queryPairs[e];if(g(h[0])===g(a)){d=e;break}}this.deleteQueryParam(a);this.addQueryParam(a,c,d)}return this};"protocol hasAuthorityPrefix userInfo host port path query anchor".split(" ").forEach(function(a){var c="set"+a.charAt(0).toUpperCase()+a.slice(1);d.prototype[c]=function(b){this[a](b);return this}});d.prototype.scheme=function(){var a="";if(this.protocol()){a=a+this.protocol();this.protocol().indexOf(":")!==this.protocol().length-1&&(a=
a+":");a=a+"//"}else this.hasAuthorityPrefix()&&this.host()&&(a=a+"//");return a};d.prototype.origin=function(){var a=this.scheme();if(this.userInfo()&&this.host()){a=a+this.userInfo();this.userInfo().indexOf("@")!==this.userInfo().length-1&&(a=a+"@")}if(this.host()){a=a+this.host();this.port()&&(a=a+(":"+this.port()))}return a};d.prototype.toString=function(){var a=this.origin();if(this.path())a=a+this.path();else if(this.host()&&(this.query().toString()||this.anchor()))a=a+"/";if(this.query().toString()){this.query().toString().indexOf("?")!==
0&&(a=a+"?");a=a+this.query().toString()}if(this.anchor()){this.anchor().indexOf("#")!==0&&(a=a+"#");a=a+this.anchor()}return a};d.prototype.clone=function(){return new d(this.toString())};define("confluence/jsUri",function(){return d})})(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-templates', location = 'templates/inline-tasks.soy' */
// This file was automatically generated from inline-tasks.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.InlineTasks.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Templates == 'undefined') { Confluence.InlineTasks.Templates = {}; }


Confluence.InlineTasks.Templates.notice = function(opt_data, opt_ignored) {
  return '<div class="aui-message error' + ((opt_data.className) ? ' ' + soy.$$escapeHtml(opt_data.className) : '') + '" id="inline-tasks-notice">' + soy.$$filterNoAutoescape(opt_data.textMessage) + '&nbsp;&nbsp;<a href="#" class="notice-close">' + soy.$$escapeHtml("Dismiss") + '</a></div>';
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Templates.notice.soyTemplateName = 'Confluence.InlineTasks.Templates.notice';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks-focus.js' */
define("inline-tasks/focus",["confluence/jsUri"],function(a){return{scrollToFocussedTaskIfRequired:function(){var d="focusedTaskId";var c=new a(window.location.href);var e=c.getQueryParamValue(d);if(e){var b=$("li[data-inline-task-id="+e+"]");if(b.length){b.addClass("focused");window.scrollTo(b.offset().left,(b.offset().top-($(window).height()/2)))}}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks.js' */
require(["jquery","ajs","skate","inline-tasks/focus"],function(d,j,e,b){function l(r){var m,s;if(r.offsetX===undefined){var q=0,p=0,o=r.target,n;do{if(o.scrollTop!=0||o.scrollLeft!=0){n=o}q+=o.offsetLeft;p+=o.offsetTop;o=o.offsetParent}while(o&&o!=o.offsetParent);m=r.pageX+(n?n.scrollLeft:0)-q;s=r.pageY+(n?n.scrollTop:0)-p}else{m=r.offsetX;s=r.offsetY}return m>=3&&m<=14&&s>=3&&s<=14}function h(m){return m.currentTarget===m.target}function i(n){var m="page";if(n.closest("table.tasks-report").length){m="report"}else{if(n.closest("#task-container").length){m="mytasks"}else{if(n.closest("ul.inline-task-list").length){m="task"}}}return m}function g(p,n){var m=p.attr("data-inline-task-id");var o=p.find(n).first();if(o.closest("li").attr("data-inline-task-id")===m){return o}else{return d()}}function k(n){var o=""+n.getFullYear();var p=""+(n.getMonth()+1);var m=""+n.getDate();if(p.length<2){p="0"+p}if(m.length<2){m="0"+m}return[o,p,m].join("-")}var a=false;d(window).bind("beforeunload",function(){a=true});function f(){return typeof AP!=="undefined"}var c=[];e("inline-task-list",{type:e.types.CLASS,created:function(n){b.scrollToFocussedTaskIfRequired();var m=d(n);if(m.parents(".inline-task-list").length!=0){return}m.find("li[data-inline-task-id]").on({click:function(u){if(h(u)&&l(u)){var x=d(u.target).toggleClass("checked"),t=x.hasClass("checked")?"CHECKED":"UNCHECKED",v=x.data("inline-task-id"),o=x.closest("ul").attr("data-inline-tasks-content-id")||j.params.pageId,p="/rest/inlinetasks/1/task/"+o+"/"+v+"/";function r(){x.prop("disabled",false);var y=x.closest("tr");y.attr("aria-disabled",false);c.splice(j.indexOf(c,v),1);j.trigger("inline-tasks.status-update.complete",{status:t,taskId:v,taskListQueue:c})}x.prop("disabled",true);var s=x.closest("tr");s.attr("aria-disabled",true);c.push(v);j.trigger("inline-tasks.status-update.start",{status:t,taskId:v,taskListQueue:c});var w=f()?AP.request:d.ajax;var q=w({type:"POST",url:f()?p:j.contextPath()+p,data:d.toJSON({status:t,trigger:"VIEW_PAGE"}),dataType:"json",contentType:"application/json",timeout:30000,error:function(z,B,y){if(a||B==="timeout"){return}j.logError("Inline Task #"+v+" was not persisted to "+t+" because of "+y+" (status: "+B+")");x.toggleClass("checked");var A;if(z.status===403){A=new Confluence.InlineTasks.Notice({textMessage:"Oops! You can\'t update this task because you are not allowed to edit the page it appears on.",className:"forbidden-notice"})}else{A=new Confluence.InlineTasks.Notice()}A.show();if(f()){r()}},success:function(){var y={dueDate:g(x,"time").attr("datetime"),completionDate:k(new Date()),mode:"view",assigneeUsername:g(x,".user-mention").attr("data-username"),context:i(x)};if(t==="CHECKED"){j.trigger("analyticsEvent",{name:"confluence-spaces.tasks.completed",data:y})}if(f()){r()}}});if(!f()){q.always(r)}}},mousemove:function(o){if(h(o)){if(l(o)){d(o.target).addClass("hover")}else{d(o.target).removeClass("hover")}}},mouseout:function(o){if(h(o)){d(o.target).removeClass("hover")}},mousedown:function(o){if(h(o)&&l(o)){d(o.target).addClass("task-active")}},mouseup:function(o){if(h(o)&&l(o)){d(o.target).removeClass("task-active")}}});m.find("li:not(.checked) time.date-upcoming").tooltip({title:function(){return "This task is due in less than a week"},live:true});m.find("li:not(.checked) time.date-past").tooltip({title:function(){return "This task is overdue"},live:true});m.find("span.emptycompletedate").tooltip({title:function(){return "A completion date wasn\'t recorded for this task"},live:true})}});d(document).on("click","time",function(){var n=d(this);var m={date:n.attr("datetime"),mode:"view",context:i(n)};j.trigger("analyticsEvent",{name:"confluence-spaces.date.clicked",data:m})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks-alert.js' */
Confluence.InlineTasks=Confluence.InlineTasks||{};(function(b){var a=function(c){this.settings=b.extend({},a.DEFAULTS,c);this.template=Confluence.InlineTasks.Templates;b("#inline-tasks-notice").remove();var d=b(this.template.notice(this.settings));d.hide().appendTo("body");d.find(".notice-close").click(function(){d.hide()});this.$notice=d};a.DEFAULTS={textMessage:"Oops! Your task change couldn\'t be saved. \u003cbr/\u003eThere could be a few reasons for this.",className:"general-notice"};a.prototype.show=function(){this.$notice.show();return this};a.prototype.hide=function(){this.$notice.hide();return this};Confluence.InlineTasks.Notice=a}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/jquery.tablesorter.serveronly.js' */
(function(a){a.extend({tablesorterServerOnly:new function(){this.defaults={classNameDisableSorting:"aui-table-column-unsortable",classNameHeaderDesc:"tablesorter-headerDesc",classNameHeaderAsc:"tablesorter-headerAsc",reverseSort:false,sortColumn:"",onInit:function(){},onSort:function(){},events:{clickHeader:"click.sortServerOnly",refreshHeader:"refreshHeader.sortServerOnly",simulateClickHeader:"simulateClickHeader.sortServerOnly"}};var b=this;var d={updateCurrentHeaderSort:function(e,f){d.resetHeadersSort(e,f);f.$headers.each(function(){var h=a(this),g=h.attr("data-column-name");var i=f.reverseSort;if(g===f.sortColumn){i?h.addClass(f.classNameHeaderDesc):h.addClass(f.classNameHeaderAsc)}})},resetHeadersSort:function(e,f){f.$headers.removeClass(f.classNameHeaderDesc).removeClass(f.classNameHeaderAsc)},prepareHTMLHeader:function(e,f){f.$headers.not("."+f.classNameDisableSorting).attr("unselectable","on").bind("selectstart",false).addClass("tablesorter-header").wrapInner("<span class='aui-table-header-content'/>")},bindEvents:function(f,g){var e=a(f);e.on(g.events.refreshHeader,function(){d.updateCurrentHeaderSort(f,g)});e.on(g.events.simulateClickHeader,function(i,j,h){g.reverseSort=h;g.sortColumn=j})}};var c=function(f,g){var e=a(f);g.$table=e;g.$headers=e.find("thead th");g.$tbodies=e.find("tbody");d.prepareHTMLHeader(f,g);d.updateCurrentHeaderSort(f,g);if(typeof g.onInit==="function"){g.onInit.apply(f,[g])}g.$headers.on(g.events.clickHeader,function(){var h=a(this);if(h.hasClass(g.classNameDisableSorting)){return false}var i=h.attr("data-column-name");if(i===g.sortColumn){g.reverseSort=!g.reverseSort}else{g.reverseSort=false}g.sortColumn=i;if(typeof g.onSort==="function"){g.onSort.apply(f,[g])}return false});d.bindEvents(f,g)};b.construct=function(e){return this.each(function(){var f=this,g=a.extend(true,{},a.tablesorterServerOnly.defaults,e);if(this.config&&f.hasInitialized&&a.tablesorter){a.tablesorter.destroy(f,false,function(){c(f,g)})}else{c(f,g)}})}}()});a.fn.extend({tablesorterServerOnly:a.tablesorterServerOnly.construct})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/tasks-table-sortable.js' */
(function(a){var b=function(d){this.ajaxUrl=d.ajaxUrl;this.restUrlPagination=d.restUrlPagination;this.$wrapper=d.$wrapper;this.table=d.table;this.$table=a(this.table);this.analyticEventKey=d.analyticEventKey;this.sortColumnDefault=d.sortColumnDefault||"duedate";this.sortReverseSortDefault=d.sortReverseSortDefault||false;this.reportParametersDefault=d.reportParametersDefault;this.pageIndex=d.pageIndex||0;this.pageSize=d.pageSize||10;this.pageTotal=d.pageTotal||0;this.pageLimit=d.pageLimit||7;this.adaptive=d.adaptive;this.columns=d.columns;this.templates=d.templates;this.onRenderEmptyTable=d.onRenderEmptyTable;this.onBusySorting=d.onBusySorting};b.getColumnNameFromSortBy=function(e){var d={"due date":"duedate","page title":"location",assignee:"assignee"};return d[e]?d[e]:"duedate"};b.getSortByFromColumnName=function(d){var e={duedate:"due date",location:"page title"};return e[d]?e[d]:d};b.prototype.updateOptions=function(d){a.extend(this,d);this.$table=a(this.table)};b.prototype.getCurrentPageIndex=function(){var e=this.$wrapper.find(".macro-auto-pagination").last();var d=parseInt(e.attr("data-initial-page-index"),10);return isNaN(d)?0:d};b.prototype.renderPagination=function(e,g){var d=this;if(!e){e=d.$table}if(!g){g=d.reportParametersDefault}this.$wrapper.find(".macro-auto-pagination").remove();if(!(d.pageTotal>1)){return}c.UI.Components.Pagination.build({scope:e,pageSize:d.pageSize,totalPages:d.pageTotal,pageLimit:d.pageLimit,path:d.restUrlPagination,adaptive:d.adaptive,currentPage:d.pageIndex,data:{reportParameters:JSON.stringify(g)},success:function f(h,j){var k={task:h,columns:d.columns};var i=d.templates.tasksReportLine(k);j.append(i)}})};b.prototype.toggleBusyState=function(d){this.$wrapper.attr("data-loading",d);if(d){this.$wrapper.find(".task-blanket").show()}else{this.$wrapper.find(".task-blanket").hide()}if(typeof this.onBusySorting==="function"){this.onBusySorting.apply(this,[d])}};b.prototype.renderTable=function(e){var d=this;var f=_.map(e,function(g){return d.templates.tasksReportLine({task:g,columns:d.columns})}).join("");d.$table.find("tbody").html(f);c.Binder.userHover()};b.prototype._triggerAnalyticsSorting=function(){var d=this.analyticEventKey;var e={column:this.sortColumn,direction:this.reverseSort?"desc":"asc"};AJS.trigger("analyticsEvent",{name:d,data:e})};b.prototype._buildAjaxData=function(e){var d={url:this.ajaxUrl,cache:false,dataType:"json",data:{pageIndex:this.pageIndex,pageSize:this.pageSize,reportParameters:JSON.stringify(e)}};return d};b.prototype.init=function(){var d=this;d.sortColumn=d.sortColumnDefault;d.reverseSort=d.sortReverseSortDefault;this.$table.tablesorterServerOnly({sortColumn:d.sortColumn,reverseSort:d.reverseSort,onInit:function(){var e=a(this);e.addClass("aui-table-sortable")},onSort:function(i){var h=this,f=a(h);d.pageIndex=d.getCurrentPageIndex();d.sortColumn=i.sortColumn;d.reverseSort=i.reverseSort;d.toggleBusyState(true);var g=a.extend({},d.reportParametersDefault,{sortColumn:b.getSortByFromColumnName(d.sortColumn),reverseSort:d.reverseSort});var e=d._buildAjaxData(g);a.ajax(e).done(function(j){d.pageIndex=d.getCurrentPageIndex();d.pageTotal=j.totalPages;if(d.pageIndex===0&&d.pageTotal===0){if(typeof d.onRenderEmptyTable==="function"){d.$wrapper.find(".macro-auto-pagination").remove();f.remove();d.onRenderEmptyTable.apply(d)}return}d.renderTable(j.detailLines);d.renderPagination(null,g);f.trigger("refreshHeader.sortServerOnly");d._triggerAnalyticsSorting()}).fail(function(){var j=new c.InlineTasks.Notice({textMessage:"We can\'t sort your tasks right now. Refresh the page to try again.",className:"forbidden-notice"});j.show()}).always(function(){d.toggleBusyState(false)})}})};var c=window.Confluence||{};c.InlineTasks=c.InlineTasks||{};c.InlineTasks.TasksTableSortable=b})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/namespace.js' */
window.Confluence||(window.Confluence={});window.Confluence.UI||(window.Confluence.UI={});window.Confluence.UI.Components||(window.Confluence.UI.Components={});window.Confluence.UI.Components.Pagination||(window.Confluence.UI.Components.Pagination={});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/internal/dark-features.js' */
define("confluence-ui-components/dark-features",["ajs"],function(a){return a.DarkFeatures});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/js/pagination.js' */
(function(e,c){var d=function(j,k,i){var h=j.find("a").attr("aria-disabled",i);if(i){h.attr("disabled","disabled")}else{h.removeAttr("disabled");var g=e(".aui-nav-selected",j).data("index")+1;j.find(".aui-nav-next > a").attr("aria-disabled",g==k);j.find(".aui-nav-previous > a").attr("aria-disabled",g==1)}};var b={scope:null,success:null,data:null,path:"",url:"#",pageLimit:7,currentPage:0,adaptive:false,totalPages:0,pageSize:0};var f=function(i,j,k){var g=Math.floor(k/2);var h=j-1;if(!k||j<=k||i-g<0){return 0}if(i+g>h){return j-k}return i-g};var a=function(l){var k=l.totalPages,j=l.currentPage,m=l.pageLimit,h=l.adaptive,g;if(m){if(h){k=j+m}g=m}else{g=k}var i=f(j,k,m);return Confluence.UI.Components.Pagination.Templates.paginationFooter({currentPage:j||0,startPage:i,itemsToRender:g,totalPages:k,pageSize:l.pageSize,url:l.url||"#"})};c.build=function(j){var h=_.extend({},b,j);if(typeof h.success!=="function"){h.success=function(){}}var k=a(h);h.scope.after(k);var i=h.scope.next();var g=i.data("initial-page-index");i.on("click","a",function(p){var o=e(this),r=o.parents("ol").prev(),n=r.is("table")?r:r.find("table");var l=n.data("pageIndex")||g,q=o.parent("li");if(q.hasClass("aui-nav-selected")||q.find("> a[aria-disabled=true]").length){return}if(q.hasClass("aui-nav-next")){l++}else{if(q.hasClass("aui-nav-previous")){l--}else{l=q.data("index")}}d(i,h.totalPages,true);var m=e.extend({},{pageSize:h.pageSize,pageIndex:l},h.data);e.getJSON(Confluence.getContextPath()+h.path,m).done(function(t){l=t.currentPage;var s=n.find("tbody");s.find("tr").remove();n.data("pageIndex",l);_.each(t.detailLines,function(v){h.success(v,s)});AJS.trigger("ui.components.pagination.updated",[t,h]);var u=e.extend({},h,{totalPages:t.totalPages,adaptive:t.adaptive,currentPage:l});i.html(a(u));d(i,u.totalPages,false);Confluence.Binder.userHover()}).fail(function(){d(i,h.totalPages,false)});p.preventDefault()})}})(AJS.$,window.Confluence.UI.Components.Pagination);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/soy/pagination.soy' */
// This file was automatically generated from pagination.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.Pagination.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.Pagination == 'undefined') { Confluence.UI.Components.Pagination = {}; }
if (typeof Confluence.UI.Components.Pagination.Templates == 'undefined') { Confluence.UI.Components.Pagination.Templates = {}; }


Confluence.UI.Components.Pagination.Templates.paginationFooter = function(opt_data, opt_ignored) {
  var output = '<ol class="aui-nav aui-nav-pagination macro-auto-pagination" data-page-size="' + soy.$$escapeHtml(opt_data.pageSize) + '" data-initial-page-index="' + soy.$$escapeHtml(opt_data.currentPage) + '"><li class="aui-nav-previous"><a ' + ((opt_data.currentPage == 0) ? 'aria-disabled="true"' : 'href="#"') + '>' + soy.$$escapeHtml("Prev") + '</a></li>';
  var startIdx__soy16 = opt_data.startPage + 1;
  var currentIdx__soy17 = opt_data.currentPage + 1;
  var endIdx__soy18 = startIdx__soy16 + opt_data.itemsToRender;
  var totalRange__soy19 = opt_data.totalPages + 1;
  var indexInit20 = startIdx__soy16;
  var indexLimit20 = endIdx__soy18 < totalRange__soy19 ? endIdx__soy18 : totalRange__soy19;
  for (var index20 = indexInit20; index20 < indexLimit20; index20++) {
    output += (index20 == currentIdx__soy17) ? '<li class="aui-nav-selected" data-index="' + soy.$$escapeHtml(index20 - 1) + '">' + soy.$$escapeHtml(index20) + '</li>' : '<li data-index="' + soy.$$escapeHtml(index20 - 1) + '"><a href="#">' + soy.$$escapeHtml(index20) + '</a></li>';
  }
  output += '<li class="aui-nav-next"><a ' + ((currentIdx__soy17 == opt_data.totalPages) ? 'aria-disabled="true"' : 'href="' + soy.$$escapeHtml(opt_data.url) + '"') + '>' + soy.$$escapeHtml("Next") + '</a></li></ol>';
  return output;
};
if (goog.DEBUG) {
  Confluence.UI.Components.Pagination.Templates.paginationFooter.soyTemplateName = 'Confluence.UI.Components.Pagination.Templates.paginationFooter';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:blank-placeholder-box', location = 'soy/blank-placeholder-box.soy' */
// This file was automatically generated from blank-placeholder-box.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.BlankPlaceholderBox.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox.Templates == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox.Templates = {}; }


Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox = function(opt_data, opt_ignored) {
  return '<div class="blank-placeholder-box ' + ((opt_data.customClass) ? soy.$$escapeHtml(opt_data.customClass) : '') + '"><div class="content"><h2>' + soy.$$escapeHtml(opt_data.blankTitle) + '</h2><p>' + soy.$$escapeHtml(opt_data.blankDescription) + '</p></div>' + ((opt_data.customHtml) ? soy.$$filterNoAutoescape(opt_data.customHtml) : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox.soyTemplateName = 'Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'templates/tasks-report.soy' */
// This file was automatically generated from tasks-report.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.InlineTasks.Report.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Report == 'undefined') { Confluence.InlineTasks.Report = {}; }
if (typeof Confluence.InlineTasks.Report.Templates == 'undefined') { Confluence.InlineTasks.Report.Templates = {}; }


Confluence.InlineTasks.Report.Templates.tasksReport = function(opt_data, opt_ignored) {
  var output = '<div class="table-wrapper" data-loading="false"><div class="task-blanket"></div><input type="hidden" name="reportParameters" value="' + soy.$$escapeHtml(opt_data.reportParameters) + '" /><table class="aui aui-table-interactive tasks-report" data-sortable="false" data-total-pages="' + soy.$$escapeHtml(opt_data.totalPages) + '" data-page-size="' + soy.$$escapeHtml(opt_data.pageSize) + '" data-adaptive="' + soy.$$escapeHtml(opt_data.adaptive) + '" data-page-limit="' + soy.$$escapeHtml(opt_data.pageLimit) + '"><thead><tr class="tablesorter-headerRow">';
  var headingList14 = opt_data.headings;
  var headingListLen14 = headingList14.length;
  for (var headingIndex14 = 0; headingIndex14 < headingListLen14; headingIndex14++) {
    var headingData14 = headingList14[headingIndex14];
    output += '<th class="header-' + soy.$$escapeHtml(headingData14) + ((headingData14 == 'description') ? ' aui-table-column-unsortable' : '') + '" data-column-name="' + soy.$$escapeHtml(headingData14) + '">' + soy.$$escapeHtml(opt_data.headingTexts[headingData14]) + '</th>';
  }
  output += '</tr></thead><tbody>';
  if (opt_data.tasks.length) {
    var taskList29 = opt_data.tasks;
    var taskListLen29 = taskList29.length;
    for (var taskIndex29 = 0; taskIndex29 < taskListLen29; taskIndex29++) {
      var taskData29 = taskList29[taskIndex29];
      output += Confluence.InlineTasks.Report.Templates.tasksReportLine({task: taskData29, columns: opt_data.headings});
    }
  } else {
    output += '<tr><td colspan="' + soy.$$escapeHtml(opt_data.headings.length) + '">' + soy.$$escapeHtml("Create a task list in a Confluence page to keep track of things you need to do.") + '</td></tr>';
  }
  output += '</tbody></table></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.tasksReport.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.tasksReport';
}


Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml("Hey! Did you know...") + '</h2><p>' + soy.$$escapeHtml("You can view the tasks you created, or assigned to you, in the tasks tabs of your profile.") + '</p>';
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification';
}


Confluence.InlineTasks.Report.Templates.tasksReportLine = function(opt_data, opt_ignored) {
  var output = '<tr data-task-id="' + soy.$$escapeHtml(opt_data.task.taskId) + '" aria-disabled="false">';
  var columnList51 = opt_data.columns;
  var columnListLen51 = columnList51.length;
  for (var columnIndex51 = 0; columnIndex51 < columnListLen51; columnIndex51++) {
    var columnData51 = columnList51[columnIndex51];
    if (columnData51 == 'duedate') {
      output += '<td class=\'tasks-report-date\'>' + ((opt_data.task.dueDate) ? soy.$$escapeHtml(opt_data.task.dueDate) : '') + '</td>';
    } else if (columnData51 == 'description') {
      output += '<td>' + soy.$$filterNoAutoescape(opt_data.task.taskHtml) + '</td>';
    } else if (columnData51 == 'assignee') {
      output += '<td class=\'tasks-report-assignee\'>' + ((opt_data.task.assigneeUserName) ? Confluence.Templates.User.usernameLink({username: opt_data.task.assigneeUserName, fullName: opt_data.task.assigneeFullName, canView: false}) : '') + '</td>';
    } else if (columnData51 == 'location') {
      output += '<td><a class=\'task-location\' href="' + soy.$$escapeHtml("/wiki") + soy.$$escapeHtml(opt_data.task.pageUrl) + '">' + soy.$$escapeHtml(opt_data.task.pageTitle) + '</a></td>';
    } else if (columnData51 == 'completedate') {
      output += '<td class=\'tasks-report-date\'>' + ((opt_data.task.completeDate) ? soy.$$escapeHtml(opt_data.task.completeDate) : (opt_data.task.taskCompleted) ? '<span class="emptycompletedate">--</span>' : '') + '</td>';
    } else if (columnData51 == 'labels') {
      output += '<td>';
      var labelList90 = opt_data.task.labels;
      var labelListLen90 = labelList90.length;
      for (var labelIndex90 = 0; labelIndex90 < labelListLen90; labelIndex90++) {
        var labelData90 = labelList90[labelIndex90];
        output += aui.labels.label({text: labelData90});
      }
      output += '</td>';
    }
  }
  output += '</tr>';
  return output;
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.tasksReportLine.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.tasksReportLine';
}


Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning = function(opt_data, opt_ignored) {
  var param98 = '<p>' + soy.$$escapeHtml("Unable to show this task report.") + '</p>';
  var messageList102 = opt_data.messages;
  var messageListLen102 = messageList102.length;
  for (var messageIndex102 = 0; messageIndex102 < messageListLen102; messageIndex102++) {
    var messageData102 = messageList102[messageIndex102];
    param98 += '<p>' + soy.$$escapeHtml(messageData102) + '</p>';
  }
  var output = '' + aui.message.warning({content: param98});
  return output;
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning';
}


Confluence.InlineTasks.Report.Templates.taskReportWarning = function(opt_data, opt_ignored) {
  return '' + aui.message.warning({content: '<p>' + soy.$$escapeHtml("Unable to show the task report. Edit this page to resolve the issues.") + '</p>'});
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.taskReportWarning.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.taskReportWarning';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report-blank-exp.js' */
(function(b){Confluence.InlineTasks=Confluence.InlineTasks||{};Confluence.InlineTasks.TasksReport=Confluence.InlineTasks.TasksReport||{};var a={"blank.complete.title":"Task report","blank.complete.desc":"Get going, no tasks completed yet.","blank.incomplete.title":"Task report","blank.incomplete.desc":"Looking good, no incomplete tasks."};Confluence.InlineTasks.TasksReport.renderBlankExperiences=function(g,c){if(!c){c="incomplete"}var f=a["blank."+c+".title"],e=a["blank."+c+".desc"];var d=Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox({blankTitle:f,blankDescription:e,customClass:c+" tasks-report-blank"});g.html(d)}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report.js' */
AJS.$(function(c){var b="/rest/inlinetasks/1/task-report/",a=Confluence.InlineTasks.Report.Templates,e=Confluence.InlineTasks.TasksTableSortable;var d=c(".tasks-report").parent();_.each(d,function(i){var l=c(i),n=l.find("table.tasks-report"),m=n.data("page-size"),k=n.data("total-pages"),f=n.data("page-limit"),q=n.data("adaptive"),p=l.find("input[name=reportParameters]").val(),g=JSON.parse(p);var o=function(r,s){c(r).attr("aria-disabled",s)};AJS.bind("inline-tasks.status-update.start",function(t,s){if(s.taskListQueue.length>0){var r=c("li[data-inline-task-id="+s.taskId+"]").closest(".tasks-report").siblings(".macro-auto-pagination");o(r,true);r=r.find("li a");r.on("click.taskreport.pagination",function(u){u.preventDefault();u.stopPropagation()})}});AJS.bind("inline-tasks.status-update.complete",function(s,r){if(r.taskListQueue.length===0){o(".macro-auto-pagination",false);c(".macro-auto-pagination li a").off("click.taskreport.pagination")}});var j=n.closest(".table-wrapper");var h=new e({$wrapper:j,table:n[0],sortReverseSortDefault:g.reverseSort,sortColumnDefault:e.getColumnNameFromSortBy(g.sortColumn),reportParametersDefault:g,pageIndex:0,pageSize:m,pageTotal:k,adaptive:q,pageLimit:f,templates:a,columns:g.columns,onRenderEmptyTable:function(){Confluence.InlineTasks.TasksReport.renderBlankExperiences(j,g.status)},analyticEventKey:"confluence-spaces.tasks.report.sorted",restUrlPagination:b,ajaxUrl:Confluence.getContextPath()+b});h.init();if(q||k>1){h.renderPagination()}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'js/help-tip.js' */
(function(f){function b(){return false}function d(){return true}var l=0,g=new Date().getTime();var k=AJS.contextPath()+"/rest/helptips/1.0/tips";function h(n){n=""+(n||"");return n.replace(/\./g,"-")}function j(o,n){if(AJS.EventQueue&&n&&n.attributes.id){var q={};var p=h(n.attributes.id);q.name="helptips."+p+"."+o;q.properties={};AJS.EventQueue.push(q)}}function c(){return"c"+g+(l++)}var a={dismissedTipIds:[],loaded:f.Deferred(),url:function(){return k},sync:function(o,n){o||(o="get");n||(n=null);return f.ajax(this.url(),{type:o,context:this,dataType:"json",contentType:"application/json",data:n&&JSON.stringify(n),processData:false}).promise()},fetch:function(){var n=this.sync();n.done(function(o){f.merge(this.dismissedTipIds,o);this.loaded.resolve()});return n.promise()},show:function(n){this.loaded.done(n)},dismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=true}else{this.dismissedTipIds.push(o);this.sync("post",{id:o})}},undismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=false}else{this.dismissedTipIds.splice(f.inArray(o,this.dismissedTipIds),1);this.sync("delete",{id:o})}},isDismissed:function(n){var o=n.attributes.id;return(o)?f.inArray(o,this.dismissedTipIds)>=0:n._dismissed}};var e=AJS.HelpTip=function(n){var o;this.attributes=f.extend({},n);this.attributes.id||(this.attributes.id=false);if(this.attributes.body){this.attributes.bodyHtml=this.attributes.body;delete this.attributes.body}this.cid=c();o=this.attributes.anchor;delete this.attributes.anchor;this.view=o?new i(this,o):new m(this);this.view.$el.addClass("aui-help-tip")};AJS.HelpTip.Manager=a;f.extend(e.prototype,{show:function(){var n=this;AJS.HelpTip.Manager.show(function(){if(!n.isDismissed()){if(AJS.Popups&&AJS.Popups.DisplayController){AJS.Popups.DisplayController.request({name:n.id,weight:1000,show:function(){n.view.show()}})}else{n.view.show()}j("shown",n)}})},dismiss:function(){var n=h(arguments[0]||"programmatically");this.view.dismiss();if(!this.isDismissed()){AJS.HelpTip.Manager.dismiss(this);j("dismissed."+n,this)}},isVisible:function(){return this.view.$el.is(":visible")},isDismissed:function(){return AJS.HelpTip.Manager.isDismissed(this)}});var i=function(o,n){this.initialize(o,n)};f.extend(i.prototype,{initialize:function(r,q){var o=this;var s=q.prop("ownerDocument");var p=s!=window.document;if(p){var n=f("iframe").filter(function(){return this.contentDocument==s});n.contents().scroll(function(){var v=f(this).contents().find("body").scrollTop();var w=n.offset().top;var u=o.popup.data("offset-top");var t=o.popup.find(".arrow").height();o.popup.css("top",u-v);o.popup.toggle(v<=u-w-t&&v+n.height()-t+w-o.popup.height()>=u)})}this.model=r;this.beforeHide=b;this.dismissButton=f(AJS.Templates.HelpTip.tipDismiss());this.dismissButton.click(function(t){r.dismiss("close-button");t.preventDefault()});this.popup=AJS.InlineDialog(q,r.cid,function(v,u,t){v.html(AJS.Templates.HelpTip.tipContent(r.attributes));v.find(".helptip-body").after(o.dismissButton);v.unbind("mouseover mouseout");v.find(".helptip-link").click(function(){j("learn-more.clicked",r)});t()},{container:"body",noBind:true,preHideCallback:function(){return o.beforeHide()},calculatePositions:function(t,y,z,x){var w=AJS.InlineDialog.opts.calculatePositions(t,y,z,x);if(p){var v=t.find(".arrow").height();var u=n.contents().find("body").scrollTop();w.popupCss.top=n.offset().top+(q.offset().top-u)+q.height()+v;w.popupCss.left=q.offset().left;n.contents().scroll()}t.data("offset-top",w.popupCss.top);return w}});this.popup.refresh();this._popupHide=this.popup.hide;this.popup.hide=b;this.$el=f(this.popup[0]);AJS.$(document).bind("showLayer",function(v,u,t){if(u==="inlineDialog"&&t.id===r.cid){AJS.InlineDialog.current=null;AJS.$(document.body).unbind("click."+r.cid+".inline-dialog-check");t._validateClickToClose=b;t.hide=b}})},show:function(){var n=this.popup,o=function(p){if(!n.has(p.target).length){n.shadow.remove();n.remove()}};n.show()},dismiss:function(){this.beforeHide=d;this._popupHide()}});var m=function(n){this.initialize(n)};f.extend(m.prototype,{initialize:function(){this.$el=f("<div />")},show:f.noop,dismiss:f.noop});if(AJS.Meta.get("remote-user")){a.fetch()}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'templates/help-tip.soy' */
// This file was automatically generated from help-tip.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AJS.Templates.HelpTip.
 */

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.Templates == 'undefined') { AJS.Templates = {}; }
if (typeof AJS.Templates.HelpTip == 'undefined') { AJS.Templates.HelpTip = {}; }


AJS.Templates.HelpTip.tipContent = function(opt_data, opt_ignored) {
  return ((opt_data.title) ? '<h4 class="helptip-title">' + soy.$$escapeHtml(opt_data.title) + '</h4>' : '') + '<div class="helptip-body">' + soy.$$filterNoAutoescape(opt_data.bodyHtml) + '</div>' + ((opt_data.url) ? '<a class="helptip-link" href="' + soy.$$escapeHtml(opt_data.url) + '" target="_blank">' + soy.$$escapeHtml("Learn more") + '</a>' : '');
};
if (goog.DEBUG) {
  AJS.Templates.HelpTip.tipContent.soyTemplateName = 'AJS.Templates.HelpTip.tipContent';
}


AJS.Templates.HelpTip.tipDismiss = function(opt_data, opt_ignored) {
  return '<button class="helptip-dismiss aui-button" type="button">' + soy.$$escapeHtml("Dismiss") + '</button>';
};
if (goog.DEBUG) {
  AJS.Templates.HelpTip.tipDismiss.soyTemplateName = 'AJS.Templates.HelpTip.tipDismiss';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-feature-discovery-resources', location = 'js/tasks-discovery.js' */
(function(d){var c="com.atlassian.confluence.plugins.confluence-jira-metadata";var b="inline-tasks-flag";function a(){if(!!AJS.HelpTip){var e={id:null,body:Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification(),anchor:d("#user-menu-link")};var f=new AJS.HelpTip(e);AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.feature.discovery.shown"});f.show();Confluence.FeatureDiscovery.forPlugin(c).markDiscovered(b)}}d(function(){if(d("meta[name=show-task-feature-discovery-flag]").length>0&&Confluence.FeatureDiscovery.forPlugin(c).shouldShow(b)){a()}})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:plupload', location = 'js/plupload.js' */
(function(){function x(){this.returnValue=!1}function y(){this.cancelBubble=!0}var z=0,p=[],u={},v={},t={},w={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},A=/[<>&\"\']/g,q=window.setTimeout,m={},h,j="application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/java-archive,jar,application/java-archive,war,application/java-archive,ear,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.template,xltx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,audio/mpeg,mpga mpega mp2 mp3,audio/mp3,mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/html,htm html xhtml,text/xml,xml,text/javascript,js,text/css,css,text/rtf,rtf,text/x-java-source,java,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,text/csv,csv,text/plain,asc txt text diff log,application/octet-stream,exe".split(/,/),
k,n,o;for(k=0;k<j.length;k+=2){o=j[k+1].split(/ /);for(n=0;n<o.length;n++){v[o[n]]=j[k];var r=t[j[k]]||[];r.push(o[n]);t[j[k]]=r}}j=navigator;k=j.userAgent;o=j.vendor;r=(n=/WebKit/.test(k))&&-1!==o.indexOf("Apple");o=window.opera&&window.opera.buildNumber;var j={windows:-1!==navigator.platform.indexOf("Win"),ie:!n&&!o&&/MSIE/gi.test(k)&&/Explorer/gi.test(j.appName),webkit:n,gecko:!n&&/Gecko/.test(k),safari:r,opera:!!o},c={VERSION:"@@version@@",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,
GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:v,mineTypeToExtensionsMap:t,ua:j,extend:function(a){c.each(arguments,function(b,g){0<g&&c.each(b,function(b,c){a[c]=b})});return a},getElement:function(a){return a&&1===a.nodeType?a:document.getElementById(a)},cleanName:function(a){var b,c;c=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,
"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(b=0;b<c.length;b+=2)a=a.replace(c[b],c[b+1]);a=a.replace(/\s+/g,"_");return a=a.replace(/[^a-z0-9_\-\.]+/gi,"")},addRuntime:function(a,b){b.name=a;p[a]=b;p.push(b);return b},guid:function(){var a=(new Date).getTime().toString(32),b;for(b=0;5>b;b++)a+=Math.floor(65535*Math.random()).toString(32);return(c.guidPrefix||
"p")+a+(z++).toString(32)},buildUrl:function(a,b){var g="";c.each(b,function(a,b){g+=(g?"&":"")+encodeURIComponent(b)+"="+encodeURIComponent(a)});g&&(a+=(0<a.indexOf("?")?"&":"?")+g);return a},each:function(a,b){var c,f;if(a)if(c=a.length,void 0===c)for(f in a){if(a.hasOwnProperty(f)&&!1===b(a[f],f))break}else for(f=0;f<c&&!1!==b(a[f],f);f++);},formatSize:function(a){return void 0===a||/\D/.test(a)?c.translate("N/A"):1073741824<a?Math.round(a/1073741824,1)+" GB":1048576<a?Math.round(a/1048576,1)+
" MB":1024<a?Math.round(a/1024,1)+" KB":a+" b"},getPos:function(a,b){function c(a){var b,e=0;b=0;a&&(b=a.getBoundingClientRect(),a="CSS1Compat"===h.compatMode?h.documentElement:h.body,e=b.left+a.scrollLeft,b=b.top+a.scrollTop);return{x:e,y:b}}var f=0,d=0,e,h=document,b=b||h.body;if(a&&a.getBoundingClientRect&&0<navigator.userAgent.indexOf("MSIE")&&8!==h.documentMode)return f=c(a),d=c(b),{x:f.x-d.x,y:f.y-d.y};for(e=a;e&&e!=b&&e.nodeType;)f+=e.offsetLeft||0,d+=e.offsetTop||0,e=e.offsetParent;for(e=
a.parentNode;e&&e!=b&&e.nodeType;)f-=e.scrollLeft||0,d-=e.scrollTop||0,e=e.parentNode;return{x:f,y:d}},getSize:function(a){return{w:a.offsetWidth||a.clientWidth,h:a.offsetHeight||a.clientHeight}},parseSize:function(a){var b;"string"==typeof a&&(a=/^([0-9]+)([mgk]?)$/.exec(a.toLowerCase().replace(/[^0-9mkg]/g,"")),b=a[2],a=+a[1],"g"==b&&(a*=1073741824),"m"==b&&(a*=1048576),"k"==b&&(a*=1024));return a},xmlEncode:function(a){return a?(""+a).replace(A,function(a){return w[a]?"&"+w[a]+";":a}):a},toArray:function(a){var b,
c=[];for(b=0;b<a.length;b++)c[b]=a[b];return c},addI18n:function(a){return c.extend(u,a)},translate:function(a){return u[a]||a},isEmptyObj:function(a){if(void 0===a)return!0;for(var b in a)return!1;return!0},hasClass:function(a,b){return""==a.className?!1:RegExp("(^|\\s+)"+b+"(\\s+|$)").test(a.className)},addClass:function(a,b){c.hasClass(a,b)||(a.className=""==a.className?b:a.className.replace(/\s+$/,"")+" "+b)},removeClass:function(a,b){a.className=a.className.replace(RegExp("(^|\\s+)"+b+"(\\s+|$)"),
function(a,b,c){return" "===b&&" "===c?" ":""})},getStyle:function(a,b){if(a.currentStyle)return a.currentStyle[b];if(window.getComputedStyle)return window.getComputedStyle(a,null)[b]},addEvent:function(a,b,g,f){var d,b=b.toLowerCase();void 0===h&&(h="Plupload_"+c.guid());a.addEventListener?(d=g,a.addEventListener(b,d,!1)):a.attachEvent&&(d=function(){var a=window.event;a.target||(a.target=a.srcElement);a.preventDefault=x;a.stopPropagation=y;g(a)},a.attachEvent("on"+b,d));void 0===a[h]&&(a[h]=c.guid());
m.hasOwnProperty(a[h])||(m[a[h]]={});a=m[a[h]];a.hasOwnProperty(b)||(a[b]=[]);a[b].push({func:d,orig:g,key:f})},removeEvent:function(a,b,g){var f,d;"function"==typeof g?f=g:d=g;b=b.toLowerCase();if(a[h]&&m[a[h]]&&m[a[h]][b]){for(var g=m[a[h]][b],e=g.length-1;0<=e;e--)if(g[e].key===d||g[e].orig===f)if(a.detachEvent?a.detachEvent("on"+b,g[e].func):a.removeEventListener&&a.removeEventListener(b,g[e].func,!1),g[e].orig=null,g[e].func=null,g.splice(e,1),void 0!==f)break;g.length||delete m[a[h]][b];if(c.isEmptyObj(m[a[h]])){delete m[a[h]];
try{delete a[h]}catch(k){a[h]=void 0}}}},removeAllEvents:function(a,b){void 0!==a[h]&&a[h]&&c.each(m[a[h]],function(g,f){c.removeEvent(a,f,b)})},Uploader:function(a){function b(){var a,b=0,d;if(this.state==c.STARTED){for(d=0;d<e.length;d++)!a&&e[d].status==c.QUEUED?(a=e[d],a.status=c.UPLOADING,this.trigger("BeforeUpload",a)&&this.trigger("UploadFile",a)):b++;b==e.length&&(this.stop(),this.trigger("UploadComplete",e))}}function g(){var a,b;d.reset();for(a=0;a<e.length;a++)b=e[a],void 0!==b.size?(d.size+=
b.size,d.loaded+=b.loaded):d.size=void 0,b.status==c.DONE?d.uploaded++:b.status==c.FAILED?d.failed++:d.queued++;void 0===d.size?d.percent=0<e.length?Math.ceil(100*(d.uploaded/e.length)):0:(d.bytesPerSec=Math.ceil(d.loaded/((+new Date-h||1)/1E3)),d.percent=0<d.size?Math.ceil(100*(d.loaded/d.size)):0)}var f={},d,e=[],h;d=new c.QueueProgress;a=c.extend({chunk_size:0,multipart:!0,multi_selection:!0,file_data_name:"file",filters:[]},a);c.extend(this,{state:c.STOPPED,runtime:"",features:{},files:e,settings:a,
total:d,id:c.guid(),init:function(){function f(){var a=s[k++],b,e,d;if(a){b=a.getFeatures();if(e=i.settings.required_features){e=e.split(",");for(d=0;d<e.length;d++)if(!b[e[d]]){f();return}}a.init(i,function(c){c&&c.success?(i.features=b,i.runtime=a.name,i.trigger("Init",{runtime:a.name}),i.trigger("PostInit"),i.refresh()):f()})}else i.trigger("Error",{code:c.INIT_ERROR,message:c.translate("Init error.")})}var i=this,l,s,k=0,j;"function"==typeof a.preinit?a.preinit(i):c.each(a.preinit,function(a,
b){i.bind(b,a)});a.page_url=a.page_url||document.location.pathname.replace(/\/[^\/]+$/g,"/");/^(\w+:\/\/|\/)/.test(a.url)||(a.url=a.page_url+a.url);a.chunk_size=c.parseSize(a.chunk_size);a.max_file_size=c.parseSize(a.max_file_size);i.bind("FilesAdded",function(b,d){b.trigger("Started",d);var f,g,l=0,h;if((f=a.filters)&&f.length){h=[];c.each(f,function(a){c.each(a.extensions.split(/,/),function(a){/^\s*\*\s*$/.test(a)?h.push("\\.*"):h.push("\\."+a.replace(RegExp("["+"/^$.*+?|()[]{}\\".replace(/./g,
"\\$&")+"]","g"),"\\$&"))})});h=RegExp(h.join("|")+"$","i")}for(f=0;f<d.length;f++){g=d[f];g.loaded=0;g.percent=0;g.status=c.QUEUED;if(h&&!h.test(g.name))b.trigger("Error",{code:c.FILE_EXTENSION_ERROR,message:c.translate("File extension error."),file:g});else if(g.size!==void 0&&g.size>a.max_file_size)b.trigger("Error",{code:c.FILE_SIZE_ERROR,message:c.translate("File size error."),file:g});else{e.push(g);l++}}if(l)q(function(){i.trigger("QueueChanged");i.refresh()},1);else return false});a.unique_names&&
i.bind("UploadFile",function(a,b){var c=b.name.match(/\.([^.]+)$/),d="tmp";c&&(d=c[1]);b.target_name=b.id+"."+d});i.bind("UploadProgress",function(a,b){b.percent=b.size>0?Math.ceil(b.loaded/b.size*100):100;g()});i.bind("StateChanged",function(a){if(a.state==c.STARTED)h=+new Date;else if(a.state==c.STOPPED)for(l=a.files.length-1;l>=0;l--)if(a.files[l].status==c.UPLOADING){a.files[l].status=c.QUEUED;g()}});i.bind("QueueChanged",g);i.bind("Error",function(a,e){if(e.file){e.file.status=c.FAILED;g();a.state==
c.STARTED&&(d.queued||q(function(){b.call(i)},1))}});i.bind("FileUploaded",function(a,d){d.status=c.DONE;d.loaded=d.size;a.trigger("UploadProgress",d);q(function(){b.call(i)},1)});if(a.runtimes){s=[];j=a.runtimes.split(/\s?,\s?/);for(l=0;l<j.length;l++)p[j[l]]&&s.push(p[j[l]])}else s=p;f();"function"==typeof a.init?a.init(i):c.each(a.init,function(a,b){i.bind(b,a)})},refresh:function(){this.trigger("Refresh")},start:function(){this.state!=c.STARTED&&(this.state=c.STARTED,this.trigger("StateChanged"),
b.call(this))},stop:function(){this.state!=c.STOPPED&&(this.state=c.STOPPED,this.trigger("CancelUpload"),this.trigger("StateChanged"))},getFile:function(a){var b;for(b=e.length-1;0<=b;b--)if(e[b].id===a)return e[b]},removeFile:function(a){var b;for(b=e.length-1;0<=b;b--)if(e[b].id===a.id)return this.splice(b,1)[0]},splice:function(a,b){var f;f=e.splice(void 0===a?0:a,void 0===b?e.length:b);this.trigger("FilesRemoved",f);this.trigger("QueueChanged");f[0].status==c.UPLOADING&&this.state==c.STARTED&&
this.trigger("CancelUpload");if(!d.queued){var g=this;q(function(){g.trigger("UploadComplete")})}return f},trigger:function(a){var b=f[a.toLowerCase()],c,d;if(b){d=Array.prototype.slice.call(arguments);d[0]=this;for(c=0;c<b.length;c++)if(!1===b[c].func.apply(b[c].scope,d))return!1}return!0},hasEventListener:function(a){return!!f[a.toLowerCase()]},bind:function(a,b,c){var d,a=a.toLowerCase();d=f[a]||[];d.push({func:b,scope:c||this});f[a]=d},unbind:function(a,b){var a=a.toLowerCase(),c=f[a],d;if(c){if(void 0!==
b)for(d=c.length-1;0<=d;d--){if(c[d].func===b){c.splice(d,1);break}}else c=[];c.length||delete f[a]}},unbindAll:function(){var a=this;c.each(f,function(b,c){a.unbind(c)})},destroy:function(){this.trigger("Destroy");this.unbindAll()}})},File:function(a,b,c){this.id=a;this.name=b;this.size=c;this.status=this.percent=this.loaded=0},Runtime:function(){this.getFeatures=function(){};this.init=function(){}},QueueProgress:function(){var a=this;a.size=0;a.loaded=0;a.uploaded=0;a.failed=0;a.queued=0;a.percent=
0;a.bytesPerSec=0;a.reset=function(){a.size=a.loaded=a.uploaded=a.failed=a.queued=a.percent=a.bytesPerSec=0}},runtimes:{}};window.plupload=c})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:plupload', location = 'js/plupload.html5.js' */
(function(s,j,e,p){function G(e,f,k,g){var b,a,c,q,m=this;var d=y[e.id],r=function(d){b=j.createElement("canvas");b.style.display="none";j.body.appendChild(b);a=b.getContext("2d");c=new Image;c.onerror=c.onabort=function(){g({success:!1})};c.onload=function(){var r,t,j,o;f.width||(f.width=c.width);f.height||(f.height=c.height);q=Math.min(f.width/c.width,f.height/c.height);if(1>q||1===q&&"image/jpeg"===k){r=Math.round(c.width*q);t=Math.round(c.height*q);b.width=r;b.height=t;a.drawImage(c,0,0,r,t);
if("image/jpeg"===k){if(j=new w(atob(d.substring(d.indexOf("base64,")+7))),j.headers&&j.headers.length&&(o=new H,o.init(j.get("exif")[0])&&(o.setExif("PixelXDimension",r),o.setExif("PixelYDimension",t),j.set("exif",o.getBinary()),m.hasEventListener("ExifData")&&m.trigger("ExifData",e,o.EXIF()),m.hasEventListener("GpsData")&&m.trigger("GpsData",e,o.GPS()))),f.quality)try{d=b.toDataURL(k,f.quality/100)}catch(s){d=b.toDataURL(k)}}else d=b.toDataURL(k);d=d.substring(d.indexOf("base64,")+7);d=atob(d);
j&&(j.headers&&j.headers.length)&&(d=j.restore(d),j.purge());b.parentNode.removeChild(b);g({success:!0,data:d})}else g({success:!1})};c.src=d},t;"FileReader"in s?(t=new FileReader,t.readAsDataURL(d),t.onload=function(){r(t.result)}):r(d.getAsDataURL())}function C(){function e(b,a){var c=k?0:-8*(a-1),q=0,m;for(m=0;m<a;m++)q|=g.charCodeAt(b+m)<<Math.abs(c+8*m);return q}function f(b,a,c){c=3===arguments.length?c:g.length-a-1;g=g.substr(0,a)+b+g.substr(c+a)}var k=!1,g;return{II:function(b){if(b===p)return k;
k=b},init:function(b){k=!1;g=b},SEGMENT:function(b,a,c){switch(arguments.length){case 1:return g.substr(b,g.length-b-1);case 2:return g.substr(b,a);case 3:f(c,b,a);break;default:return g}},BYTE:function(b){return e(b,1)},SHORT:function(b){return e(b,2)},LONG:function(b,a){if(a===p)return e(b,4);var c="",q=k?0:-24,m;for(m=0;4>m;m++)c+=String.fromCharCode(a>>Math.abs(q+8*m)&255);f(c,b,4)},SLONG:function(b){b=e(b,4);return 2147483647<b?b-4294967296:b},STRING:function(b,a){for(var c="",a=a+b;b<a;b++)c+=
String.fromCharCode(e(b,1));return c}}}function w(e){var f={65505:{app:"EXIF",name:"APP1",signature:"Exif\x00"},65506:{app:"ICC",name:"APP2",signature:"ICC_PROFILE\x00"},65517:{app:"IPTC",name:"APP13",signature:"Photoshop 3.0\x00"}},k=[],g,b,a=p,c=0;g=new C;g.init(e);if(65496===g.SHORT(0)){b=2;for(e=Math.min(1048576,e.length);b<=e;)if(a=g.SHORT(b),65488<=a&&65495>=a)b+=2;else{if(65498===a||65497===a)break;c=g.SHORT(b+2)+2;f[a]&&g.STRING(b+4,f[a].signature.length)===f[a].signature&&k.push({hex:a,app:f[a].app.toUpperCase(),
name:f[a].name.toUpperCase(),start:b,length:c,segment:g.SEGMENT(b,c)});b+=c}g.init(null);return{headers:k,restore:function(a){g.init(a);var c=new w(a);if(!c.headers)return!1;for(a=c.headers.length;0<a;a--){var d=c.headers[a-1];g.SEGMENT(d.start,d.length,"")}c.purge();b=65504==g.SHORT(2)?4+g.SHORT(4):2;a=0;for(c=k.length;a<c;a++)g.SEGMENT(b,0,k[a].segment),b+=k[a].length;return g.SEGMENT()},get:function(a){for(var c=[],d=0,b=k.length;d<b;d++)k[d].app===a.toUpperCase()&&c.push(k[d].segment);return c},
set:function(a,c){var d=[];"string"===typeof c?d.push(c):d=c;for(var b=ii=0,e=k.length;b<e&&!(k[b].app===a.toUpperCase()&&(k[b].segment=d[ii],k[b].length=d[ii].length,ii++),ii>=d.length);b++);},purge:function(){k=[];g.init(null)}}}}function H(){function e(a,c){var q=f.SHORT(a),m,d,k,h,l,j=[],n={};for(m=0;m<q;m++)if(l=a+12*m+2,k=c[f.SHORT(l)],k!==p){d=f.SHORT(l+=2);h=f.LONG(l+=2);l+=4;j=[];switch(d){case 1:case 7:4<h&&(l=f.LONG(l)+g.tiffHeader);for(d=0;d<h;d++)j[d]=f.BYTE(l+d);break;case 2:4<h&&(l=
f.LONG(l)+g.tiffHeader);n[k]=f.STRING(l,h-1);continue;case 3:2<h&&(l=f.LONG(l)+g.tiffHeader);for(d=0;d<h;d++)j[d]=f.SHORT(l+2*d);break;case 4:1<h&&(l=f.LONG(l)+g.tiffHeader);for(d=0;d<h;d++)j[d]=f.LONG(l+4*d);break;case 5:l=f.LONG(l)+g.tiffHeader;for(d=0;d<h;d++)j[d]=f.LONG(l+4*d)/f.LONG(l+4*d+4);break;case 9:l=f.LONG(l)+g.tiffHeader;for(d=0;d<h;d++)j[d]=f.SLONG(l+4*d);break;case 10:l=f.LONG(l)+g.tiffHeader;for(d=0;d<h;d++)j[d]=f.SLONG(l+4*d)/f.SLONG(l+4*d+4);break;default:continue}h=1==h?j[0]:j;
n[k]=b.hasOwnProperty(k)&&"object"!=typeof h?b[k][h]:h}return n}var f,k,g={},b;f=new C;k={tiff:{274:"Orientation",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",
41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{"0":"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}};b={ColorSpace:{1:"sRGB","0":"Uncalibrated"},MeteringMode:{"0":"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",
13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{"0":"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",
16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{"0":"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{"0":"Auto white balance",1:"Manual white balance"},SceneCaptureType:{"0":"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},
Contrast:{"0":"Normal",1:"Soft",2:"Hard"},Saturation:{"0":"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{"0":"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}};return{init:function(a){g={tiffHeader:10};if(a===p||!a.length)return!1;f.init(a);return 65505===f.SHORT(0)&&"EXIF\x00"===f.STRING(4,5).toUpperCase()?(a=p,a=g.tiffHeader,f.II(18761==f.SHORT(a)),42!==f.SHORT(a+=2)?a=!1:(g.IFD0=g.tiffHeader+f.LONG(a+
2),a=e(g.IFD0,k.tiff),g.exifIFD="ExifIFDPointer"in a?g.tiffHeader+a.ExifIFDPointer:p,g.gpsIFD="GPSInfoIFDPointer"in a?g.tiffHeader+a.GPSInfoIFDPointer:p,a=!0),a):!1},EXIF:function(){var a;a=e(g.exifIFD,k.exif);a.ExifVersion&&(a.ExifVersion=String.fromCharCode(a.ExifVersion[0],a.ExifVersion[1],a.ExifVersion[2],a.ExifVersion[3]));return a},GPS:function(){var a;a=e(g.gpsIFD,k.gps);a.GPSVersionID&&(a.GPSVersionID=a.GPSVersionID.join("."));return a},setExif:function(a,c){if("PixelXDimension"!==a&&"PixelYDimension"!==
a)return!1;var b;b=a;var e,d,h,j=0;if("string"===typeof b)for(hex in e=k.exif,e)if(e[hex]===b){b=hex;break}e=g.exifIFD;d=f.SHORT(e);for(i=0;i<d;i++)if(h=e+12*i+2,f.SHORT(h)==b){j=h+8;break}j?(f.LONG(j,c),b=!0):b=!1;return b},getBinary:function(){return f.SEGMENT()}}}var y={},F;e.runtimes.Html5=e.addRuntime("html5",{getFeatures:function(){var h,f,k,g,b,a;f=k=b=a=!1;s.XMLHttpRequest&&(h=new XMLHttpRequest,k=!!h.upload,f=!(!h.sendAsBinary&&!h.upload));f&&(g=!!(h.sendAsBinary||s.Uint8Array&&s.ArrayBuffer),
b=!(!File||!File.prototype.getAsDataURL&&!s.FileReader||!g),a=!(!File||!File.prototype.mozSlice&&!File.prototype.webkitSlice&&!File.prototype.slice));F=e.ua.safari&&e.ua.windows&&navigator.userAgent&&0<navigator.userAgent.indexOf("Version/4");h=f;f=j.createElement("div");return{html5:h,dragdrop:"draggable"in f||"ondragstart"in f&&"ondrop"in f,jpgresize:b,pngresize:b,multipart:b||!!s.FileReader||!!s.FormData,canSendBinary:g,cantSendBlobInFormData:!(!e.ua.gecko||!s.FormData||!s.FileReader||FileReader.prototype.readAsArrayBuffer),
progress:k,chunks:a,multi_selection:!(e.ua.safari&&e.ua.windows),triggerDialog:e.ua.gecko&&s.FormData||e.ua.webkit||e.ua.windows}},init:function(h,f){function k(a){var c,b,g=[],d,f={};for(b=0;b<a.length;b++)c=a[b],f[c.name]||(f[c.name]=!0,d=e.guid(),y[d]=c,d=new e.File(d,c.fileName||c.name,c.fileSize||c.size),d.nativeFile=c,g.push(d));g.length&&h.trigger("FilesAdded",g)}var g,b;g=this.getFeatures();g.html5?(h.upload=function(a){k(a)},h.bind("Init",function(a){var c,b,g=[],d,f,t=a.settings.filters,
l,s;d=j.body;var n;c=j.createElement("div");c.id=a.id+"_html5_container";e.extend(c.style,{position:"absolute",background:h.settings.shim_bgcolor||"transparent",width:"100px",height:"100px",overflow:"hidden",zIndex:99999,opacity:h.settings.shim_bgcolor?"":0});c.className="plupload html5";h.settings.container&&(d=j.getElementById(h.settings.container),"static"===e.getStyle(d,"position")&&(d.style.position="relative"));d.appendChild(c);d=0;a:for(;d<t.length;d++){l=t[d].extensions.split(/,/);for(f=0;f<
l.length;f++){if("*"===l[f]){g=[];break a}(s=e.mimeTypes[l[f]])&&g.push(s)}}c.innerHTML='<input id="'+h.id+'_html5"  style="font-size:999px" type="file" accept="'+g.join(",")+'" '+(h.settings.multi_selection&&h.features.multi_selection?'multiple="multiple"':"")+" />";c.scrollTop=100;n=j.getElementById(h.id+"_html5");h.settings.inputFileClazz&&(n.className+=" "+h.settings.inputFileClazz);a.features.triggerDialog?e.extend(n.style,{position:"absolute",width:"100%",height:"100%"}):e.extend(n.style,{cssFloat:"right",
styleFloat:"right"});var p=function(){k(this.files);if(navigator.appVersion.indexOf("MSIE10")===-1){n=this.cloneNode(true);n.onchange=p;this.parentNode.replaceChild(n,this)}else this.value=""};n.onchange=p;if(b="string"===typeof a.settings.browse_button?j.getElementById(a.settings.browse_button):a.settings.browse_button){var o=a.settings.browse_button_hover,B=a.settings.browse_button_active;c=a.features.triggerDialog?b:c;o&&(e.addEvent(c,"mouseover",function(){e.addClass(b,o)},a.id),e.addEvent(c,
"mouseout",function(){e.removeClass(b,o)},a.id));B&&(e.addEvent(c,"mousedown",function(){e.addClass(b,B)},a.id),e.addEvent(j.body,"mouseup",function(){e.removeClass(b,B)},a.id));a.features.triggerDialog&&e.addEvent(b,"click",function(c){j.getElementById(a.id+"_html5").click();c.preventDefault()},a.id)}}),h.bind("PostInit",function(){var a=e.getElement(h.settings.drop_element),c,b=!1;a&&(F?(e.addEvent(a,"dragenter",function(){var c,d;c=j.getElementById(h.id+"_drop");c||(c=j.createElement("input"),
c.setAttribute("type","file"),c.setAttribute("id",h.id+"_drop"),c.setAttribute("multiple","multiple"),e.addEvent(c,"change",function(){k(this.files);e.removeEvent(c,"change",h.id);c.parentNode.removeChild(c)},h.id),a.appendChild(c),b=!0);e.getPos(a,j.getElementById(h.settings.container));d=e.getSize(a);"static"===e.getStyle(a,"position")&&e.extend(a.style,{position:"relative"});e.extend(c.style,{position:"absolute",display:"block",top:0,left:0,width:d.w+"px",height:d.h+"px",opacity:0})},h.id),e.addEvent(a,
"dragleave",function(){b||(c&&c.parentElement.removeChild(c),c=null);b=!1})):(e.addEvent(a,"dragover",function(a){a.preventDefault()},h.id),e.addEvent(a,"drop",function(a){if(!$(".disable-attachment-uploader").length){var b=a.dataTransfer;b&&b.files&&k(b.files)}c&&c.parentElement.removeChild(c);c=null;a.preventDefault();h.settings.stop_propagation&&(a.cancelBubble?a.cancelBubble=!0:a.stopPropagation())},h.id)))}),h.bind("Refresh",function(a){var c,b,f;if(c=j.getElementById(h.settings.browse_button))b=
e.getPos(c,j.getElementById(a.settings.container)),f=e.getSize(c),a=j.getElementById(h.id+"_html5_container"),e.extend(a.style,{top:b.y+"px",left:b.x+"px",width:f.w+"px",height:f.h+"px"}),h.features.triggerDialog&&("static"===e.getStyle(c,"position")&&e.extend(c.style,{position:"relative"}),b=parseInt(e.getStyle(c,"z-index"),10),isNaN(b)&&(b=0),e.extend(c.style,{zIndex:b}),e.extend(a.style,{zIndex:b-1}))}),h.bind("CancelUpload",function(){b&&b.abort&&b.abort()}),h.bind("UploadFile",function(a,c){function f(d){function k(){function f(d){var h=
0,m="----pluploadboundary"+e.guid(),n,r="";b=new XMLHttpRequest;b.upload&&(b.upload.onprogress=function(b){c.loaded=Math.min(c.size,q+b.loaded-h);a.trigger("UploadProgress",c)});b.onreadystatechange=function(){var f,g;if(b.readyState==4){try{f=b.status}catch(h){f=0}if(f>=400)a.trigger("Error",{code:e.HTTP_ERROR,message:e.translate("HTTP Error."),file:c,status:f,response:b.responseText||""});else{if(p){g={chunk:j,chunks:p,response:b.responseText,status:f};a.trigger("ChunkUploaded",c,g);q=q+z;if(g.cancelled){c.status=
e.FAILED;return}c.loaded=Math.min(c.size,(j+1)*u)}else c.loaded=c.size;a.trigger("UploadProgress",c);d=o=n=r=null;if(!p||++j>=p){c.status=e.DONE;a.trigger("FileUploaded",c,{response:b.responseText,status:f})}else k()}}};if(a.settings.multipart&&g.multipart){x.name=c.target_name||c.name;b.open("post",D,!0);e.each(a.settings.headers,function(a,c){b.setRequestHeader(c,a)});if("string"!==typeof d&&s.FormData){n=new FormData;e.each(e.extend(x,a.settings.multipart_params),function(a,b){n.append(b,a)});
n.append(a.settings.file_data_name,d);b.send(n);return}if("string"===typeof d){b.setRequestHeader("Content-Type","multipart/form-data; boundary="+m);e.each(e.extend(x,a.settings.multipart_params),function(a,b){r=r+("--"+m+'\r\nContent-Disposition: form-data; name="'+b+'"\r\n\r\n');r=r+(unescape(encodeURIComponent(a))+"\r\n")});y=e.mimeTypes[c.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream";r+="--"+m+'\r\nContent-Disposition: form-data; name="'+a.settings.file_data_name+
'"; filename="'+unescape(encodeURIComponent(c.name))+'"\r\nContent-Type: '+y+"\r\n\r\n"+d+"\r\n--"+m+"--\r\n";h=r.length-d.length;d=r;if(b.sendAsBinary)b.sendAsBinary(d);else if(g.canSendBinary){for(var w=new Uint8Array(d.length),v=0;v<d.length;v++)w[v]=d.charCodeAt(v)&255;b.send(w.buffer)}return}}D=e.buildUrl(a.settings.url,e.extend(x,a.settings.multipart_params));b.open("post",D,!0);b.setRequestHeader("Content-Type","application/octet-stream");d.encoding&&b.setRequestHeader("Content-Encoding",d.encoding);
e.each(a.settings.headers,function(a,c){b.setRequestHeader(c,a)});b.send(d.getData?d.getData():d)}var o,p,x,u,z,y,D=a.settings.url;if(!(c.status==e.DONE||c.status==e.FAILED||a.state==e.STOPPED)){x={name:c.target_name||c.name};if(h.chunk_size&&c.size>h.chunk_size&&(g.chunks||"string"==typeof d)){u=h.chunk_size;p=Math.ceil(c.size/u);z=Math.min(u,c.size-j*u);if("string"==typeof d)o=d.substring(j*u,j*u+z);else{var v=d,A=j*u,E=j*u+z,w;if(File.prototype.slice)try{v.slice(),o=v.slice(A,E)}catch(C){o=v.slice(A,
E-A)}else o=(w=File.prototype.webkitSlice||File.prototype.mozSlice)?w.call(v,A,E):null}x.chunk=j;x.chunks=p}else z=c.size,o=d;"string"!==typeof o&&n&&g.cantSendBlobInFormData&&g.chunks&&a.settings.chunk_size?(n.onload=function(){f(n.result)},n.readAsBinaryString(o)):f(o)}}var j=0,q=0,n="FileReader"in s?new FileReader:null;k()}var h=a.settings,d;d=y[c.id];g.jpgresize&&a.settings.resize&&/\.(png|jpg|jpeg)$/i.test(c.name)?G.call(a,c,a.settings.resize,/\.png$/i.test(c.name)?"image/png":"image/jpeg",function(a){a.success?
(c.size=a.data.length,f(a.data)):f(d)}):f(d)}),h.bind("Destroy",function(a){var b,f,g=j.body,d={inputContainer:a.id+"_html5_container",inputFile:a.id+"_html5",browseButton:a.settings.browse_button,dropElm:a.settings.drop_element};for(b in d)(f=j.getElementById(d[b]))&&e.removeAllEvents(f,a.id);e.removeAllEvents(j.body,a.id);a.settings.container&&(g=j.getElementById(a.settings.container));g.removeChild(j.getElementById(d.inputContainer))}),f({success:!0})):f({success:!1})}})})(window,document,plupload);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-position', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery-ui/jquery.ui.position.js' */
(function(c){c.ui=c.ui||{};var k=/left|center|right/,l=/top|center|bottom/,n=c.fn.position,o=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return n.apply(this,arguments);var b=c.extend({},b),a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),f=b.offset?b.offset.split(" "):[0,0],h,j,e;9===d.nodeType?(h=a.width(),j=a.height(),e={top:0,left:0}):d.setTimeout?(h=a.width(),j=a.height(),e={top:a.scrollTop(),left:a.scrollLeft()}):d.preventDefault?(b.at="left top",h=j=0,e={top:b.of.pageY,left:b.of.pageX}):
(h=a.outerWidth(),j=a.outerHeight(),e=a.offset());c.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=k.test(a[0])?a.concat(["center"]):l.test(a[0])?["center"].concat(a):["center","center"]);a[0]=k.test(a[0])?a[0]:"center";a[1]=l.test(a[1])?a[1]:"center";b[this]=a});1===g.length&&(g[1]=g[0]);f[0]=parseInt(f[0],10)||0;1===f.length&&(f[1]=f[0]);f[1]=parseInt(f[1],10)||0;"right"===b.at[0]?e.left+=h:"center"===b.at[0]&&(e.left+=h/2);"bottom"===b.at[1]?e.top+=j:"center"===b.at[1]&&
(e.top+=j/2);e.left+=f[0];e.top+=f[1];return this.each(function(){var a=c(this),d=a.outerWidth(),m=a.outerHeight(),k=parseInt(c.curCSS(this,"marginLeft",true))||0,l=parseInt(c.curCSS(this,"marginTop",true))||0,n=d+k+(parseInt(c.curCSS(this,"marginRight",true))||0),o=m+l+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},e),p;if(b.my[0]==="right")i.left=i.left-d;else if(b.my[0]==="center")i.left=i.left-d/2;if(b.my[1]==="bottom")i.top=i.top-m;else if(b.my[1]==="center")i.top=i.top-m/2;
p={left:i.left-k,top:i.top-l};c.each(["left","top"],function(a,e){if(c.ui.position[g[a]])c.ui.position[g[a]][e](i,{targetWidth:h,targetHeight:j,elemWidth:d,elemHeight:m,collisionPosition:p,collisionWidth:n,collisionHeight:o,offset:f,my:b.my,at:b.at})});c.fn.bgiframe&&a.bgiframe();a.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window),d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=0<d?b.left-d:Math.max(b.left-a.collisionPosition.left,
b.left)},top:function(b,a){var d=c(window),d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=0<d?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if("center"!==a.at[0]){var d=c(window),d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft(),g="left"===a.my[0]?-a.elemWidth:"right"===a.my[0]?a.elemWidth:0,f="left"===a.at[0]?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=0>a.collisionPosition.left?g+f+h:0<d?g+f+h:0}},top:function(b,
a){if("center"!==a.at[1]){var d=c(window),d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop(),g="top"===a.my[1]?-a.elemHeight:"bottom"===a.my[1]?a.elemHeight:0,f="top"===a.at[1]?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=0>a.collisionPosition.top?g+f+h:0<d?g+f+h:0}}}};c.offset.setOffset||(c.offset.setOffset=function(b,a){/static/.test(c.curCSS(b,"position"))&&(b.style.position="relative");var d=c(b),g=d.offset(),f=parseInt(c.curCSS(b,"top",!0),10)||0,h=parseInt(c.curCSS(b,
"left",!0),10)||0,g={top:a.top-g.top+f,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)},c.fn.offset=function(b){var a=this[0];return!a||!a.ownerDocument?null:b?c.isFunction(b)?this.each(function(a){c(this).offset(b.call(this,a,c(this).offset()))}):this.each(function(){c.offset.setOffset(this,b)}):o.call(this)});c.curCSS||(c.curCSS=c.css)})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-progress-indicator', location = 'node_modules/@atlassian/aui/src/js/aui/progress-indicator.js' */
("undefined"===typeof window?global:window).__cb31fb29564cb1430c38ca8ab010b61f=function(){function g(a,b,c){(0,h.recomputeStyle)(a);a.css("width",100*c+"%");b.attr("data-value",c)}var d={};"use strict";Object.defineProperty(d,"__esModule",{value:!0});var a=__307d3e18fd611f85395c67cddeb1fe24,i=a&&a.__esModule?a:{"default":a},h=__c0311e8841bd8637e025a8fb1474f693,a=(a=__4d02fe17b8e885a34493e34af3d145dd)&&a.__esModule?a:{"default":a},j={update:function(a,b){var c=(0,i.default)(a).first(),d=c.children(".aui-progress-indicator-value"),
e=c.attr("data-value"),f=parseFloat(e)||0;if(!(e&&f===b))return e||d.css("width",0),"number"===typeof b&&(1>=b&&0<=b)&&(c.trigger("aui-progress-indicator-before-update",[f,b]),e=(document.body||document.documentElement).style,"string"===typeof e.transition||"string"===typeof e.WebkitTransition?(d.one("transitionend webkitTransitionEnd",function(){c.trigger("aui-progress-indicator-after-update",[f,b])}),g(d,c,b)):(g(d,c,b),c.trigger("aui-progress-indicator-after-update",[f,b]))),c},setIndeterminate:function(a){var a=
(0,i.default)(a).first(),b=a.children(".aui-progress-indicator-value");a.removeAttr("data-value");(0,h.recomputeStyle)(a);b.css("width","100%")}};(0,a.default)("progressBars",j);d.default=j;return d=d["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:file-uploader', location = 'js/filestore-uploader.js' */
define("confluence-drag-and-drop/filestore-uploader",["ajs","jquery","underscore"],function(f,h,j){function k(){var a={},b=parseInt(f.Meta.get("page-id"),10);b?a.pageId=b:a.draftId=parseInt(f.Meta.get("draft-id"),10);if(b=f.Meta.get("drag-and-drop-entity-id"))a.dragAndDropEntityId=b;return a}function l(a){return{generalError:{message:"Error connecting to server",fileIds:a}}}function m(a,b){try{var c=JSON.parse(a.responseText);if(c.fileErrors&&c.fileErrors.length)return i(c);if(c.error)return{generalError:{message:c.error,
fileIds:b}}}catch(g){return l(b)}}function i(a){var b=[];a.fileErrors&&a.fileErrors.length&&j.each(a.fileErrors,function(a){b.push({id:a.clientFileId,message:a.errorMessage})});return{fileErrors:b}}function d(){}d.prototype.filesAdded=function(a,b,c){var g=h.Deferred();if(!b)return g.resolve({}).promise();for(var e=[],a=0;a<b.length;a++){var d=b[a];d.status!==plupload.FAILED&&e.push(d)}if(0===e.length)return g.resolve({}).promise();b=k();b.files=j.map(e,function(a){return{name:a.name,clientFileId:a.id,
size:a.size}});h.ajax({type:"POST",url:f.contextPath()+"/rest/drag-and-drop/1/filestore/upload/validate",data:h.toJSON(b),contentType:"application/json"}).done(function(a){c.uploadToken=a.token;c.clientId=a.clientId;c.fileStoreUrl=a.fileStoreUrl;g.resolve(i(a))}).fail(function(a){g.resolve(m(a,j.map(e,function(a){return a.id})))});return g.promise()};d.prototype.beforeUpload=function(a,b,c){a.settings.url=plupload.buildUrl(c.fileStoreUrl+"/file/binary",{token:c.uploadToken,client:c.clientId})};d.prototype.fileUploaded=
function(a,b,c,g){var e=h.Deferred();if(c.response){var a=JSON.parse(c.response).data,c=b.name.substr(b.name.lastIndexOf(".")+1),d=a.id,i=k();j.extend(i,{fileStoreId:d,fileName:a.name,mimeType:plupload.mimeTypes[c.toLowerCase()]||f.DragAndDropUtils.defaultMimeType,size:a.size,minorEdit:!0,renderEditorHTML:!!g,contentType:f.Meta.get("content-type")});h.ajax({type:"POST",url:f.contextPath()+"/rest/drag-and-drop/1/filestore/upload",data:h.toJSON(i),contentType:"application/json"}).done(function(a){e.resolve({fileId:b.id,
fileServerId:a.id,htmlForEditor:a.htmlForEditor})}).fail(function(a){a=m(a,[b.id]);e.reject(a)})}else e.reject(l([b.id]));return e.promise()};d.prototype.serverError=function(a){var b;try{var c=JSON.parse(a).error;c&&(b=c.code)}catch(d){f.debug("Failed to parse server error response")}return b};return d});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:file-uploader', location = 'js/upload-action-uploader.js' */
define("confluence-drag-and-drop/upload-action-uploader",["ajs","jquery","underscore"],function(a,e){function c(){}var g=/^\w+:\/\/[^\/?#]+/.exec(location.href);c.prototype.filesAdded=function(){return e.Deferred().resolve().promise()};c.prototype.beforeUpload=function(h,d){var c=g+a.contextPath()+"/plugins/drag-and-drop/upload.action",b={},e=d.name.substr(d.name.lastIndexOf(".")+1),f=parseInt(a.Meta.get("page-id"),10);f?b.pageId=f:b.draftId=parseInt(a.Meta.get("draft-id"),10);if(f=a.Meta.get("drag-and-drop-entity-id"))b.dragAndDropEntityId=
f;b.filename=d.name;b.size=d.size;b.minorEdit=!0;b.spaceKey=a.Meta.get("space-key")||"";b.mimeType=plupload.mimeTypes[e.toLowerCase()]||a.DragAndDropUtils.defaultMimeType;b.atl_token=a.Meta.get("atl-token");b.contentType=a.Meta.get("content-type");b.isVFMSupported=!0;h.settings.url=plupload.buildUrl(c,b)};c.prototype.fileUploaded=function(a,d,c){a=JSON.parse(c.response);return e.Deferred().resolve({fileId:d.id,fileServerId:a.data.id,htmlForEditor:a.htmlForEditor}).promise()};c.prototype.serverError=
function(c){var d;try{d=e.parseJSON(c).actionErrors[0]}catch(g){a.debug("Failed to parse server error response")}return d};return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:file-uploader', location = 'js/files-uploader-factory.js' */
define("confluence-drag-and-drop/files-uploader-factory",["ajs","confluence-drag-and-drop/filestore-uploader","confluence-drag-and-drop/upload-action-uploader"],function(a,b,c){return{get:function(){return a.DarkFeatures.isEnabled("filestore.direct.upload")&&!a.DarkFeatures.isEnabled("filestore.direct.upload.force.disable")?new b:new c}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/drag-and-drop-utils.js' */
define("confluence-drag-and-drop/drag-and-drop-utils",["jquery","window","ajs"],function(c,d,f){return{defaultMimeType:"application/octet-stream",base:/^\w+:\/\/[^\/?#]+/.exec(location.href),bindDragEnter:function(a,b){if(a.addEventListener)(b=this.isFireFox35OrLater()?this.firefox35DragEnterAndOverCallbackWrapper(b):b)&&a.addEventListener("dragenter",b,!1);else if(a.attachEvent){var e=this.ieDragEnterAndDragOverCallbackWrapper(b);a.attachEvent("ondragenter",e);c(d).unload(function(){a.detachEvent("ondragenter",
e)})}},bindDragOver:function(a,b){if(a.addEventListener)this.isFireFox35OrLater()?b=this.firefox35DragEnterAndOverCallbackWrapper(b):c.browser.safari&&(b=this.safariDragOverCallbackWrapper(b)),b&&a.addEventListener("dragover",b,!1);else if(a.attachEvent){var e=this.ieDragEnterAndDragOverCallbackWrapper(b);a.attachEvent("ondragover",e);c(d).unload(function(){a.detachEvent("ondragover",e)})}},bindDragLeave:function(a,b){b&&(c.browser.safari||this.isFireFox35OrLater()||tinymce.isIE11?a.addEventListener("dragleave",
b,!1):c.browser.msie?(a.attachEvent("ondragleave",b),c(d).unload(function(){a.detachEvent("ondragleave",b)})):c.browser.mozilla&&a.addEventListener("dragexit",b,!1))},bindDrop:function(a,b){if(c.browser.mozilla){var e=this.isFireFox35OrLater()?"drop":"dragdrop";a.addEventListener(e,this.mozillaDropCallbackWrapper(b),!1)}else if(c.browser.msie){if(b){var g=function(a){b(a);f.DragAndDropUtils.stopPropagation(a)};a.attachEvent("ondrop",g);c(d).unload(function(){a.detachEvent("ondrop",g)})}}else c.browser.safari&&
b&&a.addEventListener("drop",function(a){b(a);f.DragAndDropUtils.stopPropagation(a)},!1)},niceSize:function(a){for(var b=" B; kB; MB; GB; TB; PB; EB; ZB; YB".split(";"),c=0,d=b.length;c<d;c++)if(a<Math.pow(2,10*(c+1)))return(!c?a:(a/Math.pow(2,10*c)).toFixed(2))+b[c];return(a/Math.pow(2,10*(c+1))).toFixed(2)+b[b.length-1]},ieDragEnterAndDragOverCallbackWrapper:function(a){return function(b){if(b=b||d.event)a&&a(b),c.browser.msie&&(b.returnValue=!1)}},safariDragOverCallbackWrapper:function(a){return function(b){if((b=
b||d.event)&&"file"!==b.target.type)a&&a(b),-1!=c.inArray("public.file-url",b.dataTransfer.types)&&b.preventDefault()}},mozillaDropCallbackWrapper:function(a){return function(b){b&&(a&&a(b),b.preventDefault(),f.DragAndDropUtils.isFireFox35OrLater()?f.DragAndDropUtils.firefox35FileDataInEvent(b)&&b.stopPropagation():b.stopPropagation())}},firefox35DragEnterAndOverCallbackWrapper:function(a){return function(b){b&&(a&&a(b),f.DragAndDropUtils.firefox35FileDataInEvent(b)&&b.preventDefault())}},firefox35FileDataInEvent:function(a){return-1!=
c.inArray("application/x-moz-file",a.dataTransfer.types)},stopPropagation:function(a){if(a=a||d.event)a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},preventDefault:function(a){if(a=a||d.event)a.preventDefault?a.preventDefault():a.returnValue=!1},isFireFox35OrLater:function(){return!this.isFireFox30()&&-1!=c.browser.version.indexOf("1.9.")},isFireFox30:function(){return-1!=c.browser.version.indexOf("1.9.0")},enableDropZoneOn:function(a,b){if(!a)throw Error("Cannot enable drop zone on invalid container. Received: "+
a);b=b||f.DragAndDrop.defaultDropHandler;this.bindDragEnter(a);this.bindDragOver(a);this.bindDragLeave(a);this.bindDrop(a,b)}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/drag-and-drop-utils","AJS.DragAndDropUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/default-drop-handler.js' */
define("confluence-drag-and-drop/default-drop-handler","ajs document confluence/meta jquery confluence/legacy underscore plupload window confluence-drag-and-drop/files-uploader-factory".split(" "),function(c,j,p,k,i,o,m,u,v){var h={},n=v.get();h.initialise=function(){function q(){var b=k(".aui-blanket:visible");return b.length&&b.css("visibility")!=="hidden"&&!k("#drag-and-drop-progress-dialog:visible").length}function h(){for(;f.files.length;)f.removeFile(f.files[0])}var b,r=function(c,a,d){if(!a)return false;
if(a.generalError){o.each(a.generalError.fileIds,function(e){b.renderError(e,a.generalError.message);(e=c.getFile(e))&&c.removeFile(e)});return true}if(a.fileErrors){o.each(a.fileErrors,function(a){b.renderError(a.id,a.message);(a=c.getFile(a.id))&&c.removeFile(a)});return a.fileErrors.length===d.length}},l=j.getElementById("fileuploadShim");if(!l){l=j.createElement("div");l.setAttribute("id","fileuploadShim");j.body.appendChild(l)}var f=new m.Uploader({runtimes:"html5",dragdrop:true,drop_element:k("body")[0],
browse_button:l.getAttribute("id"),multipart:false,stop_propagation:true,max_file_size:+p.get("global-settings-attachment-max-size")}),s=function(){b=c.Editor&&c.Editor.isVisible()&&i.EditorUploadProgressDialog?i.EditorUploadProgressDialog:new c.DragAndDropProgressDialog};b=null;f.init();var t={};c.DragAndDrop.defaultDropHandler=null;f.bind("FilesAdded",function(g,a){function d(a,d){!b&&s();for(var g=0;g<d.length;g++){var e=d[g];e.status!==m.FAILED?b.render({workId:e.id,status:e.status,file:e}):a.removeFile(e)}n.filesAdded(a,
d,t).then(function(e){e=r(a,e,d);b.show();if(e)b.showCloseButton();else{b.cancelListeners.push(function(e,d){var g=a.getFile(d.workId);g&&a.removeFile(g);b.renderInfo(d.workId,"File was manually removed from the queue.")});f.start()}})}if(q())h();else if(c.Editor&&c.Editor.isVisible()){var e=o.reject(a,function(a){return a.status===m.FAILED});i.Uploader&&i.Uploader.trigger("FilesAdded",e)}else c.UploadUtils.filterFiles(g,a,d)});f.bind("BeforeUpload",function(b,a){n.beforeUpload(b,a,t)});
f.bind("UploadProgress",function(c,a){b.renderUpdateToBytesUploaded(a.id,a.loaded,a.size);b.hideCloseButton()});f.bind("FileUploaded",function(c,a,d){n.fileUploaded(c,a,d).done(function(){b.renderComplete(a.id)}).fail(function(b){r(c,b,[a])}).always(function(){if(!f.total.queued&&b){b.showCloseButton();b.hasErrors()||setTimeout(function(){b.hide();b.clearRenderOutput();u.location.reload()},1E3)}})});f.bind("Error",function(f,a){if(q())h();else if(c.Editor&&c.Editor.isVisible())i.Uploader&&i.Uploader.trigger("Error",
a);else{var d;if(a.response){d=n.serverError(a.response)||a.message;b.renderError(a.file.id,d);b.showCloseButton();c.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.server-unknown"})}else{d=a.message;if(a.code===m.FILE_SIZE_ERROR){d=c.format("is too big to upload. Files must be less than {0}.",c.DragAndDropUtils.niceSize(p.get("global-settings-attachment-max-size")));c.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.file-size"})}else if(a.code===c.UploadUtils.ErrorCode.FILE_IS_A_FOLDER_ERROR){d=
"might be a folder or an unsupported file type.";c.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.file-type"})}!b&&s();b.render({workId:a.file.id,status:a.file.status,file:a.file,errorMessage:d});if(!b.isVisible()){b.show();b.showCloseButton()}}}})};h.bind=function(){function c(){k(j).unbind("dragenter",c);h.initialise()}k(j).bind("dragenter",c)};return h});require("confluence/module-exporter").safeRequire("confluence-drag-and-drop/default-drop-handler",function(c){require("ajs").toInit(c.bind)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/observable-array-list.js' */
define("confluence-drag-and-drop/observable-array-list",["ajs","jquery"],function(g,f){var e=function(){this._data=[];this._pushObservers=[]};e.prototype={push:function(a){this._data.push(a);this._notifyPushObservers(a)},length:function(){return this._data.length},remove:function(a,b){return this._remove.call(this._data,a,b)},_remove:function(a,b){var c=this.slice((b||a)+1||this.length);this.length=0>a?this.length+a:a;return this.push.apply(this,c)},shift:function(){return this._data.shift()},removeByPredicate:function(a){for(var b=
[],c=this._data.length,d=0;d<c;d++)a(this._data[d])||b.push(this._data[d]);this._data=b;return c-this._data.length},addPushObserver:function(a){if(f.isFunction(a))this._pushObservers.push(a);else throw Error("Attempting to add an observer that is not a function: "+a);},_notifyPushObservers:function(a){for(var b=0,c=this._pushObservers.length;b<c;b++)this._pushObservers[b](a)}};return e});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/observable-array-list","AJS.ObservableArrayList");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/upload-progress-dialog.js' */
define("confluence-drag-and-drop/upload-progress-dialog",["ajs","plupload","jquery","document"],function(b,g,c,i){var h=function(a){var d=this,e={header:"Attach files",width:600,height:400};this._options=c.extend({},e,a);this.id="drag-and-drop-progress-dialog";this._dialog=new b.Dialog(this._options.width,this._options.height,this.id);this._dialog.addHeader(this._options.header).addPanel("Panel 1",b.DragAndDrop.Templates.uploadFileStatusContainer()).addButton("Done",
function(){d.hide();d.clearRenderOutput()},"all-file-uploads-complete");this._dialog.getCurrentPanel().setPadding(0);this._$closeButton=this.find(".all-file-uploads-complete");c(i).keydown(function(a){if(27===a.which)return d._$closeButton.prop("disabled")||(d.hide(),d.clearRenderOutput()),b.stopEvent(a)});this._$container=this.find("#upload-statuses");this._workIdsOfFilesInProgress=[];this.cancelListeners=[];this.onShowListeners=[];this._hidden=!0;this.hasErrorMessage=!1};h.prototype={show:function(){this._hidden&&
(this._dialog.show(),this._hidden=!1,c.each(this.onShowListeners,function(a,c){c()}));this.hideCloseButton()},hide:function(){this._hidden||(this._dialog.hide(),this._hidden=!0)},isVisible:function(){return!this._hidden},_getProgressElementId:function(a){return"file-"+a+"-progress"},render:function(a){this._workIdsOfFilesInProgress.push(a.workId);var d=this._getProgressElementId(a.workId);this._$container.append(b.DragAndDrop.Templates.fileStatus({filename:a.file.name,progressElementId:d,workId:a.workId,
showCancel:a.status==g.QUEUED}));b.progressBars.update("#"+d,0);a.status==g.QUEUED?c("#file-upload-cancel-"+a.workId).click(function(b){return function(d){c.each(b,function(c,b){b(d,a)})}}(this.cancelListeners)):this.renderError(a.workId,a.errorMessage)},renderError:function(a,d){if(-1==c.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var e=c("#file-status-block-"+a),f=b.escapeEntities(e.attr("data-filename"));e.html(aui.message.warning({content:d,titleContent:f}));
this.hasErrorMessage=!0},renderInfo:function(a,d){if(-1==c.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var e=c("#file-status-block-"+a),f=b.escapeEntities(e.attr("data-filename"));e.html(aui.message.info({content:d,titleContent:f}));this.hasErrorMessage=!0},hasErrors:function(){return this.hasErrorMessage},renderUpdateToBytesUploaded:function(a,d,e){if(-1==c.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var f=
b.DragAndDropUtils.niceSize(d),g=c("#file-"+a+"-uploaded");g.length?g.text(f):c("#file-upload-progress-text-"+a).html(b.DragAndDrop.Templates.uploadFileStatusProgressMessage({fileId:a,uploadedSizeNice:f,totalSizeNice:b.DragAndDropUtils.niceSize(e)}));b.progressBars.update("#"+this._getProgressElementId(a),d/e)},renderComplete:function(a){if(-1==c.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);c("#cancel-or-success-placeholder-"+a).html(b.DragAndDrop.Templates.uploadFileStatusSuccessIcon())},
renderCancelled:function(a){if(-1==c.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);b.progressBars.setIndeterminate("#"+this._getProgressElementId(a));c("#file-upload-progress-text-"+a).html("Cancelled.");c("#cancel-or-success-placeholder-"+a).hide()},clearRenderOutput:function(){this.showCloseButton();this._$container.empty();this._workIdsOfFilesInProgress=[];this.hasErrorMessage=!1},hideCloseButton:function(){this._$closeButton.hide()},
showCloseButton:function(){this._$closeButton.show()},find:function(a){return this._dialog.getCurPanel().page.body.parent().find(a)}};return h});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/upload-progress-dialog","AJS.DragAndDropProgressDialog");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'templates/drag-and-drop.soy' */
// This file was automatically generated from drag-and-drop.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AJS.DragAndDrop.Templates.
 */

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.DragAndDrop == 'undefined') { AJS.DragAndDrop = {}; }
if (typeof AJS.DragAndDrop.Templates == 'undefined') { AJS.DragAndDrop.Templates = {}; }


AJS.DragAndDrop.Templates.fileStatus = function(opt_data, opt_ignored) {
  return '<li id="file-status-block-' + soy.$$escapeHtml(opt_data.workId) + '" data-filename="' + soy.$$escapeHtml(opt_data.filename) + '"><div class="aui-group aui-group-split file-status-item"><div class="aui-item"><label>' + soy.$$escapeHtml(opt_data.filename) + '</label></div><div class="aui-item"><div id="file-upload-progress-text-' + soy.$$escapeHtml(opt_data.workId) + '" class="file-upload-progress-text">' + soy.$$escapeHtml("Waiting...") + '</div></div></div><div class="file-upload-progress-block"><div class="aui-progress-indicator" id="' + soy.$$escapeHtml(opt_data.progressElementId) + '"><span class="aui-progress-indicator-value"></span></div>' + ((opt_data.showCancel) ? '<div id="cancel-or-success-placeholder-' + soy.$$escapeHtml(opt_data.workId) + '" class="cancel-or-success-placeholder ui-state-default"><span id="file-upload-cancel-' + soy.$$escapeHtml(opt_data.workId) + '" class="aui-icon aui-icon-small aui-iconfont-remove" title="' + soy.$$escapeHtml("Cancel Upload") + '">' + soy.$$escapeHtml("Cancel") + '</span></div>' : '') + '</div></li>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.fileStatus.soyTemplateName = 'AJS.DragAndDrop.Templates.fileStatus';
}


AJS.DragAndDrop.Templates.uploadFileStatusContainer = function(opt_data, opt_ignored) {
  return '<ul id="upload-statuses"></ul>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.uploadFileStatusContainer.soyTemplateName = 'AJS.DragAndDrop.Templates.uploadFileStatusContainer';
}


AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon = function(opt_data, opt_ignored) {
  return '<span class=\'aui-icon aui-icon-small aui-iconfont-success\'></span>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon.soyTemplateName = 'AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon';
}


AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage = function(opt_data, opt_ignored) {
  return '<span id="file-' + soy.$$escapeHtml(opt_data.fileId) + '-uploaded">' + soy.$$escapeHtml(opt_data.uploadedSizeNice) + '</span> ' + soy.$$escapeHtml("of") + ' ' + soy.$$escapeHtml(opt_data.totalSizeNice);
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage.soyTemplateName = 'AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage';
}


AJS.DragAndDrop.Templates.dropZone = function(opt_data, opt_ignored) {
  return '<div class="attachments-drop-zone"><div class="drop-zone-image"></div><div class="drop-zone-text">' + soy.$$escapeHtml("Drop files here to attach them") + '</div></div>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.dropZone.soyTemplateName = 'AJS.DragAndDrop.Templates.dropZone';
}


AJS.DragAndDrop.Templates.dragOverlay = function(opt_data, opt_ignored) {
  return '<div id="dragOverlay"><div class="overlay-blanket"></div><div class="overlay-center"><p>' + soy.$$escapeHtml("Drop files to insert them into the page") + '</p></div><span class="overlay-baseline"></span><div class="overlay-drop-zone"></div></div>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.dragOverlay.soyTemplateName = 'AJS.DragAndDrop.Templates.dragOverlay';
}


AJS.DragAndDrop.Templates.dragAndDropTip = function(opt_data, opt_ignored) {
  return '<div class="attach-tip-discovery"><span class="img"></span><div class="text"><strong>' + soy.$$escapeHtml("Tip:") + ' </strong><p>' + soy.$$escapeHtml("Drop files straight into your page to insert them directly.") + '</p><div><a class="close-tip" href="#">' + soy.$$escapeHtml("Ok, got it!") + '</a></div></div></div>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.dragAndDropTip.soyTemplateName = 'AJS.DragAndDrop.Templates.dragAndDropTip';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/upload-utils.js' */
define("confluence-drag-and-drop/upload-utils",["ajs"],function(h){return{ErrorCode:{FILE_IS_A_FOLDER_ERROR:-602},filterFiles:function(d,a,g){for(var e=[],b=0,c=0;c<a.length;c++)if(4096>=a[c].nativeFile.size){var f=new FileReader;f.onload=function(){b++;e.push(this.currentFile);b===a.length&&g(d,e)};f.onerror=function(){d.removeFile(this.currentFile);d.trigger("Error",{code:h.UploadUtils.ErrorCode.FILE_IS_A_FOLDER_ERROR,message:"File is a folder",file:this.currentFile});b++;b===a.length&&g(d,e)};
f.currentFile=a[c];f.readAsText(a[c].nativeFile)}else b++,e.push(a[c]),b===a.length&&g(d,e)}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/upload-utils","AJS.UploadUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:util-resource', location = 'util/utils.js' */
define("confluence/ic/util/utils",["jquery","underscore","ajs","backbone","exports"],function(x,T,v,y,G){var i=window.top;var n={INLINE_COMMENTS:v.DarkFeatures.isEnabled("confluence-inline-comments"),RESOLVED_INLINE_COMMENTS:v.DarkFeatures.isEnabled("confluence-inline-comments-resolved"),RICH_TEXT_EDITOR:v.DarkFeatures.isEnabled("confluence-inline-comments-rich-editor"),DANGLING_COMMENT:v.DarkFeatures.isEnabled("confluence-inline-comments-dangling-comment")},u=["dateautocomplete","confluencemacrobrowser","propertypanel","jiraconnector","dfe"],o=["autoresize","confluenceleavecomment"],s=["code"];var D,r;function Q(){return T.clone(n)}function P(){return T.clone(u)}function k(){return T.clone(o)}function c(W,V){var Y;if(!W||!V){return}var U=x(W.containingElement);if(!U.is(".inline-comment-marker.valid")){U=x("<div/>").append(W.html).find(".inline-comment-marker.valid")}if(U.length>0&&e(U)){var X=U.first().data("ref");Y=V.findWhere({markerRef:X});return Y}}function e(U){return U.filter(function(){return x(this).text().length>0}).length>0}function h(U){return v.contextPath()+"/pages/viewpage.action?pageId="+v.Meta.get("latest-page-id")+"&focusedCommentId="+U+"#comment-"+U}function t(aa,Z,U){var X=Z.match(/(focusedCommentId|replyToComment)=(\d+)/);if(X==null){return}var W=X[1]==="replyToComment";var Y=parseInt(X[2],10);var V=aa.findWhere({id:Y});if(V!=null){p(aa,V,U,W)}else{x.ajax({url:v.contextPath()+"/rest/inlinecomments/1.0/comments/replies/"+Y+"/commentId"}).done(function(ab){V=aa.findWhere({id:ab});p(aa,V,U,W)})}}function p(X,W,U,V){if(W!=null){if(W.isResolved()){new U({collection:X,focusCommentId:W.get("id")}).render()}else{if(!W.isDangling()){y.trigger("ic:view",W,"permalink",{isReplyComment:V})}}}}function M(){if(v.Meta.get("current-user-avatar-url")){return v.contextPath()+v.Meta.get("current-user-avatar-url")}return v.Meta.get("static-resource-url-prefix")+"/images/icons/profilepics/anonymous.png"}function R(){return v.Meta.get("user-display-name")||v.Meta.get("current-user-fullname")}function a(W){if(typeof W.selectionStart==="number"){var U=W.value.length;W.selectionStart=U;W.selectionEnd=U}else{if(typeof W.createTextRange!=null){W.focus();var V=W.createTextRange();V.collapse(false);V.select()}}}function N(U){a(U);window.setTimeout(function(){a(U)},1)}function F(Z,Y){var W="webkitAnimationEnd oanimationend msAnimationEnd animationend";var V=Z.$wikiContent;var U=x.Deferred();if(Y){var aa=x(".inline-comment-marker.active");V.addClass("ic-fade-in-animation");V.one(W,function(){x(this).removeClass("ic-fade-in-animation")});Z.$el.addClass("ic-slide-in");Z.$el.one(W,function(){x(this).removeClass("ic-slide-in");aa.addClass("ic-highlight-pulse");aa.one(W,function(){aa.removeClass("ic-highlight-pulse")})});U.resolve()}else{V.bind(W,function(ab){if(ab.originalEvent.animationName=="ic-fade-out-animation"){Z.$wikiContent.removeClass("ic-fade-out-animation");Z.$wikiContent.css("opacity","0.5")}else{if(ab.originalEvent.animationName=="ic-fade-in-animation"){Z.$wikiContent.css("opacity","1");Z.$wikiContent.removeClass("ic-fade-in-animation");Z.$wikiContent.unbind(W)}}});V.addClass("ic-fade-out-animation");Z.$el.addClass("ic-slide-out");var X=function(){Z.$el.removeClass("ic-slide-out");Z._emptySidebar();z().css("padding-right","0");V.addClass("ic-fade-in-animation");V.css("position","static");U.resolve();Z.$el.off(W,X)};Z.$el.on(W,X)}return U.promise()}function l(U){var V=x(U).closest("a");if(!V.length){V=x(U).find("a")}return V}function B(U){U.each(function(){var V=l(this);V.length&&V.off("mousemove")})}function S(){return document.body.style.animation!==undefined||document.body.style.webkitAnimation!==undefined}function b(V){var U=V.parents(".expand-content.expand-hidden");U.each(function(W){x(this).siblings(".expand-control").click()})}function w(V){var U=v.Rte&&v.Rte.getEditor();if(V===true){if(O()&&U&&U.isDirty()){return confirm("Your comment will be lost.")}}else{if(U&&U.isDirty()&&Confluence.Editor&&!Confluence.Editor.getContentType){return confirm("Your comment will be lost.")}}return true}function O(){return !!x(".ic-sidebar #wysiwygTextarea_ifr").length}function H(){return v.Meta.get("use-keyboard-shortcuts")&&Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.enabled}function q(U){U.$("button.ic-action-hide").tooltip({gravity:"se"});U.$("#ic-nav-next").tooltip({gravity:"s"});U.$("#ic-nav-previous").tooltip({gravity:"s"})}function C(Y){if(L()){Y.css("padding-bottom","20px");return}var W=Y.height();var X=Y.offset().top;var V=X+W;var Z=this.getPageContainer().offset().top;var U=V-Z;this.getPageContainer().css({"min-height":U+"px"})}function A(Y){Y=Y.closest(".ic-display-comment-view");var X=this;var V=x(".confluence-embedded-image, .confluence-embedded-file img",Y);var W=V.length;var U=0;if(W>0){V.off("load").one("load",function(){if(++U===W){X.recalculateContentHeight(Y)}}).each(function(){if(this.complete){x(this).load()}})}}function L(){if(r===undefined){r=!!E().length}return r}function z(){return x("#content")}function E(){if(D===undefined){D=x("#splitter-content")}return D}function g(X,W,V){V=(typeof V!=="undefined")?V:(window.location!==window.parent.location);var U=function(){var Z=W&&W.is(":visible");if(X&&Z){var Y=W.offset().top-X;x(i).scrollTop(Y)}};if(V){setTimeout(U,1)}else{U()}}function K(V,W){var Y=x(i).scrollTop();var X=Y+V-W;var U=x.Deferred();x({scrollTop:Y}).animate({scrollTop:X},{duration:100,step:function(Z){x(i).scrollTop(Z)},complete:U.resolve});return U.promise()}function d(V){var U=x.Deferred();x.ajax({url:v.contextPath()+"/rest/api/content/"+V+"?expand=body.editor",type:"GET",dataType:"json",contentType:"application/json; charset=utf-8"}).then(function(W){var X=W.body.editor.value;U.resolve(X)}).fail(function(W,Y,X){U.reject(W,Y,X)});return U.promise()}function J(U){var V=U.closest(".conf-macro");return(V.data("hasbody")===false||U.find('.conf-macro[data-hasbody="false"]').length>0)||s.indexOf(V.data("macro-name"))!=-1}function j(U){return U.closest(".user-mention").length>0||U.find(".user-mention").length>0}function m(U){return U.closest("a[href^='/']:not('.user-mention')").length>0||U.find("a[href^='/']:not('.user-mention')").length>0}function I(){var U={isDefault:true,path:v.Meta.get("static-resource-url-prefix")+"/images/icons/profilepics/default.png"};if(v.Meta.get("current-user-avatar-url")!=="/images/icons/profilepics/default.png"){U={isDefault:false,path:v.contextPath()+v.Meta.get("current-user-avatar-url")}}var V=v.Meta.get("remote-user");return{userName:V==""?null:V,displayName:v.Meta.get("current-user-fullname"),profilePicture:U}}function f(U){return U.offset().top-x(i).scrollTop()}G.overlappedSelection=c;G.focusedCommentUrl=h;G.showFocusedComment=t;G.getAuthorAvatarUrl=M;G.moveCaretToEnd=N;G.animateSidebar=F;G.getDarkFeatures=Q;G.getInlineLinks=l;G.removeInlineLinksDialog=B;G.isAnimationSupported=S;G.showHighlightContent=b;G.getUnsupportedRtePlugins=P;G.getSupportedRtePlugins=k;G.confirmProcess=w;G.getAuthorDisplayName=R;G.isKeyboardShortcutsEnable=H;G.addSidebarHeadingTooltip=q;G.hasEditorInSidebar=O;G.recalculateContentHeight=C;G.resizeContentAfterLoadingImages=A;G.isDocTheme=L;G.getPageContainer=z;G.getSplitterContent=E;G.scrollToCommentAfterToggleSideBar=g;G.getEditorFormat=d;G.containUnsupportedMacro=J;G.containInternalLink=j;G.containUserMetion=m;G.getCurrentUserInfo=I;G.getOffsetTopRelativeInWindowCoordinate=f;G.scrollToActiveHighlight=K});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:util-resource', location = 'util/text-highlighter.js' */
define("confluence/ic/util/text-highlighter",["jquery"],function(c){var a="ic-current-selection";function b(){c.textHighlighter.createWrapper=function(d){return c("<span></span>").addClass(d.highlightedClass)};this.$el=c("#content .wiki-content").first();if(this.$el.length>0){this.$el.textHighlighter({highlightedClass:a})}}b.prototype.highlight=function(e){if(this.$el.length===0){return}var d=c(this.$el.getHighlighter().doHighlight(e));return this.$el.getHighlighter().serializeHighlights(d)};b.prototype.removeHighlight=function(){if(this.$el.length===0){return}this.$el.getHighlighter().removeHighlights();return this};b.prototype.deserializeHighlights=function(d,e){if(this.$el.length===0){return}var f='<span class="inline-comment-marker" data-ref="'+e+'"></span>';return this.$el.getHighlighter().deserializeHighlights(d,f)};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/comment.js' */
define("confluence/ic/model/comment",["jquery","underscore","backbone","ajs","confluence/ic/util/utils","confluence/ic/model/reply-collection"],function(d,b,g,a,c,f){var e=g.Model.extend({defaults:{authorDisplayName:c.getAuthorDisplayName(),authorUserName:a.Meta.get("remote-user"),authorAvatarUrl:a.contextPath()+a.Meta.get("current-user-avatar-url"),body:"",originalSelection:"",parentCommentId:"0",lastFetchTime:d("meta[name=confluence-request-time]").attr("content"),hasDeletePermission:true,hasEditPermission:true,hasResolvePermission:true,resolveProperties:{resolved:false,resolvedTime:0},serializedHighlights:"",deleted:false},urlRoot:a.contextPath()+"/rest/inlinecomments/1.0/comments",initialize:function(h){h=h||{};this._setHighlights(h.markerRef);var i=this;this.replies=new f();this.replies.url=function(){return i.url()+"/replies"};this.set({containerId:a.Meta.get("latest-page-id")},{silent:true});if(c.getDarkFeatures().DANGLING_COMMENT&&a.Meta.get("page-id")===a.Meta.get("latest-page-id")){if(this.isDangling()&&!this.isResolved()){this.resolve(true,{wait:true,dangling:true,success:b.bind(function(){g.trigger("ic:open:dangled",this)},this),error:b.bind(function(){g.trigger("ic:resolve:dangled:failed",this)},this)})}}},validate:function(){if(!this.get("body")){return true}},resolve:function(h,i){i=i||{};this.save({},b.extend(i,{url:this.urlRoot+"/"+this.get("id")+"/resolve/"+h+"/dangling/"+(i.dangling===true)}))},isResolved:function(){return this.get("resolveProperties").resolved},isDangling:function(){return this.highlight===undefined},isDeleted:function(){return this.get("deleted")},_setHighlights:function(i){var h;if(i!==undefined){h=d("#content .wiki-content:first").find('.inline-comment-marker[data-ref="'+i+'"]')}else{h=d(".ic-current-selection")}if(h.length!==0){this.highlights=h;this.highlight=h.first()}else{this.highlights=undefined;this.highlight=undefined}},destroy:function(i){i=i?b.clone(i):{};var h=this;var k=i.success;var j=function(n,m){var l=m.error;m.error=function(o){if(l){l(n,o,m)}n.trigger("error",n,o,m)}};i.success=function(l){if(k){k(h,l,i)}};j(this,i);return this.sync("delete",this,i)}});return e});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/comment-collection.js' */
define("confluence/ic/model/comment-collection",["jquery","backbone","ajs","underscore","confluence/ic/model/comment"],function(d,f,a,b,e){var c=f.Collection.extend({model:e,initialize:function(){this.listenTo(this,"sort",this._removeCachedMarkers)},url:function(){var h=a.contextPath();var g=a.Meta.get("page-id");return h+"/rest/inlinecomments/1.0/comments?containerId="+g},getResolvedCount:function(){return this.getResolvedComments().length},getUnresolveCount:function(){return this.reject(function(g){return g.isResolved()===true&&g.isDeleted()===false}).length},getResolvedComments:function(){return this.filter(function(g){return g.isResolved()===true&&g.isDeleted()===false})},getResolvedCommentsDesc:function(){return b.sortBy(this.getResolvedComments(),function(g){return 0-g.get("resolveProperties").resolvedTime})},getNextCommentOnPage:function(){return this._getCommentAtRelativeOffset(1)},getPrevCommentOnPage:function(){return this._getCommentAtRelativeOffset(-1)},_getCommentAtRelativeOffset:function(j){var k=this.getCommentsOnPage();var g=this.findWhere({active:true});if(g===undefined||k.length<=1){return null}var i=b.pluck(k,"id");var h=b.indexOf(i,g.get("id"));return k[(h+j+k.length)%k.length]},getCommentsOnPage:function(){return this.filter(function(g){return((g.isResolved()===false)&&!g.isDangling()&&(g.isDeleted()===false))||g.get("active")===true})},getCommentsOnPageCount:function(){return this.getCommentsOnPage().length},getActiveIndexWithinPageComments:function(){var h=b.pluck(this.getCommentsOnPage(),"id");var g=this.findWhere({active:true});if(g===undefined){return null}var i=g.get("id");return b.indexOf(h,i)},comparator:function(h,g){if(this.markers===undefined){this.markers=d("#content .wiki-content:first").find(".inline-comment-marker")}if(h.highlight===undefined){return 1}if(g.highlight===undefined){return -1}return this.markers.index(h.highlight)-this.markers.index(g.highlight)},_removeCachedMarkers:function(){this.markers=undefined}});return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/reply.js' */
define("confluence/ic/model/reply",["jquery","backbone","ajs","confluence/ic/util/utils",],function(d,e,b,c){var a=e.Model.extend({defaults:{authorDisplayName:c.getAuthorDisplayName(),authorUserName:b.Meta.get("remote-user"),authorAvatarUrl:b.contextPath()+b.Meta.get("current-user-avatar-url"),body:"",commentId:"0",hasDeletePermission:true,hasEditPermission:!!b.Meta.get("remote-user")},urlRoot:function(){return b.contextPath()+"/rest/inlinecomments/1.0/comments/"+this.get("commentId")+"/replies"},sync:function(h,g,f){f=f||{};if(h==="create"){f.url=this.urlRoot()+"?containerId="+b.Meta.get("latest-page-id")}return e.sync.call(this,h,g,f)},validate:function(){if(!this.get("body")){return true}}});return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/reply-collection.js' */
define("confluence/ic/model/reply-collection",["backbone","confluence/ic/model/reply"],function(c,a){var b=c.Collection.extend({model:a});return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:app', location = 'analytics/ic-analytics.js' */
define("confluence/ic/analytics",["ajs","underscore","backbone"],function(b,c,d){var a={};c.extend(a,d.Events);a.start=function(){if(this.running===true){return}this.running=true;this.send=function(e,f){b.trigger("analytics",{name:e,data:f})};this.listenTo(d,"ic:highlight-panel-click",function(){this.send("confluence.highlight.actions.comment.inline")});this.listenTo(d,"ic:view",function(f,e){this.send("confluence.comment.inline.view");if(e==="nav"){this.send("confluence.comment.inline.view.nav")}if(e==="permalink"){this.send("confluence.comment.inline.view.permalink")}});this.listenTo(d,"ic:overlap",function(){this.send("confluence.comment.inline.overlap")});this.listenTo(d,"ic:edit",function(){this.send("confluence.comment.inline.edit")});this.listenTo(d,"ic:persist",function(){this.send("confluence.comment.inline.create")});this.listenTo(d,"ic:sidebar:close",function(){this.send("confluence.comment.inline.sidebar.close")});this.listenTo(d,"ic:reply:persist",function(){this.send("confluence.comment.inline.reply")});this.listenTo(d,"ic:delete ic:reply:delete",function(){this.send("confluence.comment.inline.delete")});this.listenTo(d,"ic:resolved",function(){this.send("confluence.comment.inline.resolved")});this.listenTo(d,"ic:unresolved",function(){this.send("confluence.comment.inline.unresolved")});this.listenTo(d,"ic:resolved:view",function(f){var e={total:f};this.send("confluence.comment.inline.resolved.view",e)});this.listenTo(d,"ic:resolved:dismiss:recovery",function(){this.send("confluence.comment.inline.resolved.dismiss")});this.listenTo(d,"ic:resolved:show:recovery",function(){this.send("confluence.comment.inline.resolved.discovery")});this.listenTo(d,"ic:open:dangled",function(f){var e={commentId:f.get("id"),pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.open.dangled",e)});this.listenTo(d,"ic:editor:load:fail",function(){var e={pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.editor.load.fail",e)});this.listenTo(d,"ic:resolve:dangled:failed",function(f){var e={commentId:f.get("id"),pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.resolved.dangled.failed",e)})};a.stop=function(){this.running=false;this.stopListening()};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:app', location = '/app/app.js' */
define("confluence/ic/app/app",["jquery","backbone","ajs","confluence/ic/model/comment","confluence/ic/model/comment-collection","confluence/ic/analytics","exports"],function(g,m,i,c,d,k,f){var a;var n=function(p){var q=require("confluence/ic/app/loader");q.init(p);return q};function l(){if(e.firstCaller){e.firstCaller=false;if(a&&a.isResolved()){n(e)}else{a=g.Deferred();WRM.require("wrc!inline-comments-load-sidebar").then(function(){a.resolve(n(e))})}}e.isSidebarLoaded=false;return a.promise()}var h=".ic-app";var e={firstCaller:true,isSidebarLoaded:false,commentCollection:null,views:{sidebar:null},init:function(){e.firstCaller=true;e.isSidebarLoaded=false;if(!e.commentCollection){e.commentCollection=new d()}e.commentCollection.reset();e.bindDOMEvents();e.fetch();e.bindQuickReloadEvents();e.bindAppEvents();e.focusOnComment();e.updateResolvedCount()},initAsync:function(){l().done(function(p){p.afterSyncCommentCollection();p.displayPermalinkedComment(e.commentCollection)})},destroy:function(){i.unbind(h)},bindDOMEvents:function(){var p="#view-resolved-comments";g("body").off("click"+h,p).on("click"+h,p,function(q){q.preventDefault();l().done(function(r){r.createResolvedCommentListView()})})},bindAppEvents:function(){var p="ic:resolved."+h;m.listenTo(m,p,function(){e.initAsync()})},fetch:function(){return e.commentCollection.fetch({cache:false}).done(function(){if(e.commentCollection.getCommentsOnPageCount()>0){e.initAsync()}if(e.commentCollection.getResolvedCount()>0){l().done(function(p){p.updateResolvedCommentCountInToolsMenu()})}})},focusOnComment:function(){var p=window.location.search;if(p.indexOf("focusedCommentId")!==-1){e.initAsync()}},bindQuickReloadEvents:function(){var p=function(s,r){var t=e.commentCollection.get(r);var q=false;if(t===undefined){t=new c({id:r});q=true}t.fetch({success:function(u){u._setHighlights(u.get("markerRef"));if(q){e.commentCollection.add(u)}else{t.replies.isFetched=false}m.trigger("ic:view",t,"quickreload")}})};i.unbind("qr:show-new-thread"+h).bind("qr:show-new-thread"+h,function(r,q){l().done(function(){p(r,q)})});i.unbind("qr:add-new-highlight"+h).bind("qr:add-new-highlight",function(s,r,q){l().done(function(){i.trigger("qr:add-new-highlight-text",[r,q])})})},updateResolvedCount:function(){var p=g("#view-resolved-comments>span");p.text("Resolved comments"+i.format(" ({0})",e.commentCollection.getResolvedCount()))}};function b(){g(".tipsy").remove()}function o(){k.start();b();e.init();var p="com.atlassian.confluence.plugins.confluence-inline-comments:create-inline-comment";if(Confluence&&Confluence.HighlightAction){Confluence.HighlightAction.registerButtonHandler(p,{onClick:function(q){l().done(function(r){if(!e.isSidebarLoaded){e.isSidebarLoaded=true;r.loadSidebarOnClick(q)}})},shouldDisplay:Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_ONLY})}}function j(){b();e.destroy()}f.init=o;f.destroy=j});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:bootstrap', location = '/app/bootstrap.js' */
require(["jquery","ajs","skate","confluence/ic/app/app"],function(h,d,b,g){var f=h("#confluence-ui").length>0;if(!f){var c=d.Meta.get("page-id");var a=d.Meta.get("latest-page-id");if(c&&(c===a)){h(g.init)}}var e="view-page-body";b(e,{type:b.types.CLASS,attributes:{"data-content-id":{updated:function(i,j){g.init({contentId:i.newValue})}}},attached:function(i){g.init()},detached:function(i){g.destroy()}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-amd-resources', location = '/js/amd/confluence-amd.js' */
define("confluence",function(){return Confluence});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-amd-resources', location = '/js/amd/tinymce-amd.js' */
define("tinymce",function(){return tinymce});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/view-file-macro-utils.js' */
define("vfm/view-file-macro-utils",[],function(){var a={DEFAULT_HEIGHT:"250",DEFAULT_HEIGHT_IN_COMMENT:"150",THUMBNAIL_STATUS_IN_PROGRESS:202,THUMBNAIL_STATUS_CONVERTED:200,THUMBNAIL_STATUS_ERROR:415,THUMBNAIL_STATUS_BUSY:429,THUMBNAIL_POLLING_PERIOD:1000,THUMBNAIL_POLLING_BACKOFF_RATIO:1.25,MAP_NICE_TYPE_TO_TEXT:{"pdf document":"PDF","word document":"Document","excel spreadsheet":"Spreadsheet","powerpoint presentation":"Presentation","generic file":"File"},getFileNameFromUrl:function(b){if(!b){return""}var c=b.indexOf("#");c=(c>=0)?c:b.length;b=b.substring(0,c);c=b.indexOf("?");c=(c>=0)?c:b.length;b=b.substring(0,c);c=b.lastIndexOf("/");b=b.substring(c+1,b.length);return decodeURIComponent(b)},isSupportPointerEvents:function(){var b=document.createElement("x");b.style.cssText="pointer-events:auto";return b.style.pointerEvents==="auto"},getParameterByName:function(d,c){var e=d.indexOf("#");if(e>=0){d=d.substring(0,e)}var b=new RegExp(c+"=([^&]*)","i").exec(d);return b?decodeURIComponent(b[1]):null},addParamsToUrl:function(b,h){var f="";if(b.indexOf("?")===-1){f="?"}else{f="&"}var e=Object.keys(h);for(var d=0;d<e.length;d++){var c=e[d];var g=h[c];if(d>0){f+="&"}f+=c+"="+g}return b+f},getFileTypeTextFromNiceType:function(b){b=b?b.toLowerCase():"";return this.MAP_NICE_TYPE_TO_TEXT[b]?this.MAP_NICE_TYPE_TO_TEXT[b]:b}};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/services/conversion-service.js' */
define("vfm/services/conversion-service",["ajs","jquery"],function(a,b){return{postThumbnailConversionResults:function(c){var d=a.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/results";var e=Object.keys(c);var f=_.map(e,function(g){return{id:g,v:c[g].version}});return b.ajax({type:"POST",url:d,contentType:"application/json",data:JSON.stringify(f)})},getThumbnailUrl:function(d,c){return a.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/"+d+"/"+c}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:file-types-utils-resources', location = 'utils/file-types-utils.js' */
define("confluence-editor/utils/file-types-utils",[],function(){var e={"aui-iconfont-file-image":"image/gif image/jpeg image/pjpeg image/png image/tiff image/bmp".split(" "),"aui-iconfont-file-pdf":["application/pdf"],"aui-iconfont-file-video":"audio/mpeg audio/x-wav audio/mp3 audio/mp4 video/mpeg video/quicktime video/mp4 video/x-m4v video/x-flv video/x-ms-wmv video/avi video/webm video/vnd.rn-realvideo".split(" "),"aui-iconfont-file-code":"text/html text/xml text/javascript application/javascript application/x-javascript text/css text/x-java-source".split(" "),
"aui-iconfont-file-doc":["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"aui-iconfont-file-xls":["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],"aui-iconfont-file-ppt":["application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation"],"aui-iconfont-file-txt":["text/plain"],"aui-iconfont-file-zip":["application/zip","application/java-archive"]},b={},c;for(c in e)for(var f=
e[c],d=0,g=f.length;d<g;d++)b[f[d]]=c;return{getAUIIconFromMime:function(a){return b[a]||"aui-iconfont-file-generic"},isImage:function(a){return b[a]&&0===a.indexOf("image/")}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/utils/file-types-utils","AJS.Confluence.FileTypesUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-soy-resources', location = '/templates/embedded-file-view.soy' */
// This file was automatically generated from embedded-file-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.ViewFileMacro.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.ViewFileMacro == 'undefined') { Confluence.ViewFileMacro = {}; }
if (typeof Confluence.ViewFileMacro.Templates == 'undefined') { Confluence.ViewFileMacro.Templates = {}; }


Confluence.ViewFileMacro.Templates.embeddedFile = function(opt_data, opt_ignored) {
  return '<span class="confluence-embedded-file-wrapper"><a class="confluence-embedded-file" href="' + soy.$$escapeHtml(opt_data.fileSrc) + '" data-nice-type="' + soy.$$escapeHtml(opt_data.niceType) + '" data-file-src="' + soy.$$escapeHtml(opt_data.fileSrc) + '" data-linked-resource-id="' + soy.$$escapeHtml(opt_data.attachmentId) + '" data-linked-resource-type="attachment" data-linked-resource-container-id="' + soy.$$escapeHtml(opt_data.containerId) + '" data-linked-resource-default-alias="' + soy.$$escapeHtml(opt_data.fileName) + '" data-mime-type="' + soy.$$escapeHtml(opt_data.mimeType) + '" data-has-thumbnail="' + ((opt_data.hasThumbnail) ? 'true' : 'false') + '" data-linked-resource-version="' + soy.$$escapeHtml(opt_data.attachmentVersion) + '"' + ((opt_data.unresolvedCommentCount && opt_data.unresolvedCommentCount >= 0) ? 'data-unresolved-comment-count=' + soy.$$escapeHtml(opt_data.unresolvedCommentCount) : '') + '><img src="' + soy.$$escapeHtml(opt_data.placeholderSrc) + '" height="' + soy.$$escapeHtml(opt_data.height) + '" />' + ((! opt_data.hasThumbnail) ? '<span class="title">' + soy.$$escapeHtml(opt_data.fileName) + '</span>' : '') + '</a></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.embeddedFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.embeddedFile';
}


Confluence.ViewFileMacro.Templates.embeddedUnknownFile = function(opt_data, opt_ignored) {
  return '<span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-file unknown-attachment" src="' + soy.$$escapeHtml(opt_data.placeholderSrc) + '" /></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.embeddedUnknownFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.embeddedUnknownFile';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFile = function(opt_data, opt_ignored) {
  return '<span class="overlay"></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFile';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount = function(opt_data, opt_ignored) {
  return '<span class="comment-count-overlay"><span class="content">' + soy.$$escapeHtml(opt_data.commentCountRep) + '</span></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc = function(opt_data, opt_ignored) {
  return '<span class="file-type-desc-overlay"><i class="aui-icon aui-icon-small ' + soy.$$escapeHtml(opt_data.iconClass) + '"></i><span class="content"> ' + soy.$$escapeHtml(opt_data.fileType) + '</span></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/services/file-service.js' */
define("vfm/services/file-service",["ajs","jquery"],function(a,b){return{getCommentCount:function(c,e){var d="/rest/files/1.0/files/content/{0}/commentCount?attachmentId={1}";d=a.contextPath()+a.format(d,c,e);return b.get(d)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/components/embedded-file-view.js' */
define("vfm/components/embedded-file-view",["jquery","backbone","ajs","confluence","vfm/view-file-macro-utils"],function(c,g,f,h,i){function b(s){var r=c(s.el);var q=r.find(".confluence-embedded-image, .confluence-embedded-file");if(q.hasClass("unknown-attachment")||(q.attr("src")&&q.attr("src").indexOf("/confluence/plugins/servlet/confluence/placeholder/unknown-attachment")>=0)){return this}var j={mimeType:"",niceType:""};var k=q.hasClass("confluence-embedded-image");var o=r.parent().is("a");var m=q.attr("data-has-thumbnail")==="true";if(k){j.mimeType="image/png"}else{j.mimeType=q.attr("data-mime-type");j.niceType=q.attr("data-nice-type")!=="null"?q.attr("data-nice-type"):"generic file"}var p=!o?e(q):"";var l=(!k&&m)?a(j):"";if(p||l){var n=h.ViewFileMacro.Templates.overlayEmbeddedFile();r.append(c(n).append(p).append(l));if(l){r.addClass("has-comment-overlay")}}}var d=function(j){j=parseInt(j,10);j=c.isNumeric(j)?j:0;return j>9?"9+":j+""};var e=function(o){var j="",k=o.attr("data-linked-resource-container-id"),m=o.attr("data-linked-resource-id");if(k&&m){var n=o.attr("data-unresolved-comment-count");var l=d(n);if(l!=="0"){j=h.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount({commentCountRep:l})}}return j};var a=function(j){return h.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc({fileType:i.getFileTypeTextFromNiceType(j.niceType),iconClass:f.Confluence.FileTypesUtils.getAUIIconFromMime(j.mimeType)})};return{render:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources', location = '/js/vfm.js' */
require(["jquery","ajs","vfm/components/embedded-file-view"],function(c,a,b){c(document).on("click",".confluence-embedded-file.unknown-attachment",function(d){d.preventDefault()});a.toInit(function(){c(".confluence-embedded-file-wrapper").each(function(){b.render({el:this})})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.editor-loader:background-loading-editor', location = 'jscripts/editor-loader.js' */
define("confluence-editor-loader/editor-loader","jquery confluence/legacy confluence/meta confluence/aui-overrides ajs wrm window".split(" "),function(c,g,h,o,d,p,q){var b,j,e={_listening:false,_queuedHandlers:[],_watchHandler:function(){g.Editor.UI.toggleWatchPage(false)},_unwatchHandler:function(){g.Editor.UI.toggleWatchPage(true)},_createQueueAdder:function(a){return function(){e._listening&&e._queuedHandlers.push(a)}},bind:function(){d.bind("watchpage.pageoperation",this._createQueueAdder(this._watchHandler));
d.bind("unwatchpage.pageoperation",this._createQueueAdder(this._unwatchHandler))},setListening:function(a){this._listening=a},applyHandlers:function(){for(var a=this._queuedHandlers.pop();a;){a();a=this._queuedHandlers.pop()}}};e.setListening(true);e.bind();var l=function(){var a=c("#editor-preload-container");a.length||(a=c('<div id="editor-preload-container" style="display: none;"></div>'));return a},f;return{getPreloadContainer:l,getEditorPreloadMarkup:function(){if(f)return f;g.debugTime("confluence.editor.preload");
var a=d.contextPath()+"/plugins/editor-loader/editor.action";return f=c.get(a,{parentPageId:h.get("parent-page-id"),pageId:h.get("page-id"),spaceKey:h.get("space-key"),atl_after_login_redirect:q.location.pathname,timeout:d.Confluence.EditorLoader.loadingTimeout})},resourcesLoaded:function(){return b&&b.isResolved()},loadingTimeout:12E3,isEditorActive:function(){var a=c("#editor-preload-container");return a.length&&a.is(":visible")},load:function(a,e){function f(){return p.require(["wrc!editor","wrc!macro-browser",
"wrc!fullpage-editor"]).fail(function(a){d.logError("Failed to load editor resources",a)})}var k;if(b){b.fail(function(){e?e.call(this,arguments):d.log("EditorLoader: loadGuard - previous load failed.")});b.done(function(){a?b.done(function(){setTimeout(a,0)}):d.log("EditorLoader: loadGuard - editor is already loaded.")});k=true}else k=void 0;if(!k){b=new c.Deferred;d.debug("Waiting for frontend editor plugins resources.");if(d.DarkFeatures.isEnabled("frontend.editor.plugins")){var m=c.Deferred();
d.bind("frontend.editor.plugins.resources.loaded",function(){d.debug("Resolving frontend editor plugins resources.");m.resolve()});j=m}else j=c.Deferred().resolve();a&&b.done(a);e&&b.fail(e);var n=l();c("body").append(n);var i=new c.Deferred;h.get("page-id")?this.getEditorPreloadMarkup().always(function(a,b,e){if(b==="success"||b==="notmodified"){b=c.ajaxSettings.cache;try{c.ajaxSettings.cache=true;n.append(a)}finally{c.ajaxSettings.cache=b}a=d.renderTemplate("dynamic-editor-metadata");c("head").append(a);
o.metaToParams();d.debug("EditorLoader: Finished loading the editor template.");i.resolve();g.debugTimeEnd("confluence.editor.preload")}else i.reject("Error loading the Editor template: "+e.status+" - "+e.statusText)}):i.resolve();c.when(i,j).pipe(f).done(function(){d.debug("EditorLoader: Finished loading the editor.");b.resolve()}).fail(function(){b.reject(arguments)})}},getEditorForm:function(){if(this.isEditorActive()){var a=require("tinymce");return c(a.activeEditor.getContainer()).closest("form")}return null}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor-loader/editor-loader","AJS.Confluence.EditorLoader");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.editor-loader:background-loading-editor', location = 'jscripts/block-and-buffer-keys.js' */
define("confluence-editor-loader/block-and-buffer-keys",[],function(){return{block:function(e){var d=[],f=function(a){a.preventDefault();a.stopPropagation();var c=a.which;c||(c=a.charCode?a.charCode:a.keyCode);13!==c&&48>c||d.push(c);a.preventDefault()};e.keypress(f);return function(){e.unbind("keypress",f);for(var a="",c=0;c<d.length;c++){var b;b=d[c];65535<b?(b-=65536,b=String.fromCharCode(55296+(b>>10),56320+(b&1023))):b=String.fromCharCode(b);a+=b}return a}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor-loader/block-and-buffer-keys","AJS.Confluence.BlockAndBuffer");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:editor-core-resources', location = 'loader/profiles.js' */
define("confluence-editor/profiles",["jquery","ajs"],function(d,c){return{createProfileForCommentEditor:function(){return{plugins:"searchreplace confluenceimagedialog autocompletemacro confluencemacrobrowser confluenceleavecomment confluencewatch autoresize".split(" ")}},createProfileForPageEditor:function(a){var b="searchreplace confluencedrafts confluenceimagedialog autocompletemacro confluencemacrobrowser flextofullsize referrer".split(" ");c.Meta.getBoolean("shared-drafts")&&c.DarkFeatures.isEnabled("unpublished-changes-lozenge")&&
b.push("unpublishedchanges");a&&a.versionComment&&b.push("confluenceversioncomment");a&&a.notifyWatchers&&b.push("confluencenotifywatchers");return{plugins:b}},createProfileForTemplateEditor:function(){return{plugins:"searchreplace confluenceimagedialog autocompletemacro confluencemacrobrowser confluenceleavetemplate flextofullsize confluencetemplateeditor".split(" ")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/profiles","AJS.Confluence.Editor._Profiles");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-util', location = 'jscripts/util.js' */
define("confluence-quick-edit/util",["window","ajs"],function(c,d){return{generateUUID:function(){var a=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()},getBaseUrl:function(){var a=c.location.protocol.replace(/:$/,"")+"://"+c.location.host+"/"+c.location.pathname.replace(/^\//,""),b=c.location.search.replace(/^\?/,""),b=b.replace(/\&?focusedCommentId=\d+/,""),b=b.replace(/^\&/,"");return{url:a,search:b,addQueryParam:function(a,
b){this.search=this.search?this.search+"&"+a+"="+b:a+"="+b},toString:function(){return this.url+"?"+this.search}}},timeoutDeferred:function(a,b,c){"function"!==typeof b.reject&&d.log("WARNING: invalid, not rejectable object passed to AJS.Confluence.QuickEdit.Util.timeoutDeferred. You should use a Deferred object");setTimeout(function(){"pending"===b.state()&&(d.logError("Timeout: "+a),b.reject("timeout"))},c);return b}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/util","AJS.Confluence.QuickEdit.Util");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-message', location = 'editor/page-editor-message.js' */
define("confluence-editor/editor/page-editor-message",["jquery","ajs","aui/flag","document","underscore"],function(f,i,g,h,d){var b=Object.create(null),e=Object.create(null);h.addEventListener("aui-flag-close",function(a){a&&a.target&&(b=d.filter(Object.keys(b),function(c){return!f(a.target).find("span").hasClass(c)}))});return{handleMessage:function(a,c,d){b[a]||(e[a]?delete e[a]:c&&(b[a]=g({title:c.title?c.title:"",type:c.type,close:c.close?c.close:"manual",persistent:!1,body:"<span class='"+a+
"'>"+c.message+"</span>"}),d&&d()))},closeMessages:function(a){d.each(a,function(a){b[a]&&(b[a].close(),delete b[a])})},isDisplayed:function(a){return a in b},displayedErrors:function(){return Object.keys(b)},suppressMessage:function(a){e[a]={}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:querystring', location = '/includes/js/api/querystring.js' */
define("confluence/api/querystring",[],function(){return{stringify:function(a){var b="",c;for(c in a)for(var d=0;d<a[c].length;d++)b+="&"+c,a[c][d]&&(b+="="+a[c][d]);return b.substring(1)},parse:function(a){var b={};if(a){"?"===a.substr(0,1)&&(a=a.substr(1));for(var a=a.split("&"),c=0;c<a.length;c++){var d=a[c].split("=");b[d[0]]||(b[d[0]]=[]);b[d[0]].push(a[c].substring(d[0].length+1))}}return b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:url', location = '/includes/js/api/url.js' */
define("confluence/api/url",["confluence/api/querystring","jquery"],function(d,e){var g=/([^\?|#]+)[\?]?([^#]*)[#]?(.*)/,f=["source","urlPath","queryParams","anchor"];return{parse:function(a){var b={};if(a=g.exec(a)){for(var c=0;c<f.length;c++)b[f[c]]=a[c];b.queryParams=d.parse(b.queryParams)}return b},format:function(a){return e.isEmptyObject(a)?"":(!a.urlPath?"":a.urlPath)+(e.isEmptyObject(a.queryParams)?"":"?"+d.stringify(a.queryParams))+(!a.anchor?"":"#"+a.anchor)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:analytics-support', location = '/includes/js/analytics-support.js' */
define("confluence/analytics-support","jquery ajs confluence/meta window document confluence/api/url".split(" "),function(j,o,n,k,l,h){var b={},m;b.setAnalyticsSource=function(a,d){if(typeof m==="undefined"){var c=j._data(k,"events");m=c&&c.analytics&&c.analytics.length>0}m&&a.attr("href",function(a,c){var b=encodeURIComponent(d),g=h.parse(c);if(!j.isEmptyObject(g))g.queryParams.src=[b];return h.format(g)})};b.srcRemovedUrl=function(a){a=h.parse(a);delete a.queryParams.src;for(var d=Object.keys(a.queryParams),
c=0;c<d.length;c++){var b=d[c],f=b.split(".");f.length===3&&f[0]==="src"&&delete a.queryParams[b];b==="jwt"&&delete a.queryParams[b]}return h.format(a)};b.srcParamValues=function(a){return(a=h.parse(a).queryParams)&&a.src?a.src:[]};b.srcAttrParamValues=function(a){for(var a=h.parse(a).queryParams,b={},c=Object.keys(a),e=0;e<c.length;e++){var f=c[e],i=f.split(".");if(i.length===3&&i[0]==="src"){var g=i[1],i=i[2];b[g]=b[g]||{};b[g][i]=decodeURIComponent(a[f][0])}}return b};b.extractAnalyticsData=function(a){for(var d=
[],c=b.srcParamValues(a),a=b.srcAttrParamValues(a),e=0;e<c.length;e++){var f=c[e];d.push({src:f,attr:a[f]||{}})}return d};b.publish=function(a,b){o.trigger("analytics",{name:a,data:b||{}})};b.init=function(){var a=b.extractAnalyticsData(l.URL),d={userKey:n.get("remote-user-key"),pageID:n.get("page-id")};if(a.length>0){for(var c=0;c<a.length;c++){var e=a[c],f=j.extend({},d,e.attr);b.publish("confluence.viewpage.src."+e.src,f)}if(k.history&&k.history.replaceState){a=b.srcRemovedUrl(l.URL);l.URL!==a&&
k.history.replaceState(null,"",a)}}else b.publish("confluence.viewpage.src.empty",d)};return b});require("confluence/module-exporter").exportModuleAsGlobal("confluence/analytics-support","AJS.Confluence.Analytics",function(j){require("ajs").toInit(j.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/quick-edit.js' */
define("confluence-quick-edit/quick-edit","ajs confluence/legacy confluence/templates confluence/meta jquery window document confluence-quick-edit/util wrm".split(" "),function(c,e,q,m,b,r,s,t,u){function v(){var a=new b.Deferred;c.Confluence.EditorLoader.load(function(){setTimeout(function(){a.resolve()},0)},function(){a.reject()});return a}var o={enableShortcut:function(){b("#editPageLink").addClass("full-load")},disableShortcut:function(){b("#editPageLink").removeClass("full-load")}},g=[],n={loadingContentTimeout:4E3,
register:function(a){g.push(a)},disableHandlers:function(){b.each(g,function(a,b){return b.disable()})},enableHandlers:function(){b.each(g,function(a,b){return b.enable()})},SaveBarBinder:{bind:function(a,b){a&&e.Editor.addSaveHandler(a);b&&e.Editor.addCancelHandler(b)}},activateEditor:function(a){function e(){function f(a){var c=new b.Deferred;u.require(a).done(function(a){c.resolve(a)}).fail(function(a){c.reject(a)});return c}var g,i=new b.Deferred;if(c.Rte&&c.Rte.getEditor()){c.debug("there is already an editor open");
return i.reject("there is already an editor open")}if(!a.$container||!a.$form){c.logError("activateEditor could not be initialsed: bad arguments",a);return i.reject("bad parameters")}if(a.$container.nodeType)a.$container=b(a.$container);if(a.$form.nodeType)a.$form=b(a.$form);g=c.Confluence.BlockAndBuffer.block(b(s));a.preActivate&&a.preActivate();o.disableShortcut();var p=a.timeoutResources||c.Confluence.EditorLoader.loadingTimeout,k=n.loadingContentTimeout,h=t.timeoutDeferred;b.when(h("resources",
v(),p),h("fetch content",a.fetchContent||b.Deferred().resolve(),k),h("additional resources",a.additionalResources?f(a.additionalResources):b.Deferred().resolve(),p)).done(function(e,f){var d={$container:a.$container,content:f,$form:a.$form,replayBufferedKeys:g};a.preInitialise&&a.preInitialise(d);b(".quick-comment-prompt",d.$container).hide();b(".quick-comment-body",d.$container).addClass("comment-body");var j=c.Confluence.EditorLoader.getPreloadContainer();if(d.content&&d.content.title){var l=d.content.title;
j.find("#content-title").val(l)}d.$form.append(j.children());j.show();b("#editor-precursor").hide();b("#rte-savebar").find(".toolbar-split-left").hide();if(m.get("content-type")==="comment"){b("#pluggable-status").hide();var j=q.Editor.Page.cancelButton({contentType:m.get("content-type"),sharedDraftsEnabled:m.getBoolean("shared-drafts")}),l=b("#rte-button-cancel"),k=l.parent(".rte-toolbar-group-done");if(k.length){k.remove();b("#rte-button-discard").remove()}else l.remove();b("#rte-savebar").find(".toolbar-split-right").append(j)}var h=
function(){d.editor=c.Rte.getEditor();d.$container.find(".quick-comment-loading-container").hide();d.$form.show();d.$form.addClass("fadeIn");var e=d.editor,f=d.content?d.content.editorContent:"",g=d.replayBufferedKeys;if(f){e.setContent(f);e.startContent=e.getContent({format:"raw",no_events:1});e.undoManager.clear()}g()&&e.undoManager.add();c.trigger("quickedit.success");c.trigger("quickedit.visible");c.trigger("add-bindings.keyboardshortcuts");c.trigger("active.dynamic.rte");b("div.aui-message.closeable").each(function(){var a=
b(this),d;if(!a.find(".icon-close").length){d=b('<span class="aui-icon icon-close" role="button" tabindex="0"></span>').click(function(){a.closeMessage()}).keypress(function(b){if(b.which===c.keyCode.ENTER||b.which===c.keyCode.SPACE){a.closeMessage();b.preventDefault()}});a.append(d)}});a.postInitialise&&a.postInitialise(d);n.SaveBarBinder.bind(a.saveHandler,a.cancelHandler);c.trigger("rte-quick-edit-ready");c.unbind("rte-ready",h);i.resolve()};c.bind("rte-ready",h);c.bind("rte-destroyed",a.postDeactivate||
function(){});c.Rte.BootstrapManager.initialise({plugins:a.plugins,toolbar:a.toolbar,excludePlugins:a.excludePlugins,isQuickEdit:true,onInitialise:a.onInitialise})}).fail(function(b,e){i.reject(b,e);c.logError("Error loading page quick edit. Falling back to normal edit URL...");c.trigger("analytics",{name:"rte.quick-edit.activate-editor.failed"});if(a.fallbackUrl){c.log("This parameter is deprecated. To be removed in the next major version (5.8 or 6.0). Please use the promise returned to bind custom action if the editor fails to load instead.");
r.location=a.fallbackUrl}});return i.promise()}if(a.closeAnyExistingEditor&&c.Rte&&c.Rte.getEditor()){var f=new b.Deferred;this.deactivateEditor().done(function(){e().done(function(){f.resolve()}).fail(function(a){f.reject(a)})}).fail(function(){c.debug("Could not deactivate current editor.");f.reject("Could not deactivate current editor.")});return f}return e()},deactivateEditor:function(){require("tinymce").execCommand("mceRemoveControl",true,"wysiwygTextarea");e.Editor.UI.toggleSavebarBusy(false);
var a=c.Confluence.EditorLoader.getPreloadContainer().empty();b(".editor-container").remove();b("#editor-precursor").remove();b("#anonymous-warning").remove();b(".quick-comment-prompt").show();b(".bottom-comment-panels").show();b("#editor-notification-container").empty();b(".action-reply-comment").removeAttr("reply-disabled");o.enableShortcut();e.Editor.removeAllSaveHandlers();e.Editor.removeAllCancelHandlers();return c.Confluence.EditorLoader.getEditorPreloadMarkup().done(function(b){a.append(b);
a.hide();(new c.Confluence.QuickEditCaptchaManager(a)).refreshCaptcha();c.trigger("rte-destroyed");c.unbind("rte-destroyed")})}};return n});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/quick-edit","AJS.Confluence.QuickEdit");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/view.js' */
define("confluence-quick-edit/handlers/view",["jquery","ajs","window"],function(c,d,e){return function(){var a;sessionStorage.viewPort&&(a=JSON.parse(sessionStorage.viewPort));if(a&&a.pageId==d.params.pageId){var b;b=c("#main-content");var f=c("#header");b=-1!==a.blockIndex?b.children().first().children().eq(a.blockIndex).find(".innerCell").eq(a.columnIndex).children().eq(a.index):b.children().eq(a.index);e.scrollTo(0,b.offset().top+a.offset-f.outerHeight())}delete sessionStorage.viewPort}});
require("confluence/module-exporter").safeRequire("confluence-quick-edit/handlers/view",function(c){require("ajs").toInit(c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/captcha-manager.js' */
define("confluence-quick-edit/captcha-manager",["jquery","ajs"],function(d,e){return function(f){function a(a){return d(f||"body").find(a)}return{refreshCaptcha:function(){var b=a("img.captcha-image");if(0<b.length){var c=Math.random();b.attr("src",e.contextPath()+"/jcaptcha?id="+c);a('input[name="captchaId"]').val(c);a('input[name="captchaResponse"]').val("")}},getCaptchaData:function(){return{id:a('input[name="captchaId"]').val(),response:a('input[name="captchaResponse"]').val()}}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/captcha-manager","AJS.Confluence.QuickEditCaptchaManager");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/shortcut.js' */
define("confluence-quick-edit/handlers/shortcut",["ajs"],function(a){var d=!1;a.bind("initialize.keyboardshortcuts add-bindings.keyboardshortcuts",function(){d=!0});a.bind("remove-bindings.keyboardshortcuts",function(){d=!1});return{createShortcut:function(f,g){function b(){c=c||a.whenIType(f).moveToAndClick(g)}function e(){c&&c.unbind();c=null}var c;return{bind:function(){d&&b();a.bind("initialize.keyboardshortcuts",b);a.bind("add-bindings.keyboardshortcuts",b);a.bind("remove-bindings.keyboardshortcuts",
e)},unbind:function(){e();a.unbind("initialize.keyboardshortcuts",b);a.unbind("add-bindings.keyboardshortcuts",b);a.unbind("remove-bindings.keyboardshortcuts",e)}}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/shortcut","AJS.Confluence.QuickEdit.KeyboardShortcuts");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/page.js' */
define("confluence-quick-edit/handlers/page","jquery ajs underscore confluence/legacy confluence-quick-edit/handlers/shortcut confluence/aui-overrides confluence-quick-edit/quick-edit confluence/analytics-support confluence-editor/profiles window".split(" "),function(b,c,x,g,r,s,t,l,u,m){function o(a,c,f){var d={pageId:f,blockIndex:-1,columnIndex:-1,index:-1,offset:0,hasBlock:function(){return this.blockIndex!==-1}},i=false,e=function(a,b){var f=a.offset();if(g(a)){d.index=b;d.offset=c-f.top;i=true}},
g=function(a){var b=a.offset();return b.top-8<=c&&b.top+a.height()>=c};if(a.children().length===1&&a.children().first().hasClass("contentLayout2")){a.children().first().children().each(function(a){if(!d.hasBlock()&&g(b(this)))d.blockIndex=a});if(d.hasBlock()){a=a.children().first().children().eq(d.blockIndex).find(".innerCell");a.each(function(a){if(d.columnIndex===-1){var c=b(this).children().length;if(c>0)if(c<2){if(b(this).children().first().height()>25)d.columnIndex=a}else d.columnIndex=a}});
a.eq(d.columnIndex).children().each(function(a){i||e(b(this),a)})}}else a.children().each(function(a){i||e(b(this),a)});return i?d:null}function p(a){var h=require("tinymce");j.disable();s.metaToParams();if(a.$container.nodeType)a.$container=b(a.$container);if(a.$form.nodeType)a.$form=b(a.$form);if(c.DarkFeatures.isEnabled("confluence.view.edit.transition")){var f=b("#main-content"),d=b("#header"),e=b("#main-header"),d=m.pageYOffset+d.outerHeight()+e.outerHeight();k=o(f,d,c.params.pageId);c.trigger("quick-edit.viewport.saved");
var l=function(){b(h.activeEditor.getWin().document).find("body#tinymce").addClass("page-edit");b("#content").css({paddingRight:0});c.unbind("quickedit.visible",l)};c.bind("quickedit.visible",l)}f=a.$form;d=c.Meta.get("content-type")==="page"?"doeditpage":"doeditblogpost";d=c.contextPath()+"/pages/"+d+".action?pageId="+g.getContentId();b(".ia-splitter-left").remove();try{c.DarkFeatures.isEnabled("react.ui.view-page")&&b("#confluence-ui").length?b("#main").detach().appendTo("#full-height-container"):
b("#main").unwrap()}catch(n){}b("#rte").removeClass("editor-default").addClass("editor-fullheight");a.$container.children().remove();b(".editor-container").children().eq(0).unwrap();f.attr({"class":"editor aui",action:d,name:"editpageform",id:"editpageform",style:""});a.$container.append(f);a.$container.removeClass("view").addClass("edit");b("body").addClass("contenteditor edit")}function q(a){require("tinymce");b("#editor-precursor").show();b("#rte-savebar").find(".toolbar-split-left").show();if(m.history.pushState){var h=
e.attr("href");if(h!=m.location.pathname+m.location.search){history.pushState({quickEdit:true},"",h);c.trigger("rte-quick-edit-push-state",h)}}else{m.location.hash="editor";c.trigger("rte-quick-edit-push-hash")}h=a.content;if(h.permissions)for(var f in h.permissions)b("#"+f).attr("value",h.permissions[f]);b("#originalVersion").val(a.content.pageVersion);c.Meta.set("page-version",a.content.pageVersion);c.Meta.set("page-title",a.content.title);b('meta[name="page-version"]').attr("content",a.content.pageVersion);
b('meta[name="ajs-page-version"]').attr("content",a.content.pageVersion);b("#syncRev").val(a.content.syncRev);c.Meta.set("conf-revision",a.content.confRev);b('meta[name="ajs-conf-revision"]').attr("content",a.content.confRev);f=a.content.atlToken;c.Meta.set("atl-token",f);b('input[name="atl_token"]').val(f);c.trigger("analyticsEvent",{name:"quick-edit-success"});b("#navigation").remove();var d=new Date,i=function(b,c){if(d&&!(c.type==="keydown"&&[91,92,93,224,33,34,37,38,39,40,16,17,18,20,112,113,
114,115,116,117,118,119,120,121,122,123].indexOf(c.keyCode)>-1)){var f=new Date-d;d=null;l.publish("confluence.editor.transition.firstkeydown",{delay:f});a.editor.onKeyDown.remove(i);a.editor.onChange.remove(i)}};a.editor.onKeyDown.add(i);a.editor.onChange.add(i);g.debugTimeEnd("confluence.editor")}function v(a){setTimeout(function(){if(k){var c;c=b(a.getBody());c=k.hasBlock()?c.children().first().children().eq(k.blockIndex).find(".innerCell").eq(k.columnIndex).children().eq(k.index):c.children().eq(k.index);
a.getWin().scrollTo(0,c.offset().top+k.offset);b("#main").css("visibility","visible")}})}function w(){var a=new b.Deferred;g.debugTime("confluence.editor.quick.fetchContent");var e=b.ajax({url:c.contextPath()+"/rest/tinymce/1/content/"+g.getContentId()+".json",cache:false});e.success(function(b){c.Meta.get("edit-mode")&&c.Meta.get("edit-mode")!==b.editMode&&a.reject("edit mode change",e);g.debugTimeEnd("confluence.editor.quick.fetchContent");c.trigger("rte-content-ready",b);a.resolve(b)});e.error(function(c){a.reject("error fetching content",
c)});return a}var n,k,e,j={editShortcut:r.createShortcut("e","#editPageLink"),activateEventHandler:function(a){if(!a.metaKey&&!a.shiftKey&&!a.ctrlKey&&!a.altKey&&!(a.which===2||a.which===3)){a.preventDefault();if(n&&n.state()==="pending")c.debug("Editor is being activated. Ignoring handler...");else{n=j.activateEditor();e.find(".aui-icon").css("visibility","hidden");e.parent().spin({left:"10px"})}}},enable:function(){if(b("#confluence-ui").length)return false;e=b("#editPageLink");if(b("body").is(".theme-default")){e.on("click",
j.activateEventHandler);e.removeClass("full-load");j.editShortcut.bind();c.debug("QuickPageEdit enabled")}else c.debug("QuickPageEdit not enabled")},activateEditor:function(){g.debugTime("confluence.editor");c.trigger("rte-quick-edit-init");var a=b("#content").find(".quick-comment-form"),h=function(){var a=require("tinymce").activeEditor.getWin(),d=b(a.document).find("#tinymce");if(a=o(d,a.pageYOffset,c.params.pageId))sessionStorage.viewPort=JSON.stringify(a)};return t.activateEditor({fetchContent:w(),
$container:b("#content"),$form:a.length?a:b('<form method="post"></form>'),preInitialise:p,postInitialise:q,saveHandler:function(){c.DarkFeatures.isEnabled("confluence.view.edit.transition")&&h();g.Editor.getNumConcurrentEditors()>1&&l.publish("rte.notification.concurrent-editing.save",{numEditors:g.Editor.getNumConcurrentEditors(),pageId:c.params.pageId,draftType:c.params.draftType})},cancelHandler:function(){c.DarkFeatures.isEnabled("confluence.view.edit.transition")&&h();g.Editor.getNumConcurrentEditors()>
1&&l.publish("rte.notification.concurrent-editing.cancel",{numEditors:g.Editor.getNumConcurrentEditors(),pageId:c.params.pageId,draftType:c.params.draftType})},plugins:u.createProfileForPageEditor({versionComment:true,notifyWatchers:true}).plugins,onInitialise:function(a){c.DarkFeatures.isEnabled("confluence.view.edit.transition")&&a.onLoad.add(v)}}).fail(function(a,b){if(b&&b.status===423){var g=JSON.parse(b.responseText).user;e.find(".aui-icon").css("visibility","visible");e.parent().spinStop();
c.MessageHandler.flag({type:"info",title:"Unable to edit",body:c.format("Collaborative editing is offline right now, and {0} is editing this page. Try again in a few minutes.",g),close:"manual"})}else m.location=e.attr("href")})},disable:function(){c.debug("QuickPageEdit disabled.");j.editShortcut.unbind();e&&e.unbind("click",j.activateEventHandler)}};c.Confluence.QuickEdit.register(j);return{disable:j.disable,activate:j.activateEditor,preInitialise:p,postInitialize:q}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/page","AJS.Confluence.QuickEdit.QuickEditPage");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/init.js' */
define("confluence-quick-edit/init",["ajs","jquery","window","confluence-quick-edit/quick-edit","confluence-editor-loader/editor-loader"],function(b,a,c,d,e){return function(){a("body").hasClass("page-gadget")?b.debug("QuickComment: editor preload is disabled"):a(c).load(function(){b.debug("QuickComment: instigated background loading of the comment editor.");e.load()});d.enableHandlers();b.trigger("rte-quick-edit-enable-handlers")}});
require("confluence/module-exporter").safeRequire("confluence-quick-edit/init",function(b){var a=require("ajs");a.DarkFeatures.isEnabled("disable-quick-edit")?a.log("disable-quick-edit is turned on; run AJS.Confluence.EditorLoader.load() manually."):a.toInit(b)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment.js' */
define("confluence-quick-edit/handlers/comment","ajs confluence/legacy jquery aui/flag confluence-quick-edit/util confluence-editor/editor/page-editor-message".split(" "),function(a,f,d,m,k,g){function l(a,c){var h=a.match(RegExp("[?&]"+c+"=(\\d+)"));return h&&h.length>1?parseInt(h[1]):0}d(function(){a.AppLinksInitialisationBinder=function(b){a.bind("init.rte",b)}});var e={timeout:8E3,showLoadingEditorErrorMessage:function(){a.trigger("rte-quick-comment-loading-failed");m({type:"error",title:"Error",
persistent:false,body:"Error loading the comment editor. Please refresh the page to try again."})},preInitialise:function(){a.Confluence.QuickEdit.QuickEditPage.disable();a.Meta.set("content-type","comment");a.Meta.set("draft-type","");a.params.contentType="comment";a.params.draftType="";a.Meta.set("use-inline-tasks","false");d("#editor-precursor").children().eq(0).hide();d("#pagelayout-menu").parent().hide();d("#page-layout-2-group").hide();d("#rte-button-tasklist").remove();d("#pluggable-status-container").remove();
d("#rte-insert-tasklist").parent().remove()},postInitialise:function(b){a.Rte.editorFocus(b.editor)},delegatingSaveCommentHandler:function(a){return a.asyncRenderSafe?e.ajaxSaveCommentHandler(a):e.reloadPageSaveCommentHandler(a)},reloadPageSaveCommentHandler:function(a){var c=k.getBaseUrl();c.addQueryParam("focusedCommentId",a.id);c.addQueryParam("refresh",+new Date);window.location.href=c.toString()+"#comment-"+a.id},ajaxSaveCommentHandler:function(b){var c={isDefault:true,path:a.Meta.get("static-resource-url-prefix")+
"/images/icons/profilepics/default.png"};a.Meta.get("current-user-avatar-uri-reference")!==a.contextPath()+"/images/icons/profilepics/default.png"&&(c={isDefault:false,path:a.Meta.get("current-user-avatar-uri-reference")});var h=a.Meta.get("remote-user"),d={userName:h===""?null:h,displayName:a.Meta.get("current-user-fullname"),profilePicture:c};e.cancelComment().done(function(){f.CommentDisplayManager.addOrUpdateComment(d,b,true,false);a.trigger("page.commentAddedOrUpdated",{commentId:b.id})})},cancelHandler:function(){if(a.Confluence.QuickEdit){a.Rte.Content.editorResetContentChanged();
a.Confluence.QuickEdit.deactivateEditor()}},createCommenterParam:function(b,c,d){return{userName:c||a.Meta.get("remote-user")||null,displayName:d||a.Meta.get("user-display-name"),profilePicture:{isDefault:b.hasClass("defaultLogo"),path:b.attr("src")}}},createSaveHandler:function(b,c){var h=k.generateUUID();return function(e){e.preventDefault();if(a.Rte.Content.isEmpty()){a.Confluence.EditorNotification.notify("warning","Comment text is empty. Cannot create empty comments.");f.Editor.UI.toggleSavebarBusy(false)}else{var i=
e=0,j=a.Confluence.EditorLoader.getEditorForm();if(j.is("form")){i=j.attr("action");e=l(i,"parentId");i=l(i,"commentId")}var g=new a.Confluence.QuickEditCaptchaManager(j),j=function(a){c(a);g.refreshCaptcha()},k=d("#watchPage").is(":checked");i>0?f.Editor.CommentManager.updateComment(f.getContentId(),i,a.Rte.Content.getHtml(),k,g.getCaptchaData(),b,j):f.Editor.CommentManager.saveComment(f.getContentId(),e,a.Rte.Content.getHtml(),k,h,g.getCaptchaData(),b,j)}}},saveCommentErrorHandler:function(b){f.Editor.UI.toggleSavebarBusy(false);
var c;if(b&&b.search(/captcha/i)!==-1){c="The typed word did not match the text in the picture.";g.closeMessages(["captcha-response-failed"]);g.handleMessage("captcha-response-failed",{type:"error",message:c})}else{c="Failed to save the comment. Please try again later.";g.closeMessages(["server-offline"]);g.handleMessage("server-offline",{type:"error",message:c})}a.logError("Error saving comment",b)},cancelComment:function(){a.Rte.Content.editorResetContentChanged();return a.Confluence.QuickEdit.deactivateEditor()},
proceedWithActivation:function(){var b=new d.Deferred,c=a.Rte&&a.Rte.getEditor();if(c)if(c.isDirty()&&!f.Editor.isEmpty())if(confirm("Your comment will be lost."))b=e.cancelComment();else return b.reject();else b=e.cancelComment();else b.resolve();return b}};return e});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment","AJS.Confluence.QuickEdit.QuickComment");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/top-level.js' */
define("confluence-quick-edit/handlers/comment/top-level",["ajs","jquery","confluence-quick-edit/handlers/shortcut","confluence-quick-edit/handlers/comment","window"],function(b,a,e,c,f){function g(a){c.preInitialise(a)}function h(b){a("#comments-section").one("click",".quick-comment-prompt",d.activateEventHandler);a("#rte-savebar").scrollWindowToElement();c.postInitialise(b)}function i(){b.Confluence.EditorLoader.resourcesLoaded()||(b.trigger("analytics",{name:"rte.quick-edit.top-comment.spinner"}),
a(".quick-comment-prompt").hide(),a(".quick-comment-loading-container").fadeIn().spin("medium"))}function j(b){b.preventDefault();f.location=a("#add-comment-rte").attr("href")}var k=b.DarkFeatures.isEnabled("editor.slow.comment.disable"),d={commentShortcut:e.createShortcut("m",".quick-comment-prompt"),activateEventHandler:function(e){e.preventDefault();c.proceedWithActivation().done(function(){var d=c.createSaveHandler(c.delegatingSaveCommentHandler,c.saveCommentErrorHandler);return b.Confluence.QuickEdit.activateEditor({preActivate:i,
$container:a("form[name=inlinecommentform]").closest(".quick-comment-container"),$form:a("form[name=inlinecommentform]"),preInitialise:g,saveHandler:d,cancelHandler:c.cancelHandler,postInitialise:h,plugins:b.Confluence.Editor._Profiles.createProfileForCommentEditor().plugins,additionalResources:["wrc!comment-editor"],timeoutResources:c.timeout}).fail(function(){k?c.showLoadingEditorErrorMessage():f.location=a("#add-comment-rte").attr("href")})}).fail(function(){a("#comments-section").one("click",
".quick-comment-prompt",d.activateEventHandler)})},enable:function(){a("#comments-section").one("click",".quick-comment-prompt",d.activateEventHandler);a("#add-comment-rte").removeClass("full-load");this.commentShortcut.bind()},disable:function(){a("#comments-section").off("click",".quick-comment-prompt");this.commentShortcut.unbind()}};b.Confluence.QuickEdit.register(d);return{bindCommentAreaFallbackHandler:function(){a("#comments-section").delegate(".quick-comment-prompt","click",j)},cancelComment:function(){b.log("'AJS.Confluence.QuickEdit.QuickComment.TopLevel.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");
return b.Confluence.QuickEdit.QuickComment.cancelComment()}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment/top-level","AJS.Confluence.QuickEdit.QuickComment.TopLevel");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/reply.js' */
define("confluence-quick-edit/handlers/comment/reply",["ajs","confluence/legacy","jquery"],function(a,g,b){function i(b){a.Confluence.QuickEdit.QuickComment.preInitialise(b);b.$container.scrollWindowToElement()}function j(b){a.Confluence.QuickEdit.QuickComment.postInitialise(b)}function h(b){var e=b.attr("id").match(/comment-(\d+)/),f=0;e?f=parseInt(e[1]):(a.trigger("analytics",{name:"rte.quick-edit.get-reply-parent.failed"}),a.logError("replyHandler: activateEventHandler - could not extract a parent comment Id from the comment id "+
b.attr("id")));return f}function k(){b(".comment.reply").closest(".comment-threads").remove()}var l=a.DarkFeatures.isEnabled("editor.slow.comment.disable"),d={activateEventHandler:function(d){d.preventDefault();d.stopPropagation();var e=this;if(b(e).attr("reply-disabled"))return!1;a.Confluence.QuickEdit.QuickComment.proceedWithActivation().done(function(){var f=b(e).closest("div.comment"),c=b(".quick-comment-container img.userLogo"),c=a.Confluence.QuickEdit.QuickComment.createCommenterParam(c),c=
{contentId:g.getContentId(),parentCommentId:h(f),commenter:c,context:{contextPath:a.Meta.get("context-path"),staticResourceUrlPrefix:a.Meta.get("static-resource-url-prefix")}},c=b(g.Templates.Comments.displayReplyEditorLoadingContainer(c)),d=b(".quick-comment-loading-container",c);d.hide();f.after(c);a.Confluence.EditorLoader.resourcesLoaded()?a.trigger("analytics",{name:"rte.quick-edit.reply-comment.no-spinner"}):(a.trigger("analytics",{name:"rte.quick-edit.reply-comment.spinner"}),f.after(c),d.fadeIn(),
d.spin("medium"),d[0].scrollIntoView());c=b(e).closest(".comment-thread").find(".quick-comment-container");a.Meta.set("form-name",b("form",c).attr("name"));a.Confluence.QuickEdit.activateEditor({$container:c,$form:b("form.quick-comment-form[name=threadedcommentform]"),preInitialise:i,postInitialise:j,saveHandler:a.Confluence.QuickEdit.QuickComment.createSaveHandler(a.Confluence.QuickEdit.QuickComment.delegatingSaveCommentHandler,a.Confluence.QuickEdit.QuickComment.saveCommentErrorHandler),cancelHandler:a.Confluence.QuickEdit.QuickComment.cancelHandler,
plugins:a.Confluence.Editor._Profiles.createProfileForCommentEditor().plugins,postDeactivate:k,additionalResources:["wrc!comment-editor"],timeoutResources:a.Confluence.QuickEdit.QuickComment.timeout}).fail(function(){l?a.Confluence.QuickEdit.QuickComment.showLoadingEditorErrorMessage():window.location=b("#reply-comment-"+h(f)).attr("href")});b(e).attr("reply-disabled",!0)})},enable:function(){b("#comments-section").delegate(".action-reply-comment","click",d.activateEventHandler)},disable:function(){b("#comments-section").undelegate(".action-reply-comment",
"click")}};a.Confluence.QuickEdit.register(d);return{cancelComment:function(){a.log("'AJS.Confluence.QuickEdit.QuickComment.Reply.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");return a.Confluence.QuickEdit.QuickComment.cancelComment()}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment/reply","AJS.Confluence.QuickEdit.QuickComment.Reply");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/edit.js' */
define("confluence-quick-edit/handlers/comment/edit",["ajs","confluence-quick-edit/handlers/comment","jquery","confluence/legacy"],function(e,b,d,i){function j(a){b.preInitialise(a);a.$container.scrollWindowToElement()}function k(a){b.postInitialise(a)}function h(a){return(a=a.attr("id").match(/comment-(\d+)/))?parseInt(a[1]):0}function l(a){var b=new d.Deferred;d.ajax({url:e.contextPath()+"/rest/api/content/"+a+"?expand=body.editor",cache:!1}).done(function(a){!a||!a.body||!a.body.editor?b.reject("invalid response from loading comment rest endpoint"):
b.resolve({editorContent:a.body.editor.value})}).fail(function(){b.reject("error fetching content")});return b}function m(){var a=d(".comment.edit");a.prev(".comment").show();a.remove()}var n=e.DarkFeatures.isEnabled("editor.slow.comment.disable"),g={activateEventHandler:function(a){var g=this;a.preventDefault();a.stopPropagation();b.proceedWithActivation().done(function(){var a=d(g).closest("div.comment"),c;c=a.find(".author .confluence-userlink");var f=a.find(".comment-user-logo img.userLogo");
c=b.createCommenterParam(f,c.attr("data-username"),c.text());c={contentId:i.getContentId(),commentId:h(a),commenter:c,context:{contextPath:e.Meta.get("context-path"),staticResourceUrlPrefix:e.Meta.get("static-resource-url-prefix")},mode:"edit"};c=d(i.Templates.Comments.displayEditEditorContainer(c));f=d(".quick-comment-loading-container",c);a.hide();a.after(c);f.fadeIn().spin("medium");f[0].scrollIntoView();c=a.next(".quick-comment-container");e.Meta.set("form-name",d("form",c).attr("name"));e.Confluence.QuickEdit.activateEditor({$container:c,
$form:d("form.quick-comment-form[name=editcommentform]"),fetchContent:l(h(a)),preInitialise:j,postInitialise:k,saveHandler:b.createSaveHandler(b.delegatingSaveCommentHandler,b.saveCommentErrorHandler),cancelHandler:b.cancelHandler,plugins:e.Confluence.Editor._Profiles.createProfileForCommentEditor().plugins,postDeactivate:m,additionalResources:["wrc!comment-editor"],timeoutResources:b.timeout}).fail(function(){n?b.showLoadingEditorErrorMessage():window.location=d("#edit-comment-"+h(a)).attr("href")})})},
enable:function(){d("#comments-section").delegate(".comment-action-edit","click",g.activateEventHandler)},disable:function(){d("#comments-section").undelegate(".comment-action-edit","click")}};e.Confluence.QuickEdit.register(g);return{cancelComment:function(){e.log("'AJS.Confluence.QuickEdit.QuickComment.Edit.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");return b.cancelComment()}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment/edit","AJS.Confluence.QuickEdit.QuickComment.Edit");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/editor-comment-manager.js' */
define("confluence-quick-edit/editor-comment-manager",["ajs","jquery","confluence/legacy"],function(d,e,j){return function(){function k(a,f,l,i,b,g,h){d.trigger("analytics",{name:"confluence.page.comment.create",data:{pageID:d.Meta.get("page-id")}});a={type:"POST",url:a,contentType:"application/x-www-form-urlencoded; charset=UTF-8",data:{html:f,watch:l,uuid:i},dataType:"json",cache:!1,headers:{"X-Atlassian-Token":"no-check"},success:function(a){g(a)},error:function(a,c,b){c=c+": "+b;a.responseText&&
(c=c+" - "+a.responseText);h(c)},timeout:12E4};b&&b.id&&(a.headers["X-Atlassian-Captcha-Id"]=b.id,a.headers["X-Atlassian-Captcha-Response"]=b.response);e.ajax(a)}return{addComment:function(a,f,d,i,b,g,h,e,c){j.Editor.CommentManager.saveComment(a,f,d,function(a){j.CommentDisplayManager.addComment(h,a,g);e(a)},c)},saveComment:function(a,f,e,i,b,g,h,j){var c=null,c=f?d.contextPath()+"/rest/tinymce/1/content/"+a+"/comments/"+f+"/comment?actions=true":d.contextPath()+"/rest/tinymce/1/content/"+a+"/comment?actions=true";
k(c,e,i,b,g,h,j)},updateComment:function(a,f,e,i,b,g,h){a=d.contextPath()+"/rest/tinymce/1/content/"+a+"/comments/"+f+"?actions=true";k(a,e,i,null,b,g,h)}}}});require("confluence/module-exporter").safeRequire("confluence-quick-edit/editor-comment-manager",function(d){var e=require("confluence/legacy");require("ajs").bind("init.rte",function(){e.Editor.CommentManager=d()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:editor-view-resources', location = 'jscripts/view-content/pushed-navigation-util.js' */
define("confluence-quick-edit/view-content/pushed-navigation-util",["ajs","jquery","window"],function(d,f,a){function c(){return d.Rte&&d.Rte.getEditor()&&!!f("#editpageform").length}var b=a.location.hash,e=a.location.search;return{isInEditPage:c,filterPreviewHashChange:function(){var g=c()||a.history.pushState||!(a.location.hash&&0===a.location.hash.indexOf("#!"))&&!(b&&0===b.indexOf("#!"));b=a.location.hash;return g},filterPreviewNavigationEvent:function(){var b=c()||!/[?&]preview=([^&]*)/.test(a.location.search)&&
!/[?&]preview=([^&]*)/.test(e);e=a.location.search;return b}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/view-content/pushed-navigation-util","Confluence.Editor.PushedNavUtil");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:editor-view-resources', location = 'jscripts/view-content/pushed-navigation.js' */
define("confluence-quick-edit/view-content/pushed-navigation","jquery underscore window confluence/legacy ajs confluence-quick-edit/view-content/pushed-navigation-util".split(" "),function(b,n,a,g,c,d){function e(){if(h){if(f.split("#")[0]!=a.location.href.split("#")[0]){b(a).unbind("popstate",k);a.location.reload()}}else f.split("#")[0]==a.location.href.split("#")[0]&&f.split("#")[1]!=="editor"||a.location.reload()}function i(){f=a.location.href}function l(){var b=g.Editor.Drafts.unloadMessage();
if(b){g.Editor.Drafts.unBindUnloadMessage();if(confirm(b+"\n\n"+"Press OK to continue, or Cancel to stay on the current page.")){c.trigger("analytics",{name:"rte.quick-edit.confirmation.leaving"});e()}else{c.trigger("analytics",{name:"rte.quick-edit.confirmation.staying"});if(h){j=true;a.history.forward()}else a.location.hash="editor";g.Editor.Drafts.bindUnloadMessage()}}else e()}function o(){d.isInEditPage()?a.location.hash!=="#editor"&&l():e()}function k(){j?j=false:d.isInEditPage()?l():e()}function m(a,b){return function(){n.every(b,
function(a){return a()})&&a()}}var h=!!a.history.pushState,j=false,f=a.location.href,p=[d.filterPreviewHashChange],q=[d.filterPreviewNavigationEvent];c.bind("rte-quick-edit-enable-handlers",function(){a.location.hash==="#editor"&&b("#editPageLink").click()});return function(){i();if(h){b(a).bind("popstate",m(k,q));b(a).bind("rte-quick-edit-push-state",i)}else{b(a).bind("hashchange",m(o,p));b(a).bind("rte-quick-edit-push-hash",i)}}});
require("confluence/module-exporter").safeRequire("confluence-quick-edit/view-content/pushed-navigation",function(b){require("ajs").toInit(function(){setTimeout(b,0)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-trigger', location = 'node_modules/@atlassian/aui/src/js/aui/trigger.js' */
("undefined"===typeof window?global:window).__50e2876f514ad7c8f1fee05297cde9e2=function(){function e(a){return a&&a.__esModule?a:{"default":a}}function d(a,b){if(a.isEnabled()){var c=document.getElementById(a.getAttribute("aria-controls"));c&&c.message&&c.message(b)}}"use strict";var g=e(__307d3e18fd611f85395c67cddeb1fe24),h=e(__574ac67f906effeb9d8ec2753b23cf28),f=e(__c1ce1f1e3e613f564fc234ff043570f1);(0,f.default)("data-aui-trigger",{type:f.default.type.ATTRIBUTE,events:{click:function(a,b){var c=
b.target,c=(0,g.default)(c).closest("a[href]",a);c.length&&c[0]!==a||(d(a,b),b.preventDefault())},mouseenter:function(a,b){d(a,b)},mouseleave:function(a,b){d(a,b)},focus:function(a,b){d(a,b)},blur:function(a,b){d(a,b)}},prototype:{disable:function(){this.setAttribute("aria-disabled","true")},enable:function(){this.setAttribute("aria-disabled","false")},isEnabled:function(){return"true"!==this.getAttribute("aria-disabled")}}});(0,h.default)("aui/trigger");return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-trigger', location = 'src/soy/trigger.soy' */
// This file was automatically generated from trigger.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.trigger.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.trigger == 'undefined') { aui.trigger = {}; }


aui.trigger.trigger = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '" ' : '') + ' class="' + aui.renderExtraClasses(opt_data) + '" aria-controls="' + soy.$$escapeHtml(opt_data.menu.id) + '" aria-haspopup="true" role="button"' + ((opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '') + ((opt_data.container) ? ' data-container="' + soy.$$escapeHtml(opt_data.container) + '"' : '') + (((! opt_data.tagName || opt_data.tagName == 'a') && (! opt_data.extraAttributes || Object.prototype.toString.call(opt_data.extraAttributes) === '[object Object]' && ! opt_data.extraAttributes.href && ! opt_data.extraAttributes.tabindex || (! opt_data.extraAttributes.href || ! opt_data.extraAttributes.tabindex))) ? ' tabindex="0"' : '') + ' data-aui-trigger' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + ((! (opt_data.showIcon == false)) ? '<span class="icon ' + soy.$$escapeHtml(opt_data.iconClasses ? opt_data.iconClasses : 'aui-icon-dropdown') + '">' + ((opt_data.iconText) ? soy.$$escapeHtml(opt_data.iconText) : '') + '</span>' : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a') + '>';
};
if (goog.DEBUG) {
  aui.trigger.trigger.soyTemplateName = 'aui.trigger.trigger';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-attributes', location = 'node_modules/@atlassian/aui/src/js/aui/internal/attributes.js' */
("undefined"===typeof window?global:window).__29fa312a51517f20df339a1900640e1d=function(){function d(a){return null!==a}function e(a,b,c){c?a.setAttribute(b,""):a.removeAttribute(b)}function f(a,b){var c=function(a){return a.toLowerCase()===b.toLowerCase()},d=null===b,e=!d&&!a.values.filter(c).length;return d?a.hasOwnProperty("missingDefault")?a.missingDefault:null:e?a.hasOwnProperty("invalidDefault")?a.invalidDefault:a.hasOwnProperty("missingDefault")?a.missingDefault:null:a.values.length?a.values.filter(c)[0]:
null}function g(a,b,c){a.setAttribute(b.attribute,c)}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.computeBooleanValue=d;b.setBooleanAttribute=e;b.computeEnumValue=f;b.setEnumAttribute=g;b.default={computeBooleanValue:d,setBooleanAttribute:e,computeEnumValue:f,setEnumAttribute:g};return b}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-enforcer', location = 'node_modules/@atlassian/aui/src/js/aui/internal/enforcer.js' */
("undefined"===typeof window?global:window).__8339408c10b0a9052af9f3aad7b3a4e8=function(){var c={};"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d;var a=__cf890abdf040e0993fb71f2f839bc972;if(a&&a.__esModule)d=a;else{var b={};if(null!=a)for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(b[e]=a[e]);b.default=a;d=b}c.default=function(a){function c(b){return e(function(){return a.hasAttribute(b)},b+" wasn't defined")}function b(d){if(!c(d,a))return!1;var f=a.getAttribute(d);
return e(function(){return document.getElementById(f)},'an element with id set to "'+f+'" was not found')}function e(b,c){return!b()?(a?d.error(c,a):d.error(c),!1):!0}return{attributeExists:c,refersTo:b,satisfiesRules:e,ariaControls:function(){return b("aria-controls")},ariaOwns:function(){return b("aria-owns")}}};return c=c["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-inline-dialog2', location = 'node_modules/@atlassian/aui/src/js/aui/inline-dialog2.js' */
("undefined"===typeof window?global:window).__2883f62e804d6ae6a52910b6c4a55520=function(){function c(a){return a&&a.__esModule?a:{"default":a}}function k(a,b){var c=document.querySelector('[aria-controls="'+a.id+'"]');c&&b(c)}function m(a){a=a.target;(0,d.default)(a).set("mouse-inside",!0);a.message({type:"mouseenter"})}function n(a){a=a.target;(0,d.default)(a).set("mouse-inside",!1);a.message({type:"mouseleave"})}function l(a){(0,d.default)(a).set("mouse-inside",void 0);a.removeEventListener("mouseenter",
m);a.removeEventListener("mouseleave",n);"hover"===a.respondsTo&&((0,d.default)(a).set("mouse-inside",!1),a.addEventListener("mouseenter",m),a.addEventListener("mouseleave",n))}function i(a){var b=!a.hasAttribute("aria-hidden"),c=a.hasAttribute("open");if(b||a.open!==c)c?((0,d.default)(a).set("is-processing-show",!0),(0,e.default)(a).show(),(0,e.default)(a).isVisible()?k(a,function(b){a._auiAlignment||(a._auiAlignment=new o.default(a,b));a._auiAlignment.enable();b.setAttribute("aria-expanded","true")}):
a.open=!1,(0,d.default)(a).set("is-processing-show",!1)):((0,e.default)(a).hide(),(0,e.default)(a).isVisible()?a.open=!0:k(a,function(b){a._auiAlignment||(a._auiAlignment=new o.default(a,b));a._auiAlignment.disable();b.setAttribute("aria-expanded","false")}))}var j={};"use strict";Object.defineProperty(j,"__esModule",{value:!0});var p=c(__307d3e18fd611f85395c67cddeb1fe24),o=c(__f420c577506564c314d7d5d82088641c),q=c(__574ac67f906effeb9d8ec2753b23cf28),f=c(__29fa312a51517f20df339a1900640e1d),r=c(__8339408c10b0a9052af9f3aad7b3a4e8),
s=c(__4d02fe17b8e885a34493e34af3d145dd),e=c(__fe0cd0a7ef176e2ef4e0e105d1ce31f5),g=c(__c1ce1f1e3e613f564fc234ff043570f1),d=c(__fd7d82ce22cd33cac1609667ce8040f9),t={click:function(a){if(a.open){if(!(0,e.default)(a).isPersistent())a.open=!1}else a.open=!0},mouseenter:function(a){a.open||(a.open=!0);a._clearMouseleaveTimeout&&a._clearMouseleaveTimeout()},mouseleave:function(a){if(!(0,e.default)(a).isPersistent()&&a.open){a._clearMouseleaveTimeout&&a._clearMouseleaveTimeout();var b=setTimeout(function(){if(!(0,
d.default)(a).get("mouse-inside"))a.open=!1},1E3);a._clearMouseleaveTimeout=function(){clearTimeout(b);a._clearMouseleaveTimeout=null}}},focus:function(a){a.open||(a.open=!0)},blur:function(a){if(!(0,e.default)(a).isPersistent()&&a.open)a.open=!1}},h={attribute:"responds-to",values:["toggle","hover"],missingDefault:"toggle",invalidDefault:"toggle"},g=(0,g.default)("aui-inline-dialog",{prototype:{get open(){return(0,e.default)(this).isVisible()},set open(a){f.default.setBooleanAttribute(this,"open",
a);i(this)},get persistent(){return this.hasAttribute("persistent")},set persistent(a){f.default.setBooleanAttribute(this,"persistent",a)},get respondsTo(){return f.default.computeEnumValue(h,this.getAttribute(h.attribute))},set respondsTo(a){var b=this.respondsTo;f.default.setEnumAttribute(this,h,a);b!==this.respondsTo&&l(this)},message:function(a){var b={toggle:["click"],hover:["mouseenter","mouseleave","focus","blur"]}[this.respondsTo];if(b&&-1<b.indexOf(a.type))t[a.type](this,a);return this}},
created:function(a){(0,d.default)(a).set("is-processing-show",!1);k(a,function(b){b.setAttribute("aria-expanded",a.open);b.setAttribute("aria-haspopup","true")})},attributes:{"aria-hidden":function(a,b){f.default.setBooleanAttribute(a,"open","false"===b.newValue)},open:function(a){document.body.contains(a)&&i(a)},"responds-to":function(a,b){var c=f.default.computeEnumValue(h,b.oldValue),d=f.default.computeEnumValue(h,b.newValue);c!==d&&l(a)}},attached:function(a){(0,r.default)(a).attributeExists("id");
a.hasAttribute("open")?(0,d.default)(a).get("is-processing-show")||i(a):i(a);l(a)},detached:function(a){a._auiAlignment&&a._auiAlignment.destroy()},template:function(a){var b=(0,p.default)('<div class="aui-inline-dialog-contents"></div>').append(a.childNodes);(0,p.default)(a).addClass("aui-layer").html(b)}});(0,q.default)("aui/inline-dialog2",g);(0,s.default)("InlineDialog2",g);j.default=g;return j=j["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-inline-dialog2', location = 'src/soy/inline-dialog2.soy' */
// This file was automatically generated from inline-dialog2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.inlineDialog2.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.inlineDialog2 == 'undefined') { aui.inlineDialog2 = {}; }


aui.inlineDialog2.inlineDialog2 = function(opt_data, opt_ignored) {
  return '<aui-inline-dialog' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="' + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.alignment) ? ' alignment="' + soy.$$escapeHtml(opt_data.alignment) + '"' : '') + ((opt_data.open) ? ' open' : '') + ((opt_data.persistent) ? ' persistent' : '') + ((opt_data.respondsTo) ? ' responds-to="' + soy.$$escapeHtml(opt_data.respondsTo) + '"' : '') + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</aui-inline-dialog>';
};
if (goog.DEBUG) {
  aui.inlineDialog2.inlineDialog2.soyTemplateName = 'aui.inlineDialog2.inlineDialog2';
}


aui.inlineDialog2.trigger = function(opt_data, opt_ignored) {
  return '' + aui.trigger.trigger(soy.$$augmentMap(opt_data, {showIcon: opt_data.showIcon ? opt_data.showIcon : false}));
};
if (goog.DEBUG) {
  aui.inlineDialog2.trigger.soyTemplateName = 'aui.inlineDialog2.trigger';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/preview-support.js' */
define("cp/confluence/preview-support",["ajs"],function(b){var g=function(h){h.bridgeId=""+a(window);window.parent.postMessage(h,window.location.origin)};var d=function(h){var i=h.frameElement&&h.frameElement.getAttribute("name");return i&&i==="fallback-mode-iframe"};var a=function(h){return h.frameElement&&h.frameElement.getAttribute("data-bridge-id")};var f=function(){var h=c.SELECTOR_STRINGS.IMAGE+", "+c.SELECTOR_STRINGS.LINK_IMAGE+", "+c.SELECTOR_STRINGS.EXTERNAL_IMAGE;if(c.isPDFSupported()){h+=", "+c.SELECTOR_STRINGS.PDF+", "+c.SELECTOR_STRINGS.LINK_PDF}return h};var e=function(){return c.SELECTOR_STRINGS.IMAGE+", "+c.SELECTOR_STRINGS.EXTERNAL_IMAGE+", "+c.SELECTOR_STRINGS.FILE+", "+c.SELECTOR_STRINGS.LINK_FILE+", "+c.SELECTOR_STRINGS.ATTACHMENT_MACRO};var c={SELECTOR_STRINGS:{IMAGE:"img.confluence-embedded-image[data-linked-resource-id]",EXTERNAL_IMAGE:"img.confluence-embedded-image.confluence-external-resource",PDF:"a.confluence-embedded-file[data-nice-type='PDF Document']",LINK_IMAGE:"a[data-linked-resource-type='attachment'][data-nice-type='Image']",LINK_PDF:"a[data-linked-resource-type='attachment'][data-nice-type='PDF Document']",FILE:"a.confluence-embedded-file",LINK_FILE:"a[data-linked-resource-type='attachment']",FILE_OVERLAY:"span.confluence-embedded-file-wrapper .overlay",ATTACHMENT_MACRO:".plugin_attachments_container a.previewAttachmentLink"},VIEW_MODE:{FULL:"full",COMMENT:"comment",SIMPLE:"simple"},isPDFSupported:function(){return b.DarkFeatures.isEnabled("pdf-preview")},getFileSelectorString:function(){if(b.DarkFeatures.isEnabled("previews.trigger-all-file-types")){return e()}else{return f()}},sendPreviewerToParent:function(j,i,h,k){g({type:"openPreviewOnParent",files:j,viewMode:i,fileQuery:h,analyticsSource:k})},autoShowAnnotationsOnParent:function(){g({type:"autoShowAnnotationsOnParent"})},isFallbackModeIframe:window.top!==window.self&&d(window)};return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/preview.js' */
define("cp/confluence/preview",["underscore","jquery","cp/confluence/preview-support","ajs","confluence/jsUri"],function(k,e,f,i,b){var j,l;e(document).ready(g);function g(){var o=e(f.getFileSelectorString());o.off("click.fb");e(document.body).off("click.filePreviews");e(document.body).on("click.filePreviews",f.getFileSelectorString(),n);e(document.body).on("click.filePreviews",f.SELECTOR_STRINGS.FILE_OVERLAY,h);e(window).on("popstate",function(){if(!l&&i.DarkFeatures.isEnabled("previews.sharing.pushstate")){a()}});a()}function n(o){if(!o.altKey&&!o.ctrlKey&&!o.metaKey&&!e(this).parent().closest("a, #draft-changes-dialog, #cp-annotations").length){o.preventDefault();m(this)}}function h(p){p.preventDefault();var o=e(p.target);var q=o.closest("span.confluence-embedded-file-wrapper");m(q.find(f.SELECTOR_STRINGS.IMAGE+","+f.SELECTOR_STRINGS.FILE),undefined,undefined,o.closest(".comment-count-overlay").length>0)}function m(q,r,o,x){if(!l){var s="confluence-previews-css";var p="media-viewer";WRM.require("wr!com.atlassian.confluence.plugins.confluence-previews:"+s);var y=e.Deferred(),u=y.promise();var t=setInterval(function(){for(var B=0;B<document.styleSheets.length;B++){var C=document.styleSheets[B];if(C.href&&(C.href.indexOf(s)!==-1||C.href.indexOf(p)!==-1)){w();return}}},100);var w=function(){y.resolve();clearInterval(t)};var A=i.Meta.get("static-resource-url-prefix");var z="com.atlassian.confluence.plugins.confluence-previews:mediaviewer-chunks";var v=A+"/download/resources/"+z+"/";l=e.when(WRM.require(["wr!com.atlassian.confluence.plugins.confluence-previews:confluence-previews-js","wrc!media-viewer"]),u);l.done(function(){j=require("cp/confluence/file-preview-loader");d(q,r,o,x);i.bind("reset-file-list.filePreviews",j.resetPreviewFileList)});if(!f.isFallbackModeIframe){Confluence.PageLoadingIndicator(e("body")).showUntilResolved(l,"We were unable to load the file previewer")}}else{l.done(k.partial(d,q,r,o,x))}return l}var d=function(q,p,s,t){var o=e("#content");var r=e(q).closest(".comment,.cq-content,.ic-content");if(!p){if(!(o.hasClass("page")||o.hasClass("blogpost"))){p=f.VIEW_MODE.SIMPLE}else{if(r.length){p=f.VIEW_MODE.COMMENT}}}if(p===f.VIEW_MODE.COMMENT){j.showPreviewerForComment(q,r,p,t)}else{if(p===f.VIEW_MODE.SIMPLE){j.showPreviewerForSingleFile(q,p,s)}else{p=f.VIEW_MODE.FULL;j.showPreviewer(undefined,q,p,t)}}};function a(){if(c()){var q=new b(window.location.href);var p=window.history.pushState&&i.DarkFeatures.isEnabled("previews.sharing.pushstate");if(q.getQueryParamValue("preview")&&!p){var r="#!/preview"+q.getQueryParamValue("preview");var o=decodeURIComponent(q.deleteQueryParam("preview").setAnchor(r).toString());if(window.history.replaceState){window.history.replaceState({},"",o)}else{window.location=o}}else{if(q.anchor().indexOf("!/preview")===0&&p){var o;if(q.getQueryParamValue("preview")){o=q.setAnchor("")}else{o=q.addQueryParam("preview",q.anchor().substr("!/preview".length,q.anchor().length)).setAnchor("")}window.history.replaceState({},"",o)}}m()}}function c(){var o=new b(window.location.href);return i.DarkFeatures.isEnabled("previews.sharing")&&(o.getQueryParamValue("preview")||(o.anchor()&&o.anchor().indexOf("!/preview")===0))}return{loadConfluencePreviews:m}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/jquery-previewer.js' */
require(["cp/confluence/preview","jquery"],function(b,a){a.fn.previewer=function(c){if(!a(this).length){return this}var d=a.extend({},c);return this.each(function(){var f=a(this);var e=f.closest("li");var g=d.src||f.attr("data-image-src")||f.attr("src");if(g){f.click(function(j){var i={src:g,type:d.type,thumbnail:g,title:d.title||e.attr("data-file-name")||g,id:e.attr("data-attachment-id"),ownerId:e.attr("data-owner-id")};var h=b.loadConfluencePreviews([i],d.viewMode||"simple",d.from||"custom");d.zindex&&h.done(function(){a(".cp-container").css({"z-index":d.zindex})})})}})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/store-1.3.1.js' */
(function(){var l={},h=window,k=h.document,c="localStorage",n="globalStorage",d="__storejs__",g;l.disabled=false;l.set=function(e,o){};l.get=function(e){};l.remove=function(e){};l.clear=function(){};l.transact=function(e,o){var p=l.get(e);if(typeof p=="undefined"){p={}}o(p);l.set(e,p)};l.serialize=function(e){return JSON.stringify(e)};l.deserialize=function(e){if(typeof e!="string"){return undefined}return JSON.parse(e)};function b(){try{return(c in h&&h[c])}catch(e){return false}}function m(){try{return(n in h&&h[n]&&h[n][h.location.hostname])}catch(e){return false}}if(b()){g=h[c];l.set=function(e,o){if(o===undefined){return l.remove(e)}g.setItem(e,l.serialize(o))};l.get=function(e){return l.deserialize(g.getItem(e))};l.remove=function(e){g.removeItem(e)};l.clear=function(){g.clear()}}else{if(m()){g=h[n][h.location.hostname];l.set=function(e,o){if(o===undefined){return l.remove(e)}g[e]=l.serialize(o)};l.get=function(e){return l.deserialize(g[e]&&g[e].value)};l.remove=function(e){delete g[e]};l.clear=function(){for(var e in g){delete g[e]}}}else{if(k.documentElement.addBehavior){var j,f;try{f=new ActiveXObject("htmlfile");f.open();f.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></frame>');f.close();j=f.w.frames[0].document;g=j.createElement("div")}catch(i){g=k.createElement("div");j=k.body}function a(e){return function(){var p=Array.prototype.slice.call(arguments,0);p.unshift(g);j.appendChild(g);g.addBehavior("#default#userData");g.load(c);var o=e.apply(l,p);j.removeChild(g);return o}}l.set=a(function(p,e,o){if(o===undefined){return l.remove(e)}p.setAttribute(e,l.serialize(o));p.save(c)});l.get=a(function(o,e){return l.deserialize(o.getAttribute(e))});l.remove=a(function(o,e){o.removeAttribute(e);o.save(c)});l.clear=a(function(q){var o=q.XMLDocument.documentElement.attributes;q.load(c);for(var p=0,e;e=o[p];p++){q.removeAttribute(e.name)}q.save(c)})}}}try{l.set(d,d);if(l.get(d)!=d){l.disabled=true}l.remove(d)}catch(i){l.disabled=true}if(typeof module!="undefined"){module.exports=l}else{if(typeof define==="function"&&define.amd){define(l)}else{this.store=l}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/page-visibility.js' */
define("atlassian/analytics/page-visibility",function(){var a=(document.hidden!==undefined);var b={supported:a,isHidden:function(){return a?document.hidden:false}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/user-activity-xhr-header.js' */
define("atlassian/analytics/user-activity-xhr-header",["atlassian/analytics/page-visibility"],function(f){var d="x-atlassian-mau-ignore";var e=XMLHttpRequest.prototype.send;var b=window.fetch;var g=XMLHttpRequest.prototype.open;var a=false;var i=Object.create(null);var h=new RegExp("^(?:[a-z]+:)?//","i");var c=function(j){var k=document.createElement("a");k.href=j;return k.hostname};return{install:function(){if(!a&&f.supported){XMLHttpRequest.prototype.open=function(k,j){this._url=j;return g.apply(this,arguments)};XMLHttpRequest.prototype.send=function(){var j=h.test(this._url)?c(this._url) in i:true;if(f.isHidden()&&j){this.setRequestHeader(d,f.isHidden())}e.apply(this,arguments)};if(b){window.fetch=function(j,m){var k=m||{};var l=k.headers;if(f.isHidden()){k.headers=(l)?new Headers(l):new Headers();k.headers.append(d,f.isHidden())}return b.call(this,j,k)}}a=true}},uninstall:function(){if(a){XMLHttpRequest.prototype.send=e;if(b){window.fetch=b}}a=false},addHost:function(j){i[j]=true}}});require("atlassian/analytics/user-activity-xhr-header").install();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/atlassian-analytics.js' */
(function(d){var p=AJS.$.ajax;var k="atlassian-analytics";var i=typeof AJS.contextPath=="function"?AJS.contextPath():typeof AJS.Confluence!="undefined"?AJS.Confluence.getContextPath():window.contextPath!=null?window.contextPath:"";var o=null;var l=null;var f=null;var q="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(y){var x=Math.random()*16|0,w=y=="x"?x:(x&3|8);return w.toString(16)});var s=function(){var w="unknown";if(document.body.id=="jira"){w="jira"}else{if(document.body.id=="com-atlassian-confluence"){w="confluence"}}l=k+"."+w;f=l+".lock"};var e=function(){if(store.get(f)){return false}store.set(f,q);return(store.get(f)===q)};var t=function(){store.set(f,null)};var h=function(){var x=[],z,A,w,y;if(AJS.EventQueue.length==0){return}x=store.get(l)||x;for(w=0,y=AJS.EventQueue.length;w<y;++w){A=AJS.EventQueue[w];if(A.name){z={name:A.name,properties:A.properties,time:A.time||0};x.push(z)}}AJS.EventQueue.length=0;store.set(l,x)};var u=0;var a=function(w){return Math.min(5000*Math.pow(2,w),5*60*1000)};var g=function(){var z;function x(){setTimeout(g,a(u=0))}function w(){setTimeout(g,a(++u))}if(!e()){return x()}h();z=store.get(l);if(!z||!z.length){t();return x()}store.remove(l);t();if(!n(z)){return x()}var A=new Date().getTime();for(var y=0;y<z.length;y++){if(z[y].time>0){z[y].timeDelta=z[y].time-A}else{z[y].timeDelta=y-z.length}delete z[y].time}o=p({type:"POST",url:i+"/rest/analytics/1.0/publish/bulk",data:JSON.stringify(z),contentType:"application/json",dataType:"json"});o.fail(function(){AJS.EventQueue.concat(z);h();w()});o.done(function(){x()})};var n=function(y){for(var x=y.length-1;x>=0;x--){var A="";var z=y[x];var w=z.properties;if(typeof z.name==="undefined"){A="you must provide a name for the event."}else{if(typeof w!=="undefined"&&w!==null){if(w.constructor!==Object){A="properties must be an object with key value pairs."}else{b(w)}}}if(A!==""){AJS.log("WARN: Invalid analytics event detected and ignored, "+A+"\nEvent: "+JSON.stringify(z));y.splice(x,1)}}return y.length};var b=function(y){for(var x in y){if(y.hasOwnProperty(x)){var w=y[x];if(c(w)&&j(w)){}else{if(c(w)&&w.toString){y[x]=w.toString()}else{y[x]=""}}}}};function c(w){return typeof w!=="undefined"&&w!==null}function j(w){return typeof w==="number"||typeof w==="string"||typeof w==="boolean"}var m=function(){if(o&&!(o.state()==="resolved"||o.state()==="rejected")){o.abort()}};AJS.EventQueue=AJS.EventQueue||[];var r=Array.prototype.push;AJS.EventQueue.push=function(w){w.time=new Date().getTime();r.call(AJS.EventQueue,w)};AJS.toInit(function(){s();setTimeout(g,500);v()});d(window).unload(function(){m();h()});AJS.Analytics={triggerPrivacyPolicySafeEvent:function(w,x){AJS.log("WARN: 'triggerPrivacyPolicySafeEvent' has been deprecated");AJS.EventQueue.push({name:w,properties:x})}};AJS.bind("analytics",function(w,x){AJS.EventQueue.push({name:x.name,properties:x.data})});AJS.bind("analyticsEvent",function(w,x){AJS.EventQueue.push({name:x.name,properties:x.data})});var v=function(){if(window.location.pathname.indexOf("/secure/admin/ViewApplicationProperties")>-1){AJS.$("[data-property-id='analytics-enabled']").remove()}else{if(window.location.pathname.indexOf("/secure/admin/EditApplicationProperties")>-1){var x=AJS.$(":contains(Enable Atlassian analytics)");if(x.size()>0){var w=x[x.size()-2];if(w){w.remove()}}}}}}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:application-header-administration-cog-resource', location = 'header/cog.js' */
var NavLinks=(function(a){a.ApplicationHeader=function(b){b.Cog=(function(){var c=function(){var d=AJS.$("#system-admin-menu-content");if(d.length>0){return d}var e=AJS.$("#admin-menu-link-content");if(e.length>0){return e}return AJS.$("#bamboo\\.global\\.header-admin\\.menu")};return{getDropdown:c}}());return b}(a.ApplicationHeader||{});return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminshortcuts.soy' */
// This file was automatically generated from adminshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.adminshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.adminshortcuts == 'undefined') { navlinks.templates.adminshortcuts = {}; }


navlinks.templates.adminshortcuts.section = function(opt_data, opt_ignored) {
  var param5 = '<ul class="aui-list-truncate">';
  var linkList7 = opt_data.links;
  var linkListLen7 = linkList7.length;
  for (var linkIndex7 = 0; linkIndex7 < linkListLen7; linkIndex7++) {
    var linkData7 = linkList7[linkIndex7];
    param5 += '<li><a href="' + soy.$$escapeHtml(linkData7.link) + '">' + soy.$$escapeHtml(linkData7.label) + '</a></li>';
  }
  param5 += '</ul>';
  var output = '' + aui.dropdown2.section({id: 'nl-remote-admin-section', label: "Other applications", content: param5});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.adminshortcuts.section.soyTemplateName = 'navlinks.templates.adminshortcuts.section';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminnavlinks.js' */
var NavLinks=(function(a){var b=false;a.AdminShortcuts=(function(){var d=function(){return AJS.$.ajax({url:AJS.contextPath()+"/rest/menu/latest/admin",cache:false,dataType:"json"})};var c=function(){AJS.$("#nl-remote-admin-section").on("click","a",function(){NL.trackEvent("remoteAdminItemSelected",NL.getCurrentApplication(),$(this).attr("href"))})};return{renderLoading:function(){var e=AJS.$(navlinks.templates.appswitcher.loading());a.ApplicationHeader.Cog.getDropdown().append(e)},render:function(){if(!AJS.$("#nl-remote-admin-section").length&&!b){a.AdminShortcuts.renderLoading();b=true;d().done(function(f){f=_.reject(f,function(g){return g.local===true});if(f.length){var e=navlinks.templates.adminshortcuts.section({links:f});a.ApplicationHeader.Cog.getDropdown().append(e);c()}}).always(function(){b=false;a.ApplicationHeader.Cog.getDropdown().find(".app-switcher-loading").remove()})}}}}());return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts', location = 'adminshortcuts/adminshortcuts.js' */
AJS.$(function(){if(AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled("rotp.admin.shortcuts")){NavLinks.ApplicationHeader.Cog.getDropdown().on("aui-dropdown2-show",function(){NavLinks.AdminShortcuts.render()})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.soy' */
// This file was automatically generated from projectshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.projectshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.projectshortcuts == 'undefined') { navlinks.templates.projectshortcuts = {}; }


navlinks.templates.projectshortcuts.dialogContent = function(opt_data, opt_ignored) {
  return '' + ((opt_data.localShortcuts && opt_data.localShortcuts.length > 0) ? navlinks.templates.projectshortcuts.dialogContentShortcuts({shortcuts: opt_data.localShortcuts, listClass: 'projectshortcut-links'}) : '') + ((opt_data.remoteShortcuts != null) ? (opt_data.remoteShortcuts.length > 0) ? '<h2 class="projectshortcuts-heading">Related Links</h2>' + navlinks.templates.projectshortcuts.dialogContentShortcuts(soy.$$augmentMap(opt_data.remoteShortcuts, {shortcuts: opt_data.remoteShortcuts, listClass: 'projectshortcut-links'})) : '' : navlinks.templates.projectshortcuts.dialogLoading(null));
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContent.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContent';
}


navlinks.templates.projectshortcuts.headingWrapper = function(opt_data, opt_ignored) {
  return '<div class="project-dialog-header-wrapper"><div class="project-header"><img class="project-img" src="' + soy.$$escapeHtml(opt_data.logoUrl) + '"><h2 class="dialog-title">' + soy.$$escapeHtml(opt_data.title) + '</h2></div><div class="project-content-wrapper">' + soy.$$filterNoAutoescape(opt_data.contentHtml) + '</div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.headingWrapper.soyTemplateName = 'navlinks.templates.projectshortcuts.headingWrapper';
}


navlinks.templates.projectshortcuts.dialogContentShortcuts = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
  var shortcutList35 = opt_data.shortcuts;
  var shortcutListLen35 = shortcutList35.length;
  for (var shortcutIndex35 = 0; shortcutIndex35 < shortcutListLen35; shortcutIndex35++) {
    var shortcutData35 = shortcutList35[shortcutIndex35];
    output += '<li' + ((shortcutIndex35 == shortcutListLen35 - 1) ? ' class="last"' : '') + '>' + navlinks.templates.projectshortcuts.dialogContentShortcut(shortcutData35) + '</li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcuts.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcuts';
}


navlinks.templates.projectshortcuts.dialogContentShortcut = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.link) + '"' + ((opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.label) + '</a>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcut.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcut';
}


navlinks.templates.projectshortcuts.dialogLoading = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="projectshortcuts-loading">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogLoading.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogLoading';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.js' */
(function(e,g){var i,k={},m="key",b="name",j="entity-type";function f(s){var n=e(this),o=n.data(m),q=n.data(b),p=n.data(j);if(typeof o==="undefined"){return}s.preventDefault();i=new AJS.Dialog({width:600,keypressListener:function(u){if(u.which==jQuery.ui.keyCode.ESCAPE){i.remove()}},id:"project-shortcuts-dialog"}).addCancel("Close",function(){i.remove()}).addPanel("",navlinks.templates.projectshortcuts.headingWrapper({title:q,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogLoading({text:"Retrieving links…"})})).show();c(i);if(!k[o]){k[o]={entity:{title:q},localShortcuts:null,remoteShortcuts:null};d(AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+o,{entityType:p}).done(t);d(AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+o,{entityType:p}).done(r).fail(function(){var u=i.getCurrentPanel().body.find(".project-content-wrapper");u.find(".projectshortcuts-loading").remove();AJS.messages.error(u,{body:"Could not retrieve remote project shortcuts",closeable:false});c(i)})}else{l(k[o])}function t(u){k[o].localShortcuts=u.shortcuts;l(k[o])}function r(u){k[o].remoteShortcuts=u.shortcuts;l(k[o])}}function h(){return e(".project-shortcut-dialog-trigger img").attr("src")}function l(n){if(n.localShortcuts){i.getCurrentPanel().html(navlinks.templates.projectshortcuts.headingWrapper({title:n.entity.title,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogContent(n)}));c(i)}}function a(p){var o=210;if(!p||p.length<=o){return p}var n=o;while(n>0&&p.charAt(n)!=" "){n--}if(n==0){n=o}p=p.substring(0,n);if(p.length>=n){p=p+"..."}return p}function c(n){var q=n.popup.element,p=q.find(".dialog-panel-body"),o=q.find(".dialog-components");p.height("auto");q.height(o.outerHeight()-1);e(".aui-shadow").remove()}function d(n,o){return e.ajax({url:n,cache:false,data:o,dataType:"json"})}e(document).on("click",".project-shortcut-dialog-trigger",f)}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:atlassian-ui-popup-display-controller', location = 'popups/DisplayController.js' */
AJS.Popups=AJS.Popups||{};AJS.Popups.DisplayController=function(){var c=[];var a=false;var b=false;AJS.toInit(function(){setTimeout(function(){AJS.Popups.DisplayController.render()},0)});return{request:function(d){c.push(d);if(a&&b===false){this.render()}},render:function(){c.sort(function(e,d){return e.weight-d.weight});a=true;if(c.length!==0){b=true;c[0].show()}}}}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jira-issues-view-mode-resources', location = 'jira/jira-issues-view-mode/main.js' */
require(["ajs","jquery"],function(b,c){var a="wr!confluence.extra.jira:jira-issues-view-mode-async-resource";c(document).ready(function(){var d=c(".wiki-content [data-jira-key][data-client-id]");if(d.length==0){return false}WRM.require(a,function(){require(["confluence/jim/jira/jira-issues-view-mode/lazy-loading","confluence/jim/jira/jira-issues-view-mode/fix-ui"],function(f,e){f.init(d).done(function(){e.fixBreakIconInOldConf()})})})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:amd-support', location = 'amd/confluence-shim.js' */
define("confluence/jim/confluence-shim",function(){return window.Confluence});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:amd-support', location = 'amd/amd-exporter.js' */
define("confluence/jim/amd/module-exporter",[],function(){var a={};a.namespace=function(e,f,d){var g=e.split(".");d=d||window;for(var c=0,h=g.length-1;c<h;c++){var b=d[g[c]];d=(b!=null)?b:d[g[c]]={}}if(d[g[c]]){if(window.console&&window.console.warn){window.console.warn('Value of "'+e+'" was overridden')}}d[g[c]]=f||d[g[c]]||{};return d[g[c]]};a.safeRequire=function(c,b){if(define&&define.amd===undefined){var d=require(c);if(b){b(d)}}};a.exportModuleAsGlobal=function(c,d,b){a.safeRequire(c,function(e){a.namespace(d,e);if(b){b(e)}})};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugin.jslibs:underscore-1.5.2', location = 'libs/underscore/1.5.2/underscore-1.5.2.js' */
(function(l){define("atlassian/libs/underscore-1.5.2",function(){var o={};l.call(o);return o._.noConflict()})})(function(){(function(){var l=this,o=l._,p={},k=Array.prototype,q=Object.prototype,t=k.push,i=k.slice,r=k.concat,m=q.toString,L=q.hasOwnProperty,A=k.forEach,B=k.map,C=k.reduce,D=k.reduceRight,E=k.filter,F=k.every,G=k.some,s=k.indexOf,H=k.lastIndexOf,q=Array.isArray,M=Object.keys,u=Function.prototype.bind,b=function(a){if(a instanceof b)return a;if(!(this instanceof b))return new b(a);this._wrapped=
a};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):l._=b;b.VERSION="1.5.2";var j=b.each=b.forEach=function(a,c,d){if(a!=null)if(A&&a.forEach===A)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(c.call(d,a[e],e,a)===p)break}else for(var g=b.keys(a),e=0,f=g.length;e<f;e++)if(c.call(d,a[g[e]],g[e],a)===p)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(B&&a.map===B)return a.map(c,b);
j(a,function(a,g,h){e.push(c.call(b,a,g,h))});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(C&&a.reduce===C){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,N){if(f)d=c.call(e,d,a,b,N);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(D&&a.reduceRight===D){e&&(c=b.bind(c,e));return f?a.reduceRight(c,
d):a.reduceRight(c)}var g=a.length;if(g!==+g)var h=b.keys(a),g=h.length;j(a,function(b,i,j){i=h?h[--g]:--g;if(f)d=c.call(e,d,a[i],i,j);else{d=a[i];f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.find=b.detect=function(a,c,b){var e;I(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(E&&a.filter===E)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&e.push(a)});return e};
b.reject=function(a,c,d){return b.filter(a,function(a,b,g){return!c.call(d,a,b,g)},d)};b.every=b.all=function(a,c,d){c||(c=b.identity);var e=true;if(a==null)return e;if(F&&a.every===F)return a.every(c,d);j(a,function(a,b,h){if(!(e=e&&c.call(d,a,b,h)))return p});return!!e};var I=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(G&&a.some===G)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return p});return!!e};b.contains=b.include=function(a,c){return a==
null?false:s&&a.indexOf===s?a.indexOf(c)!=-1:I(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2),e=b.isFunction(c);return b.map(a,function(a){return(e?c:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};b.where=function(a,c,d){return b.isEmpty(c)?d?void 0:[]:b[d?"find":"filter"](a,function(a){for(var b in c)if(c[b]!==a[b])return false;return true})};b.findWhere=function(a,c){return b.where(a,c,true)};b.max=function(a,c,d){if(!c&&b.isArray(a)&&
a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity,value:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity,value:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});return e.value};
b.shuffle=function(a){var c,d=0,e=[];j(a,function(a){c=b.random(d++);e[d-1]=e[c];e[c]=a});return e};b.sample=function(a,c,d){return arguments.length<2||d?a[b.random(a.length-1)]:b.shuffle(a).slice(0,Math.max(0,c))};var v=function(a){return b.isFunction(a)?a:function(c){return c[a]}};b.sortBy=function(a,c,d){var e=v(c);return b.pluck(b.map(a,function(a,c,b){return{value:a,index:c,criteria:e.call(d,a,c,b)}}).sort(function(a,c){var b=a.criteria,d=c.criteria;if(b!==d){if(b>d||b===void 0)return 1;if(b<
d||d===void 0)return-1}return a.index-c.index}),"value")};var w=function(a){return function(c,d,e){var f={},g=d==null?b.identity:v(d);j(c,function(b,d){var i=g.call(e,b,d,c);a(f,i,b)});return f}};b.groupBy=w(function(a,c,d){(b.has(a,c)?a[c]:a[c]=[]).push(d)});b.indexBy=w(function(a,c,b){a[c]=b});b.countBy=w(function(a,c){b.has(a,c)?a[c]++:a[c]=1});b.sortedIndex=function(a,c,d,e){for(var d=d==null?b.identity:v(d),c=d.call(e,c),f=0,g=a.length;f<g;){var h=f+g>>>1;d.call(e,a[h])<c?f=h+1:g=h}return f};
b.toArray=function(a){return!a?[]:b.isArray(a)?i.call(a):a.length===+a.length?b.map(a,b.identity):b.values(a)};b.size=function(a){return a==null?0:a.length===+a.length?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,c,b){return a==null?void 0:c==null||b?a[0]:i.call(a,0,c)};b.initial=function(a,c,b){return i.call(a,0,a.length-(c==null||b?1:c))};b.last=function(a,c,b){return a==null?void 0:c==null||b?a[a.length-1]:i.call(a,Math.max(a.length-c,0))};b.rest=b.tail=b.drop=function(a,b,d){return i.call(a,
b==null||d?1:b)};b.compact=function(a){return b.filter(a,b.identity)};var J=function(a,c,d){if(c&&b.every(a,b.isArray))return r.apply(d,a);j(a,function(a){b.isArray(a)||b.isArguments(a)?c?t.apply(d,a):J(a,c,d):d.push(a)});return d};b.flatten=function(a,b){return J(a,b,[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d,e){if(b.isFunction(c)){e=d;d=c;c=false}var d=d?b.map(a,d,e):a,f=[],g=[];j(d,function(d,e){if(c?!e||g[g.length-1]!==d:!b.contains(g,
d)){g.push(d);f.push(a[e])}});return f};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=r.apply(k,i.call(arguments,1));return b.filter(a,function(a){return!b.contains(c,a)})};b.zip=function(){for(var a=b.max(b.pluck(arguments,"length").concat(0)),c=Array(a),d=0;d<a;d++)c[d]=b.pluck(arguments,""+d);return c};
b.object=function(a,b){if(a==null)return{};for(var d={},e=0,f=a.length;e<f;e++)b?d[a[e]]=b[e]:d[a[e][0]]=a[e][1];return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e=0,f=a.length;if(d)if(typeof d=="number")e=d<0?Math.max(0,f+d):d;else{e=b.sortedIndex(a,c);return a[e]===c?e:-1}if(s&&a.indexOf===s)return a.indexOf(c,d);for(;e<f;e++)if(a[e]===c)return e;return-1};b.lastIndexOf=function(a,b,d){if(a==null)return-1;var e=d!=null;if(H&&a.lastIndexOf===H)return e?a.lastIndexOf(b,d):a.lastIndexOf(b);
for(d=e?d:a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var x=function(){};b.bind=function(a,c){var d,e;if(u&&a.bind===u)return u.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;d=i.call(arguments,2);return e=function(){if(!(this instanceof e))return a.apply(c,d.concat(i.call(arguments)));x.prototype=a.prototype;var b=
new x;x.prototype=null;var g=a.apply(b,d.concat(i.call(arguments)));return Object(g)===g?g:b}};b.partial=function(a){var b=i.call(arguments,1);return function(){return a.apply(this,b.concat(i.call(arguments)))}};b.bindAll=function(a){var c=i.call(arguments,1);if(c.length===0)throw Error("bindAll must be passed function names");j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=
a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,b,d){var e,f,g,h=null,i=0;d||(d={});var j=function(){i=d.leading===false?0:new Date;h=null;g=a.apply(e,f)};return function(){var k=new Date;!i&&d.leading===false&&(i=k);var K=b-(k-i);e=this;f=arguments;if(K<=0){clearTimeout(h);h=null;i=k;g=a.apply(e,f)}else!h&&d.trailing!==
false&&(h=setTimeout(j,K));return g}};b.debounce=function(a,b,d){var e,f,g,h,i;return function(){g=this;f=arguments;h=new Date;var j=function(){var k=new Date-h;if(k<b)e=setTimeout(j,b-k);else{e=null;d||(i=a.apply(g,f))}},k=d&&!e;e||(e=setTimeout(j,b));k&&(i=a.apply(g,f));return i}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;d=a.apply(this,arguments);a=null;return d}};b.wrap=function(a,b){return function(){var d=[a];t.apply(d,arguments);return b.apply(this,d)}};b.compose=
function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}};b.keys=M||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&c.push(d);return c};b.values=function(a){for(var c=b.keys(a),d=c.length,e=Array(d),f=0;f<d;f++)e[f]=a[c[f]];return e};b.pairs=function(a){for(var c=b.keys(a),d=c.length,e=Array(d),f=0;f<
d;f++)e[f]=[c[f],a[c[f]]];return e};b.invert=function(a){for(var c={},d=b.keys(a),e=0,f=d.length;e<f;e++)c[a[d[e]]]=d[e];return c};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){if(b)for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var b={},d=r.apply(k,i.call(arguments,1));j(d,function(d){d in a&&(b[d]=a[d])});return b};b.omit=function(a){var c={},d=r.apply(k,i.call(arguments,1)),
e;for(e in a)b.contains(d,e)||(c[e]=a[e]);return c};b.defaults=function(a){j(i.call(arguments,1),function(b){if(b)for(var d in b)a[d]===void 0&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};var y=function(a,c,d,e){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a instanceof b)a=a._wrapped;if(c instanceof b)c=c._wrapped;var f=m.call(a);if(f!=m.call(c))return false;switch(f){case "[object String]":return a==
String(c);case "[object Number]":return a!=+a?c!=+c:a==0?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return false;for(var g=d.length;g--;)if(d[g]==a)return e[g]==c;var g=a.constructor,h=c.constructor;if(g!==h&&(!b.isFunction(g)||!(g instanceof g&&b.isFunction(h)&&h instanceof h)))return false;d.push(a);e.push(c);
g=0;h=true;if(f=="[object Array]"){g=a.length;if(h=g==c.length)for(;g--;)if(!(h=y(a[g],c[g],d,e)))break}else{for(var i in a)if(b.has(a,i)){g++;if(!(h=b.has(c,i)&&y(a[i],c[i],d,e)))break}if(h){for(i in c)if(b.has(c,i)&&!g--)break;h=!g}}d.pop();e.pop();return h};b.isEqual=function(a,b){return y(a,b,[],[])};b.isEmpty=function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType===
1)};b.isArray=q||function(a){return m.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};j("Arguments Function String Number Date RegExp".split(" "),function(a){b["is"+a]=function(b){return m.call(b)=="[object "+a+"]"}});b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});"function"!==typeof/./&&(b.isFunction=function(a){return typeof a==="function"});b.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};b.isNaN=function(a){return b.isNumber(a)&&
a!=+a};b.isBoolean=function(a){return a===true||a===false||m.call(a)=="[object Boolean]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,b){return L.call(a,b)};b.noConflict=function(){l._=o;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=Array(Math.max(0,a)),f=0;f<a;f++)e[f]=b.call(d,f);return e};b.random=function(a,b){if(b==null){b=a;a=0}return a+Math.floor(Math.random()*(b-a+1))};var n={escape:{"&":"&amp;","<":"&lt;",
">":"&gt;",'"':"&quot;","'":"&#x27;"}};n.unescape=b.invert(n.escape);var O={escape:RegExp("["+b.keys(n.escape).join("")+"]","g"),unescape:RegExp("("+b.keys(n.unescape).join("|")+")","g")};b.each(["escape","unescape"],function(a){b[a]=function(b){return b==null?"":(""+b).replace(O[a],function(b){return n[a][b]})}});b.result=function(a,c){if(a!=null){var d=a[c];return b.isFunction(d)?d.call(a):d}};b.mixin=function(a){j(b.functions(a),function(c){var d=b[c]=a[c];b.prototype[c]=function(){var a=[this._wrapped];
t.apply(a,arguments);a=d.apply(b,a);return this._chain?b(a).chain():a}})};var P=0;b.uniqueId=function(a){var b=++P+"";return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var z=/(.)^/,Q={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},R=/\\|'|\r|\n|\t|\u2028|\u2029/g;b.template=function(a,c,d){var e,d=b.defaults({},d,b.templateSettings),f=RegExp([(d.escape||z).source,(d.interpolate||z).source,(d.evaluate||
z).source].join("|")+"|$","g"),g=0,h="__p+='";a.replace(f,function(b,c,d,e,f){h=h+a.slice(g,f).replace(R,function(a){return"\\"+Q[a]});c&&(h=h+("'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"));d&&(h=h+("'+\n((__t=("+d+"))==null?'':__t)+\n'"));e&&(h=h+("';\n"+e+"\n__p+='"));g=f+b.length;return b});h=h+"';\n";d.variable||(h="with(obj||{}){\n"+h+"}\n");h="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+h+"return __p;\n";try{e=new Function(d.variable||"obj",
"_",h)}catch(i){i.source=h;throw i;}if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+h+"}";return c};b.chain=function(a){return b(a).chain()};b.mixin(b);j("pop push reverse shift sort splice unshift".split(" "),function(a){var c=k[a];b.prototype[a]=function(){var d=this._wrapped;c.apply(d,arguments);(a=="shift"||a=="splice")&&d.length===0&&delete d[0];return this._chain?b(d).chain():d}});j(["concat","join","slice"],function(a){var c=k[a];b.prototype[a]=
function(){var a=c.apply(this._wrapped,arguments);return this._chain?b(a).chain():a}});b.extend(b.prototype,{chain:function(){this._chain=true;return this},value:function(){return this._wrapped}})}).call(this)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:lodash-amd', location = 'applinks/internal/lib/lodash-jslibs.js' */
define("applinks/lib/lodash",["atlassian/libs/underscore-1.5.2"],function(a){return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/lib-version.js' */
define("applinks/lib/version",["applinks/lib/lodash"],function(c){function d(f,g){if(c.isUndefined(f)){return 0}else{if(typeof f!=="number"||isNaN(f)){throw new Error(g+": expected a number, was: <"+f+">")}else{return Math.floor(f)}}}function a(f,g){if(!f||!(f instanceof e)){throw new Error(g+": expected a Version object, was: <"+f+">")}return f}function b(f,g){return f>g?1:f==g?0:-1}function e(g,h,f){this.major=d(g,"major");this.minor=d(h,"minor");this.bugfix=d(f,"bugfix")}e.parse=function(g,h){h=h||"versionString";if(!g){throw new Error(h+": expected a non-empty string")}var f=g.split(".");if(f.length!==3){throw new Error(h+": expected <major>.<minor>.<bugfix> string, was: <"+g+">")}return new e(parseInt(f[0]),parseInt(f[1]),parseInt(f[2]))};e.comparator=function(g,f){return a(g,"versionOne").compareTo(a(f,"versionTwo"))};e.prototype.compareTo=function(h){a(h,"that");var f=b(this.major,h.major);if(f!=0){return f}var g=b(this.minor,h.minor);if(g!=0){return g}return b(this.bugfix,h.bugfix)};e.prototype.greaterThan=function(f){return this.compareTo(f)>0};e.prototype.greaterThanOrEqual=function(f){return this.compareTo(f)>=0};e.prototype.lessThan=function(f){return this.compareTo(f)<0};e.prototype.lessThanOrEqual=function(f){return this.compareTo(f)<=0};e.prototype.equals=function(f){return this.compareTo(f)==0};e.prototype.toMinor=function(){return new e(this.major,this.minor)};e.prototype.toMajor=function(){return new e(this.major)};e.prototype.toString=function(){return this.major+"."+this.minor+"."+this.bugfix};return e});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-version-details.js' */
define("applinks/lib/aui-version-details",["applinks/lib/version"],function(g){var d=new g(5,8,15);var f=new g(5,9,13);var e=new g(5,8);var c=new g(5,9);function a(h){if(h.lessThan(d)){throw new Error("AUI version "+h+" is too low, you need to upgrade AUI to "+d+" or "+f+" for Applinks to work")}if(h.greaterThanOrEqual(c)&&h.lessThan(f)){throw new Error("AUI version "+h+" is too low, you need to upgrade AUI to "+f+" for Applinks to work")}}function b(h){var i=g.parse(h.version,"AUI version");a(i);h.versionDetails=i;h.versionDetails.is58=i.toMinor().equals(e);h.versionDetails.is59=i.toMinor().equals(c);return h}return{addVersionDetails:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/console-amd.js' */
define("applinks/lib/console",function(){return window.console});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/jquery-amd.js' */
define("applinks/lib/jquery",function(){return window.jQuery});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-amd.js' */
define("applinks/lib/aui",["applinks/lib/window","applinks/lib/aui-version-details"],function(b,c){var a=b.AJS;if(!a){throw new Error("window.AJS not defined, cannot load AUI")}return c.addVersionDetails(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/wrm-amd.js' */
define("applinks/lib/wrm",function(){return window.WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/skate-amd.js' */
define("applinks/lib/skate",function(){return window.skate});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/window-amd.js' */
define("applinks/lib/window",function(){return window});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/docs.js' */
define("applinks/common/docs",["applinks/lib/jquery","applinks/lib/aui","applinks/common/help-paths"],function(c,b,a){return{createDocLink:function(d,f,e){if(!e){e=""}else{e=" "+e}return c("<a/>",{"class":"ual-help-link help-link"+e,href:this.getDocHref(d,f),target:"_blank","data-help-link-key":d,text:"Help",title:"Help"})},getDocHref:function(e,f){var d=a.getFullPath(e);if(f){d+="#"+a.getPath(f)}return d}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/help-paths.js' */
define("applinks/common/help-paths",["applinks/lib/console","applinks/lib/wrm","applinks/lib/lodash","applinks/common/modules","applinks/common/preconditions"],function(b,a,g,e,d){var f=g.memoize(function(){var j=a.data.claim(e.dataFqn(e.COMMON_EXPORTED,"applinks-help-paths"));if(!j.entries){b.warn("Help paths not found, all help links are likely to be broken.")}return j.entries||{}});var i=function(j,m){d.nonEmptyString(j,"key");var l=f()[j]||j;if(m){d.nonEmptyString(m,"sectionKey");var k=l.replace(/\+/g,"");l+="#"+k+"-"+m}return l};function c(j,k){return j.indexOf(k,j.length-k.length)!==-1}function h(j,k){return c(j,k)?j:j+k}return{getPath:i,getFullPath:function(j,l){var k=this.baseUrl();return h(k,"/")+this.getPath(j,l)},baseUrl:g.partial(i,"applinks.docs.root")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/events.js' */
define("applinks/common/events",["applinks/lib/jquery","applinks/lib/lodash","applinks/lib/window","applinks/common/preconditions"],function(e,b,d,f){var c="applinks.event.";function a(g){return c+f.nonEmptyString(g,"eventId")}return{PREREADY:a("preready"),READY:a("ready"),APPLINKS_LOADED:a("loaded"),APPLINKS_UPDATED:a("updated"),NEW_APPLINK_CREATED:a("created"),V3_ONBOARDING_FINISHED:a("v3-onboarding-finished"),Legacy:{MESSAGE_BOX_DISPLAYED:a("message-box-displayed")},applinksEvent:a,on:function(h,i,g){var j=g?b.bind(i,g):i;e(d.document).on(h,j)},off:function(g,h){e(d.document).off(g,h)},trigger:function(g,h){e(d.document).trigger(g,h)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/i18n.js' */
define("applinks/common/i18n",["applinks/lib/lodash","applinks/lib/jquery","applinks/lib/wrm","applinks/common/modules","applinks/common/preconditions","applinks/common/products"],function(e,g,c,f,h,b){var a=e.memoize(function(){var i=c.data.claim(f.dataFqn(f.COMMON_EXPORTED,"entity-types"));return h.hasValue(i,"entity-types","Entity Types data not found")});var d=e.memoize(function(){var i=c.data.claim(f.dataFqn(f.COMMON_EXPORTED,"authentication-types"));return h.hasValue(i,"authentication-types","Authentication Types data not found")});return{getApplicationTypeName:function(i){return b.getTypeName(i)},getEntityTypeName:function(i){return a().singular[i]||i},getPluralizedEntityTypeName:function(i){return a().plural[i]||i},getAuthenticationTypeName:function(i){return d()[i]||i}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/modules.js' */
define("applinks/common/modules",function(){return{PLUGIN_KEY:"com.atlassian.applinks.applinks-plugin",COMMON_EXPORTED:"applinks-common-exported",COMMON:"applinks-common",fqn:function(a){return this.PLUGIN_KEY+":"+a},dataFqn:function(a,b){return this.fqn(a)+"."+b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/preconditions.js' */
define("applinks/common/preconditions",["applinks/lib/lodash"],function(c){function f(i,j,h){return d(c.isString(i)&&!c.isEmpty(i),h,b(j,": expected a non-empty string, was: <"+i+">"),i)}function g(i,j,h){return d(c.isFunction(i),h,b(j,": expected a function, was: "+i),i)}function a(i,j,h){return d(c.isArray(i),h,b(j,": expected an array, was: "+i),i)}function e(i,j,h){return d(i,h,b(j,": expected a value"),i)}function d(l,i,h,k){var j=i?i:h;if(!l){throw new Error(j)}return k||l}function b(i,h){return(i||"[unspecified]")+h}return{checkArgument:c.partial(d,c,c,"",c),nonEmptyString:f,isArray:a,isFunction:g,hasValue:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/products.js' */
define("applinks/common/products",["applinks/lib/lodash","applinks/lib/wrm","applinks/common/modules","applinks/common/preconditions"],function(c,b,d,f){var a=c.memoize(function(){var g=b.data.claim(d.dataFqn(d.COMMON_EXPORTED,"applinks-types"));return f.hasValue(g,"types","Application Types data not found")});function e(g){return a()[g]||g}return{BAMBOO:"bamboo",BITBUCKET:"stash",CONFLUENCE:"confluence",FECRU:"fecru",JIRA:"jira",REFAPP:"refapp",STASH:"stash",getTypeName:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/non-amd/rest-service.js' */
(function(a,c,b){AppLinks=AJS.$.extend(window.AppLinks||{},{Event:{NAMESPACE:"applinks"},I18n:a,Docs:c});AppLinks.Event=AJS.$.extend(window.AppLinks.Event,b);if(AJS.AppLinksInitialisationBinder){AppLinks.initialisationBinder=AJS.AppLinksInitialisationBinder}else{AppLinks.initialisationBinder=function(d){AJS.toInit(d)}}AppLinks.initialisationBinder(function(){var d=AJS.$;AppLinks=d.extend(window.AppLinks||{},{failure:function(g){if(g.status==401){window.location.reload()}else{var e=AppLinks.parseError(g);var f=d(".page-error");if(f.length>0){f.html(e).fadeIn("slow")}else{alert("REST request failed: "+e)}}},jsonRequest:function(f,g,h,i,e){if(h){h=JSON.stringify(h)}d(".page-error").fadeOut("fast");if(!e){e=AppLinks.failure}return jQuery.ajax({url:f,type:g,data:h,dataType:"json",contentType:"application/json; charset=utf-8",cache:false,success:i,error:e})},xmlRequest:function(f,g,h,i,e){if(h){h=JSON.stringify(h)}d(".page-error").fadeOut("fast");if(!e){e=AppLinks.failure}return jQuery.ajax({url:f,type:g,data:h,dataType:"xml",contentType:"application/xml; charset=utf-8",cache:false,success:i,error:e})},parseError:function(h){var f;try{f=JSON.parse(h.responseText)}catch(g){if(h.statusText){return f=h.statusText}else{return h}}if(f.message){if(d.isArray(f.message)){return f.message.join(" ")}return f.message}else{return h.statusText}},put:function(f,g,h,e){return AppLinks.jsonRequest(f,"PUT",g,h,e)},post:function(f,g,h,e){return AppLinks.jsonRequest(f,"POST",g,h,e)},update:function(f,g,e){AppLinks.put(AppLinks.self_link(f),f,g,e)},get:function(f,g,e){return AppLinks.jsonRequest(f,"GET",null,g,e)},getXml:function(f,g,e){return AppLinks.xmlRequest(f,"GET",null,g,e)},self_link:function(g){for(var e=0,h=g.link.length;e<h;e++){var f=g.link[e];if(f.rel=="self"){return f.href}}throw"No self-link found"},del:function(h,g,f){var e;if(typeof(h)=="string"){e=h}else{e=AppLinks.self_link(h)}return AppLinks.jsonRequest(e,"DELETE",null,g,f)},SPI:d.extend({},{API_VERSION:"1.0",REST_RESOURCE_URL:AJS.contextPath()+"/rest/applinks/",BASE_URL:AJS.contextPath()+"/rest/applinks/1.0",OAUTH_REST_RESOURCE_URL:AJS.contextPath()+"/rest/applinks-oauth/",OAUTH_BASE_URL:AJS.contextPath()+"/rest/applinks-oauth/1.0",setApiVersion:function(e){AppLinks.SPI.API_VERSION=e;AppLinks.SPI.setBaseUrl(AppLinks.SPI.REST_RESOURCE_URL+AppLinks.SPI.API_VERSION)},setBaseUrl:function(e){AppLinks.SPI.BASE_URL=e},setOAuthBaseUrl:function(e){AppLinks.SPI.OAUTH_BASE_URL=e},getRemoteRestBaseUrl:function(e){return e+"/rest/applinks/"+AppLinks.SPI.API_VERSION},getRemotePluginServletBaseUrl:function(e){return e+"/plugins/servlet"},getAllLinks:function(g,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink";return AppLinks.get(e,g,f)},getAllLinksWithAuthInfo:function(g,f){var e=AppLinks.SPI.BASE_URL+"/listApplicationlinks";return AppLinks.get(e,g,f)},getApplicationLinkState:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/listApplicationlinkstates/id/"+h;return AppLinks.get(e,g,f)},getLinksOfType:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink/type/"+g;return AppLinks.get(e,h,f)},tryToFetchManifest:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/applicationlinkForm/manifest.json?url="+encodeURIComponent(g);return AppLinks.get(e,h,f)},getManifestFor:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/manifest/"+h+".json";return AppLinks.get(e,g,f)},getLocalManifest:function(g,f){var e=AppLinks.SPI.BASE_URL+"/manifest.json";return AppLinks.get(e,g,f)},getRemoteManifest:function(g,h,f){var e=AppLinks.SPI.getRemoteRestBaseUrl(g)+"/manifest.json";return AppLinks.get(e,h,f)},getRemoteOAuthConsumerInfo:function(g,h,f){var e=AppLinks.SPI.getRemotePluginServletBaseUrl(g)+"/oauth/consumer-info";return AppLinks.getXml(e,h,f)},getApplinkStatus:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/status/"+h;return AppLinks.get(e,g,f)},createStaticUrlAppLink:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createStaticUrlAppLink?typeId="+h;return AppLinks.post(e,null,g,f)},createLink:function(l,j,n,f,k,m,h,o,g){var e=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var i={applicationLink:l,username:j,password:n,createTwoWayLink:f,customRpcURL:k,rpcUrl:m,configFormValues:h};return AppLinks.post(e,i,o,g)},verifyTwoWayLinkDetails:function(e,k,l,h,j,g){var f=AppLinks.SPI.BASE_URL+"/applicationlinkForm/details";var i={username:l,password:h,remoteUrl:e,rpcUrl:k};return AppLinks.post(f,i,j,g)},getApplicationLinkInfo:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/applicationlinkInfo/id/"+g;return AppLinks.get(e,h,f)},deleteLink:function(i,e,h,g){var f=AppLinks.SPI.BASE_URL+"/applicationlink/"+i.id;if(e){f+="?reciprocate=true"}return AppLinks.del(f,h,g)},makePrimary:function(g,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink/primary/"+g.id;return AppLinks.post(e,null,f)},relocate:function(j,h,e,i,g){var f=AppLinks.SPI.BASE_URL+"/relocateApplicationlink/"+j.id+"?newUrl="+encodeURIComponent(h)+"&nowarning="+(e?"true":"false");return AppLinks.post(f,null,i,g)},legacyUpgrade:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/upgrade/legacy/"+h.id;return AppLinks.post(e,null,g,f)},ualUpgrade:function(i,e,h,g){var f=AppLinks.SPI.BASE_URL+"/upgrade/ual/"+i.id;return AppLinks.post(f,e,h,g)},getEntityTypesForApplicationType:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/type/entity/"+h;return AppLinks.get(e,g,f)},getLocalEntitiesWithLinksToApplication:function(e,h,g){var f=AppLinks.SPI.BASE_URL+"/entitylink/localEntitiesWithLinksTo/"+e+".json";return AppLinks.get(f,h,g)},getEntityLinksForApplication:function(e,h,g){var f=AppLinks.SPI.BASE_URL+"/entities/"+e+".json";AppLinks.get(f,h,g)},getEntityLinksForApplicationUsingAnonymousAccess:function(e,h,g){var f=AppLinks.SPI.BASE_URL+"/entities/anonymous/"+e+".json";return AppLinks.get(f,h,g)},createNonUalEntityLink:function(n,i,f,h,l,g,m,k){var e=AppLinks.SPI.BASE_URL+"/entitylink/"+n+"/"+i+"?reciprocate=false";var j={applicationId:f,typeId:h,key:l,name:g,isPrimary:false};return AppLinks.put(e,j,m,k)},createEntityLink:function(j,i,f,e,k,h){var g=AppLinks.SPI.BASE_URL+"/entitylink/"+j+"/"+i+"?reciprocate=";g+=(e?"true":"false");return AppLinks.put(g,f,k,h)},getConfiguredEntityLinks:function(h,g,i,f){var e=AppLinks.SPI.BASE_URL+"/entitylink/primaryLinks/"+h+"/"+g+".json";return AppLinks.get(e,i,f)},deleteEntityLink:function(j,i,f,e,k,h){var g=AppLinks.SPI.BASE_URL+"/entitylink/"+j+"/"+i+"?typeId="+f.typeId+"&key="+f.key+"&applicationId="+f.applicationId+"&reciprocate="+e;return AppLinks.del(g,k,h)},makePrimaryEntityLink:function(i,h,e,j,g){var f=AppLinks.SPI.BASE_URL+"/entitylink/primary/"+i+"/"+h+"?typeId="+e.typeId+"&key="+e.key+"&applicationId="+e.applicationId;return AppLinks.post(f,null,j,g)},canDeleteAppLink:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/permission/reciprocate-application-delete/"+h;return AppLinks.get(e,g,f)},canDeleteEntityLink:function(i,h,e,j,g){var f=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-delete/"+e.applicationId+"/"+i+"/"+h+"/"+e.typeId+"/"+e.key;return AppLinks.get(f,j,g)},canCreateReciprocateEntityLink:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-create/"+h;return AppLinks.get(e,g,f)},processPermissionCode:function(f){var e={noPermission:function(){},missing:function(){},credentialsRequired:function(g){},authenticationFailed:function(g){},noAuthentication:function(g){},noAuthenticationConfigured:function(){},noConnection:function(){},allowed:function(){},unrecognisedCode:function(g){},updateView:function(i,h,g){}};if(!f){f={}}f=d.extend(e,f);return function(h){var g=h.code;if(g=="NO_PERMISSION"){f.noPermission()}else{if(g=="MISSING"){f.missing()}else{if(g=="CREDENTIALS_REQUIRED"){f.credentialsRequired(h.url)}else{if(g=="AUTHENTICATION_FAILED"){f.authenticationFailed(h.url)}else{if(g=="NO_AUTHENTICATION"){f.noAuthentication(h.url)}else{if(g=="NO_AUTHENTICATION_CONFIGURED"){f.noAuthenticationConfigured()}else{if(g=="NO_CONNECTION"){f.noConnection()}else{if(g=="ALLOWED"){f.allowed()}else{f.unrecognisedCode(h.code)}}}}}}}}}},addAuthenticationTrigger:function(g,e,f){if(!f){f={}}if(typeof f.onSuccess=="undefined"){f.onSuccess=function(){location.reload()}}if(typeof f.onFailure=="undefined"){f.onFailure=function(){return true}}d(g).unbind("click");d(g).click(function(){if(f.before){f.before()}AppLinks.authenticateRemoteCredentials(e,f.onSuccess,f.onFailure)})},showCreateEntityLinkSuggestion:function(){return true},getApplicationLink:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink/"+h;return AppLinks.get(e,g,f)},createApplicationLink:function(h,f,k,l,e,m,i){var g=AppLinks.SPI.BASE_URL+"/applicationlink";var j={id:h,name:f,rpcUrl:k,displayUrl:l,typeId:e};return AppLinks.put(g,j,m,i)},createConsumer:function(g,p,f,o,k,n,i,r,j,m,q,h){var e=AppLinks.SPI.OAUTH_BASE_URL+"/applicationlink/"+g+"/authentication/consumer";var l={key:p,name:f,description:o,sharedSecret:k,publicKey:n,outgoing:m,twoLOAllowed:i,executingTwoLOUser:r,twoLOImpersonationAllowed:j};return AppLinks.put(e,l,q,h)},createConsumerAutoConfigure:function(l,k,h,e,j,g){var f=AppLinks.SPI.OAUTH_BASE_URL+"/applicationlink/"+l+"/authentication/consumer?autoConfigure=true";var i={twoLOAllowed:k,executingTwoLOUser:h,twoLOImpersonationAllowed:e};return AppLinks.put(f,i,j,g)},registerProvider:function(k,j,g,i,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink/"+k+"/authentication/provider";var h={config:g,provider:j};return AppLinks.put(e,h,i,f)},enableFeature:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/features/"+g;return AppLinks.put(e,{},h,f)},disableFeature:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/features/"+g;return AppLinks.del(e,h,f)}},(window.AppLinks&&window.AppLinks.SPI)||{})});AppLinks.UI={showInfoBox:function(e){d(".aui-message.success").remove();AppLinks.UI.createMessage("success",e,"page-info")},hideInfoBox:function(){d(".aui-message.success").remove()},showErrorBox:function(e){AppLinks.UI.createMessage("error",e,"page-error")},hideErrorBox:function(){d(".aui-message.error").remove()},showWarningBox:function(f){if(d.isArray(f)&&f.length>0){var e=d("<ul></ul>");d(f).each(function(h){e.append(d("<li/>",{text:f[h]}))});var g=d('<div class="page-warning"></div>').append(e);AppLinks.UI.createMessage("warning",g.html(),"page-warning")}else{AppLinks.UI.createMessage("warning",f,"page-warning")}},hideWarningBox:function(){d(".aui-message.warning").remove()},shortenString:function(f,e){if(f.length>e){f=f.substring(0,e)+"..."}return f},createMessage:function(f,g,e){var h=d('<div class="'+e+'">');h.html(g);AJS.messages[f](".applinks-message-bar",{title:"",body:h.wrap("<div></div>").parent().html(),closeable:true});d(document).trigger(AppLinks.Event.Legacy.MESSAGE_BOX_DISPLAYED)},displayValidationErrorMessages:function(e,g,f){if(d.isArray(f)){d(f).each(function(k,j){var l=d('<div class="error applinks-error">');l.text(j);d(g).find("."+e).append(l)})}else{if(typeof f!="undefined"){var h=d('<div class="error applinks-error">');h.text(f.toString());d(g).find("."+e).append(h)}}},displayValidationError:function(e,f,g){return function(l){if(l.status==401){window.location.reload();return}d(".applinks-error").remove();d(".loading").remove();var j=l.responseText;var k=d.parseJSON(j);var i=k.message;if(typeof k.fields=="undefined"){AppLinks.UI.displayValidationErrorMessages(e,f,i)}else{var h=k.fields;d(h).each(function(m){var n=d('<div class="error applinks-error" id="'+h[m]+'-error">');n.text(i[m]);if(d(f).find("."+h[m]).length>0){n.insertAfter(d(f).find("."+h[m]))}else{n.insertAfter(d(f).find("."+e).append(n))}})}d(f).find("."+e).addClass("fully-populated-errors");if(g){g()}}},addProtocolToURL:function(e){var h=d.trim(e);var g=h.toLowerCase();var f=false;if(g.length>=7){if(g.substring(0,7).indexOf("http")!=-1){f=true}}if(!f){h="http://"+h}return h},prettyJoin:function(f,i,h){if(!h){h="and"}var e=f.length;var g="";d.each(f,function(j,k){if(j==(e-1)&&e>1){g+=" "+h+"  "+i(k)}else{g+=i(k);if(j+2<e){g+=", "}}});return g},showLoadingIcon:function(e){d('<span class="loading">&nbsp;</span>').insertAfter(e)},hideLoadingIcon:function(e){d(e).next(".loading").remove()},findUrl:function(h){var g=undefined;var i=h.toLowerCase();var f=i.indexOf("http:");if(f==-1){f=i.indexOf("https:")}if(f>-1){var e=i.indexOf(" ",f);if(e==-1){e=i.length}g=h.substring(f,e)}return g},findApplicationType:function(e){e=e.toLowerCase();if(e.indexOf("jira")!=-1){return"jira"}else{if(e.indexOf("fisheye")!=-1){return"fecru"}else{if(e.indexOf("confluence")!=-1){return"confluence"}else{if(e.indexOf("refapp")!=-1){return"refapp"}else{return undefined}}}}},escapeSelector:function(e){return e.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g,"\\$1")},sanitiseHTML:function(e){var f={"<":"&lt;",'"':"&quot;","&":"&amp;"};return e.replace(/[<"&]/g,function(g){return f[g]})},removeCssClass:function(e,f){d(e).removeClass(function(h,j){var i=j.split(" ");var g="";d.each(i,function(k,l){if(l.indexOf(f)!=-1){g=l}});return g})}};(function(){var e=d({});d.each(["bind","unbind","trigger"],function(f,g){AppLinks.UI[g]=function(){return e[g].apply(e,arguments)}})})();d(document).trigger(AppLinks.Event.PREREADY);d(document).trigger(AppLinks.Event.READY)})})(require("applinks/common/i18n"),require("applinks/common/docs"),require("applinks/common/events"));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/non-amd/autocomplete.js' */
AJS.$(document).bind(AppLinks.Event.READY,function(){AppLinks.autoComplete={cacheManager:function(c){var a={},b=[],c=c||30;return{get:function(d){return a[d]},put:function(d,e){a[d]=e;b.push(d);if(b.length>c){delete a[b.shift()]}},clear:function(){a={};b=[]}}}};(function(d){var c=function(f){AJS.log("InputDrivenDropDown: truncating text");var h=f.$.closest(".aui-dropdown").width(),g=20;d("a span:not(.icon)",f.$).each(function(){var j=d(this),i=AJS("var","&#8230;"),l=i.width(),k=false;j.wrapInner(d("<em>"));d("em",j).each(function(){var m=d(this);m.show();if(this.offsetLeft+this.offsetWidth>h){var t=this.childNodes,s=false;for(var o=t.length-1;o>=0;o--){var p=t[o],n=1,r=(p.nodeType==3)?"nodeValue":"innerHTML",q=p[r];do{if(n<=q.length){p[r]=q.substr(0,q.length-n++)}else{break}}while(this.offsetLeft+this.offsetWidth+l>h-g);if(n<=q.length){s=true;break}}if(s){k=true}else{m.hide()}}});if(k){j.append(i);this.elpss=i}})};var b=function(f,l){if(!l.length||!l[0]){return}AJS.log("InputDrivenDropDown: highlighting tokens");for(var h=0,j=l.length;h<j;h++){var g=l[h];l[h]=g?g.replace(/[\.\*\+\?\|\(\)\[\]{}\\]/g,"\\$"):""}var k=new RegExp("("+l.join("|")+")","gi");d("li a:not(.dropdown-prevent-highlight) span",f.$).each(function(){var m=d(this),i=m.html().replace(k,"<strong>$1</strong>");m.html(i)})};var e=function(j,g){var i=j.options,h=j.dd;if(h){h.hide();h.$.remove()}i.ajsDropDownOptions=i.ajsDropDownOptions||{};if(i.ajsDropDownOptions&&!i.ajsDropDownOptions.alignment){i.ajsDropDownOptions.alignment="left"}i.ajsDropDownOptions.selectionHandler=i.ajsDropDownOptions.selectionHandler||function(l,k){if(l.type!="click"){l.preventDefault();d("a",k).click();document.location=d("a",k).attr("href")}};i.ajsDropDownOptions.displayHandler=function(k){return AJS.escapeHtml(k.name)};var f=j.dd=new AJS.dropDown(g.matrix,i.ajsDropDownOptions)[0];if(i.ajsDropDownOptions&&i.ajsDropDownOptions.className){f.$.addClass(i.ajsDropDownOptions.className)}if(i.dropdownPlacement){i.dropdownPlacement(f.$)}else{AJS.log("No dropdownPlacement function specified. Appending dropdown to the body.");d("body").append(f.$)}b(f,g.queryTokens||[g.query]);c(f);if(i.dropdownPostprocess){i.dropdownPostprocess(f.$)}f.show(j._effect);if(typeof i.onShow=="function"){i.onShow.call(f,f.$)}return f};function a(g,f){this._effect="appear";this._timer=null;this.id=g;this.options=f;this.inactive=false;this.busy=false;this.cacheManager=AppLinks.autoComplete.cacheManager()}a.prototype.clearCache=function(){this.cacheManager.clear()};a.prototype.change=function(h,g){var f=this;if(h!=f._value||g){f._value=h;f.busy=false;clearTimeout(f._timer);if(g||(/\S{0,}/).test(h)){var i=f.cacheManager.get(h);if(i){e(f,i)}else{f.busy=true;f._timer=setTimeout(function(){f.options.getDataAndRunCallback.call(f,h,f.show)},200)}}else{f.dd&&f.dd.hide()}}};a.prototype.dropDownLength=function(){return this.dd.links?this.dd.links.length:0};a.prototype.dropDownItem=function(f){return this.dropDownLength()>f?this.dd.links[f]:null};a.prototype.hide=function(){this.dd&&this.dd.hide()};a.prototype.remove=function(){var f=this.dd;if(f){this.hide();f.$.remove()}this.inactive=true;this.options.onDeath&&this.options.onDeath()};a.prototype.show=function(g,i,h){if(this.inactive){AJS.log("Quick search abandoned before server response received, ignoring. "+this);return}var f={matrix:g,query:i,queryTokens:h};this.cacheManager.put(i,f);e(this,f);this.busy=false};AppLinks.inputDrivenDropdown=function(f){return new a("inputdriven-dropdown",f)}})(jQuery)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-callback.js' */
define("applinks/feature/oauth-callback",["applinks/lib/window","applinks/lib/lodash","applinks/common/preconditions"],function(c,a,d){function b(e){d.nonEmptyString(e,"url");this._url=e}b.prototype.source=function(e){d.hasValue(e,"source");this._source=e;return this};b.prototype.onSuccess=function(e){d.isFunction(e,"onSuccess");this._onSuccess=e;return this};b.prototype.onFailure=function(e){d.isFunction(e,"onFailure");this._onFailure=e;return this};b.prototype.success=function(){this.oauthWindow.close();if(this._onSuccess){this._onSuccess(this._source)}delete c.oauthCallback};b.prototype.failure=function(){this.oauthWindow.close();if(this._onFailure){this._onFailure(this._source)}delete c.oauthCallback};b.prototype.open=function(){c.oauthCallback=this;this.oauthWindow=c.open(this._url,"com_atlassian_applinks_authentication")};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-dance.js' */
define("applinks/feature/oauth-dance",["applinks/lib/console","applinks/lib/jquery","applinks/lib/lodash","applinks/lib/window","applinks/common/events","applinks/common/preconditions","applinks/feature/oauth-callback"],function(a,f,c,e,b,h,d){function g(j,i){this._scope=j||e.document;this._selector=i}g.prototype.onSuccess=function(i){h.isFunction(i,"onSuccess");this._onSuccess=i;return this};g.prototype.onFailure=function(i){h.isFunction(i,"onFailure");this._onFailure=i;return this};g.prototype.defaultSuccess=function(){return this.onSuccess(function(){e.location.reload()})};g.prototype.defaultFailure=function(){return this.onFailure(function(){return true})};g.prototype.initialize=function(){var i=this;if(this._selector){f(this._scope).on("click",this._selector,function(j){j.preventDefault();i._open(f(this))})}else{f(this._scope).on("click",function(j){j.preventDefault();i._open(f(this))})}};g.prototype.start=function(){var j=f(this._scope);var i=this._selector?j.find(this._selector):j;this._open(i)};g.prototype._open=function(i){if(i.length!==1){a.warn("Could not trigger OAuth dance, the source is not a single HTML element: "+i);return}var j=i.attr("data-authorisation-uri");if(j){this._onSuccess||this.defaultSuccess();this._onFailure||this.defaultFailure();new d(j).source(i).onSuccess(this._onSuccess).onFailure(this._onFailure).open()}else{a.warn("Could not trigger OAuth dance, data-authorisation-uri missing for: "+i)}};return g});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-oauth-ui', location = 'js/oauth-dialog.js' */
(function(c,a,b){AppLinks.authenticateRemoteCredentials=function(d,f,e){c(".applinks-error").remove();new b(d).onSuccess(f).onFailure(e).open()}})(require("applinks/lib/jquery"),require("applinks/common/events"),require("applinks/feature/oauth-callback"));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:common', location = 'util/retry-caller.js' */
define("confluence/jim/util/retry-caller",["ajs","jquery","underscore"],function(b,d,c){var a=function(g,p){p=p||{};var h=p.args;var j=(typeof p.tester==="function")?p.tester:function(){return true};var i=p.delays||[0.1,0.3,0.5,0.7,1];var l=i.length;var e=p.name||"";var k=d.Deferred(),o=k.promise();var f=p.context||k;var n=0;var m=function(){if(n===l){return k.rejectWith(f,[f,"exceed-maximum-called-times",""])}var r=i[n++];var q=function(){d.when(g.apply(f,h)).then(function(){k.notify.apply(f,arguments);if(j.apply(f,arguments)){m()}else{k.resolveWith(f,arguments)}},function(){k.rejectWith(f,arguments)})};c.delay(q,r)};m();return o};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:common', location = 'util/common.js' */
AJS.JiraIssues={Remote:{}};var appLinksI18n={entries:{}};jQuery(document).ready(function(){AJS.JiraIssues=jQuery.extend(AJS.JiraIssues||{},{bindOAuthLink:function(c,f){var e={onSuccess:function(){f()},onFailure:function(){}};var d=c.attr("href");c.click(function(g){AppLinks.authenticateRemoteCredentials(d,e.onSuccess,e.onFailure);g.preventDefault()})},getOAuthRealm:function(f){var d=f.getResponseHeader("WWW-Authenticate")||"";var c=/OAuth realm\=\"([^\"]+)\"/;var e=c.exec(d);if(e){return e[1]}else{return null}}});jQuery("a.static-oauth-init").each(function(){AJS.JiraIssues.bindOAuthLink(jQuery(this),function(){window.location.reload()})});jQuery("a.anonymous-init").each(function(f,e){var c=encodeURIComponent(window.location.pathname.replace(Confluence.getContextPath(),""));var d=Confluence.getContextPath()+"/login.action?os_destination="+c;AJS.$(e).attr("href",d)});var a=function(j){var e=AJS.JiraIssues.Remote[j];var h="";for(var g=0;g<e.length;g++){h=h+(e[g].key+(g<e.length-1?",":""))}var d=function(l){var i="issuekey in ("+l+")";var m="/sr/jira.issueviews:searchrequest-xml/temp/SearchRequest.xml?jqlQuery="+encodeURIComponent(i)+"&returnMax=true";var k=contextPath+"/plugins/servlet/issue-retriever?appId="+j+"&url="+encodeURIComponent(m)+"&columns=summary&columns=type&columns=resolution&columns=status";return k};var f=function(k){var i=AJS.$("item",k);i.each(function(){var u=AJS.$("link",this).text();var v=AJS.$("key",this).text();var r=AJS.$("summary",this).text();var s=AJS.$("type",this);var m=AJS.$("resolution",this);var w=m.attr("id")!="-1";var o=AJS.$("status",this);var n=AJS.$(".unknown-jira-issue."+v);for(var p=0;p<n.length;p++){var t=AJS.$("<a style=\"background-image: url('"+s.attr("iconUrl")+'\')" href="'+u+'"></a>');t.text(v);var l=AJS.$('<span class="jira-status"></span>');l.text(o.text().toUpperCase());var q=AJS.$('<span class="jira-issue'+(w?" resolved":"")+'" ></span>');q.append(t);q.append(document.createTextNode(" - "+r+" - "));q.append(l);AJS.$(n[p]).replaceWith(q)}})};var c=d(h);AJS.$.ajax({url:c,success:f,error:function(l){if(l.status==401){var k=AJS.JiraIssues.getOAuthRealm(l);if(k){var i={};AJS.$(e).each(function(){if(!i[this.key]){i[this.key]=true;var m=AJS.$('<span class="oauth-msg"> - <a class="oauth-init" href="'+k+'">'+"Authenticate"+"</a> "+"to see issue details"+"</span>");AJS.$(".unknown-jira-issue."+this.key).addClass("single-issue-oauth").append(m)}});AJS.JiraIssues.bindOAuthLink(AJS.$(".single-issue-oauth a.oauth-init"),function(){window.location.reload()})}}else{if(l.status==400&&e.length>1){AJS.$(e).each(function(){var m=this.key;var n=d(m);AJS.$.ajax({url:n,success:f,error:function(p){var o=AJS.$(".unknown-jira-issue."+m);o.removeClass("single-issue-oauth");AJS.$(".oauth-msg",o).remove();o.addClass("jira-error")}})})}}}})};AJS.$(".unknown-jira-issue").each(function(e,f){var d=AJS.$(f);var g=d.attr("data-app-link");var c=d.attr("data-key");AJS.JiraIssues.Remote[g]=AJS.JiraIssues.Remote[g]||[];AJS.JiraIssues.Remote[g].push({key:c})});for(var b in AJS.JiraIssues.Remote){a(b)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:web-resources', location = 'templates/extra/jira/jiraIssues.js' */
jQuery(document).ready(function(){var a=jQuery.extend(window.JiraIssues||{},{ADG_ENABLED:AJS.Meta.getNumber("build-number")>=4000,ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO:14/11,fixMenusShowingUnderWidgetInIE:function(){if(jQuery.browser.msie){jQuery("ul.ajs-menu-bar li.ajs-menu-item").each(function(){jQuery(this).hover(function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().each(function(){var c=jQuery(this);var b=c.css("position");if(b&&b!="auto"){c.addClass("ajs-menu-bar-z-index-fix-for-ie")}})},function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().removeClass("ajs-menu-bar-z-index-fix-for-ie")})})}},onSuccessFunction:function(d){if(!jQuery("fieldset input[name='height']",d).length){var b=jQuery(".bDiv table[id^='jiraissues_table']",d)[0];var e=b.grid;var c=b.clientHeight+jQuery(".hDiv",d)[0].clientHeight;jQuery(".bDiv",d).css("height",c+"px");e.options.height=c;e.fixHeight(c)}},onErrorFunction:function(h,c,b,n,f){var o=jQuery("#"+c);var g=b+": ";if(n.status=="200"){g+=f}else{g+=n.responseText}var i=n.getResponseHeader("WWW-Authenticate")||"";if(n.status=="401"&&i.indexOf("OAuth")!=-1){var m=/OAuth realm\=\"([^\"]+)\"/;var e=m.exec(i);if(e){o.empty();a.bigMessageFunction(c,'<a class="oauth-init" href="'+e[1]+'">'+"Authenticate"+"</a> "+"to retrieve your issues"+"</span>");jQuery(".bmDiv",h).css({"z-index":2});var j={onSuccess:function(){window.location.reload()},onFailure:function(){}};var l=jQuery(".oauth-init",o.parent());var d=l.attr("href");l.click(function(p){AppLinks.authenticateRemoteCredentials(d,j.onSuccess,j.onFailure);p.preventDefault()});AJS.$(".gBlock").remove()}}else{if(n.status=="400"){a.bigMessageFunction(c,"The JIRA server was not able to process the search. This may indicate a problem with the syntax of this macro. Alternatively, if this table is requesting specific issue keys, you may not have permission to view one of these issues. ")}else{var k=jQuery("iframe.jiraissues_errorMsgSandbox",h);k.load(function(){var r=this.contentWindow||this.contentDocument;var q=jQuery((r.document?r.document:r).body);jQuery("a",q).each(function(){this.target="_top"});jQuery(".pPageStat",h).empty().text(q.text());var p=jQuery("div.bmDiv",h)[0];k.removeClass("hidden");k.css({height:p.clientHeight+"px",width:p.clientWidth+"px"})});k[0].src=jQuery("fieldset input[name='retrieverUrlHtml']",h).val();a.bigMessageFunction(c,k)}}jQuery(h).find(".pReload").removeClass("loading");o[0].grid.loading=false;jQuery(h).find(".pButton").each(function(){jQuery(this).removeClass("pBtnOver");jQuery(this).css({cursor:"default",opacity:"0.3"})});jQuery(h).find("span.pcontrol input").attr("readonly","true")},onReloadFunction:function(b,d,c){jQuery(".bmDiv",d).remove();jQuery(".bmDistance",d).remove();c.onSubmit=function(){a.reloadOnSubmitFunction(b,c);return true}},reloadOnSubmitFunction:function(b,c){c.params=[{name:"useCache",value:false}];c.onSubmit=function(){a.onSubmitFunction(b,c);return true}},onSubmitFunction:function(b,c){c.params=[{name:"useCache",value:b}]},showTrustWarningsFunction:function(d,c){var b=jQuery(d).children(".trusted_warnings");if(c.trustedMessage){b.find("td:last").html(c.trustedMessage);b.css("display","block")}else{b.css("display","none")}},preProcessFunction:function(e,b,d,c,f){if(d){a.showTrustWarningsFunction(e,c)}if(c.total==0){jQuery(".pPageStat",e).html(f);a.bigMessageFunction(b,f);jQuery(".pReload",e).removeClass("loading");return}},bigMessageFunction:function(e,f){var d=jQuery("<div></div>");var b=jQuery("<div></div>");d.addClass("bmDistance");b.addClass("bmDiv");if(typeof f=="string"){b.html("<p><strong>"+f+"</strong></p>")}else{f.appendTo(b)}var c=jQuery("#"+e);c.after(b).after(d)},getParamsFrom:function(c){var b={};c.children("input").each(function(){b[jQuery(this).attr("name")]=jQuery(this).attr("value")});return b},initializeColumnWidth:function(f,p){var d={},m=function(i){return a.ADG_ENABLED?Math.round(i*a.ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO):i};if(!(p&&p.length)){return d}var h=37,n=11,k=f.width()-(h+(p.length*n)),j=false,q=false,o=0,c=m(140);for(var l=0,e=p.length;l<e;l++){var g=p[l].name;switch(g){case"summary":j=true;o++;break;case"description":q=true;o++;break;case"type":o++;d[g]=30;k-=30;break;case"priority":o++;d[g]=50;k-=50;break;case"status":o++;d[g]=m(100);k-=m(100);break;case"key":o++;d[g]=m(90);k-=m(90);break;case"comments":case"attachments":case"version":case"component":case"resolution":o++;d[g]=m(80);k-=m(80);break;default:d[g]=c}}if(j||q){k-=(c*(p.length-o));var b=250;if(j&&q){d.summary=Math.max(k/2,b);d.description=Math.max(k/2,b)}else{if(j){d.summary=Math.max(k,b)}else{d.description=Math.max(k,b)}}}else{if(!j&&!q&&(p.length>o)){c=k/(p.length-o);for(l=0;l<e;l++){if(!{resolution:true,key:true,type:true,priority:true,status:true}[p[l]]){d[p[l]]=c}}}}return d}});a.fixMenusShowingUnderWidgetInIE();jQuery(".jiraissues_table").each(function(f,j){var k=jQuery(j),h=k.children("fieldset"),e=a.getParamsFrom(h),c="jiraissues_table_"+f;k.append('<table id="'+c+'" style="display:none"></table>');k.css("width",e.width);var d=[];h.children(".columns").each(function(l){var m=jQuery(this).hasClass("nowrap");d[l]={display:this.name,name:this.value,nowrap:m,sortable:true,align:"left"}});var b=a.initializeColumnWidth(k,d);jQuery.each(d,function(l,m){m.width=b[m.name]});var g=jQuery("<div></div>");jQuery("<a></a>").attr({rel:"nofollow",href:e.clickableUrl}).text(e.title).appendTo(g);jQuery("#"+c).flexigrid({url:e.retrieverUrlHtml,method:"GET",dataType:"json",colModel:d,sortname:e.sortField,sortorder:e.sortOrder,usepager:true,title:g.html(),page:parseInt(e.requestedPage,10),useRp:false,rp:parseInt(e.resultsPerPage,10),showTableToggleBtn:true,height:(function(){return e.height?parseInt(e.height,10):480})(),onSuccess:function(){a.onSuccessFunction(j)},onSubmit:function(){a.onSubmitFunction(e.useCache,this);return true},preProcess:function(i){a.preProcessFunction(j,c,e.showTrustWarnings,i,e.nomsg);return i},onError:function(m,l,i){a.onErrorFunction(j,c,e.jiraissuesError,m,l,i)},onReload:function(){a.onReloadFunction(e.useCache,j,this);return true},errormsg:e.errormsg,pagestat:e.pagestat,procmsg:e.procmsg,nomsg:e.nomsg})});jQuery(".jiraissues_count").each(function(b,d){var c=jQuery(d);jQuery.ajax({cache:false,type:"GET",url:c.find(".url").text(),data:{useCache:c.find(".use-cache").text(),rp:c.find(".rp").text(),showCount:"true"},success:function(f){var e=c.find(".result");if(f==1){e.text(AJS.format("{0} issue",f))}else{e.text(AJS.format("{0} issues",f))}e.removeClass("hidden");jQuery(".calculating, .error, .data",c).remove()},error:function(h){var f=jQuery(".error",c).removeClass("hidden"),g=h.getResponseHeader("WWW-Authenticate")||"",j=false;if(h.status===401&&g.indexOf("OAuth")!=-1){var e=/OAuth realm\=\"([^\"]+)\"/,i=e.exec(g);if(i){f.empty().append(AJS.$("<a/>",{href:i[1],"class":"oauth-init"}).text("Authenticate").click(function(){AppLinks.authenticateRemoteCredentials(i[1],function(){window.location.reload()},function(){});return false})).append(AJS.$("<span/>",{text:" "+"to retrieve your issues"}));j=true}}if(!j){f.text(AJS.format(f.text(),h.status))}jQuery(".calculating, .result, .data",c).remove()}})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:dynamic-css-resources', location = 'js/style/link-style-css.js' */
/**
 * Look up addonKey+moduleKey from WRM data, then add Link tag onto page.
 * Browser will request for additional css from AddonStyleServlet
 */
define("ac/confluence/style/link-style-css", [], function () {
    "use strict";
    var URI_MAX_LENGTH = 2000;
    var STYLE_KEYS = [
        'com.atlassian.plugins.atlassian-connect-plugin:featured-macro-css-resources.featuredMacroCssData',
        'com.atlassian.plugins.atlassian-connect-plugin:icons-css-resources.iconsCssData'
        //Add more keys here...
    ];

    function getIconStyleUrl() {
        return AJS.contextPath() + "/plugins/servlet/ac/css-style?";
    }

    function addLinkTag(params) {
        var uri = getIconStyleUrl() + params;
        var linkTag = document.createElement("link");
        linkTag.rel = "stylesheet";
        linkTag.href = uri;
        linkTag.type = "text/css";

        document.head.appendChild(linkTag);
    }

    function appendParam(urlBuffer, paramsString) {
        return urlBuffer + (urlBuffer.length == 0 ? "" : "&") + paramsString;
    }

    return {
        addLinkTags : function() {
            var urlBuffer = "";
            for (var key in STYLE_KEYS) {
                var addonToModules = WRM.data.claim(STYLE_KEYS[key]);

                for (var addon in addonToModules) {
                    var modules = addonToModules[addon];
                    var paramsString = addon + "=" + modules.join();
                    if (appendParam(urlBuffer, paramsString).length > (URI_MAX_LENGTH - getIconStyleUrl().length)) {
                        //add on link tag using the current urlBuffer
                        addLinkTag(urlBuffer);
                        //reset urlBuffer
                        urlBuffer = "";
                    }
                    urlBuffer = appendParam(urlBuffer, paramsString);
                }
            }

            if (urlBuffer.length > 0) {
                addLinkTag(urlBuffer);
            }
        }
    };
});







}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:dynamic-css-resources', location = 'js/style/link-style-css-init.js' */
/**
 * js to execute link-icon-css
 */
require(["ac/confluence/style/link-style-css"], function(linkIconCss) {
    linkIconCss.addLinkTags();
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:dialog-options-v3', location = 'js/iframe/host/dialog-options.js' */
(function(){window._AP=window._AP||{};
function b(){var d="com.atlassian.plugins.atlassian-connect-plugin:dialog-options.data";
return WRM.data.claim(d)
}var c=b();
for(var a in c){if(c.hasOwnProperty(a)){window._AP[a]=c[a]
}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-core', location = '/js/core/connect-host-amd.js' */
(function(a,b){if(typeof define==="function"&&define.amd){define("connect-host",[],b)
}else{if(!window._AP){window._AP={}
}AJS.$.extend(_AP,b())
}}(this,function(){if(!window._AP){window._AP={}
}define("_dollar",[],function(){return AJS.$
});
define("host/_util",[],function(){return{escapeSelector:function(c){if(!c){throw new Error("No selector to escape")
}return c.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")
},addonToNs:function(d,c){if(d.length===0||c.length===0){throw new Error("addon_key and module_key must be specified")
}return d+"__"+c
}}
});
((typeof _AP!=="undefined")?define:AP.define)("_events",["_dollar"],function(h){var d=window,f=(d.AJS&&d.AJS.log)||(d.console&&d.console.log)||(function(){});
function c(j,i){this._key=j;
this._origin=i;
this._events={};
this._any=[]
}var g=c.prototype;
g.on=function(i,j){if(i&&j){this._listeners(i).push(j)
}return this
};
g.once=function(j,k){var i=this;
var l=function(){i.off(j,l);
k.apply(null,arguments)
};
this.on(j,l);
return this
};
g.onAny=function(i){this._any.push(i);
return this
};
g.off=function(j,m){var l=this._events[j];
if(l){var k=h.inArray(m,l);
if(k>=0){l.splice(k,1)
}if(l.length===0){delete this._events[j]
}}return this
};
g.offAll=function(i){if(i){delete this._events[i]
}else{this._events={}
}return this
};
g.offAny=function(l){var k=this._any;
var j=h.inArray(l,k);
if(j>=0){k.splice(j,1)
}return this
};
g.emit=function(i){return this._emitEvent(this._event.apply(this,arguments))
};
g._event=function(i){return{name:i,args:[].slice.call(arguments,1),attrs:{},source:{key:this._key,origin:this._origin}}
};
g._emitEvent=function(j){var i=j.args.concat(j);
e(this._listeners(j.name),i);
e(this._any,[j.name].concat(i));
return this
};
g._listeners=function(i){return this._events[i]=this._events[i]||[]
};
function e(l,j){for(var k=0;
k<l.length;
++k){try{l[k].apply(null,j)
}catch(m){f(m.stack||m.message||m)
}}}return{Events:c}
});
((typeof _AP!=="undefined")?define:AP.define)("_base64",["_dollar"],function(g){function k(){this.buffer=[]
}k.prototype.append=function e(l){this.buffer.push(l);
return this
};
k.prototype.toString=function d(){return this.buffer.join("")
};
var h={codex:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(n){var l=new k();
var m=new f(n);
while(m.moveNext()){var u=m.current;
m.moveNext();
var s=m.current;
m.moveNext();
var q=m.current;
var t=u>>2;
var r=((u&3)<<4)|(s>>4);
var p=((s&15)<<2)|(q>>6);
var o=q&63;
if(isNaN(s)){p=o=64
}else{if(isNaN(q)){o=64
}}l.append(this.codex.charAt(t)+this.codex.charAt(r)+this.codex.charAt(p)+this.codex.charAt(o))
}return l.toString()
},decode:function(n){var m=new k();
var q=new j(n);
while(q.moveNext()){var l=q.current;
if(l<128){m.append(String.fromCharCode(l))
}else{if((l>191)&&(l<224)){q.moveNext();
var p=q.current;
m.append(String.fromCharCode(((l&31)<<6)|(p&63)))
}else{q.moveNext();
var p=q.current;
q.moveNext();
var o=q.current;
m.append(String.fromCharCode(((l&15)<<12)|((p&63)<<6)|(o&63)))
}}}return m.toString()
}};
function f(l){this._input=l;
this._index=-1;
this._buffer=[]
}f.prototype={current:Number.NaN,moveNext:function(){if(this._buffer.length>0){this.current=this._buffer.shift();
return true
}else{if(this._index>=(this._input.length-1)){this.current=Number.NaN;
return false
}else{var l=this._input.charCodeAt(++this._index);
if((l==13)&&(this._input.charCodeAt(this._index+1)==10)){l=10;
this._index+=2
}if(l<128){this.current=l
}else{if((l>127)&&(l<2048)){this.current=(l>>6)|192;
this._buffer.push((l&63)|128)
}else{this.current=(l>>12)|224;
this._buffer.push(((l>>6)&63)|128);
this._buffer.push((l&63)|128)
}}return true
}}}};
function j(l){this._input=l;
this._index=-1;
this._buffer=[]
}j.prototype={current:64,moveNext:function(){if(this._buffer.length>0){this.current=this._buffer.shift();
return true
}else{if(this._index>=(this._input.length-1)){this.current=64;
return false
}else{var r=h.codex.indexOf(this._input.charAt(++this._index));
var q=h.codex.indexOf(this._input.charAt(++this._index));
var p=h.codex.indexOf(this._input.charAt(++this._index));
var o=h.codex.indexOf(this._input.charAt(++this._index));
var n=(r<<2)|(q>>4);
var m=((q&15)<<4)|(p>>2);
var l=((p&3)<<6)|o;
this.current=n;
if(p!=64&&m!=0){this._buffer.push(m)
}if(o!=64&&l!=0){this._buffer.push(l)
}return true
}}}};
function i(l){return h.encode(l)
}function c(l){return h.decode(l)
}return{encode:i,decode:c}
});
((typeof _AP!=="undefined")?define:AP.define)("_jwt",["_base64"],function(d){function f(g){return c(g)["iss"]
}function c(j){if(null===j||""===j){throw ("Invalid JWT: must be neither null nor empty-string.")
}var i=j.indexOf(".");
var h=j.indexOf(".",i+1);
if(i<0||h<=i){throw ('Invalid JWT: must contain 2 period (".") characters.')
}var k=j.substring(i+1,h);
if(null===k||""===k){throw ("Invalid JWT: encoded claims must be neither null nor empty-string.")
}var g=d.decode(k);
return JSON.parse(g)
}function e(j,h){if(h===undefined){h=60
}var k=c(j),g=0,i=Math.floor(Date.now()/1000);
if(k&&k.exp){g=k.exp
}if((g-i)<h){return true
}return false
}return{parseJwtIssuer:f,parseJwtClaims:c,isJwtExpired:e}
});
/*!
 * jsUri
 * https://github.com/derek-watson/jsUri
 *
 * Copyright 2013, Derek Watson
 * Released under the MIT license.
 *
 * Includes parseUri regular expressions
 * http://blog.stevenlevithan.com/archives/parseuri
 * Copyright 2007, Steven Levithan
 * Released under the MIT license.
 */
((typeof _AP!=="undefined")?define:AP.define)("_uri",[],function(){var f={starts_with_slashes:/^\/+/,ends_with_slashes:/\/+$/,pluses:/\+/g,query_separator:/[&;]/,uri_parser:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@\/]*))?)?@)?(\[[0-9a-fA-F:.]+\]|[^:\/?#]*)(?::(\d+|(?=:)))?(:)?)((((?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/};
if(!Array.prototype.forEach){Array.prototype.forEach=function(o,i){var l,j;
if(this==null){throw new TypeError(" this is null or not defined")
}var n=Object(this);
var h=n.length>>>0;
if(typeof o!=="function"){throw new TypeError(o+" is not a function")
}if(arguments.length>1){l=i
}j=0;
while(j<h){var m;
if(j in n){m=n[j];
o.call(l,m,j,n)
}j++
}}
}function g(h){if(h){h=h.toString().replace(f.pluses,"%20");
h=decodeURIComponent(h)
}return h
}function e(k){var l=f.uri_parser;
var i=["source","protocol","authority","userInfo","user","password","host","port","isColonUri","relative","path","directory","file","query","anchor"];
var h=l.exec(k||"");
var j={};
i.forEach(function(n,m){j[n]=h[m]||""
});
return j
}function c(t){var s,h,m,o,r,u,q;
var j=[];
if(typeof(t)==="undefined"||t===null||t===""){return j
}if(t.indexOf("?")===0){t=t.substring(1)
}h=t.toString().split(f.query_separator);
for(s=0,q=h.length;
s<q;
s++){m=h[s];
o=m.indexOf("=");
if(o!==0){r=g(m.substring(0,o));
u=g(m.substring(o+1));
j.push(o===-1?[m,null]:[r,u])
}}return j
}function d(h){this.uriParts=e(h);
this.queryPairs=c(this.uriParts.query);
this.hasAuthorityPrefixUserPref=null
}["protocol","userInfo","host","port","path","anchor"].forEach(function(h){d.prototype[h]=function(i){if(typeof i!=="undefined"){this.uriParts[h]=i
}return this.uriParts[h]
}
});
d.prototype.hasAuthorityPrefix=function(h){if(typeof h!=="undefined"){this.hasAuthorityPrefixUserPref=h
}if(this.hasAuthorityPrefixUserPref===null){return(this.uriParts.source.indexOf("//")!==-1)
}else{return this.hasAuthorityPrefixUserPref
}};
d.prototype.isColonUri=function(h){if(typeof h!=="undefined"){this.uriParts.isColonUri=!!h
}else{return !!this.uriParts.isColonUri
}};
d.prototype.query=function(n){var k="",j,m,h;
if(typeof n!=="undefined"){this.queryPairs=c(n)
}for(j=0,h=this.queryPairs.length;
j<h;
j++){m=this.queryPairs[j];
if(k.length>0){k+="&"
}if(m[1]===null){k+=m[0]
}else{k+=m[0];
k+="=";
if(typeof m[1]!=="undefined"){k+=encodeURIComponent(m[1])
}}}return k.length>0?"?"+k:k
};
d.prototype.getQueryParamValue=function(k){var m,j,h;
for(j=0,h=this.queryPairs.length;
j<h;
j++){m=this.queryPairs[j];
if(k===m[0]){return m[1]
}}};
d.prototype.getQueryParamValues=function(m){var h=[],k,n,j;
for(k=0,j=this.queryPairs.length;
k<j;
k++){n=this.queryPairs[k];
if(m===n[0]){h.push(n[1])
}}return h
};
d.prototype.deleteQueryParam=function(n,q){var h=[],m,p,k,o,j;
for(m=0,j=this.queryPairs.length;
m<j;
m++){p=this.queryPairs[m];
k=g(p[0])===g(n);
o=p[1]===q;
if((arguments.length===1&&!k)||(arguments.length===2&&(!k||!o))){h.push(p)
}}this.queryPairs=h;
return this
};
d.prototype.addQueryParam=function(i,j,h){if(arguments.length===3&&h!==-1){h=Math.min(h,this.queryPairs.length);
this.queryPairs.splice(h,0,[i,j])
}else{if(arguments.length>0){this.queryPairs.push([i,j])
}}return this
};
d.prototype.hasQueryParam=function(k){var j,h=this.queryPairs.length;
for(j=0;
j<h;
j++){if(this.queryPairs[j][0]==k){return true
}}return false
};
d.prototype.replaceQueryParam=function(n,l,j){var k=-1,h=this.queryPairs.length,m,o;
if(arguments.length===3){for(m=0;
m<h;
m++){o=this.queryPairs[m];
if(g(o[0])===g(n)&&decodeURIComponent(o[1])===g(j)){k=m;
break
}}if(k>=0){this.deleteQueryParam(n,g(j)).addQueryParam(n,l,k)
}}else{for(m=0;
m<h;
m++){o=this.queryPairs[m];
if(g(o[0])===g(n)){k=m;
break
}}this.deleteQueryParam(n);
this.addQueryParam(n,l,k)
}return this
};
["protocol","hasAuthorityPrefix","isColonUri","userInfo","host","port","path","query","anchor"].forEach(function(h){var i="set"+h.charAt(0).toUpperCase()+h.slice(1);
d.prototype[i]=function(j){this[h](j);
return this
}
});
d.prototype.scheme=function(){var h="";
if(this.protocol()){h+=this.protocol();
if(this.protocol().indexOf(":")!==this.protocol().length-1){h+=":"
}h+="//"
}else{if(this.hasAuthorityPrefix()&&this.host()){h+="//"
}}return h
};
d.prototype.origin=function(){var h=this.scheme();
if(this.userInfo()&&this.host()){h+=this.userInfo();
if(this.userInfo().indexOf("@")!==this.userInfo().length-1){h+="@"
}}if(this.host()){h+=this.host();
if(this.port()||(this.path()&&this.path().substr(0,1).match(/[0-9]/))){h+=":"+this.port()
}}return h
};
d.prototype.addTrailingSlash=function(){var h=this.path()||"";
if(h.substr(-1)!=="/"){this.path(h+"/")
}return this
};
d.prototype.toString=function(){var i,h=this.origin();
if(this.isColonUri()){if(this.path()){h+=":"+this.path()
}}else{if(this.path()){i=this.path();
if(!(f.ends_with_slashes.test(h)||f.starts_with_slashes.test(i))){h+="/"
}else{if(h){h.replace(f.ends_with_slashes,"/")
}i=i.replace(f.starts_with_slashes,"/")
}h+=i
}else{if(this.host()&&(this.query().toString()||this.anchor())){h+="/"
}}}if(this.query().toString()){h+=this.query().toString()
}if(this.anchor()){if(this.anchor().indexOf("#")!==0){h+="#"
}h+=this.anchor()
}return h
};
d.prototype.clone=function(){return new d(this.toString())
};
return{init:d}
});
((typeof _AP!=="undefined")?define:AP.define)("_ui-params",["_dollar","_base64","_uri"],function(e,c,d){return{encode:function(f){if(f){return c.encode(JSON.stringify(f))
}},fromUrl:function(f){var f=new d.init(f),g=f.getQueryParamValue("ui-params");
return this.decode(g)
},fromWindowName:function(f,h){f=f||window;
var g=this.decode(f.name);
if(!h){return g
}return(g)?g[h]:undefined
},decode:function(h){var g={};
if(h&&h.length>0){try{g=JSON.parse(c.decode(h))
}catch(f){if(console&&console.log){console.log("Cannot decode passed ui params",h)
}}}return g
}}
});
((typeof _AP!=="undefined")?define:AP.define)("_create-iframe",["_ui-params","_dispatch-custom-event"],function(e,d){return function c(g){if(!g.container){throw new Error("config.container must be defined")
}var h=document.createElement("iframe"),j="easyXDM_"+g.container+"_provider",f="";
if(g.uiParams){f=e.encode(g.uiParams)
}h.id=j;
h.name=f;
h.frameBorder="0";
Object.keys(g.props).forEach(function(k){h[k]=g.props[k]
});
h.setAttribute("rel","nofollow");
h.className="ap-iframe";
var i=document.getElementById(g.container);
if(i){i.appendChild(h)
}d(h,"ra.iframe.create");
h.src=g.remote;
return h
}
});
((typeof _AP!=="undefined")?define:AP.define)("_dispatch-custom-event",[],function(){return function c(g,d,f){var e;
if(window.CustomEvent&&typeof window.CustomEvent==="function"){e=new CustomEvent(d,{detail:f})
}else{e=document.createEvent("CustomEvent");
e.initCustomEvent(d,true,true,f)
}return g.dispatchEvent(e)
}
});
var b=["_events","_jwt","_uri","_create-iframe"];
((typeof _AP!=="undefined")?define:AP.define)("_xdm",b,function(d,f,h,c){var g=0;
function i(k){var n,m=k.uiParams||{},j=m.addonNestingLevel||1;
n=window;
for(var l=0;
l<j;
l++){n=n.parent
}return n
}function e(H,O,T){var r,L,m,N,V,M,R,w,B,t=window.location.toString(),x=T.local||{},D=T.remote||[],F=C(t);
var l=function(){var W={};
return{add:function(Z,Y,X){W[Z]={done:Y||null,fail:X||null,async:!!Y}
},invoke:function(Z,Y,X){var aa;
if(W[Y]){if(W[Y][Z]){W[Y][Z](X);
aa=true
}else{aa=!W[Y].async&&Z!=="fail"
}delete W[Y]
}return aa
}}
}();
var K=!/xdm_e/.test(t);
var j,s;
if(O.addonHostBridge){j=i(O)
}else{s=c(O);
j=s.contentWindow
}if(K||s!==undefined){M="IsNotUsed";
R=O.remoteKey;
B=R;
w=R;
m=(O.remoteOrigin?O.remoteOrigin:C(O.remote)).toLowerCase();
N=O.channel;
V={isHost:true,iframe:s,uiParams:O.uiParams,isActive:function(){if(!K&&j!==window.top){return document.contains(r.iframe)
}if(K&&s){return H.contains(document.documentElement,r.iframe)
}return true
}};
if(K){V.destroy=function(){window.clearTimeout(r.timeout);
y();
if(r.iframe){H(r.iframe).remove();
delete r.iframe
}};
if(s){H(s).on("ra.iframe.destroy",V.destroy)
}}}else{M="local";
B=p(t,"xdm_deprecated_addon_key_do_not_use");
w=M;
m=p(t,"xdm_e").toLowerCase();
N=p(t,"xdm_c");
V={isHost:false,isActive:function(){return true
}}
}L=w+"|"+(g+=1);
r=H.extend({id:L,remoteOrigin:m,channel:N,addonKey:w},V);
function E(W,aa,ab){try{var ad=j,Y=m;
if(typeof ab==="undefined"||ab==null){return ad.postMessage({c:N,i:W,k:B,t:aa,m:ab},Y)
}var X=ab.n;
if(ab.a){ab.a=J(ab.a)
}if(X==="registerInnerIframe"){ad=i(O);
Y="*"
}var ac=["resize","sizeToParent","init"];
if(ac.indexOf(X)>-1){ad=window.parent;
Y="*"
}return ad.postMessage({c:N,i:W,k:B,t:aa,m:ab},Y)
}catch(Z){q(A(Z))
}}function U(Z,aa,Y,X){var W=Math.floor(Math.random()*1000000000).toString(16);
l.add(W,Y,X);
E(W,"request",{n:Z,a:aa})
}function P(W,X){E(W,"done",X)
}function Q(W,X){E(W,"fail",X)
}function k(W){try{var ah=W.data,ac=ah.i,ad=ah.c,aj=ah.t,ai=ah.m,X;
if(typeof ai==="object"&&ai!=null){X=ai.n
}if(W.source!==j&&W.origin.toLowerCase()===m&&ad===N){j=W.source
}if(X!=="registerInnerIframe"&&((W.source!==j&&W.source!==window.parent&&W.source!==window.top)||W.origin.toLowerCase()!==m||ad!==N)){return
}if(aj==="request"){var af=ai.a,ag=x[X],ab,Z,aa;
if(ag){ab=function(ak){P(ac,ak)
};
Z=function(ak){Q(ac,ak)
};
aa=(af?af.length:0)<ag.length;
var Y=x;
if(r.isHost===true){Y=r;
if(Y.analytics){Y.analytics.trackBridgeMethod(X)
}}else{Y.isHost=false
}try{if(aa){ag.apply(Y,af.concat([ab,Z]))
}else{ab(ag.apply(Y,af))
}}catch(ae){Z(A(ae));
o(ae)
}}else{z("Unhandled request:",ah)
}}else{if(aj==="done"||aj==="fail"){if(!l.invoke(aj,ac,ai)){z("Unhandled response:",aj,ac,ai)
}}}}catch(ae){q(A(ae))
}}function u(W){return function(){var Z=[].slice.call(arguments),Y,X;
function aa(){if(H.isFunction(Z[Z.length-1])){return Z.pop()
}}X=aa();
Y=aa();
if(!Y){Y=X;
X=undefined
}U(W,Z,Y,X)
}
}H.each(D,function(X,W){if(typeof X==="number"){X=W
}r[X]=u(X)
});
var v=r.events=new d.Events(M,F);
v.onAny(function(){var X=arguments[arguments.length-1];
var Y=X.trace=X.trace||{};
var W=r.id+"|xdm";
if((r.isHost&&!Y[W]&&X.source.channel!==r.id)||(!r.isHost&&X.source.key===M)){Y[W]=true;
X=H.extend({},X);
delete X.trace;
z("Forwarding "+(r.isHost?"host":"addon")+" event:",X);
U("_event",[X])
}});
x._event=function(W){delete W.trace;
if(this.isHost){W.source={channel:this.id||L,key:this.addonKey,origin:this.remoteOrigin||m}
}z("Receiving as "+(this.isHost?"host":"addon")+" event:",W);
v._emitEvent(W)
};
function G(W){if(r.isActive()){k(W.originalEvent?W.originalEvent:W)
}else{y()
}}function n(){H(window).bind("message",G)
}function y(){H(window).unbind("message",G)
}function p(X,W){return new h.init(X).getQueryParamValue(W)
}function C(W){return new h.init(W).origin()
}function I(X,Y){var W=new h.init(X);
H.each(Y,function(aa,Z){W.addQueryParam(aa,Z)
});
return W.toString()
}function A(W){return W.message||W.toString()
}function z(){if(e.debug){q.apply(window,["DEBUG:"].concat([].slice.call(arguments)))
}}function q(){var W=H.log||(window.AJS&&window.AJS.log);
if(W){W.apply(window,arguments)
}}function o(){var W=(window.AJS&&window.AJS.error);
if(W){W.apply(window,arguments)
}}function J(W){var X=[];
return(function Y(ac){var aa,Z,ad;
if(typeof ac==="object"&&ac!==null&&!(ac instanceof Boolean)&&!(ac instanceof String)&&!(ac instanceof Date)&&!(ac instanceof RegExp)&&!(ac instanceof Blob)&&!(ac instanceof File)&&!(ac instanceof FileList)&&!(ac instanceof Error)&&!(ac instanceof Node)){if(X.indexOf(ac)>-1){q("XDM: A circular reference was detected and removed from the message.");
return null
}X.push(ac);
if(Array.isArray(ac)){ad=[];
for(aa=0;
aa<ac.length;
aa++){ad[aa]=Y(ac[aa])
}}else{ad={};
for(Z in ac){if(ac.hasOwnProperty(Z)){var ab=Y(ac[Z]);
if(ab!==null){ad[Z]=ab
}}}}return ad
}if(typeof ac==="function"){q("XDM: A function was detected and removed from the message.");
return null
}if(ac instanceof Error){q("XDM: An Error object was detected and removed from the message.");
return{}
}if(ac instanceof Node){q("XDM: A Node object was detected and removed from the message.");
return{}
}return ac
}(W))
}n();
var S=this;
r.bridgeReceive=function(){return k.apply(S,arguments)
};
return r
}return e
});
define("host/jwt-keepalive",["_dollar","_jwt"],function(e,c){function d(f){var g=e.Deferred(function(i){var h=window._AP.contentResolver.resolveByParameters({addonKey:f.addonKey,moduleKey:f.moduleKey,productContext:f.productContext,uiParams:f.uiParams,width:f.width,height:f.height,classifier:"json"});
h.done(function(k){var j=JSON.parse(k);
i.resolve(j.src)
})
});
return g
}return{updateUrl:d,isExpired:c.isJwtExpired}
});
define("_rpc",["_dollar","_xdm","host/jwt-keepalive","_uri","host/_util","_create-iframe"],function(e,h,f,d,i,n){var o=e.each,m=e.extend,g=e.isFunction,j={},c=[],k={},l=[];
return{extend:function(p){if(g(p)){p=p()
}m(j,p.apis);
m(k,p.internals);
c=c.concat(p.stubs||[]);
var q=p.init;
if(g(q)){l.push(q)
}return p.apis
},init:function(r,q,u){var p=new d.init(q.remote),s=p.getQueryParamValue("jwt"),t;
r=r||{};
u=u||{remote:c,local:e.extend({},k)};
o(j,function(v){c.push(v)
});
if(s&&f.isExpired(s)){t=f.updateUrl({addonKey:q.remoteKey,moduleKey:r.moduleKey,productContext:r.productContext||{},uiParams:q.uiParams,width:q.props.width,height:q.props.height})
}e.when(t).always(function(w){if(w){q.remote=w
}e("#"+i.escapeSelector(q.container)).find("iframe").trigger("ra.iframe.destroy");
var v=new h(e,q,u);
o(l,function(x,z){try{z(m({},r),v)
}catch(y){console.log(y)
}})
})
},initInner:function(q,p){o(j,function(s){c.push(s)
});
p.addonHostBridge=true;
var r=new h(e,p,{remote:c,local:e.extend({},k)});
o(l,function(s,u){try{u(m({},q),r)
}catch(t){console.log(t)
}});
return r
}}
});
define("resize",["_dollar","_rpc"],function(c,d){d.extend(function(){return{init:function(f,g){g.resize=AJS.debounce(function e(k,i,h){k(this.iframe).css({width:i,height:h});
var j=k(this.iframe).closest(".ap-container");
j.trigger("resized",{width:i,height:h})
})
},internals:{resize:function(f,e){if(!this.uiParams.isDialog){this.resize(c,f,e)
}},sizeToParent:AJS.debounce(function(f){var e=function(h){var g;
if(f){c(".ac-content-page #footer").css({display:"none"});
c(".ac-content-page").css({overflow:"hidden !important"});
g=c(document).height()-c("#header > nav").outerHeight()
}else{g=c(document).height()-c("#header > nav").outerHeight()-c("#footer").outerHeight()-20
}c(h).css({width:"100%",height:g+"px"})
};
if(this.uiParams.isGeneral){c(this.iframe).addClass("full-size-general-page");
c(window).on("resize",function(){e(this.iframe)
});
e(this.iframe)
}else{c(this.iframe).addClass("full-size-general-page-fail")
}})}}
})
});
require("resize");
define("host/_status_helper",["_dollar"],function(g){var d={loading:{descriptionHtml:'<div class="small-spinner"></div>Loading add-on...'},"load-timeout":{descriptionHtml:'<div class="small-spinner"></div>Add-on is not responding. Wait or <a href="#" class="ap-btn-cancel">cancel</a>?'},"load-error":{descriptionHtml:"Add-on failed to load."}};
function f(l){if(l.data("loadingStatusTimer")){clearTimeout(l.data("loadingStatusTimer"));
l.removeData("loadingStatusTimer")
}l.find(".ap-status").addClass("hidden")
}function h(m,l){f(m);
m.closest(".ap-container").removeClass("hidden");
m.find(".ap-stats").removeClass("hidden");
m.find(".ap-"+l).removeClass("hidden");
setTimeout(function(){var n=m.find(".small-spinner",".ap-"+l);
if(n.length&&n.spin){n.spin({zIndex:"1"})
}},10)
}function i(l){f(l)
}function e(m,l){if(!l){h(m,"loading")
}else{var n=setTimeout(h.bind(null,m,"loading"),l);
m.data("loadingStatusTimer",n)
}}function j(l){h(l,"load-timeout")
}function k(l){h(l,"load-error")
}function c(){var n,m=g('<div class="ap-stats" />');
for(n in d){var l=g('<div class="ap-'+n+' ap-status hidden" />');
l.append("<small>"+d[n].descriptionHtml+"</small>");
m.append(l)
}return m
}return{createStatusMessages:c,showLoadingStatus:e,showloadTimeoutStatus:j,showLoadErrorStatus:k,showLoadedStatus:i}
});
require(["_dollar","_rpc","host/_status_helper"],function(d,e,c){e.extend(function(f){return{init:function(i,h){var g=d(h.iframe).closest(".ap-container");
c.showLoadingStatus(g,0);
g.find(".ap-load-timeout a.ap-btn-cancel").click(function(){c.showLoadErrorStatus(g);
if(h.analytics&&h.analytics.iframePerformance){h.analytics.iframePerformance.cancel()
}});
h.timeout=setTimeout(function(){h.timeout=null;
c.showloadTimeoutStatus(g);
if(h.isActive()&&h.analytics&&h.analytics.iframePerformance){h.analytics.iframePerformance.timeout()
}},20000)
},internals:{init:function(){if(this.analytics&&this.analytics.iframePerformance){this.analytics.iframePerformance.end()
}var g=d(this.iframe).closest(".ap-container");
c.showLoadedStatus(g);
clearTimeout(this.timeout);
g.find(".ap-content").addClass("iframe-init")
}}}
})
});
define("host/content",["_dollar","_uri","host/_util"],function(i,f,j){function e(q,p){var o=q.attr("class");
var n=o?o.match(p):null;
return i.isArray(n)?n[1]:false
}function l(m){return e(m,/ap-plugin-key-([^\s]*)/)
}function d(m){return e(m,/ap-module-key-([^\s]*)/)
}function k(m){return e(m,/ap-target-key-([^\s]*)/)
}function h(p){var n=d(p),m=l(p),o=p.hasClass("ap-inline-dialog")?"inlineDialog":"dialog";
return window._AP[o+"Options"][j.addonToNs(m,n)]||{}
}function c(m){var n=new f.init(m).queryPairs;
var o={};
i.each(n,function(p,q){o[q[0]]=q[1]
});
return o
}function g(o,m,p){function n(u){u.preventDefault();
var t=i(u.target).closest(m),q=t.attr("href"),s=new f.init(q),r={bindTo:t,defaultHeader:t.text(),width:s.getQueryParamValue("width"),height:s.getQueryParamValue("height"),cp:s.getQueryParamValue("cp"),key:l(t),productContext:c(q)};
p(q,r,u.type)
}i(window.document).on(o,m,n)
}return{eventHandler:g,getOptionsForWebItem:h,getWebItemPluginKey:l,getWebItemModuleKey:d,getWebItemTargetKey:k}
});
(function(o){var c=(function(){function p(q){this.options=q
}p.prototype.toString=function(){if(JSON&&JSON.stringify){return JSON.stringify(this.options)
}else{return this.options
}};
return p
}());
var k=(function(){function v(y){return Object.prototype.toString.apply(y)==="[object Array]"
}function s(y){return Object.prototype.toString.apply(y)==="[object String]"
}function x(y){return Object.prototype.toString.apply(y)==="[object Number]"
}function u(y){return Object.prototype.toString.apply(y)==="[object Boolean]"
}function t(z,B){var y="",C=true,A;
for(A=0;
A<z.length;
A+=1){if(C){C=false
}else{y+=B
}y+=z[A]
}return y
}function q(z,B){var y=[],A=0;
for(;
A<z.length;
A+=1){y.push(B(z[A]))
}return y
}function r(A,z){var y=[],B=0;
for(;
B<A.length;
B+=1){if(z(A[B])){y.push(A[B])
}}return y
}function p(z){if(typeof z!=="object"||z===null){return z
}Object.freeze(z);
var A,y;
for(y in z){if(z.hasOwnProperty(y)){A=z[y];
if(typeof A==="object"){w(A)
}}}return z
}function w(y){if(typeof Object.freeze==="function"){return p(y)
}return y
}return{isArray:v,isString:s,isNumber:x,isBoolean:u,join:t,map:q,filter:r,deepFreeze:w}
}());
var l=(function(){function r(s){return(s>="a"&&s<="z")||((s>="A"&&s<="Z"))
}function p(s){return s>="0"&&s<="9"
}function q(s){return p(s)||(s>="a"&&s<="f")||(s>="A"&&s<="F")
}return{isAlpha:r,isDigit:p,isHexDigit:q}
}());
var h=(function(){var p={encode:function(v){return unescape(encodeURIComponent(v))
},numBytes:function(v){if(v<=127){return 1
}else{if(194<=v&&v<=223){return 2
}else{if(224<=v&&v<=239){return 3
}else{if(240<=v&&v<=244){return 4
}}}}return 0
},isValidFollowingCharCode:function(v){return 128<=v&&v<=191
}};
function u(z){var v="",y=p.encode(z),w,x;
for(x=0;
x<y.length;
x+=1){w=y.charCodeAt(x);
v+="%"+(w<16?"0":"")+w.toString(16).toUpperCase()
}return v
}function t(v,w){return v.charAt(w)==="%"&&l.isHexDigit(v.charAt(w+1))&&l.isHexDigit(v.charAt(w+2))
}function s(v,w){return parseInt(v.substr(w,2),16)
}function r(x){if(!t(x,0)){return false
}var y=s(x,1);
var w=p.numBytes(y);
if(w===0){return false
}for(var v=1;
v<w;
v+=1){if(!t(x,3*v)||!p.isValidFollowingCharCode(s(x,3*v+1))){return false
}}return true
}function q(A,z){var y=A.charAt(z);
if(!t(A,z)){return y
}var x=s(A,z+1);
var w=p.numBytes(x);
if(w===0){return y
}for(var v=1;
v<w;
v+=1){if(!t(A,z+3*v)||!p.isValidFollowingCharCode(s(A,z+3*v+1))){return y
}}return A.substr(z,3*w)
}return{encodeCharacter:u,isPctEncoded:r,pctCharAt:q}
}());
var d=(function(){function p(s){return l.isAlpha(s)||l.isDigit(s)||s==="_"||h.isPctEncoded(s)
}function q(s){return l.isAlpha(s)||l.isDigit(s)||s==="-"||s==="."||s==="_"||s==="~"
}function r(s){return s===":"||s==="/"||s==="?"||s==="#"||s==="["||s==="]"||s==="@"||s==="!"||s==="$"||s==="&"||s==="("||s===")"||s==="*"||s==="+"||s===","||s===";"||s==="="||s==="'"
}return{isVarchar:p,isUnreserved:q,isReserved:r}
}());
var f=(function(){function q(w,x){var t="",u,v="";
if(typeof w==="number"||typeof w==="boolean"){w=w.toString()
}for(u=0;
u<w.length;
u+=v.length){v=w.charAt(u);
t+=d.isUnreserved(v)||(x&&d.isReserved(v))?v:h.encodeCharacter(v)
}return t
}function p(t){return q(t,true)
}function s(v,t){var u=h.pctCharAt(v,t);
if(u.length>1){return u
}else{return d.isReserved(u)||d.isUnreserved(u)?u:h.encodeCharacter(u)
}}function r(w){var t="",u,v="";
for(u=0;
u<w.length;
u+=v.length){v=h.pctCharAt(w,u);
if(v.length>1){t+=v
}else{t+=d.isReserved(v)||d.isUnreserved(v)?v:h.encodeCharacter(v)
}}return t
}return{encode:q,encodePassReserved:p,encodeLiteral:r,encodeLiteralCharacter:s}
}());
var j=(function(){var p={};
function q(r){p[r]={symbol:r,separator:(r==="?")?"&":(r===""||r==="+"||r==="#")?",":r,named:r===";"||r==="&"||r==="?",ifEmpty:(r==="&"||r==="?")?"=":"",first:(r==="+")?"":r,encode:(r==="+"||r==="#")?f.encodePassReserved:f.encode,toString:function(){return this.symbol
}}
}q("");
q("+");
q("#");
q(".");
q("/");
q(";");
q("?");
q("&");
return{valueOf:function(r){if(p[r]){return p[r]
}if("=,!@|".indexOf(r)>=0){return null
}return p[""]
}}
}());
function n(q){var p;
if(q===null||q===undefined){return false
}if(k.isArray(q)){return q.length>0
}if(typeof q==="string"||typeof q==="number"||typeof q==="boolean"){return true
}for(p in q){if(q.hasOwnProperty(p)&&n(q[p])){return true
}}return false
}var e=(function(){function p(q){this.literal=f.encodeLiteral(q)
}p.prototype.expand=function(){return this.literal
};
p.prototype.toString=p.prototype.expand;
return p
}());
var i=(function(){function q(y){var u,z=[],A=null,v=null,s=null,x,w="";
function t(){var B=y.substring(v,x);
if(B.length===0){throw new c({expressionText:y,message:"a varname must be specified",position:x})
}A={varname:B,exploded:false,maxLength:null};
v=null
}function r(){if(s===x){throw new c({expressionText:y,message:"after a ':' you have to specify the length",position:x})
}A.maxLength=parseInt(y.substring(s,x),10);
s=null
}u=(function(B){var C=j.valueOf(B);
if(C===null){throw new c({expressionText:y,message:"illegal use of reserved operator",position:x,operator:B})
}return C
}(y.charAt(0)));
x=u.symbol.length;
v=x;
for(;
x<y.length;
x+=w.length){w=h.pctCharAt(y,x);
if(v!==null){if(w==="."){if(v===x){throw new c({expressionText:y,message:"a varname MUST NOT start with a dot",position:x})
}continue
}if(d.isVarchar(w)){continue
}t()
}if(s!==null){if(x===s&&w==="0"){throw new c({expressionText:y,message:"A :prefix must not start with digit 0",position:x})
}if(l.isDigit(w)){if(x-s>=4){throw new c({expressionText:y,message:"A :prefix must have max 4 digits",position:x})
}continue
}r()
}if(w===":"){if(A.maxLength!==null){throw new c({expressionText:y,message:"only one :maxLength is allowed per varspec",position:x})
}if(A.exploded){throw new c({expressionText:y,message:"an exploeded varspec MUST NOT be varspeced",position:x})
}s=x+1;
continue
}if(w==="*"){if(A===null){throw new c({expressionText:y,message:"exploded without varspec",position:x})
}if(A.exploded){throw new c({expressionText:y,message:"exploded twice",position:x})
}if(A.maxLength){throw new c({expressionText:y,message:"an explode (*) MUST NOT follow to a prefix",position:x})
}A.exploded=true;
continue
}if(w===","){z.push(A);
A=null;
v=x+1;
continue
}throw new c({expressionText:y,message:"illegal character",character:w,position:x})
}if(v!==null){t()
}if(s!==null){r()
}z.push(A);
return new g(y,u,z)
}function p(x){var s,v,w=[],u=null,t=0;
for(s=0;
s<x.length;
s+=1){v=x.charAt(s);
if(t!==null){if(v==="}"){throw new c({templateText:x,message:"unopened brace closed",position:s})
}if(v==="{"){if(t<s){w.push(new e(x.substring(t,s)))
}t=null;
u=s
}continue
}if(u!==null){if(v==="{"){throw new c({templateText:x,message:"brace already opened",position:s})
}if(v==="}"){if(u+1===s){throw new c({templateText:x,message:"empty braces",position:u})
}try{w.push(q(x.substring(u+1,s)))
}catch(r){if(r.prototype===c.prototype){throw new c({templateText:x,message:r.options.message,position:u+r.options.position,details:r.options})
}throw r
}u=null;
t=s+1
}continue
}throw new Error("reached unreachable code")
}if(u!==null){throw new c({templateText:x,message:"unclosed brace",position:u})
}if(t<x.length){w.push(new e(x.substr(t)))
}return new m(x,w)
}return p
}());
var g=(function(){function s(y){return(JSON&&JSON.stringify)?JSON.stringify(y):y
}function v(z){if(!n(z)){return true
}if(k.isString(z)){return z===""
}if(k.isNumber(z)||k.isBoolean(z)){return false
}if(k.isArray(z)){return z.length===0
}for(var y in z){if(z.hasOwnProperty(y)){return false
}}return true
}function q(A){var y=[],z;
for(z in A){if(A.hasOwnProperty(z)){y.push({name:z,value:A[z]})
}}return y
}function t(A,y,z){this.templateText=A;
this.operator=y;
this.varspecs=z
}t.prototype.toString=function(){return this.templateText
};
function u(z,A,B){var y="";
B=B.toString();
if(A.named){y+=f.encodeLiteral(z.varname);
if(B===""){y+=A.ifEmpty;
return y
}y+="="
}if(z.maxLength!==null){B=B.substr(0,z.maxLength)
}y+=A.encode(B);
return y
}function p(y){return n(y.value)
}function x(A,B,C){var z=[],y="";
if(B.named){y+=f.encodeLiteral(A.varname);
if(v(C)){y+=B.ifEmpty;
return y
}y+="="
}if(k.isArray(C)){z=C;
z=k.filter(z,n);
z=k.map(z,B.encode);
y+=k.join(z,",")
}else{z=q(C);
z=k.filter(z,p);
z=k.map(z,function(D){return B.encode(D.name)+","+B.encode(D.value)
});
y+=k.join(z,",")
}return y
}function r(A,B,C){var z=k.isArray(C),y=[];
if(z){y=C;
y=k.filter(y,n);
y=k.map(y,function(E){var D=f.encodeLiteral(A.varname);
if(v(E)){D+=B.ifEmpty
}else{D+="="+B.encode(E)
}return D
})
}else{y=q(C);
y=k.filter(y,p);
y=k.map(y,function(D){var E=f.encodeLiteral(D.name);
if(v(D.value)){E+=B.ifEmpty
}else{E+="="+B.encode(D.value)
}return E
})
}return k.join(y,B.separator)
}function w(A,B){var z=[],y="";
if(k.isArray(B)){z=B;
z=k.filter(z,n);
z=k.map(z,A.encode);
y+=k.join(z,A.separator)
}else{z=q(B);
z=k.filter(z,function(C){return n(C.value)
});
z=k.map(z,function(C){return A.encode(C.name)+"="+A.encode(C.value)
});
y+=k.join(z,A.separator)
}return y
}t.prototype.expand=function(F){var B=[],C,z,E,y,D=false,A=this.operator;
for(C=0;
C<this.varspecs.length;
C+=1){z=this.varspecs[C];
E=F[z.varname];
if(E===null||E===undefined){continue
}if(z.exploded){D=true
}y=k.isArray(E);
if(typeof E==="string"||typeof E==="number"||typeof E==="boolean"){B.push(u(z,A,E))
}else{if(z.maxLength&&n(E)){throw new Error("Prefix modifiers are not applicable to variables that have composite values. You tried to expand "+this+" with "+s(E))
}else{if(!z.exploded){if(A.named||!v(E)){B.push(x(z,A,E))
}}else{if(n(E)){if(A.named){B.push(r(z,A,E))
}else{B.push(w(A,E))
}}}}}}if(B.length===0){return""
}else{return A.first+k.join(B,A.separator)
}};
return t
}());
var m=(function(){function p(r,q){this.templateText=r;
this.expressions=q;
k.deepFreeze(this)
}p.prototype.toString=function(){return this.templateText
};
p.prototype.expand=function(s){var r,q="";
for(r=0;
r<this.expressions.length;
r+=1){q+=this.expressions[r].expand(s)
}return q
};
p.parse=i;
p.UriTemplateError=c;
return p
}());
o(m)
}(function(c){if(typeof define==="function"){define("_uritemplate",[],function(){return c
})
}else{if(typeof window!=="undefined"){window.UriTemplate=c
}else{global.UriTemplate=c
}}}));
define("host/_addons",["_dollar","_rpc"],function(d,e){var c={};
e.extend(function(){var f={_emitEvent:function(g){if(g.source.key in c){d.each(c[g.source.key],function(i,h){h.bus._emitEvent(g)
})
}else{AJS.trigger("analyticsEvent",{name:"emitToAll.unknownSource",data:g.source})
}},remove:function(h){var g=c[h.addonKey][h.id];
if(g){g.bus.offAny(g.listener)
}delete c[h.addonKey][h.id];
return this
},init:function(g,i){if(!c[i.addonKey]){c[i.addonKey]={}
}var h=c[i.addonKey][i.id]={bus:i.events,listener:function(){var k=arguments[arguments.length-1];
var l=k.trace=k.trace||{};
var j=i.id+"|addon";
if(!l[j]){l[j]=true;
f._emitEvent(k)
}}};
h.bus.onAny(h.listener);
h.bus.on("ra.iframe.destroy",function(){f.remove(i)
})
}};
return f
});
return{emitToAll:function(f){d.each(c,function(g,h){d.each(h,function(j,i){i.bus.emit(f)
})
})
}}
});
require(["_dollar","_rpc","_ui-params"],function(e,g,f){var m=[];
var h=0;
var c=[];
function k(r){var p=r.key;
var q=r.origin.toLowerCase();
var t=e.extend({},r);
var s="channel-"+t.ns;
t.ns=t.ns+"-"+p+"-"+h++;
t.key=p;
t.origin=q;
t.uiParams=f.fromUrl(window.location.toString())||{};
t.uiParams.isGeneral=!!t.general;
if(t.productCtx&&!t.productContext){t.productContext=JSON.parse(t.productCtx)
}var u="embedded-"+t.ns;
var o={remote:t.src,remoteOrigin:t.origin,remoteKey:t.key,container:u,channel:s,props:{},uiParams:t.uiParams};
c.push({innerFrameOptions:t,xdmOptions:o,origin:t.origin})
}g.extend(function(){return{internals:{registerInnerIframe:function(o){k(o)
}}}
});
function l(o){return m.indexOf(o)>-1
}function d(o,p){return o&&_AP.addonOriginMap&&_AP.addonOriginMap[o]!==undefined&&_AP.addonOriginMap[o].toLowerCase()===p.toLowerCase()
}function i(){return[].slice.call(document.getElementsByTagName("iframe"))
}function j(p){p=p.originalEvent?p.originalEvent:p;
var v=p.data,o=p.source,w=p.origin,t=v.c,q=v.k;
if(o===window.top){return
}var r=i().filter(function(x){return x.contentWindow===o
}).length>0;
if(r){return
}if(l(t)){return
}if(!d(q,w)){return
}m.push(t);
var u=c.filter(function(x){return x&&x.xdmOptions&&x.xdmOptions.channel===t
})[0];
if(!u){return
}var s=g.initInner(u.innerFrameOptions,u.xdmOptions,o);
s.bridgeReceive(p)
}function n(){window.addEventListener("message",j)
}n()
});
define("analytics/analytics",["_dollar"],function(g){var d=["resize","init"];
var f=20000;
var i=100;
function h(){return window.performance&&window.performance.now?window.performance.now():new Date().getTime()
}function c(j){var k={};
this.addonKey=j.addonKey;
this.moduleKey=j.moduleKey;
this.iframePerformance={start:function(){k.startLoading=h()
},end:function(){var l=h()-k.startLoading;
e.track("iframe.performance.load",{addonKey:j.addonKey,moduleKey:j.moduleKey,value:l>f?"x":Math.ceil((l)/i)});
delete k.startLoading
},timeout:function(){e.track("iframe.performance.timeout",{addonKey:j.addonKey,moduleKey:j.moduleKey});
this.end()
},cancel:function(){e.track("iframe.performance.cancel",{addonKey:j.addonKey,moduleKey:j.moduleKey})
}}
}var e=c.prototype;
e.getKey=function(){return this.addonKey+":"+this.moduleKey
};
e.track=function(j,l){var k="connect.addon."+j;
if(AJS.Analytics){AJS.Analytics.triggerPrivacyPolicySafeEvent(k,l)
}else{if(AJS.trigger){AJS.trigger("analyticsEvent",{name:k,data:l})
}else{return false
}}return true
};
e.trackBridgeMethod=function(j){if(g.inArray(j,d)!==-1){return false
}this.track("bridge.invokemethod",{name:j,addonKey:this.addonKey,moduleKey:this.moduleKey})
};
return{get:function(j){return new c(j)
}}
});
(function(c){define("host/create",["_dollar","host/_util","_rpc","_ui-params","analytics/analytics"],function(i,d,k,h,e){var j=window.requestAnimationFrame||function(l){setTimeout(l,10)
};
function g(l){if(!l){throw new Error("ns undefined")
}return i("#embedded-"+d.escapeSelector(l))
}function f(n){if(typeof n.uiParams!=="object"){n.uiParams=h.fromUrl(n.src)||{}
}var o=n.ns=d.addonToNs(n.key,n.moduleKey);
var r="embedded-"+o,p="channel-"+o,m=n.w||"100%",q=n.h||"0";
n.uiParams.isGeneral=!!n.general;
var l={remote:n.src,remoteOrigin:n.origin,remoteKey:n.key,container:r,channel:p,props:{width:m,height:q},uiParams:n.uiParams};
if(n.productCtx&&!n.productContext){n.productContext=JSON.parse(n.productCtx)
}k.extend({init:function(t,s){s.analytics=e.get({addonKey:s.addonKey,moduleKey:o});
s.analytics.iframePerformance.start();
s.productContext=n.productContext
}});
k.init(n,l)
}return function(m){var o=0;
var n=d.addonToNs(m.key,m.moduleKey);
function l(){if(g(n).length===0&&o<10){setTimeout(function(){o++;
l()
},50);
return
}f(m)
}if(AJS.$.isReady){j(l)
}else{i(l)
}}
})
}(this));
var a=require("_rpc");
return{extend:a.extend,init:a.init,uiParams:require("_ui-params"),create:require("host/create"),_uriHelper:require("_uri"),_statusHelper:require("host/_status_helper"),_addons:require("host/_addons"),webItemHelper:require("host/content"),version:"3.2.10"}
}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:remote-condition', location = 'js/condition/remote.js' */
(function($, context){
  var hidden;

  function hide() {
    if (!hidden) {
      hidden = true;
      // Connect any Remotable Plugin hosted Web Items to a dialog that loads the appropriate IFrame Servlet,
      // look for jira issue tabs, and look for jira project tabs
      $(".remote-condition, #issue-tabs a[id$='-remote-condition'], .tabs a[id$='-remote-condition-panel']").each(function (i, el) {
        var el$ = $(el), parent$ = el$.parent();
        el$.addClass("hidden");
        if (parent$[0].tagName == "LI") {
          parent$.addClass("hidden");
        }
      });
    }
  }

  AJS.toInit(hide);

  context.RemoteConditions = {
    /**
     * Hides UI elements that are protected by remote conditions. These are all hacks hiding is supported
     * by the module types directly
     */
    hide: hide
  };

})(AJS.$, _AP);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-host-js', location = '/js/iframe/host/main.js' */
define("connect-host",function(){return _AP
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-host-js', location = '/js/iframe/host/content-resolver.js' */
(function(d,e,c){function b(g,f){return AJS.contextPath()+"/plugins/servlet/ac/"+encodeURIComponent(g)+"/"+encodeURIComponent(f)
}var a={resolveByUrl:function(f){var g=jQuery.Deferred(function(h){h.resolve(f)
}).promise();
return g
},resolveByParameters:function(f){return d.ajax(b(f.addonKey,f.moduleKey),{dataType:"html",data:{"ui-params":e.encode(f.uiParams),"plugin-key":f.addonKey,"product-context":JSON.stringify(f.productContext),key:f.moduleKey,width:f.width||"100%",height:f.height||"100%",classifier:f.classifier||"raw"}})
}};
c._AP.contentResolver=a
}(AJS.$,_AP.uiParams,this));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-cookie.js' */
(function(b,a){b("ac/cookie/main",[],function(){function c(d,e){if(!d||d.length===0){throw new Error("addon key must be defined on cookies")
}if(!e||e.length===0){throw new Error("Name must be defined")
}return d+"$$"+e
}return{saveCookie:function(d,f,g,e){a.Cookie.save(c(d,f),g,e)
},readCookie:function(d,e,g){var f=a.Cookie.read(c(d,e));
if(typeof g==="function"){g(f)
}},eraseCookie:function(d,e){a.Cookie.erase(c(d,e))
}}
})
})(define,AJS);
(function(a){a("ac/cookie",["ac/cookie/main","connect-host"],function(b,c){c.extend(function(){return{internals:{saveCookie:function(e,f,d){b.saveCookie(this.addonKey,e,f,d)
},readCookie:function(d,e){b.readCookie(this.addonKey,d,e)
},eraseCookie:function(d){b.eraseCookie(this.addonKey,d)
}}}
})
})
})(define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-scroll-position.js' */
(function(b,a){b("ac/scrollPosition",["connect-host"],function(f){function d(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
}function c(){return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
}var e={getPosition:function(){if(this.uiParams.isGeneral){var h=this.iframe.getBoundingClientRect();
var i=h.top+d();
var g=h.left+c();
return{scrollY:window.scrollY-i,scrollX:window.scrollX-g,width:window.innerWidth,height:window.innerHeight}
}else{a.log("ScrollPosition is only available to page modules")
}}};
f.extend(function(){return{internals:e}
});
return e
})
})(define,AJS);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-env.js' */
(function(a){a("ac/env",["connect-host"],function(c){var b;
c.extend(function(){return{init:function(d){b=d
},internals:{getLocation:function(){return window.location.href
}}}
})
})
})(define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-messages.js' */
(function(c,a,b){c("ac/messages/main",[],function(){var e="ac-message-container",f=["generic","error","warning","success","info","hint"];
function h(i){return i.search(/^ap\-message\-[0-9]+$/)==0
}function d(){var i=b("#"+e);
if(i.length<1){i=b('<div id="'+e+'" />').appendTo("body")
}return i
}function g(j){var l,k,n={},m=["closeable","fadeout","delay","duration","id"];
for(l in m){k=m[l];
if(k in j){n[k]=j[k]
}}return n
}return{showMessage:function(l,m,i,k){var j=d();
k=g(k);
b.extend(k,{title:m,body:a.escapeHtml(i)});
if(b.inArray(l,f)<0){throw"Invalid message type. Must be: "+f.join(", ")
}if(h(k.id)){a.messages[l](j,k);
j.css("margin-left","-"+j.innerWidth()/2+"px")
}},clearMessage:function(i){if(h(i)){b("#"+i).remove()
}},onClose:function(j,i){if(h(j)&&b.isFunction(i)){b(document).on("aui-message-close",function(l,k){if(k.attr("id")===j){i()
}})
}}}
})
})(define,AJS,AJS.$);
(function(a){a("ac/messages",["ac/messages/main","connect-host"],function(b,c){c.extend(function(){return{internals:{showMessage:function(f,g,d,e){return b.showMessage(f,g,d,e)
},clearMessage:function(d){return b.clearMessage(d)
},onClose:function(e,d){return b.onClose(e,d)
}}}
})
})
})(define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-request.js' */
(function(c,a,b){c("ac/request",["connect-host"],function(j){var h=["status","statusText","responseText"],d=["Content-Type","ETag"],g=["If-Match","If-None-Match"],e=null;
function f(m,k,l){if(l._isBlob&&l.blob&&l.name){m.append(k,l.blob,l.name)
}else{m.append(k,l)
}return m
}function i(k){k.contentType=false;
k.processData=false;
if(k.data&&typeof k.data==="object"){var l=new FormData();
Object.keys(k.data).forEach(function(m){var n=k.data[m];
if(Array.isArray(n)){n.forEach(function(p,o){l=f(l,m+"["+o+"]",p)
})
}else{l=f(l,m,n)
}});
k.data=l
}else{throw new Error("For a Multipart request, data must to be an Object")
}k.headers["X-Atlassian-Token"]="no-check";
return k
}j.extend(function(){return{init:function(k){e=k.cp
},internals:{request:function(p,s,q){var k=e+p.url;
k=k.replace(/\/\.\.\//ig,"");
function r(u){var t={headers:{}};
b.each(h,function(x,w){t[w]=u[w]
});
b.each(d,function(x,w){t.headers[w]=u.getResponseHeader(w)
});
return t
}function o(t,v,u){s([t,v,r(u)])
}function m(u,v,t){q([r(u),v,t])
}var l={};
b.each(p.headers||{},function(u,t){l[u.toLowerCase()]=t
});
var n={url:k,type:p.type||"GET",data:p.data,dataType:"text",contentType:p.contentType,cache:(typeof p.cache!=="undefined")?!!p.cache:undefined,headers:{Accept:l.accept||"*/*","AP-Client-Key":this.addonKey}};
if(n.contentType==="multipart/form-data"){n=i(n)
}b.each(g,function(t,u){if(l[u.toLowerCase()]){n.headers[u]=l[u.toLowerCase()]
}});
if(p.experimental===true){n.headers["X-ExperimentalApi"]="opt-in"
}b.ajax(n).then(o,m)
}}}
})
})
})(define,AJS,AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-history.js' */
(function(a){a("ac/history/main",["connect-host"],function(i){var l,e="!",c=i._uriHelper;
function f(o){if(o===undefined||o===null){return""
}return o.toString().replace(new RegExp("^"+e),"")
}function m(o){if(o===undefined||o===null){throw"You must supply text to prefix"
}return e+f(o)
}function n(o,p){var q=new c.init(window.location.href),r=new c.init(window.location.href);
r.anchor(m(o));
if(r.anchor()!==q.anchor()){l=r.anchor();
if(p){window.location.replace("#"+r.anchor())
}else{window.location.assign("#"+r.anchor())
}return r.anchor()
}}function j(o){n(o)
}function h(o){n(o,true)
}function d(o){history.go(o)
}function g(q,o){var r=new c.init(q.newURL);
var p=new c.init(q.oldURL);
if((r.anchor()!==p.anchor())&&(l!==r.anchor())){o(b(q))
}l=null
}function b(o){return{newURL:f(new c.init(o.newURL).anchor()),oldURL:f(new c.init(o.oldURL).anchor())}
}function k(){var p=new c.init(window.location.href),o=f(p.anchor());
return o
}return{pushState:j,replaceState:h,go:d,hashChange:g,getState:k}
})
})(define);
(function(c,a,b){c("ac/history",["ac/history/main","connect-host"],function(d,e){e.extend(function(){return{init:function(g,f){if(g.uiParams.isGeneral){b(window).on("hashchange",function(h){d.hashChange(h.originalEvent,f.historyMessage)
})
}},internals:{historyPushState:function(f){if(this.uiParams.isGeneral){return d.pushState(f)
}else{a.log("History is only available to page modules")
}},historyReplaceState:function(f){if(this.uiParams.isGeneral){return d.replaceState(f)
}else{a.log("History is only available to page modules")
}},historyGo:function(f){if(this.uiParams.isGeneral){return d.go(f)
}else{a.log("History is only available to page modules")
}}},stubs:["historyMessage"]}
})
})
})(define,AJS,AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-dialog.js' */
define("host/_util",[],function(){return{escapeSelector:function(a){if(!a){throw new Error("No selector to escape")
}return a.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")
},addonToNs:function(b,a){if(b.length===0||a.length===0){throw new Error("addon_key and module_key must be specified")
}return b+"__"+a
}}
});
(function(b,a){b("ac/dialog/header-controls",[],function(){var c='<div class="header-title-container" class="aui-item expanded"><div><span class="header-title"></span></div></div><div class="header-control-panel" class="aui-item"></div>';
return{create:function(e){var d=a(c);
d.find(".header-title").text(e.header||"");
return{$el:d}
}}
})
})(define,AJS.$);
(function(b,a){b("ac/dialog/button",[],function(){function c(d){this.$el=a("<button />").text(d.text).addClass("aui-button aui-button-"+d.type).addClass(d.additionalClasses);
this.isEnabled=function(){return !(this.$el.attr("aria-disabled")==="true")
};
this.setEnabled=function(e){if(d.noDisable===true){return false
}this.$el.attr("aria-disabled",!e);
return true
};
this.isHidden=function(){return(this.$el.css("display")==="none")
};
this.setHidden=function(e){if(d.noHide===true){return false
}if(e){this.$el.hide()
}else{this.$el.show()
}return true
};
this.setEnabled(true);
this.click=function(e){if(e){this.$el.unbind("ra.dialog.click");
this.$el.bind("ra.dialog.click",e)
}else{this.dispatch(true)
}};
this.dispatch=function(e){var f=e?"done":"fail";
d.actions&&d.actions[f]&&d.actions[f]()
};
this.setText=function(e){if(e){this.$el.text(e)
}}
}return{button:c,submit:function(d){return new c({type:"primary",text:"Submit",additionalClasses:"ap-dialog-submit",actions:d})
},cancel:function(d){return new c({type:"link",text:"Cancel",noDisable:true,noHide:true,additionalClasses:"ap-dialog-cancel",actions:d})
}}
})
})(define,AJS.$);
(function(d,b,a,c){d("ac/dialog",["connect-host","ac/dialog/button","ac/dialog/header-controls"],function(t,e,r){var p=c(window);
var q=0;
var f=[];
var i;
var n;
var o;
function l(){return{submit:e.submit({done:g}),cancel:e.cancel({done:g})}
}var k=function(u){if(u.keyCode===27&&n&&n.hide){n.hide();
c(document).unbind("keydown",k)
}};
function j(u){var v=u.header||u.defaultHeader;
if(typeof v==="object"){v=v.value
}return v
}function s(C){var B,v=["ap-aui-dialog2"];
var y=C.size!=="fullscreen"&&!C.chrome;
if(y){v.push("ap-aui-dialog2-chromeless")
}var x=C.size;
if(x==="fullscreen"){x="maximum"
}B=c(aui.dialog.dialog2({id:C.id,titleText:j(C),titleId:C.titleId,size:x,extraClasses:v,removeOnHide:true,footerActionContent:true,modal:true}));
if(y){B.find("header, footer").remove()
}else{o.submit.setText(C.submitText);
o.cancel.setText(C.cancelText);
var u;
if(C.size==="fullscreen"){B.addClass("ap-header-controls");
var w=r.create(C);
var A=B.find("header");
A.addClass("aui-group").empty().append(w.$el);
u=A.find(".header-control-panel");
o.submit.$el.addClass("aui-icon aui-icon-small aui-iconfont-success");
o.cancel.$el.addClass("aui-icon aui-icon-small aui-iconfont-close-dialog")
}else{u=B.find(".aui-dialog2-footer-actions");
u.empty()
}u.append(o.submit.$el,o.cancel.$el)
}B.find(".aui-dialog2-content").append(i);
i.data("ra.dialog.buttons",o);
function z(D){if(D.isEnabled()){D.$el.trigger("ra.dialog.click",D.dispatch)
}}c.each(o,function(E,D){D.$el.click(function(){z(D)
})
});
return B
}function h(v,u){v.append('<div id="embedded-'+u.ns+'" class="ap-dialog-container ap-content" />')
}function m(w,u){if(typeof w==="string"){var v=w.indexOf("%")===w.length-1;
w=parseInt(w,10);
if(v){w=w/100*u
}}return w
}function g(){if(!n||f.length===0){throw Error("Can't close dialog: no dialogs are currently open")
}if(n.isClosing){return
}n.isClosing=true;
if(i){i.trigger("ra.iframe.destroy").removeData("ra.dialog.buttons").unbind();
i=null
}o=null;
n.hide();
var u=f.pop();
if(n!==u){throw Error("The dialog being closed must be the last dialog to be opened.")
}n=f[f.length-1];
if(n){i=n.$el.find(".ap-servlet-placeholder");
o=i.data("ra.dialog.buttons")
}}return{_getActiveDialog:function(){return n
},isCloseOnEscape:function(){return i&&i.data("ra.dialog.closeOnEscape")
},getButton:function(u){var v=i&&i.data("ra.dialog.buttons")||{};
return u?v[u]:v
},createButton:function(v,u){var w=new e.button({type:"secondary",text:v,additionalClasses:"ap-dialog-custom-button"});
n.$el.find(".aui-dialog2-footer-actions").prepend(w.$el);
o[v]=w;
w.$el.click(function(){if(w.isEnabled()){w.$el.trigger("ra.dialog.click",w.dispatch)
}});
return w
},create:function(y,x){var u="ap-"+y.ns;
f.forEach(function(B){if(B.$el.find("#"+u).length>0){throw new Error("Can't create dialog. A dialog is already open with namespace: "+y.ns)
}});
var w={width:"50%",height:"50%",closeOnEscape:true},v=y.id||"ap-dialog-"+(q+=1),A=c.extend({id:v},w,y,{dlg:1}),z;
if(A.width==="100%"&&A.height==="100%"){A.size="maximum"
}if(A.size==="maximum"&&typeof A.chrome==="undefined"){A.chrome=false
}i=c("<div />").addClass("ap-servlet-placeholder ap-container").attr("id",u).bind("ra.dialog.close",g);
o=l();
z=s(A);
z.find(".aui-dialog2-content").append(i);
if(y.size){A.w="100%";
A.h="100%"
}else{A.w=m(A.width,p.width());
A.h=m(A.height,p.height());
a.layer(z).changeSize(A.w,A.h);
z.removeClass("aui-dialog2-medium")
}n=a.dialog2(z);
f.push(n);
n.on("hide",g);
i.data("ra.dialog.closeOnEscape",A.closeOnEscape);
if(A.closeOnEscape){c(document).on("keydown",function(B){k(B)
})
}c.each(o,function(B,C){C.click(function(){C.dispatch(true)
})
});
h(i,A);
if(x!==false){i.append(t._statusHelper.createStatusMessages())
}if(y.src){_AP.create(A)
}z.on("ra.iframe.create","iframe",function(){this.focus()
});
n.show();
return n
},close:g}
})
})(define,require,AJS,AJS.$);
AJS.toInit(function(a){(function(c,b){if(typeof window._AP!=="undefined"){c(["ac/dialog"],function(d){_AP.Dialog=d
})
}})(require,AJS)
});
(function(b,a){b("ac/dialog/dialog-factory",["ac/dialog","host/_util"],function(d,c){return function(o,j,g){if(j.dialogModuleKey){var m=window._AP.dialogModules;
var e=m&&m[o.key];
var h=e&&e[j.dialogModuleKey];
if(h){j=a.extend({},h.options,j)
}}var n,f,l=a.extend({isDialog:1},o.uiParams,{customData:j.customData});
var k=j.chrome;
if(typeof k==="undefined"){k=o.chrome
}var i=d.create({id:o.id,key:o.key,moduleKey:o.moduleKey,ns:o.ns||c.addonToNs(o.key,o.moduleKey),chrome:k,header:j.header,width:j.width,height:j.height,size:j.size,submitText:j.submitText,cancelText:j.cancelText,closeOnEscape:j.closeOnEscape},false);
f=i.$el.find(".ap-dialog-container");
if(o.url){throw new Error("Cannot retrieve dialog content by URL")
}n=window._AP.contentResolver.resolveByParameters({addonKey:o.key,moduleKey:o.moduleKey,productContext:g,uiParams:l});
n.done(function(r){var p=a(r);
p.find(".ap-content").addClass("ap-dialog-container");
var q=a(document.getElementById(p.attr("id")));
if(q.length!==0){q.empty();
p.each(function(s){q.append(p[s])
})
}else{f.replaceWith(p)
}}).fail(function(t,p,q){var s=a("<p class='title' />").text("Unable to load add-on content. Please try again later.");
var r=p+(q?": "+q.toString():"");
f.html("<div class='aui-message error ap-aui-message'></div>");
f.find(".error").text(r);
f.find(".error").prepend(s);
AJS.log(r)
});
return d
}
})
})(define,AJS.$);
(function(a,b){a(["connect-host","ac/dialog/dialog-factory","ac/dialog"],function(c,e,d){function f(g,h){var i=d._getActiveDialog().xdm;
h.click(function(j,k){if(i.isActive()&&i.buttonListenerBound){i.dialogMessage(g,k)
}else{k(true)
}})
}c.extend(function(){return{stubs:["dialogMessage"],init:function(i,h){if(i.dlg==="1"){h.uiParams.isDialog=true
}var g=d._getActiveDialog();
if(!g){return
}g.xdm=h;
b.each(d.getButton(),function(j,k){f(j,k)
})
},internals:{dialogListenerBound:function(){this.buttonListenerBound=true
},setDialogButtonEnabled:function(h,g){d.getButton(h).setEnabled(g)
},setDialogButtonHidden:function(g,h){d.getButton(g).setHidden(h)
},isDialogButtonEnabled:function(g,i){var h=d.getButton(g);
i(h?h.isEnabled():void 0)
},isDialogButtonHidden:function(g,i){var h=d.getButton(g);
i(h?h.isHidden():void 0)
},createButton:function(h,g){var i=d.createButton(h,g);
f(h,i)
},isCloseOnEscape:function(g){g(d.isCloseOnEscape())
},createDialog:function(h){var g={key:this.addonKey};
if(h.key){g.moduleKey=h.key
}else{if(h.url){throw new Error("Cannot open dialog by URL, please use module key")
}}h.dialogModuleKey=h.key;
e(g,h,this.productContext)
},closeDialog:function(){this.events.emit("ra.iframe.destroy");
d.close()
}}}
})
})
})(require,AJS.$);
AJS.toInit(function(a){(function(c,b){c(["ac/dialog","ac/dialog/dialog-factory","connect-host","host/_util"],function(g,h,f,e){var i="click",d=".ap-dialog",j=function(n,o){var m=f.webItemHelper.getOptionsForWebItem(o.bindTo),l=f.webItemHelper.getWebItemModuleKey(o.bindTo),k=f.webItemHelper.getWebItemPluginKey(o.bindTo),p=f.webItemHelper.getWebItemTargetKey(o.bindTo);
a.extend(o,m,{dialogModuleKey:p});
if(!o.ns){o.ns=e.addonToNs(k,l)
}if(!o.container){o.container=o.ns
}if(typeof o.chrome==="string"){o.chrome=(o.chrome.toLowerCase()==="false")?false:true
}if(o.chrome===undefined&&o.size!=="maximum"){o.chrome=true
}if(o.header){o.defaultHeader=o.header
}h({key:k,moduleKey:l},o,o.productContext)
};
f.webItemHelper.eventHandler(i,d,j)
})
})(require,AJS)
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-inline-dialog.js' */
(function(b,a){b("ac/inline-dialog",["connect-host"],function(d){function f(i){return i.closest(".contents").data("inlineDialog")
}function c(i){f(i).show()
}function e(j,k,i){j.closest(".contents").css({width:k,height:i});
h(j)
}function h(i){f(i).refresh()
}function g(i){f(i).hide()
}d.extend(function(){return{init:function(j,i){if(i.uiParams.isInlineDialog){a(i.iframe).closest(".ap-container").on("resized",function(l,k){e(a(i.iframe),k.width,k.height)
})
}},internals:{hideInlineDialog:function(){g(a(this.iframe))
}}}
})
})
})(define,AJS.$);
(function(c,a,b){c("ac/inline-dialog/simple",["connect-host"],function(d){return function(k,h){var i;
if(!h.bindTo||!h.bindTo.jquery){return
}var g=h.bindTo.hasClass("ap-inline-dialog")?h.bindTo:h.bindTo.closest(".ap-inline-dialog");
var j=g.attr("id");
if(!j){return
}var e=function(p,n,m){n=b(n);
p.data("inlineDialog",i);
var o=d.webItemHelper.getWebItemPluginKey(n),l=d.webItemHelper.getWebItemModuleKey(n),q=window._AP.contentResolver.resolveByParameters({addonKey:o,moduleKey:l,isInlineDialog:true,productContext:h.productContext,uiParams:{isInlineDialog:true}});
q.done(function(r){p.empty().append(r);
if(h.width||h.height){p.css({width:h.width,height:h.height})
}}).fail(function(v,r,s){var u=b("<p class='title' />").text("Unable to load add-on content. Please try again later.");
p.html("<div class='aui-message error ap-aui-message'></div>");
p.find(".error").append(u);
var t=r+(s?": "+s.toString():"");
p.find(".error").text(t);
a.log(t)
}).always(function(){m()
})
};
var f="ap-inline-dialog-content-"+j;
i=b(document.getElementById("inline-dialog-"+f));
if(i.length!==0){i.remove()
}i=a.InlineDialog(h.bindTo,f,e,h);
return{id:i.attr("id"),show:function(){i.show()
},hide:function(){i.hide()
}}
}
})
})(define,AJS,AJS.$);
AJS.toInit(function(a){(function(c,b){c(["ac/inline-dialog/simple","connect-host"],function(d,h){var e=".ap-inline-dialog";
var f="click mouseover mouseout",g=function(j,k,l){var i=h.webItemHelper.getOptionsForWebItem(k.bindTo);
a.extend(k,i);
var m=k.onHover===true;
if(!m&&l!=="click"){return
}if(m&&k.bindTo.hasClass("active")){return
}d(j,k).show()
};
h.webItemHelper.eventHandler(f,e,g)
})
})(require,AJS)
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions', location = '/js/core/connect-host-navigator.js' */
(function(a){a("ac/navigator-browser",[],function(){var c=function(){location.reload()
};
var b=function(d){document.location=d
};
return{reloadBrowserPage:c,goToUrl:b}
})
})(define);
(function(b,a){b("ac/navigator",["connect-host","ac/navigator-browser","_uritemplate"],function(m,f,d){var j=undefined;
var l=function(){throw new Error("context api not yet implemented for this product")
};
var e=function(o,n){if(!j){throw new Error("navigation api not yet implemented for this product")
}if(Object.getOwnPropertyNames(j).length===0){throw new Error("No routes defined")
}if(o in j){n=n||{};
if(typeof j[o]==="function"){j[o](n,f.goToUrl)
}else{if(typeof j[o]==="string"){f.goToUrl(h(j[o],n))
}}}else{throw new Error("The URL target "+o+" is not available. Valid targets are: "+Object.keys(j).toString())
}};
var c=function(){f.reloadBrowserPage()
};
var h=function(o,n){if(o.indexOf("/")!==0){o="/"+o
}return a.contextPath()+d.parse(o).expand(n)
};
var g=function(n){j=n
};
var k=function(n){if(typeof n==="function"){l=n
}else{throw new Error("invalid context function specified")
}};
var i=function(n){if(typeof n!=="function"){throw new Error("invalid callback function specified")
}n(l())
};
return{go:e,reload:c,setRoutes:g,getContext:i,setContextFunction:k}
})
})(define,AJS);
(function(m){var a=(function(){function n(o){this.options=o
}n.prototype.toString=function(){if(JSON&&JSON.stringify){return JSON.stringify(this.options)
}else{return this.options
}};
return n
}());
var i=(function(){function t(w){return Object.prototype.toString.apply(w)==="[object Array]"
}function q(w){return Object.prototype.toString.apply(w)==="[object String]"
}function v(w){return Object.prototype.toString.apply(w)==="[object Number]"
}function s(w){return Object.prototype.toString.apply(w)==="[object Boolean]"
}function r(x,z){var w="",A=true,y;
for(y=0;
y<x.length;
y+=1){if(A){A=false
}else{w+=z
}w+=x[y]
}return w
}function o(x,z){var w=[],y=0;
for(;
y<x.length;
y+=1){w.push(z(x[y]))
}return w
}function p(y,x){var w=[],z=0;
for(;
z<y.length;
z+=1){if(x(y[z])){w.push(y[z])
}}return w
}function n(x){if(typeof x!=="object"||x===null){return x
}Object.freeze(x);
var y,w;
for(w in x){if(x.hasOwnProperty(w)){y=x[w];
if(typeof y==="object"){u(y)
}}}return x
}function u(w){if(typeof Object.freeze==="function"){return n(w)
}return w
}return{isArray:t,isString:q,isNumber:v,isBoolean:s,join:r,map:o,filter:p,deepFreeze:u}
}());
var j=(function(){function p(q){return(q>="a"&&q<="z")||((q>="A"&&q<="Z"))
}function n(q){return q>="0"&&q<="9"
}function o(q){return n(q)||(q>="a"&&q<="f")||(q>="A"&&q<="F")
}return{isAlpha:p,isDigit:n,isHexDigit:o}
}());
var f=(function(){var n={encode:function(t){return unescape(encodeURIComponent(t))
},numBytes:function(t){if(t<=127){return 1
}else{if(194<=t&&t<=223){return 2
}else{if(224<=t&&t<=239){return 3
}else{if(240<=t&&t<=244){return 4
}}}}return 0
},isValidFollowingCharCode:function(t){return 128<=t&&t<=191
}};
function s(x){var t="",w=n.encode(x),u,v;
for(v=0;
v<w.length;
v+=1){u=w.charCodeAt(v);
t+="%"+(u<16?"0":"")+u.toString(16).toUpperCase()
}return t
}function r(t,u){return t.charAt(u)==="%"&&j.isHexDigit(t.charAt(u+1))&&j.isHexDigit(t.charAt(u+2))
}function q(t,u){return parseInt(t.substr(u,2),16)
}function p(v){if(!r(v,0)){return false
}var w=q(v,1);
var u=n.numBytes(w);
if(u===0){return false
}for(var t=1;
t<u;
t+=1){if(!r(v,3*t)||!n.isValidFollowingCharCode(q(v,3*t+1))){return false
}}return true
}function o(y,x){var w=y.charAt(x);
if(!r(y,x)){return w
}var v=q(y,x+1);
var u=n.numBytes(v);
if(u===0){return w
}for(var t=1;
t<u;
t+=1){if(!r(y,x+3*t)||!n.isValidFollowingCharCode(q(y,x+3*t+1))){return w
}}return y.substr(x,3*u)
}return{encodeCharacter:s,isPctEncoded:p,pctCharAt:o}
}());
var b=(function(){function n(q){return j.isAlpha(q)||j.isDigit(q)||q==="_"||f.isPctEncoded(q)
}function o(q){return j.isAlpha(q)||j.isDigit(q)||q==="-"||q==="."||q==="_"||q==="~"
}function p(q){return q===":"||q==="/"||q==="?"||q==="#"||q==="["||q==="]"||q==="@"||q==="!"||q==="$"||q==="&"||q==="("||q===")"||q==="*"||q==="+"||q===","||q===";"||q==="="||q==="'"
}return{isVarchar:n,isUnreserved:o,isReserved:p}
}());
var d=(function(){function o(u,v){var r="",s,t="";
if(typeof u==="number"||typeof u==="boolean"){u=u.toString()
}for(s=0;
s<u.length;
s+=t.length){t=u.charAt(s);
r+=b.isUnreserved(t)||(v&&b.isReserved(t))?t:f.encodeCharacter(t)
}return r
}function n(r){return o(r,true)
}function q(t,r){var s=f.pctCharAt(t,r);
if(s.length>1){return s
}else{return b.isReserved(s)||b.isUnreserved(s)?s:f.encodeCharacter(s)
}}function p(u){var r="",s,t="";
for(s=0;
s<u.length;
s+=t.length){t=f.pctCharAt(u,s);
if(t.length>1){r+=t
}else{r+=b.isReserved(t)||b.isUnreserved(t)?t:f.encodeCharacter(t)
}}return r
}return{encode:o,encodePassReserved:n,encodeLiteral:p,encodeLiteralCharacter:q}
}());
var h=(function(){var n={};
function o(p){n[p]={symbol:p,separator:(p==="?")?"&":(p===""||p==="+"||p==="#")?",":p,named:p===";"||p==="&"||p==="?",ifEmpty:(p==="&"||p==="?")?"=":"",first:(p==="+")?"":p,encode:(p==="+"||p==="#")?d.encodePassReserved:d.encode,toString:function(){return this.symbol
}}
}o("");
o("+");
o("#");
o(".");
o("/");
o(";");
o("?");
o("&");
return{valueOf:function(p){if(n[p]){return n[p]
}if("=,!@|".indexOf(p)>=0){return null
}return n[""]
}}
}());
function l(o){var n;
if(o===null||o===undefined){return false
}if(i.isArray(o)){return o.length>0
}if(typeof o==="string"||typeof o==="number"||typeof o==="boolean"){return true
}for(n in o){if(o.hasOwnProperty(n)&&l(o[n])){return true
}}return false
}var c=(function(){function n(o){this.literal=d.encodeLiteral(o)
}n.prototype.expand=function(){return this.literal
};
n.prototype.toString=n.prototype.expand;
return n
}());
var g=(function(){function o(w){var s,x=[],y=null,t=null,q=null,v,u="";
function r(){var z=w.substring(t,v);
if(z.length===0){throw new a({expressionText:w,message:"a varname must be specified",position:v})
}y={varname:z,exploded:false,maxLength:null};
t=null
}function p(){if(q===v){throw new a({expressionText:w,message:"after a ':' you have to specify the length",position:v})
}y.maxLength=parseInt(w.substring(q,v),10);
q=null
}s=(function(z){var A=h.valueOf(z);
if(A===null){throw new a({expressionText:w,message:"illegal use of reserved operator",position:v,operator:z})
}return A
}(w.charAt(0)));
v=s.symbol.length;
t=v;
for(;
v<w.length;
v+=u.length){u=f.pctCharAt(w,v);
if(t!==null){if(u==="."){if(t===v){throw new a({expressionText:w,message:"a varname MUST NOT start with a dot",position:v})
}continue
}if(b.isVarchar(u)){continue
}r()
}if(q!==null){if(v===q&&u==="0"){throw new a({expressionText:w,message:"A :prefix must not start with digit 0",position:v})
}if(j.isDigit(u)){if(v-q>=4){throw new a({expressionText:w,message:"A :prefix must have max 4 digits",position:v})
}continue
}p()
}if(u===":"){if(y.maxLength!==null){throw new a({expressionText:w,message:"only one :maxLength is allowed per varspec",position:v})
}if(y.exploded){throw new a({expressionText:w,message:"an exploeded varspec MUST NOT be varspeced",position:v})
}q=v+1;
continue
}if(u==="*"){if(y===null){throw new a({expressionText:w,message:"exploded without varspec",position:v})
}if(y.exploded){throw new a({expressionText:w,message:"exploded twice",position:v})
}if(y.maxLength){throw new a({expressionText:w,message:"an explode (*) MUST NOT follow to a prefix",position:v})
}y.exploded=true;
continue
}if(u===","){x.push(y);
y=null;
t=v+1;
continue
}throw new a({expressionText:w,message:"illegal character",character:u,position:v})
}if(t!==null){r()
}if(q!==null){p()
}x.push(y);
return new e(w,s,x)
}function n(v){var q,t,u=[],s=null,r=0;
for(q=0;
q<v.length;
q+=1){t=v.charAt(q);
if(r!==null){if(t==="}"){throw new a({templateText:v,message:"unopened brace closed",position:q})
}if(t==="{"){if(r<q){u.push(new c(v.substring(r,q)))
}r=null;
s=q
}continue
}if(s!==null){if(t==="{"){throw new a({templateText:v,message:"brace already opened",position:q})
}if(t==="}"){if(s+1===q){throw new a({templateText:v,message:"empty braces",position:s})
}try{u.push(o(v.substring(s+1,q)))
}catch(p){if(p.prototype===a.prototype){throw new a({templateText:v,message:p.options.message,position:s+p.options.position,details:p.options})
}throw p
}s=null;
r=q+1
}continue
}throw new Error("reached unreachable code")
}if(s!==null){throw new a({templateText:v,message:"unclosed brace",position:s})
}if(r<v.length){u.push(new c(v.substr(r)))
}return new k(v,u)
}return n
}());
var e=(function(){function q(w){return(JSON&&JSON.stringify)?JSON.stringify(w):w
}function t(x){if(!l(x)){return true
}if(i.isString(x)){return x===""
}if(i.isNumber(x)||i.isBoolean(x)){return false
}if(i.isArray(x)){return x.length===0
}for(var w in x){if(x.hasOwnProperty(w)){return false
}}return true
}function o(y){var w=[],x;
for(x in y){if(y.hasOwnProperty(x)){w.push({name:x,value:y[x]})
}}return w
}function r(y,w,x){this.templateText=y;
this.operator=w;
this.varspecs=x
}r.prototype.toString=function(){return this.templateText
};
function s(x,y,z){var w="";
z=z.toString();
if(y.named){w+=d.encodeLiteral(x.varname);
if(z===""){w+=y.ifEmpty;
return w
}w+="="
}if(x.maxLength!==null){z=z.substr(0,x.maxLength)
}w+=y.encode(z);
return w
}function n(w){return l(w.value)
}function v(y,z,A){var x=[],w="";
if(z.named){w+=d.encodeLiteral(y.varname);
if(t(A)){w+=z.ifEmpty;
return w
}w+="="
}if(i.isArray(A)){x=A;
x=i.filter(x,l);
x=i.map(x,z.encode);
w+=i.join(x,",")
}else{x=o(A);
x=i.filter(x,n);
x=i.map(x,function(B){return z.encode(B.name)+","+z.encode(B.value)
});
w+=i.join(x,",")
}return w
}function p(y,z,A){var x=i.isArray(A),w=[];
if(x){w=A;
w=i.filter(w,l);
w=i.map(w,function(C){var B=d.encodeLiteral(y.varname);
if(t(C)){B+=z.ifEmpty
}else{B+="="+z.encode(C)
}return B
})
}else{w=o(A);
w=i.filter(w,n);
w=i.map(w,function(B){var C=d.encodeLiteral(B.name);
if(t(B.value)){C+=z.ifEmpty
}else{C+="="+z.encode(B.value)
}return C
})
}return i.join(w,z.separator)
}function u(y,z){var x=[],w="";
if(i.isArray(z)){x=z;
x=i.filter(x,l);
x=i.map(x,y.encode);
w+=i.join(x,y.separator)
}else{x=o(z);
x=i.filter(x,function(A){return l(A.value)
});
x=i.map(x,function(A){return y.encode(A.name)+"="+y.encode(A.value)
});
w+=i.join(x,y.separator)
}return w
}r.prototype.expand=function(D){var z=[],A,x,C,w,B=false,y=this.operator;
for(A=0;
A<this.varspecs.length;
A+=1){x=this.varspecs[A];
C=D[x.varname];
if(C===null||C===undefined){continue
}if(x.exploded){B=true
}w=i.isArray(C);
if(typeof C==="string"||typeof C==="number"||typeof C==="boolean"){z.push(s(x,y,C))
}else{if(x.maxLength&&l(C)){throw new Error("Prefix modifiers are not applicable to variables that have composite values. You tried to expand "+this+" with "+q(C))
}else{if(!x.exploded){if(y.named||!t(C)){z.push(v(x,y,C))
}}else{if(l(C)){if(y.named){z.push(p(x,y,C))
}else{z.push(u(y,C))
}}}}}}if(z.length===0){return""
}else{return y.first+i.join(z,y.separator)
}};
return r
}());
var k=(function(){function n(p,o){this.templateText=p;
this.expressions=o;
i.deepFreeze(this)
}n.prototype.toString=function(){return this.templateText
};
n.prototype.expand=function(q){var p,o="";
for(p=0;
p<this.expressions.length;
p+=1){o+=this.expressions[p].expand(q)
}return o
};
n.parse=g;
n.UriTemplateError=a;
return n
}());
m(k)
}(function(a){if(typeof define==="function"){define("_uritemplate",[],function(){return a
})
}else{if(typeof window!=="undefined"){window.UriTemplate=a
}else{global.UriTemplate=a
}}}));
(function(a){a(["connect-host","ac/navigator"],function(c,b){c.extend(function(){return{internals:{go:function(e,d){b.go(e,d)
},reload:function(){b.reload()
},getContext:function(d){b.getContext(d)
}},stubs:["go","reload","getContext"]}
})
})
}(require));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-user', location = '/js/iframe/host/user.js' */
(function(a,c){var b;
c(function(e){return{init:function d(f){b=f
},internals:{getUser:function(){var f=AJS.Meta,g=f?f.get("remote-user-fullname"):null;
if(!g){g=a("a#header-details-user-fullname, .user.ajs-menu-title, a#user").text()
}if(!g){g=a("a#user-menu-link").attr("title")
}return{fullName:g,id:b.uid,key:b.ukey}
},getTimeZone:function(){return b.timeZone
}}}
})
})(AJS.$,_AP.extend);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-content-property-api', location = 'js/confluence/contentproperty/content-property.js' */
(function(a,b){b("ac/confluence/content-property",["confluence/root","ajs"],function(i,d){function f(k){var l=i.getContentId();
var j=d.contextPath();
return j+"/rest/api/content/"+l+"/property/"+k
}function g(j){d.log(j);
d.flag({type:"error",title:j,body:"<p>There was a problem communicating with the server. Please refresh the page and try again</p>"})
}function e(j,l){var k=f(j);
a.getJSON(k).done(l).fail(function(m){if(m.status===404){l(null)
}else{g("Unable to check item state: "+j)
}})
}function h(l,m){var k=l.key;
var j={url:f(k),contentType:"application/json",data:JSON.stringify(l)};
if(l.version&&l.version.number&&l.version.number>1){j.type="PUT"
}else{j.type="POST"
}a.ajax(j).done(function(n){d.log("contentProperty "+k+" "+j.type+" successful");
if(typeof m==="function"){m(n)
}}).fail(function(p,n,o){g("Unable to "+j.type+" item: "+k);
if(typeof m==="function"){m({error:o})
}})
}function c(k,j){d.trigger("contentProperty.update",{contentProperty:k,context:j})
}return{getContentProperty:function(j,k){e(j,k)
},syncPropertyFromServer:function(j,l){var k=this;
e(j,function(m){c(m,k);
l(m)
})
},setContentProperty:function(k,l){var j=this;
c(k,j);
h(k,l)
}}
})
})(AJS.$,define);
(function(a){a(["connect-host","ac/confluence/content-property"],function(b,c){b.extend(function(){return{internals:{getContentProperty:c.getContentProperty,setContentProperty:c.setContentProperty,syncPropertyFromServer:c.syncPropertyFromServer}}
})
})
}(require));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-navigator-routes', location = 'js/confluence/navigator/routes.js' */
(function(a,b){b("ac/confluence/navigator/routes",["ac/navigator"],function(c){return function(){var h=["page","blogpost","attachment","comment"];
var e=AJS.contextPath();
var j={dashboard:"",addonmodule:function(o,q){if(g(o,"addonKey")&&g(o,"moduleKey")){var p=k([o.addonKey,o.moduleKey]);
var n=e+"/plugins/servlet/ac/"+p;
if(o.context){var m=i(o.context);
n=(m!="")?n+"?"+m:n
}q.apply(this,[n])
}},contentedit:function(m,o){if(g(m,"contentId")){var n=m.contentId;
l(m.contentId,function(p){var q=p.type;
if(f(q)){o(e+"/display/"+p.space.key+"/customcontent/edit/"+p.id)
}else{if(d(q)){o(e+"/pages/edit"+q+".action?pageId="+p.id)
}else{AJS.error('Cannot navigate to "contentedit" target for content (ID='+p.id+"). Content type <"+q+"> is not supported.")
}}})
}},spacetools:"/spaces/viewspacesummary.action?key={spaceKey}",spaceview:"/spaces/{spaceKey}",userprofile:"/display/~{username}",contentview:function(m,n){if(g(m,"contentId")){l(m.contentId,function(p){var o=e+p._links.webui;
if(o){n(o)
}})
}},contentlist:function(m,p){var n=encodeURIComponent(m.spaceKey);
var o=m.contentType;
if(o==="page"){p(e+"/collector/pages.action?key="+n)
}else{if(o==="blogpost"){p(e+"/pages/viewrecentblogposts.action?key="+n)
}else{if(f(o)){p(e+"/display/"+n+"/customcontent/list/"+encodeURIComponent(o))
}else{AJS.error('Cannot navigate to "contentlist" target for content type <'+o+">")
}}}}};
c.setRoutes(j);
function k(m){return m.map(encodeURIComponent).join("/")
}function i(m){return Object.keys(m).map(function(n){return["ac."+n,m[n]].map(encodeURIComponent).join("=")
}).join("&")
}function l(n,m){a.ajax({url:e+"/rest/api/content/"+n,dataType:"json"}).success(m).fail(function(){AJS.error("Content not found (ID="+n+")")
})
}function g(m,n){if(!m||!m[n]){throw new Error("Missing "+n+" in navigator context");
return false
}return true
}function f(m){return/^ac:/.test(m)
}function d(m){return h.indexOf(m)!==-1
}}
})
})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-navigator-routes', location = 'js/confluence/navigator/context.js' */
(function(b,a){a(["ac/navigator","confluence/api/navigator-context","ac/confluence/navigator/routes"],function(d,e,c){d.setContextFunction(e.getCurrent);
c()
})
})(AJS.$,require);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'templates/recently.soy' */
// This file was automatically generated from recently.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RY.Templates.
 */

if (typeof RY == 'undefined') { var RY = {}; }
if (typeof RY.Templates == 'undefined') { RY.Templates = {}; }


RY.Templates.body = function(opt_data, opt_ignored) {
  return '<div id="recently-viewed" class="aui-group"><div class="aui-item"><div class="top"><div class="filter"><form class="aui"><input class="filter-input text" type="text" placeholder="' + soy.$$escapeHtmlAttribute("Filter") + '"></form></div></div><div class="pages"></div></div></div>';
};
if (goog.DEBUG) {
  RY.Templates.body.soyTemplateName = 'RY.Templates.body';
}


RY.Templates.pageCollection = function(opt_data, opt_ignored) {
  return '<div class="groups"></div><div class="empty"></div>';
};
if (goog.DEBUG) {
  RY.Templates.pageCollection.soyTemplateName = 'RY.Templates.pageCollection';
}


RY.Templates.pageGroup = function(opt_data, opt_ignored) {
  return '<h3>' + soy.$$escapeHtml(opt_data.title) + '</h3><ul/>';
};
if (goog.DEBUG) {
  RY.Templates.pageGroup.soyTemplateName = 'RY.Templates.pageGroup';
}


RY.Templates.pageItem = function(opt_data, opt_ignored) {
  return '<div class="page-icon"><a href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + ' class="icon icon-' + soy.$$escapeHtmlAttribute(opt_data.type) + '"></a></div><div class="page-title"><a class="ellipsis" href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + '>' + soy.$$escapeHtml(opt_data.title) + ' - ' + soy.$$escapeHtml(opt_data.space) + '</a></div>';
};
if (goog.DEBUG) {
  RY.Templates.pageItem.soyTemplateName = 'RY.Templates.pageItem';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/util.js' */
var RY=RY||{};(function(){var b=new Date();var c=new Date(b).getTime();var a=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime();var d=new Date(b.getFullYear(),b.getMonth(),b.getDate()-1).getTime();RY.util=RY.Util={analytics:{trackDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-dialog-open"})},trackPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-page-open"})}},quote:function(e){return(e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},diffInDays:function(g,f){var e=1000*60*60*24;return Math.floor((g-f)/e)},daysSince:function(e){if(e>=a){return 0}else{if(e>=d){return 1}else{return RY.util.diffInDays(c,e)}}},wait:function(h,j,f){var i,k,e;var g=function(){k=setTimeout(function(){h.apply(f,e)},j)};return function(){e=arguments;var l=new Date();if(i&&l-i<j){clearTimeout(k)}g();i=l}}}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-storage.js' */
var RY=RY||{};RY.RecentPageStorage=function(h){var f="com.atlassian.confluence.plugins.recently.viewed.pages.v1";var d=100;var c={};var b=function(){var i=function(k,l){if(k==="lastSeen"&&_.isString(l)){if(AJS.$.browser.msie){l=l.replace(/\-/g,"/");l=l.replace(/T.*$/,"")}return new Date(l).getTime()}else{return l}};try{c=JSON.parse(h.getItem(f),i)||{}}catch(j){c={}}return c};var g=function(){var i=_.values(c);var k=i.length-d;if(k>0){var j=_.sortBy(i,function(l){return l.lastSeen});_.times(k,function(){var l=j.shift();delete c[l.id]})}};var e=function(){g();try{h.setItem(f,JSON.stringify(c))}catch(i){}};this.addCurrentPage=function(i){if(!(i.id&&i.title)){return}b();a(i);e()};var a=function(i){var j=c[i.id];if(!j){c[i.id]=j={}}j=_.extend(j,i);j.lastSeen=new Date().getTime();j.count=j.count+1||1};this.getPages=function(){return _.values(b())}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/filter.js' */
var RY=RY||{};RY.FilterView=Backbone.View.extend({className:"filter",events:{"input .filter-input":"onInput","keyup .filter-input":"onInput","keydown .filter-input":"onKeydown"},initialize:function(){_.bindAll(this,"render","onInput","onKeydown","search");this.navigationEvents=this.options.navigationEvents;this.onInput=RY.util.wait(this.onInput,100,this)},render:function(){this.$input=this.$(".filter-input");return this},onInput:function(a){if(a&&_.contains([37,38,39,40],a.which)){return}this.search()},onKeydown:function(a){switch(a.which){case 13:this.navigationEvents.trigger("select");a.preventDefault();a.stopPropagation();break;case 38:this.navigationEvents.trigger("previous");a.preventDefault();break;case 40:this.navigationEvents.trigger("next");a.preventDefault();break}},search:function(){var a=this.$input.val();this.collection.search(a)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-model.js' */
var RY=RY||{};(function(){var a;if(typeof ConfluenceMobile!="undefined"){a=ConfluenceMobile.AppData.get("confluence-context-path")}else{a=AJS.contextPath()}RY.Page=Backbone.Model.extend({href:function(){return a+this.get("url")},daysSinceLastSeen:function(){return RY.util.daysSince(this.get("lastSeen"))}});RY.PageCollection=Backbone.Collection.extend({model:RY.Page,url:a+"/rest/recentlyviewed/1.0/recent",search:function(c){var b;if(this._queryLength(c)===0){b=this.models}else{var d=c.match(/[^\s-]+/g);b=this.filter(function(g){var h=g.get("title");var f=g.get("space");var e=(h+f).toLowerCase();return _.all(d,function(i){return e.indexOf(i.toLowerCase())!==-1})})}this.trigger("filter",b,c);return b},_queryLength:function(b){if(!String.prototype.trim){return AJS.$.trim(b).length}return b.trim().length},comparator:function(b){return -(b.get("lastSeen"))}})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page.js' */
var RY=RY||{};RY.PageView=Backbone.View.extend({tagName:"li",className:"ry-page",template:RY.Templates.pageItem,initialize:function(){_.bindAll(this,"hide","show","render")},hide:function(){this.$el.hide().removeClass("shown")},show:function(){this.$el.show().addClass("shown")},render:function(){var a=this.model.toJSON();a.href=this.model.href();this.$el.html(this.template(a));return this}});RY.PageGroupView=Backbone.View.extend({className:"group",template:RY.Templates.pageGroup,initialize:function(){_.bindAll(this,"hide","hideAll","show","showBorder","showPages","add","render");this.title=this.options.title;this.modelViews={}},hide:function(){this.$el.hide()},hideAll:function(){this.$el.removeClass("border").hide();_.invoke(_.values(this.modelViews),"hide")},show:function(){this.$el.show()},showBorder:function(){this.$el.addClass("border")},showPages:function(a){var c=this;var b=false;_.each(a,function(e){var d=c.modelViews[e.cid];if(d){b=true;d.show()}});if(b){this.show()}return b},add:function(b){var a=new RY.PageView({model:b});this.modelViews[b.cid]=a;this.$list.append(a.render().el)},render:function(){this.$el.html(this.template({title:this.title}));this.$list=this.$("ul");return this}});RY.PageNavigator=function(a,e,c){var g=null;function f(){return a.find("li.shown")}function b(i){pageItems=f();var h=pageItems.index(pageItems.filter(".highlight"));if(g){g.removeClass("highlight")}i+=h;if(i<0){i=pageItems.length-1}if(i>=pageItems.length){i=0}g=pageItems.eq(i);g.addClass("highlight")}function d(){if(!g.length){return}var k=e;var l=k.children();var j=k.height();var i=g.outerHeight(true);var h=g.position().top;if(h<0){if(f().index(g)===0){k.scrollTop(0);return}k.scrollTop(g.offset().top-l.offset().top)}else{if(h>j){k.scrollTop(g.offset().top-l.offset().top-j+i)}}}c.on("select",function(){if(g&&g.is(":visible")){RY.util.analytics.trackPageOpen();var h=g.find(".page-title a").attr("href");window.location=h}},this);c.on("previous",function(){b(-1);d()},this);c.on("next",function(){b(1);d()},this)};RY.PageCollectionView=Backbone.View.extend({template:RY.Templates.pageCollection,events:{"click .page-title a":RY.util.analytics.trackPageOpen},initialize:function(){_.bindAll(this,"checkEmpty","filter","_groupForPage","addOne","showEmptyMessage","clearEmptyMessage","addAll","render");this.modelViews={};this.collection.on("reset",this.addAll,this);this.collection.on("add",this.addOne,this);this.collection.on("filter",this.filter,this)},checkEmpty:function(a,e){var f=this.collection.isEmpty();var b=a.length===0;if(f||b){var c;if(f){c="You haven\'t visited any pages yet. To get started, take a look under \u003cb\u003eMY SPACES\u003c/b\u003e in the sidebar."}else{var d=AJS.contextPath()+"/dosearchsite.action?queryString="+encodeURIComponent(e);c="We didn\'t find any matching pages in your history."+" "+AJS.format("\u003ca href=\"{0}\"\u003eClick here\u003c/a\u003e to search for this term instead.",d)}this.showEmptyMessage(c)}else{this.clearEmptyMessage()}},filter:function(b,d){d=d||"";this.checkEmpty(b,d);var a=[this.$today,this.$yesterday,this.$older];_.invoke(a,"hideAll");var c=[];_.each(a,function(f){var e=f.showPages(b);if(e){c.push(f)}});if(c.length>1){c.pop();_.invoke(c,"showBorder")}},_groupForPage:function(a){var b=a.daysSinceLastSeen();if(b===0){return this.$today}else{if(b===1){return this.$yesterday}else{return this.$older}}},addOne:function(a){var b=this._groupForPage(a);b.add(a)},showEmptyMessage:function(a){this.$(".empty").html(AJS.$("<p>").html(a))},clearEmptyMessage:function(){this.$(".empty").html("")},addAll:function(){this.collection.each(this.addOne)},render:function(){this.$el.html(this.template());this.$today=new RY.PageGroupView({title:"Today"});this.$yesterday=new RY.PageGroupView({title:"Yesterday"});this.$older=new RY.PageGroupView({title:"Older"});var a=this.$(".groups");a.append(this.$today.render().el);a.append(this.$yesterday.render().el);a.append(this.$older.render().el);_.invoke([this.$today,this.$yesterday,this.$older],"hideAll");return this}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/util.js' */
var RYQ=RYQ||{};(function(){RYQ.util={analytics:{trackQuickNavOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-open"})},trackQuickNavPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-page"})},trackQuickNavRecentlyDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-more-recent"})}}}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/quicknav.js' */
var RYQ=RYQ||{};RYQ.QuickNavEntry=Backbone.Model.extend({classNameByType:{blogpost:"content-type-blogpost",page:"content-type-page"},parse:function(a){return{className:this.classNameByType[a.type],type:a.type,name:a.title,href:AJS.contextPath()+a.url,id:a.id,spaceName:a.space,lastSeen:a.lastSeen}}},{escape:function(b){var a=_.map(b,_.clone);_.each(a,function(c){c.name=_.escape(c.name);c.spaceName=_.escape(c.spaceName)});return a}});RYQ.QuickNavEntryCollection=Backbone.Collection.extend({model:RYQ.QuickNavEntry,url:AJS.contextPath()+"/rest/recentlyviewed/1.0/recent?limit=8",search:function(b,d){d=d||[];var a;if(AJS.$.trim(b).length===0){a=this.models}else{var c=b.match(/[^\s-]+/g);a=this.filter(function(f){var g=f.get("name");var e=g.toLowerCase();return d.indexOf(f.get("type"))==-1&&_.all(c,function(h){return e.indexOf(h.toLowerCase())!==-1})})}this.trigger("filter",a);return a},comparator:function(a){return -(a.get("lastSeen"))}});(function(a){RYQ.QuickNav=Backbone.View.extend({initialize:function(){this.moreLink={className:"recently-viewed",href:"#",name:"More recently viewed pages..."};this.$input=a("#quick-search-query");this.makeDropdown();this.addShowHideHandlers();this.getHistory=_.once(this._getHistory);_.bindAll(this,"makeDropdown","addSearchResultBoostingHandler","_getHistory","render","addShowHideHandlers","_getItemsToShow","showQuickResults","onQuickSearch")},makeDropdown:function(){var c=function(d){a("a",d).each(function(){var h=a(this);var e=h.find("span");var g=e.data("properties");var f=g?g.spaceName:null;if(f&&!h.is(".content-type-spacedesc")){h.after(h.clone().attr("class","space-name").html(f));h.parent().addClass("with-space-name")}})};var b=this;this.$dropdown=AJS.inputDrivenDropdown({dropdownPlacement:function(d){b.$input.closest("form").find(".quick-nav-drop-down").append(d)},dropdownPostprocess:function(d){c(d)},ajsDropDownOptions:{className:"recently-viewed-dropdown"}})},addSearchResultBoostingHandler:function(){var b=this;a(window).on("quicksearch.ajax-success",function(g,f){var d=f.url.match("/json/contentnamesearch.action");var c=f.url.match(/rest\/quicknav\/\d\/search/);if(d||c){b.onQuickSearch(g,f)}})},_getHistory:function(){return this.collection.fetch().done(this.addSearchResultBoostingHandler)},render:function(){if(!AJS.Meta.get("remote-user")){return}var b=this.getHistory();b.done(_.bind(function(){if(AJS.dropDown.current==null&&this.collection.length!==0&&this.$input.val().length===0){this.showQuickResults()}},this));var c=this.$input;c.trigger("quick-search-loading-start");b.always(function(){c.trigger("quick-search-loading-stop")})},addShowHideHandlers:function(){var b=this;this.$input.on("focus",function(){b.render()}).on("click",function(c){c.stopPropagation();b.render()}).on("keyup",function(f){var c=f.which===27;var g=f.which===13;var d=a(this).val().length!==0;if(d||c){if(b.$dropdown.dd&&b.$dropdown.dd.$.is(":visible")){b.$dropdown.hide()}}else{if(!g){b.render()}}})},_getItemsToShow:function(){var c=this.collection.toJSON();var b=c.length>0&&c[0].id==AJS.Meta.get("page-id");if(b){c.shift()}return c},showQuickResults:function(){var b=RYQ.QuickNavEntry.escape(this._getItemsToShow());this.$dropdown.show([b,[this.moreLink]],"","");a(".recently-viewed-dropdown").on("click",".recently-viewed",function(c){c.preventDefault();a("#view-user-history-link").click();RYQ.util.analytics.trackQuickNavRecentlyDialogOpen()});a(".recently-viewed-dropdown").on("click",".with-space-name",function(c){RYQ.util.analytics.trackQuickNavPageOpen()});RYQ.util.analytics.trackQuickNavOpen()},onQuickSearch:function(l,f){var o=f.json.query;var c=_.map(this.collection.search(o,["custom"]),function(e){return e.attributes});c=RYQ.QuickNavEntry.escape(c);if(c.length==0){return}var m=f.json.contentNameMatches;var p=-1;for(var g=0;g<m.length;g++){var n=m[g][0].className;if(n=="content-type-blogpost"||n=="content-type-page"){p=g;break}}if(p!=-1){var h=m[p];var b=Math.min(h.length>4?2:6-h.length,c.length);h.unshift.apply(h,_(c).first(b));m[p]=_.uniq(h,function(e){return +e.id});if(h.length>6){var k=6-b;for(var d=k;d>0;d--){h.pop()}}}else{m.unshift(_(c).first(6))}}})}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/main.js' */
var RY=RY||{};AJS.toInit(function(a){a("#view-user-history-link").unbind("click");a("#view-user-history-link").click(function(g){g.preventDefault();var c=new AJS.Dialog({width:600,height:500,id:"recently-viewed-dialog",closeOnOutsideClick:true});var f=a(RY.Templates.body());c.addHeader("Recently viewed pages");c.addPanel("SinglePanel",f);c.addLink("Close",function(e){e.hide()});var d=a("<div>",{"class":"dialog-tip"}).text("Hint: type \"g\" and then \"r\" anywhere to quickly open this menu");c.popup.element.find(".dialog-button-panel").append(d);var i=new RY.PageCollection();var b=new RY.PageCollectionView({collection:i});f.find(".pages").html(b.render().el);c.gotoPanel(0);c.show();var h=a("#recently-viewed-dialog").spin("large");i.fetch({success:function(){h.spinStop();var j=_.extend({},Backbone.Events);var k=new RY.PageNavigator(b.$el,f.parent(),j);var e=new RY.FilterView({collection:i,el:f.find(".filter"),navigationEvents:j}).render();e.search()}});RY.util.analytics.trackDialogOpen()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/quicknav/main.js' */
var RYQ=RYQ||{};AJS.toInit(function(){var b=new RYQ.QuickNavEntryCollection();var a=new RYQ.QuickNav({collection:b})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'js/space-menu.js' */
AJS.toInit(function(a){var c=a(Confluence.Templates.BrowseSpaces.spacesLink());a("#space-directory-link").replaceWith(a(c));var b=function(d){var e=a("#space-menu-link-content");e.html(d.template);if(AJS&&AJS.Confluence&&AJS.Confluence.Analytics&&AJS.Confluence.Analytics.setAnalyticsSource){AJS.Confluence.Analytics.setAnalyticsSource(e.find("a"),"spacemenu")}a("#create-space-header").click(function(){AJS.trigger("analytics",{name:"create-space-from-header"});Confluence.SpaceBlueprint.Dialog.launch();return false})};a("#space-menu-link-content").on("aui-dropdown2-show",function(){AJS.trigger("analytics",{name:"open-space-menu"});if(!a("#space-menu-link-content .aui-dropdown2-section")||!a("#space-menu-link-content .aui-dropdown2-section").length){a.ajax({url:Confluence.getContextPath()+"/rest/ia/1.0/spacesmenu",type:"GET",dataType:"json",cache:false,success:b})}return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'soy/space-menu.soy' */
// This file was automatically generated from space-menu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.BrowseSpaces.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.BrowseSpaces == 'undefined') { Confluence.Templates.BrowseSpaces = {}; }


Confluence.Templates.BrowseSpaces.spacesLink = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.trigger({menu: {id: 'space-menu-link-content'}, id: 'space-menu-link', tagName: 'a', extraClasses: 'aui-nav-link', title: "Spaces", showIcon: true, text: "Spaces"}) + aui.dropdown2.contents({id: 'space-menu-link-content', extraClasses: 'aui-style-default aui-dropdown2-in-header'});
};
if (goog.DEBUG) {
  Confluence.Templates.BrowseSpaces.spacesLink.soyTemplateName = 'Confluence.Templates.BrowseSpaces.spacesLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:space-ia-analytics', location = 'js/space-ia-analytics.js' */
(function(b){var c=AJS.Confluence.Analytics.setAnalyticsSource;function d(){var h=b(".acs-side-bar");var g=h.find("a:not(.external_link a, #acs-configure-link)");c(g,"sidebar");var f=h.find("[data-collapsed-tooltip='"+AJS.I18n.getText("Pages")+"']");c(f,"sidebar-pages");var j=h.find("[data-collapsed-tooltip='"+AJS.I18n.getText("Blog")+"']");c(j,"sidebar-blogs");var e=h.find(".quick-links-section li:not(.external_link) a");c(e,"spaceshortcut");var i=h.find(".ia-secondary-container a:not(.more-children-link)");if(h.find(".ia-secondary-container").data("tree-type")=="pages"){c(i,"contextnavchildmode")}else{if(h.find(".ia-secondary-container").data("tree-type")=="page-tree"){c(i,"contextnavpagetreemode")}else{c(i,"contextnav")}}}function a(e){return function(){AJS.trigger("analytics",{name:"space-ia-nav",data:{linkType:e}})}}AJS.toInit(function(e){e(".acs-side-bar").find(".ia-secondary-container .more-children-link").click(a("context-nav.more-children"));AJS.bind("sidebar.exit-configure-mode",d);AJS.bind("sidebar.flyout-triggered",function(g,f){a("flyout-triggered."+f.flyout)()});AJS.bind("pagetree-children-loaded",d);d()})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:persistable', location = 'js/persistable.js' */
define("confluence/persistable",["skate","confluence/storage-manager"],function(f,g){var d=g("confluence","userSettings");return f("data-persist",{type:f.types.ATTRIBUTE,created:function(b){if(!b.name)throw'Missing attribute "name"';var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,a=d.getItem(a),e=b.getAttribute("data-default-value");if(/value|checked/.test(c))a=a||e||null,null!==a&&("checked"===c&&(a="true"===a),b[c]=a);else throw"Persistable only works with 'value' or 'checked' attributes!";
},events:{change:function(b){var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,e=b.getAttribute("data-default-value");String(b[c])===e?d.removeItem(a):d.setItem(a,b[c],2592E3)}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(f){Confluence.FeatureDiscovery={};var c,e=false,i=3;var d="com.atlassian.confluence.plugins.confluence-feature-discovery-plugin";var g=d+":confluence-feature-discovery-plugin-resources.test-mode";var a=WRM.data.claim(g);function j(k){if(c===undefined){c=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}")}if(k){return c[k]||[]}return c}function b(m,o){var n=j(m);for(var l=0,k=n.length;l<k;l++){if(n[l]==o){return true}}return false}function h(n,p){var l="com.atlassian.webdriver.discovery="+n+":"+p;var k=document.cookie.split(";");for(var m=0;m<k.length;m++){var o=k[m];while(o.charAt(0)==" "){o=o.substring(1)}if(o.indexOf(l)!=-1){return true}}return false}Confluence.FeatureDiscovery.forPlugin=function(m,l){var p=Confluence.storageManager("feature-discovery."+m);l=l||i;function o(r){var q=parseInt(p.getItem(r),10);return isNaN(q)?0:q}function n(r,q){return p.setItem(r,q)}function k(q){return p.removeItem(q)}return{addDiscoveryView:function(q){n(q,o(q)+1)},shouldShow:function(r,q){if(q===true&&a&&!h(m,r)){return false}if(e||b(m,r)){return false}if(o(r)>=l){this.markDiscovered(r);return false}e=true;return true},markDiscovered:function(r,q){if(b(m,r)){return}AJS.safeAjax({url:AJS.contextPath()+"/rest/feature-discovery/1.0/discovered/"+m+"/"+r,type:"POST",data:{},success:function(){j(m).unshift(r);k(r);AJS.trigger("feature-discovered",{pluginKey:m,featureKey:r});if(q&&f.isFunction(q)){q()}}})},listDiscovered:function(){return j(m).slice(0)}}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:util-resources', location = '/js/atlassian/um-utils.js' */
define('user-management/helpers/um-utils', [
    'jquery'
], function (
    $
) {
    var isSiteAdminWRM = WRM.data.claim("com.atlassian.crowd.user-provisioning-plugin:create-users-resources.isSiteAdmin");
    /*
        This is going to have to change when UM moves to a different URL.
        We'll also need to look at usages of this because commumication
        will need to be a bit different, eg. using CORS
     */
    function restBaseUrl() {
        return '/admin';
    }

    return {

        /**
         * @returns A promise which resolves to a boolean.
         */
        isSiteAdmin: function() {
            return $.when(isSiteAdminWRM).promise();
        },
        restBaseUrl: restBaseUrl,
        productName: function() {
            var contextPath = AJS.contextPath();
            var productName = "Unknown";
            if (contextPath === "") {
                productName = "jira";
            } else if (contextPath === "/builds") {
                productName = "bamboo";
            } else if (contextPath === "/wiki") {
                productName = "confluence";
            }
            return productName;
        }
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:adminmenu-analytics', location = 'js/atlassian/analytics-upp.js' */
require([
    'user-management/helpers/um-utils'
], function(
    umUtils
) {
    var triggerAnalytics = function (name, properties) {
        AJS.trigger("analytics", {
            name: "unified.admin." + name,
            data: properties || {}
        });
    };

    var getProductName = umUtils.productName;

    AJS.$(document)
        .on("click", "#admin-billing-link", function () {
            triggerAnalytics("menu.billing.click", {product:getProductName()});
        })
        .on("click", "#admin-discovernewapps-link", function () {
            triggerAnalytics("menu.addApplications.click", {product:getProductName()});
        })
        .on("click", "#admin-management-link", function () {
            triggerAnalytics("menu.userManagement.click", {product:getProductName()});
        })
        // handle admin menu links from JIRA due to required use of web sections
        .on("click", "#admin_billing_section", function () {
            triggerAnalytics("menu.billing.click", {product:getProductName()});
        })
        .on("click", "#admin_discovernewapps_section", function () {
            triggerAnalytics("menu.addApplications.click", {product:getProductName()});
        })
        .on("click", "#user_management_section", function () {
            triggerAnalytics("menu.userManagement.click", {product:getProductName()});
        })
        .on("click", "#pending-invites-flag .icon-close", function () {
            triggerAnalytics("inproduct.invite.pending.message.dismissed")
        })
    ;

});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:common-flag-resources', location = '/js/atlassian/aui-polyfill/flag.js' */
/*
 * Polyfill for aui/flag for use in products that don't provide a version (due to using an ancient AUI version).
 */
(function() {
    try {
        require('aui/flag')
    } catch (e) {
        define('aui/flag', [], displayFlagAsMessage);
    }

    function displayFlagAsMessage(args) {
        var type = (args.type || "").toLowerCase();
        var message = typeof AJS.messages[type] == 'function' ? AJS.messages[type] : AJS.messages.generic;

        // for some reason we display info messages as warnings... keeping that for backward compatibility
        message(".notifications", { body: args.message });
    }
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:common-flag-resources', location = '/js/atlassian/flag.js' */
/**
 * This is a wrapper around AUI Flag which will escape the body text of the Flag unless explicitly told not to.
 *
 * The body will NOT be escaped iff the passed in object has an attribute 'isHtml' and it is set to true.
 */
define('user-management-common/flag', [
    'aui/flag',
    'underscore',
    'jquery'
], function(
    flag,
    _,
    $
) {
    return function(options){
        var createdFlag;
        // If not explicitly HTML, escape the body
        if(!options.isHtml) {
            options.body = _.escape(options.body);
        }

        createdFlag = flag(options);
        $(createdFlag).on('aui-flag-close', function(){
            createdFlag.dispatchEvent(new CustomEvent('um-flag-close', { bubbles: true }));
        });
        return createdFlag;
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:impersonation-resources', location = '/js/atlassian/helpers/cookies.js' */
define('user-management-common/helpers/cookies', [], function() {
    return {
        readCookie: function (name) {
            //document.cookie lists cookies in the format "name1=value1; name2=value2" etc
            //see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
            var nameEQ = name + "=";
            var cookieList = document.cookie.split(';');
            for (var i = 0; i < cookieList.length; i++) {
                var cookie = cookieList[i];

                //Remove any leading spaces (normally 1, but I don't want to make assumptions)
                while (cookie.charAt(0) == ' ') {
                    cookie = cookie.substring(1, cookie.length);
                }

                //Remove the name1= part and return what is left
                if (cookie.indexOf(nameEQ) === 0) {
                    return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
                }
            }
            return null;
        }
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:impersonation-resources', location = '/js/atlassian/impersonation/impersonation.js' */
/**
 * This module displays an informational message with a link to drop the impersonation, if the current user is
 * being impersonated. This script is used in both user management and user provisioning plugins.
 */
define('user-management-common/impersonation/impersonation', [
    'jquery',
    'underscore',
    'user-management-common/flag',
    'user-management-common/helpers/cookies'
], function(
    $,
    _,
    flag,
    cookies
) {
    var showImpersonationMessaging = function(username){
        var message = AJS.format("You\'\'re temporarily logged in as {0}. When you\'\'re done, {1}switch back{2} to your account.",
            _.escape(impersonation.getDisplayName()),
            '<a id="impersonation-dismiss-trigger" href="#">', '</a>');

        var messageFlag = flag({ type: 'info', isHtml: true, body: message });

        $(messageFlag).find("#impersonation-dismiss-trigger").click(function (e) {
            e.preventDefault();
            impersonation.dropImpersonation().then(function () {
                if (username) {
                    window.location = "/admin/users/view?username=" + encodeURIComponent(username);
                } else {
                    window.location = "/admin/users";
                }
            });
        });
    };

    var impersonation = {
        init: function () {
            if (impersonation.isImpersonated()) {
                showImpersonationMessaging(impersonation.getUsername());
            }
        },

        getUsername: function () {
            return cookies.readCookie("um.user.impersonated.username");
        },

        getDisplayName: function () {
            return cookies.readCookie("um.user.impersonated.displayname");
        },

        dropImpersonation: function () {
            return $.ajax({
                type: "POST",
                contentType: 'application/json',
                url: "/admin/rest/um/1/impersonate/release"
            });
        },

        isImpersonated: function () {
            return !!impersonation.getUsername();
        }
    };
    return impersonation;
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:impersonation-resources', location = '/js/atlassian/impersonation-init.js' */
require(['jquery', 'user-management-common/impersonation/impersonation'],
function($, impersonation) {
    $(impersonation.init);
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:create-users-resources', location = '/js/atlassian/create-user/request-invite.js' */
/**
 * This module allows external products to request an invite for a user.
 */
define('user-management-common/create-user/request-invite', [
    'jquery',
    'user-management/helpers/um-utils'
], function(
    $,
    umUtils
) {
    function requestInvite(emailAddresses, extraProductId, extraGroups){
        return $.ajax({
            type: 'PUT',
            url: umUtils.restBaseUrl() + '/rest/um/1/requestaccess',
            contentType: 'application/json',
            data: JSON.stringify({
                emailAddresses: emailAddresses,
                extraProductId: extraProductId,
                extraGroups: extraGroups
            })
        });
    }
    return {
        createUser: requestInvite
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:create-users-resources', location = '/js/atlassian/create-user/pending-invites.js' */
/**
 * This module allows external products to request an invite for a user.
 */
define('user-management-common/create-user/pending-invites', [
    'jquery',
    'user-management-common/flag',
    'user-management-common/create-user/request-invite',
    'user-management/helpers/um-utils'
], function(
    $,
    flag,
    requestInvite,
    umUtils
) {
    var pendingInvites = {};
    pendingInvites.hasCompleted = false;
    var pendingInvitesFlag;
    var INVITES_FLAG_CLOSED_KEY = "uppPendingInvitesFlagClosed";
    var LAST_CHECK_FOR_PENDING_INVITES_TIME = "uppLastCheckForPendingInvitesTime";
    var PENDING_INVITES = "uppLastPendingInvites";
    var ONE_HOUR = (1000 * 60 * 60);

    pendingInvites.flagHasBeenDismissed = function () { //visible for testing
        var dismissed = false;
        var lastClosed = localStorage[INVITES_FLAG_CLOSED_KEY];
        if (lastClosed) {
            dismissed = (new Date().getTime() - lastClosed) < ONE_HOUR; // Show the flag again after one hour
        }
        return dismissed;
    };

    function pendingInviteCount() {
        var deferredCount = $.Deferred();
        if (localStorage[LAST_CHECK_FOR_PENDING_INVITES_TIME] != null && (new Date().getTime() - localStorage[LAST_CHECK_FOR_PENDING_INVITES_TIME]) < ONE_HOUR) {
            deferredCount.resolve(localStorage[PENDING_INVITES]);
        } else {
            $.ajax({
                url: umUtils.restBaseUrl() + '/rest/um/1/user/search?activeFilter=pending&max-results=1',
                dataType: 'json',
                // Revert JIRA's override of jQuery's default. This means the &_=<timestamp>
                // query param is not included on requests
                cache: true
            }).then(function (invites) {
                localStorage[PENDING_INVITES] = invites.length;
                localStorage[LAST_CHECK_FOR_PENDING_INVITES_TIME] = new Date().getTime();
                deferredCount.resolve(invites.length);
            }, deferredCount.reject);
        }

        return deferredCount.promise();
    }

    function showPendingInvitesFlag() {
        pendingInvitesFlag = flag({
            id: 'pending-invites-flag',
            type: 'info',
            isHtml: true,
            body: AJS.format("There are users with pending invites to your Atlassian Cloud. {0}Approve here{1}.", '<a href="/admin/users?activeFilter=pending&src=pending.flag.' + encodeURIComponent(umUtils.productName()) + '">', '</a>')
        });
        $(pendingInvitesFlag).on('um-flag-close', function() {
            localStorage[INVITES_FLAG_CLOSED_KEY] = new Date().getTime();
        });
    }

    pendingInvites.closePendingInvitesFlag = function() {
        if (pendingInvitesFlag != null) {
            pendingInvitesFlag.close();
        }
    };

    pendingInvites.init = function() {
        umUtils.isSiteAdmin().then(function (isSiteAdmin) {
            if (isSiteAdmin && !pendingInvites.flagHasBeenDismissed()) {
                return pendingInviteCount().then(function (inviteCount) {
                    if (inviteCount > 0) {
                        showPendingInvitesFlag();
                    }
                });
            }
        }).always(function() { pendingInvites.hasCompleted = true; })
    };

    return pendingInvites;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:create-users-resources', location = '/js/atlassian/create-user-init.js' */
require(['jquery', 'user-management-common/create-user/request-invite', 'user-management-common/create-user/pending-invites'],
function($, requestInvite, pendingInvites) {
    $(pendingInvites.init);
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'js/ajs-amd.js' */
define("pas/ajs",[],function(){return AJS});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'js/store_js/store.js' */
(function(){var c=function(g,h){return Object.prototype.hasOwnProperty.call(g,h)};var b=function(g){var i=0;for(var h in g){if(c(g,h)){i++}}return i};var d=function(l,j,k){var h=l.length>>>0;for(var g=(k<0)?Math.max(0,h+k):k||0;g<h;g++){if(l[g]===j){return g}}return -1};var f=function(i,g,h){return d(i,g,h)!==-1};var a=function(h,g){if(!f(h,g)){h.push(g)}return h};var e=this.Store=function(g,i,h){this.name=g;this.defaults=i||{};this.watcherSpeed=h||500;this.listeners={};this.applyDefaults()};e.clear=function(){localStorage.clear()};e.prototype.applyDefaults=function(){for(var g in this.defaults){if(c(this.defaults,g)&&this.get(g)===undefined){this.set(g,this.defaults[g])}}return this};e.prototype.watcher=function(i){if(this.watcherTimer){clearTimeout(this.watcherTimer)}if(b(this.listeners)||i){this.newObject=this.toObject();if(this.oldObject){for(var g in this.newObject){if(c(this.newObject,g)&&this.newObject[g]!==this.oldObject[g]){this.fireEvent(g,this.newObject[g])}}for(var g in this.oldObject){if(c(this.oldObject,g)&&!c(this.newObject,g)){this.fireEvent(g,this.newObject[g])}}}this.oldObject=this.newObject;var h=this;this.watcherTimer=setTimeout(function(){h.watcher()},this.watcherSpeed)}return this};e.prototype.get=function(g){var h=localStorage.getItem("store."+this.name+"."+g);if(h===null){return undefined}try{return JSON.parse(h)}catch(i){return null}};e.prototype.set=function(g,h){if(h===undefined){this.remove(g)}else{if(typeof h==="function"){h=null}try{h=JSON.stringify(h)}catch(i){h=null}localStorage.setItem("store."+this.name+"."+g,h)}return this};e.prototype.remove=function(g){localStorage.removeItem("store."+this.name+"."+g);return this.applyDefaults()};e.prototype.reset=function(){var g="store."+this.name+".";for(var h=(localStorage.length-1);h>=0;h--){if(localStorage.key(h).substring(0,g.length)===g){localStorage.removeItem(localStorage.key(h))}}return this.applyDefaults()};e.prototype.toObject=function(){var g={};var h="store."+this.name+".";for(var k=(localStorage.length-1);k>=0;k--){if(localStorage.key(k).substring(0,h.length)===h){var j=localStorage.key(k).substring(h.length);var l=this.get(j);if(l!==undefined){g[j]=l}}}return g};e.prototype.fromObject=function(g,i){if(!i){this.reset()}for(var h in g){if(c(g,h)){this.set(h,g[h])}}return this};e.prototype.addEvent=function(g,h){this.watcher(true);if(!this.listeners[g]){this.listeners[g]=[]}a(this.listeners[g],h);return this};e.prototype.removeEvent=function(g,j){for(var h=(this.listeners[g].length-1);h>=0;h--){if(this.listeners[g][h]===j){this.listeners[g].splice(h,1)}}if(!this.listeners[g].length){delete this.listeners[g]}return this};e.prototype.fireEvent=function(k,n){var m=[k,"*"];for(var l=0;l<m.length;l++){var g=m[l];if(this.listeners[g]){for(var h=0;h<this.listeners[g].length;h++){this.listeners[g][h](n,k,this.name)}}}return this}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'js/store_js/store-amd.js' */
define("pas/js/store_js/store",function(){return Store});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'js/pasConfig.js' */
define("pas/js/pas-config",["jquery","pas/ajs","pas/js/store_js/store"],function(b,a,d){var c=60*1000;return{timeUpdateInterval:c,pollingInterval:15*c,url:a.contextPath()+"/rest/pas/latest/announcement",store:new d("Atlassian.PAS.Announcements."+document.location.hostname+a.contextPath()+"."+b("meta[name='ajs-remote-user']").attr("content")),nextAnnouncementKey:"nextAnnouncement",timeStampKey:"timeStamp",config:{url:a.contextPath()+"/rest/pas/latest/settings",timeStampKey:"configTimeStampKey",pollingInterval:30*60*1000,currentConfigKey:"currentConfigKey"},cookieKey:a.contextPath().replace("/","")+"_pas.dismiss"}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'js/pas.js' */
require(["jquery","aui/flag","pas/ajs","pas/js/pas-config"],function(d,b,c,a){c.toInit(function(){var l=null;var r=null;var e=null;var f=0;var s;var y;var q;var t=function(E){var H=function(M,N,L){M=""+M;while(M.length<L){M=N+M}return M};var G=function(N,M){var L=N+" "+M;if(N!=1){L+="s"}return L};var K=60000;var I=3600000;var F=86400000;if(E<K){return"in less than a minute"}else{if(E<I){return"in "+G(Math.round(E/K),"min")}else{if(E<F){return"in "+G(Math.round(E/I),"hour")+" "+G(Math.round((E%I)/K),"minute")}else{var J=new Date();J.setSeconds(J.getSeconds()+Math.round(E/1000));return(H(J.getFullYear(),"0",4)+"/"+H(J.getMonth()+1,"0",2)+"/"+H(J.getDate(),"0",2)+" "+H(J.getHours(),"0",2)+":"+H(J.getMinutes(),"0",2))}}}};var v=function(){if(l!=null){clearTimeout(l)}if(r!=null){clearTimeout(r)}if(e!=null){clearInterval(e)}document.getElementById("pas-announcement").close()};var B=function(){var O=a.announcementText;var I=a.announcementUrl||"";var N=a.announcementTime;var E=a.announcementId;var L=a.announcementTicket;s=a.announcementSource;var K=/([A-Z])\w+/g;var F=/\d+/g;y=K.exec(L);q=F.exec(L);function H(P){return P.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var M=H(a.announcementTargetPath)||"";var J=new RegExp(M);var G;if(location.href.match(J)!==null){G=b({type:"info",title:"Public service announcement",body:O+I+N,close:"manual"});if(s=="alertr"){n({name:"pas.alertr.announcement.display"})}}if(G!==undefined){G.setAttribute("id","pas-announcement");G.setAttribute("announcementId",E);G.addEventListener("aui-flag-close",function(){k()})}h()};var h=function(){c.$("#more-info").on("click",function(){if(s=="alertr"){n({name:"pas.alertr.announcement.url.clicked"})}})};var k=function(){var F=a.announcementId;var E=new Date();var G;E.setDate(E.getDate()+1);G=F+"; "+E.toUTCString();document.cookie=a.cookieKey+"="+G+"; path=/";c.trigger("analyticsEvent",{name:"com.atlassian.plugins.pas.dismiss-announcement.click",data:{message:d("#pas-announcement span:first").text()}});if(s=="alertr"){n({name:"pas.alertr.announcement.dismissed"})}};var g=function(J,K){var H=document.cookie.split(";");for(var G=0;G<H.length;G++){var F=H[G];var L=F.indexOf("=");var E=F.substr(0,L).trim();var I=F.substr(L+1).trim();if(E==K){return I==J}}return false};var j=function(){if(f>0){var E=f-a.timeUpdateInterval;f=E;a.announcementTime=Atlassian.PAS.Templates.pasTime({time:t(E)})}else{clearInterval(e);e=null}};var n=function(F){var E=y[0];c.trigger("analyticsEvent",{name:F.name,data:{issueNumber:q,project:E}})};var z=function(){function F(){return G.timeToStart-u()}var G=o(a.nextAnnouncementKey);if(G==null||G.message==null||g(G.id,a.cookieKey)){return}f=G.timeLeft;a.announcementText=G.message;a.announcementTime=Atlassian.PAS.Templates.pasTime({time:t(f)});e=setInterval(j,a.timeUpdateInterval);if(G.url){a.announcementUrl=Atlassian.PAS.Templates.pasUrl({url:G.url})}a.announcementTargetPath=G.targetPath;a.announcementId=G.id;var E=G.duration;G.timeToStart=F();if(G.source){a.announcementSource=G.source}if(G.incidentTicket){a.announcementTicket=G.incidentTicket}if(G.timeToStart>0){E+=G.timeToStart;l=setTimeout(function(){B()},G.timeToStart)}else{B()}if(E>0){r=setTimeout(function(){v()},E)}};function x(E){d.ajax({type:"GET",contentType:"application/json",url:a.url,cache:false,global:false,timeout:5000,success:function(F,G){A(a.timeStampKey,D());A(a.nextAnnouncementKey,F);E()},error:function(H,F,G){c.log("Could not get announcement from server: "+G)}})}var D=function(){return new Date().getTime()};var u=function(){return(D()-o(a.timeStampKey))};function o(E){return a.store.get(E)}function A(E,F){return a.store.set(E,F)}function w(G,H){var F=o(G);var E=D()-F;return F==undefined||E>H}function p(){return w(a.timeStampKey,a.pollingInterval)}function C(){return w(a.config.timeStampKey,a.config.pollingInterval)}function i(){d("#more-info").live("click",function(E){c.trigger("analyticsEvent",{name:"com.atlassian.plugins.pas.more-info.click",data:{message:d("#pas-announcement span:first").text()}})})}function m(){if(p()){x(z)}else{z()}}i();m()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'templates/soy/pas.soy' */
// This file was automatically generated from pas.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Atlassian.PAS.Templates.
 */

if (typeof Atlassian == 'undefined') { var Atlassian = {}; }
if (typeof Atlassian.PAS == 'undefined') { Atlassian.PAS = {}; }
if (typeof Atlassian.PAS.Templates == 'undefined') { Atlassian.PAS.Templates = {}; }


Atlassian.PAS.Templates.pasTime = function(opt_data, opt_ignored) {
  return '<span class="pas-announcement-time">' + soy.$$escapeHtml(opt_data.time) + '</span>';
};
if (goog.DEBUG) {
  Atlassian.PAS.Templates.pasTime.soyTemplateName = 'Atlassian.PAS.Templates.pasTime';
}


Atlassian.PAS.Templates.pasUrl = function(opt_data, opt_ignored) {
  return '<p><a id="more-info" target="_blank" href=\'' + soy.$$escapeHtml(opt_data.url) + '\'>' + soy.$$escapeHtml("More information") + '</a></p>';
};
if (goog.DEBUG) {
  Atlassian.PAS.Templates.pasUrl.soyTemplateName = 'Atlassian.PAS.Templates.pasUrl';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics.js' */
(function(){var a=window.BrowserMetrics||{};a.isFunction=function(b){return !!(b&&b.constructor&&b.call&&b.apply)};a.isEnabled=function(){if(a.enabled===undefined){a.enabled=true}return a.enabled};window.BrowserMetrics=a}());(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var f=5;var e=12000;var c=function(g){return Math.round(g)};var a=function(g){return Math.round(g*100)/100};var d=function(k){var h=(function(){var n=/^(\w+):\/\/([^\/]*)(.*)$/;return function(p){var o=p.match(n);if(!o){return{path:p}}return{scheme:o[1],host:o[2],path:o[3]}}}());var i=(function(){var n=["secureConnectionStart","requestStart","responseStart","responseEnd","domContentLoadedEventStart","domContentLoadedEventEnd","loadEventEnd"];return function(o){if(k.performance){var s=k.performance.timing;var p=s.navigationStart;if(p){for(var r=0;r<n.length;++r){var q=n[r];var t=s[q];if(t){o(q,t-p)}}}}}}());var g=(function(){var o=[{key:"LOGIN",pattern:/^\/login.*/i},{key:"J-DASH",pattern:/^\/secure\/dashboard\.jspa.*/i},{key:"J-ISSUE",pattern:/^\/browse\/\w+\-\w+.*/i},{key:"J-NAV",pattern:/^\/issues.*/i},{key:"J-RAPID",pattern:/secure\/rapidboard\.jspa/i},{key:"SD-AGENT",pattern:/^(\/\w+)?\/servicedesk\/agent\/.*/i},{key:"SD-CUSTOMER",pattern:/^(\/\w+)?\/servicedesk\/customer\/.*/i},{key:"C-DASH",pattern:/^\/wiki(\/)?(\?.*|#.*)?$/i},{key:"C-DASH",pattern:/^\/wiki\/dashboard\.action.*$/i},{key:"C-SPACE",pattern:/^\/wiki\/display\/\w+(\?.*|#.*)?$/i},{key:"C-PAGE",pattern:/^\/wiki\/display\/\w+\/.*/i},{key:"C-PAGE",pattern:/^\/wiki\/pages\/viewpage\.action.*/i},{key:"C-BLOG",pattern:/^\/wiki\/display\/~\w+\/\d+\/\d+\/\d+\/.*/i},{key:"C-EDITOR",pattern:/^\/wiki\/pages\/editpage\.action.*/i},{key:"C-CREATE",pattern:/^\/wiki\/pages\/createpage\.action.*/i}];return function n(){var r=h(k.location.href).path;for(var p=0;p<o.length;++p){var q=o[p];if(r.match(q.pattern)){return q.key}}return null}}());function j(){var n=g();if(n){i(function(p,r){var o="browser.metrics."+p,q={version:f,page:n,value:r>e?"x":Math.ceil((r)/100),rawValue:c(r)};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent(o,q):AJS.trigger("analyticsEvent",{name:o,data:q})})}}function m(){try{j()}catch(n){if(window.console){window.console.log("Error reporting browser metrics: "+n)}}}function l(){if(k.performance.timing.loadEventEnd){m()}else{setTimeout(l,1000)}}if(k.performance&&k.performance.timing){l()}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initPageLoad=d}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-events.js' */
(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var e=5;var d=12000;var a=function(f){return Math.round(f*100)/100};var c=function(g){var l={};function h(){return g.performance&&g.performance.now?g.performance.now():new Date().getTime()}function n(o){return o===Object(o)}function k(o){if(n(o)){return o.eventName+"."+o.eventType}else{return o}}function m(o){if(n(o)){return o.eventName}else{return o}}function j(o){if(n(o)){return o.eventType}else{return""}}function f(o){var p=k(o);l[p]=h()}function i(r,u){var v=k(r);if(!l[v]){throw ("Error logging browser metrics event end: no start event for key '"+v+"'")}var t=h()-l[v];l[v]=null;var o=m(r),q=j(r);var p="browser.metrics.e."+o+(u?"."+u:""),s={version:e,value:t>d?"x":Math.ceil((t)/100),rawValue:a(t),eventType:q};g.AJS.Analytics?g.AJS.Analytics.triggerPrivacyPolicySafeEvent(p,s):g.AJS.trigger("analyticsEvent",{name:p,data:s})}return{start:f,end:i}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initEvents=c}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-init.js' */
(function(){var a=window.BrowserMetrics||{};if(a.isEnabled()){if(Math.random()<0.1){window.ATL_PERF&&window.ATL_PERF.initPageLoad&&window.ATL_PERF.initPageLoad(window)}window.ATL_PERF&&window.ATL_PERF.initEvents&&(function(){window.BrowserMetrics=window.ATL_PERF.initEvents(window)}())}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.soy' */
// This file was automatically generated from appswitcher.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.appswitcher.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher == 'undefined') { navlinks.templates.appswitcher = {}; }


navlinks.templates.appswitcher.linkSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.list.length > 0) {
    output += '<div class="aui-nav-heading sidebar-section-header">' + soy.$$escapeHtml(opt_data.title) + '</div><ul class="aui-nav nav-links">';
    var linkList8 = opt_data.list;
    var linkListLen8 = linkList8.length;
    for (var linkIndex8 = 0; linkIndex8 < linkListLen8; linkIndex8++) {
      var linkData8 = linkList8[linkIndex8];
      output += navlinks.templates.appswitcher.applicationsItem(linkData8);
    }
    output += '</ul>';
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.linkSection.soyTemplateName = 'navlinks.templates.appswitcher.linkSection';
}


navlinks.templates.appswitcher.applicationsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link"><a href="' + soy.$$escapeHtml(opt_data.link) + '" ' + ((opt_data.self) ? 'class="checked"' : '') + ' title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span></a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.applicationsItem.soyTemplateName = 'navlinks.templates.appswitcher.applicationsItem';
}


navlinks.templates.appswitcher.shortcutsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link"><a href="' + soy.$$escapeHtml(opt_data.link) + '" ' + ((opt_data.self) ? 'class="checked"' : '') + ' title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span>' + ((opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '') + '</a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.shortcutsItem.soyTemplateName = 'navlinks.templates.appswitcher.shortcutsItem';
}


navlinks.templates.appswitcher.error = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-error">' + soy.$$filterNoAutoescape("Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.") + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.error.soyTemplateName = 'navlinks.templates.appswitcher.error';
}


navlinks.templates.appswitcher.sidebarContents = function(opt_data, opt_ignored) {
  return '<div class="aui-page-panel-nav"><nav class="aui-navgroup aui-navgroup-vertical"><div class="app-switcher-section app-switcher-applications"><div class="aui-nav-heading">' + soy.$$escapeHtml("Application Links") + '</div><div class="app-switcher-loading">' + soy.$$filterNoAutoescape("Loading\x26hellip;") + '</div></div><div class="app-switcher-section app-switcher-shortcuts"><div class="aui-nav-heading">' + soy.$$escapeHtml("Shortcuts") + '</div><div class="app-switcher-loading">' + soy.$$filterNoAutoescape("Loading\x26hellip;") + '</div></div></nav></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.sidebarContents.soyTemplateName = 'navlinks.templates.appswitcher.sidebarContents';
}


navlinks.templates.appswitcher.loading = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-loading">' + soy.$$filterNoAutoescape("Loading\x26hellip;") + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.loading.soyTemplateName = 'navlinks.templates.appswitcher.loading';
}


navlinks.templates.appswitcher.trigger = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">' + soy.$$escapeHtml("Linked Applications") + '</span>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.trigger.soyTemplateName = 'navlinks.templates.appswitcher.trigger';
}


navlinks.templates.appswitcher.projectHeaderSection = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-title">' + aui.avatar.avatar({size: 'large', avatarImageUrl: opt_data.avatarUrl, isProject: true, title: opt_data.name}) + '<div class="sidebar-project-name">' + soy.$$escapeHtml(opt_data.name) + '</div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.projectHeaderSection.soyTemplateName = 'navlinks.templates.appswitcher.projectHeaderSection';
}


navlinks.templates.appswitcher.cogDropdown = function(opt_data, opt_ignored) {
  var output = '';
  var dropdownList__soy79 = '' + navlinks.templates.appswitcher.dropdownList({list: opt_data.links});
  output += aui.dropdown2.dropdown2({menu: {id: opt_data.id, content: dropdownList__soy79, extraClasses: 'aui-style-default sidebar-customize-section'}, trigger: {showIcon: false, content: '<span class="aui-icon aui-icon-small aui-iconfont-configure"></span>', container: '#app-switcher'}});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.cogDropdown.soyTemplateName = 'navlinks.templates.appswitcher.cogDropdown';
}


navlinks.templates.appswitcher.dropdownList = function(opt_data, opt_ignored) {
  var output = '<ul class="sidebar-admin-links">';
  var linkList87 = opt_data.list;
  var linkListLen87 = linkList87.length;
  for (var linkIndex87 = 0; linkIndex87 < linkListLen87; linkIndex87++) {
    var linkData87 = linkList87[linkIndex87];
    output += '<li class="nav-link"><a href="' + soy.$$escapeHtml(linkData87.href) + '" title="' + soy.$$escapeHtml(linkData87.title) + '"><span class="nav-link-label">' + soy.$$escapeHtml(linkData87.label) + '</span></a></li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.dropdownList.soyTemplateName = 'navlinks.templates.appswitcher.dropdownList';
}


navlinks.templates.appswitcher.switcher = function(opt_data, opt_ignored) {
  var output = '';
  var loadingContent__soy98 = '' + navlinks.templates.appswitcher.loading(null);
  var triggerContent__soy100 = '' + navlinks.templates.appswitcher.trigger(null);
  output += aui.dropdown2.dropdown2({menu: {id: 'app-switcher', content: loadingContent__soy98, extraClasses: 'aui-style-default', extraAttributes: {'data-environment': {}, 'data-is-switcher': 'true'}}, trigger: {showIcon: false, content: triggerContent__soy100, extraClasses: 'app-switcher-trigger', extraAttributes: {href: '#app-switcher'}}});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.switcher.soyTemplateName = 'navlinks.templates.appswitcher.switcher';
}


navlinks.templates.appswitcher.suggestionApp = function(opt_data, opt_ignored) {
  var output = '';
  var href__soy106 = opt_data.isBillingSystemEnabled == true ? opt_data.suggestionApp.billingSystemDiscoveryUrl : opt_data.suggestionApp.discoveryUrl;
  output += '<li class="app-discovery-suggestion-app"><a id="' + soy.$$escapeHtml(opt_data.suggestionApp.appName) + '" href="' + soy.$$escapeHtml(href__soy106) + '" class="app-discovery-link aui-icon-container app-discovery-' + soy.$$escapeHtml(opt_data.suggestionApp.appName) + '-product-icon" title="' + soy.$$escapeHtml(href__soy106) + '" target="_blank"/><div class="app-discovery-small">' + soy.$$escapeHtml(opt_data.suggestionApp.appDesc) + '</div></li>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.suggestionApp.soyTemplateName = 'navlinks.templates.appswitcher.suggestionApp';
}


navlinks.templates.appswitcher.suggestionApps = function(opt_data, opt_ignored) {
  return '<ul class=\'nav-links suggestion-apps\'><li><span class=\'app-discovery-suggest-title nav-link-label\'><h6>' + soy.$$escapeHtml("Try other Atlassian apps") + '</h6></span></li></ul><div class=\'buttons-container app-discovery-suggest-apps-buttons\'><div class=\'buttons\'><button class=\'aui-button aui-button-link app-discovery-cancel-button\' name=\'cancel\' accesskey=\'c\' href=\'#\'>' + soy.$$escapeHtml("Don\x27t show this again") + '</button></div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.suggestionApps.soyTemplateName = 'navlinks.templates.appswitcher.suggestionApps';
}


navlinks.templates.appswitcher.applications = function(opt_data, opt_ignored) {
  return '' + navlinks.templates.appswitcher.applicationsSection({list: opt_data.apps, listClass: 'nav-links', showDescription: opt_data.showDescription}) + ((opt_data.custom) ? navlinks.templates.appswitcher.applicationsSection({list: opt_data.custom, showDescription: opt_data.showDescription}) : '') + ((opt_data.showAdminLink) ? navlinks.templates.appswitcher.adminSection(opt_data) : '');
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.applications.soyTemplateName = 'navlinks.templates.appswitcher.applications';
}


navlinks.templates.appswitcher.applicationsSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.list.length > 0) {
    var param141 = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
    var linkList149 = opt_data.list;
    var linkListLen149 = linkList149.length;
    for (var linkIndex149 = 0; linkIndex149 < linkListLen149; linkIndex149++) {
      var linkData149 = linkList149[linkIndex149];
      param141 += navlinks.templates.appswitcher.applicationsSectionItem(soy.$$augmentMap(linkData149, {showDescription: opt_data.showDescription}));
    }
    param141 += '</ul>';
    output += aui.dropdown2.section({content: param141});
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.applicationsSection.soyTemplateName = 'navlinks.templates.appswitcher.applicationsSection';
}


navlinks.templates.appswitcher.applicationsSectionItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link' + ((opt_data.self) ? ' nav-link-local' : '') + '"><a href="' + soy.$$escapeHtml(opt_data.link) + '" class="aui-dropdown2-radio ' + ((opt_data.self) ? 'aui-dropdown2-checked' : '') + '" title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span>' + ((opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '') + '</a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.applicationsSectionItem.soyTemplateName = 'navlinks.templates.appswitcher.applicationsSectionItem';
}


navlinks.templates.appswitcher.adminSection = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.section({content: '<ul class="nav-links"><li><a class="nav-link-edit-wrapper" href="' + soy.$$escapeHtml(opt_data.adminLink) + '"><span class="nav-link-edit">' + soy.$$filterNoAutoescape("Configure\x26hellip;") + '</span></a></li></ul>'});
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.adminSection.soyTemplateName = 'navlinks.templates.appswitcher.adminSection';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.js' */
var APPSWITCHER_TRIGGER_CLICK="appswitcher.trigger.click";var APPSWITCHER_DROPDOWN_SHOW="appswitcher.dropdown.show";var APPSWITCHER_DROPDOWN_DISPLAY_ERROR="appswitcher.dropdown.display.error";var APPSWITCHER_APP_LINK_CLICK="appswitcher.app.link.click";var APPSWITCHER_CONFIGURE_LINK_CLICK="appswitcher.configure.link.click";(function(c,f){var b="isAppSuggestionAvailable";var d="isSiteAdminUser";var e="isUserAdmin";var a="#app-switcher";f.AppSwitcher=function(j){var l=AJS.contextPath()+"/plugins/servlet/customize-application-navigator";var k="unified.usermanagement";var m=this;this.$dropdown=null;j=c.extend({dropdownContents:null},j);this.getLinks=function(){return c.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateDropdown).fail(this.showError)};this.getDropdown=function(){if(!this.$dropdown){this.$dropdown=c(j.dropdownContents);this.envData=this.$dropdown.data("environment")}return this.$dropdown};this.updateDropdown=function(n){this.getDropdown().html(navlinks.templates.appswitcher.applications({apps:n,showAdminLink:this.envData[e],adminLink:l}));this.bindAnalyticsHandlers();if(this.envData[b]===true){this.handleSuggestionApps(n)}}.bind(this);this.bindAnalyticsHandlers=function(){c(".app-switcher-trigger").on("click",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_TRIGGER_CLICK})});c("#app-switcher").on("aui-dropdown2-show",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_DROPDOWN_SHOW})});c("#app-switcher .nav-link").on("click",function(){var p="custom";var q=c(this).find("a");var o=q.attr("href");var n=window.location.hostname;if(o.indexOf(n+"/wiki")>-1){p="confluence"}else{if(o.indexOf(n+"/build")>-1){p="bamboo"}else{if(o.indexOf(n)>-1){p="jira"}}}AJS.trigger("analyticsEvent",{name:APPSWITCHER_APP_LINK_CLICK,data:{product:p}})});c(".nav-link-edit-wrapper").on("click",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_CONFIGURE_LINK_CLICK})})};this.isBillingSystemEnabled=function(){return(this.envData[d]===true)&&AJS.DarkFeatures.isEnabled(k)};this.handleSuggestionApps=function(q){var r=_.map(q,function(s){return s.applicationType.toLowerCase()});var o=c("<div id='app-switcher-suggestion-apps' class='aui-dropdown2-section'/>");o.html(navlinks.templates.appswitcher.suggestionApps);var p=o.find(".suggestion-apps");var n=false;_.each(g,function(s){if(!_.contains(r,s.appName)){n=true;p.append(navlinks.templates.appswitcher.suggestionApp({suggestionApp:s,isBillingSystemEnabled:m.isBillingSystemEnabled()}))}});if(!n){return}c("#app-switcher").append(o);c(".app-discovery-suggestion-app").click(function(){var t=c(this).find("a");var s;if(m.envData[d]===true){s="appswitcher.discovery.siteadmin.select.inproduct."}else{s="appswitcher.discovery.user.select."}s=s+t.attr("id").toLowerCase();AJS.trigger("analytics",{name:s})});c(".app-discovery-suggestion-app").hover(function(){c(this).find("a").removeClass("active").removeClass("aui-dropdown2-active")});c(".app-discovery-cancel-button").click(function(){AJS.trigger("analytics",{name:"appswitcher.discovery.nothanks.button.click"});i(h,"true");o.remove()})};this.showError=function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_DROPDOWN_DISPLAY_ERROR});this.getDropdown().html(navlinks.templates.appswitcher.error()).off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(m.retryLoading,m))}.bind(this);this.retryLoading=function(n){this.getDropdown().html(navlinks.templates.appswitcher.loading());this.getLinks();n&&n.stopPropagation()};c(".app-switcher-trigger").on("click",function(){if(!this.$dropdown){this.getLinks()}}.bind(this))};var h="key-no-thanks";var g=[{appName:"jira",appDesc:"Issue & Project Tracking Software",discoveryUrl:"https://www.atlassian.com/software/jira",billingSystemDiscoveryUrl:"/admin/billing/addapplication"},{appName:"confluence",appDesc:"Collaboration and content sharing",discoveryUrl:"https://www.atlassian.com/software/confluence",billingSystemDiscoveryUrl:"/admin/billing/addapplication?product=confluence.ondemand"}];var i=function(j,k){c.ajax({url:AJS.contextPath()+"/rest/menu/latest/userdata/",type:"PUT",contentType:"application/json",data:JSON.stringify({key:j,value:k})})};c(function(){if(c(a).data("is-switcher")===true){new f.AppSwitcher({dropdownContents:a})}})}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:common-header-resources', location = '/includes/js/header-user-menu.js' */
define("confluence/header-user-menu",["jquery","confluence/meta","underscore"],function(a,c,b){function d(){var b=c.get("current-user-avatar-uri-reference");a("#user-menu-link").find(".aui-avatar-inner img").attr("src",b)}return function(){b.defer(d)}});require("confluence/module-exporter").safeRequire("confluence/header-user-menu",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:general-analytics-bindings', location = '/includes/js/analytics-bindings.js' */
define("confluence/analytics-bindings",["jquery","confluence/analytics-support"],function(b,d){return function(){function e(a,c){b(a).on("click",".view-historical-version-trigger",function(){d.publish("confluence.page.view-historical.from-"+(c||"unknown"))})}function f(a,c){b(a).on("click",".restore-historical-version-trigger",function(){d.publish("confluence.page.restore-historical.from-"+(c||"unknown"))})}function g(a,c){b("#header .aui-header-secondary "+a).on("click",function(){var a=b(this).hasClass("aui-dropdown2-active")?
"expanded":"collapsed";d.publish("confluence.header.dropdown."+c,{state:a})})}e("#page-history-warning","navigation");e("#page-history-container","history");e(".diff-menu","diff");f("#page-history-warning","navigation");f("#page-history-container","history");g("#admin-menu-link","administration");g("#user-menu-link","profile")}});require("confluence/module-exporter").safeRequire("confluence/analytics-bindings",function(b){require("ajs").toInit(b)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-on-space-resources', location = 'com/atlassian/confluence/extra/calendar3/js/calendar-on-space.js' */
(function(a){a(function(){function b(){var c="com.atlassian.confluence.extra.team-calendars:tc-on-space-blueprint-webitem";Confluence.Blueprint.setDirectCallback(c,function(f,d){d.finalUrl=Confluence.getContextPath()+"/display/"+d.spaceKey+"/calendars?src=sidebar&openAddCalDialog=true"})}b()})}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'templates/anchor.soy' */
// This file was automatically generated from anchor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace MyWork.Templates.Anchor.
 */

if (typeof MyWork == 'undefined') { var MyWork = {}; }
if (typeof MyWork.Templates == 'undefined') { MyWork.Templates = {}; }
if (typeof MyWork.Templates.Anchor == 'undefined') { MyWork.Templates.Anchor = {}; }


MyWork.Templates.Anchor.tasksFeatureDiscovery = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$escapeHtml("See the tasks assigned to you, or created by you, in the Tasks tab of your profile.") + '</p><ul class="mw-tasks-discovery-controls"><li><a id="mw-tasks-discovery-view" href="' + soy.$$escapeHtml(opt_data.tasksUrl) + '" class="aui-button aui-style"><p>' + soy.$$escapeHtml("View Tasks") + '</p></a></li><li><a id="mw-tasks-discovery-dismiss" href="#">' + soy.$$escapeHtml("Dismiss") + '</a></li></ul>';
};
if (goog.DEBUG) {
  MyWork.Templates.Anchor.tasksFeatureDiscovery.soyTemplateName = 'MyWork.Templates.Anchor.tasksFeatureDiscovery';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/miniview-anchor.js' */
var MW=MW||{$:AJS.$||Zepto};MW.MV={};AJS.toInit(function(){if(AJS.Meta&&!AJS.Meta.get("remote-user")){return}MW.MV.AnchorManager=function(){var l=contextPath,h=l+"/plugins/servlet/notifications-miniview",p=0,e=/[?&]show-miniview/.test(window.location.search);function r(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var s="[\\?\\#&]"+t+"=([^&#]*)";var v=new RegExp(s);var u=v.exec(window.location.search);if(u!==null){return decodeURIComponent(u[1].replace(/\+/g," "))}}var o=r("show-miniview");if(o){h+="#notification/"+o}function q(){var s="badge-i aui-icon aui-icon-small aui-iconfont-workbox-empty";MW.$("#notifications-anchor").html('<div class="'+s+'"></div><span class="badge-w"><span class="badge"></span></span>').attr("title","Open Notifications")}function f(u){var t=false,s;return function(){if(t){return s}t=true;s=u.apply(this,arguments);return s}}var n=f(function(){MW.Dialog.getOptions().closeOthers=false;MW.Dialog.preload=true;MW.Dialog.show();MW.Dialog.hide();MW.Dialog.getOptions().closeOthers=true});function k(s){return s<=9?s:"9+"}function j(s){var t=MW.$("#notifications-anchor"),u=t.find(".badge"),v=t.find(".aui-icon");u.html(k(s));p=s;if(s>0){t.addClass("unread").removeClass("read");v.addClass("aui-iconfont-workbox").removeClass("aui-iconfont-workbox-empty");if(t.is(":visible")&&!e){n()}}else{t.addClass("read").removeClass("unread");v.addClass("aui-iconfont-workbox-empty").removeClass("aui-iconfont-workbox")}}function m(){c("notifications",h);d()}function d(){MW.$(document).keydown(function(s){if(AJS.InlineDialog.current&&s.which==27&&!MW.$(s.target).is(":input")){AJS.InlineDialog.current.hide()}})}function i(){MW.$("#header-menu-bar").find(".ajs-drop-down").each(function(){this.hide()})}function c(x,v){var w;var u=function(){w=this};var s=function(){if(this.preload!==true){var y=JSON.stringify({markAllRead:true});MW.$("#"+x+"-miniview-iframe")[0].contentWindow.postMessage(y,"*")}};if(!window.addEventListener){window.attachEvent("onmessage",t)}else{window.addEventListener("message",t,false)}function t(A){function B(C){return C===location.protocol+"//"+location.host}if("escKey"===A.data){w.hide();MW.$("#notifications-anchor").focus();document.activeElement.blur()}else{if("getParentConfig"===A.data&&B(A.origin)){var z=JSON.stringify({parentConfig:{parentUrl:location.href,preload:MW.Dialog.preload,unread:p}}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(z,"*");if(MW.Dialog.preload){MW.Dialog.preload=false}else{y.focus()}}}}MW.Dialog=AJS.InlineDialog(MW.$("#"+x+"-anchor"),x+"-miniview",function(B,z,C){if(MW.$(B).children().length===0){MW.$(B).append(MW.$('<iframe id="'+x+'-miniview-iframe" src="'+v+'" frameborder="0"></iframe>'))}else{var A=JSON.stringify({unread:p}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(A,"*");setTimeout(function(){y.focus()},100)}i();C()},{width:500,height:520,hideDelay:null,initCallback:u,hideCallback:s,noBind:true});MW.Tasks=(function(){var A=300;var z=20;var B=16;var G;var D=AJS.$("#user-menu-link");var C=AJS.$("#user-menu-link-content");var y=C.find("#view-mytasks-link");var E=function(J,H,K){var I=MyWork.Templates.Anchor.tasksFeatureDiscovery({tasksUrl:AJS.contextPath()+"/plugins/inlinetasks/mytasks.action"});J.html(I);J.find("#mw-tasks-discovery-dismiss").click(function(){G.hide()});K()};var F=function(){MW.Dialog.hide();var J=function(){return C.is(":visible")};if(!J()){D.trigger("aui-button-invoke")}var H=function(){G.hide()};C.one("aui-dropdown2-hide",H);G=AJS.InlineDialog(y,"my-tasks-discovery",E,{hideCallback:function(){G.unbind("click focusin mousedown",I);C.unbind("aui-dropdown2-hide",H);if(J()){D.trigger("aui-button-invoke")}MW.$("#inline-dialog-my-tasks-discovery").remove()},gravity:"w",useLiveEvents:true,width:A,noBind:true});C.find(".user-item.active").removeClass("active");y.addClass("active");y.focus();var I=function(K){K.stopPropagation()};G.on("click focusin mousedown",I);G.show()};return{closeAndDiscoverMyTasks:F}})();MW.$("#"+x+"-anchor").click(function(y){y.preventDefault();if(MW.$("#"+x+"-miniview-iframe").is(":visible")){MW.Dialog.hide()}else{MW.Dialog.show()}});if(e){MW.$("#"+x+"-anchor").click()}}function g(){q();m()}return{setupAnchors:g,updateNotificationCount:j}}();MW.MV.AnchorManager.setupAnchors();var b=new MW.AnchorUtil(MW.$,contextPath,MW.MV.AnchorManager.updateNotificationCount);b.setupAnchors();MW.$("#notifications-anchor").click(function(){AJS.trigger("analytics",{name:"mywork.host.button.clicked.notifications",data:{}});MW.MV.AnchorManager.updateNotificationCount(0)});var a=function(){if(document.hidden){b.stopRequests(true)}else{b.startRequests()}};document.addEventListener("visibilitychange",a,false);if(typeof document.hidden==="undefined"){MW.$(window).focus(function(){b.startRequests()})}MW.$("body").click(function(){b.startRequests()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/util/anchor-util.js' */
MW.AnchorUtil=function(d,k,e){var f=30000,i=f,s,p=k+"/rest/mywork/latest/status/notification/count";var r=new Date().getTime();var b=5*60*1000;var t=1000*60*5;var h=1.25;var c=0;function q(u){window.clearInterval(s);s=undefined;if(u===true){i=f}}function o(){return(new Date().getTime()-r)<t}function m(){if(!o()||!s){l()}r=new Date().getTime()}function l(){if(s){clearTimeout(s)}s=setTimeout(function(){g()},c=n(c))}function a(w,u){var v=w*1000;b=u*1000||b;if(v&&v!=i){i=v;m()}}function n(u){return Math.min(o()?i:u*h,b)}function g(u){MW.$.getJSON(p+((u)?"?pageid="+u:""),function(w){a(w.timeout,w.maxTimeout);var v=w.count;e(v)});l()}function j(){var u=AJS&&AJS.Meta&&AJS.Meta.get&&(AJS.Meta.get("content-type")==="page"||AJS.Meta.get("content-type")==="blogpost");if(u){g(AJS.Meta.get("page-id"))}else{g()}m()}return{setupAnchors:j,startRequests:m,stopRequests:q,updateAnchors:g}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/soy/dialog-wizard.soy' */
// This file was automatically generated from dialog-wizard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DialogWizard.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DialogWizard == 'undefined') { Confluence.Templates.DialogWizard = {}; }


Confluence.Templates.DialogWizard.pageContainer = function(opt_data, opt_ignored) {
  return '<div class="dialog-wizard-page-wrapper"><div class="dialog-wizard-page-main"></div><div class="dialog-wizard-page-description">' + ((opt_data.descriptionHeaderLink && opt_data.descriptionHeader) ? '<h3><a href=\'' + soy.$$escapeHtml(opt_data.descriptionHeaderLink) + '\' target=\'_blank\'>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</a></h3>' : (opt_data.descriptionHeader) ? '<h3>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</h3>' : '') + '<p>' + soy.$$escapeHtml(opt_data.descriptionContent) + '</p></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.pageContainer.soyTemplateName = 'Confluence.Templates.DialogWizard.pageContainer';
}


Confluence.Templates.DialogWizard.waitIcon = function(opt_data, opt_ignored) {
  return '<img class="wait-icon" src="' + soy.$$escapeHtml("/wiki") + '/images/icons/wait.gif">';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.waitIcon.soyTemplateName = 'Confluence.Templates.DialogWizard.waitIcon';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/js/dialog-wizard.js' */
(function($){function findNextPageId(pageId,pages){var thisPageIdIndex=-1;_.each(pages,function(element,index){if(element.id==pageId){thisPageIdIndex=index;return}});return pages[thisPageIdIndex+1].id}Confluence.DialogWizard=function(dialog,finalAction){function newPage(config,pageId,soyRenderContext,wizardData,wizard){var wizardPage=_.find(config.wizard.pages,function(page){return page.id==pageId});wizard.trigger("pre-render."+pageId,{soyRenderContext:soyRenderContext,wizardData:wizardData});try{var soyTemplateFunction=eval(wizardPage.templateKey);var $soyRender=$(soyTemplateFunction(soyRenderContext))}catch(e){throw Error("wizard points to a non-existent Soy template '"+wizardPage.templateKey+"'. Check your web-resources or server logs.")}$soyRender.find("a, area, button, input, object, select, textarea").attr("tabindex","10");var $panelContent;if(wizardPage.descriptionContent){$panelContent=$(Confluence.Templates.DialogWizard.pageContainer({descriptionHeaderLink:wizardPage.descriptionHeaderLink,descriptionHeader:wizardPage.descriptionHeader,descriptionContent:wizardPage.descriptionContent}));$panelContent.addClass("with-description").find(".dialog-wizard-page-main").append($soyRender)}else{$panelContent=$soyRender}var dialogPageId=pageId;if(dialog.id=="create-dialog"){dialogPageId="create-dialog-"+pageId}var page=dialog.addPage(dialogPageId).page[dialog.curpage];page.addHeader(wizardPage.title).addPanel("SinglePanel",$panelContent,"singlePanel");page.element.find("form").submit(function(){return false});if(wizardPage.descriptionContent){page.element.find(".dialog-panel-body").css({padding:0})}Confluence.Binder.autocompleteMultiUser($soyRender);Confluence.Binder.placeholder($soyRender);function nextCallback(ev){$soyRender.find(".placeholded").val("");var pageData={};var formArray=$soyRender.parent().find("form").serializeArray();_.each(formArray,function(item){pageData[item.name]=item.value});var e=$.Event("submit."+pageId);var state={$container:$soyRender,wizardData:wizardData,pageData:pageData};var validationDeferred=$.Deferred();validationDeferred.done(function(){wizardData.pages[pageId]=pageData;var nextPageId;if(state.nextPageId){nextPageId=state.nextPageId}else{nextPageId=!wizardPage.last&&findNextPageId(pageId,config.wizard.pages)}if(!state.nextPageId&&wizardPage.last){doFinalAction(ev,state,wizardData,finalAction,wizard);dialog.popup.element.find(":input,a").filter(":visible").disable().addClass("disabled");buttons.prepend(Confluence.Templates.DialogWizard.waitIcon())}else{newPage(config,nextPageId,soyRenderContext,wizardData,wizard)}});validationDeferred.fail(function(){AJS.log("dialog aborted by on-submit callback on page: "+pageId)});state.validationDeferred=validationDeferred;wizard.trigger(e,state);if(state.async){return}if(e.isDefaultPrevented()){validationDeferred.reject();return}validationDeferred.resolve()}var buttons=dialog.addFullButtonPanel(page,nextCallback,null,wizardPage.last);buttons.find(".button-panel-back").click(function(){delete wizardData.pages[pageId]});buttons.find(".aui-button-primary").attr("tabindex","10");$soyRender.find("input, select, textarea").eq(0).focus();wizard.trigger("post-render."+pageId,{$container:$soyRender,wizardData:wizardData})}function doFinalAction(ev,state,wizardData,finalAction,wizard){if(state.finalUrl){if(ev.type==="click"&&ev.which===2){window.open(state.finalUrl)}else{window.location=state.finalUrl}}else{_.each(wizardData.pages,function(pageData){_.extend(wizardData,pageData)});delete wizardData.pages;finalAction(ev,wizardData,null,wizard)}return{success:function(callback){callback()}}}return{newPage:newPage,doFinalAction:doFinalAction}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:common-template-resources', location = 'com/atlassian/confluence/plugins/blueprint/common/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Common.Index.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Common == 'undefined') { Confluence.Blueprints.Common = {}; }
if (typeof Confluence.Blueprints.Common.Index == 'undefined') { Confluence.Blueprints.Common.Index = {}; }


Confluence.Blueprints.Common.Index.detailsSummaryMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="detailssummary"><ac:parameter ac:name="label">' + soy.$$escapeHtml(opt_data.label) + '</ac:parameter><ac:parameter ac:name="spaces">' + soy.$$escapeHtml(opt_data.spaces) + '</ac:parameter><ac:parameter ac:name="firstcolumn">' + soy.$$escapeHtml(opt_data.firstcolumn) + '</ac:parameter><ac:parameter ac:name="headings">' + soy.$$escapeHtml(opt_data.headings) + '</ac:parameter><ac:parameter ac:name="blankTitle">' + soy.$$escapeHtml(opt_data.blankTitle) + '</ac:parameter><ac:parameter ac:name="blankDescription">' + soy.$$escapeHtml(opt_data.blankDescription) + '</ac:parameter><ac:parameter ac:name="contentBlueprintId">' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey) + '</ac:parameter><ac:parameter ac:name="createButtonLabel">' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.detailsSummaryMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.detailsSummaryMacro';
}


Confluence.Blueprints.Common.Index.createFromTemplateMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.moduleKey) + '</ac:parameter><ac:parameter ac:name="buttonLabel">' + soy.$$escapeHtml(opt_data.buttonLabel) + '</ac:parameter><ac:parameter ac:name="spaceKey">' + soy.$$escapeHtml(opt_data.spaceKey) + '</ac:parameter><ac:parameter ac:name="templateName">' + soy.$$escapeHtml(opt_data.templateName) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.createFromTemplateMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.createFromTemplateMacro';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/how-to.soy' */
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Meeting == 'undefined') { Confluence.Blueprints.Meeting = {}; }
if (typeof Confluence.Blueprints.Meeting.Notes == 'undefined') { Confluence.Blueprints.Meeting.Notes = {}; }


Confluence.Blueprints.Meeting.Notes.howTo = function(opt_data, opt_ignored) {
  return '<h1>' + soy.$$escapeHtml("With meeting notes you can...") + '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>' + soy.$$escapeHtml("Crowd-source your agenda") + '</h3><p>' + soy.$$escapeHtml("Distribute an agenda and keep meetings focused.") + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml("Capture meeting minutes") + '</h3><p>' + soy.$$escapeHtml("Take notes and make them available to everyone.") + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml("Create and assign tasks") + '</h3><p>' + soy.$$escapeHtml("Assign action items for attendees to work on afterward.") + '</p></div></li></ol>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Meeting.Notes.howTo.soyTemplateName = 'Confluence.Blueprints.Meeting.Notes.howTo';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/user-mention.soy' */
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Meeting == 'undefined') { Confluence.Templates.Meeting = {}; }
if (typeof Confluence.Templates.Meeting.Notes == 'undefined') { Confluence.Templates.Meeting.Notes = {}; }


Confluence.Templates.Meeting.Notes.userMention = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.username) ? '<li><p><ac:link><ri:user ri:username="' + soy.$$escapeHtml(opt_data.username) + '" /></ac:link></p></li><li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>' : '<li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>');
};
if (goog.DEBUG) {
  Confluence.Templates.Meeting.Notes.userMention.soyTemplateName = 'Confluence.Templates.Meeting.Notes.userMention';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.growth.product-growth-confluence-plugin:growth-web-resources', location = 'js/store.js' */
var GROW=GROW||{};GROW.Store=GROW.Store||{};(function(a){GROW.Store.get=function(b){return AJS.Meta.get(b)};GROW.Store.getNumber=function(b){return AJS.Meta.getNumber(b)};GROW.Store.getBoolean=function(b){return AJS.Meta.getBoolean(b)};GROW.Store.set=function(b,c){AJS.Meta.set(b,c);return a.ajax({url:contextPath+"/rest/growth/1/store",type:"PUT",contentType:"application/json",data:JSON.stringify({key:b,value:c})})};GROW.Store.setGlobal=function(b,c){AJS.Meta.set(b,c);return a.ajax({url:contextPath+"/rest/growth/1/store/global",type:"PUT",contentType:"application/json",data:JSON.stringify({key:b,value:c})})};GROW.Store.remove=function(b){AJS.Meta.set(b,null);return a.ajax({url:contextPath+"/rest/growth/1/store",type:"DELETE",contentType:"application/json",data:JSON.stringify({key:b})})};GROW.Store.removeGlobal=function(b){AJS.Meta.set(b,null);return a.ajax({url:contextPath+"/rest/growth/1/store/global",type:"DELETE",contentType:"application/json",data:JSON.stringify({key:b})})}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access.js' */
AJS.toInit(function(e){var b=AJS.Meta.get("page-id"),c=e("#page-restricted-container"),a=AJS.Meta.get("remote-user"),d=e("#page-restricted-container button");if(c.length){e("#breadcrumbs").hide();e("#title-text.with-breadcrumbs").hide();if(d.length){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page.view",data:{pageId:b,requestAccessUser:a}})}}d.click(function(){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{pageId:b,requestAccessUser:a}});d.attr("aria-disabled","true");var f,g=e(Confluence.Request.Access.loading({}));d.replaceWith(g);e.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+b,success:function(h){f=e(Confluence.Request.Access.result({success:true,recipient:h}));c.removeClass("page-restricted");c.addClass("access-requested")},error:function(h,i){f=e(Confluence.Request.Access.result({success:false}))},complete:function(){g.replaceWith(f);Confluence.Binder.userHover()}})})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/grant-access.js' */
AJS.toInit(function(d){var a=AJS.Meta.get("page-id"),f=AJS.Meta.get("remote-user"),h=j("username"),e=j("userFullName");var c=e.split("+");e=c.join(" ");var g=d("#system-content-items");var k=d("#content-metadata-page-restrictions.restricted").length!==0;if(!g.length||!k||!j("grantAccess")){return}var b=d(Confluence.Request.Access.loading());var i=AJS.InlineDialog(g,"grantAccessDialog",function(m,l,n){m.css({padding:"20px"}).html(Confluence.Grant.Access.dialog({requestAccessUsername:h,requestAccessUserFullName:e}));m.on("click",".aui-button.grant-access",function(q){q.stopPropagation();var p=m.find(".actions-result");p.replaceWith(b);AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.grant.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});var o="",r=true;d.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+a,type:"POST",contentType:"application/json; charset=utf-8",data:h,success:function(t,u,s){if(s.status==202){o="Access was already granted to the user."}else{o="Access was granted, a notification to the user will be sent."}},error:function(s){r=false;if(s.status==412){o="Access was granted, but there is not a mail server configured so the notification could not be sent."}else{if(s.status==502){o="Access was granted, but an unexpected error happened while sending the notification."}else{o="Sorry, there was an unexpected error while granting access."}}},complete:function(s){b.replaceWith(d(Confluence.Grant.Access.result({success:r,message:o})));setTimeout(function(){i.hide()},6000)}})});m.on("click",".aui-button.deny-access",function(o){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.deny.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});i.hide()});n();return false},{offsetY:2,offsetX:0,width:350,hideDelay:null,noBind:true,hideCallback:function(){setTimeout(i.hide(),5000)}});i.show();function j(l){l=l.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+l+"=([^&#]*)"),m=n.exec(location.search);return m==null?"":decodeURIComponent(m[1].replace(/\+/g," "))}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/request-access.soy' */
// This file was automatically generated from request-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Request.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Request == 'undefined') { Confluence.Request = {}; }
if (typeof Confluence.Request.Access == 'undefined') { Confluence.Request.Access = {}; }


Confluence.Request.Access.result = function(opt_data, opt_ignored) {
  var output = '<div id="request-access">';
  if (opt_data.success) {
    var usernameLink__soy6 = '' + Confluence.Request.Access.usernameLink({user: opt_data.recipient});
    output += '<span class="aui-icon aui-icon-small aui-iconfont-approve" data-unicode="UTF+E005" original-title=""></span><p class="title">' + soy.$$filterNoAutoescape(AJS.format("Your request has been sent to {0}. If approved you will receive an email shortly.",usernameLink__soy6)) + '</p>';
  } else {
    output += '<span class="aui-icon aui-icon-small aui-iconfont-error" data-unicode="UTF+E011" original-title=""></span><p class="title">' + soy.$$escapeHtml("Your request for access has not been sent. Contact your space admin.") + '</p>';
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Request.Access.result.soyTemplateName = 'Confluence.Request.Access.result';
}


Confluence.Request.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("/wiki") + '/display/~' + soy.$$escapeUri(opt_data.user.name) + '" class="url fn confluence-userlink" title data-username="' + soy.$$escapeHtml(opt_data.user.name) + '">' + soy.$$escapeHtml(opt_data.user.fullName) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Request.Access.usernameLink.soyTemplateName = 'Confluence.Request.Access.usernameLink';
}


Confluence.Request.Access.loading = function(opt_data, opt_ignored) {
  return '<span class=\'aui-icon aui-icon-wait\'>' + soy.$$escapeHtml("Loading, please wait") + '</span>"';
};
if (goog.DEBUG) {
  Confluence.Request.Access.loading.soyTemplateName = 'Confluence.Request.Access.loading';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/grant-access.soy' */
// This file was automatically generated from grant-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Grant.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Grant == 'undefined') { Confluence.Grant = {}; }
if (typeof Confluence.Grant.Access == 'undefined') { Confluence.Grant.Access = {}; }


Confluence.Grant.Access.dialog = function(opt_data, opt_ignored) {
  var output = '<div class="grant-access-dialog">';
  var usernameLink__soy4 = '' + Confluence.Grant.Access.usernameLink({username: opt_data.requestAccessUsername, userFullName: opt_data.requestAccessUserFullName});
  output += '<h2 class="grant-access-title">' + soy.$$escapeHtml("Access request") + '</h2><p class="grant-access-message">' + soy.$$filterNoAutoescape(AJS.format("{0} wants to view this page.",usernameLink__soy4)) + '</p><div class="actions-result"><button class="aui-button grant-access">' + soy.$$escapeHtml("Grant access") + '</button><button class="aui-button aui-button-link deny-access">' + soy.$$escapeHtml("Deny") + '</button><div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Grant.Access.dialog.soyTemplateName = 'Confluence.Grant.Access.dialog';
}


Confluence.Grant.Access.result = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-' + ((opt_data.success) ? 'approve' : 'error') + '" data-unicode="UTF+E011" original-title=""></span><p class="title">' + soy.$$escapeHtml(opt_data.message) + '</p>';
};
if (goog.DEBUG) {
  Confluence.Grant.Access.result.soyTemplateName = 'Confluence.Grant.Access.result';
}


Confluence.Grant.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("/wiki") + '/display/~' + soy.$$escapeHtml(opt_data.username) + '" class="url fn" title data-username="' + soy.$$escapeHtml(opt_data.username) + '"><strong>' + soy.$$escapeHtml(opt_data.userFullName) + '</strong> (' + soy.$$escapeHtml(opt_data.username) + ')</a>';
};
if (goog.DEBUG) {
  Confluence.Grant.Access.usernameLink.soyTemplateName = 'Confluence.Grant.Access.usernameLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-resources', location = '/jirachart/jirachart.js' */
AJS.toInit(function(){AJS.$(".jira-chart-macro-img").load(function(a){AJS.log("Jira Chart Macro - chart image loaded");AJS.$(".insert-jira-chart-macro-button",window.parent.document).enable()}).error(function(d){AJS.log("Jira Chart Macro - chart image loaded error");AJS.$(".insert-jira-chart-macro-button",window.parent.document).disable();var e=AJS.$(d.target);var c=e.parent();var b=c.parent();c.remove();var a="Unable to render JIRA chart macro due to an execution error.";AJS.messages.error(b,{body:a})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-resources', location = '/jirachart/twodimensionalchart-showlink.js' */
var TwoDimensionalShowLink=(function(e){var d=function(i){var h=e("#two-dimensional-chart-"+i);var g=h.position();e("<div />",{id:"twodimensional-dark-layout-"+i,"class":"jim-sortable-dark-layout",css:{top:g.top+"px",left:g.left+"px",width:h.width()+"px",height:h.height()+"px"}}).appendTo(h.parent())};var a=function(g){e("#twodimensional-dark-layout-"+g).remove()};var b=function(){var h=e(this).attr("data-chart-id");d(h);var g={pageId:e("#chart-page-id-"+h).val(),wikiMarkup:e("#chart-wiki-"+h).val(),isShowMore:e(this).attr("data-is-show-more")};AJS.$.ajax({type:"POST",dataType:"html",url:Confluence.getContextPath()+"/plugins/servlet/twoDimensionalShowMoreRenderer",data:g,success:function(i){if(e(i).find(".aui-message.error").length){var j=e(i).find(".message").text();e("#two-dimensional-chart-"+h).find(".show-error").html(j)}else{var k=e(i).find(".show-link-container a").attr("data-chart-id");e("#two-dimensional-chart-"+h).replaceWith(i);c(k)}a(h)},error:function(){e("#two-dimensional-chart-"+h).find(".show-error").html("Unable to render JIRA chart macro. Execution has timed out.");a(h)}})};var c=function(g){e("#show-link-"+g).on("click",b)};var f=function(){e(".show-link-container a").each(function(){c(e(this).attr("data-chart-id"))})};return{init:f}})(AJS.$);AJS.$(function(){TwoDimensionalShowLink.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-model.js' */
define("confluence-watch-button/watch-model",["ajs","backbone"],function(a,b){return b.Model.extend({saveSettings:function(d,e){this.trigger("request");var c=this;return a.safe.ajax({url:d,type:"POST",dataType:"json",data:e}).done(function(){c.trigger("sync",c)}).fail(function(){c.trigger("error")})},saveWatchPage:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"pagenotificationajax.action";this.set("watchingPage",d);return this.saveSettings(c,{pageId:this.get("pageId")})},saveWatchBlogs:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingBlogs",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey"),contentType:"blogpost"})},saveWatchSpace:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingSpace",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey")})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-view.js' */
define("confluence-watch-button/watch-view",["jquery","ajs","backbone"],function(b,a,c){return c.View.extend({events:{"change #cw-watch-page":"changeWatchPage","change #cw-watch-blogs":"changeWatchBlogs","change #cw-watch-space":"changeWatchSpace"},initialize:function(){_.bindAll(this,"render","initTooltips","changeWatchPage","changeWatchBlogs","changeWatchSpace","togglePageEnabledState","toggleBlogsEnabledState","startLoading","stopLoading","setTitle");this.model.on("sync change:watchingSpace",this.togglePageEnabledState,this);this.model.on("change:watchingSpace",this.toggleBlogsEnabledState,this);this.model.on("request",this.startLoading,this);this.model.on("sync",this.setTitle,this);this.model.on("sync",this.stopLoading,this)},render:function(){this.$el.html(Confluence.Watch.Templates.dialogBody(this.model.toJSON()));this.initTooltips();this.setTitle(this.model);return this},initTooltips:function(){this.$(".cw-tooltip").tooltip({gravity:"e",offset:5,delayIn:0});this.togglePageEnabledState(this.model);this.toggleBlogsEnabledState(this.model)},changeWatchPage:function(f){var d=b(f.target).is(":checked");this.model.saveWatchPage(d)},changeWatchBlogs:function(f){var d=b(f.target).is(":checked");this.model.saveWatchBlogs(d)},changeWatchSpace:function(f){var d=b(f.target).is(":checked");this.model.saveWatchSpace(d)},togglePageEnabledState:function(d){var e=d.get("watchingPage");var g=d.get("watchingSpace");this.$("#cw-watch-page").prop("disabled",g);this.$("#cw-watch-page").prop("checked",e||g);var f=g?"You will receive updates for this page because you are watching this space.":"";this.$(".cw-tooltip-watch-page").attr("original-title",f)},toggleBlogsEnabledState:function(d){var g=d.get("watchingBlogs");var f=d.get("watchingSpace");this.$("#cw-watch-blogs").prop("disabled",f);this.$("#cw-watch-blogs").prop("checked",g||f);var e=f?"You are subscribed to all blog posts because you are watching this space.":"";this.$(".cw-tooltip-watch-blogs").attr("original-title",e)},startLoading:function(){this.$(".cw-status").addClass("loading")},stopLoading:function(){this.$(".cw-status").removeClass("loading")},setTitle:function(){var e=this.model.get("watchingPage");var i=this.model.get("watchingBlogs");var g=this.model.get("watchingSpace");var d=this.model.get("isBlogPost");function h(){if(g){return{title:"You are watching this space",description:"Receiving email updates for all content in this space.",}}if(e&&d&&i){return{title:"You are watching this blog post",description:"Receiving email updates about changes to this blog post and all new blog posts in this space.",}}if(e&&d){return{title:"You are watching this blog post",description:"Receiving email updates about changes to this blog post.",}}if(e){return{title:"You are watching this page",description:"Receiving email updates about changes to this page.",}}if(d&&i){return{title:"You are watching for new blog posts",description:"Receiving email updates for new blog posts in this space.",}}if(d){return{title:"You are not watching this blog",description:"Start watching to receive email updates about changes to this blog.",}}return{title:"You are not watching this page",description:"Start watching to receive email updates about changes to this page.",}}var f=h();this.$(".cw-title").text(f.title);this.$(".cw-title-description").text(f.description)}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch.js' */
require(["jquery","underscore","skate","ajs","confluence-watch-button/watch-model","confluence-watch-button/watch-view","confluence-watch-button/watch-notification"],function(b,j,c,i,g,e,h){function a(k,o){f(k,o);var n=new g(o);var m=new e({model:n});i.InlineDialog(k,"confluence-watch",function(q,p,r){m.setElement(q);m.render();r()},{width:325,offsetX:-180,cacheContent:false,hideDelay:null,hideCallback:function(){b(".tipsy").hide()}});n.on("change:watchingPage change:watchingBlogs change:watchingSpace",function(p){f(k,p.toJSON())});n.on("change:watchingPage",function(p,r){var q=r?"watch-page":"unwatch-page";i.trigger("analytics",{name:q})});n.on("change:watchingBlogs",function(p,r){var q=r?"watch-blogs":"unwatch-blogs";i.trigger("analytics",{name:q})});n.on("change:watchingSpace",function(p,r){var q=r?"watch-space":"unwatch-space";i.trigger("analytics",{name:q})});d(n);var l=false;b(document).on("keyup",function(){l=false});window.CW_watchPage=function(){if(l){return}l=true;var r=n.get("watchingSpace");var q=n.get("watchingPage");if(r){b("body, #splitter-content").animate({scrollTop:0},300,function(){k.click();setTimeout(function(){b(".cw-tooltip-watch-page").tipsy("show")},50)})}else{var s=!q;n.saveWatchPage(s);var p=s?"You started watching this page.":"You stopped watching this page.";h(p)}}}function f(l,r){var n=r.watchingPage;var k=r.isBlogPost&&r.watchingBlogs;var p=r.watchingSpace;if(n||k||p){var m=l.find(".aui-icon").removeClass("aui-iconfont-unwatch").addClass("aui-iconfont-watch");var o=i.format("{0}W{1}atching","<u>","</u>");l.prop("title","Stop watching (w)").children("span").empty().append(m).append(" "+o)}else{var m=l.find(".aui-icon").removeClass("aui-iconfont-watch").addClass("aui-iconfont-unwatch");var q=i.format("{0}W{1}atch","<u>","</u>");l.prop("title","Watch (w)").children("span").empty().append(m).append(" "+q)}}function d(k){k.on("change:watchingPage",function(l,n){var m=n?"watchpage.pageoperation":"unwatchpage.pageoperation";i.trigger(m)})}c("watch-content-button",{type:c.types.CLASS,events:{click:function(k,l){l.preventDefault()}},attached:function(o){var n=b(o);var l=n.attr("page-id")||i.Meta.get("page-id");var p=n.attr("space-key")||i.Meta.get("space-key");var k=n.attr("space-name")||i.Meta.get("space-name");var m=i.contextPath()+"/rest/watch-button/1.0/watchState/"+l;if(!l||!p||!k){i.debug("Could not initialize Watch content button because of missing pageId, spaceKey or spaceName");return}b.getJSON(m).then(function(q){j.extend(q,{pageId:l,spaceKey:p,spaceName:k});a(n,q);n.addClass("watch-state-initialised")})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/notification.js' */
define("confluence-watch-button/watch-notification",["jquery","aui/flag"],function(b,a){return function(e){var c=document.getElementById("watch-notification");if(c!=null){c.close()}var d=a({type:"success",body:e,close:"auto"});d.setAttribute("id","watch-notification")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'templates/watch.soy' */
// This file was automatically generated from watch.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Watch.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Watch == 'undefined') { Confluence.Watch = {}; }
if (typeof Confluence.Watch.Templates == 'undefined') { Confluence.Watch.Templates = {}; }


Confluence.Watch.Templates.dialogBody = function(opt_data, opt_ignored) {
  return '<div class="cw-status"><h2 class="cw-title"></h2><p class="cw-title-description"></p></div><form class="aui cw-dialog"><div class="cw-tooltip cw-tooltip-watch-page"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-page" ' + ((opt_data.watchingPage) ? 'checked' : '') + '><label for="cw-watch-page">' + ((opt_data.isBlogPost) ? soy.$$escapeHtml("Watch blog post") : soy.$$escapeHtml("Watch page")) + '</label></div></div>' + ((opt_data.isBlogPost) ? '<div class="cw-tooltip cw-tooltip-watch-blogs"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-blogs" ' + ((opt_data.watchingBlogs) ? 'checked' : '') + '><label for="cw-watch-blogs">' + soy.$$escapeHtml("Watch for new blog posts in this space") + '</label></div></div>' : '') + '<div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-space" ' + ((opt_data.watchingSpace) ? 'checked' : '') + '><label for="cw-watch-space">' + soy.$$escapeHtml("Watch all content in this space") + '</label></div></form>' + ((opt_data.isAdmin) ? '<div class="cw-manage-watchers-wrapper"><button class="aui-button aui-button-link cw-manage-watchers">' + soy.$$escapeHtml("Manage Watchers") + '</button></div>' : '');
};
if (goog.DEBUG) {
  Confluence.Watch.Templates.dialogBody.soyTemplateName = 'Confluence.Watch.Templates.dialogBody';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:autocomplete', location = 'js/autocomplete.js' */
define("confluence-share-page-plugin/js/autocomplete",["ajs"],function(a){return{autocomplete:function(e){e=e||document.body;var f=a.$,b=/^([a-zA-Z0-9_\.\-\+\!#\$%&'\*/=\?\^_`{|}~])+\@.*/;var d=function(k){if(!k||!k.result){throw new Error("Invalid JSON format")}var g=[];for(var h=0;h<k.result.length;h++){var j=k.result[h];if(j.type=="group"){j=c(j)}}g.push(k.result);return g};function c(g){if(g.name=="confluence-users"||g.name=="confluence-administrators"){return g}g.title=g.name;g.group=g.name;g.thumbnailLink={href:Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/group.png",type:"image/png",rel:"thumbnail"};g.link=[{href:Confluence.getContextPath(),rel:"self"}];return g}f("input.autocomplete-sharepage[data-autocomplete-user-bound!=true]",e).each(function(){var i=f(this).attr("data-autocomplete-sharepage-bound","true").attr("autocomplete","off");var h=i.attr("data-max")||10,k=i.attr("data-alignment")||"left",j=i.attr("data-dropdown-target"),g=null;if(j){g=f(j)}else{g=f("<div></div>");i.after(g)}g.addClass("aui-dd-parent autocomplete");i.quicksearch(a.REST.getBaseUrl()+"search/user-or-group.json",function(){i.trigger("open.autocomplete-sharepage")},{makeParams:function(l){return{"max-results":h,query:l.replace("{|}","")}},dropdownPlacement:function(l){g.append(l)},makeRestMatrixFromData:d,addDropdownData:function(m){var l=f.trim(i.val());if(b.test(l)){m.push([{name:l,email:l,href:"#",icon:Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/envelope.png"}])}if(!m.length){var n=i.attr("data-none-message");if(n){m.push([{name:n,className:"no-results",href:"#"}])}}return m},ajsDropDownOptions:{alignment:k,displayHandler:function(l){if(l.restObj&&l.restObj.username){return l.name+" ("+l.restObj.username+")"}return l.name},selectionHandler:function(n,m){if(m.find(".search-for").length){i.trigger("selected.autocomplete-sharepage",{searchFor:i.val()});return}if(m.find(".no-results").length){this.hide();n.preventDefault();return}var l=f("span:eq(0)",m).data("properties");if(!l.email){l=l.restObj}i.trigger("selected.autocomplete-sharepage",{content:l});this.hide();n.preventDefault()}}})})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:jquery-elastic', location = 'js/jquery-elastic.js' */
define("confluence-share-page-plugin/js/jquery-elastic",["jquery","ajs"],function(b,a){(function(c){b.fn.extend({elastic:function(){var d=["paddingTop","paddingRight","paddingBottom","paddingLeft","fontSize","lineHeight","fontFamily","width","fontWeight","border-top-width","border-right-width","border-bottom-width","border-left-width","borderTopStyle","borderTopColor","borderRightStyle","borderRightColor","borderBottomStyle","borderBottomColor","borderLeftStyle","borderLeftColor"];return this.each(function(){if(this.type!=="textarea"){return false}var j=b(this),e=b("<div />").css({position:"absolute",display:"none","word-wrap":"break-word","white-space":"pre-wrap"}),l=parseInt(j.css("line-height"),10)||parseInt(j.css("font-size"),"10"),n=parseInt(j.css("height"),10)||l*3,m=parseInt(j.css("max-height"),10)||Number.MAX_VALUE,f=0;if(m<0){m=Number.MAX_VALUE}e.appendTo(j.parent());var h=d.length;while(h--){e.css(d[h].toString(),j.css(d[h].toString()))}function k(){var i=Math.floor(parseInt(j.width(),10));if(e.width()!==i){e.css({width:i+"px"});g(true)}}function o(i,q){var p=Math.floor(parseInt(i,10));if(j.height()!==p){j.css({height:p+"px",overflow:q})}}function g(r){var q=j.val().replace(/&/g,"&amp;").replace(/ {2}/g,"&nbsp;").replace(/<|>/g,"&gt;").replace(/\n/g,"<br />");var i=e.html().replace(/<br>/ig,"<br />");if(r||q+"&nbsp;"!==i){e.html(q+"&nbsp;");if(Math.abs(e.height()+l-j.height())>3){var p=e.height()+l;if(p>=m){o(m,"auto")}else{if(p<=n){o(n,"hidden")}else{o(p,"hidden")}}}}}j.css({overflow:"hidden"});j.bind("keyup change cut paste",function(){g()});c(window).bind("resize",k);j.bind("resize",k);j.bind("update",g);j.bind("input paste",function(i){setTimeout(g,250)});g()})}})})(a.$)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'templates/sharepage/share-dialog.soy' */
// This file was automatically generated from share-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Share.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Share == 'undefined') { Confluence.Templates.Share = {}; }
if (typeof Confluence.Templates.Share.Dialog == 'undefined') { Confluence.Templates.Share.Dialog = {}; }


Confluence.Templates.Share.Dialog.shareContentPopup = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui share-content-popup"><div class="field-group"><div class="autocomplete-user-target"><input class="text autocomplete-sharepage" id="users" data-max="10" data-dropdown-target=".autocomplete-user-target" data-none-message="' + soy.$$escapeHtml("No matches") + '" placeholder="' + soy.$$escapeHtml("User name, group or email") + '"/></div><ol class="recipients"></ol></div><div class="field-group"><textarea class="textarea" id="note" placeholder="' + soy.$$escapeHtml("Add an optional note") + '"/></div><div class="field-group button-panel"><div class="progress-messages-icon"></div><div class="progress-messages"></div><input class="button submit" type="submit" value="' + soy.$$escapeHtml("Share") + '" disabled/><a class="close-dialog" href="#">' + soy.$$escapeHtml("Cancel") + '</a></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.shareContentPopup.soyTemplateName = 'Confluence.Templates.Share.Dialog.shareContentPopup';
}


Confluence.Templates.Share.Dialog.recipientUser = function(opt_data, opt_ignored) {
  return '<li data-userkey="' + soy.$$escapeHtml(opt_data.userKey) + '" style="display: none" class="recipient-user"><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientUser.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientUser';
}


Confluence.Templates.Share.Dialog.recipientEmail = function(opt_data, opt_ignored) {
  return '<li data-email="' + soy.$$escapeHtml(opt_data.email) + '" style="display: none" class="recipient-email"><img src="' + soy.$$escapeHtml(opt_data.icon) + '" title="' + soy.$$escapeHtml(opt_data.email) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.email) + '">' + soy.$$escapeHtml(opt_data.email) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientEmail.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientEmail';
}


Confluence.Templates.Share.Dialog.recipientGroup = function(opt_data, opt_ignored) {
  return '<li data-group="' + soy.$$escapeHtml(opt_data.title) + '" style="display: none" class="recipient-group"><span><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span>' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientGroup.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientGroup';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'js/mailpage.js' */
define("confluence-share-button",["ajs","jquery","skate","confluence-share-page-plugin/js/autocomplete","confluence-share-page-plugin/js/jquery-elastic","confluence/legacy"],function(i,f,g,h,l,j){var d=function(p,n,o){if(p.find("input").length){o();return}p.append(j.Templates.Share.Dialog.shareContentPopup());j.SharePage.autocompleteUser();var q=function(s){j.SharePage.current.hide();if(s){setTimeout(function(){p.empty()},300)}return false};f(document).keyup(function(s){if(s.keyCode==27){q(true);f(document).unbind("keyup",arguments.callee);return false}return true});p.find(".close-dialog").click(function(){q(true)});p.find("#note").elastic();p.find("form").submit(function(){var x=[];p.find(".recipients li").each(function(y,z){x.push(f(z).attr("data-userKey"))});if(x.length<=0){return false}f("button,input,textarea",this).attr("disabled","disabled");p.find(".progress-messages-icon").removeClass("error");p.find(".progress-messages").text("Sending");p.find(".progress-messages").attr("title","Sending");var u=Raphael.spinner(p.find(".progress-messages-icon")[0],7,"#666");p.find(".progress-messages-icon").css("position","absolute").css("left","0").css("margin-top","3px");p.find(".progress-messages").css("padding-left",p.find(".progress-messages-icon").innerWidth()+20);var x=[];p.find(".recipients li[data-userKey]").each(function(y,z){x.push(f(z).attr("data-userKey"))});var w=[];p.find(".recipients li[data-email]").each(function(y,z){w.push(f(z).attr("data-email"))});var s=[];p.find(".recipients li[data-group]").each(function(y,z){s.push(f(z).attr("data-group"))});var t=p.find("#note");var v={users:x,emails:w,groups:s,note:t.hasClass("placeholded")?"":t.val(),entityId:i.params.pageId};f.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:j.getContextPath()+"/rest/share-page/latest/share",data:JSON.stringify(v),dataType:"text",success:function(){setTimeout(function(){u();p.find(".progress-messages-icon").addClass("done");p.find(".progress-messages").text("Sent");p.find(".progress-messages").attr("title","Sent");setTimeout(function(){p.find(".progress-messages").text("");p.find(".progress-messages-icon").removeClass("done");p.find("#note").val("");f("button,input,textarea",p).removeAttr("disabled");q(false)},1000)},500)},error:function(z,y){u();p.find(".progress-messages-icon").addClass("error");p.find(".progress-messages").text("Error sending");p.find(".progress-messages").attr("title","Error sending"+": "+y);f("button,input,textarea",p).removeAttr("disabled")}});return false});var r=p.find("#users");var m=p.find("input.submit");r.bind("selected.autocomplete-sharepage",function(t,s){var u=function(x,w,y){var A=p.find(".recipients"),z,v;z="li[data-"+x+'="'+y.content[x]+'"]';if(A.find(z).length>0){A.find(z).hide()}else{A.append(w(y.content))}v=A.find(z);v.find(".remove-recipient").click(function(){v.remove();if(A.find("li").length==0){m.attr("disabled","true")}j.SharePage.current.refresh();r.focus();return false});v.fadeIn(200)};if(s.content.email){u("email",j.Templates.Share.Dialog.recipientEmail,s)}else{if(s.content.type=="group"){u("group",j.Templates.Share.Dialog.recipientGroup,s)}else{u("userKey",j.Templates.Share.Dialog.recipientUser,s)}}j.SharePage.current.refresh();m.removeAttr("disabled");r.val("");r.focus();return false});r.bind("open.autocomplete-sharepage",function(t,s){if(f("a:not(.no-results)",i.dropDown.current.links).length>0){i.dropDown.current.moveDown()}});r.keypress(function(s){return s.keyCode!=13});f(document).bind("showLayer",function(u,t,s){if(t=="inlineDialog"&&s.popup==j.SharePage.current){s.popup.find("#users").focus()}});f(n).parents().filter(function(){return this.scrollTop>0}).scrollTop(0);o()};var a=function(m){j.SharePage.initDialog(f("#shareContentLink"),"shareContentPopup")};var b={width:250};var e=function(m){j.SharePage={};j.SharePage.autocompleteUser=h.autocomplete;j.SharePage.initDialog=function(n,o){j.SharePage.current=i.InlineDialog(n,o,d,b)}};var c=function(m){};var k=function(){g("webitem-share-button",{type:g.types.CLASS,events:{},attached:a,detached:c,created:e})};return{attached:a,detached:c,init:k}});require("confluence/module-exporter").safeRequire("confluence-share-button",function(a){a.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-analytics', location = '/includes/js/page.js' */
define("confluence/page",["ajs","jquery","confluence/analytics-support","window","document"],function(a,c,e,f,g){var i=a.Meta.get("page-id"),d=function(b,a){e.publish("confluence.page."+b,c.extend({pageID:i},a||{}))},j=(new Date).getTime();return function(){var b=c("#main-content");d("view");if(0<b.length){b.on("click","a",function(a){a=-1<a.currentTarget.href.indexOf(f.location.host)?"internal":"external";d("link.click",{linkType:a})});var h=c(f),e=(new Date).getTime();h.on("scroll.content",a.debounce(function(){var a=
g.body.scrollTop+g.body.offsetHeight,c=b.offset().top+b.height();a>c&&(d("scroll-to-bottom",{secondsSinceReadyEvent:((new Date).getTime()-e)/1E3,secondsSincePageLoad:((new Date).getTime()-j)/1E3}),h.off("scroll.content"))},200))}setTimeout(function(){d("reading")},3E5)}});require("confluence/module-exporter").safeRequire("confluence/page",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd', location = '/com/atlassian/confluence/extra/calendar3/amd/shim/templates-amd.js' */
define("tc/templates",function(){return Confluence.TeamCalendars.Templates});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd', location = '/com/atlassian/confluence/extra/calendar3/amd/shim/dialogs-amd.js' */
define("tc/dialogs",function(){return Confluence.TeamCalendars.Dialogs});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd', location = '/com/atlassian/confluence/extra/calendar3/lib/amd/shim/backbone-amd.js' */
(function(a,b){if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(e,f,d){a.Backbone=b(a,d,e,f)})}else{if(typeof exports!=="undefined"){var c=require("underscore");b(a,exports,c)}else{a.Backbone=b(a,{},a._,(a.jQuery||a.Zepto||a.ender||a.$))}}}(this,function(t,c,G,h){var r=t.Backbone;var j=[];var s=j.slice;c.VERSION="1.1.2";c.$=h;c.noConflict=function(){t.Backbone=r;return this};c.emulateHTTP=false;c.emulateJSON=false;var p=c.Events={on:function(J,M,L){if(!I(this,"on",J,[M,L])||!M){return this}this._events||(this._events={});var K=this._events[J]||(this._events[J]=[]);K.push({callback:M,context:L,ctx:L||this});return this},once:function(K,N,L){if(!I(this,"once",K,[N,L])||!N){return this}var J=this;var M=G.once(function(){J.off(K,M);N.apply(this,arguments)});M._callback=N;return this.on(K,M,L)},off:function(K,S,L){if(!this._events||!I(this,"off",K,[S,L])){return this}if(!K&&!S&&!L){this._events=void 0;return this}var R=K?[K]:G.keys(this._events);for(var Q=0,M=R.length;Q<M;Q++){K=R[Q];var T=this._events[K];if(!T){continue}if(!S&&!L){delete this._events[K];continue}var O=[];for(var P=0,N=T.length;P<N;P++){var J=T[P];if(S&&S!==J.callback&&S!==J.callback._callback||L&&L!==J.context){O.push(J)}}if(O.length){this._events[K]=O}else{delete this._events[K]}}return this},trigger:function(L){if(!this._events){return this}var K=s.call(arguments,1);if(!I(this,"trigger",L,K)){return this}var M=this._events[L];var J=this._events.all;if(M){d(M,K)}if(J){d(J,arguments)}return this},stopListening:function(M,K,O){var L=this._listeningTo;if(!L){return this}var J=!K&&!O;if(!O&&typeof K==="object"){O=this}if(M){(L={})[M._listenId]=M}for(var N in L){M=L[N];M.off(K,O,this);if(J||G.isEmpty(M._events)){delete this._listeningTo[N]}}return this}};var a=/\s+/;var I=function(Q,O,J,M){if(!J){return true}if(typeof J==="object"){for(var L in J){Q[O].apply(Q,[L,J[L]].concat(M))}return false}if(a.test(J)){var P=J.split(a);for(var K=0,N=P.length;K<N;K++){Q[O].apply(Q,[P[K]].concat(M))}return false}return true};var d=function(O,M){var P,N=-1,L=O.length,K=M[0],J=M[1],Q=M[2];switch(M.length){case 0:while(++N<L){(P=O[N]).callback.call(P.ctx)}return;case 1:while(++N<L){(P=O[N]).callback.call(P.ctx,K)}return;case 2:while(++N<L){(P=O[N]).callback.call(P.ctx,K,J)}return;case 3:while(++N<L){(P=O[N]).callback.call(P.ctx,K,J,Q)}return;default:while(++N<L){(P=O[N]).callback.apply(P.ctx,M)}return}};var q={listenTo:"on",listenToOnce:"once"};G.each(q,function(J,K){p[K]=function(N,L,P){var M=this._listeningTo||(this._listeningTo={});var O=N._listenId||(N._listenId=G.uniqueId("l"));M[O]=N;if(!P&&typeof L==="object"){P=this}N[J](L,P,this);return this}});p.bind=p.on;p.unbind=p.off;G.extend(c,p);var m=c.Model=function(J,L){var K=J||{};L||(L={});this.cid=G.uniqueId("c");this.attributes={};if(L.collection){this.collection=L.collection}if(L.parse){K=this.parse(K,L)||{}}K=G.defaults({},K,G.result(this,"defaults"));this.set(K,L);this.changed={};this.initialize.apply(this,arguments)};G.extend(m.prototype,p,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(J){return G.clone(this.attributes)},sync:function(){return c.sync.apply(this,arguments)},get:function(J){return this.attributes[J]},escape:function(J){return G.escape(this.get(J))},has:function(J){return this.get(J)!=null},set:function(R,K,V){var P,S,T,Q,O,U,L,N;if(R==null){return this}if(typeof R==="object"){S=R;V=K}else{(S={})[R]=K}V||(V={});if(!this._validate(S,V)){return false}T=V.unset;O=V.silent;Q=[];U=this._changing;this._changing=true;if(!U){this._previousAttributes=G.clone(this.attributes);this.changed={}}N=this.attributes,L=this._previousAttributes;if(this.idAttribute in S){this.id=S[this.idAttribute]}for(P in S){K=S[P];if(!G.isEqual(N[P],K)){Q.push(P)}if(!G.isEqual(L[P],K)){this.changed[P]=K}else{delete this.changed[P]}T?delete N[P]:N[P]=K}if(!O){if(Q.length){this._pending=V}for(var M=0,J=Q.length;M<J;M++){this.trigger("change:"+Q[M],this,N[Q[M]],V)}}if(U){return this}if(!O){while(this._pending){V=this._pending;this._pending=false;this.trigger("change",this,V)}}this._pending=false;this._changing=false;return this},unset:function(J,K){return this.set(J,void 0,G.extend({},K,{unset:true}))},clear:function(K){var J={};for(var L in this.attributes){J[L]=void 0}return this.set(J,G.extend({},K,{unset:true}))},hasChanged:function(J){if(J==null){return !G.isEmpty(this.changed)}return G.has(this.changed,J)},changedAttributes:function(L){if(!L){return this.hasChanged()?G.clone(this.changed):false}var N,M=false;var K=this._changing?this._previousAttributes:this.attributes;for(var J in L){if(G.isEqual(K[J],(N=L[J]))){continue}(M||(M={}))[J]=N}return M},previous:function(J){if(J==null||!this._previousAttributes){return null}return this._previousAttributes[J]},previousAttributes:function(){return G.clone(this._previousAttributes)},fetch:function(K){K=K?G.clone(K):{};if(K.parse===void 0){K.parse=true}var J=this;var L=K.success;K.success=function(M){if(!J.set(J.parse(M,K),K)){return false}if(L){L(J,M,K)}J.trigger("sync",J,M,K)};e(this,K);return this.sync("read",this,K)},save:function(N,K,R){var O,J,Q,L=this.attributes;if(N==null||typeof N==="object"){O=N;R=K}else{(O={})[N]=K}R=G.extend({validate:true},R);if(O&&!R.wait){if(!this.set(O,R)){return false}}else{if(!this._validate(O,R)){return false}}if(O&&R.wait){this.attributes=G.extend({},L,O)}if(R.parse===void 0){R.parse=true}var M=this;var P=R.success;R.success=function(T){M.attributes=L;var S=M.parse(T,R);if(R.wait){S=G.extend(O||{},S)}if(G.isObject(S)&&!M.set(S,R)){return false}if(P){P(M,T,R)}M.trigger("sync",M,T,R)};e(this,R);J=this.isNew()?"create":(R.patch?"patch":"update");if(J==="patch"){R.attrs=O}Q=this.sync(J,this,R);if(O&&R.wait){this.attributes=L}return Q},destroy:function(K){K=K?G.clone(K):{};var J=this;var N=K.success;var L=function(){J.trigger("destroy",J,J.collection,K)};K.success=function(O){if(K.wait||J.isNew()){L()}if(N){N(J,O,K)}if(!J.isNew()){J.trigger("sync",J,O,K)}};if(this.isNew()){K.success();return false}e(this,K);var M=this.sync("delete",this,K);if(!K.wait){L()}return M},url:function(){var J=G.result(this,"urlRoot")||G.result(this.collection,"url")||x();if(this.isNew()){return J}return J.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(K,J){return K},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return !this.has(this.idAttribute)},isValid:function(J){return this._validate({},G.extend(J||{},{validate:true}))},_validate:function(L,K){if(!K.validate||!this.validate){return true}L=G.extend({},this.attributes,L);var J=this.validationError=this.validate(L,K)||null;if(!J){return true}this.trigger("invalid",this,J,G.extend(K,{validationError:J}));return false}});var C=["keys","values","pairs","invert","pick","omit","chain"];G.each(C,function(J){if(!G[J]){return}m.prototype[J]=function(){var K=s.call(arguments);K.unshift(this.attributes);return G[J].apply(G,K)}});var H=c.Collection=function(K,J){J||(J={});if(J.model){this.model=J.model}if(J.comparator!==void 0){this.comparator=J.comparator}this._reset();this.initialize.apply(this,arguments);if(K){this.reset(K,G.extend({silent:true},J))}};var z={add:true,remove:true,merge:true};var n={add:true,remove:false};G.extend(H.prototype,p,{model:m,initialize:function(){},toJSON:function(J){return this.map(function(K){return K.toJSON(J)})},sync:function(){return c.sync.apply(this,arguments)},add:function(K,J){return this.set(K,G.extend({merge:false},J,n))},remove:function(Q,L){var N=!G.isArray(Q);Q=N?[Q]:G.clone(Q);L||(L={});for(var M=0,O=Q.length;M<O;M++){var K=Q[M]=this.get(Q[M]);if(!K){continue}var P=this.modelId(K.attributes);if(P!=null){delete this._byId[P]}delete this._byId[K.cid];var J=this.indexOf(K);this.models.splice(J,1);this.length--;if(!L.silent){L.index=J;K.trigger("remove",K,this,L)}this._removeReference(K,L)}return N?Q[0]:Q},set:function(ab,L){L=G.defaults({},L,z);if(L.parse){ab=this.parse(ab,L)}var O=!G.isArray(ab);ab=O?(ab?[ab]:[]):ab.slice();var T,M,V,S,aa;var Q=L.at;var J=this.comparator&&(Q==null)&&L.sort!==false;var Z=G.isString(this.comparator)?this.comparator:null;var ac=[],W=[],U={};var R=L.add,N=L.merge,ad=L.remove;var X=!J&&R&&ad?[]:false;for(var Y=0,K=ab.length;Y<K;Y++){V=ab[Y];if(S=this.get(V)){if(ad){U[S.cid]=true}if(N&&V!==S){V=this._isModel(V)?V.attributes:V;if(L.parse){V=S.parse(V,L)}S.set(V,L);if(J&&!aa&&S.hasChanged(Z)){aa=true}}ab[Y]=S}else{if(R){M=ab[Y]=this._prepareModel(V,L);if(!M){continue}ac.push(M);this._addReference(M,L)}}M=S||M;if(!M){continue}T=this.modelId(M.attributes);if(X&&(M.isNew()||!U[T])){X.push(M)}U[T]=true}if(ad){for(var Y=0,K=this.length;Y<K;Y++){if(!U[(M=this.models[Y]).cid]){W.push(M)}}if(W.length){this.remove(W,L)}}if(ac.length||(X&&X.length)){if(J){aa=true}this.length+=ac.length;if(Q!=null){for(var Y=0,K=ac.length;Y<K;Y++){this.models.splice(Q+Y,0,ac[Y])}}else{if(X){this.models.length=0}var P=X||ac;for(var Y=0,K=P.length;Y<K;Y++){this.models.push(P[Y])}}}if(aa){this.sort({silent:true})}if(!L.silent){for(var Y=0,K=ac.length;Y<K;Y++){(M=ac[Y]).trigger("add",M,this,L)}if(aa||(X&&X.length)){this.trigger("sort",this,L)}}return O?ab[0]:ab},reset:function(M,J){J||(J={});for(var K=0,L=this.models.length;K<L;K++){this._removeReference(this.models[K],J)}J.previousModels=this.models;this._reset();M=this.add(M,G.extend({silent:true},J));if(!J.silent){this.trigger("reset",this,J)}return M},push:function(K,J){return this.add(K,G.extend({at:this.length},J))},pop:function(K){var J=this.at(this.length-1);this.remove(J,K);return J},unshift:function(K,J){return this.add(K,G.extend({at:0},J))},shift:function(K){var J=this.at(0);this.remove(J,K);return J},slice:function(){return s.apply(this.models,arguments)},get:function(J){if(J==null){return void 0}var K=this.modelId(this._isModel(J)?J.attributes:J);return this._byId[J]||this._byId[K]||this._byId[J.cid]},at:function(J){return this.models[J]},where:function(J,K){if(G.isEmpty(J)){return K?void 0:[]}return this[K?"find":"filter"](function(L){for(var M in J){if(J[M]!==L.get(M)){return false}}return true})},findWhere:function(J){return this.where(J,true)},sort:function(J){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")}J||(J={});if(G.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(G.bind(this.comparator,this))}if(!J.silent){this.trigger("sort",this,J)}return this},pluck:function(J){return G.invoke(this.models,"get",J)},fetch:function(J){J=J?G.clone(J):{};if(J.parse===void 0){J.parse=true}var L=J.success;var K=this;J.success=function(M){var N=J.reset?"reset":"set";K[N](M,J);if(L){L(K,M,J)}K.trigger("sync",K,M,J)};e(this,J);return this.sync("read",this,J)},create:function(K,J){J=J?G.clone(J):{};if(!(K=this._prepareModel(K,J))){return false}if(!J.wait){this.add(K,J)}var M=this;var L=J.success;J.success=function(N,O){if(J.wait){M.add(N,J)}if(L){L(N,O,J)}};K.save(null,J);return K},parse:function(K,J){return K},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(J){return J[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(L,K){if(this._isModel(L)){if(!L.collection){L.collection=this}return L}K=K?G.clone(K):{};K.collection=this;var J=new this.model(L,K);if(!J.validationError){return J}this.trigger("invalid",this,J.validationError,K);return false},_isModel:function(J){return J instanceof m},_addReference:function(K,J){this._byId[K.cid]=K;var L=this.modelId(K.attributes);if(L!=null){this._byId[L]=K}K.on("all",this._onModelEvent,this)},_removeReference:function(K,J){if(this===K.collection){delete K.collection}K.off("all",this._onModelEvent,this)},_onModelEvent:function(L,K,N,J){if((L==="add"||L==="remove")&&N!==this){return}if(L==="destroy"){this.remove(K,J)}if(L==="change"){var M=this.modelId(K.previousAttributes());var O=this.modelId(K.attributes);if(M!==O){if(M!=null){delete this._byId[M]}if(O!=null){this._byId[O]=K}}}this.trigger.apply(this,arguments)}});var D=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample","partition"];G.each(D,function(J){if(!G[J]){return}H.prototype[J]=function(){var K=s.call(arguments);K.unshift(this.models);return G[J].apply(G,K)}});var i=["groupBy","countBy","sortBy","indexBy"];G.each(i,function(J){if(!G[J]){return}H.prototype[J]=function(M,K){var L=G.isFunction(M)?M:function(N){return N.get(M)};return G[J](this.models,L,K)}});var w=c.View=function(J){this.cid=G.uniqueId("view");J||(J={});G.extend(this,G.pick(J,y));this._ensureElement();this.initialize.apply(this,arguments)};var g=/^(\S+)\s*(.*)$/;var y=["model","collection","el","id","attributes","className","tagName","events"];G.extend(w.prototype,p,{tagName:"div",$:function(J){return this.$el.find(J)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(J){this.undelegateEvents();this._setElement(J);this.delegateEvents();return this},_setElement:function(J){this.$el=J instanceof c.$?J:c.$(J);this.el=this.$el[0]},delegateEvents:function(L){if(!(L||(L=G.result(this,"events")))){return this}this.undelegateEvents();for(var K in L){var M=L[K];if(!G.isFunction(M)){M=this[L[K]]}if(!M){continue}var J=K.match(g);this.delegate(J[1],J[2],G.bind(M,this))}return this},delegate:function(K,J,L){this.$el.on(K+".delegateEvents"+this.cid,J,L)},undelegateEvents:function(){if(this.$el){this.$el.off(".delegateEvents"+this.cid)}return this},undelegate:function(K,J,L){this.$el.off(K+".delegateEvents"+this.cid,J,L)},_createElement:function(J){return document.createElement(J)},_ensureElement:function(){if(!this.el){var J=G.extend({},G.result(this,"attributes"));if(this.id){J.id=G.result(this,"id")}if(this.className){J["class"]=G.result(this,"className")}this.setElement(this._createElement(G.result(this,"tagName")));this._setAttributes(J)}else{this.setElement(G.result(this,"el"))}},_setAttributes:function(J){this.$el.attr(J)}});c.sync=function(Q,L,K){var N=u[Q];G.defaults(K||(K={}),{emulateHTTP:c.emulateHTTP,emulateJSON:c.emulateJSON});var P={type:N,dataType:"json"};if(!K.url){P.url=G.result(L,"url")||x()}if(K.data==null&&L&&(Q==="create"||Q==="update"||Q==="patch")){P.contentType="application/json";P.data=JSON.stringify(K.attrs||L.toJSON(K))}if(K.emulateJSON){P.contentType="application/x-www-form-urlencoded";P.data=P.data?{model:P.data}:{}}if(K.emulateHTTP&&(N==="PUT"||N==="DELETE"||N==="PATCH")){P.type="POST";if(K.emulateJSON){P.data._method=N}var M=K.beforeSend;K.beforeSend=function(R){R.setRequestHeader("X-HTTP-Method-Override",N);if(M){return M.apply(this,arguments)}}}if(P.type!=="GET"&&!K.emulateJSON){P.processData=false}var J=K.error;K.error=function(S,T,R){K.textStatus=T;K.errorThrown=R;if(J){J.apply(this,arguments)}};var O=K.xhr=c.ajax(G.extend(P,K));L.trigger("request",L,O,K);return O};var u={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};c.ajax=function(){return c.$.ajax.apply(c.$,arguments)};var F=c.Router=function(J){J||(J={});if(J.routes){this.routes=J.routes}this._bindRoutes();this.initialize.apply(this,arguments)};var l=/\((.*?)\)/g;var k=/(\(\?)?:\w+/g;var E=/\*\w+/g;var f=/[\-{}\[\]+?.,\\\^$|#\s]/g;G.extend(F.prototype,p,{initialize:function(){},route:function(K,L,M){if(!G.isRegExp(K)){K=this._routeToRegExp(K)}if(G.isFunction(L)){M=L;L=""}if(!M){M=this[L]}var J=this;c.history.route(K,function(O){var N=J._extractParameters(K,O);if(J.execute(M,N,L)!==false){J.trigger.apply(J,["route:"+L].concat(N));J.trigger("route",L,N);c.history.trigger("route",J,L,N)}});return this},execute:function(L,K,J){if(L){L.apply(this,K)}},navigate:function(K,J){c.history.navigate(K,J);return this},_bindRoutes:function(){if(!this.routes){return}this.routes=G.result(this,"routes");var K,J=G.keys(this.routes);while((K=J.pop())!=null){this.route(K,this.routes[K])}},_routeToRegExp:function(J){J=J.replace(f,"\\$&").replace(l,"(?:$1)?").replace(k,function(L,K){return K?L:"([^/?]+)"}).replace(E,"([^?]*?)");return new RegExp("^"+J+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(J,K){var L=J.exec(K).slice(1);return G.map(L,function(N,M){if(M===L.length-1){return N||null}return N?decodeURIComponent(N):null})}});var b=c.History=function(){this.handlers=[];G.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var o=/^[#\/]|\s+$/g;var B=/^\/+|\/+$/g;var v=/#.*$/;b.started=false;G.extend(b.prototype,p,{interval:50,atRoot:function(){var J=this.location.pathname.replace(/[^\/]$/,"$&/");return J===this.root&&!this.location.search},getHash:function(K){var J=(K||this).location.href.match(/#(.*)$/);return J?J[1]:""},getPath:function(){var K=decodeURI(this.location.pathname+this.location.search);var J=this.root.slice(0,-1);if(!K.indexOf(J)){K=K.slice(J.length)}return K.slice(1)},getFragment:function(J){if(J==null){if(this._hasPushState||!this._wantsHashChange){J=this.getPath()}else{J=this.getHash()}}return J.replace(o,"")},start:function(K){if(b.started){throw new Error("Backbone.history has already been started")}b.started=true;this.options=G.extend({root:"/"},this.options,K);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange" in window;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);this.fragment=this.getFragment();var M=window.addEventListener||function(N,O){return attachEvent("on"+N,O)};this.root=("/"+this.root+"/").replace(B,"/");if(!this._hasHashChange&&this._wantsHashChange&&(!this._wantsPushState||!this._hasPushState)){var L=document.createElement("iframe");L.src="javascript:0";L.style.display="none";L.tabIndex=-1;var J=document.body;this.iframe=J.insertBefore(L,J.firstChild).contentWindow;this.navigate(this.fragment)}if(this._hasPushState){M("popstate",this.checkUrl,false)}else{if(this._wantsHashChange&&this._hasHashChange&&!this.iframe){M("hashchange",this.checkUrl,false)}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}}}if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.location.replace(this.root+"#"+this.getPath());return true}else{if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}}if(!this.options.silent){return this.loadUrl()}},stop:function(){var J=window.removeEventListener||function(K,L){return detachEvent("on"+K,L)};if(this._hasPushState){J("popstate",this.checkUrl,false)}else{if(this._wantsHashChange&&this._hasHashChange&&!this.iframe){J("hashchange",this.checkUrl,false)}}if(this.iframe){document.body.removeChild(this.iframe.frameElement);this.iframe=null}if(this._checkUrlInterval){clearInterval(this._checkUrlInterval)}b.started=false},route:function(J,K){this.handlers.unshift({route:J,callback:K})},checkUrl:function(K){var J=this.getFragment();if(J===this.fragment&&this.iframe){J=this.getHash(this.iframe)}if(J===this.fragment){return false}if(this.iframe){this.navigate(J)}this.loadUrl()},loadUrl:function(J){J=this.fragment=this.getFragment(J);return G.any(this.handlers,function(K){if(K.route.test(J)){K.callback(J);return true}})},navigate:function(L,K){if(!b.started){return false}if(!K||K===true){K={trigger:!!K}}var J=this.root+(L=this.getFragment(L||""));L=decodeURI(L.replace(v,""));if(this.fragment===L){return}this.fragment=L;if(L===""&&J!=="/"){J=J.slice(0,-1)}if(this._hasPushState){this.history[K.replace?"replaceState":"pushState"]({},document.title,J)}else{if(this._wantsHashChange){this._updateHash(this.location,L,K.replace);if(this.iframe&&(L!==this.getHash(this.iframe))){if(!K.replace){this.iframe.document.open().close()}this._updateHash(this.iframe.location,L,K.replace)}}else{return this.location.assign(J)}}if(K.trigger){return this.loadUrl(L)}},_updateHash:function(J,L,M){if(M){var K=J.href.replace(/(javascript:|#).*$/,"");J.replace(K+"#"+L)}else{J.hash="#"+L}}});c.history=new b;var A=function(J,L){var K=this;var N;if(J&&G.has(J,"constructor")){N=J.constructor}else{N=function(){return K.apply(this,arguments)}}G.extend(N,K,L);var M=function(){this.constructor=N};M.prototype=K.prototype;N.prototype=new M;if(J){G.extend(N.prototype,J)}N.__super__=K.prototype;return N};m.extend=H.extend=F.extend=w.extend=b.extend=A;var x=function(){throw new Error('A "url" property or function must be specified')};var e=function(L,K){var J=K.error;K.error=function(M){if(J){J(L,M,K)}L.trigger("error",L,M,K)}};return c}));if(typeof Backbone!=="undefined"){var backboneTCVersion=Backbone.noConflict();define("tc-backbone",["underscore"],function(){return backboneTCVersion})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd', location = '/com/atlassian/confluence/extra/calendar3/lib/amd/shim/wrm-amd.js' */
define("wrm",function(){return WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-init-common', location = 'com/atlassian/confluence/extra/calendar3/components/initialiser/init-resources.js' */
define("tc/init-resources",["wrm","jquery"],function(a,c){var b=function(d){return d.removeClass("spinner").removeClass("aui-icon").removeClass("aui-icon-wait")};return{requireResources:function(){a.require(["wrc!com.atlassian.confluence.extra.team-calendars.resources-batch"],function(){b(c("div.plugin-calendar"));require(["tc/calendar-plugin"],function(d){d.onTeamCalendarsLoaded()})}).fail(function(){b(c("div.plugin-calendar")).text("Failed to load calendar resources")})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-init', location = 'com/atlassian/confluence/extra/calendar3/components/initialiser/initialiser.js' */
require(["ajs","tc/init-resources"],function(a,b){var d=function(e){e("calendar-container",{type:e.types.CLASS,attached:function(){b.requireResources()},create:function(){b.requireResources()},ready:function(){b.requireResources()}})};var c=a.Meta.get("version-number").split(".");if(c[0]==="5"&&c[1]<9){d(window.skate)}else{require(["skate"],function(e){d(e)})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:blog-post-resources', location = 'com/atlassian/confluence/plugins/macros/advanced/blog-posts.js' */
define("confluence-advanced-macros/macros/advanced/blog-posts",["ajs","jquery","skate","window"],function(b,d,c,e){return{init:function(){c("blog-post",{type:c.types.CLASS,attached:function(a){a=d(a);if(a.hasClass("macro-blank-experience"))a.on("click",".create-post",function(){var a=b.Meta.get("base-url"),c=b.Meta.get("space-key");e.location=a+"/pages/createblogpost.action?spaceKey="+c})}})}}});
require("confluence/module-exporter").safeRequire("confluence-advanced-macros/macros/advanced/blog-posts",function(b){b.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.multimedia:flash-autosize', location = 'javascript/flash-autosize.js' */
AJS.toInit(function(b){function a(e,d){var c;if(d>=20){AJS.log("unable to auto size flash - took too long to load");return}c=b([]);e.each(function(){var g=b(this);var i;var f;if(this.GetVariable){if(!g.attr("height")){i=this.GetVariable("height");if(i){g.height(i)}else{c=c.add(g);return}}if(!g.attr("width")){f=this.GetVariable("width");if(f){g.width(f)}else{c=c.add(g);return}}}});if(c.length){setTimeout(function(){a(c,d+1)},100)}}a(b('embed[type="application/x-shockwave-flash"]'),0);b(window).bind("render-content-loaded",function(d,c){a(b('embed[type="application/x-shockwave-flash"]',c),0)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.view-source:view-source-menu-resources', location = 'com/atlassian/confluence/plugins/viewsource/js/viewsource.js' */
define("confluence-view-source/viewsource",["jquery","window"],function(a,b){return function(){a("#action-view-source-link").click(function(a){b.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=800, height=600, scrollbars, resizable");a.preventDefault();return!1})}});require("confluence/module-exporter").safeRequire("confluence-view-source/viewsource",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.view-storage-format:view-storage-menu-resources', location = 'com/atlassian/confluence/plugins/viewstorage/js/viewstorage.js' */
AJS.toInit(function(a){a(".view-storage-link, .view-storage-link a").click(function(b){window.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=800, height=600, scrollbars, resizable");b.preventDefault();return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-hide-traditional', location = 'jscripts/add-comment-hider.js' */
define("confluence-quick-edit/add-comment-hider",[],function(){return function(a){a("#comments-actions").hide()}});require("confluence/module-exporter").safeRequire("confluence-quick-edit/add-comment-hider",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};