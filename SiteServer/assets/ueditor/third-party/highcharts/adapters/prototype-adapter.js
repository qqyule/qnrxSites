var HighchartsAdapter=function(){var t="undefined"!=typeof Effect;return{init:function(e){t&&(Effect.HighchartsTransition=Class.create(Effect.Base,{initialize:function(t,i,n,h){var a;this.element=t,this.key=i,a=t.attr?t.attr(i):$(t).getStyle(i),"d"===i&&(this.paths=e.init(t,t.d,n),this.toD=n,a=0,n=1),this.start(Object.extend(h||{},{from:a,to:n,attribute:i}))},setup:function(){HighchartsAdapter._extend(this.element),this.element._highchart_animation||(this.element._highchart_animation={}),this.element._highchart_animation[this.key]=this},update:function(t){var i=this.paths,n=this.element;i&&(t=e.step(i[0],i[1],t,this.toD)),n.attr?n.element&&n.attr(this.options.attribute,t):((i={})[this.options.attribute]=t,$(n).setStyle(i))},finish:function(){this.element&&this.element._highchart_animation&&delete this.element._highchart_animation[this.key]}}))},adapterRun:function(t,e){return parseInt($(t).getStyle(e),10)},getScript:function(t,e){var i=$$("head")[0];i&&i.appendChild(new Element("script",{type:"text/javascript",src:t}).observe("load",e))},addNS:function(t){return/^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/.test(t)||/^(?:click|mouse(?:down|up|over|move|out))$/.test(t)?t:"h:"+t},addEvent:function(t,e,i){t.addEventListener||t.attachEvent?Event.observe($(t),HighchartsAdapter.addNS(e),i):(HighchartsAdapter._extend(t),t._highcharts_observe(e,i))},animate:function(e,i,n){var h;if((n=n||{}).delay=0,n.duration=(n.duration||500)/1e3,n.afterFinish=n.complete,t)for(h in i)new Effect.HighchartsTransition($(e),h,i[h],n);else{if(e.attr)for(h in i)e.attr(h,i[h]);n.complete&&n.complete()}e.attr||$(e).setStyle(i)},stop:function(t){var e;if(t._highcharts_extended&&t._highchart_animation)for(e in t._highchart_animation)t._highchart_animation[e].cancel()},each:function(t,e){$A(t).each(e)},inArray:function(t,e,i){return e?e.indexOf(t,i):-1},offset:function(t){return $(t).cumulativeOffset()},fireEvent:function(t,e,i,n){t.fire?t.fire(HighchartsAdapter.addNS(e),i):t._highcharts_extended&&(i=i||{},t._highcharts_fire(e,i)),i&&i.defaultPrevented&&(n=null),n&&n(i)},removeEvent:function(t,e,i){$(t).stopObserving&&(e&&(e=HighchartsAdapter.addNS(e)),$(t).stopObserving(e,i)),window===t?Event.stopObserving(t,e,i):(HighchartsAdapter._extend(t),t._highcharts_stop_observing(e,i))},washMouseEvent:function(t){return t},grep:function(t,e){return t.findAll(e)},map:function(t,e){return t.map(e)},_extend:function(t){t._highcharts_extended||Object.extend(t,{_highchart_events:{},_highchart_animation:null,_highcharts_extended:!0,_highcharts_observe:function(t,e){this._highchart_events[t]=[this._highchart_events[t],e].compact().flatten()},_highcharts_stop_observing:function(t,e){t?e?this._highchart_events[t]=[this._highchart_events[t]].compact().flatten().without(e):delete this._highchart_events[t]:this._highchart_events={}},_highcharts_fire:function(t,e){var i=this;(this._highchart_events[t]||[]).each(function(t){e.stopped||(e.preventDefault=function(){e.defaultPrevented=!0},e.target=i,!1===t.bind(this)(e)&&e.preventDefault())}.bind(this))}})}}}();