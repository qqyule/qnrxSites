!function(e,i){"use strict";function s(e,i){e.className+=" "+i}function a(e,i){e&&(e.innerHTML=i||"")}var t=Q.def,d=Q.getFirst,l=Q.getLast,v=Q.getNext,c=Q.createEle,n=Q.formatSize,o=Q.event.add,r=Q.Uploader,u=r.Lang;r.UI.File={init:function(){var e=this.ops.view;e&&s(e,"ui-file "+(this.html5?"html5":"html4"))},draw:function(e){var i=this,s=i.ops,a=s.view;if(a){var v=s.button||{},n=t(u.cancel||v.cancel,"取消"),r=t(u.remove||v.remove,"删除"),f=e.name,p='<div class="fl"><div class="u-name" title="'+f+'">'+f+'</div></div><div class="fr"><div class="u-size"></div><div class="u-speed">--/s</div><div class="u-progress-bar"><div class="u-progress" style="width:1%;"></div></div><div class="u-detail">0%</div><div class="u-state"></div><div class="u-op"><a class="u-op-cancel">'+n+'</a><a class="u-op-remove">'+r+'</a></div></div><div class="clear"></div>',h=e.id,m=c("div","u-item",p);m.taskId=h,e.box=m,a.appendChild(m);var x=l(m.childNodes[1]),g=d(x),Q=l(x);o(g,"click",function(){i.cancel(h)}),o(Q,"click",function(){i.remove(h),a.removeChild(m)}),i.update(e)}},update:function(e){if(e&&e.box){var i=e.total||e.size,s=e.loaded,t=e.state,l=e.box.childNodes[1],c=d(l),o=v(c),u=v(o),f=d(u),p=v(u);if(a(v(p),r.getStatusText(t)),!(0>i)){var h="";if(this.html5&&null!=s&&s>=0){var m;if(t==r.PROCESSING)"100.0"==(m=Math.min(100*s/i,100).toFixed(1))&&(m="99.9");else t==r.COMPLETE&&(m="100");m&&(m+="%",f.style.width=m,a(p,m)),h='<span class="u-loaded">'+n(s)+"</span> / ";var x=e.avgSpeed||e.speed;a(o,n(x)+"/s")}a(c,h+='<span class="u-total">'+n(i)+"</span>")}}},over:function(e){e&&e.box&&s(e.box,"u-over")}},r.extend(r.UI.File)}(window);