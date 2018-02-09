webpackJsonp([27],{107:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(i(2)),n=(r(i(1)),r(i(183))),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(i(0));function r(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t){this.$filter_=e,this.gettextCatalog_=t,n.default.call(this)};u.$inject=["$filter","gettextCatalog"],u.$inject=["$filter","gettextCatalog"],l.inherits(u,n.default),u.prototype.formatTimeValue=function(e,t,i,a){var n=new Date(e),l=a?"UTC":void 0,r="yyyy",u="yyyy-MM",o="yyyy-MM-dd";if(!i){var s=this.gettextCatalog_;r=s.getString("yyyy"),u=s.getString("M/yyyy"),o=s.getString("M/d/yyyy")}switch(t){case"year":return this.$filter_("date")(n,r,l);case"month":return this.$filter_("date")(n,u,l);case"day":return this.$filter_("date")(n,o,l);default:return n.toISOString().replace(/\.\d{3}/,"")}},u.prototype.formatWMSTimeParam=function(e,t,i){return a.default.assert(void 0!==e.resolution),"range"===e.mode?(a.default.assert(void 0!==t.end),this.formatTimeValue(t.start,e.resolution,!0,i)+"/"+this.formatTimeValue(t.end,e.resolution,!0,i)):this.formatTimeValue(t.start,e.resolution,!0,i)},(u.module=angular.module("ngeoWMSTime",[n.default.module.name])).service("ngeoWMSTime",u),t.default=u},183:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=i(1);(a=n)&&a.__esModule;var l=function(){};l.prototype.getOptions=function(e){var t=new Date(e.minValue),i=new Date(e.maxValue),a=e.minDefValue?new Date(e.minDefValue):t,n=e.maxDefValue?new Date(e.maxDefValue):i,l="range"===e.mode?[a.getTime(),n.getTime()]:a.getTime();return{minDate:t.getTime(),maxDate:i.getTime(),values:l}},l.prototype.getUTCDate=function(e){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())},(l.module=angular.module("ngeoTime",[])).service("ngeoTime",l),t.default=l},522:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i(523),i(167);l(i(8));var a=l(i(524)),n=l(i(107));function l(e){return e&&e.__esModule?e:{default:e}}var r={};r.module=angular.module("gmfapp",[a.default.name,n.default.module.name]),r.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),r.MainController=function(e,t){this.ngeoWMSTime_=t,this.wmsTimeRangeMode={widget:"slider",maxValue:"2013-12-31T00:00:00Z",minValue:"2006-01-01T00:00:00Z",maxDefValue:null,minDefValue:null,resolution:"day",mode:"range",interval:[0,1,0,0]},this.wmsTimeValueMode={widget:"slider",maxValue:"2015-12-31T00:00:00Z",minValue:"2014-01-01T00:00:00Z",maxDefValue:null,minDefValue:null,resolution:"year",mode:"value",interval:[0,0,1,0]},this.sliderValue,this.sliderRangeValue,this.onDateSelected=function(t){this.sliderValue=this.ngeoWMSTime_.formatWMSTimeParam(this.wmsTimeValueMode,t),e.$digest()},this.onDateRangeSelected=function(t){this.sliderRangeValue=this.ngeoWMSTime_.formatWMSTimeParam(this.wmsTimeRangeMode,t),e.$digest()}},r.MainController.$inject=["$scope","ngeoWMSTime"],r.module.controller("MainController",r.MainController),t.default=r},523:function(e,t){},524:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(i(8)),n=l(i(107));function l(e){return e&&e.__esModule?e:{default:e}}i(525);var r=angular.module("gmfLayertreeTimeSliderComponent",[n.default.module.name,"ui.slider"]);r.directive_=function(e,t){return{scope:{onDateSelected:"&gmfTimeSliderOnDateSelected",time:"=gmfTimeSliderTime"},bindToController:!0,controller:"gmfTimeSliderController as sliderCtrl",restrict:"AE",templateUrl:a.default.baseModuleTemplateUrl+"/layertree/timesliderComponent.html",link:{pre:function(e,t,i,a){function n(t,i){var n=void 0,l=void 0,r=void 0;return i.values?(n=new Date(a.getClosestValue_(i.values[0])),l=new Date(a.getClosestValue_(i.values[1])),a.dates=[n,l],r={start:n.getTime(),end:l.getTime()}):(n=new Date(a.getClosestValue_(i.value)),a.dates=n,r={start:n.getTime()}),e.$apply(),r}a.init(),a.sliderOptions.stop=function(t,i){a.onDateSelected({time:n(t,i)}),e.$apply()},a.sliderOptions.slide=n}}}},r.directive_.$inject=["$timeout","$filter"],r.directive("gmfTimeSlider",r.directive_),r.Controller_=function(e,t){this.ngeoWMSTime_=t,this.onDateSelected,this.time,this.isModeRange,this.minValue,this.maxValue,this.timeValueList,this.sliderOptions,this.dates},r.Controller_.$inject=["$scope","ngeoWMSTime"],r.Controller_.prototype.init=function(){this.timeValueList=this.getTimeValueList_();var e=this.ngeoWMSTime_.getOptions(this.time);this.isModeRange="range"===this.time.mode,this.minValue=e.minDate,this.maxValue=e.maxDate,this.dates=this.isModeRange?[e.values[0],e.values[1]]:e.values,this.sliderOptions={range:this.isModeRange,min:this.minValue,max:this.maxValue}},r.Controller_.prototype.getTimeValueList_=function(){var e=this.time,t=null,i=new Date(this.minValue),a=new Date(this.maxValue);if(e.values)t=[],e.values.forEach(function(e){t.push(new Date(e).getTime())});else{var n=new Date(i.getTime());if(n.setFullYear(i.getFullYear()+1024*e.interval[0]),n.setMonth(i.getMonth()+1024*e.interval[1],i.getDate()+1024*e.interval[2]),n.setSeconds(i.getSeconds()+1024*e.interval[3]),n>a){t=[];for(var l=0;;l++){var r=new Date(i.getTime());if(r.setFullYear(i.getFullYear()+l*e.interval[0]),r.setMonth(i.getMonth()+l*e.interval[1],i.getDate()+l*e.interval[2]),r.setSeconds(i.getSeconds()+l*e.interval[3]),!(r<=a))break;t.push(r.getTime())}}}return t},r.Controller_.prototype.getClosestValue_=function(e){if(e<=this.minValue)return this.minValue;if(e>=this.maxValue)return this.maxValue;if(this.timeValueList){for(var t=void 0,i=0,a=this.timeValueList.length-1;a-i>1;)t=Math.floor((i+a)/2),this.timeValueList[t]>=e?a=t:i=t;var n=Math.abs(this.timeValueList[i]-e),l=Math.abs(this.timeValueList[a]-e);return this.timeValueList[n<l?i:a]}for(var r=new Date(e),u=new Date(this.minValue),o=new Date(this.minValue),s=new Date(this.maxValue),d=Math.abs(r-o),m=1;;m++){var f=new Date(u.getTime());if(f.setFullYear(u.getFullYear()+m*this.time.interval[0]),f.setMonth(u.getMonth()+m*this.time.interval[1],u.getDate()+m*this.time.interval[2]),f.setSeconds(u.getSeconds()+m*this.time.interval[3]),f>s)break;var g=Math.abs(r-f);if(!(g<=d))break;o=f,d=g}return o.getTime()},r.Controller_.prototype.getLocalizedDate=function(e){return this.ngeoWMSTime_.formatTimeValue(e,this.time.resolution)},r.controller("gmfTimeSliderController",r.Controller_),t.default=r},525:function(e,t,i){i(526),e.exports="ui.slider"},526:function(e,t,i){(function(e){angular.module("ui.slider",[]).value("uiSliderConfig",{}).directive("uiSlider",["uiSliderConfig","$timeout",function(t,i){return t=t||{},{require:"ngModel",compile:function(){return{pre:function(a,n,l,r){function u(e,t){return t?parseFloat(e):parseInt(e,10)}var o=angular.copy(a.$eval(l.uiSlider)),s=angular.extend(o||{},t),d={min:null,max:null},m=["min","max","step","lowerBound","upperBound"],f=!angular.isUndefined(l.useDecimals),g=angular.isDefined(s.updateOn)?s.updateOn:"slide",v=function(){angular.isArray(r.$viewValue)&&!0!==s.range&&(console.warn("Change your range option of ui-slider. When assigning ngModel an array of values then the range option should be set to true."),s.range=!0),angular.forEach(m,function(e){angular.isDefined(l[e])&&(s[e]=u(l[e],f))}),n.slider(s),v=angular.noop};function c(){n.hasClass("ui-slider")&&n.slider("destroy")}angular.forEach(m,function(e){l.$observe(e,function(t){t&&(v(),s[e]=u(t,f),n.slider("option",e,u(t,f)),r.$render())})}),l.$observe("disabled",function(e){v(),n.slider("option","disabled",!!e)}),a.$watch(l.uiSlider,function(e){v(),void 0!==e&&n.slider("option",e)},!0),i(v,0,!0),n.bind(g,function(t,i){var l;if(i.values){var u=i.values.slice();s.lowerBound&&u[0]<s.lowerBound&&(u[0]=Math.max(u[0],s.lowerBound)),s.upperBound&&u[1]>s.upperBound&&(u[1]=Math.min(u[1],s.upperBound)),u[0]===i.values[0]&&u[1]===i.values[1]||(l=!0,i.values=u)}else{var o=i.value;s.lowerBound&&o<s.lowerBound&&(o=Math.max(o,s.lowerBound)),s.upperBound&&o>s.upperBound&&(o=Math.min(o,s.upperBound)),o!==i.value&&(l=!0,i.value=o)}if(r.$setViewValue(i.values||i.value),e(i.handle).find(".ui-slider-tip").text(i.value),a.$apply(),l)return setTimeout(function(){n.slider("value",i.values||i.value)},0),!1}),r.$render=function(){v();var e=!0===s.range?"values":"value";if(!0===s.range||!isNaN(r.$viewValue)||r.$viewValue instanceof Array?s.range&&!angular.isDefined(r.$viewValue)&&(r.$viewValue=[0,0]):r.$viewValue=0,!0===s.range){if(r.$viewValue&&angular.isString(r.$viewValue)&&1===(r.$viewValue.match(/,/g)||[]).length){var t=r.$viewValue.split(",");r.$viewValue=[Number(t[0]),Number(t[1])]}angular.isDefined(s.min)&&s.min>r.$viewValue[0]&&(r.$viewValue[0]=s.min),angular.isDefined(s.max)&&s.max<r.$viewValue[1]&&(r.$viewValue[1]=s.max),r.$viewValue[0]>r.$viewValue[1]&&(d.min>=r.$viewValue[1]&&(r.$viewValue[1]=d.min),d.max<=r.$viewValue[0]&&(r.$viewValue[0]=d.max)),d.min=r.$viewValue[0],d.max=r.$viewValue[1]}n.slider(e,r.$viewValue)},a.$watch(l.ngModel,function(){!0===s.range?(r.$render(),e(n).find(".ui-slider-tip").each(function(t,i){e(i).text(r.$viewValue[t])})):e(n).find(".ui-slider-tip").text(r.$viewValue)},!0),a.$on("$destroy",c),n.one("$destroy",c)},post:function(t,a,n,l){var r=angular.extend({},t.$eval(n.uiSlider));if(angular.forEach(["min","max","step","tick","tip"],function(e){angular.isDefined(n[e])&&(r[e]=n[e])}),angular.isDefined(r.tick)&&angular.isDefined(r.step))for(var u=parseInt((parseInt(r.max)-parseInt(r.min))/parseInt(r.step)),o=u;o>=0;o--){var s=o/u*100+"%";e("<div/>").addClass("ui-slider-tick").appendTo(a).css({left:s})}angular.isDefined(r.tip)&&i(function(){var t=a.find(".ui-slider-handle");t&&t.length>1&&l.$viewValue&&angular.isArray(l.$viewValue)?(e(t[0]).append('<div class="ui-slider-tip">'+l.$viewValue[0]+"</div>"),e(t[1]).append('<div class="ui-slider-tip">'+l.$viewValue[1]+"</div>")):a.find(".ui-slider-handle").append('<div class="ui-slider-tip">'+l.$viewValue+"</div>")},10)}}}}}])}).call(t,i(27))}},[522]);
//# sourceMappingURL=timeslider.803d685442d6859ac454.js.map