webpackJsonp([28],{504:function(o,n,e){e(10),o.exports=e(505)},505:function(o,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e(506),e(11);t(e(1));var r=t(e(507));function t(o){return o&&o.__esModule?o:{default:o}}var i={};i.module=angular.module("app",[r.default.name]),n.default=i},506:function(o,n){},507:function(o,n,e){"use strict";(function(o){Object.defineProperty(n,"__esModule",{value:!0});var r,t=e(1);(r=t)&&r.__esModule;var i=angular.module("ngeoPopover",[]);i.component_=function(){return{restrict:"A",scope:!0,controller:"NgeoPopoverController as popoverCtrl",link:function(n,e,r,t){t.anchorElm.on("hidden.bs.popover",function(){t.anchorElm.data("bs.popover").inState.click=!1}),t.anchorElm.on("inserted.bs.popover",function(){t.bodyElm.show(),t.shown=!0}),t.anchorElm.popover({container:"body",html:!0,content:t.bodyElm,placement:r.ngeoPopoverPlacement||"right"}),r.ngeoPopoverDismiss&&o(r.ngeoPopoverDismiss).on("scroll",function(){t.dismissPopover()}),n.$on("$destroy",function(){t.anchorElm.popover("destroy"),t.anchorElm.unbind("inserted.bs.popover"),t.anchorElm.unbind("hidden.bs.popover")})}}},i.anchorComponent=function(){return{restrict:"A",require:"^^ngeoPopover",link:function(o,n,e,r){r.anchorElm=n}}},i.contentComponent=function(){return{restrict:"A",require:"^^ngeoPopover",link:function(o,n,e,r){r.bodyElm=n,n.hide()}}},i.PopoverController_=function(o){function n(o){this.anchorElm[0]!==o.target&&this.bodyElm.parent()[0]!==o.target&0===this.bodyElm.parent().find(o.target).length&&this.shown&&this.dismissPopover()}this.shown=!1,this.anchorElm=void 0,this.bodyElm=void 0,angular.element("body").on("mousedown",n.bind(this)),o.$on("$destroy",function(){angular.element("body").off("mousedown",n)})},i.PopoverController_.$inject=["$scope"],i.PopoverController_.prototype.dismissPopover=function(){this.shown=!1,this.anchorElm.popover("hide")},i.controller("NgeoPopoverController",i.PopoverController_),i.directive("ngeoPopover",i.component_),i.directive("ngeoPopoverAnchor",i.anchorComponent),i.directive("ngeoPopoverContent",i.contentComponent),n.default=i}).call(n,e(29))}},[504]);
//# sourceMappingURL=popover.9995959470099431bc4d.js.map