webpackJsonp([11],{542:function(e,t,o){o(17),e.exports=o(543)},543:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(544),o(18);var r=h(o(236)),i=h(o(82)),n=(h(o(48)),h(o(30))),a=h(o(19)),s=h(o(168)),l=(h(o(36)),h(o(163))),u=h(o(16)),c=h(o(24)),d=h(o(14)),m=h(o(6));function h(e){return e&&e.__esModule?e:{default:e}}var f={};f.module=angular.module("gmfapp",[i.default.name,n.default.name,s.default.module.name,a.default.module.name,l.default.module.name,r.default.name]),f.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background&interface=desktop"),f.constant("defaultTheme","Demo"),f.constant("gmfTreeManagerModeFlush",!1),f.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),f.MainController=function(e,t,o,r){var i=this;t.loadThemes(),this.map=new u.default({layers:[new d.default({source:new m.default})],view:new c.default({projection:"EPSG:21781",resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})});var n=r.getParam("modal");this.modal="true"===n,this.gmfTreeManager=e,this.gmfThemeManager=o,this.themes=[],this.groups=[],this.layers=[],this.getSetTheme=function(e){return e&&this.gmfThemeManager.addTheme(e),this.themes},this.getSetGroup=function(e){return void 0!==e&&this.gmfTreeManager.addFirstLevelGroups([e]),this.groups},this.getSetLayers=function(e){return void 0!==e&&this.gmfTreeManager.addGroupByLayerName(e.name),this.layers},this.getSetRemoveTree=function(e){return void 0!==e&&this.gmfTreeManager.removeGroup(e),this.gmfTreeManager.root.children},t.getThemesObject().then(function(e){if(e){i.themes=e;var t=[];i.themes.forEach(function(e){e.children.forEach(function(e){i.groups.push(e),i.getDistinctFlatNodes_(e,t)})}),t.forEach(function(e){void 0===e.children&&i.layers.push(e)})}}),this.getDistinctFlatNodes_=function(e,t){var o=void 0,r=e.children;if(void 0!==r)for(o=0;o<r.length;o++)this.getDistinctFlatNodes_(r[o],t);var i=!1;t.some(function(t){if(t.id===e.id)return i=!0}),i||t.push(e)}},f.MainController.$inject=["gmfTreeManager","gmfThemes","gmfThemeManager","ngeoLocation"],f.module.controller("MainController",f.MainController),t.default=f},544:function(e,t){},6:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(26),n=o(23);const a=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:n.a.createXYZ({extent:n.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});i.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(r.inherits)(a,i.a);var s=a;const l=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[l.ATTRIBUTION];const r=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",i=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";s.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:r,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:i,wrapX:t.wrapX})};Object(r.inherits)(l,s),l.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=l}},[542]);
//# sourceMappingURL=layertreeadd.2e351e6b3eaa058223c8.js.map