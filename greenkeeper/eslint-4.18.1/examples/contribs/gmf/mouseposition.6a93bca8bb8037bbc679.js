webpackJsonp([4],{568:function(e,o,t){t(15),e.exports=t(569)},569:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),t(570),t(17);var r=s(t(337)),i=s(t(571)),n=s(t(35)),a=s(t(16)),l=s(t(21)),u=s(t(14)),c=s(t(7));function s(e){return e&&e.__esModule?e:{default:e}}var d={};d.module=angular.module("gmfapp",[r.default.name]),d.constant("defaultTheme","Demo"),d.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),d.MainController=function(){this.projections=[{code:i.default,label:"CH1903+ / LV95",filter:"ngeoNumberCoordinates:0:Coordinates (m)&#58; {x}, {y}"},{code:n.default,label:"CH1903 / LV03",filter:"ngeoNumberCoordinates:2:[{x} E; {y} N]"},{code:"EPSG:4326",label:"WGS84",filter:"ngeoDMSCoordinates:2"}],this.map=new a.default({layers:[new u.default({source:new c.default})],view:new l.default({center:[828042,5933739],zoom:8})})},d.module.controller("MainController",d.MainController),o.default=d},570:function(e,o){},571:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=u(t(8)),i=u(t(357)),n=l(t(358)),a=l(t(244));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o.default=e,o}var c=["+proj="+n.default,"+lat_0=46.95240555555556","+lon_0=7.439583333333333","+k_0=1","+x_0=2600000","+y_0=1200000","+ellps=bessel","+towgs84=674.374,15.056,405.346,0,0,0,0","+units=m","+no_defs"].join(" ");a.default.defs("EPSG:2056",c),i.register(a.default),r.get("EPSG:2056").setExtent([242e4,103e4,29e5,135e4]);o.default="EPSG:2056"},7:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t(0),i=t(23),n=t(24);const a=function(e){const o=e||{},t=void 0!==o.projection?o.projection:"EPSG:3857",r=void 0!==o.tileGrid?o.tileGrid:Object(n.a)({extent:Object(n.b)(t),maxZoom:o.maxZoom,minZoom:o.minZoom,tileSize:o.tileSize});i.a.call(this,{attributions:o.attributions,cacheSize:o.cacheSize,crossOrigin:o.crossOrigin,opaque:o.opaque,projection:t,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:o.tileLoadFunction,tilePixelRatio:o.tilePixelRatio,tileUrlFunction:o.tileUrlFunction,url:o.url,urls:o.urls,wrapX:void 0===o.wrapX||o.wrapX,transition:o.transition})};Object(r.inherits)(a,i.a);var l=a;const u=function(e){const o=e||{};let t;t=void 0!==o.attributions?o.attributions:[u.ATTRIBUTION];const r=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",i=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:t,cacheSize:o.cacheSize,crossOrigin:r,opaque:void 0===o.opaque||o.opaque,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,url:i,wrapX:o.wrapX})};Object(r.inherits)(u,l),u.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';o.default=u}},[568]);
//# sourceMappingURL=mouseposition.6a93bca8bb8037bbc679.js.map