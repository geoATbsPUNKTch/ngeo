webpackJsonp([29],{108:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(107));function o(e){return e&&e.__esModule?e:{default:e}}var a=[4e3,3750,3500,3250,3e3,2750,2500,2250,2e3,1750,1500,1250,1e3,750,650,500,250,100,50,20,10,5,2.5,2,1.5,1,.5],l=new(o(r(124)).default)({extent:[42e4,3e4,9e5,35e4],resolutions:a,matrixIds:a.map(function(e,t){return""+t})}),u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{attributions:"géodonnées &copy; Etat de Vaud & &copy; contributeurs OpenStreetMap",url:"https://ows{1-4}.asitvd.ch/wmts/1.0.0/{Layer}/default/default/0/21781/{TileMatrix}/{TileRow}/{TileCol}.png",projection:"EPSG:21781",requestEncoding:"REST",layer:e.layer,style:"default",matrixSet:"21781",format:"image/png",tileGrid:l}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),t}();t.default=u},391:function(e,t,r){r(9),e.exports=r(392)},392:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(393),r(10);var n=p(r(108)),o=p(r(81)),a=p(r(12)),l=p(r(16)),u=p(r(71)),c=p(r(17)),i=p(r(66)),s=p(r(15));function p(e){return e&&e.__esModule?e:{default:e}}var d={};d.module=angular.module("app",[s.default.name]),d.backgroundlayerComponent={bindings:{map:"=appBackgroundlayerMap"},template:r(394),controller:"AppBackgroundlayerController"},d.module.component("appBackgroundlayer",d.backgroundlayerComponent),d.BackgroundlayerController=function(e,t){var r=this;this.map,this.bgLayers=void 0,this.bgLayer=null,e.get("data/backgroundlayers.json").then(function(e){r.bgLayers=e.data,r.bgLayer=r.bgLayers[0]}),this.backgroundLayerMgr_=t},d.BackgroundlayerController.$inject=["$http","ngeoBackgroundLayerMgr"],d.BackgroundlayerController.prototype.change=function(){var e=this.bgLayer,t=this.getLayer_(e.name);this.backgroundLayerMgr_.set(this.map,t)},d.BackgroundlayerController.prototype.getLayer_=function(e){if("blank"===e)return new c.default;var t=new n.default({layer:e});return new c.default({source:t})},d.module.controller("AppBackgroundlayerController",d.BackgroundlayerController),d.MainController=function(e){this.map=new a.default({view:new l.default({projection:o.default,resolutions:[1e3,500,200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:1})});var t=new u.default({source:new i.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.dreiecksvermaschung"},serverType:"mapserver"})});this.map.addLayer(t)},d.MainController.$inject=["$scope"],d.module.controller("MainController",d.MainController),t.default=d},393:function(e,t){},394:function(e,t){e.exports='<select class=form-control ng-options="layer.name for layer in ::$ctrl.bgLayers" ng-model=$ctrl.bgLayer ng-change=$ctrl.change()> </select> '}},[391]);
//# sourceMappingURL=backgroundlayer.2a99c2881425a5438c6c.js.map