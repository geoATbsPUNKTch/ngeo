webpackJsonp([26],{508:function(e,a,l){l(18),e.exports=l(509)},509:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),l(510),l(19);i(l(4));var n=i(l(250)),t=i(l(95));function i(e){return e&&e.__esModule?e:{default:e}}var o={};o.module=angular.module("gmfapp",[n.default.name,t.default.module.name]),o.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),o.MainController=function(e,a){this.ngeoWMSTime_=a,this.wmsTimeRangeMode={widget:"datepicker",maxValue:"2013-12-31T00:00:00Z",minValue:"2006-01-01T00:00:00Z",maxDefValue:null,minDefValue:null,resolution:"day",mode:"range",interval:[0,1,0,0]},this.wmsTimeValueMode={widget:"datepicker",maxValue:"2015-12-31T00:00:00Z",minValue:"2014-01-01T00:00:00Z",maxDefValue:null,minDefValue:null,resolution:"month",mode:"value",interval:[0,1,0,0]},this.value,this.rangeValue,this.onDateSelected=function(e){this.value=this.ngeoWMSTime_.formatWMSTimeParam(this.wmsTimeValueMode,e)},this.onDateRangeSelected=function(e){this.rangeValue=this.ngeoWMSTime_.formatWMSTimeParam(this.wmsTimeRangeMode,e)}},o.MainController.$inject=["$scope","ngeoWMSTime"],o.module.controller("MainController",o.MainController),a.default=o},510:function(e,a){}},[508]);
//# sourceMappingURL=datepicker.128df23660ed4284bf16.js.map