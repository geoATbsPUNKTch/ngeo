webpackJsonp([7],{534:function(t,e,i){i(15),i(16),t.exports=i(535)},535:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),i(536),i(95);var o=m(i(28)),n=m(i(316)),l=m(i(1)),r=m(i(77)),s=m(i(126)),a=m(i(44)),p=m(i(93)),h=m(i(78)),c=m(i(17)),u=m(i(21)),d=m(i(14)),f=m(i(7));function m(t){return t&&t.__esModule?t:{default:t}}var v={};v.module=angular.module("gmfapp",["gettext",n.default.name,o.default.name,s.default.name,a.default.module.name,h.default.module.name]),v.module.value("ngeoExportFeatureFormats",[a.default.FormatType.KML,a.default.FormatType.GPX]),v.module.constant("defaultTheme","Demo"),v.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),v.MainController=function(e,i,o,n,r){var s=this;this.scope_=e;var a=new u.default({center:[0,0],zoom:3});i.setProjection(l.default.assert(a.getProjection())),r.getFeatureOverlay().setFeatures(o),this.map=new c.default({layers:[new d.default({source:new f.default})],view:a}),this.drawFeatureActive=!0;var h=new p.default(this,"drawFeatureActive");n.registerTool("mapTools",h,!0),this.pointerMoveActive=!1;var m=new p.default(this,"pointerMoveActive");n.registerTool("mapTools",m,!1),e.$watch(function(){return s.pointerMoveActive},function(e){e?s.map.on("pointermove",s.handleMapPointerMove_,s):(s.map.un("pointermove",s.handleMapPointerMove_,s),t("#pointermove-feature").html(""))}),t('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},v.MainController.$inject=["$scope","ngeoFeatureHelper","ngeoFeatures","ngeoToolActivateMgr","ngeoFeatureOverlayMgr"],v.MainController.prototype.handleMapPointerMove_=function(e){var i=e.pixel,o=this.map.forEachFeatureAtPixel(i,function(t){return t});t("#pointermove-feature").html(o?o.get(r.default.NAME):"None"),this.scope_.$apply()},v.module.controller("MainController",v.MainController),e.default=v}).call(e,i(4))},536:function(t,e){},7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(0),n=i(23),l=i(24);const r=function(t){const e=t||{},i=void 0!==e.projection?e.projection:"EPSG:3857",o=void 0!==e.tileGrid?e.tileGrid:Object(l.a)({extent:Object(l.b)(i),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});n.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,opaque:e.opaque,projection:i,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:o,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};Object(o.inherits)(r,n.a);var s=r;const a=function(t){const e=t||{};let i;i=void 0!==e.attributions?e.attributions:[a.ATTRIBUTION];const o=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",n=void 0!==e.url?e.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";s.call(this,{attributions:i,cacheSize:e.cacheSize,crossOrigin:o,opaque:void 0===e.opaque||e.opaque,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:n,wrapX:e.wrapX})};Object(o.inherits)(a,s),a.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';e.default=a},95:function(t,e,i){var o,n,l,r;r=function(t){return t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var o=(e.attr("aria-describedby")||"").split(/\s+/);o.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(o.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),o=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,o);-1!==n&&o.splice(n,1),e.removeData("ui-tooltip-id"),(o=t.trim(o.join(" ")))?e.attr("aria-describedby",o):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var o=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){o._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,o){var n=t.Event("blur");n.target=n.currentTarget=o.element[0],e.close(n,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);if(e.is("[title]"))return e.data("ui-tooltip-title",e.attr("title")).removeAttr("title")}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,o=t(e?e.target:this.element).closest(this.options.items);o.length&&!o.data("ui-tooltip-id")&&(o.attr("title")&&o.data("ui-tooltip-title",o.attr("title")),o.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&o.parents().each(function(){var e,o=t(this);o.data("ui-tooltip-open")&&((e=t.Event("blur")).target=e.currentTarget=this,i.close(e,!0)),o.attr("title")&&(o.uniqueId(),i.parents[this.id]={element:this,title:o.attr("title")},o.attr("title",""))}),this._registerCloseHandlers(e,o),this._updateContent(o,e))},_updateContent:function(t,e){var i,o=this.options.content,n=this,l=e?e.type:null;if("string"==typeof o||o.nodeType||o.jquery)return this._open(e,t,o);(i=o.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=l),this._open(e,t,i))})}))&&this._open(e,t,i)},_open:function(e,i,o){var n,l,r,s,a=t.extend({},this.options.position);function p(t){a.of=t,l.is(":hidden")||l.position(a)}o&&((n=this._find(i))?n.tooltip.find(".ui-tooltip-content").html(o):(i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),n=this._tooltip(i),l=n.tooltip,this._addDescribedBy(i,l.attr("id")),l.find(".ui-tooltip-content").html(o),this.liveRegion.children().hide(),(s=t("<div>").html(l.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),s.removeAttr("id").find("[id]").removeAttr("id"),s.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:p}),p(e)):l.position(t.extend({of:i},this.options.position)),l.hide(),this._show(l,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){l.is(":visible")&&(p(a.of),clearInterval(r))},t.fx.interval)),this._trigger("open",e,{tooltip:l})))},_registerCloseHandlers:function(e,i){var o={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var o=t.Event(e);o.currentTarget=i[0],this.close(o,!0)}}};i[0]!==this.element[0]&&(o.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(o.mouseleave="close"),e&&"focusin"!==e.type||(o.focusout="close"),this._on(!0,i,o)},close:function(e){var i,o=this,n=t(e?e.currentTarget:this.element),l=this._find(n);l?(i=l.tooltip,l.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),l.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){o._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete o.parents[e]}),l.closing=!0,this._trigger("close",e,{tooltip:i}),l.hiding||(l.closing=!1))):n.removeData("ui-tooltip-open")},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),o=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(o,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,o){var n=t.Event("blur"),l=o.element;n.target=n.currentTarget=l[0],e.close(n,!0),t("#"+i).remove(),l.data("ui-tooltip-title")&&(l.attr("title")||l.attr("title",l.data("ui-tooltip-title")),l.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),!1!==t.uiBackCompat&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip},n=[i(4),i(125),i(96),i(97),i(13),i(71)],void 0===(l="function"==typeof(o=r)?o.apply(e,n):o)||(t.exports=l)},96:function(t,e,i){var o,n,l,r;r=function(t){return function(){var e,i=Math.max,o=Math.abs,n=/left|center|right/,l=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,a=/%$/,p=t.fn.position;function h(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function c(e,i){return parseInt(t.css(e,i),10)||0}t.position={scrollbarWidth:function(){if(void 0!==e)return e;var i,o,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),l=n.children()[0];return t("body").append(n),i=l.offsetWidth,n.css("overflow","scroll"),i===(o=l.offsetWidth)&&(o=n[0].clientWidth),n.remove(),e=i-o},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),o=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth;return{width:"scroll"===o||"auto"===o&&e.height<e.element[0].scrollHeight?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),o=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:o,isDocument:n,offset:!o&&!n?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return p.apply(this,arguments);e=t.extend({},e);var a,u,d,f,m,v,g,y,w=t(e.of),b=t.position.getWithinInfo(e.within),_=t.position.getScrollInfo(b),T=(e.collision||"flip").split(" "),x={};return v=9===(y=(g=w)[0]).nodeType?{width:g.width(),height:g.height(),offset:{top:0,left:0}}:t.isWindow(y)?{width:g.width(),height:g.height(),offset:{top:g.scrollTop(),left:g.scrollLeft()}}:y.preventDefault?{width:0,height:0,offset:{top:y.pageY,left:y.pageX}}:{width:g.outerWidth(),height:g.outerHeight(),offset:g.offset()},w[0].preventDefault&&(e.at="left top"),u=v.width,d=v.height,f=v.offset,m=t.extend({},f),t.each(["my","at"],function(){var t,i,o=(e[this]||"").split(" ");1===o.length&&(o=n.test(o[0])?o.concat(["center"]):l.test(o[0])?["center"].concat(o):["center","center"]),o[0]=n.test(o[0])?o[0]:"center",o[1]=l.test(o[1])?o[1]:"center",t=r.exec(o[0]),i=r.exec(o[1]),x[this]=[t?t[0]:0,i?i[0]:0],e[this]=[s.exec(o[0])[0],s.exec(o[1])[0]]}),1===T.length&&(T[1]=T[0]),"right"===e.at[0]?m.left+=u:"center"===e.at[0]&&(m.left+=u/2),"bottom"===e.at[1]?m.top+=d:"center"===e.at[1]&&(m.top+=d/2),a=h(x.at,u,d),m.left+=a[0],m.top+=a[1],this.each(function(){var n,l,r=t(this),s=r.outerWidth(),p=r.outerHeight(),v=c(this,"marginLeft"),g=c(this,"marginTop"),y=s+v+c(this,"marginRight")+_.width,W=p+g+c(this,"marginBottom")+_.height,M=t.extend({},m),A=h(x.my,r.outerWidth(),r.outerHeight());"right"===e.my[0]?M.left-=s:"center"===e.my[0]&&(M.left-=s/2),"bottom"===e.my[1]?M.top-=p:"center"===e.my[1]&&(M.top-=p/2),M.left+=A[0],M.top+=A[1],n={marginLeft:v,marginTop:g},t.each(["left","top"],function(i,o){t.ui.position[T[i]]&&t.ui.position[T[i]][o](M,{targetWidth:u,targetHeight:d,elemWidth:s,elemHeight:p,collisionPosition:n,collisionWidth:y,collisionHeight:W,offset:[a[0]+A[0],a[1]+A[1]],my:e.my,at:e.at,within:b,elem:r})}),e.using&&(l=function(t){var n=f.left-M.left,l=n+u-s,a=f.top-M.top,h=a+d-p,c={target:{element:w,left:f.left,top:f.top,width:u,height:d},element:{element:r,left:M.left,top:M.top,width:s,height:p},horizontal:l<0?"left":n>0?"right":"center",vertical:h<0?"top":a>0?"bottom":"middle"};u<s&&o(n+l)<u&&(c.horizontal="center"),d<p&&o(a+h)<d&&(c.vertical="middle"),i(o(n),o(l))>i(o(a),o(h))?c.important="horizontal":c.important="vertical",e.using.call(this,t,c)}),r.offset(t.extend(M,{using:l}))})},t.ui.position={fit:{left:function(t,e){var o,n=e.within,l=n.isWindow?n.scrollLeft:n.offset.left,r=n.width,s=t.left-e.collisionPosition.marginLeft,a=l-s,p=s+e.collisionWidth-r-l;e.collisionWidth>r?a>0&&p<=0?(o=t.left+a+e.collisionWidth-r-l,t.left+=a-o):t.left=p>0&&a<=0?l:a>p?l+r-e.collisionWidth:l:a>0?t.left+=a:p>0?t.left-=p:t.left=i(t.left-s,t.left)},top:function(t,e){var o,n=e.within,l=n.isWindow?n.scrollTop:n.offset.top,r=e.within.height,s=t.top-e.collisionPosition.marginTop,a=l-s,p=s+e.collisionHeight-r-l;e.collisionHeight>r?a>0&&p<=0?(o=t.top+a+e.collisionHeight-r-l,t.top+=a-o):t.top=p>0&&a<=0?l:a>p?l+r-e.collisionHeight:l:a>0?t.top+=a:p>0?t.top-=p:t.top=i(t.top-s,t.top)}},flip:{left:function(t,e){var i,n,l=e.within,r=l.offset.left+l.scrollLeft,s=l.width,a=l.isWindow?l.scrollLeft:l.offset.left,p=t.left-e.collisionPosition.marginLeft,h=p-a,c=p+e.collisionWidth-s-a,u="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,d="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];h<0?((i=t.left+u+d+f+e.collisionWidth-s-r)<0||i<o(h))&&(t.left+=u+d+f):c>0&&((n=t.left-e.collisionPosition.marginLeft+u+d+f-a)>0||o(n)<c)&&(t.left+=u+d+f)},top:function(t,e){var i,n,l=e.within,r=l.offset.top+l.scrollTop,s=l.height,a=l.isWindow?l.scrollTop:l.offset.top,p=t.top-e.collisionPosition.marginTop,h=p-a,c=p+e.collisionHeight-s-a,u="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,d="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,f=-2*e.offset[1];h<0?((n=t.top+u+d+f+e.collisionHeight-s-r)<0||n<o(h))&&(t.top+=u+d+f):c>0&&((i=t.top-e.collisionPosition.marginTop+u+d+f-a)>0||o(i)<c)&&(t.top+=u+d+f)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position},n=[i(4),i(13)],void 0===(l="function"==typeof(o=r)?o.apply(e,n):o)||(t.exports=l)},97:function(t,e,i){var o,n,l,r;r=function(t){return t.fn.extend({uniqueId:(e=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}});var e},n=[i(4),i(13)],void 0===(l="function"==typeof(o=r)?o.apply(e,n):o)||(t.exports=l)}},[534]);
//# sourceMappingURL=drawfeature.56b7b2cf66d6f6985584.js.map