webpackJsonp([34],{473:function(t,e,r){r(10),t.exports=r(474)},474:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r(475),r(11);u(r(82)),u(r(301)),u(r(302));var n=u(r(13)),o=u(r(18)),i=u(r(172)),a=u(r(53)),s=u(r(28)),_=u(r(59)),p=u(r(26)),l=(u(r(1)),u(r(17)));function u(t){return t&&t.__esModule?t:{default:t}}var c={},d=angular.module("app",[l.default.name]);c.WMS_URL_="https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",c.PRINT_URL_="https://geomapfish-demo.camptocamp.net/2.2/wsgi/printproxy",c.PRINT_SCALES_=[100,250,500,2500,5e3,1e4,25e3,5e4,1e5,5e5],c.PRINT_FORMAT_="pdf",c.PRINT_LAYOUT_="A4 portrait",c.PRINT_DPI_=72,c.PRINT_PAPER_SIZE_=[555,675],c.MainController=function(t,e,r){this.map=new n.default({layers:[new a.default({source:new _.default({url:c.WMS_URL_,params:{LAYERS:"osm"},serverType:"mapserver"})}),new s.default({source:new p.default({url:"data/polygon-swizerland.json",format:new i.default({defaultDataProjection:"EPSG:21781"})})})],view:new o.default({projection:"EPSG:21781",resolutions:[200,100,50,20,10,5,2.5,2,1],center:[537635,152640],zoom:3})}),this.printState="",this.$timeout_=t,this.print_=e(c.PRINT_URL_),this.printUtils_=r;var l=r.createPrintMaskPostcompose(function(){return c.PRINT_PAPER_SIZE_},function(t){var e=t.size,n=t.viewState.resolution;return void 0!==e&&void 0!==n?r.getOptimalScale(e,n,c.PRINT_PAPER_SIZE_,c.PRINT_SCALES_):c.PRINT_SCALES_[0]});this.map.on("postcompose",l)},c.MainController.$inject=["$timeout","ngeoCreatePrint","ngeoPrintUtils"],c.MainController.prototype.print=function(){var t=this.map,e=t.getSize(),r=t.getView().getResolution(),n=void 0!==e&&void 0!==r?this.printUtils_.getOptimalScale(e,r,c.PRINT_PAPER_SIZE_,c.PRINT_SCALES_):c.PRINT_SCALES_[0],o=c.PRINT_DPI_,i=c.PRINT_FORMAT_,a=c.PRINT_LAYOUT_;this.printState="Printing...";var s=this.print_.createSpec(t,n,o,a,i,{datasource:[],debug:0,comments:"My comments",title:"My print"});this.print_.createReport(s).then(this.handleCreateReportSuccess_.bind(this),this.handleCreateReportError_.bind(this))},c.MainController.prototype.handleCreateReportSuccess_=function(t){var e=t.data;this.getStatus_(e.ref)},c.MainController.prototype.getStatus_=function(t){this.print_.getStatus(t).then(this.handleGetStatusSuccess_.bind(this,t),this.handleGetStatusError_.bind(this))},c.MainController.prototype.handleCreateReportError_=function(t){this.printState="Print error"},c.MainController.prototype.handleGetStatusSuccess_=function(t,e){if(e.data.done)this.printState="",window.location.href=this.print_.getReportUrl(t);else{var r=this;this.$timeout_(function(){r.getStatus_(t)},1e3,!1)}},c.MainController.prototype.handleGetStatusError_=function(t){this.printState="Print error"},d.controller("MainController",c.MainController),e.default=c},475:function(t,e){}},[473]);
//# sourceMappingURL=mapfishprint.d0728657db70e4d91aef.js.map