webpackJsonp([15],{530:function(e,t,a){a(18),e.exports=a(531)},531:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(532),a(19);w(a(4));var o=w(a(239)),l=w(a(31)),r=w(a(2)),i=(w(a(1)),w(a(78))),n=w(a(46)),u=w(a(12)),d=w(a(16)),s=w(a(25)),c=w(a(155)),f=w(a(29)),p=w(a(20)),h=w(a(30)),m=w(a(15)),O=w(a(42)),C=w(a(8)),g=w(a(39));function w(e){return e&&e.__esModule?e:{default:e}}var E={};E.module=angular.module("gmfapp",[o.default.name,l.default.name,n.default.module.name]),E.module.value("ngeoMeasureDecimals",2),E.constant("defaultTheme","Demo"),E.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),E.MainController=function(e,t){this.scope_=e,this.featureHelper_=t;var a=[],o={geometry:new p.default([-8458215,6672646])};o[i.default.COLOR]="#009D57",o[i.default.NAME]="Point1",o[i.default.SIZE]="6",a.push(new u.default(o));var l={geometry:new p.default([-8007848,6209744])};l[i.default.ANGLE]="0",l[i.default.COLOR]="#000000",l[i.default.IS_TEXT]=!0,l[i.default.NAME]="Text 1",l[i.default.SIZE]="16",l[i.default.STROKE]="2",a.push(new u.default(l));var n={geometry:new f.default([[-8321240,6523441],[-8103547,6726458],[-8091318,6408480],[-7973910,6631065]])};n[i.default.COLOR]="#0BA9CC",n[i.default.NAME]="LineString 1",n[i.default.STROKE]="4",a.push(new u.default(n));var w={geometry:new h.default([[[-8512027,6359560],[-8531595,6080718],[-8267428,6031798],[-8238077,6247045],[-8512027,6359560]]])};w[i.default.COLOR]="#4186F0",w[i.default.NAME]="Polygon 1",w[i.default.OPACITY]="0.5",w[i.default.SHOW_MEASURE]=!0,w[i.default.STROKE]="1",a.push(new u.default(w));var E={geometry:new h.default([[[-7952508,6096617],[-8051570,5959642],[-7848554,5926621],[-7754383,6025683],[-7952508,6096617]]])};E[i.default.COLOR]="#CCCCCC",E[i.default.NAME]="Polygon 2",E[i.default.OPACITY]="1",E[i.default.STROKE]="3",a.push(new u.default(E));var S={geometry:h.default.fromExtent([-7874848,6496535,-7730535,6384020])};S[i.default.COLOR]="#000000",S[i.default.IS_RECTANGLE]=!0,S[i.default.NAME]="Rectangle 1",S[i.default.OPACITY]="0.5",S[i.default.STROKE]="2",a.push(new u.default(S));var v={geometry:h.default.fromCircle(new c.default([-7691093,6166327],35e3),64)};v[i.default.COLOR]="#000000",v[i.default.IS_CIRCLE]=!0,v[i.default.NAME]="Circle 1",v[i.default.OPACITY]="0.5",v[i.default.STROKE]="2",a.push(new u.default(v));var T=new s.default({center:[-8174482,6288627],zoom:6});t.setProjection(r.default.assert(T.getProjection())),a.forEach(function(e){t.setStyle(e)},this),this.map=new d.default({layers:[new m.default({source:new C.default}),new O.default({source:new g.default({wrapX:!1,features:a})})],view:T}),this.selectedFeature=null,this.map.on("singleclick",this.handleMapSingleClick_,this)},E.MainController.$inject=["$scope","ngeoFeatureHelper"],E.MainController.prototype.handleMapSingleClick_=function(e){var t=e.pixel,a=this.map.forEachFeatureAtPixel(t,function(e){return e});this.selectedFeature&&this.featureHelper_.setStyle(this.selectedFeature),a?this.selectedFeature!==a&&(this.selectedFeature=a,this.featureHelper_.setStyle(a,!0)):this.selectedFeature=null,this.scope_.$apply()},E.module.controller("MainController",E.MainController),t.default=E},532:function(e,t){},8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),l=a(27),r=a(24);const i=function(e){const t=e||{},a=void 0!==t.projection?t.projection:"EPSG:3857",o=void 0!==t.tileGrid?t.tileGrid:r.a.createXYZ({extent:r.a.extentFromProjection(a),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});l.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:a,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:o,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(o.inherits)(i,l.a);var n=i;const u=function(e){const t=e||{};let a;a=void 0!==t.attributions?t.attributions:[u.ATTRIBUTION];const o=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",l=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";n.call(this,{attributions:a,cacheSize:t.cacheSize,crossOrigin:o,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:l,wrapX:t.wrapX})};Object(o.inherits)(u,n),u.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=u}},[530]);
//# sourceMappingURL=featurestyle.2cc48b6c31fe9e3cb3ad.js.map