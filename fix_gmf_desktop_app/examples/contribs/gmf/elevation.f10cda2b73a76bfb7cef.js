webpackJsonp([16],{527:function(e,o,t){t(17),e.exports=t(528)},528:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),t(529),t(18);var r=c(t(30)),i=c(t(371)),n=(c(t(36)),c(t(16))),a=c(t(24)),l=c(t(14)),s=c(t(6));function c(e){return e&&e.__esModule?e:{default:e}}var u={};u.module=angular.module("gmfapp",[r.default.name,i.default.name]),u.module.value("gmfRasterUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/raster"),u.constant("defaultTheme","Demo"),u.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),u.MainController=function(){this.elevationLayers=["aster","srtm"],this.selectedElevationLayer=this.elevationLayers[0],this.map=new n.default({layers:[new l.default({source:new s.default})],view:new a.default({projection:"EPSG:21781",resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:3})})},u.module.controller("MainController",u.MainController),o.default=u},529:function(e,o){},6:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t(0),i=t(26),n=t(23);const a=function(e){const o=e||{},t=void 0!==o.projection?o.projection:"EPSG:3857",r=void 0!==o.tileGrid?o.tileGrid:n.a.createXYZ({extent:n.a.extentFromProjection(t),maxZoom:o.maxZoom,minZoom:o.minZoom,tileSize:o.tileSize});i.a.call(this,{attributions:o.attributions,cacheSize:o.cacheSize,crossOrigin:o.crossOrigin,opaque:o.opaque,projection:t,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:o.tileLoadFunction,tilePixelRatio:o.tilePixelRatio,tileUrlFunction:o.tileUrlFunction,url:o.url,urls:o.urls,wrapX:void 0===o.wrapX||o.wrapX,transition:o.transition})};Object(r.inherits)(a,i.a);var l=a;const s=function(e){const o=e||{};let t;t=void 0!==o.attributions?o.attributions:[s.ATTRIBUTION];const r=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",i=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:t,cacheSize:o.cacheSize,crossOrigin:r,opaque:void 0===o.opaque||o.opaque,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,url:i,wrapX:o.wrapX})};Object(r.inherits)(s,l),s.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';o.default=s}},[527]);
//# sourceMappingURL=elevation.f10cda2b73a76bfb7cef.js.map