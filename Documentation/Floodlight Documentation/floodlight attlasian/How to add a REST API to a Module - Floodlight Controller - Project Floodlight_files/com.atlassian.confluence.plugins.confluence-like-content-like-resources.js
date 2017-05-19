WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like-namespace.js' */
define("confluence-like/like-namespace",["confluence/legacy"],function(a){return a.Likes||{}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-like/like-namespace","Confluence.Likes");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like.js' */
define("confluence-like/like",["ajs","confluence/legacy","jquery","confluence/meta"],function(d,h,c,g){function n(b){return d.contextPath()+"/rest/likes/1.0/content/"+b+"/likes"}function q(){return 0<(g.get("remote-user")||"").length&&!1!==g.get("remote-user-has-licensed-access")}function o(b,a,f){var c=g.get("remote-user")||"",a=h.Likes.LikeSummaryFactory.getLikeSummary(b.likes,a,c);if(!a.key&&i()&&("page"==b.content_type||"blogpost"==b.content_type))a.text="Be the first to like this";c=[];
c.push(a.text);c=c.concat(a.args);(a=d.format.apply(d,c))&&0<a.length?f.html(a):f.empty();a&&(f.find(".likes").click(m.showLikeUsers),h.Binder.userHover(),"comment"==b.content_type&&f.prepend("<span class='comment-action-separator'>\u2022</span><span class='aui-icon aui-icon-small aui-iconfont-like-small'></span>"))}function l(b,a,f){var r=g.get("remote-user")||"";if(void 0===b)throw Error("type is required");if(void 0===a)throw Error("contentId is required");if(void 0===f)throw Error("contentType is required");
return function(){if("object"!==typeof this||!this.nodeType||1!==this.nodeType||"A"!==this.nodeName)throw Error("this handler should be bound to a DOM anchor element");var e=c(this),h=arguments.callee,i=e.next(".like-summary");c.ajax({type:b===j?"POST":"DELETE",url:n(a),contentType:"application/json",data:{"atlassian-token":g.get("atlassian-token")},dataType:"json",timeout:5E3}).fail(function(){var a=i.siblings(".like-error"),c;c=b===j?"Like failed":"Unlike failed";
0===a.length?i.after('<span class="like-error" title="'+c+'"></span>'):a.attr("title",c)}).success(function(){i.attr("data-liked",b===j);i.parent().find(".like-error").remove()});e.unbind("click",h).bind("click",b===j?l(p,a,f):l(j,a,f)).find(".like-button-text").html(b===j?"Unlike":"Like");k[a]=k[a]||{content_type:f,likes:[]};b===j?k[a].likes.push({user:{name:r}}):k[a].likes=c.grep(k[a].likes,function(a){return a.user.name!=r});b===j&&d.trigger("analytics",
{name:"confluence."+f+".like.create",data:{pageID:g.get("page-id")}});o(k[a],a,i);return!1}}var j=0,p=1,e,k={},i=q,s=c.Deferred(),m={getLikesCache:function(){return s.promise()},showLikeUsers:function(b){b&&b.preventDefault();var b=c(this),a=b.data("content-id");b.blur();e&&(e.remove(),e=void 0);e=new d.Dialog(400,365,"likes-dialog");e.addHeader("People who like this");e.addPanel("Panel 1","<div class='spinner-container'></div>");e.addCancel("Close",function(a){a.remove();
e=void 0});e.getCurrentPanel().setPadding(0);e.show();c.ajax({type:"GET",url:n(a),data:{expand:"user",max:50},dataType:"json"}).done(function(a){if(e.popup.element.is(":visible")){a.showFollowActions=q();e.getCurrentPanel().html(h.Templates.Likes.likesDialog(a));c("#likes-dialog").find(".likes-dialog-follow-button").click(function(){var a=c(this);c.ajax({type:"PUT",url:d.contextPath()+"/rest/likes/1.0/user/"+g.get("remote-user")+"/following?username="+a.data("username"),contentType:"application/json",
dataType:"json"}).done(function(){a.replaceWith("Following")})})}})},appendAction:function(b){var b=b.find(".comment-actions-primary").find("li.comment-action-like"),a=h.Templates.Likes.commentLikeSection({showLikeButton:i()});b.replaceWith(a)},reload:function(b){c.each(b,function(a,b){var d=c("#comment-"+a).find(".like-summary");o(b,a,d);k[a]=b});!i()&&c("#page-comments").find(".like-summary:empty").each(function(){c(this).closest(".comment-action-like").hide()});c("#page-comments .comment").each(function(){m.updateComment(c(this),
b)});s.resolve(k)},updateComment:function(b,a){var f=b.attr("id");if(!f)return!0;var e=(/^comment-(\d+)$/.exec(f)||[])[1];if(!e)throw Error('Expecting ID attribute of comment to be in format "comment-XXX", found: '+f);f=a[e]&&g.get("remote-user")&&0<c.grep(a[e].likes,function(a){return a.user.name==g.get("remote-user")}).length;b.find(".like-button").click(f?l(p,e,"comment"):l(j,e,"comment")).find(".like-button-text").html(f?"Unlike":"Like")},init:function(){var b=
c(h.Templates.Likes.likeSection({showLikeButton:i()}));g.get("page-id")&&c.ajax({type:"GET",url:n(g.get("page-id")),data:{commentLikes:!0},dataType:"json"}).done(function(a){if(g.get("remote-user")){var f=0<c.grep(a.likes,function(a){return a.user.name==g.get("remote-user")}).length,e=a.content_type;b.find(".like-button").click(f?l(p,g.get("page-id"),e):l(j,g.get("page-id"),e)).find(".like-button-text").html(f?"Unlike":"Like")}f=b.find(".like-summary");
o(a,a.content_id,f);""==f.html()&&!i()&&b.hide();c("#likes-section").html(b);k[a.content_id]=a;m.reload(a.commentLikes)});m.appendAction(c("#page-comments"))}};return m});
require("confluence/module-exporter").safeRequire("confluence-like/like",function(d){var h=require("confluence/legacy"),c=require("ajs");h.Likes.getLikesCache=d.getLikesCache;c.PageGadget||window.parent.AJS&&window.parent.AJS.PageGadget||(c.toInit(d.init),h.Likes.showLikeUsers=d.showLikeUsers,h.Likes.appendAction=d.appendAction,h.Likes.reload=d.reload,h.Likes.updateComment=d.updateComment)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like-summary-factory.js' */
define("confluence-like/like-summary-factory",["ajs","confluence/templates","jquery"],function(a,g,h){var i={"likes.summary.you":"You like this","likes.summary.1.promoted":"{0} likes this","likes.summary.2.promoted":"{0} and {1} like this","likes.summary.3.promoted":"{0}, {1} and {2} like this","likes.summary.1.non-promoted":"{0} likes this","likes.summary.x.non-promoted":"\u003ca href=\"\" {1}\u003e{0} people\u003c/a\u003e like this",
"likes.summary.you.1.promoted":"You and {0} like this","likes.summary.you.2.promoted":"You, {0} and {1} like this","likes.summary.you.3.promoted":"You, {0}, {1} and {2} like this","likes.summary.you.1.non-promoted":"You and {0} like this","likes.summary.you.x.non-promoted":"You and \u003ca href=\"\" {1}\u003e{0} others\u003c/a\u003e like this","likes.summary.1.promoted.1.non-promoted":"{0} and {1} like this",
"likes.summary.1.promoted.x.non-promoted":"{0} and \u003ca href=\"\" {2}\u003e{1} others\u003c/a\u003e like this","likes.summary.2.promoted.1.non-promoted":"{0}, {1} and {2} like this","likes.summary.2.promoted.x.non-promoted":"{0}, {1} and \u003ca href=\"\" {3}\u003e{2} others\u003c/a\u003e like this","likes.summary.3.promoted.1.non-promoted":"{0}, {1}, {2} and {3} like this","likes.summary.3.promoted.x.non-promoted":"{0}, {1}, {2} and \u003ca href=\"\" {4}\u003e{3} others\u003c/a\u003e like this","likes.summary.you.1.promoted.1.non-promoted":"You, {0} and {1} like this",
"likes.summary.you.1.promoted.x.non-promoted":"You, {0} and \u003ca href=\"\" {2}\u003e{1} others\u003c/a\u003e like this","likes.summary.you.2.promoted.1.non-promoted":"You, {0}, {1} and {2} like this","likes.summary.you.2.promoted.x.non-promoted":"You, {0}, {1} and \u003ca href=\"\" {3}\u003e{2} others\u003c/a\u003e like this","likes.summary.you.3.promoted.1.non-promoted":"You, {0}, {1}, {2} and {3} like this","likes.summary.you.3.promoted.x.non-promoted":"You, {0}, {1}, {2} and \u003ca href=\"\" {4}\u003e{3} others\u003c/a\u003e like this"};
return{getLikeSummary:function(a,c,k){if(!a||0===a.length)return{key:"",text:""};if(!c)throw Error("contentId is required.");var j,e=[],f=[];h.each(a,function(a,b){b.user&&b.user.name==k?j=b:3>e.length&&b.user.followedByRemoteUser?e.push(b):f.push(b)});var a=["likes.summary"],d=[];null!=j&&a.push(".you");0<e.length&&(a.push("."),a.push(e.length),a.push(".promoted"),h.each(e,function(a,b){d.push(g.Likes.userLink(b))}));1===f.length?(a.push(".1.non-promoted"),d.push(g.Likes.userLink(f[0]))):1<f.length&&
(a.push(".x.non-promoted"),d.push(f.length),d.push('class="likes" data-content-id="'+c+'"'));c=a.join("");return{key:c,args:0===d.length?void 0:d,text:c in i?i[c]:""}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-like/like-summary-factory","Confluence.Likes.LikeSummaryFactory");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/templates/com/atlassian/confluence/plugins/like/soy/like.soy' */
// This file was automatically generated from like.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Likes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Likes == 'undefined') { Confluence.Templates.Likes = {}; }


Confluence.Templates.Likes.likeButton = function(opt_data, opt_ignored) {
  return '<a href="" class="like-button">' + ((opt_data.useIcon) ? '<span class="aui-icon aui-icon-small aui-iconfont-like"></span>' : '') + '<span class="like-button-text">' + soy.$$escapeHtml("Like") + '</span></a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.likeButton.soyTemplateName = 'Confluence.Templates.Likes.likeButton';
}


Confluence.Templates.Likes.likeSection = function(opt_data, opt_ignored) {
  return '<div>' + ((opt_data.showLikeButton) ? Confluence.Templates.Likes.likeButton({useIcon: true}) : '') + '<span class="like-summary"></span></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.likeSection.soyTemplateName = 'Confluence.Templates.Likes.likeSection';
}


Confluence.Templates.Likes.commentLikeSection = function(opt_data, opt_ignored) {
  return '<li class="comment-action-like">' + ((opt_data.showLikeButton) ? Confluence.Templates.Likes.likeButton({useIcon: false}) : '') + '<span class="like-summary"></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.commentLikeSection.soyTemplateName = 'Confluence.Templates.Likes.commentLikeSection';
}


Confluence.Templates.Likes.likesDialog = function(opt_data, opt_ignored) {
  var output = '<div id="likes-dialog-body"><ol>';
  var likeList26 = opt_data.likes;
  var likeListLen26 = likeList26.length;
  for (var likeIndex26 = 0; likeIndex26 < likeListLen26; likeIndex26++) {
    var likeData26 = likeList26[likeIndex26];
    output += '<li><div class="avatar-container"><a href="' + soy.$$escapeHtml(likeData26.user.url) + '"><img class="like-user-avatar" src="' + soy.$$escapeHtml(likeData26.user.avatarUrl) + '"></a></div><div class="like-user"><a class="like-user-link" href="' + soy.$$escapeHtml(likeData26.user.url) + '">' + soy.$$escapeHtml(likeData26.user.fullName) + '</a></div>' + ((opt_data.showFollowActions) ? '<div class="follow-button-container aui-toolbar"><ul class="toolbar-group"><li class="toolbar-item">' + ((likeData26.user.followedByRemoteUser) ? soy.$$escapeHtml("Following") : '<button data-username="' + soy.$$escapeHtml(likeData26.user.name) + '" class="likes-dialog-follow-button toolbar-trigger">' + soy.$$escapeHtml("Follow") + '</button>') + '</li></ul></div>' : '') + '</li>';
  }
  output += '</ol></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.likesDialog.soyTemplateName = 'Confluence.Templates.Likes.likesDialog';
}


Confluence.Templates.Likes.userLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.user.url) + '" class="confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.user.name) + '">' + soy.$$escapeHtml(opt_data.user.fullName) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.userLink.soyTemplateName = 'Confluence.Templates.Likes.userLink';
}

}catch(e){WRMCB(e)};