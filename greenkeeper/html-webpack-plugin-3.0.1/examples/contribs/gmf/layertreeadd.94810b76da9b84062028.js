webpackJsonp([16],{558:function(e,t,o){o(15),o(16),e.exports=o(559)},559:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(560);var r=g(o(232)),i=g(o(79)),n=g(o(47)),a=g(o(28)),s=g(o(19)),l=g(o(172)),u=g(o(35)),c=g(o(168)),d=g(o(17)),m=g(o(21)),h=g(o(14)),f=g(o(7));function g(e){return e&&e.__esModule?e:{default:e}}var p={};p.module=angular.module("gmfapp",["gettext",i.default.name,n.default.module.name,a.default.name,l.default.module.name,s.default.module.name,c.default.module.name,r.default.name]),p.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background&interface=desktop"),p.module.constant("defaultTheme","Demo"),p.module.constant("gmfTreeManagerModeFlush",!1),p.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),p.MainController=function(e,t,o,r){var i=this;t.loadThemes(),this.map=new d.default({layers:[new h.default({source:new f.default})],view:new m.default({projection:u.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})});var n=r.getParam("modal");this.modal="true"===n,this.gmfTreeManager=e,this.gmfThemeManager=o,this.themes=[],this.groups=[],this.layers=[],this.getSetTheme=function(e){return e&&this.gmfThemeManager.addTheme(e),this.themes},this.getSetGroup=function(e){return void 0!==e&&this.gmfTreeManager.addFirstLevelGroups([e]),this.groups},this.getSetLayers=function(e){return void 0!==e&&this.gmfTreeManager.addGroupByLayerName(e.name),this.layers},this.getSetRemoveTree=function(e){return void 0!==e&&this.gmfTreeManager.removeGroup(e),this.gmfTreeManager.root.children},t.getThemesObject().then(function(e){if(e){i.themes=e;var t=[];i.themes.forEach(function(e){e.children.forEach(function(e){i.groups.push(e),i.getDistinctFlatNodes_(e,t)})}),t.forEach(function(e){void 0===e.children&&i.layers.push(e)})}}),this.getDistinctFlatNodes_=function(e,t){var o=void 0,r=e.children;if(void 0!==r)for(o=0;o<r.length;o++)this.getDistinctFlatNodes_(r[o],t);var i=!1;t.some(function(t){if(t.id===e.id)return i=!0}),i||t.push(e)}},p.MainController.$inject=["gmfTreeManager","gmfThemes","gmfThemeManager","ngeoLocation"],p.module.controller("MainController",p.MainController),t.default=p},560:function(e,t){},7:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(23),n=o(24);const a=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:Object(n.a)({extent:Object(n.b)(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});i.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(r.inherits)(a,i.a);var s=a;const l=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[l.ATTRIBUTION];const r=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",i=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";s.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:r,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:i,wrapX:t.wrapX})};Object(r.inherits)(l,s),l.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=l}},[558]);
//# sourceMappingURL=layertreeadd.94810b76da9b84062028.js.map