webpackJsonp([27],{107:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(2)),i=r(a(1)),o=r(a(183)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(0));function r(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t){this.$filter_=e,this.gettextCatalog_=t,o.default.call(this)};u.$inject=["$filter","gettextCatalog"],u.$inject=["$filter","gettextCatalog"],l.inherits(u,o.default),u.prototype.formatTimeValue=function(e,t,a,n){var i=new Date(e),o=n?"UTC":void 0,l="yyyy",r="yyyy-MM",u="yyyy-MM-dd";if(!a){var s=this.gettextCatalog_;l=s.getString("yyyy"),r=s.getString("M/yyyy"),u=s.getString("M/d/yyyy")}switch(t){case"year":return this.$filter_("date")(i,l,o);case"month":return this.$filter_("date")(i,r,o);case"day":return this.$filter_("date")(i,u,o);default:return i.toISOString().replace(/\.\d{3}/,"")}},u.prototype.formatWMSTimeParam=function(e,t,a){return n.default.assert(void 0!==e.resolution),"range"===e.mode?(n.default.assert(void 0!==t.end),this.formatTimeValue(t.start,e.resolution,!0,a)+"/"+this.formatTimeValue(t.end,e.resolution,!0,a)):this.formatTimeValue(t.start,e.resolution,!0,a)},(u.module=angular.module("ngeoWMSTime",[o.default.module.name])).service("ngeoWMSTime",u),i.default.module.requires.push(u.module.name),t.default=u},183:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=a(1),o=(n=i)&&n.__esModule?n:{default:n};var l=function(){};l.prototype.getOptions=function(e){var t=new Date(e.minValue),a=new Date(e.maxValue),n=e.minDefValue?new Date(e.minDefValue):t,i=e.maxDefValue?new Date(e.maxDefValue):a,o="range"===e.mode?[n.getTime(),i.getTime()]:n.getTime();return{minDate:t.getTime(),maxDate:a.getTime(),values:o}},l.prototype.getUTCDate=function(e){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())},(l.module=angular.module("ngeoTime",[])).service("ngeoTime",l),o.default.module.requires.push(l.module.name),t.default=l},318:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(2)),i=l(a(1)),o=l(a(183));function l(e){return e&&e.__esModule?e:{default:e}}a(317);var r=angular.module("ngeoDatePicker",[o.default.module.name,"ui.date"]);r.value("ngeoDatePickerTemplateUrl",function(e,t){var a=t.ngeoDatePickerTemplateUrl;return void 0!==a?a:i.default.baseModuleTemplateUrl+"/misc/datepickerComponent.html"}),r.component_=function(t,a){return{scope:{onDateSelected:"&",time:"="},bindToController:!0,controller:"ngeoDatePickerController as datepickerCtrl",restrict:"AE",templateUrl:t,link:function(t,n,i,o){o.init();var l=o.gettextCatalog_.getCurrentLanguage();e.datepicker.setDefaults(e.datepicker.regional[l]),o.sdateOptions=angular.extend({},o.sdateOptions,{onClose:function(t){t&&e(n[0]).find('input[name="edate"]').datepicker("option","minDate",t)}}),o.edateOptions=angular.extend({},o.edateOptions,{onClose:function(t){t&&e(n[0]).find('input[name="sdate"]').datepicker("option","maxDate",t)}}),angular.element("body").on("hidden.bs.popover",function(){var t=angular.element("#ui-datepicker-div");t&&"block"===t.css("display")&&e(n[0]).find('input[name$="date"]').datepicker("hide")}),a(function(){angular.element("#ui-datepicker-div").on("mousedown",function(e){e.stopPropagation()})})}}},r.component_.$inject=["ngeoDatePickerTemplateUrl","$timeout"],r.directive("ngeoDatePicker",r.component_),r.Controller_=function(e,t,a,n){var i=this;this.ngeoTime_=a,this.time,this.gettextCatalog_=n,this.isModeRange,this.onDateSelected,this.initialMinDate,this.initialMaxDate,this.edateOptions={minDate:this.initialMinDate,maxDate:this.initialMaxDate,changeMonth:!0,changeYear:!0},this.sdateOptions={minDate:this.initialMinDate,maxDate:this.initialMaxDate,changeMonth:!0,changeYear:!0},this.sdate,this.edate,e.$watchGroup(["datepickerCtrl.sdate","datepickerCtrl.edate"],function(e,t){var a=e[0],n=e[1];!angular.isDate(a)||i.isModeRange&&!angular.isDate(n)||i.onDateSelected({time:{start:a.getTime(),end:n?n.getTime():null}})})},r.Controller_.$inject=["$scope","$injector","ngeoTime","gettextCatalog"],r.Controller_.prototype.init=function(){var e=this.ngeoTime_.getOptions(this.time);this.initialMinDate=new Date(e.minDate),this.initialMaxDate=new Date(e.maxDate),this.isModeRange="range"===this.time.mode,this.isModeRange?(n.default.assertArray(e.values),this.sdate=new Date(e.values[0]),this.edate=new Date(e.values[1])):(n.default.assertNumber(e.values),this.sdate=new Date(e.values))},r.controller("ngeoDatePickerController",r.Controller_),t.default=r}).call(t,a(27))},414:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(415),a(167);var n=l(a(8)),i=l(a(318)),o=l(a(107));function l(e){return e&&e.__esModule?e:{default:e}}var r={};r.module=angular.module("gmfapp",[n.default.module.name,i.default.name,o.default.module.name]),r.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),r.MainController=function(e,t){this.ngeoWMSTime_=t,this.wmsTimeRangeMode={widget:"datepicker",maxValue:"2013-12-31T00:00:00Z",minValue:"2006-01-01T00:00:00Z",maxDefValue:null,minDefValue:null,resolution:"day",mode:"range",interval:[0,1,0,0]},this.wmsTimeValueMode={widget:"datepicker",maxValue:"2015-12-31T00:00:00Z",minValue:"2014-01-01T00:00:00Z",maxDefValue:null,minDefValue:null,resolution:"month",mode:"value",interval:[0,1,0,0]},this.value,this.rangeValue,this.onDateSelected=function(e){this.value=this.ngeoWMSTime_.formatWMSTimeParam(this.wmsTimeValueMode,e)},this.onDateRangeSelected=function(e){this.rangeValue=this.ngeoWMSTime_.formatWMSTimeParam(this.wmsTimeRangeMode,e)}},r.MainController.$inject=["$scope","ngeoWMSTime"],r.module.controller("MainController",r.MainController),t.default=r},415:function(e,t){}},[414]);
//# sourceMappingURL=datepicker.7c79e1e8d0383e75f550.js.map