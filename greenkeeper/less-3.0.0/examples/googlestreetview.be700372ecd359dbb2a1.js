webpackJsonp([23],{450:function(e,t,o){o(10),e.exports=o(451)},451:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(452),o(11);var i=h(o(13)),r=h(o(18)),n=h(o(15)),a=h(o(5)),l=h(o(42)),u=h(o(43)),s=h(o(23)),c=h(o(117)),d=(h(o(1)),h(o(298))),p=h(o(17)),f=h(o(105)),m=h(o(106));function h(e){return e&&e.__esModule?e:{default:e}}var w={};w.module=angular.module("app",[p.default.name,d.default.name,m.default.module.name]),w.MainController=function(e,t){this.radius=500,this.style=new s.default({text:new c.default({fill:new l.default({color:"#279B61"}),font:"normal 30px FontAwesome",offsetY:-15,stroke:new u.default({color:"#ffffff",width:3}),text:""})}),this.map=new i.default({layers:[new n.default({source:new a.default})],view:new r.default({center:[-7910687,6178318],zoom:17})}),e.init(this.map),this.googleStreetViewActive=!0;var o=new f.default(this,"googleStreetViewActive");t.registerTool("mapTools",o,!0),this.dummyActive=!1;var d=new f.default(this,"dummyActive");t.registerTool("mapTools",d,!1)},w.MainController.$inject=["ngeoFeatureOverlayMgr","ngeoToolActivateMgr"],w.module.controller("MainController",w.MainController),t.default=w},452:function(e,t){},5:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=o(6);const n=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[n.ATTRIBUTION];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(i.inherits)(n,r.a),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=n},6:function(e,t,o){"use strict";var i=o(0),r=o(20),n=o(19);const a=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:n.a.createXYZ({extent:n.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(a,r.a),t.a=a}},[450]);
//# sourceMappingURL=googlestreetview.be700372ecd359dbb2a1.js.map