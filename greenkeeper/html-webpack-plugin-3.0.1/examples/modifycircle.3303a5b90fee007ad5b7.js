webpackJsonp([20],{4:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(5);const n=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[n.ATTRIBUTION];const r=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";i.a.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:r,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(r.inherits)(n,i.a),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=n},485:function(e,t,o){o(9),e.exports=o(486)},486:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(487),o(10);var r=v(o(113)),i=v(o(274)),n=v(o(12)),a=v(o(16)),l=v(o(17)),s=v(o(29)),u=v(o(4)),c=v(o(25)),d=v(o(135)),p=v(o(22)),f=v(o(33)),h=v(o(18)),m=v(o(15));function v(e){return e&&e.__esModule?e:{default:e}}var w={},b=angular.module("app",[m.default.name]);w.MainController=function(){this.map=new n.default({layers:[new l.default({source:new u.default})],view:new a.default({center:[-10997148,4569099],zoom:4})});var e=this.map,t=new d.default([-10691093,4966327],465e3);this.features=new f.default;var o=new h.default({geometry:p.default.fromCircle(t),color:"#000000",label:"Circle 1",opacity:"0.5",stroke:"2"});o.set(r.default.IS_CIRCLE,!0),this.features.push(o);var m=new c.default({features:this.features});new s.default({source:m}).setMap(e),this.interaction=new i.default({features:this.features});var v=this.interaction;v.setActive(!0),e.addInteraction(v)},b.controller("MainController",w.MainController),t.default=w},487:function(e,t){},5:function(e,t,o){"use strict";var r=o(0),i=o(19),n=o(20);const a=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:Object(n.a)({extent:Object(n.b)(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});i.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(r.inherits)(a,i.a),t.a=a}},[485]);
//# sourceMappingURL=modifycircle.3303a5b90fee007ad5b7.js.map