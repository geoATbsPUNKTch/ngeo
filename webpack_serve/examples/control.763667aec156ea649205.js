webpackJsonp([9],{392:function(t,e,o){o(8),t.exports=o(393)},393:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(394),o(9);var i=u(o(15)),n=u(o(289)),r=u(o(11)),s=u(o(16)),a=u(o(395)),l=u(o(17)),c=u(o(4));function u(t){return t&&t.__esModule?t:{default:t}}var d={};d.module=angular.module("app",[i.default.name,n.default.name]),d.MainController=function(){this.map=new r.default({layers:[new l.default({source:new c.default})],view:new s.default({center:[0,0],zoom:4})}),this.control=new a.default({className:"mouse-position"})},d.module.controller("MainController",d.MainController),e.default=d},394:function(t,e){},395:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),n=o(1),r=o(12),s=o(31),a=o(125),l=o(10);const c=function(t){const e=t||{},o=document.createElement("DIV");o.className=void 0!==e.className?e.className:"ol-mouse-position";const i=e.render?e.render:c.render;a.default.call(this,{element:o,render:i,target:e.target}),n.default.listen(this,s.default.getChangeEventType(c.Property_.PROJECTION),this.handleProjectionChanged_,this),e.coordinateFormat&&this.setCoordinateFormat(e.coordinateFormat),e.projection&&this.setProjection(e.projection),this.undefinedHTML_=void 0!==e.undefinedHTML?e.undefinedHTML:"",this.renderedHTML_=o.innerHTML,this.mapProjection_=null,this.transform_=null,this.lastMouseMovePixel_=null};Object(i.inherits)(c,a.default),c.render=function(t){const e=t.frameState;e?this.mapProjection_!=e.viewState.projection&&(this.mapProjection_=e.viewState.projection,this.transform_=null):this.mapProjection_=null,this.updateHTML_(this.lastMouseMovePixel_)},c.prototype.handleProjectionChanged_=function(){this.transform_=null},c.prototype.getCoordinateFormat=function(){return this.get(c.Property_.COORDINATE_FORMAT)},c.prototype.getProjection=function(){return this.get(c.Property_.PROJECTION)},c.prototype.handleMouseMove=function(t){const e=this.getMap();this.lastMouseMovePixel_=e.getEventPixel(t),this.updateHTML_(this.lastMouseMovePixel_)},c.prototype.handleMouseOut=function(t){this.updateHTML_(null),this.lastMouseMovePixel_=null},c.prototype.setMap=function(t){if(a.default.prototype.setMap.call(this,t),t){const e=t.getViewport();this.listenerKeys.push(n.default.listen(e,r.a.MOUSEMOVE,this.handleMouseMove,this),n.default.listen(e,r.a.MOUSEOUT,this.handleMouseOut,this))}},c.prototype.setCoordinateFormat=function(t){this.set(c.Property_.COORDINATE_FORMAT,t)},c.prototype.setProjection=function(t){this.set(c.Property_.PROJECTION,Object(l.get)(t))},c.prototype.updateHTML_=function(t){let e=this.undefinedHTML_;if(t&&this.mapProjection_){if(!this.transform_){const t=this.getProjection();this.transform_=t?Object(l.getTransformFromProjections)(this.mapProjection_,t):l.identityTransform}const o=this.getMap().getCoordinateFromPixel(t);if(o){this.transform_(o,o);const t=this.getCoordinateFormat();e=t?t(o):o.toString()}}this.renderedHTML_&&e==this.renderedHTML_||(this.element.innerHTML=e,this.renderedHTML_=e)},c.Property_={PROJECTION:"projection",COORDINATE_FORMAT:"coordinateFormat"},e.default=c},4:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),n=o(5);const r=function(t){const e=t||{};let o;o=void 0!==e.attributions?e.attributions:[r.ATTRIBUTION];const i=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",s=void 0!==e.url?e.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";n.a.call(this,{attributions:o,cacheSize:e.cacheSize,crossOrigin:i,opaque:void 0===e.opaque||e.opaque,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:s,wrapX:e.wrapX})};Object(i.inherits)(r,n.a),r.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',e.default=r},5:function(t,e,o){"use strict";var i=o(0),n=o(19),r=o(20);const s=function(t){const e=t||{},o=void 0!==e.projection?e.projection:"EPSG:3857",i=void 0!==e.tileGrid?e.tileGrid:r.a.createXYZ({extent:r.a.extentFromProjection(o),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});n.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,opaque:e.opaque,projection:o,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};Object(i.inherits)(s,n.a),e.a=s}},[392]);
//# sourceMappingURL=control.763667aec156ea649205.js.map