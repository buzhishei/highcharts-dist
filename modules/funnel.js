/*
 Highcharts JS v8.2.2 (2020-11-05)

 Highcharts funnel module

 (c) 2010-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/funnel",["highcharts"],function(c){b(c);b.Highcharts=c;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function c(b,c,k,w){b.hasOwnProperty(c)||(b[c]=w.apply(null,k))}b=b?b._modules:{};c(b,"Series/FunnelSeries.js",[b["Core/Series/Series.js"],b["Core/Chart/Chart.js"],b["Core/Globals.js"],b["Series/Line/LineSeries.js"],
b["Core/Utilities.js"]],function(b,c,k,w,q){var F=b.seriesTypes,G=k.noop;k=q.addEvent;var I=q.fireEvent,J=q.isArray,H=q.pick;b.seriesType("funnel","pie",{animation:!1,center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,size:!0,dataLabels:{connectorWidth:1,verticalAlign:"middle"},states:{select:{color:"#cccccc",borderColor:"#000000"}}},{animate:G,translate:function(){function a(a,b){return/%$/.test(a)?b*parseInt(a,10)/100:parseInt(a,10)}var b=0,e=this,g=e.chart,
f=e.options,y=f.reversed,d=f.ignoreHiddenPoint,r=g.plotWidth;g=g.plotHeight;var c=0,k=f.center,h=a(k[0],r),l=a(k[1],g),q=a(f.width,r),t,u=a(f.height,g),z=a(f.neckWidth,r),w=a(f.neckHeight,g),A=l-u/2+u-w;r=e.data;var C,D,F="left"===f.dataLabels.position?1:0,B,m,E,v,n,x,p;e.getWidthAt=function(a){var b=l-u/2;return a>A||u===w?z:z+(q-z)*(1-(a-b)/(u-w))};e.getX=function(a,b,d){return h+(b?-1:1)*(e.getWidthAt(y?2*l-a:a)/2+d.labelDistance)};e.center=[h,l,u];e.centerX=h;r.forEach(function(a){d&&!1===a.visible||
(b+=a.y)});r.forEach(function(a){p=null;D=b?a.y/b:0;m=l-u/2+c*u;n=m+D*u;t=e.getWidthAt(m);B=h-t/2;E=B+t;t=e.getWidthAt(n);v=h-t/2;x=v+t;m>A?(B=v=h-z/2,E=x=h+z/2):n>A&&(p=n,t=e.getWidthAt(A),v=h-t/2,x=v+t,n=A);y&&(m=2*l-m,n=2*l-n,null!==p&&(p=2*l-p));C=[["M",B,m],["L",E,m],["L",x,n]];null!==p&&C.push(["L",x,p],["L",v,p]);C.push(["L",v,n],["Z"]);a.shapeType="path";a.shapeArgs={d:C};a.percentage=100*D;a.plotX=h;a.plotY=(m+(p||n))/2;a.tooltipPos=[h,a.plotY];a.dlBox={x:v,y:m,topWidth:E-B,bottomWidth:x-
v,height:Math.abs(H(p,n)-m),width:NaN};a.slice=G;a.half=F;d&&!1===a.visible||(c+=D)});I(e,"afterTranslate")},sortByAngle:function(a){a.sort(function(a,b){return a.plotY-b.plotY})},drawDataLabels:function(){var a=this.data,b=this.options.dataLabels.distance,e,g=a.length;for(this.center[2]-=2*b;g--;){var f=a[g];var y=(e=f.half)?1:-1;var d=f.plotY;f.labelDistance=H(f.options.dataLabels&&f.options.dataLabels.distance,b);this.maxLabelDistance=Math.max(f.labelDistance,this.maxLabelDistance||0);var c=this.getX(d,
e,f);f.labelPosition={natural:{x:0,y:d},"final":{},alignment:e?"right":"left",connectorPosition:{breakAt:{x:c+(f.labelDistance-5)*y,y:d},touchingSliceAt:{x:c+f.labelDistance*y,y:d}}}}F[this.options.dataLabels.inside?"column":"pie"].prototype.drawDataLabels.call(this)},alignDataLabel:function(a,b,e,g,f){var c=a.series;g=c.options.reversed;var d=a.dlBox||a.shapeArgs,r=e.align,k=e.verticalAlign,q=((c.options||{}).dataLabels||{}).inside,h=c.center[1];c=c.getWidthAt((g?2*h-a.plotY:a.plotY)-d.height/2+
b.height);c="middle"===k?(d.topWidth-d.bottomWidth)/4:(c-d.bottomWidth)/2;h=d.y;var l=d.x;"middle"===k?h=d.y-d.height/2+b.height/2:"top"===k&&(h=d.y-d.height+b.height+e.padding);if("top"===k&&!g||"bottom"===k&&g||"middle"===k)"right"===r?l=d.x-e.padding+c:"left"===r&&(l=d.x+e.padding-c);g={x:l,y:g?h-d.height:h,width:d.bottomWidth,height:d.height};e.verticalAlign="bottom";q&&!a.visible||w.prototype.alignDataLabel.call(this,a,b,e,g,f);q&&(!a.visible&&a.dataLabel&&(a.dataLabel.placed=!1),a.contrastColor&&
b.css({color:a.contrastColor}))}});k(c,"afterHideAllOverlappingLabels",function(){this.series.forEach(function(a){var b=a.options&&a.options.dataLabels;J(b)&&(b=b[0]);a.is("pie")&&a.placeDataLabels&&b&&!b.inside&&a.placeDataLabels()})});b.seriesType("pyramid","funnel",{neckWidth:"0%",neckHeight:"0%",reversed:!0});""});c(b,"masters/modules/funnel.src.js",[],function(){})});
//# sourceMappingURL=funnel.js.map