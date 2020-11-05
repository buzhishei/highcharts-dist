/*
 Highcharts JS v8.2.2 (2020-11-05)

 Wind barb series module

 (c) 2010-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/windbarb",["highcharts"],function(f){a(f);a.Highcharts=f;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function f(a,f,g,p){a.hasOwnProperty(f)||(a[f]=p.apply(null,g))}a=a?a._modules:{};f(a,"Mixins/OnSeries.js",[a["Series/Column/ColumnSeries.js"],a["Series/Line/LineSeries.js"],a["Core/Utilities.js"]],function(a,f,g){var p=
a.prototype,n=f.prototype,r=g.defined,t=g.stableSort;return{getPlotBox:function(){return n.getPlotBox.call(this.options.onSeries&&this.chart.get(this.options.onSeries)||this)},translate:function(){p.translate.apply(this);var a=this,k=a.options,h=a.chart,m=a.points,e=m.length-1,c,b=k.onSeries;b=b&&h.get(b);k=k.onKey||"y";var d=b&&b.options.step,g=b&&b.points,f=g&&g.length,n=h.inverted,u=a.xAxis,v=a.yAxis,w=0,q;if(b&&b.visible&&f){w=(b.pointXOffset||0)+(b.barW||0)/2;h=b.currentDataGrouping;var y=g[f-
1].x+(h?h.totalRange:0);t(m,function(b,c){return b.x-c.x});for(k="plot"+k[0].toUpperCase()+k.substr(1);f--&&m[e];){var l=g[f];h=m[e];h.y=l.y;if(l.x<=h.x&&"undefined"!==typeof l[k]){if(h.x<=y&&(h.plotY=l[k],l.x<h.x&&!d&&(q=g[f+1])&&"undefined"!==typeof q[k])){var x=(h.x-l.x)/(q.x-l.x);h.plotY+=x*(q[k]-l[k]);h.y+=x*(q.y-l.y)}e--;f++;if(0>e)break}}}m.forEach(function(b,d){b.plotX+=w;if("undefined"===typeof b.plotY||n)0<=b.plotX&&b.plotX<=u.len?n?(b.plotY=u.translate(b.x,0,1,0,1),b.plotX=r(b.y)?v.translate(b.y,
0,0,0,1):0):b.plotY=(u.opposite?0:a.yAxis.len)+u.offset:b.shapeArgs={};if((c=m[d-1])&&c.plotX===b.plotX){"undefined"===typeof c.stackIndex&&(c.stackIndex=0);var e=c.stackIndex+1}b.stackIndex=e});this.onSeries=b}}});f(a,"Series/WindbarbSeries.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Series/Series.js"],a["Core/Globals.js"],a["Series/Line/LineSeries.js"],a["Mixins/OnSeries.js"],a["Core/Utilities.js"]],function(a,f,g,p,n,r){function t(){g.approximations&&!g.approximations.windbarb&&(g.approximations.windbarb=
function(a,e){var c=0,b=0,d,m=a.length;for(d=0;d<m;d++)c+=a[d]*Math.cos(e[d]*g.deg2rad),b+=a[d]*Math.sin(e[d]*g.deg2rad);return[a.reduce(function(b,c){return b+c},0)/a.length,Math.atan2(b,c)/g.deg2rad]})}var v=a.animObject;a=g.noop;var k=r.isNumber,h=r.pick;t();f.seriesType("windbarb","column",{dataGrouping:{enabled:!0,approximation:"windbarb",groupPixelWidth:30},lineWidth:2,onSeries:null,states:{hover:{lineWidthPlus:0}},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.value}</b> ({point.beaufort})<br/>'},
vectorLength:20,colorKey:"value",yOffset:-20,xOffset:0},{pointArrayMap:["value","direction"],parallelArrays:["x","value","direction"],beaufortName:"Calm;Light air;Light breeze;Gentle breeze;Moderate breeze;Fresh breeze;Strong breeze;Near gale;Gale;Strong gale;Storm;Violent storm;Hurricane".split(";"),beaufortFloor:[0,.3,1.6,3.4,5.5,8,10.8,13.9,17.2,20.8,24.5,28.5,32.7],trackerGroups:["markerGroup"],init:function(a,e){t();p.prototype.init.call(this,a,e)},pointAttribs:function(a,e){var c=this.options;
a=a.color||this.color;var b=this.options.lineWidth;e&&(a=c.states[e].color||a,b=(c.states[e].lineWidth||b)+(c.states[e].lineWidthPlus||0));return{stroke:a,"stroke-width":b}},markerAttribs:function(){},getPlotBox:n.getPlotBox,windArrow:function(a){var e=1.943844*a.value,c=this.options.vectorLength/20,b=-10;if(a.isNull)return[];if(0===a.beaufortLevel)return this.chart.renderer.symbols.circle(-10*c,-10*c,20*c,20*c);a=[["M",0,7*c],["L",-1.5*c,7*c],["L",0,10*c],["L",1.5*c,7*c],["L",0,7*c],["L",0,-10*c]];
var d=(e-e%50)/50;if(0<d)for(;d--;)a.push(-10===b?["L",0,b*c]:["M",0,b*c],["L",5*c,b*c+2],["L",0,b*c+4]),e-=50,b+=7;d=(e-e%10)/10;if(0<d)for(;d--;)a.push(-10===b?["L",0,b*c]:["M",0,b*c],["L",7*c,b*c]),e-=10,b+=3;d=(e-e%5)/5;if(0<d)for(;d--;)a.push(-10===b?["L",0,b*c]:["M",0,b*c],["L",4*c,b*c]),e-=5,b+=3;return a},translate:function(){var a=this.beaufortFloor,e=this.beaufortName;n.translate.call(this);this.points.forEach(function(c){for(var b=0;b<a.length&&!(a[b]>c.value);b++);c.beaufortLevel=b-1;
c.beaufort=e[b-1]})},drawPoints:function(){var a=this.chart,e=this.yAxis,c=a.inverted,b=this.options.vectorLength/2;this.points.forEach(function(d){var f=d.plotX,g=d.plotY;!1===this.options.clip||a.isInsidePlot(f,0,!1)?(d.graphic||(d.graphic=this.chart.renderer.path().add(this.markerGroup).addClass("highcharts-point highcharts-color-"+h(d.colorIndex,d.series.colorIndex))),d.graphic.attr({d:this.windArrow(d),translateX:f+this.options.xOffset,translateY:g+this.options.yOffset,rotation:d.direction}),
this.chart.styledMode||d.graphic.attr(this.pointAttribs(d))):d.graphic&&(d.graphic=d.graphic.destroy());d.tooltipPos=[f+this.options.xOffset+(c&&!this.onSeries?b:0),g+this.options.yOffset-(c?0:b+e.pos-a.plotTop)]},this)},animate:function(a){a?this.markerGroup.attr({opacity:.01}):this.markerGroup.animate({opacity:1},v(this.options.animation))},invertGroups:a,getExtremes:function(){return{}}},{isValid:function(){return k(this.value)&&0<=this.value}});""});f(a,"masters/modules/windbarb.src.js",[],function(){})});
//# sourceMappingURL=windbarb.js.map