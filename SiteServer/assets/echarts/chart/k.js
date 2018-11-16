define("echarts/chart/k",["require","./base","../util/shape/Candle","../component/axis","../component/grid","../component/dataZoom","../config","../util/ecData","zrender/tool/util","../chart"],function(e){function t(e,t,o,s,n){i.call(this,e,t,o,s,n),this.refresh(s)}var i=e("./base"),o=e("../util/shape/Candle");e("../component/axis"),e("../component/grid"),e("../component/dataZoom");var s=e("../config");s.k={zlevel:0,z:2,clickable:!0,hoverable:!0,legendHoverLink:!1,xAxisIndex:0,yAxisIndex:0,itemStyle:{normal:{color:"#fff",color0:"#00aa11",lineStyle:{width:1,color:"#ff3200",color0:"#00aa11"},label:{show:!1}},emphasis:{label:{show:!1}}}};var n=e("../util/ecData"),r=e("zrender/tool/util");return t.prototype={type:s.CHART_TYPE_K,_buildShape:function(){var e=this.series;this.selectedMap={};for(var t,i={top:[],bottom:[]},o=0,n=e.length;n>o;o++)e[o].type===s.CHART_TYPE_K&&(e[o]=this.reformOption(e[o]),this.legendHoverLink=e[o].legendHoverLink||this.legendHoverLink,(t=this.component.xAxis.getAxis(e[o].xAxisIndex)).type===s.COMPONENT_TYPE_AXIS_CATEGORY&&i[t.getPosition()].push(o));for(var r in i)i[r].length>0&&this._buildSinglePosition(r,i[r]);this.addShapeList()},_buildSinglePosition:function(e,t){var i=this._mapData(t),o=i.locationMap,s=i.maxDataLength;if(0!==s&&0!==o.length){this._buildHorizontal(t,s,o);for(var n=0,r=t.length;r>n;n++)this.buildMark(t[n])}},_mapData:function(e){for(var t,i,o=this.series,s=this.component.legend,n=[],r=0,l=0,a=e.length;a>l;l++)i=(t=o[e[l]]).name,this.selectedMap[i]=!s||s.isSelected(i),this.selectedMap[i]&&n.push(e[l]),r=Math.max(r,t.data.length);return{locationMap:n,maxDataLength:r}},_buildHorizontal:function(e,t,i){for(var o,s,n,r,l,a,h,d,y,c,p=this.series,m={},u=0,g=i.length;g>u;u++){n=(s=p[o=i[u]]).xAxisIndex||0,r=this.component.xAxis.getAxis(n),h=s.barWidth||Math.floor(r.getGap()/2),(c=s.barMaxWidth)&&h>c&&(h=c),l=s.yAxisIndex||0,a=this.component.yAxis.getAxis(l),m[o]=[];for(var x=0,f=t;f>x&&null!=r.getNameByIndex(x);x++)d=s.data[x],"-"!==(y=this.getDataFromOption(d,"-"))&&4==y.length&&m[o].push([r.getCoordByIndex(x),h,a.getCoord(y[0]),a.getCoord(y[1]),a.getCoord(y[2]),a.getCoord(y[3]),x,r.getNameByIndex(x)])}this._buildKLine(e,m)},_buildKLine:function(e,t){for(var i,o,n,r,l,a,h,d,y,c,p,m,u,g,x,f,S=this.series,A=0,v=e.length;v>A;A++)if(p=S[f=e[A]],u=t[f],this._isLarge(u)&&(u=this._getLargePointList(u)),p.type===s.CHART_TYPE_K&&null!=u){m=p,i=this.query(m,"itemStyle.normal.lineStyle.width"),o=this.query(m,"itemStyle.normal.lineStyle.color"),n=this.query(m,"itemStyle.normal.lineStyle.color0"),r=this.query(m,"itemStyle.normal.color"),l=this.query(m,"itemStyle.normal.color0"),a=this.query(m,"itemStyle.emphasis.lineStyle.width"),h=this.query(m,"itemStyle.emphasis.lineStyle.color"),d=this.query(m,"itemStyle.emphasis.lineStyle.color0"),y=this.query(m,"itemStyle.emphasis.color"),c=this.query(m,"itemStyle.emphasis.color0");for(var _=0,b=u.length;b>_;_++)g=u[_],m=p.data[g[6]],x=g[3]<g[2],this.shapeList.push(this._getCandle(f,g[6],g[7],g[0],g[1],g[2],g[3],g[4],g[5],x?this.query(m,"itemStyle.normal.color")||r:this.query(m,"itemStyle.normal.color0")||l,this.query(m,"itemStyle.normal.lineStyle.width")||i,x?this.query(m,"itemStyle.normal.lineStyle.color")||o:this.query(m,"itemStyle.normal.lineStyle.color0")||n,x?this.query(m,"itemStyle.emphasis.color")||y||r:this.query(m,"itemStyle.emphasis.color0")||c||l,this.query(m,"itemStyle.emphasis.lineStyle.width")||a||i,x?this.query(m,"itemStyle.emphasis.lineStyle.color")||h||o:this.query(m,"itemStyle.emphasis.lineStyle.color0")||d||n))}},_isLarge:function(e){return e[0][1]<.5},_getLargePointList:function(e){for(var t=this.component.grid.getWidth(),i=e.length,o=[],s=0;t>s;s++)o[s]=e[Math.floor(i/t*s)];return o},_getCandle:function(e,t,i,s,r,l,a,h,d,y,c,p,m,u,g){var x=this.series[e],f=x.data[t],S=[f,x],A={zlevel:x.zlevel,z:x.z,clickable:this.deepQuery(S,"clickable"),hoverable:this.deepQuery(S,"hoverable"),style:{x:s,y:[l,a,h,d],width:r,color:y,strokeColor:p,lineWidth:c,brushType:"both"},highlightStyle:{color:m,strokeColor:g,lineWidth:u},_seriesIndex:e};return A=this.addLabel(A,x,f,i),n.pack(A,x,e,f,t,i),new o(A)},getMarkCoord:function(e,t){var i=this.series[e],o=this.component.xAxis.getAxis(i.xAxisIndex),s=this.component.yAxis.getAxis(i.yAxisIndex);return["string"!=typeof t.xAxis&&o.getCoordByIndex?o.getCoordByIndex(t.xAxis||0):o.getCoord(t.xAxis||0),"string"!=typeof t.yAxis&&s.getCoordByIndex?s.getCoordByIndex(t.yAxis||0):s.getCoord(t.yAxis||0)]},refresh:function(e){e&&(this.option=e,this.series=e.series),this.backupShapeList(),this._buildShape()},addDataAnimation:function(e,t){function i(){0===--p&&t&&t()}for(var o=this.series,s={},r=0,l=e.length;l>r;r++)s[e[r][0]]=e[r];var a,h,d,y,c,p=0;for(r=0,l=this.shapeList.length;l>r;r++)if(s[y=this.shapeList[r]._seriesIndex]&&!s[y][3]&&"candle"===this.shapeList[r].type){if(c=n.get(this.shapeList[r],"dataIndex"),d=o[y],s[y][2]&&c===d.data.length-1){this.zr.delShape(this.shapeList[r].id);continue}if(!s[y][2]&&0===c){this.zr.delShape(this.shapeList[r].id);continue}h=this.component.xAxis.getAxis(d.xAxisIndex||0).getGap(),a=s[y][2]?h:-h,0,p++,this.zr.animate(this.shapeList[r].id,"").when(this.query(this.option,"animationDurationUpdate"),{position:[a,0]}).done(i).start()}p||t&&t()}},r.inherits(t,i),e("../chart").define("k",t),t});