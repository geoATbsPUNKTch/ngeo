webpackJsonp([13],{536:function(e,t,o){o(17),e.exports=o(537)},537:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),o(538),o(18);var a=h(o(161)),r=h(o(349)),i=h(o(82)),n=(h(o(48)),h(o(30))),l=h(o(19)),s=h(o(105)),c=h(o(171)),u=h(o(170)),m=(h(o(36)),h(o(16))),p=h(o(24)),d=h(o(14)),f=h(o(6));function h(e){return e&&e.__esModule?e:{default:e}}var g={};g.module=angular.module("gmfapp",[a.default.module.name,r.default.name,i.default.name,n.default.name,l.default.module.name,s.default.module.name,c.default.name,u.default.name]),g.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),g.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),g.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),g.module.value("gmfExternalOGCServers",[{name:"Swiss Topo WMS",type:"WMS",url:"https://wms.geo.admin.ch/?lang=fr"},{name:"ASIT VD",type:"WMTS",url:"https://ows.asitvd.ch/wmts/1.0.0/WMTSCapabilities.xml"},{name:"Swiss Topo WMTS",type:"WMTS",url:"https://wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml?lang=fr"}]),g.constant("defaultTheme","Filters"),g.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),g.MainController=function(){function t(o,a,r,i,n){var l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope_=o,r.loadThemes(),this.gmfTreeManager=i,this.map=new m.default({layers:[new d.default({source:new f.default})],view:new p.default({projection:"EPSG:21781",resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),a.setDatasourceMap(this.map),r.getThemesObject().then(function(e){if(e)for(var t=0,o=e.length;t<o;t++)if(175===e[t].id){l.gmfTreeManager.setFirstLevelGroups(e[t].children);break}}),this.queryActive=!0,e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}return t.$inject=["$scope","gmfDataSourcesManager","gmfThemes","gmfTreeManager","ngeoDataSources"],t}(),g.module.controller("MainController",g.MainController),t.default=g}).call(t,o(8))},538:function(e,t){},6:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(0),r=o(26),i=o(23);const n=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",a=void 0!==t.tileGrid?t.tileGrid:i.a.createXYZ({extent:i.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:a,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(a.inherits)(n,r.a);var l=n;const s=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[s.ATTRIBUTION];const a=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",r=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:a,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:r,wrapX:t.wrapX})};Object(a.inherits)(s,l),s.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=s}},[536]);
//# sourceMappingURL=importdatasource.dd858d37e4ea32c08524.js.map