webpackJsonp([1],{108:function(e,t,i){i(109),e.exports="ngSanitize"},109:function(e,t){!function(e,t){"use strict";var i,n,o,r,s,a,l,c,u,p=t.$$minErr("$sanitize");t.module("ngSanitize",[]).provider("$sanitize",function(){var d=!1;this.$get=["$$sanitizeUri",function(e){return d&&n(x,_),function(t){var i=[];return c(t,u(i,function(t,i){return!/^unsafe:/.test(e(t,i))})),i.join("")}}],this.enableSvg=function(e){return r(e)?(d=e,this):d},i=t.bind,n=t.extend,o=t.forEach,r=t.isDefined,s=t.lowercase,a=t.noop,c=function(e,t){null==e?e="":"string"!=typeof e&&(e=""+e);var i=j(e);if(!i)return"";var n=5;do{if(0===n)throw p("uinput","Failed to sanitize html because the input is unstable");n--,e=i.innerHTML,i=j(e)}while(e!==i.innerHTML);for(var o=i.firstChild;o;){switch(o.nodeType){case 1:t.start(o.nodeName.toLowerCase(),N(o.attributes));break;case 3:t.chars(o.textContent)}var r;if(!((r=o.firstChild)||(1===o.nodeType&&t.end(o.nodeName.toLowerCase()),r=R("nextSibling",o))))for(;null==r&&(o=R("parentNode",o))!==i;)r=R("nextSibling",o),1===o.nodeType&&t.end(o.nodeName.toLowerCase());o=r}for(;o=i.firstChild;)i.removeChild(o)},u=function(e,t){var n=!1,r=i(e,e.push);return{start:function(e,i){e=s(e),!n&&M[e]&&(n=e),n||!0!==x[e]||(r("<"),r(e),o(i,function(i,n){var o=s(n),a="img"===e&&"src"===o||"background"===o;!0!==O[o]||!0===C[o]&&!t(i,a)||(r(" "),r(n),r('="'),r(A(i)),r('"'))}),r(">"))},end:function(e){e=s(e),n||!0!==x[e]||!0===g[e]||(r("</"),r(e),r(">")),e==n&&(n=!1)},chars:function(e){n||r(A(e))}}},l=e.Node.prototype.contains||function(e){return!!(16&this.compareDocumentPosition(e))};var h=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,f=/([^#-~ |!])/g,g=S("area,br,col,hr,img,wbr"),m=S("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),y=S("rp,rt"),v=n({},y,m),b=n({},m,S("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),w=n({},y,S("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),_=S("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),M=S("script,style"),x=n({},g,b,w,v),C=S("background,cite,href,longdesc,src,xlink:href,xml:base"),T=S("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),k=S("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),O=n({},C,k,T);function S(e,t){var i,n={},o=e.split(",");for(i=0;i<o.length;i++)n[t?s(o[i]):o[i]]=!0;return n}var j=function(e,t){var i;if(!t||!t.implementation)throw p("noinert","Can't create an inert html document");var n=((i=t.implementation.createHTMLDocument("inert")).documentElement||i.getDocumentElement()).querySelector("body");return n.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>',n.querySelector("svg")?(n.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',n.querySelector("svg img")?function(t){t="<remove></remove>"+t;try{var i=(new e.DOMParser).parseFromString(t,"text/html").body;return i.firstChild.remove(),i}catch(e){return}}:function(e){return n.innerHTML=e,t.documentMode&&E(n),n}):function(t){t="<remove></remove>"+t;try{t=encodeURI(t)}catch(e){return}var i=new e.XMLHttpRequest;i.responseType="document",i.open("GET","data:text/html;charset=utf-8,"+t,!1),i.send(null);var n=i.response.body;return n.firstChild.remove(),n}}(e,e.document);function N(e){for(var t={},i=0,n=e.length;i<n;i++){var o=e[i];t[o.name]=o.value}return t}function A(e){return e.replace(/&/g,"&amp;").replace(h,function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"}).replace(f,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function E(t){for(;t;){if(t.nodeType===e.Node.ELEMENT_NODE)for(var i=t.attributes,n=0,o=i.length;n<o;n++){var r=i[n],s=r.name.toLowerCase();"xmlns:ns1"!==s&&0!==s.lastIndexOf("ns1:",0)||(t.removeAttributeNode(r),n--,o--)}var a=t.firstChild;a&&E(a),t=R("nextSibling",t)}}function R(e,t){var i=t[e];if(i&&l.call(t,i))throw p("elclob","Failed to sanitize html because the element is clobbered: {0}",t.outerHTML||t.outerText);return i}}).info({angularVersion:"1.6.9"}),t.module("ngSanitize").filter("linky",["$sanitize",function(e){var i=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,n=/^mailto:/i,o=t.$$minErr("linky"),r=t.isDefined,s=t.isFunction,l=t.isObject,c=t.isString;return function(t,p,d){if(null==t||""===t)return t;if(!c(t))throw o("notstring","Expected string but received: {0}",t);for(var h,f,g,m=s(d)?d:l(d)?function(){return d}:function(){return{}},y=t,v=[];h=y.match(i);)f=h[0],h[2]||h[4]||(f=(h[3]?"http://":"mailto:")+f),g=h.index,b(y.substr(0,g)),w(f,h[0].replace(n,"")),y=y.substring(g+h[0].length);return b(y),e(v.join(""));function b(e){var t,i;e&&v.push((t=e,u(i=[],a).chars(t),i.join("")))}function w(e,t){var i,n=m(e);for(i in v.push("<a "),n)v.push(i+'="'+n[i]+'" ');!r(p)||"target"in n||v.push('target="',p,'" '),v.push('href="',e.replace(/"/g,"&quot;"),'">'),b(t),v.push("</a>")}}}])}(window,window.angular)},146:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(i(3)),o=(r(i(1)),r(i(147)));function r(e){return e&&e.__esModule?e:{default:e}}var s=function(e,t,i,n){var o=this;this.scope=t.$new(!0),this.scope.$watch(function(){return o.scope.open},function(e){!e&&o.autoDestroy_&&o.timeout_(function(){o.destroy()})}),this.sce_=i,this.timeout_=n,this.element_=angular.element("<div ngeo-popup></div>"),this.autoDestroy_=!1,e(this.element_)(this.scope),angular.element(document.body).append(this.element_)};s.prototype.getOpen=function(){return this.scope.open},s.prototype.setOpen=function(e){this.scope.open=e},s.prototype.destroy=function(){this.scope.$destroy(),this.element_.remove()},s.prototype.setTitle=function(e){var t=this.sce_.trustAsHtml(e);this.scope.title=t},s.prototype.setContent=function(e,t){this.scope.content=t?this.sce_.trustAsHtml(e):e},s.prototype.setUrl=function(e){var t=this.sce_.trustAsHtml('<iframe src="'+e+'" width="100%" height="100%"></iframe>');this.setContent(t)},s.prototype.setWidth=function(e){this.element_.width(e)},s.prototype.setHeight=function(e){this.element_.height(e)},s.prototype.setSize=function(e,t){this.setWidth(e),this.setHeight(t)},s.prototype.setAutoDestroy=function(e){this.autoDestroy_=e},s.prototype.addClass=function(e){this.element_.addClass(e)},s.prototype.open=function(e){e.url?this.setUrl(e.url):e.content?this.setContent(e.content):n.default.fail('ngeo.message.Popup options requirest "url" or "content".'),void 0!==e.autoDestroy&&this.setAutoDestroy(e.autoDestroy),void 0!==e.cls&&this.addClass(e.cls),void 0!==e.height&&this.setHeight(e.height),void 0!==e.title&&this.setTitle(e.title),void 0!==e.width&&this.setWidth(e.width),this.setOpen(!0)},(s.Factory=function(e,t,i,n){return function(){return new s(e,t,i,n)}}).$inject=["$compile","$rootScope","$sce","$timeout"],(s.module=angular.module("ngeoCreatePopup",[o.default.name])).factory("ngeoCreatePopup",s.Factory),t.default=s},147:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=i(1),r=(n=o)&&n.__esModule?n:{default:n};i(108);var s=angular.module("ngeoPopup",["ngSanitize"]);s.value("ngeoPopupTemplateUrl",function(e,t){var i=t.ngeoPopupTemplateurl;return void 0!==i?i:r.default.baseModuleTemplateUrl+"/message/popupcomponent.html"}),s.directive_=function(e){return{restrict:"A",templateUrl:e,link:function(e,t,i){t.addClass("popover"),e.close=function(e){e&&(e.stopPropagation(),e.preventDefault()),t.addClass("hidden")},e.$watch("open",function(e,i){t.css("display",e?"block":"none")})}}},s.directive_.$inject=["ngeoPopupTemplateUrl"],s.directive("ngeoPopup",s.directive_),t.default=s},440:function(e,t,i){i(10),e.exports=i(441)},441:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),i(442),i(11);var n=u(i(443)),o=u(i(83)),r=u(i(13)),s=u(i(18)),a=u(i(15)),l=u(i(5)),c=(u(i(1)),u(i(17)));function u(e){return e&&e.__esModule?e:{default:e}}var p={};p.module=angular.module("app",[c.default.name,n.default.module.name]),p.MainController=function(t){this.disclaimer=t,this.map=new r.default({layers:[new a.default({source:new l.default})],view:new s.default({center:[0,0],zoom:4})}),this.successMsg_="Disclaimer with success style",this.infoMsg_="Disclaimer with info style",this.warningMsg_="Disclaimer with warning style",this.errorMsg_="Disclaimer with error style",this.inMapMsgs_=["Disclaimer inside the map","An other message ","Map contributors","This is a long message inside a map"],e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},p.MainController.$inject=["ngeoDisclaimer"],p.MainController.prototype.success=function(){this.disclaimer.success(this.successMsg_)},p.MainController.prototype.info=function(){this.disclaimer.info(this.infoMsg_)},p.MainController.prototype.warn=function(){this.disclaimer.warn(this.warningMsg_)},p.MainController.prototype.error=function(){this.disclaimer.error(this.errorMsg_)},p.MainController.prototype.inMap=function(){this.inMapMsgs_.forEach(function(e){this.disclaimer.alert({msg:e,target:angular.element("#disclaimers-in-map"),type:o.default.Type.WARNING})},this)},p.MainController.prototype.closeAll=function(){this.disclaimer.close({msg:this.successMsg_,type:o.default.Type.SUCCESS}),this.disclaimer.close({msg:this.infoMsg_,type:o.default.Type.INFORMATION}),this.disclaimer.close({msg:this.warningMsg_,type:o.default.Type.WARNING}),this.disclaimer.close({msg:this.errorMsg_,type:o.default.Type.ERROR}),this.inMapMsgs_.forEach(function(e){this.disclaimer.close({msg:e,type:o.default.Type.WARNING})},this)},p.module.controller("MainController",p.MainController),t.default=p}).call(t,i(29))},442:function(e,t){},443:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(i(3)),o=(a(i(1)),a(i(146))),r=a(i(83)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(i(0));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e,t,i){this.sce_=e,this.gettextCatalog_=t,this.createPopup_=i,r.default.call(this);var n=angular.element('<div class="ngeo-disclaimer"></div>');angular.element(document.body).append(n),this.container_=n,this.messages_={}};l.$inject=["$sce","gettextCatalog","ngeoCreatePopup"],l.$inject=["$sce","gettextCatalog","ngeoCreatePopup"],s.inherits(l,r.default),l.prototype.alert=function(e){this.show(e)},l.prototype.close=function(e){this.getMessageObjects(e).forEach(this.closeMessage_,this)},l.prototype.showMessage=function(e){var t=this,i=this.gettextCatalog_,o=e.type;n.default.assertString(o,"Type should be set.");var s=this.getMessageUid_(e);if(void 0===this.messages_[s])if(!0===e.popup){var a=this.createPopup_(),l=this.sce_.trustAsHtml(e.msg);a.open({autoDestroy:!0,content:l,title:"&nbsp;"}),a.scope.$watch("open",function(i,n){i||t.closeMessage_(e)}),this.messages_[s]=a}else{var c=["alert","fade","alert-dismissible"];switch(o){case r.default.Type.ERROR:c.push("alert-danger");break;case r.default.Type.INFORMATION:c.push("alert-info");break;case r.default.Type.SUCCESS:c.push("alert-success");break;case r.default.Type.WARNING:c.push("alert-warning")}var u=angular.element('<div role="alert" class="'+c.join(" ")+'"></div>'),p=angular.element('<button type="button" class="close" data-dismiss="alert" aria-label="'+i.getString("Close")+'"><span aria-hidden="true" class="fa fa-times"></span></button>'),d=angular.element("<span />").html(e.msg);u.append(p).append(d);(e.target?angular.element(e.target):this.container_).append(u),u.addClass("in"),u.on("closed.bs.alert",function(){t.closeMessage_(e)}),this.messages_[s]=u}},l.prototype.getMessageUid_=function(e){return e.msg+"-"+e.type},l.prototype.closeMessage_=function(e){var t=this.getMessageUid_(e),i=this.messages_[t];void 0!==i&&(i instanceof o.default?i.getOpen()&&i.setOpen(!1):i.hasClass("in")&&i.alert("close"),delete this.messages_[t])},(l.module=angular.module("ngeoDisclaimer",[o.default.module.name])).service("ngeoDisclaimer",l),t.default=l},5:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=i(6);const r=function(e){const t=e||{};let i;i=void 0!==t.attributions?t.attributions:[r.ATTRIBUTION];const n=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",s=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";o.a.call(this,{attributions:i,cacheSize:t.cacheSize,crossOrigin:n,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:s,wrapX:t.wrapX})};Object(n.inherits)(r,o.a),r.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=r},6:function(e,t,i){"use strict";var n=i(0),o=i(20),r=i(19);const s=function(e){const t=e||{},i=void 0!==t.projection?t.projection:"EPSG:3857",n=void 0!==t.tileGrid?t.tileGrid:r.a.createXYZ({extent:r.a.extentFromProjection(i),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});o.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:i,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:n,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(n.inherits)(s,o.a),t.a=s},83:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){};n.prototype.showMessage=function(e){},n.prototype.show=function(e){this.getMessageObjects(e).forEach(this.showMessage,this)},n.prototype.error=function(e){this.show(this.getMessageObjects(e,n.Type.ERROR))},n.prototype.info=function(e){this.show(this.getMessageObjects(e,n.Type.INFORMATION))},n.prototype.success=function(e){this.show(this.getMessageObjects(e,n.Type.SUCCESS))},n.prototype.warn=function(e){this.show(this.getMessageObjects(e,n.Type.WARNING))},n.prototype.getMessageObjects=function(e,t){var i=[],o=null,r=n.Type.INFORMATION;return"string"==typeof e?i.push({msg:e,type:void 0!==t?t:r}):Array.isArray(e)?e.forEach(function(n){"string"==typeof e?o={msg:n,type:void 0!==t?t:r}:(o=n,void 0!==t&&(o.type=t)),i.push(o)},this):(o=e,void 0!==t&&(o.type=t),void 0===o.type&&(o.type=r),i.push(o)),i},n.Type={ERROR:"error",INFORMATION:"information",SUCCESS:"success",WARNING:"warning"},t.default=n}},[440]);
//# sourceMappingURL=disclaimer.e19446885c99538524a5.js.map