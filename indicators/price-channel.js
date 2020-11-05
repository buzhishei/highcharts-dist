/*
 Highstock JS v8.2.2 (2020-11-05)

 Indicator series type for Highstock

 (c) 2010-2019 Daniel Studencki

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/price-channel",["highcharts","highcharts/modules/stock"],function(e){a(e);a.Highcharts=e;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function e(a,b,h,d){a.hasOwnProperty(b)||(a[b]=d.apply(null,h))}a=a?a._modules:{};e(a,"Mixins/MultipleLines.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,b){var h=
b.defined,d=b.error,e=b.merge,l=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(f){var a=[];(this.pointArrayMap||[]).forEach(function(c){c!==f&&a.push("plot"+c.charAt(0).toUpperCase()+c.slice(1))});return a},toYData:function(f){var a=[];(this.pointArrayMap||[]).forEach(function(c){a.push(f[c])});return a},translate:function(){var f=this,a=f.pointArrayMap,c=[],d;c=f.getTranslatedLinesNames();l.prototype.translate.apply(f,
arguments);f.points.forEach(function(b){a.forEach(function(a,h){d=b[a];null!==d&&(b[c[h]]=f.yAxis.toPixels(d,!0))})})},drawGraph:function(){var a=this,b=a.linesApiNames,c=a.points,n=c.length,q=a.options,r=a.graph,k={options:{gapSize:q.gapSize}},m=[],g;a.getTranslatedLinesNames(a.pointValKey).forEach(function(a,b){for(m[b]=[];n--;)g=c[n],m[b].push({x:g.x,plotX:g.plotX,plotY:g[a],isNull:!h(g[a])});n=c.length});b.forEach(function(b,c){m[c]?(a.points=m[c],q[b]?a.options=e(q[b].styles,k):d('Error: "There is no '+
b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),a.graph=a["graph"+b],l.prototype.drawGraph.call(a),a["graph"+b]=a.graph):d('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=c;a.options=q;a.graph=r;l.prototype.drawGraph.call(a)}}});e(a,"Mixins/ReduceArray.js",[],function(){return{minInArray:function(a,b){return a.reduce(function(a,d){return Math.min(a,
d[b])},Number.MAX_VALUE)},maxInArray:function(a,b){return a.reduce(function(a,d){return Math.max(a,d[b])},-Number.MAX_VALUE)},getArrayExtremes:function(a,b,e){return a.reduce(function(a,h){return[Math.min(a[0],h[b]),Math.max(a[1],h[e])]},[Number.MAX_VALUE,-Number.MAX_VALUE])}}});e(a,"Stock/Indicators/PCIndicator.js",[a["Core/Series/Series.js"],a["Mixins/MultipleLines.js"],a["Mixins/ReduceArray.js"],a["Core/Utilities.js"]],function(a,b,e,d){d=d.merge;var h=e.getArrayExtremes;a.seriesType("pc","sma",
{params:{period:20},lineWidth:1,topLine:{styles:{lineColor:"#90ed7d",lineWidth:1}},bottomLine:{styles:{lineColor:"#f45b5b",lineWidth:1}},dataGrouping:{approximation:"averages"}},d(b,{pointArrayMap:["top","middle","bottom"],pointValKey:"middle",nameBase:"Price Channel",nameComponents:["period"],linesApiNames:["topLine","bottomLine"],getValues:function(a,b){b=b.period;var d=a.xData,c=(a=a.yData)?a.length:0,e=[],f=[],n=[],k;if(!(c<b)){for(k=b;k<=c;k++){var m=d[k-1];var g=a.slice(k-b,k);var p=h(g,2,1);
g=p[1];var l=p[0];p=(g+l)/2;e.push([m,g,p,l]);f.push(m);n.push([g,p,l])}return{values:e,xData:f,yData:n}}}}));""});e(a,"masters/indicators/price-channel.src.js",[],function(){})});
//# sourceMappingURL=price-channel.js.map