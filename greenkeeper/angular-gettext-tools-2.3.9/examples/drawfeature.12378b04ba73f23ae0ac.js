webpackJsonp([24],{4:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t(0),i=t(5);const n=function(e){const o=e||{};let t;t=void 0!==o.attributions?o.attributions:[n.ATTRIBUTION];const r=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",a=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";i.a.call(this,{attributions:t,cacheSize:o.cacheSize,crossOrigin:r,opaque:void 0===o.opaque||o.opaque,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,url:a,wrapX:o.wrapX})};Object(r.inherits)(n,i.a),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',o.default=n},444:function(e,o,t){t(9),e.exports=t(445)},445:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),t(446),t(10);var r=m(t(261)),i=m(t(16)),n=m(t(105)),a=m(t(106)),l=m(t(12)),c=m(t(17)),u=m(t(14)),s=m(t(27)),d=m(t(4)),p=m(t(25));function m(e){return e&&e.__esModule?e:{default:e}}var f={};f.module=angular.module("app",[r.default.name,i.default.name,a.default.module.name]),f.MainController=function(e,o,t){this.scope_=e;var r=new s.default({source:new p.default({wrapX:!1,features:o})});this.map=new l.default({layers:[new u.default({source:new d.default}),r],view:new c.default({center:[0,0],zoom:3})}),this.drawActive=!1;var i=new n.default(this,"drawActive");t.registerTool("mapTools",i,!1),this.dummyActive=!0;var a=new n.default(this,"dummyActive");t.registerTool("mapTools",a,!0)},f.MainController.$inject=["$scope","ngeoFeatures","ngeoToolActivateMgr"],f.module.controller("MainController",f.MainController),o.default=f},446:function(e,o){},5:function(e,o,t){"use strict";var r=t(0),i=t(19),n=t(18);const a=function(e){const o=e||{},t=void 0!==o.projection?o.projection:"EPSG:3857",r=void 0!==o.tileGrid?o.tileGrid:n.a.createXYZ({extent:n.a.extentFromProjection(t),maxZoom:o.maxZoom,minZoom:o.minZoom,tileSize:o.tileSize});i.a.call(this,{attributions:o.attributions,cacheSize:o.cacheSize,crossOrigin:o.crossOrigin,opaque:o.opaque,projection:t,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:o.tileLoadFunction,tilePixelRatio:o.tilePixelRatio,tileUrlFunction:o.tileUrlFunction,url:o.url,urls:o.urls,wrapX:void 0===o.wrapX||o.wrapX,transition:o.transition})};Object(r.inherits)(a,i.a),o.a=a}},[444]);
//# sourceMappingURL=drawfeature.12378b04ba73f23ae0ac.js.map