/*
 Highcharts JS v8.2.2 (2020-11-05)

 (c) 2009-2019 Sebastian Bochan, Rafal Sebestjanski

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/modules/lollipop",["highcharts"],function(q){c(q);c.Highcharts=q;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function q(c,d,x,t){c.hasOwnProperty(d)||(c[d]=t.apply(null,x))}c=c?c._modules:{};q(c,"Series/AreaRangeSeries.js",[c["Core/Series/Series.js"],c["Series/Column/ColumnSeries.js"],c["Core/Globals.js"],c["Series/Line/LineSeries.js"],
c["Core/Series/Point.js"],c["Core/Utilities.js"]],function(c,d,x,t,m,f){var u=d.prototype,n=t.prototype,v=m.prototype,w=f.defined,p=f.extend,z=f.isArray,a=f.isNumber,y=f.pick,r=c.seriesTypes.area.prototype;c.seriesType("arearange","area",{lineWidth:1,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{align:void 0,verticalAlign:void 0,xLow:0,xHigh:0,yLow:0,yHigh:0}},{pointArrayMap:["low",
"high"],pointValKey:"low",deferTranslatePolar:!0,toYData:function(h){return[h.low,h.high]},highToXY:function(h){var a=this.chart,b=this.xAxis.postTranslate(h.rectPlotX,this.yAxis.len-h.plotHigh);h.plotHighX=b.x-a.plotLeft;h.plotHigh=b.y-a.plotTop;h.plotLowX=h.plotX},translate:function(){var h=this,a=h.yAxis,b=!!h.modifyValue;r.translate.apply(h);h.points.forEach(function(e){var c=e.high,g=e.plotY;e.isNull?e.plotY=null:(e.plotLow=g,e.plotHigh=a.translate(b?h.modifyValue(c,e):c,0,1,0,1),b&&(e.yBottom=
e.plotHigh))});this.chart.polar&&this.points.forEach(function(b){h.highToXY(b);b.tooltipPos=[(b.plotHighX+b.plotLowX)/2,(b.plotHigh+b.plotLow)/2]})},getGraphPath:function(a){var e=[],b=[],h,c=r.getGraphPath;var g=this.options;var p=this.chart.polar,l=p&&!1!==g.connectEnds,k=g.connectNulls,f=g.step;a=a||this.points;for(h=a.length;h--;){var d=a[h];var n=p?{plotX:d.rectPlotX,plotY:d.yBottom,doCurve:!1}:{plotX:d.plotX,plotY:d.plotY,doCurve:!1};d.isNull||l||k||a[h+1]&&!a[h+1].isNull||b.push(n);var m={polarPlotY:d.polarPlotY,
rectPlotX:d.rectPlotX,yBottom:d.yBottom,plotX:y(d.plotHighX,d.plotX),plotY:d.plotHigh,isNull:d.isNull};b.push(m);e.push(m);d.isNull||l||k||a[h-1]&&!a[h-1].isNull||b.push(n)}a=c.call(this,a);f&&(!0===f&&(f="left"),g.step={left:"right",center:"center",right:"left"}[f]);e=c.call(this,e);b=c.call(this,b);g.step=f;g=[].concat(a,e);!this.chart.polar&&b[0]&&"M"===b[0][0]&&(b[0]=["L",b[0][1],b[0][2]]);this.graphPath=g;this.areaPath=a.concat(b);g.isArea=!0;g.xMap=a.xMap;this.areaPath.xMap=a.xMap;return g},
drawDataLabels:function(){var a=this.points,e=a.length,b,c=[],d=this.options.dataLabels,g,f=this.chart.inverted;if(z(d)){var l=d[0]||{enabled:!1};var k=d[1]||{enabled:!1}}else l=p({},d),l.x=d.xHigh,l.y=d.yHigh,k=p({},d),k.x=d.xLow,k.y=d.yLow;if(l.enabled||this._hasPointLabels){for(b=e;b--;)if(g=a[b]){var r=l.inside?g.plotHigh<g.plotLow:g.plotHigh>g.plotLow;g.y=g.high;g._plotY=g.plotY;g.plotY=g.plotHigh;c[b]=g.dataLabel;g.dataLabel=g.dataLabelUpper;g.below=r;f?l.align||(l.align=r?"right":"left"):l.verticalAlign||
(l.verticalAlign=r?"top":"bottom")}this.options.dataLabels=l;n.drawDataLabels&&n.drawDataLabels.apply(this,arguments);for(b=e;b--;)if(g=a[b])g.dataLabelUpper=g.dataLabel,g.dataLabel=c[b],delete g.dataLabels,g.y=g.low,g.plotY=g._plotY}if(k.enabled||this._hasPointLabels){for(b=e;b--;)if(g=a[b])r=k.inside?g.plotHigh<g.plotLow:g.plotHigh>g.plotLow,g.below=!r,f?k.align||(k.align=r?"left":"right"):k.verticalAlign||(k.verticalAlign=r?"bottom":"top");this.options.dataLabels=k;n.drawDataLabels&&n.drawDataLabels.apply(this,
arguments)}if(l.enabled)for(b=e;b--;)if(g=a[b])g.dataLabels=[g.dataLabelUpper,g.dataLabel].filter(function(b){return!!b});this.options.dataLabels=d},alignDataLabel:function(){u.alignDataLabel.apply(this,arguments)},drawPoints:function(){var a=this.points.length,e;n.drawPoints.apply(this,arguments);for(e=0;e<a;){var b=this.points[e];b.origProps={plotY:b.plotY,plotX:b.plotX,isInside:b.isInside,negative:b.negative,zone:b.zone,y:b.y};b.lowerGraphic=b.graphic;b.graphic=b.upperGraphic;b.plotY=b.plotHigh;
w(b.plotHighX)&&(b.plotX=b.plotHighX);b.y=b.high;b.negative=b.high<(this.options.threshold||0);b.zone=this.zones.length&&b.getZone();this.chart.polar||(b.isInside=b.isTopInside="undefined"!==typeof b.plotY&&0<=b.plotY&&b.plotY<=this.yAxis.len&&0<=b.plotX&&b.plotX<=this.xAxis.len);e++}n.drawPoints.apply(this,arguments);for(e=0;e<a;)b=this.points[e],b.upperGraphic=b.graphic,b.graphic=b.lowerGraphic,p(b,b.origProps),delete b.origProps,e++},setStackedPoints:x.noop},{setState:function(){var a=this.state,
e=this.series,b=e.chart.polar;w(this.plotHigh)||(this.plotHigh=e.yAxis.toPixels(this.high,!0));w(this.plotLow)||(this.plotLow=this.plotY=e.yAxis.toPixels(this.low,!0));e.stateMarkerGraphic&&(e.lowerStateMarkerGraphic=e.stateMarkerGraphic,e.stateMarkerGraphic=e.upperStateMarkerGraphic);this.graphic=this.upperGraphic;this.plotY=this.plotHigh;b&&(this.plotX=this.plotHighX);v.setState.apply(this,arguments);this.state=a;this.plotY=this.plotLow;this.graphic=this.lowerGraphic;b&&(this.plotX=this.plotLowX);
e.stateMarkerGraphic&&(e.upperStateMarkerGraphic=e.stateMarkerGraphic,e.stateMarkerGraphic=e.lowerStateMarkerGraphic,e.lowerStateMarkerGraphic=void 0);v.setState.apply(this,arguments)},haloPath:function(){var a=this.series.chart.polar,e=[];this.plotY=this.plotLow;a&&(this.plotX=this.plotLowX);this.isInside&&(e=v.haloPath.apply(this,arguments));this.plotY=this.plotHigh;a&&(this.plotX=this.plotHighX);this.isTopInside&&(e=e.concat(v.haloPath.apply(this,arguments)));return e},destroyElements:function(){["lowerGraphic",
"upperGraphic"].forEach(function(a){this[a]&&(this[a]=this[a].destroy())},this);this.graphic=null;return v.destroyElements.apply(this,arguments)},isValid:function(){return a(this.low)&&a(this.high)}});""});q(c,"Series/ColumnRangeSeries.js",[c["Core/Series/Series.js"],c["Series/Column/ColumnSeries.js"],c["Core/Globals.js"],c["Core/Options.js"],c["Core/Utilities.js"]],function(c,d,x,t,m){var f=d.prototype;d=x.noop;t=t.defaultOptions;var u=m.clamp,n=m.merge,v=m.pick,w=c.seriesTypes.arearange.prototype;
c.seriesType("columnrange","arearange",n(t.plotOptions.column,t.plotOptions.arearange,{pointRange:null,marker:null,states:{hover:{halo:!1}}}),{setOptions:function(){n(!0,arguments[0],{stacking:void 0});return w.setOptions.apply(this,arguments)},translate:function(){var c=this,d=c.yAxis,a=c.xAxis,y=a.startAngleRad,r,h=c.chart,e=c.xAxis.isRadial,b=Math.max(h.chartWidth,h.chartHeight)+999,n;f.translate.apply(c);c.points.forEach(function(f){var g=f.shapeArgs,m=c.options.minPointLength;f.plotHigh=n=u(d.translate(f.high,
0,1,0,1),-b,b);f.plotLow=u(f.plotY,-b,b);var l=n;var k=v(f.rectPlotY,f.plotY)-n;Math.abs(k)<m?(m-=k,k+=m,l-=m/2):0>k&&(k*=-1,l-=k);e?(r=f.barX+y,f.shapeType="arc",f.shapeArgs=c.polarArc(l+k,l,r,r+f.pointWidth)):(g.height=k,g.y=l,f.tooltipPos=h.inverted?[d.len+d.pos-h.plotLeft-l-k/2,a.len+a.pos-h.plotTop-g.x-g.width/2,k]:[a.left-h.plotLeft+g.x+g.width/2,d.pos-h.plotTop+l+k/2,k])})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:d,getSymbol:d,crispCol:function(){return f.crispCol.apply(this,
arguments)},drawPoints:function(){return f.drawPoints.apply(this,arguments)},drawTracker:function(){return f.drawTracker.apply(this,arguments)},getColumnMetrics:function(){return f.getColumnMetrics.apply(this,arguments)},pointAttribs:function(){return f.pointAttribs.apply(this,arguments)},adjustForMissingColumns:function(){return f.adjustForMissingColumns.apply(this,arguments)},animate:function(){return f.animate.apply(this,arguments)},polarArc:function(){return f.polarArc.apply(this,arguments)},
translate3dPoints:function(){return f.translate3dPoints.apply(this,arguments)},translate3dShapes:function(){return f.translate3dShapes.apply(this,arguments)}},{setState:f.pointClass.prototype.setState});""});q(c,"Series/DumbbellSeries.js",[c["Core/Series/Series.js"],c["Series/Column/ColumnSeries.js"],c["Series/Line/LineSeries.js"],c["Core/Renderer/SVG/SVGRenderer.js"],c["Core/Globals.js"],c["Core/Utilities.js"]],function(c,d,x,t,m,f){var u=c.seriesTypes,n=d.prototype,v=x.prototype,w=f.extend,p=f.pick,
q=u.arearange.prototype;d=q.pointClass.prototype;c.seriesType("dumbbell","arearange",{trackByArea:!1,fillColor:"none",lineWidth:0,pointRange:1,connectorWidth:1,stickyTracking:!1,groupPadding:.2,crisp:!1,pointPadding:.1,lowColor:"#333333",states:{hover:{lineWidthPlus:0,connectorWidthPlus:1,halo:!1}}},{trackerGroups:["group","markerGroup","dataLabelsGroup"],drawTracker:m.TrackerMixin.drawTrackerPoint,drawGraph:m.noop,crispCol:n.crispCol,getConnectorAttribs:function(a){var c=this.chart,d=a.options,h=
this.options,e=this.xAxis,b=this.yAxis,f=p(d.connectorWidth,h.connectorWidth),m=p(d.connectorColor,h.connectorColor,d.color,a.zone?a.zone.color:void 0,a.color),g=p(h.states&&h.states.hover&&h.states.hover.connectorWidthPlus,1),n=p(d.dashStyle,h.dashStyle),l=p(a.plotLow,a.plotY),k=b.toPixels(h.threshold||0,!0);k=p(a.plotHigh,c.inverted?b.len-k:k);a.state&&(f+=g);0>l?l=0:l>=b.len&&(l=b.len);0>k?k=0:k>=b.len&&(k=b.len);if(0>a.plotX||a.plotX>e.len)f=0;a.upperGraphic&&(e={y:a.y,zone:a.zone},a.y=a.high,
a.zone=a.zone?a.getZone():void 0,m=p(d.connectorColor,h.connectorColor,d.color,a.zone?a.zone.color:void 0,a.color),w(a,e));a={d:t.prototype.crispLine([["M",a.plotX,l],["L",a.plotX,k]],f,"ceil")};c.styledMode||(a.stroke=m,a["stroke-width"]=f,n&&(a.dashstyle=n));return a},drawConnector:function(a){var c=p(this.options.animationLimit,250);c=a.connector&&this.chart.pointCount<c?"animate":"attr";a.connector||(a.connector=this.chart.renderer.path().addClass("highcharts-lollipop-stem").attr({zIndex:-1}).add(this.markerGroup));
a.connector[c](this.getConnectorAttribs(a))},getColumnMetrics:function(){var a=n.getColumnMetrics.apply(this,arguments);a.offset+=a.width/2;return a},translatePoint:q.translate,setShapeArgs:u.columnrange.prototype.translate,translate:function(){this.setShapeArgs.apply(this);this.translatePoint.apply(this,arguments);this.points.forEach(function(a){var c=a.shapeArgs,d=a.pointWidth;a.plotX=c.x;c.x=a.plotX-d/2;a.tooltipPos=null});this.columnMetrics.offset-=this.columnMetrics.width/2},seriesDrawPoints:q.drawPoints,
drawPoints:function(){var a=this.chart,c=this.points.length,d=this.lowColor=this.options.lowColor,f=0;for(this.seriesDrawPoints.apply(this,arguments);f<c;){var e=this.points[f];this.drawConnector(e);e.upperGraphic&&(e.upperGraphic.element.point=e,e.upperGraphic.addClass("highcharts-lollipop-high"));e.connector.element.point=e;if(e.lowerGraphic){var b=e.zone&&e.zone.color;b=p(e.options.lowColor,d,e.options.color,b,e.color,this.color);a.styledMode||e.lowerGraphic.attr({fill:b});e.lowerGraphic.addClass("highcharts-lollipop-low")}f++}},
markerAttribs:function(){var a=q.markerAttribs.apply(this,arguments);a.x=Math.floor(a.x);a.y=Math.floor(a.y);return a},pointAttribs:function(a,c){var d=v.pointAttribs.apply(this,arguments);"hover"===c&&delete d.fill;return d}},{destroyElements:d.destroyElements,isValid:d.isValid,pointSetState:d.setState,setState:function(){var a=this.series,c=a.chart,d=a.options.marker,f=this.options,e=p(f.lowColor,a.options.lowColor,f.color,this.zone&&this.zone.color,this.color,a.color),b="attr";this.pointSetState.apply(this,
arguments);this.state||(b="animate",this.lowerGraphic&&!c.styledMode&&(this.lowerGraphic.attr({fill:e}),this.upperGraphic&&(c={y:this.y,zone:this.zone},this.y=this.high,this.zone=this.zone?this.getZone():void 0,d=p(this.marker?this.marker.fillColor:void 0,d?d.fillColor:void 0,f.color,this.zone?this.zone.color:void 0,this.color),this.upperGraphic.attr({fill:d}),w(this,c))));this.connector[b](a.getConnectorAttribs(this))}});""});q(c,"Series/LollipopSeries.js",[c["Core/Series/Series.js"],c["Series/Column/ColumnSeries.js"],
c["Core/Globals.js"],c["Core/Series/Point.js"],c["Core/Utilities.js"]],function(c,d,q,t,m){d=d.prototype;var f=m.isObject,u=m.pick;m=c.seriesTypes.area.prototype;c.seriesType("lollipop","dumbbell",{lowColor:void 0,threshold:0,connectorWidth:1,groupPadding:.2,pointPadding:.1,states:{hover:{lineWidthPlus:0,connectorWidthPlus:1,halo:!1}},tooltip:{pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>'}},{pointArrayMap:["y"],pointValKey:"y",toYData:function(c){return[u(c.y,
c.low)]},translatePoint:m.translate,drawPoint:m.drawPoints,drawDataLabels:d.drawDataLabels,setShapeArgs:d.translate},{pointSetState:m.pointClass.prototype.setState,setState:q.seriesTypes.dumbbell.prototype.pointClass.prototype.setState,init:function(c,d,m){f(d)&&"low"in d&&(d.y=d.low,delete d.low);return t.prototype.init.apply(this,arguments)}});""});q(c,"masters/modules/lollipop.src.js",[],function(){})});
//# sourceMappingURL=lollipop.js.map