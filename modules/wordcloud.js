/*
 Highcharts JS v8.2.2 (2020-11-05)

 (c) 2016-2019 Highsoft AS
 Authors: Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/wordcloud",["highcharts"],function(n){a(n);a.Highcharts=n;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function n(a,g,m,G){a.hasOwnProperty(g)||(a[g]=G.apply(null,m))}a=a?a._modules:{};n(a,"Mixins/DrawPoint.js",[],function(){var a=function(a){return"function"===typeof a},g=function(m){var g,h=this,k=h.graphic,t=m.animatableAttribs,
l=m.onComplete,n=m.css,y=m.renderer,r=null===(g=h.series)||void 0===g?void 0:g.options.animation;if(h.shouldDraw())k||(h.graphic=k=y[m.shapeType](m.shapeArgs).add(m.group)),k.css(n).attr(m.attribs).animate(t,m.isNew?!1:r,l);else if(k){var u=function(){h.graphic=k=k.destroy();a(l)&&l()};Object.keys(t).length?k.animate(t,void 0,function(){u()}):u()}};return{draw:g,drawPoint:function(a){(a.attribs=a.attribs||{})["class"]=this.getClassName();g.call(this,a)},isFn:a}});n(a,"Mixins/Polygon.js",[a["Core/Globals.js"],
a["Core/Utilities.js"]],function(a,g){var m=g.find,n=g.isArray,h=g.isNumber,k=a.deg2rad,t=function(d,b){b=h(b)?b:14;b=Math.pow(10,b);return Math.round(d*b)/b},l=function(d,b){var a=b[0]-d[0];d=b[1]-d[1];return[[-d,a],[d,-a]]},D=function(d,b){d=d.map(function(d){return d[0]*b[0]+d[1]*b[1]});return{min:Math.min.apply(this,d),max:Math.max.apply(this,d)}},y=function(d,b){var a=d[0];d=d[1];var q=k*-b;b=Math.cos(q);q=Math.sin(q);return[t(a*b-d*q),t(a*q+d*b)]},r=function(d,b,a){d=y([d[0]-b[0],d[1]-b[1]],
a);return[d[0]+b[0],d[1]+b[1]]},u=function(d){var b=d.axes;if(!n(b)){b=[];var a=a=d.concat([d[0]]);a.reduce(function(d,a){var q=l(d,a)[0];m(b,function(b){return b[0]===q[0]&&b[1]===q[1]})||b.push(q);return a});d.axes=b}return b},B=function(d,b){d=u(d);b=u(b);return d.concat(b)};return{getBoundingBoxFromPolygon:function(d){return d.reduce(function(b,d){var a=d[0];d=d[1];b.left=Math.min(a,b.left);b.right=Math.max(a,b.right);b.bottom=Math.max(d,b.bottom);b.top=Math.min(d,b.top);return b},{left:Number.MAX_VALUE,
right:-Number.MAX_VALUE,bottom:-Number.MAX_VALUE,top:Number.MAX_VALUE})},getPolygon:function(d,b,a,q,g){var m=[d,b],h=d-a/2;d+=a/2;a=b-q/2;b+=q/2;return[[h,a],[d,a],[d,b],[h,b]].map(function(b){return r(b,m,-g)})},isPolygonsColliding:function(a,b){var d=B(a,b);return!m(d,function(d){var g=D(a,d);d=D(b,d);return!!(d.min>g.max||d.max<g.min)})},movePolygon:function(d,a,g){return g.map(function(b){return[b[0]+d,b[1]+a]})},rotate2DToOrigin:y,rotate2DToPoint:r}});n(a,"Series/WordcloudSeries.js",[a["Core/Series/Series.js"],
a["Mixins/DrawPoint.js"],a["Core/Globals.js"],a["Series/Line/LineSeries.js"],a["Mixins/Polygon.js"],a["Core/Utilities.js"]],function(a,g,m,n,h,k){function t(c,e){var f=!1,a=c.rect,d=c.polygon,b=c.lastCollidedWith,g=function(e){var f=e.rect;(f=!(f.left>a.right||f.right<a.left||f.top>a.bottom||f.bottom<a.top))&&(c.rotation%90||e.rotation%90)&&(f=E(d,e.polygon));return f};b&&((f=g(b))||delete c.lastCollidedWith);f||(f=!!K(e,function(e){var f=g(e);f&&(c.lastCollidedWith=e);return f}));return f}function l(c,
e){e=4*c;var f=Math.ceil((Math.sqrt(e)-1)/2),a=2*f+1,d=Math.pow(a,2),b=!1;--a;1E4>=c&&("boolean"===typeof b&&e>=d-a&&(b={x:f-(d-e),y:-f}),d-=a,"boolean"===typeof b&&e>=d-a&&(b={x:-f,y:-f+(d-e)}),d-=a,"boolean"===typeof b&&(b=e>=d-a?{x:-f+(d-e),y:f}:{x:f,y:f-(d-e-a)}),b.x*=5,b.y*=5);return b}function D(c,e,f){var a=2*Math.max(Math.abs(f.top),Math.abs(f.bottom));f=2*Math.max(Math.abs(f.left),Math.abs(f.right));return Math.min(0<f?1/f*c:1,0<a?1/a*e:1)}function y(c,e,f){f=f.reduce(function(c,e){e=e.dimensions;
var f=Math.max(e.width,e.height);c.maxHeight=Math.max(c.maxHeight,e.height);c.maxWidth=Math.max(c.maxWidth,e.width);c.area+=f*f;return c},{maxHeight:0,maxWidth:0,area:0});f=Math.max(f.maxHeight,f.maxWidth,.85*Math.sqrt(f.area));var a=c>e?c/e:1;c=e>c?e/c:1;return{width:f*a,height:f*c,ratioX:a,ratioY:c}}function r(c,e,f,a){var b=!1;v(c)&&v(e)&&v(f)&&v(a)&&0<c&&-1<e&&a>f&&(b=f+e%c*((a-f)/(c-1||1)));return b}function u(c,e){var f,a=[];for(f=1;1E4>f;f++)a.push(c(f,e));return function(c){return 1E4>=c?
a[c-1]:!1}}function B(c,e){var a=e.width/2,b=-(e.height/2),d=e.height/2;return!(-(e.width/2)<c.left&&a>c.right&&b<c.top&&d>c.bottom)}function d(c,e){var a=e.placed,b=e.field,d=e.rectangle,g=e.polygon,m=e.spiral,h=1,k={x:0,y:0},n=c.rect=z({},d);c.polygon=g;for(c.rotation=e.rotation;!1!==k&&(t(c,a)||B(n,b));)k=m(h),C(k)&&(n.left=d.left+k.x,n.right=d.right+k.x,n.top=d.top+k.y,n.bottom=d.bottom+k.y,c.polygon=J(k.x,k.y,g)),h++;return k}function b(c,e){if(C(c)&&C(e)){var a=e.bottom-e.top;var b=e.right-
e.left;e=c.ratioX;var d=c.ratioY;a=b*e>a*d?b:a;c=L(c,{width:c.width+a*e*2,height:c.height+a*d*2})}return c}var A=m.noop,q=h.getBoundingBoxFromPolygon,G=h.getPolygon,E=h.isPolygonsColliding,J=h.movePolygon,z=k.extend,K=k.find,M=k.isArray,v=k.isNumber,C=k.isObject,L=k.merge;h={animate:n.prototype.animate,animateDrilldown:A,animateDrillupFrom:A,setClip:A,bindAxes:function(){var c={endOnTick:!1,gridLineWidth:0,lineWidth:0,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};n.prototype.bindAxes.call(this);
z(this.yAxis.options,c);z(this.xAxis.options,c)},pointAttribs:function(c,a){c=m.seriesTypes.column.prototype.pointAttribs.call(this,c,a);delete c.stroke;delete c["stroke-width"];return c},deriveFontSize:function(c,a,b){c=v(c)?c:0;a=v(a)?a:1;b=v(b)?b:1;return Math.floor(Math.max(b,c*a))},drawPoints:function(){var a=this,e=a.hasRendered,f=a.xAxis,g=a.yAxis,k=a.group,h=a.options,m=h.animation,n=h.allowExtendPlayingField,t=a.chart.renderer,l=t.text().add(k),r=[],A=a.placementStrategy[h.placementStrategy],
B=h.rotation,E=a.points.map(function(a){return a.weight}),H=Math.max.apply(null,E),F=a.points.concat().sort(function(a,e){return e.weight-a.weight});a.group.attr({scaleX:1,scaleY:1});F.forEach(function(e){var b=a.deriveFontSize(1/H*e.weight,h.maxFontSize,h.minFontSize);b=z({fontSize:b+"px"},h.style);l.css(b).attr({x:0,y:0,text:e.name});b=l.getBBox(!0);e.dimensions={height:b.height,width:b.width}});var w=y(f.len,g.len,F);var I=u(a.spirals[h.spiral],{field:w});F.forEach(function(c){var f=a.deriveFontSize(1/
H*c.weight,h.maxFontSize,h.minFontSize);f=z({fontSize:f+"px"},h.style);var g=A(c,{data:F,field:w,placed:r,rotation:B}),l=z(a.pointAttribs(c,c.selected&&"select"),{align:"center","alignment-baseline":"middle",x:g.x,y:g.y,text:c.name,rotation:g.rotation}),u=G(g.x,g.y,c.dimensions.width,c.dimensions.height,g.rotation),p=q(u),x=d(c,{rectangle:p,polygon:u,field:w,placed:r,spiral:I,rotation:g.rotation});!x&&n&&(w=b(w,p),x=d(c,{rectangle:p,polygon:u,field:w,placed:r,spiral:I,rotation:g.rotation}));if(C(x)){l.x+=
x.x;l.y+=x.y;p.left+=x.x;p.right+=x.x;p.top+=x.y;p.bottom+=x.y;g=w;if(!v(g.left)||g.left>p.left)g.left=p.left;if(!v(g.right)||g.right<p.right)g.right=p.right;if(!v(g.top)||g.top>p.top)g.top=p.top;if(!v(g.bottom)||g.bottom<p.bottom)g.bottom=p.bottom;w=g;r.push(c);c.isNull=!1}else c.isNull=!0;if(m){var y={x:l.x,y:l.y};e?(delete l.x,delete l.y):(l.x=0,l.y=0)}c.draw({animatableAttribs:y,attribs:l,css:f,group:k,renderer:t,shapeArgs:void 0,shapeType:"text"})});l=l.destroy();f=D(f.len,g.len,w);a.group.attr({scaleX:f,
scaleY:f})},hasData:function(){return C(this)&&!0===this.visible&&M(this.points)&&0<this.points.length},placementStrategy:{random:function(a,e){var c=e.field;e=e.rotation;return{x:Math.round(c.width*(Math.random()+.5)/2)-c.width/2,y:Math.round(c.height*(Math.random()+.5)/2)-c.height/2,rotation:r(e.orientations,a.index,e.from,e.to)}},center:function(a,e){e=e.rotation;return{x:0,y:0,rotation:r(e.orientations,a.index,e.from,e.to)}}},pointArrayMap:["weight"],spirals:{archimedean:function(a,e){var c=e.field;
e=!1;c=c.width*c.width+c.height*c.height;var b=.8*a;1E4>=a&&(e={x:b*Math.cos(b),y:b*Math.sin(b)},Math.min(Math.abs(e.x),Math.abs(e.y))<c||(e=!1));return e},rectangular:function(a,b){a=l(a,b);b=b.field;a&&(a.x*=b.ratioX,a.y*=b.ratioY);return a},square:l},utils:{extendPlayingField:b,getRotation:r,isPolygonsColliding:E,rotate2DToOrigin:h.rotate2DToOrigin,rotate2DToPoint:h.rotate2DToPoint},getPlotBox:function(){var a=this.chart,b=a.inverted,d=this[b?"yAxis":"xAxis"];b=this[b?"xAxis":"yAxis"];return{translateX:(d?
d.left:a.plotLeft)+(d?d.len:a.plotWidth)/2,translateY:(b?b.top:a.plotTop)+(b?b.len:a.plotHeight)/2,scaleX:1,scaleY:1}}};g={draw:g.drawPoint,shouldDraw:function(){return!this.isNull},isValid:function(){return!0},weight:1};"";a.seriesType("wordcloud","column",{allowExtendPlayingField:!0,animation:{duration:500},borderWidth:0,clip:!1,colorByPoint:!0,minFontSize:1,maxFontSize:25,placementStrategy:"center",rotation:{from:0,orientations:2,to:90},showInLegend:!1,spiral:"rectangular",style:{fontFamily:"sans-serif",
fontWeight:"900",whiteSpace:"nowrap"},tooltip:{followPointer:!0,pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.weight}</b><br/>'}},h,g)});n(a,"masters/modules/wordcloud.src.js",[],function(){})});
//# sourceMappingURL=wordcloud.js.map