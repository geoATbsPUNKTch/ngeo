webpackJsonp([2],{201:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=m(i(1)),n=g(i(0)),a=m(i(2)),o=m(i(10)),s=g(i(28)),l=m(i(29)),u=m(i(20)),h=m(i(59)),c=m(i(70)),d=m(i(55)),f=m(i(41)),p=m(i(38));function g(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function m(t){return t&&t.__esModule?t:{default:t}}var _=function(t){d.default.call(this,{handleEvent:s.TRUE}),this.changeEventKey_=null,this.type_=t.type,this.minPoints_=t.minPoints?t.minPoints:"Polygon"===this.type_?3:2,this.sketchFeature_=null,this.sketchPoints_=[],this.sketchPoint_=null,this.overlay_=new f.default({source:new p.default({useSpatialIndex:!1,wrapX:!!t.wrapX&&t.wrapX}),style:t.style?t.style:c.default.getDefaultStyleFunction(),updateWhileAnimating:!0,updateWhileInteracting:!0}),a.default.listen(this,"change:active",this.updateState_,this),this.set("dirty",!1),this.set("drawing",!1),this.set("valid",!1)};n.inherits(_,d.default),_.prototype.setMap=function(t){this.getMap()&&this.changeEventKey_&&a.default.unlistenByKey(this.changeEventKey_),d.default.prototype.setMap.call(this,t),t&&(this.changeEventKey_=a.default.listen(t.getView(),"change:center",this.handleViewCenterChange_,this)),this.updateState_()},_.prototype.getDirty=function(){return this.get("dirty")},_.prototype.getDrawing=function(){return this.get("drawing")},_.prototype.getValid=function(){return this.get("valid")},_.prototype.getFeature=function(){return this.sketchFeature_},_.prototype.addToDrawing=function(){var t=this.getActive(),e=this.getDrawing();if(t&&e){var i=void 0,n=this.getSketchPointGeometry_().getCoordinates(),a=void 0;if("Point"===this.type_)return this.sketchFeature_||(this.sketchFeature_=new o.default(new u.default(n)),this.dispatchEvent(new c.default.Event("drawstart",this.sketchFeature_))),i=this.sketchFeature_.getGeometry(),r.default.assertInstanceof(i,h.default),void i.setCoordinates(n);"LineString"===this.type_&&(this.sketchPoints_.push(this.sketchPoint_),this.sketchFeature_?(i=this.sketchFeature_.getGeometry(),r.default.assertInstanceof(i,h.default),(a=i.getCoordinates()).push(n.slice()),i.setCoordinates(a)):(a=[n.slice(),n.slice()],this.sketchFeature_=new o.default(new l.default(a)),this.dispatchEvent(new c.default.Event("drawstart",this.sketchFeature_)))),this.getDirty()&&this.set("dirty",!1);var s=this.getValid();"LineString"===this.type_&&(a.length>=this.minPoints_?s||this.set("valid",!0):s&&this.set("valid",!1)),this.sketchPoint_=null,this.updateSketchFeatures_()}},_.prototype.clearDrawing=function(){this.setActive(!1),this.setActive(!0)},_.prototype.finishDrawing=function(){var t=this.getActive(),e=this.getDrawing();t&&e&&(this.sketchPoint_&&this.addToDrawing(),this.set("drawing",!1),this.dispatchEvent(new c.default.Event("drawend",this.sketchFeature_)))},_.prototype.startDrawing_=function(){this.set("drawing",!0),this.createOrUpdateSketchPoint_(),this.updateSketchFeatures_(),"Point"===this.type_&&this.addToDrawing()},_.prototype.modifyDrawing_=function(){if(this.sketchFeature_){var t=this.getCenter_();if("LineString"===this.type_){var e=this.sketchFeature_.getGeometry();r.default.assertInstanceof(e,h.default);var i=e.getCoordinates();i.pop(),i.push(t),e.setCoordinates(i)}this.getDirty()||this.set("dirty",!0)}},_.prototype.abortDrawing_=function(){var t=this.sketchFeature_;return(t||this.sketchPoints_.length>0)&&(this.sketchFeature_=null,this.sketchPoint_=null,this.overlay_.getSource().clear(!0)),this.sketchPoints_=[],this.set("dirty",!1),this.set("drawing",!1),this.set("valid",!1),t},_.prototype.updateState_=function(){var t=this.getMap(),e=this.getActive();t&&e?this.startDrawing_():this.abortDrawing_(),this.overlay_.setMap(e?t:null)},_.prototype.handleViewCenterChange_=function(t){var e=this.getActive(),i=this.getDrawing();e&&i&&(this.createOrUpdateSketchPoint_(),"Point"===this.type_?this.addToDrawing():(this.modifyDrawing_(),this.updateSketchFeatures_()))},_.prototype.createOrUpdateSketchPoint_=function(){var t=this.getCenter_();this.sketchPoint_?this.getSketchPointGeometry_().setCoordinates(t):this.sketchPoint_=new o.default(new u.default(t))},_.prototype.updateSketchFeatures_=function(){var t=[];this.sketchFeature_&&t.push(this.sketchFeature_),this.sketchPoint_&&t.push(this.sketchPoint_);var e=this.overlay_.getSource();e.clear(!0),e.addFeatures(t),e.addFeatures(this.sketchPoints_)},_.prototype.getSketchPointGeometry_=function(){r.default.assert(this.sketchPoint_,"sketch point should be thruty");var t=this.sketchPoint_.getGeometry();return r.default.assertInstanceof(t,u.default),t},_.prototype.getCenter_=function(){var t=this.getMap().getView().getCenter();return r.default.assertArray(t),t},e.default=_},545:function(t,e,i){i(17),t.exports=i(546)},546:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(547),i(18);var r=f(i(30)),n=f(i(167)),a=f(i(548)),o=f(i(550)),s=f(i(112)),l=(f(i(36)),f(i(16))),u=f(i(24)),h=f(i(326)),c=f(i(14)),d=f(i(6));function f(t){return t&&t.__esModule?t:{default:t}}var p={};p.module=angular.module("gmfapp",[r.default.name,n.default.module.name,a.default.name,o.default.name,s.default.name]),p.module.value("gmfRasterUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/raster"),p.constant("defaultTheme","Demo"),p.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),p.MainController=function(t){var e=t.getMapCenter()||[537635,152640],i=t.getMapZoom()||3;this.map=new l.default({layers:[new c.default({source:new d.default})],view:new u.default({projection:"EPSG:21781",resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:e,zoom:i})}),this.map.addControl(new h.default),this.measureLengthActive=!1,this.measurePointLayersConfig={aster:{unit:"m",decimals:2},srtm:{unit:"m"}},this.measurePointActive=!1},p.MainController.$inject=["gmfPermalink"],p.module.controller("MainController",p.MainController),e.default=p},547:function(t,e){},548:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=f(i(12)),n=f(i(93)),a=f(i(549)),o=(f(i(201)),f(i(77))),s=f(i(2)),l=f(i(34)),u=f(i(31)),h=f(i(108)),c=f(i(32)),d=f(i(11));function f(t){return t&&t.__esModule?t:{default:t}}var p=angular.module("gmfMobileMeasureLength",[n.default.name]);p.value("gmfMobileMeasureLengthTemplateUrl",function(t,e){var i=e.gmfMobileMeasureLengthTemplateurl;return void 0!==i?i:r.default.baseModuleTemplateUrl+"/mobile/measure/lengthComponent.html"}),p.component_=function(t){return{restrict:"A",scope:{active:"=gmfMobileMeasurelengthActive",precision:"<?gmfMobileMeasurelengthPrecision",map:"=gmfMobileMeasurelengthMap",sketchStyle:"=?gmfMobileMeasurelengthSketchstyle"},controller:"GmfMobileMeasureLengthController as ctrl",bindToController:!0,templateUrl:t,link:function(t,e,i,r){r.init()}}},p.component_.$inject=["gmfMobileMeasureLengthTemplateUrl"],p.directive("gmfMobileMeasurelength",p.component_),p.Controller_=function(t,e){var i=this;this.scope_=t,this.filter_=e,this.map,this.active,this.scope_.$watch(function(){return i.active},function(t){i.measure.setActive(t)}),this.precision,this.sketchStyle=new d.default({fill:new u.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new c.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new h.default({stroke:new c.default({color:"rgba(0, 0, 0, 0.7)",width:2}),points:4,radius:8,radius2:0,angle:0})}),this.measure,this.drawInteraction,this.dirty=!1,this.drawing=!1,this.valid=!1},p.Controller_.$inject=["$scope","$filter"],p.Controller_.prototype.init=function(){this.measure=new a.default(this.filter_("ngeoUnitPrefix"),{precision:this.precision,sketchStyle:this.sketchStyle}),this.measure.setActive(this.active),o.default.interaction(this.measure),this.drawInteraction=this.measure.getDrawInteraction();var t=this.drawInteraction;o.default.interaction(t),Object.defineProperty(this,"hasPoints",{get:function(){return null!==this.drawInteraction.getFeature()}}),s.default.listen(t,l.default.getChangeEventType("dirty"),function(){this.dirty=t.getDirty(),this.dirty&&this.scope_.$apply()},this),s.default.listen(t,l.default.getChangeEventType("drawing"),function(){this.drawing=t.getDrawing()},this),s.default.listen(t,l.default.getChangeEventType("valid"),function(){this.valid=t.getValid()},this),this.map.addInteraction(this.measure)},p.Controller_.prototype.addPoint=function(){this.drawInteraction.addToDrawing()},p.Controller_.prototype.clear=function(){this.drawInteraction.clearDrawing()},p.Controller_.prototype.finish=function(){this.drawInteraction.finishDrawing()},p.Controller_.prototype.deactivate=function(){this.active=!1},p.controller("GmfMobileMeasureLengthController",p.Controller_),e.default=p},549:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(i(243)),n=o(i(201)),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(i(0));function o(t){return t&&t.__esModule?t:{default:t}}var s=function(t,e){var i=void 0!==e?e:{};a.obj.assign(i,{displayHelpTooltip:!1}),r.default.call(this,t,i)};a.inherits(s,r.default),s.prototype.createDrawInteraction=function(t,e){return new n.default({type:"LineString",style:t,source:e})},e.default=s},550:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=f(i(12)),n=f(i(180)),a=f(i(1)),o=f(i(551)),s=(f(i(201)),f(i(169)),f(i(77))),l=f(i(2)),u=f(i(31)),h=f(i(108)),c=f(i(32)),d=f(i(11));function f(t){return t&&t.__esModule?t:{default:t}}var p=angular.module("gmfMobileMeasurePoint",[n.default.module.name]);p.value("gmfMobileMeasurePointTemplateUrl",function(t,e){var i=e.gmfMobileMeasurePointTemplateurl;return void 0!==i?i:r.default.baseModuleTemplateUrl+"/mobile/measure/pointComponent.html"}),p.component_=function(t){return{restrict:"A",scope:{active:"=gmfMobileMeasurepointActive",getCoordinateDecimalsFn:"&?gmfMobileMeasurepointCoordinatedecimals",getLayersConfigFn:"&gmfMobileMeasurepointLayersconfig",map:"=gmfMobileMeasurepointMap",sketchStyle:"=?gmfMobileMeasurepointSketchstyle",format:"<gmfMobileMeasurepointFormat"},controller:"GmfMobileMeasurePointController as ctrl",bindToController:!0,templateUrl:t,link:function(t,e,i,r){r.init()}}},p.component_.$inject=["gmfMobileMeasurePointTemplateUrl"],p.directive("gmfMobileMeasurepoint",p.component_),p.Controller_=function(t,e,i,r,n){var a=this;this.gmfRaster_=r,this.ngeoDebounce_=n,this.gettextCatalog_=t,this.$filter_=i,this.map,this.active,e.$watch(function(){return a.active},function(t){a.measure.setActive(t),a.handleMeasureActiveChange_()});var o=this.getCoordinateDecimalsFn;this.coordinateDecimals=o?o():0,this.layersConfig,this.sketchStyle,void 0===this.sketchStyle&&(this.sketchStyle=new d.default({fill:new u.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new c.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new h.default({stroke:new c.default({color:"rgba(0, 0, 0, 0.7)",width:2}),points:4,radius:8,radius2:0,angle:0})})),this.format,this.measure,this.drawInteraction,this.mapViewPropertyChangeEventKey_=null},p.Controller_.$inject=["gettextCatalog","$scope","$filter","gmfRaster","ngeoDebounce"],p.Controller_.prototype.init=function(){this.measure=new o.default(this.$filter_("ngeoNumberCoordinates"),this.format||"{x}, {y}",{decimals:this.coordinateDecimals,sketchStyle:this.sketchStyle}),this.measure.setActive(this.active),s.default.interaction(this.measure),this.drawInteraction=this.measure.getDrawInteraction(),s.default.interaction(this.drawInteraction);var t=this.getLayersConfigFn();a.default.assert(Array.isArray(t)),this.layersConfig=t,this.map.addInteraction(this.measure)},p.Controller_.prototype.deactivate=function(){this.active=!1},p.Controller_.prototype.translate=function(t){return this.gettextCatalog_.getString(t)},p.Controller_.prototype.handleMeasureActiveChange_=function(){if(this.measure.getActive()){var t=this.map.getView();this.mapViewPropertyChangeEventKey_=l.default.listen(t,"propertychange",this.ngeoDebounce_(this.getMeasure_.bind(this),300,!0),this),this.getMeasure_()}else this.mapViewPropertyChangeEventKey_&&(l.default.unlistenByKey(this.mapViewPropertyChangeEventKey_),this.mapViewPropertyChangeEventKey_=null)},p.Controller_.prototype.getMeasure_=function(){var t=this,e=this.map.getView().getCenter();a.default.assertArray(e);var i={layers:this.layersConfig.map(function(t){return t.name}).join(",")};this.gmfRaster_.getRaster(e,i).then(function(e){var i=t.measure.getTooltipElement(),r=document.createElement("div");r.className="gmf-mobile-measure-point";var n=!0,a=!1,o=void 0;try{for(var s,l=t.layersConfig[Symbol.iterator]();!(n=(s=l.next()).done);n=!0){var u=s.value,h=u.name;if(h in e){var c=e[h],d=document.createElement("div");d.className="gmf-mobile-measure-point-"+h;var f=u.unit||"",p=u.decimals&&u.decimals>0||0;c=t.$filter_("number")(c,p),d.innerHTML=[t.translate(h),": ",c," ",f].join(""),r.appendChild(d)}}}catch(t){a=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(a)throw o}}var g=i.getElementsByClassName("gmf-mobile-measure-point");g[0]&&g[0].remove(),i.appendChild(r)})},p.controller("GmfMobileMeasurePointController",p.Controller_),p.LayerConfig,e.default=p},551:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=h(i(1)),n=h(i(154)),a=h(i(201)),o=u(i(0)),s=u(i(4)),l=h(i(20));function u(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function h(t){return t&&t.__esModule?t:{default:t}}var c=function(t,e,i){var r=void 0!==i?i:{};s.assign(r,{displayHelpTooltip:!1}),n.default.call(this,r),this.format_=t,this.coordFormat_=e};o.inherits(c,n.default),c.prototype.createDrawInteraction=function(t,e){return new a.default({type:"Point",style:t,source:e})},c.prototype.handleMeasure=function(t){var e=r.default.assertInstanceof(this.sketchFeature.getGeometry(),l.default),i=this.decimals;t(n.default.getFormattedPoint(e,i,this.format_,this.coordFormat_),e.getLastCoordinate())},e.default=c},6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),n=i(26),a=i(23);const o=function(t){const e=t||{},i=void 0!==e.projection?e.projection:"EPSG:3857",r=void 0!==e.tileGrid?e.tileGrid:a.a.createXYZ({extent:a.a.extentFromProjection(i),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});n.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,opaque:e.opaque,projection:i,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};Object(r.inherits)(o,n.a);var s=o;const l=function(t){const e=t||{};let i;i=void 0!==e.attributions?e.attributions:[l.ATTRIBUTION];const r=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",n=void 0!==e.url?e.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";s.call(this,{attributions:i,cacheSize:e.cacheSize,crossOrigin:r,opaque:void 0===e.opaque||e.opaque,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:n,wrapX:e.wrapX})};Object(r.inherits)(l,s),l.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';e.default=l}},[545]);
//# sourceMappingURL=mobilemeasure.ce90657b9d7045933644.js.map