webpackJsonp([24],{396:function(e,t,o){o(8),e.exports=o(397)},397:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(398),o(9);var i=v(o(266)),r=v(o(62)),n=v(o(96)),a=v(o(123)),l=v(o(106)),s=v(o(32)),c=v(o(11)),u=v(o(16)),d=v(o(17)),p=v(o(28)),m=v(o(4)),f=v(o(25)),h=v(o(15));function v(e){return e&&e.__esModule?e:{default:e}}var T={};T.module=angular.module("app",[h.default.name,n.default.name,l.default.module.name,i.default.name]),T.MainController=function(e){this.features=new s.default,this.pointGeomType=r.default.POINT,this.lineStringGeomType=r.default.LINE_STRING,this.polygonGeomType=r.default.POLYGON;var t=new p.default({source:new f.default({wrapX:!1,features:this.features})});this.map=new c.default({layers:[new d.default({source:new m.default}),t],view:new u.default({center:[0,0],zoom:3})}),this.createPointActive=!1;var o=new a.default(this,"createPointActive");e.registerTool("mapTools",o,!1),this.createLineStringActive=!1;var i=new a.default(this,"createLineStringActive");e.registerTool("mapTools",i,!1),this.createPolygonActive=!1;var n=new a.default(this,"createPolygonActive");e.registerTool("mapTools",n,!1),this.dummyActive=!0;var l=new a.default(this,"dummyActive");e.registerTool("mapTools",l,!0)},T.MainController.$inject=["ngeoToolActivateMgr"],T.module.controller("MainController",T.MainController),t.default=T},398:function(e,t){},4:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=o(5);const n=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[n.ATTRIBUTION];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(i.inherits)(n,r.a),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=n},5:function(e,t,o){"use strict";var i=o(0),r=o(19),n=o(20);const a=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:n.a.createXYZ({extent:n.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(a,r.a),t.a=a}},[396]);
//# sourceMappingURL=createfeature.1d3622a563158d73810a.js.map