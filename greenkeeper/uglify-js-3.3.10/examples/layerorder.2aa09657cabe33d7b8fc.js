webpackJsonp([20],{106:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(89));function o(e){return e&&e.__esModule?e:{default:e}}var a=[4e3,3750,3500,3250,3e3,2750,2500,2250,2e3,1750,1500,1250,1e3,750,650,500,250,100,50,20,10,5,2.5,2,1.5,1,.5],s=new(o(r(113)).default)({extent:[42e4,3e4,9e5,35e4],resolutions:a,matrixIds:a.map(function(e,t){return""+t})}),i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{attributions:"géodonnées &copy; Etat de Vaud & &copy; contributeurs OpenStreetMap",url:"https://ows{1-4}.asitvd.ch/wmts/1.0.0/{Layer}/default/default/0/21781/{TileMatrix}/{TileRow}/{TileCol}.png",projection:"EPSG:21781",requestEncoding:"REST",layer:e.layer,style:"default",matrixSet:"21781",format:"image/png",tileGrid:s}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),t}();t.default=i},461:function(e,t,r){r(10),e.exports=r(462)},462:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(463),r(11);var n=d(r(1)),o=d(r(17)),a=d(r(318)),s=d(r(464)),i=d(r(106)),u=(d(r(82)),d(r(13))),l=d(r(18)),c=d(r(15)),f=d(r(124));function d(e){return e&&e.__esModule?e:{default:e}}var p={};p.module=angular.module("app",[n.default.module.name,o.default.name,a.default.name]),p.MainController=function(e){var t=new c.default({source:new i.default({layer:"asitvd.fond_couleur"})});t.set("name","asitvd");var r=new c.default({source:new f.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill"},serverType:"mapserver"})});r.set("name","Boundaries");var n=new c.default({source:new f.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.geologie-gravimetrischer_atlas"},serverType:"mapserver"})});n.set("name","Water bodies");var o=new c.default({source:new f.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.dreiecksvermaschung"},serverType:"mapserver"})});o.set("name","Cities"),this.map=new u.default({layers:[t,r,n,o],view:new l.default({projection:"EPSG:21781",resolutions:[1e3,500,200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:1})});var a=this.map;this.roads_=new c.default({source:new f.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.bafu.laerm-strassenlaerm_tag"},serverType:"mapserver"})}),this.roads_.set("name","Roads"),this.selectedLayers=[];var d=this.selectedLayers;(0,s.default)(a.getLayers().getArray(),d,!0,e,function(e){return e!==t}),e.$watchCollection(function(){return d},function(){a.render()})},p.MainController.$inject=["$scope"],p.MainController.prototype.toggleRoadsLayer=function(e){if(void 0===e)return this.map.getLayers().getArray().indexOf(this.roads_)>=0;e?this.map.addLayer(this.roads_):this.map.removeLayer(this.roads_)},p.module.controller("MainController",p.MainController),t.default=p},463:function(e,t){},464:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(3));o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,r,o,a){var s=o.$watchCollection(function(){return e},function(){var n=void 0,o=void 0,s=void 0;if(r)for(n=e.length-1,s=0;n>=0;--n)a(e[n])&&(t[s++]=e[n]);else for(n=0,o=e.length,s=0;n<o;++n)a(e[n])&&(t[s++]=e[n]);t.length=s}),i=o.$watchCollection(function(){return t},function(){var o=void 0,s=void 0,i=void 0;if(r){for(o=0,s=e.length,i=t.length-1;o<s;++o)a(e[o])&&(e[o]=t[i--]);n.default.assert(-1==i)}else{for(o=0,s=e.length,i=0;o<s;++o)a(e[o])&&(e[o]=t[i++]);n.default.assert(i==t.length)}});return function(){s(),i()}}}},[461]);
//# sourceMappingURL=layerorder.2aa09657cabe33d7b8fc.js.map