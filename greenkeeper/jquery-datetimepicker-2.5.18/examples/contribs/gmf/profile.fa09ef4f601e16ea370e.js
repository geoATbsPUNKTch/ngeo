webpackJsonp([7],{547:function(e,t,o){o(15),e.exports=o(548)},548:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(549),o(17);var i=w(o(169)),r=w(o(28)),n=w(o(348)),a=w(o(123)),l=w(o(35)),s=w(o(18)),c=w(o(16)),u=w(o(21)),d=w(o(68)),p=w(o(14)),f=w(o(7)),h=w(o(31)),m=w(o(10));function w(e){return e&&e.__esModule?e:{default:e}}var g={};g.module=angular.module("gmfapp",[i.default.module.name,r.default.name,n.default.name,a.default.name]),g.module.value("gmfProfileJsonUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/profile.json"),g.constant("defaultTheme","Demo"),g.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),g.MainController=function(e,t){this.profileLine=null,this.profileLinesconfiguration={aster:{color:"#0404A0"},srtm:{color:"#04A004"}},this.profileOptions={styleDefs:"svg {background-color: #D3E5D7};"},this.map=new c.default({layers:[new p.default({source:new f.default})],view:new u.default({projection:l.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:3})});var o=new m.default({stroke:new h.default({color:"#ffcc33",width:2})}),i=new s.default,r=t.getFeatureOverlay();r.setFeatures(i),r.setStyle(o),t.init(this.map),this.drawLine=new d.default({type:"LineString",features:i}),this.drawLine.setActive(!1),this.map.addInteraction(this.drawLine),this.toggleDrawLineActive=function(){this.drawLine.getActive()?(this.drawLine.setActive(!1),this.clear_()):this.drawLine.setActive(!0)},this.clear_=function(){i.clear(),this.profileLine=null},this.drawLine.on("drawstart",function(){this.clear_()},this),this.drawLine.on("drawend",function(t){this.profileLine=t.feature.getGeometry(),e.$digest()},this)},g.MainController.$inject=["$scope","ngeoFeatureOverlayMgr"],g.module.controller("MainController",g.MainController),t.default=g},549:function(e,t){},7:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=o(23),n=o(24);const a=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:n.a.createXYZ({extent:n.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(a,r.a);var l=a;const s=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[s.ATTRIBUTION];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",r=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:r,wrapX:t.wrapX})};Object(i.inherits)(s,l),s.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=s}},[547]);
//# sourceMappingURL=profile.fa09ef4f601e16ea370e.js.map