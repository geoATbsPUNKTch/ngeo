webpackJsonp([8],{565:function(e,t,o){o(17),e.exports=o(566)},566:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(567),o(18);var i=d(o(82)),r=d(o(30)),a=d(o(365)),n=d(o(19)),l=d(o(122)),s=(d(o(36)),d(o(16))),c=d(o(24)),u=d(o(14)),m=d(o(6));function d(e){return e&&e.__esModule?e:{default:e}}var p={};p.module=angular.module("gmfapp",[i.default.name,r.default.name,a.default.name,n.default.module.name,l.default.name]),p.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),p.module.value("gmfPrintUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/printproxy"),p.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi"),p.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),p.constant("defaultTheme","Demo"),p.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),p.MainController=function(e,t){var o=this;e.loadThemes(),this.map=new s.default({layers:[new u.default({source:new m.default})],view:new c.default({projection:"EPSG:21781",resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})}),this.defaulPrintFieldstValues={comments:"Default comments example",legend:!0},this.themes=void 0,this.treeSource=void 0,e.getThemesObject().then(function(e){e&&(o.themes=e,o.treeSource=e[3])}),t.init(this.map)},p.MainController.$inject=["gmfThemes","ngeoFeatureOverlayMgr"],p.module.controller("MainController",p.MainController),t.default=p},567:function(e,t){},6:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=o(26),a=o(23);const n=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:a.a.createXYZ({extent:a.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(n,r.a);var l=n;const s=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[s.ATTRIBUTION];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",r=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:r,wrapX:t.wrapX})};Object(i.inherits)(s,l),s.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=s}},[565]);
//# sourceMappingURL=print.6dad83833763844dae91.js.map