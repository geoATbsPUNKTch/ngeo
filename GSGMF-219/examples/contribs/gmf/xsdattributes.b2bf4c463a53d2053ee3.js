webpackJsonp([21],{608:function(t,e,o){o(15),o(16),t.exports=o(609)},609:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(610);var i=u(o(19)),n=u(o(200)),r=u(o(241)),a=u(o(201)),l=u(o(12));function u(t){return t&&t.__esModule?t:{default:t}}var s={};s.module=angular.module("gmfapp",["gettext",n.default.module.name,i.default.module.name,r.default.name]),s.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),s.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),s.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),s.MainController=function(t,e,o){var i=this;this.timeout_=t,this.xsdAttributes_=o,this.attributes=null,this.feature=null,this.layers=[];var n=["line","point","polygon"];e.loadThemes(),e.getThemesObject().then(function(t){if(t){var e=[];t.forEach(function(t){t.children.forEach(function(t){i.getDistinctFlatNodes_(t,e)})}),e.forEach(function(t){void 0===t.children&&-1!==n.indexOf(t.name)&&i.layers.push(t)})}})},s.MainController.$inject=["$timeout","gmfThemes","gmfXSDAttributes"],s.MainController.prototype.getSetLayers=function(t){return void 0!==t&&this.xsdAttributes_.getAttributes(t.id).then(this.setAttributes_.bind(this)),this.layers},s.MainController.prototype.setAttributes_=function(t){var e=this;this.feature=null,this.attributes=null,this.timeout_(function(){e.feature=new l.default,e.attributes=t},0)},s.MainController.prototype.getGeomType=function(){var t="N/A";if(this.attributes){var e=a.default.getGeometryAttribute(this.attributes);e&&e.geomType&&(t=e.geomType)}return t},s.MainController.prototype.getDistinctFlatNodes_=function(t,e){var o=void 0,i=t.children;if(void 0!==i)for(o=0;o<i.length;o++)this.getDistinctFlatNodes_(i[o],e);var n=!1;e.some(function(e){if(e.id===t.id)return n=!0}),n||e.push(t)},s.module.controller("MainController",s.MainController),e.default=s},610:function(t,e){}},[608]);
//# sourceMappingURL=xsdattributes.b2bf4c463a53d2053ee3.js.map