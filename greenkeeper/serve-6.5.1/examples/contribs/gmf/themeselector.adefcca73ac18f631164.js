webpackJsonp([23],{599:function(e,n,t){t(15),t(16),e.exports=t(600)},600:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t(601);var o=l(t(362)),a=l(t(47));function l(e){return e&&e.__esModule?e:{default:e}}var r={};r.module=angular.module("gmfapp",["gettext",a.default.module.name,o.default.name]),r.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),r.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),r.MainController=function(e,n,t){this.filter=function(e){return"Enseignement"!==e.name},this.manager=t,n.loadThemes()},r.MainController.$inject=["$http","gmfThemes","gmfThemeManager"],r.module.controller("MainController",r.MainController),n.default=r},601:function(e,n){}},[599]);
//# sourceMappingURL=themeselector.adefcca73ac18f631164.js.map