webpackJsonp([25],{386:function(e,o,t){t(8),e.exports=t(387)},387:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),t(388),t(9);var r=h(t(83)),n=h(t(128)),i=h(t(179)),a=h(t(15)),l=h(t(96)),u=h(t(283)),s=h(t(11)),c=h(t(17)),p=h(t(70)),m=h(t(16)),d=h(t(57)),f=h(t(4));function h(e){return e&&e.__esModule?e:{default:e}}var y={};y.module=angular.module("app",[n.default.module.name,a.default.name,l.default.name,u.default.name]),y.module.value("ngeoQueryOptions",{limit:20}),y.queryresultComponent={controller:"AppQueryresultController",controllerAs:"qrCtrl",templateUrl:"partials/queryresult.html"},y.module.component("appQueryresult",y.queryresultComponent),y.QueryresultController=function(e){this.result=e},y.QueryresultController.$inject=["ngeoQueryResult"],y.module.controller("AppQueryresultController",y.QueryresultController),y.MainController=function(e,o){this.queryActive=!0;var t=new p.default({source:new d.default({url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",params:{LAYERS:"information"}})}),n=new p.default({source:new d.default({url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",params:{LAYERS:"bus_stop"}})});this.map=new s.default({layers:[new m.default({source:new f.default}),t,n],view:new c.default({projection:r.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:0})}),o.map=this.map,o.collection.push(new i.default({id:1,name:"bus_stop",visible:!0,wfsUrl:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",ogcLayers:[{name:"bus_stop",queryable:!0}]})),o.collection.push(new i.default({id:2,name:"information",visible:!0,wfsUrl:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",ogcLayers:[{name:"information",queryable:!0}]}))},y.MainController.$inject=["$scope","ngeoDataSources"],y.module.controller("MainController",y.MainController),o.default=y},388:function(e,o){},4:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t(0),n=t(5);const i=function(e){const o=e||{};let t;t=void 0!==o.attributions?o.attributions:[i.ATTRIBUTION];const r=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",a=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";n.a.call(this,{attributions:t,cacheSize:o.cacheSize,crossOrigin:r,opaque:void 0===o.opaque||o.opaque,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,url:a,wrapX:o.wrapX})};Object(r.inherits)(i,n.a),i.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',o.default=i},5:function(e,o,t){"use strict";var r=t(0),n=t(19),i=t(20);const a=function(e){const o=e||{},t=void 0!==o.projection?o.projection:"EPSG:3857",r=void 0!==o.tileGrid?o.tileGrid:i.a.createXYZ({extent:i.a.extentFromProjection(t),maxZoom:o.maxZoom,minZoom:o.minZoom,tileSize:o.tileSize});n.a.call(this,{attributions:o.attributions,cacheSize:o.cacheSize,crossOrigin:o.crossOrigin,opaque:o.opaque,projection:t,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:o.tileLoadFunction,tilePixelRatio:o.tilePixelRatio,tileUrlFunction:o.tileUrlFunction,url:o.url,urls:o.urls,wrapX:void 0===o.wrapX||o.wrapX,transition:o.transition})};Object(r.inherits)(a,n.a),o.a=a}},[386]);
//# sourceMappingURL=bboxquery.66292c36cdd35920b6e7.js.map