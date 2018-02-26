webpackJsonp([25],{575:function(e,t,r){r(14),e.exports=r(576)},576:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(577),r(16);var a=u(r(1)),o=u(r(196)),i=u(r(242)),s=u(r(18)),n=u(r(126)),l=u(r(197));function u(e){return e&&e.__esModule?e:{default:e}}var d={};d.module=angular.module("gmfapp",[o.default.module.name,i.default.module.name,s.default.module.name]),d.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),d.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),d.constant("defaultTheme","Demo"),d.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),d.MainController=function(e,t,r,o,i){var s=this;this.http_=e,this.q_=t,this.gmfThemes_=o,this.gmfXSDAttributes_=i,this.urls=[{name:"oeedit app. (hosted)",url:"apps/oeedit/"},{name:"oeedit app. (dev)",url:"../apps/oeedit/"},{name:"example",url:"objectediting.html"}],this.viewerUrlDev_="../apps/oeview/",this.viewerUrlHosted_="apps/oeview/",this.selectedUrl=this.urls[0],this.gmfServers_,this.gmfServer_,this.gmfLayerNodes=[],this.selectedGmfLayerNode=null,this.featuresCache_={},this.features=null,this.selectedFeature=null,this.geomTypeCache_={},this.selectedGeomType=void 0,r.$watch(function(){return s.selectedGmfLayerNode},function(e,t){s.selectedFeature=null,e&&(s.getFeatures_(e).then(s.handleGetFeatures_.bind(s,e)),s.getGeometryType_(e).then(s.handleGetGeometryType_.bind(s,e)))}),this.themeName="ObjectEditing",this.gmfThemes_.loadThemes(),this.gmfThemes_.getOgcServersObject().then(function(e){s.gmfServers_=e,s.gmfThemes_.getThemesObject().then(function(e){if(e){var t=void 0,r=void 0,o=void 0;for(t=0,r=e.length;t<r;t++)if(e[t].name===s.themeName){o=e[t];break}if(o){var i=o.children[0];a.default.assert(i.ogcServer);var n=s.gmfServers_[i.ogcServer];if(n&&!0===n.wfsSupport&&n.urlWfs){s.gmfServer_=n;var l=[];for(t=0,r=i.children.length;t<r;t++)i.children[t].metadata.identifierAttributeField&&l.push(i.children[t]);s.gmfLayerNodes=l,s.selectedGmfLayerNode=s.gmfLayerNodes[1]}}}})})},d.MainController.$inject=["$http","$q","$scope","gmfThemes","gmfXSDAttributes"],d.MainController.prototype.runEditor=function(){var e=this.selectedGeomType,t=this.selectedFeature,r=this.selectedGmfLayerNode.id,o=this.selectedGmfLayerNode.metadata.identifierAttributeField;a.default.assert(void 0!==o);var s=t.get(o),n={};n[i.default.Param.GEOM_TYPE]=e,n[i.default.Param.ID]=s,n[i.default.Param.LAYER]=r,n[i.default.Param.THEME]=this.themeName,n[i.default.Param.PROPERTY]=o;var l=d.MainController.appendParams(this.selectedUrl.url,n);window.open(l)},d.MainController.prototype.runViewerDev=function(){this.runViewer_(this.viewerUrlDev_)},d.MainController.prototype.runViewerHosted=function(){this.runViewer_(this.viewerUrlHosted_)},d.MainController.prototype.runViewer_=function(e){var t=this.selectedGmfLayerNode,r=t.id,o=t.name,i=t.metadata.identifierAttributeField;a.default.assert(void 0!==i);for(var s=[],n=this.featuresCache_[r],l=0,u=n.length;l<u;l++)s.push(n[l].get(i));var h={};h.wfs_layer=o,h["wfs_"+i]=s.join(",");var m=d.MainController.appendParams(e,h);window.open(m)},d.MainController.prototype.getFeatures_=function(e){return this.getFeaturesDeferred_=this.q_.defer(),this.getFeaturesFromCache_(e)?this.getFeaturesDeferred_.resolve():this.issueGetFeatures_(e),this.getFeaturesDeferred_.promise},d.MainController.prototype.issueGetFeatures_=function(e){var t=this,r=e.id,a=d.MainController.appendParams(this.gmfServer_.urlWfs,{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:"1.1.0",TYPENAME:e.layers});this.http_.get(a).then(function(e){var a=(new n.default).readFeatures(e.data);t.featuresCache_[r]=a,t.getFeaturesDeferred_.resolve()})},d.MainController.prototype.handleGetFeatures_=function(e){var t=this.getFeaturesFromCache_(e);this.features=t,this.selectedFeature=this.features[0]},d.MainController.prototype.getFeaturesFromCache_=function(e){var t=e.id;return this.featuresCache_[t]||null},d.MainController.prototype.getGeometryType_=function(e){return this.getGeometryTypeDeferred_=this.q_.defer(),this.getGeometryTypeFromCache_(e)?this.getGeometryTypeDeferred_.resolve():this.issueGetAttributesRequest_(e),this.getGeometryTypeDeferred_.promise},d.MainController.prototype.issueGetAttributesRequest_=function(e){this.gmfXSDAttributes_.getAttributes(e.id).then(function(e,t){var r=l.default.getGeometryAttribute(t);r&&r.geomType&&(this.geomTypeCache_[e.id]=r.geomType,this.getGeometryTypeDeferred_.resolve())}.bind(this,e))},d.MainController.prototype.handleGetGeometryType_=function(e){var t=this.getGeometryTypeFromCache_(e);this.selectedGeomType=t},d.MainController.prototype.getGeometryTypeFromCache_=function(e){var t=e.id;return this.geomTypeCache_[t]},d.MainController.appendParams=function(e,t){var r=[];Object.keys(t).forEach(function(e){null!==t[e]&&void 0!==t[e]&&r.push(e+"="+encodeURIComponent(t[e]))});var a=r.join("&");return(e=-1===(e=e.replace(/[?&]$/,"")).indexOf("?")?e+"?":e+"&")+a},d.module.controller("MainController",d.MainController),t.default=d},577:function(e,t){}},[575]);
//# sourceMappingURL=objecteditinghub.a00c17dab5d3b225c80c.js.map