webpackJsonp([27],{316:function(o,e,t){t(10),o.exports=t(397)},397:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t(398),t(11);var i=c(t(13)),r=c(t(18)),n=c(t(15)),a=c(t(5)),l=(c(t(1)),c(t(17)));function c(o){return o&&o.__esModule?o:{default:o}}var s={};s.module=angular.module("app",[l.default.name]),s.mapComponent={bindings:{map:"=appMap",class:"=appMapClass"},template:'<div ngeo-map="$ctrl.map"></div>'},s.module.component("appMap",s.mapComponent),s.MainController=function(o){this.map=new i.default({layers:[new n.default({source:new a.default})],view:new r.default({center:[0,0],zoom:4})}),this.open=!1;var e=this;o(function(){e.open=!0},0)},s.MainController.$inject=["$timeout"],s.module.controller("MainController",s.MainController),e.default=s},398:function(o,e){},5:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),r=t(6);const n=function(o){const e=o||{};let t;t=void 0!==e.attributions?e.attributions:[n.ATTRIBUTION];const i=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",a=void 0!==e.url?e.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:t,cacheSize:e.cacheSize,crossOrigin:i,opaque:void 0===e.opaque||e.opaque,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:a,wrapX:e.wrapX})};Object(i.inherits)(n,r.a),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',e.default=n},6:function(o,e,t){"use strict";var i=t(0),r=t(20),n=t(19);const a=function(o){const e=o||{},t=void 0!==e.projection?e.projection:"EPSG:3857",i=void 0!==e.tileGrid?e.tileGrid:n.a.createXYZ({extent:n.a.extentFromProjection(t),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});r.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,opaque:e.opaque,projection:t,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};Object(i.inherits)(a,r.a),e.a=a}},[316]);
//# sourceMappingURL=animation.da7aad165291bed18a66.js.map