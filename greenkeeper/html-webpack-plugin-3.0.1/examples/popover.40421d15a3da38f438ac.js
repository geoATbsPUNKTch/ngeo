webpackJsonp([33],{500:function(o,n,e){e(9),o.exports=e(501)},501:function(o,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e(502),e(10);var r,t=e(503),i=(r=t)&&r.__esModule?r:{default:r};var l={};l.module=angular.module("app",[i.default.name]),n.default=l},502:function(o,n){},503:function(o,n,e){"use strict";(function(o){Object.defineProperty(n,"__esModule",{value:!0});var e=angular.module("ngeoPopover",[]);e.component_=function(){return{restrict:"A",scope:!0,controller:"NgeoPopoverController as popoverCtrl",link:function(n,e,r,t){t.anchorElm.on("hidden.bs.popover",function(){t.anchorElm.data("bs.popover").inState.click=!1}),t.anchorElm.on("inserted.bs.popover",function(){t.bodyElm.show(),t.shown=!0}),t.anchorElm.popover({container:"body",html:!0,content:t.bodyElm,placement:r.ngeoPopoverPlacement||"right"}),r.ngeoPopoverDismiss&&o(r.ngeoPopoverDismiss).on("scroll",function(){t.dismissPopover()}),n.$on("$destroy",function(){t.anchorElm.popover("destroy"),t.anchorElm.unbind("inserted.bs.popover"),t.anchorElm.unbind("hidden.bs.popover")})}}},e.anchorComponent=function(){return{restrict:"A",require:"^^ngeoPopover",link:function(o,n,e,r){r.anchorElm=n}}},e.contentComponent=function(){return{restrict:"A",require:"^^ngeoPopover",link:function(o,n,e,r){r.bodyElm=n,n.hide()}}},e.PopoverController_=function(o){function n(o){this.anchorElm[0]!==o.target&&this.bodyElm.parent()[0]!==o.target&0===this.bodyElm.parent().find(o.target).length&&this.shown&&this.dismissPopover()}this.shown=!1,this.anchorElm=void 0,this.bodyElm=void 0,angular.element("body").on("mousedown",n.bind(this)),o.$on("$destroy",function(){angular.element("body").off("mousedown",n)})},e.PopoverController_.$inject=["$scope"],e.PopoverController_.prototype.dismissPopover=function(){this.shown=!1,this.anchorElm.popover("hide")},e.controller("NgeoPopoverController",e.PopoverController_),e.directive("ngeoPopover",e.component_),e.directive("ngeoPopoverAnchor",e.anchorComponent),e.directive("ngeoPopoverContent",e.contentComponent),n.default=e}).call(n,e(8))}},[500]);
//# sourceMappingURL=popover.40421d15a3da38f438ac.js.map