webpackJsonp([4],{564:function(e,o,t){t(17),e.exports=t(565)},565:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),t(566),t(18);var r=u(t(364)),i=(u(t(567)),u(t(36)),u(t(16))),n=u(t(24)),a=u(t(14)),l=u(t(7));function u(e){return e&&e.__esModule?e:{default:e}}var c={};c.module=angular.module("gmfapp",[r.default.name]),c.constant("defaultTheme","Demo"),c.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),c.MainController=function(){this.projections=[{code:"EPSG:2056",label:"CH1903+ / LV95",filter:"ngeoNumberCoordinates:0:Coordinates (m)&#58; {x}, {y}"},{code:"EPSG:21781",label:"CH1903 / LV03",filter:"ngeoNumberCoordinates:2:[{x} E; {y} N]"},{code:"EPSG:4326",label:"WGS84",filter:"ngeoDMSCoordinates:2"}],this.map=new i.default({layers:[new a.default({source:new l.default})],view:new n.default({center:[828042,5933739],zoom:8})})},c.module.controller("MainController",c.MainController),o.default=c},566:function(e,o){},567:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=l(t(8)),i=l(t(260)),n=(a(t(383)),a(t(261)));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o.default=e,o}var u=["+proj=somerc","+lat_0=46.95240555555556","+lon_0=7.439583333333333","+k_0=1","+x_0=2600000","+y_0=1200000","+ellps=bessel","+towgs84=674.374,15.056,405.346,0,0,0,0","+units=m","+no_defs"].join(" ");n.default.defs("EPSG:2056",u),i.register(n.default),r.get("EPSG:2056").setExtent([242e4,103e4,29e5,135e4]);o.default="EPSG:2056"},7:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t(0),i=t(26),n=t(23);const a=function(e){const o=e||{},t=void 0!==o.projection?o.projection:"EPSG:3857",r=void 0!==o.tileGrid?o.tileGrid:n.a.createXYZ({extent:n.a.extentFromProjection(t),maxZoom:o.maxZoom,minZoom:o.minZoom,tileSize:o.tileSize});i.a.call(this,{attributions:o.attributions,cacheSize:o.cacheSize,crossOrigin:o.crossOrigin,opaque:o.opaque,projection:t,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:o.tileLoadFunction,tilePixelRatio:o.tilePixelRatio,tileUrlFunction:o.tileUrlFunction,url:o.url,urls:o.urls,wrapX:void 0===o.wrapX||o.wrapX,transition:o.transition})};Object(r.inherits)(a,i.a);var l=a;const u=function(e){const o=e||{};let t;t=void 0!==o.attributions?o.attributions:[u.ATTRIBUTION];const r=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",i=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:t,cacheSize:o.cacheSize,crossOrigin:r,opaque:void 0===o.opaque||o.opaque,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,url:i,wrapX:o.wrapX})};Object(r.inherits)(u,l),u.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';o.default=u}},[564]);
//# sourceMappingURL=mouseposition.97d410ee12e808534a1c.js.map