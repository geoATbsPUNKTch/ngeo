webpackJsonp([5],{499:function(e,t,r){r(10),e.exports=r(500)},5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r(6);const a=function(e){const t=e||{};let r;r=void 0!==t.attributions?t.attributions:[a.ATTRIBUTION];const o=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",i=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";n.a.call(this,{attributions:r,cacheSize:t.cacheSize,crossOrigin:o,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:i,wrapX:t.wrapX})};Object(o.inherits)(a,n.a),a.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=a},500:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(501),r(11);y(r(1));var o=y(r(502)),n=y(r(17)),a=y(r(178)),i=y(r(104)),l=y(r(311)),s=y(r(13)),u=(y(r(22)),y(r(69))),d=y(r(15)),c=y(r(28)),p=y(r(5)),f=y(r(26)),h=y(r(43)),g=y(r(23));function y(e){return e&&e.__esModule?e:{default:e}}var _={};_.module=angular.module("app",[n.default.name,a.default.name,l.default.name]),_.mapComponent={controller:"AppMapController as ctrl",bindings:{map:"=appMap"},template:"<div ngeo-map=ctrl.map></div>"},_.module.component("appMap",_.mapComponent),_.MapComponentController=function(e,t){this.map,this.ngeoLocation_=e,this.ngeoDebounce_=t},_.MapComponentController.$inject=["ngeoLocation","ngeoDebounce"],_.module.controller("AppMapController",_.MapComponentController),_.MapComponentController.prototype.$onInit=function(){var e=this,t=this.map.getView(),r=this.ngeoLocation_.getParam("z");r=void 0!==r?+r:4;var o=this.ngeoLocation_.getParam("x"),n=this.ngeoLocation_.getParam("y"),a=void 0!==o&&void 0!==n?[+o,+n]:[0,0];t.setCenter(a),t.setZoom(r),this.ngeoLocation_.updateParams({z:r,x:Math.round(a[0]),y:Math.round(a[1])}),t.on("propertychange",this.ngeoDebounce_(function(r){var o=t.getCenter(),n={z:t.getZoom(),x:Math.round(o[0]),y:Math.round(o[1])};e.ngeoLocation_.updateParams(n)},300,!0))},_.drawComponent={controller:"AppDrawController as ctrl",bindings:{map:"=appDrawMap",layer:"=appDrawLayer"},template:'<label>Enable drawing:<input type="checkbox" ng-model="ctrl.interaction.active" /></label><br><button ng-click="ctrl.clearLayer()">Clear layer</button>'},_.module.component("appDraw",_.drawComponent),_.DrawComponentController=function(e,t){this.map,this.layer,this.ngeoLocation_=t,this.scope_=e,this.featureSeq_=0,this.interaction},_.DrawComponentController.$inject=["$scope","ngeoLocation"],_.DrawComponentController.prototype.$onInit=function(){var e=this,t=this.layer.getSource();this.interaction=new u.default({type:"LineString",source:t}),this.interaction.setActive(!1),this.map.addInteraction(this.interaction),i.default.interaction(this.interaction),this.interaction.on("drawend",function(e){e.feature.set("id",++this.featureSeq_)},this);var r=new o.default;t.on("addfeature",function(o){o.feature.setStyle(new g.default({stroke:new h.default({color:[255,0,0,1],width:2})}));var n=t.getFeatures(),a=r.writeFeatures(n);e.scope_.$applyAsync(function(){e.ngeoLocation_.updateParams({features:a})})});var n=this.ngeoLocation_.getParam("features");if(void 0!==n){var a=r.readFeatures(n);this.featureSeq_=a.length,t.addFeatures(a)}},_.DrawComponentController.prototype.clearLayer=function(){this.layer.getSource().clear(!0),this.featureSeq_=0,this.ngeoLocation_.deleteParam("features")},_.module.controller("AppDrawController",_.DrawComponentController),_.MainController=function(){this.map=new s.default({layers:[new d.default({source:new p.default})]});var e=new f.default;this.vectorLayer=new c.default({source:e}),this.vectorLayer.setMap(this.map)},_.module.controller("MainController",_.MainController),t.default=_},501:function(e,t){},502:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=F(r(3)),n=F(r(116)),a=F(r(503)),i=F(r(115)),l=b(r(0)),s=F(r(16)),u=b(r(52)),d=b(r(8)),c=b(r(61)),p=F(r(228)),f=F(r(40)),h=(F(r(22)),F(r(35))),g=F(r(79)),y=F(r(91)),_=F(r(92)),v=F(r(27)),m=F(r(25)),S=F(r(60)),C=F(r(42)),w=F(r(43)),P=F(r(23)),L=F(r(117));function b(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function F(e){return e&&e.__esModule?e:{default:e}}var M=function e(t){p.default.call(this);var r=void 0!==t?t:{};this.accuracy_=void 0!==r.accuracy?r.accuracy:e.ACCURACY_,this.encodeStyles_=void 0===r.encodeStyles||r.encodeStyles,this.propertiesFunction_=void 0!==r.properties?r.properties:e.defaultPropertiesFunction_,this.setStyle_=void 0===r.setStyle||r.setStyle,this.prevX_=0,this.prevY_=0,e.LegacyProperties_=void 0!==r.propertiesType&&r.propertiesType};l.inherits(M,p.default),M.StyleTypes_={LineString:a.default.LINE_STRING,Point:a.default.POINT,Polygon:a.default.POLYGON,MultiLineString:a.default.LINE_STRING,MultiPoint:a.default.POINT,MultiPolygon:a.default.POLYGON},M.LegacyProperties_={},M.prototype.readFeature,M.prototype.readFeatures,M.prototype.readGeometry,M.prototype.writeFeature,M.prototype.writeFeatures,M.prototype.writeGeometry,M.CHAR64_=".-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz",M.ACCURACY_=.1,M.defaultPropertiesFunction_=function(e){return e.getProperties()},M.encodeSignedNumber_=function(e){var t=e<<1;return e<0&&(t=~t),M.encodeNumber_(t)},M.encodeNumber_=function(e){for(var t="";e>=32;)t+=M.CHAR64_.charAt(32|31&e),e>>=5;return t+=M.CHAR64_.charAt(e)},M.encodeStyles_=function(e,t,r){var n=M.StyleTypes_[t];o.default.assert(void 0!==n);for(var i=0;i<e.length;++i){var l=e[i],s=l.getFill(),u=l.getImage(),d=l.getStroke(),c=l.getText();n==a.default.POLYGON?null!==s&&M.encodeStylePolygon_(s,d,r):n==a.default.LINE_STRING?null!==d&&M.encodeStyleLine_(d,r):n==a.default.POINT&&null!==u&&M.encodeStylePoint_(u,r),null!==c&&M.encodeStyleText_(c,r)}},M.encodeStyleLine_=function(e,t){M.encodeStyleStroke_(e,t)},M.encodeStylePoint_=function(e,t){if(e instanceof S.default){var r=e.getRadius();t.length>0&&t.push("'"),t.push(encodeURIComponent("pointRadius*"+r));var o=e.getFill();null!==o&&M.encodeStyleFill_(o,t);var n=e.getStroke();null!==n&&M.encodeStyleStroke_(n,t)}},M.encodeStylePolygon_=function(e,t,r){M.encodeStyleFill_(e,r),null!==t&&M.encodeStyleStroke_(t,r)},M.encodeStyleFill_=function(e,t,r){var n=void 0!==r?r:"fillColor",a=e.getColor();if(null!==a){o.default.assert(Array.isArray(a),"only supporting fill colors");var l=u.asArray(a);o.default.assert(Array.isArray(l),"fill color must be an array");var s=i.default.rgbArrayToHex(l);t.length>0&&t.push("'"),t.push(encodeURIComponent(n+"*"+s))}},M.encodeStyleStroke_=function(e,t){var r=e.getColor();if(null!==r){o.default.assert(Array.isArray(r));var n=u.asArray(r);o.default.assert(Array.isArray(n),"only supporting stroke colors");var a=i.default.rgbArrayToHex(n);t.length>0&&t.push("'"),t.push(encodeURIComponent("strokeColor*"+a))}var l=e.getWidth();void 0!==l&&(t.length>0&&t.push("'"),t.push(encodeURIComponent("strokeWidth*"+l)))},M.encodeStyleText_=function(e,t){var r=e.getFont();if(void 0!==r){var o=r.split(" ");o.length>=3&&(t.length>0&&t.push("'"),t.push(encodeURIComponent("fontSize*"+o[1])))}var n=e.getFill();null!==n&&M.encodeStyleFill_(n,t,"fontColor")},M.readLineStringGeometry_=function(e){o.default.assert("l("===e.substring(0,2)),o.default.assert(")"==e[e.length-1]),e=e.substring(2,e.length-1);var t=this.decodeCoordinates_(e),r=new h.default(null);return r.setFlatCoordinates(f.default.XY,t),r},M.readMultiLineStringGeometry_=function(e){o.default.assert("L("===e.substring(0,2)),o.default.assert(")"==e[e.length-1]);for(var t=[],r=[],n=(e=e.substring(2,e.length-1)).split("'"),a=0,i=n.length;a<i;++a)t=this.decodeCoordinates_(n[a],t),r[a]=t.length;var l=new g.default(null);return l.setFlatCoordinates(f.default.XY,t,r),l},M.readPointGeometry_=function(e){o.default.assert("p("===e.substring(0,2)),o.default.assert(")"==e[e.length-1]),e=e.substring(2,e.length-1);var t=this.decodeCoordinates_(e);o.default.assert(2===t.length);var r=new v.default(null);return r.setFlatCoordinates(f.default.XY,t),r},M.readMultiPointGeometry_=function(e){o.default.assert("P("===e.substring(0,2)),o.default.assert(")"==e[e.length-1]),e=e.substring(2,e.length-1);var t=this.decodeCoordinates_(e),r=new y.default(null);return r.setFlatCoordinates(f.default.XY,t),r},M.readPolygonGeometry_=function(e){o.default.assert("a("===e.substring(0,2)),o.default.assert(")"==e[e.length-1]);for(var t=[],r=[],n=(e=e.substring(2,e.length-1)).split("'"),a=0,i=n.length;a<i;++a){var l=(t=this.decodeCoordinates_(n[a],t)).length;0===a?(t[l++]=t[0],t[l++]=t[1]):(t[l++]=t[r[a-1]],t[l++]=t[r[a-1]+1]),r[a]=l}var s=new m.default(null);return s.setFlatCoordinates(f.default.XY,t,r),s},M.readMultiPolygonGeometry_=function(e){o.default.assert("A("===e.substring(0,2)),o.default.assert(")"==e[e.length-1]);for(var t=[],r=[],n=(e=e.substring(2,e.length-1)).split(")("),a=0,i=n.length;a<i;++a)for(var l=n[a].split("'"),s=r[a]=[],u=0,d=l.length;u<d;++u){var c=(t=this.decodeCoordinates_(l[u],t)).length;0===u?(t[c++]=t[0],t[c++]=t[1]):(t[c++]=t[s[u-1]],t[c++]=t[s[u-1]+1]),s[u]=c}var p=new _.default(null);return p.setFlatCoordinates(f.default.XY,t,r),p},M.setStyleInFeature_=function(e,t){if(""!=e){var r=M.getStyleProperties_(e,t),o=r.fillColor,n=r.fontSize,a=r.fontColor,i=r.pointRadius,l=r.strokeColor,s=r.strokeWidth,u=null;void 0!==o&&(u=new C.default({color:o}));var d=null;void 0!==l&&void 0!==s&&(d=new w.default({color:l,width:s}));var c=null;void 0!==i&&(c=new S.default({radius:i,fill:u,stroke:d}),u=d=null);var p=null;void 0!==n&&void 0!==a&&(p=new L.default({font:n+" sans-serif",fill:new C.default({color:a})}));var f=new P.default({fill:u,image:c,stroke:d,text:p});t.setStyle(f)}},M.setStyleProperties_=function(e,t){var r=M.getStyleProperties_(e,t),o=t.getGeometry();if(o instanceof v.default?r.isLabel||r[n.default.IS_TEXT]?(delete r.strokeColor,delete r.fillColor):(delete r.fontColor,delete r.fontSize):(delete r.fontColor,o instanceof h.default&&(delete r.fillColor,delete r.fillOpacity)),r.fontSize){var a=parseFloat(r.fontSize);-1!==r.fontSize.indexOf("px")&&(a=Math.round(a/1.333333)),r.fontSize=a}var i={};for(var l in r){var s=r[l];M.LegacyProperties_[l]?i[M.LegacyProperties_[l]]=s:i[l]=s}t.setProperties(i)},M.castValue_=function(e,t){var r=[n.default.ANGLE,n.default.OPACITY,n.default.SIZE,n.default.STROKE,"pointRadius","strokeWidth"],o=[n.default.IS_CIRCLE,n.default.IS_RECTANGLE,n.default.IS_TEXT,n.default.SHOW_MEASURE,n.default.SHOW_LABEL,"isCircle","isRectangle","isLabel","showMeasure","showLabel"];return d.includes(r,e)?+t:d.includes(o,e)?"true"===t:t},M.getStyleProperties_=function(e,t){for(var r=e.split("'"),n={},a=0;a<r.length;++a){var i=decodeURIComponent(r[a]).split("*");o.default.assert(2===i.length);var l=i[0],s=i[1];n[l]=M.castValue_(l,s)}return n},M.writeLineStringGeometry_=function(e){o.default.assertInstanceof(e,h.default);var t=e.getFlatCoordinates(),r=e.getStride(),n=t.length;return"l("+this.encodeCoordinates_(t,r,0,n)+")"},M.writeMultiLineStringGeometry_=function(e){o.default.assertInstanceof(e,g.default);for(var t=e.getEnds(),r=t.length,n=e.getFlatCoordinates(),a=e.getStride(),i=0,l=["L("],s=0;s<r;++s){var u=t[s],d=this.encodeCoordinates_(n,a,i,u);0!==s&&l.push("'"),l.push(d),i=u}return l.push(")"),l.join("")},M.writePointGeometry_=function(e){o.default.assertInstanceof(e,v.default);var t=e.getFlatCoordinates(),r=e.getStride(),n=t.length;return"p("+this.encodeCoordinates_(t,r,0,n)+")"},M.writeMultiPointGeometry_=function(e){o.default.assertInstanceof(e,y.default);var t=e.getFlatCoordinates(),r=e.getStride(),n=t.length;return"P("+this.encodeCoordinates_(t,r,0,n)+")"},M.encodeRings_=function(e,t,r,o,n){for(var a=o.length,i=0;i<a;++i){var l=o[i]-t,s=this.encodeCoordinates_(e,t,r,l);0!==i&&n.push("'"),n.push(s),r=o[i]}return r},M.writePolygonGeometry_=function(e){o.default.assertInstanceof(e,m.default);var t=e.getFlatCoordinates(),r=e.getStride(),n=e.getEnds(),a=["a("];return M.encodeRings_.call(this,t,r,0,n,a),a.push(")"),a.join("")},M.writeMultiPolygonGeometry_=function(e){o.default.assertInstanceof(e,_.default);for(var t=e.getFlatCoordinates(),r=e.getStride(),n=e.getEndss(),a=n.length,i=0,l=["A"],s=0;s<a;++s){var u=n[s];l.push("("),i=M.encodeRings_.call(this,t,r,i,u,l),l.push(")")}return l.join("")},M.GEOMETRY_READERS_={P:M.readMultiPointGeometry_,L:M.readMultiLineStringGeometry_,A:M.readMultiPolygonGeometry_,l:M.readLineStringGeometry_,p:M.readPointGeometry_,a:M.readPolygonGeometry_},M.GEOMETRY_WRITERS_={MultiLineString:M.writeMultiLineStringGeometry_,MultiPoint:M.writeMultiPointGeometry_,MultiPolygon:M.writeMultiPolygonGeometry_,LineString:M.writeLineStringGeometry_,Point:M.writePointGeometry_,Polygon:M.writePolygonGeometry_},M.prototype.decodeCoordinates_=function(e,t){for(var r=e.length,o=0,n=void 0!==t?t:[],a=n.length;o<r;){var i=void 0,l=0,s=0;do{s|=(31&(i=M.CHAR64_.indexOf(e.charAt(o++))))<<l,l+=5}while(i>=32);var u=1&s?~(s>>1):s>>1;this.prevX_+=u,l=0,s=0;do{s|=(31&(i=M.CHAR64_.indexOf(e.charAt(o++))))<<l,l+=5}while(i>=32);var d=1&s?~(s>>1):s>>1;this.prevY_+=d,n[a++]=this.prevX_*this.accuracy_,n[a++]=this.prevY_*this.accuracy_}return n},M.prototype.encodeCoordinates_=function(e,t,r,o){for(var n="",a=r;a<o;a+=t){var i=e[a],l=e[a+1];i=Math.floor(i/this.accuracy_),l=Math.floor(l/this.accuracy_);var s=i-this.prevX_,u=l-this.prevY_;this.prevX_=i,this.prevY_=l,n+=M.encodeSignedNumber_(s)+M.encodeSignedNumber_(u)}return n},M.prototype.readFeatureFromText=function(e,t){o.default.assert(e.length>2),o.default.assert("("===e[1]),o.default.assert(")"===e[e.length-1]);var r=e.indexOf("~"),n=r>=0?e.substring(0,r)+")":e,a=this.readGeometryFromText(n,t),i=new s.default(a);if(r>=0){var l=e.substring(r+1,e.length-1),u=(r=l.indexOf("~"))>=0?l.substring(0,r):l;if(""!=u)for(var d=u.split("'"),c=0;c<d.length;++c){var p=decodeURIComponent(d[c]).split("*");o.default.assert(2===p.length);var f=p[0],h=p[1];!this.setStyle_&&M.LegacyProperties_[f]&&(f=M.LegacyProperties_[f]),i.set(f,M.castValue_(f,h))}if(r>=0){var g=l.substring(r+1);this.setStyle_?M.setStyleInFeature_(g,i):M.setStyleProperties_(g,i)}}return i},M.prototype.readFeaturesFromText=function(e,t){o.default.assert("F"===e[0]);var r=[];for(e=e.substring(1);e.length>0;){var n=e.indexOf(")");o.default.assert(n>=0);var a=this.readFeatureFromText(e.substring(0,n+1),t);r.push(a),e=e.substring(n+1)}return r},M.prototype.readGeometryFromText=function(e,t){var r=M.GEOMETRY_READERS_[e[0]];return o.default.assert(void 0!==r),this.prevX_=0,this.prevY_=0,r.call(this,e)},M.prototype.writeFeatureText=function(e,t){var r=[],n="",a=e.getGeometry();a&&(n=this.writeGeometryText(a,t)),n.length>0&&(o.default.assert(")"===n[n.length-1]),n=n.substring(0,n.length-1),r.push(n));var i=[],l=this.propertiesFunction_(e);for(var s in l){var u=l[s];if(void 0!==u&&null!==u&&s!==e.getGeometryName()){0!==i.length&&i.push("'");var d=encodeURIComponent(s.replace(/[()'*]/g,"_")+"*"+u.toString().replace(/[()'*]/g,"_"));i.push(d)}}if(i.length>0&&(r.push("~"),Array.prototype.push.apply(r,i)),this.encodeStyles_){var c=e.getStyleFunction();if(void 0!==c){var p=c.call(e,0);if(null!==p){var f=[];p=Array.isArray(p)?p:[p],M.encodeStyles_(p,a.getType(),f),f.length>0&&(r.push("~"),Array.prototype.push.apply(r,f))}}}return r.push(")"),r.join("")},M.prototype.writeFeaturesText=function(e,t){var r=[];if(e.length>0){r.push("F");for(var o=0,n=e.length;o<n;++o)r.push(this.writeFeatureText(e[o],t))}return r.join("")},M.prototype.writeGeometryText=function(e,t){var r=M.GEOMETRY_WRITERS_[e.getType()];o.default.assert(void 0!==r);var n=c.transformWithOptions(e,!0,t);return this.prevX_=0,this.prevY_=0,r.call(this,n)},t.default=M},503:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={LINE_STRING:"LineString",POINT:"Point",POLYGON:"Polygon"}},6:function(e,t,r){"use strict";var o=r(0),n=r(20),a=r(19);const i=function(e){const t=e||{},r=void 0!==t.projection?t.projection:"EPSG:3857",o=void 0!==t.tileGrid?t.tileGrid:a.a.createXYZ({extent:a.a.extentFromProjection(r),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});n.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:r,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:o,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(o.inherits)(i,n.a),t.a=i}},[499]);
//# sourceMappingURL=permalink.ef5b0ab71055ac9f4e47.js.map