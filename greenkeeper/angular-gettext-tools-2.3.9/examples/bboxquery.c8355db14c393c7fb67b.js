webpackJsonp([26],{4:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t(0),n=t(5);const i=function(e){const o=e||{};let t;t=void 0!==o.attributions?o.attributions:[i.ATTRIBUTION];const r=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",a=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";n.a.call(this,{attributions:t,cacheSize:o.cacheSize,crossOrigin:r,opaque:void 0===o.opaque||o.opaque,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,url:a,wrapX:o.wrapX})};Object(r.inherits)(i,n.a),i.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',o.default=i},416:function(e,o,t){t(9),e.exports=t(417)},417:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),t(418),t(10);f(t(82));var r=f(t(126)),n=f(t(185)),i=f(t(16)),a=f(t(95)),l=f(t(306)),s=f(t(12)),u=f(t(17)),c=f(t(59)),p=f(t(14)),m=f(t(58)),d=f(t(4));function f(e){return e&&e.__esModule?e:{default:e}}var h={};h.module=angular.module("app",[r.default.module.name,i.default.name,a.default.name,l.default.name]),h.module.value("ngeoQueryOptions",{limit:20}),h.queryresultComponent={controller:"AppQueryresultController",controllerAs:"qrCtrl",templateUrl:"partials/queryresult.html"},h.module.component("appQueryresult",h.queryresultComponent),h.QueryresultController=function(e){this.result=e},h.QueryresultController.$inject=["ngeoQueryResult"],h.module.controller("AppQueryresultController",h.QueryresultController),h.MainController=function(e,o){this.queryActive=!0;var t=new c.default({source:new m.default({url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",params:{LAYERS:"information"}})}),r=new c.default({source:new m.default({url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",params:{LAYERS:"bus_stop"}})});this.map=new s.default({layers:[new p.default({source:new d.default}),t,r],view:new u.default({projection:"EPSG:21781",resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:0})}),o.map=this.map,o.collection.push(new n.default({id:1,name:"bus_stop",visible:!0,wfsUrl:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",ogcLayers:[{name:"bus_stop",queryable:!0}]})),o.collection.push(new n.default({id:2,name:"information",visible:!0,wfsUrl:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",ogcLayers:[{name:"information",queryable:!0}]}))},h.MainController.$inject=["$scope","ngeoDataSources"],h.module.controller("MainController",h.MainController),o.default=h},418:function(e,o){},5:function(e,o,t){"use strict";var r=t(0),n=t(19),i=t(18);const a=function(e){const o=e||{},t=void 0!==o.projection?o.projection:"EPSG:3857",r=void 0!==o.tileGrid?o.tileGrid:i.a.createXYZ({extent:i.a.extentFromProjection(t),maxZoom:o.maxZoom,minZoom:o.minZoom,tileSize:o.tileSize});n.a.call(this,{attributions:o.attributions,cacheSize:o.cacheSize,crossOrigin:o.crossOrigin,opaque:o.opaque,projection:t,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:o.tileLoadFunction,tilePixelRatio:o.tilePixelRatio,tileUrlFunction:o.tileUrlFunction,url:o.url,urls:o.urls,wrapX:void 0===o.wrapX||o.wrapX,transition:o.transition})};Object(r.inherits)(a,n.a),o.a=a}},[416]);
//# sourceMappingURL=bboxquery.c8355db14c393c7fb67b.js.map