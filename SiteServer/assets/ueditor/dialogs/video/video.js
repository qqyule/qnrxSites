!function(){var e,t=[],a=!1;function i(e,t){for(var a,i,o=$G(e).children,r=0;i=o[r++];)if("focus"==i.className){a=i.getAttribute(t);break}return a}function o(e){return e?e=utils.trim(e).replace(/v\.youku\.com\/v_show\/id_([\w\-=]+)\.html/i,"player.youku.com/player.php/sid/$1/v.swf").replace(/(www\.)?youtube\.com\/watch\?v=([\w\-]+)/i,"www.youtube.com/v/$2").replace(/youtu.be\/(\w+)$/i,"www.youtube.com/v/$1").replace(/v\.ku6\.com\/.+\/([\w\.]+)\.html.*$/i,"player.ku6.com/refer/$1/v.swf").replace(/www\.56\.com\/u\d+\/v_([\w\-]+)\.html/i,"player.56.com/v_$1.swf").replace(/www.56.com\/w\d+\/play_album\-aid\-\d+_vid\-([^.]+)\.html/i,"player.56.com/v_$1.swf").replace(/v\.pps\.tv\/play_([\w]+)\.html.*$/i,"player.pps.tv/player/sid/$1/v.swf").replace(/www\.letv\.com\/ptv\/vplay\/([\d]+)\.html.*$/i,"i7.imgs.letv.com/player/swfPlayer.swf?id=$1&autoplay=0").replace(/www\.tudou\.com\/programs\/view\/([\w\-]+)\/?/i,"www.tudou.com/v/$1").replace(/v\.qq\.com\/cover\/[\w]+\/[\w]+\/([\w]+)\.html/i,"static.video.qq.com/TPout.swf?vid=$1").replace(/v\.qq\.com\/.+[\?\&]vid=([^&]+).*$/i,"static.video.qq.com/TPout.swf?vid=$1").replace(/my\.tv\.sohu\.com\/[\w]+\/[\d]+\/([\d]+)\.shtml.*$/i,"share.vrs.sohu.com/my/v.swf&id=$1"):""}function r(e){return/(0|^[1-9]\d*$)/.test(e)}function n(e){for(var t,a=$G(e).children,i=0;t=a[i++];)domUtils.on(t,"click",function(){for(var e,t=0;e=a[t++];)e.className="",e.removeAttribute&&e.removeAttribute("class");this.className="focus"})}function s(e){if(e){var t=o(e);t=utils.unhtmlForUrl(t),$G("preview").innerHTML='<div class="previewMsg"><span>'+lang.urlError+'</span></div><embed class="previewVideo" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+t+'" width="420" height="280" wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" ></embed>'}}function l(e){this.$wrap=e.constructor==String?$("#"+e):$(e),this.init()}window.onload=function(){var d;$focus($G("videoUrl")),function(){for(var e=$G("tabHeads").children,t=0;t<e.length;t++)domUtils.on(e[t],"click",function(t){var a,i,o=t.target||t.srcElement;for(a=0;a<e.length;a++)i=e[a].getAttribute("data-content-id"),e[a]==o?(domUtils.addClass(e[a],"focus"),domUtils.addClass($G(i),"focus")):(domUtils.removeClasses(e[a],"focus"),domUtils.removeClasses($G(i),"focus"))})}(),function(e){for(var t,a=0;t=e[a++];){var i=$G(t),o={none:lang.default,left:lang.floatLeft,right:lang.floatRight,center:lang.block};for(var r in o){var s=document.createElement("div");s.setAttribute("name",r),"none"==r&&(s.className="focus"),s.style.cssText="background:url(images/"+r+"_focus.jpg);",s.setAttribute("title",o[r]),i.appendChild(s)}n(t)}}(["videoFloat","upload_alignment"]),d=$G("videoUrl"),browser.ie?d.onpropertychange=function(){s(this.value)}:d.addEventListener("input",function(){s(this.value)},!1),dialog.onok=function(){$G("preview").innerHTML="";var n,s,l,d,u=i("tabHeads","tabSrc");switch(u){case"video":return n=$G("videoWidth"),s=$G("videoHeight"),l=$G("videoUrl").value,d=i("videoFloat","name"),!!l&&!!function(e){for(var t,a=0;t=e[a++];){var i=t.value;if(!r(i)&&i)return alert(lang.numError),t.value="",t.focus(),!1}return!0}([n,s])&&void editor.execCommand("insertvideo",{url:o(l),width:n.value,height:s.value,align:d},a?"upload":null);case"videoSearch":return function(e){for(var t,a=domUtils.getElementsByTagName($G(e),"img"),i=[],o=0;t=a[o++];)t.getAttribute("selected")&&i.push({url:t.getAttribute("ue_video_url"),width:420,height:280,align:"none"});editor.execCommand("insertvideo",i)}("searchList");case"upload":return function(){var a=[],o=editor.getOpt("videoUrlPrefix"),r=parseInt($G("upload_width").value,10)||420,n=parseInt($G("upload_height").value,10)||280,s=i("upload_alignment","name")||"none";for(var l in t){var d=t[l];a.push({url:o+d.url,width:r,height:n,align:s})}var u=e.getQueueCount();if(u)return $(".info","#queueList").html('<span style="color:red;">'+"还有2个未上传文件".replace(/[\d]/,u)+"</span>"),!1;editor.execCommand("insertvideo",a,"upload")}()}},dialog.oncancel=function(){$G("preview").innerHTML=""},function(){var e,t=editor.selection.getRange().getClosedNode();if(t&&t.className){var i="edui-faked-video"==t.className,o=-1!=t.className.indexOf("edui-upload-video");if(i||o){$G("videoUrl").value=e=t.getAttribute("_url"),$G("videoWidth").value=t.width,$G("videoHeight").value=t.height;var r=domUtils.getComputedStyle(t,"float"),n=domUtils.getComputedStyle(t.parentNode,"text-align");!function(e){for(var t,a=$G("videoFloat").children,i=0;t=a[i++];)t.getAttribute("name")==e?"focus"!=t.className&&(t.className="focus"):"focus"==t.className&&(t.className="")}("center"===n?"center":r)}o&&(a=!0)}s(e)}(),e=new l("queueList")},l.prototype={init:function(){this.fileList=[],this.initContainer(),this.initUploader()},initContainer:function(){this.$queue=this.$wrap.find(".filelist")},initUploader:function(){var e,a,i,o=this,r=jQuery,n=o.$wrap,s=n.find(".filelist"),l=n.find(".statusBar"),d=l.find(".info"),u=n.find(".uploadBtn"),c=(n.find(".filePickerBtn"),n.find(".filePickerBlock")),p=n.find(".placeholder"),f=l.find(".progress").hide(),m=0,v=0,g=window.devicePixelRatio||1,h=113*g,w=113*g,b="",y={},$=(a=document.createElement("p").style,i="transition"in a||"WebkitTransition"in a||"MozTransition"in a||"msTransition"in a||"OTransition"in a,a=null,i),C=editor.getActionUrl(editor.getOpt("videoActionName")),x=editor.getOpt("videoMaxSize"),k=(editor.getOpt("videoAllowFiles")||[]).join("").replace(/\./g,",").replace(/^[,]/,"");function _(t){var a=r('<li id="'+t.id+'"><p class="title">'+t.name+'</p><p class="imgWrap"></p><p class="progress"><span></span></p></li>'),i=r('<div class="file-panel"><span class="cancel">'+lang.uploadDelete+'</span><span class="rotateRight">'+lang.uploadTurnRight+'</span><span class="rotateLeft">'+lang.uploadTurnLeft+"</span></div>").appendTo(a),o=a.find("p.progress span"),n=a.find("p.imgWrap"),s=r('<p class="error"></p>').hide().appendTo(a),l=function(e){switch(e){case"exceed_size":text=lang.errorExceedSize;break;case"interrupt":text=lang.errorInterrupt;break;case"http":text=lang.errorHttp;break;case"not_allow_type":text=lang.errorFileType;break;default:text=lang.errorUploadRetry}s.text(text).show()};"invalid"===t.getStatus()?l(t.statusText):(n.text(lang.uploadPreview),-1=="|png|jpg|jpeg|bmp|gif|".indexOf("|"+t.ext.toLowerCase()+"|")?n.empty().addClass("notimage").append('<i class="file-preview file-type-'+t.ext.toLowerCase()+'"></i><span class="file-title">'+t.name+"</span>"):browser.ie&&browser.version<=7?n.text(lang.uploadNoPreview):e.makeThumb(t,function(e,t){if(e||!t||/^data:/.test(t)&&browser.ie&&browser.version<=7)n.text(lang.uploadNoPreview);else{var a=r('<img src="'+t+'">');n.empty().append(a),a.on("error",function(){n.text(lang.uploadNoPreview)})}},h,w),y[t.id]=[t.size,0],t.rotation=0,t.ext&&-1!=k.indexOf(t.ext.toLowerCase())||(l("not_allow_type"),e.removeFile(t))),t.on("statuschange",function(e,r){"progress"===r?o.hide().width(0):"queued"===r&&(a.off("mouseenter mouseleave"),i.remove()),"error"===e||"invalid"===e?(l(t.statusText),y[t.id][1]=1):"interrupt"===e?l("interrupt"):"queued"===e?y[t.id][1]=0:"progress"===e&&(s.hide(),o.css("display","block")),a.removeClass("state-"+r).addClass("state-"+e)}),a.on("mouseenter",function(){i.stop().animate({height:30})}),a.on("mouseleave",function(){i.stop().animate({height:0})}),i.on("click","span",function(){var a;switch(r(this).index()){case 0:return void e.removeFile(t);case 1:t.rotation+=90;break;case 2:t.rotation-=90}$?(a="rotate("+t.rotation+"deg)",n.css({"-webkit-transform":a,"-mos-transform":a,"-o-transform":a,transform:a})):n.css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation="+~~(t.rotation/90%4+4)%4+")")}),a.insertBefore(c)}function S(){var e,t=0,a=0,i=f.children();r.each(y,function(e,i){a+=i[0],t+=i[0]*i[1]}),e=a?t/a:0,i.eq(0).text(Math.round(100*e)+"%"),i.eq(1).css("width",Math.round(100*e)+"%"),U()}function N(t,a){if(t!=b){var i=e.getStats();switch(u.removeClass("state-"+b),u.addClass("state-"+t),t){case"pedding":s.addClass("element-invisible"),l.addClass("element-invisible"),p.removeClass("element-invisible"),f.hide(),d.hide(),e.refresh();break;case"ready":p.addClass("element-invisible"),s.removeClass("element-invisible"),l.removeClass("element-invisible"),f.hide(),d.show(),u.text(lang.uploadStart),e.refresh();break;case"uploading":f.show(),d.hide(),u.text(lang.uploadPause);break;case"paused":f.show(),d.hide(),u.text(lang.uploadContinue);break;case"confirm":if(f.show(),d.hide(),u.text(lang.uploadStart),(i=e.getStats()).successNum&&!i.uploadFailNum)return void N("finish");break;case"finish":f.hide(),d.show(),i.uploadFailNum?u.text(lang.uploadRetry):u.text(lang.uploadStart)}b=t,U()}o.getQueueCount()?u.removeClass("disabled"):u.addClass("disabled")}function U(){var t,a="";"ready"===b?a=lang.updateStatusReady.replace("_",m).replace("_KB",WebUploader.formatSize(v)):"confirm"===b?(t=e.getStats()).uploadFailNum&&(a=lang.updateStatusConfirm.replace("_",t.successNum).replace("_",t.successNum)):(t=e.getStats(),a=lang.updateStatusFinish.replace("_",m).replace("_KB",WebUploader.formatSize(v)).replace("_",t.successNum),t.uploadFailNum&&(a+=lang.updateStatusError.replace("_",t.uploadFailNum))),d.html(a)}WebUploader.Uploader.support()?editor.getOpt("videoActionName")?((e=o.uploader=WebUploader.create({pick:{id:"#filePickerReady",label:lang.uploadSelectFile},swf:"../../third-party/webuploader/Uploader.swf",server:C,fileVal:editor.getOpt("videoFieldName"),duplicate:!0,fileSingleSizeLimit:x,compress:!1})).addButton({id:"#filePickerBlock"}),e.addButton({id:"#filePickerBtn",label:lang.uploadAddFile}),N("pedding"),e.on("fileQueued",function(e){m++,v+=e.size,1===m&&(p.addClass("element-invisible"),l.show()),_(e)}),e.on("fileDequeued",function(e){m--,v-=e.size,function(e){var t=r("#"+e.id);delete y[e.id],S(),t.off().find(".file-panel").off().end().remove()}(e),S()}),e.on("filesQueued",function(t){e.isInProgress()||"pedding"!=b&&"finish"!=b&&"confirm"!=b&&"ready"!=b||N("ready"),S()}),e.on("all",function(t,a){switch(t){case"uploadFinished":N("confirm");break;case"startUpload":var i=utils.serializeParam(editor.queryCommandValue("serverparam"))||"",o=utils.formatUrl(C+(-1==C.indexOf("?")?"?":"&")+"encode=utf-8&"+i);e.option("server",o),N("uploading");break;case"stopUpload":N("paused")}}),e.on("uploadBeforeSend",function(e,t,a){a.X_Requested_With="XMLHttpRequest"}),e.on("uploadProgress",function(e,t){r("#"+e.id).find(".progress span").css("width",100*t+"%"),y[e.id][1]=t,S()}),e.on("uploadSuccess",function(e,a){var i=r("#"+e.id);try{var o=a._raw||a,n=utils.str2json(o);"SUCCESS"==n.state?(t.push({url:n.url,type:n.type,original:n.original}),i.append('<span class="success"></span>')):i.find(".error").text(n.state).show()}catch(e){i.find(".error").text(lang.errorServerUpload).show()}}),e.on("uploadError",function(e,t){}),e.on("error",function(e,t){"Q_TYPE_DENIED"!=e&&"F_EXCEED_SIZE"!=e||_(t)}),e.on("uploadComplete",function(e,t){}),u.on("click",function(){if(r(this).hasClass("disabled"))return!1;"ready"===b?e.upload():"paused"===b?e.upload():"uploading"===b&&e.stop()}),u.addClass("state-"+b),S()):r("#filePickerReady").after(r("<div>").html(lang.errorLoadConfig)).hide():r("#filePickerReady").after(r("<div>").html(lang.errorNotSupport)).hide()},getQueueCount:function(){var e,t,a,i=0,o=this.uploader.getFiles();for(t=0;e=o[t++];)"queued"!=(a=e.getStatus())&&"uploading"!=a&&"progress"!=a||i++;return i},refresh:function(){this.uploader.refresh()}}}();