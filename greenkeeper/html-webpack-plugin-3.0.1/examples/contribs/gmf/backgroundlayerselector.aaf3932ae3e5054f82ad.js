webpackJsonp([27],{517:function(e,o,n){n(15),n(16),e.exports=n(518)},518:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),n(519);var l=m(n(260)),t=m(n(28)),a=m(n(19)),u=m(n(35)),r=m(n(17)),i=m(n(21));function m(e){return e&&e.__esModule?e:{default:e}}var d={};d.module=angular.module("gmfapp",["gettext",l.default.name,t.default.name,a.default.module.name]),d.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),d.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),d.MainController=function(e){e.loadThemes(),this.dimensions={},this.map=new r.default({layers:[],view:new i.default({center:[632464,185457],projection:u.default,minZoom:3,zoom:3})})},d.MainController.$inject=["gmfThemes"],d.module.controller("MainController",d.MainController),o.default=d},519:function(e,o){}},[517]);
//# sourceMappingURL=backgroundlayerselector.aaf3932ae3e5054f82ad.js.map