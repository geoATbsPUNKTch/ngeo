webpackJsonp([33],{107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(89));function r(e){return e&&e.__esModule?e:{default:e}}var u=[4e3,3750,3500,3250,3e3,2750,2500,2250,2e3,1750,1500,1250,1e3,750,650,500,250,100,50,20,10,5,2.5,2,1.5,1,.5],a=new(r(n(114)).default)({extent:[42e4,3e4,9e5,35e4],resolutions:u,matrixIds:u.map(function(e,t){return""+t})}),l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{attributions:"géodonnées &copy; Etat de Vaud & &copy; contributeurs OpenStreetMap",url:"https://ows{1-4}.asitvd.ch/wmts/1.0.0/{Layer}/default/default/0/21781/{TileMatrix}/{TileRow}/{TileCol}.png",projection:"EPSG:21781",requestEncoding:"REST",layer:e.layer,style:"default",matrixSet:"21781",format:"image/png",tileGrid:a}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),t}();t.default=l},404:function(e,t,n){n(10),e.exports=n(405)},405:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(406),n(11);var o=i(n(107)),r=i(n(13)),u=i(n(18)),a=i(n(15)),l=(i(n(1)),i(n(17)));function i(e){return e&&e.__esModule?e:{default:e}}var f={};f.module=angular.module("app",[l.default.name]),f.MainController=function(){this.map=new r.default({layers:[new a.default({source:new o.default({layer:"asitvd.fond_couleur"})})],view:new u.default({resolutions:[250,100,50,20,10,5,2.5,2,1.5,1,.5],center:[535e3,154e3],zoom:0})})},f.module.controller("MainController",f.MainController),t.default=f},406:function(e,t){}},[404]);
//# sourceMappingURL=asitvd.9dff6d9b41e87332ee3f.js.map