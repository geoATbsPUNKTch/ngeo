webpackJsonp([16],{4:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=o(5);const n=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[n.ATTRIBUTION];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(i.inherits)(n,r.a),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=n},5:function(e,t,o){"use strict";var i=o(0),r=o(19),n=o(20);const a=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:Object(n.a)({extent:Object(n.b)(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(a,r.a),t.a=a},507:function(e,t,o){o(8),e.exports=o(508)},508:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(509),o(9);var i=x(o(271)),r=x(o(32)),n=x(o(18)),a=x(o(11)),l=x(o(16)),u=x(o(17)),c=x(o(28)),s=x(o(4)),d=x(o(25)),f=x(o(114)),p=x(o(41)),h=x(o(23)),w=x(o(40)),m=x(o(58)),v=x(o(22)),g=x(o(15));function x(e){return e&&e.__esModule?e:{default:e}}var y={};y.module=angular.module("app",[g.default.name]);var b=angular.module("app",["ngeo"]);y.MainController=function(){this.map=new a.default({layers:[new u.default({source:new s.default})],view:new l.default({center:[-10997148,4569099],zoom:4})});var e=this.map,t=new v.default([[[-9e6,4e6],[-11e6,4e6],[-11e6,6e6],[-9e6,6e6]]]);this.features=new r.default,this.features.push(new n.default({geometry:t}));var o=new d.default({features:this.features}),g=new c.default({source:o});g.setMap(e);var x,y=((x={}).Polygon=[new h.default({fill:new w.default({color:[255,255,255,.5]})}),new h.default({stroke:new p.default({color:[255,255,255,1],width:5})}),new h.default({stroke:new p.default({color:[0,153,255,1],width:3})})],x.Point=new h.default({image:new m.default,text:new f.default({text:"",font:"normal 18px FontAwesome",fill:new w.default({color:"#ffffff"})})}),x.GeometryCollection=x.Polygon.concat(x.Point),function(e,t){return x[e.getGeometry().getType()]});this.interaction=new i.default({features:this.features,layers:[g],style:y});var b=this.interaction;b.setActive(!1),e.addInteraction(b),e.on("singleclick",function(e){this.map.forEachFeatureAtPixel(e.pixel,function(e){return e})&&this.interaction.setActive(!0)},this)},b.controller("MainController",y.MainController),t.default=y},509:function(e,t){}},[507]);
//# sourceMappingURL=rotate.a1b0e129b9addbb4b4d1.js.map