var SWFUpload,swfobject;null==SWFUpload&&(SWFUpload=function(t){this.initSWFUpload(t)}),SWFUpload.prototype.initSWFUpload=function(t){try{this.customSettings={},this.settings={},this.eventQueue=[],this.movieName="SWFUpload_"+SWFUpload.movieCount++,this.movieElement=null,SWFUpload.instances[this.movieName]=this,this.initSettings(t),this.loadSupport(),this.swfuploadPreload()&&this.loadFlash(),this.displayDebugInfo()}catch(t){throw delete SWFUpload.instances[this.movieName],t}},SWFUpload.instances={},SWFUpload.movieCount=0,SWFUpload.version="2.5.0 2010-01-15 Beta 2",SWFUpload.QUEUE_ERROR={QUEUE_LIMIT_EXCEEDED:-100,FILE_EXCEEDS_SIZE_LIMIT:-110,ZERO_BYTE_FILE:-120,INVALID_FILETYPE:-130},SWFUpload.UPLOAD_ERROR={HTTP_ERROR:-200,MISSING_UPLOAD_URL:-210,IO_ERROR:-220,SECURITY_ERROR:-230,UPLOAD_LIMIT_EXCEEDED:-240,UPLOAD_FAILED:-250,SPECIFIED_FILE_ID_NOT_FOUND:-260,FILE_VALIDATION_FAILED:-270,FILE_CANCELLED:-280,UPLOAD_STOPPED:-290,RESIZE:-300},SWFUpload.FILE_STATUS={QUEUED:-1,IN_PROGRESS:-2,ERROR:-3,COMPLETE:-4,CANCELLED:-5},SWFUpload.UPLOAD_TYPE={NORMAL:-1,RESIZED:-2},SWFUpload.BUTTON_ACTION={SELECT_FILE:-100,SELECT_FILES:-110,START_UPLOAD:-120,JAVASCRIPT:-130,NONE:-130},SWFUpload.CURSOR={ARROW:-1,HAND:-2},SWFUpload.WINDOW_MODE={WINDOW:"window",TRANSPARENT:"transparent",OPAQUE:"opaque"},SWFUpload.RESIZE_ENCODING={JPEG:-1,PNG:-2},SWFUpload.completeURL=function(t){try{var e;return"string"!=typeof t||t.match(/^https?:\/\//i)||t.match(/^\//)||""===t?t:((e=window.location.pathname.lastIndexOf("/"))<=0?"/":window.location.pathname.substr(0,e)+"/")+t}catch(e){return t}},SWFUpload.onload=function(){},SWFUpload.prototype.initSettings=function(t){this.ensureDefault=function(e,n){var s=t[e];this.settings[e]=null!=s?s:n},this.ensureDefault("upload_url",""),this.ensureDefault("preserve_relative_urls",!1),this.ensureDefault("file_post_name","Filedata"),this.ensureDefault("post_params",{}),this.ensureDefault("use_query_string",!1),this.ensureDefault("requeue_on_error",!1),this.ensureDefault("http_success",[]),this.ensureDefault("assume_success_timeout",0),this.ensureDefault("file_types","*.*"),this.ensureDefault("file_types_description","All Files"),this.ensureDefault("file_size_limit",0),this.ensureDefault("file_upload_limit",0),this.ensureDefault("file_queue_limit",0),this.ensureDefault("flash_url","swfupload.swf"),this.ensureDefault("flash9_url","swfupload_fp9.swf"),this.ensureDefault("prevent_swf_caching",!0),this.ensureDefault("button_image_url",""),this.ensureDefault("button_width",1),this.ensureDefault("button_height",1),this.ensureDefault("button_text",""),this.ensureDefault("button_text_style","color: #000000; font-size: 16pt;"),this.ensureDefault("button_text_top_padding",0),this.ensureDefault("button_text_left_padding",0),this.ensureDefault("button_action",SWFUpload.BUTTON_ACTION.SELECT_FILES),this.ensureDefault("button_disabled",!1),this.ensureDefault("button_placeholder_id",""),this.ensureDefault("button_placeholder",null),this.ensureDefault("button_cursor",SWFUpload.CURSOR.ARROW),this.ensureDefault("button_window_mode",SWFUpload.WINDOW_MODE.WINDOW),this.ensureDefault("debug",!1),this.settings.debug_enabled=this.settings.debug,this.settings.return_upload_start_handler=this.returnUploadStart,this.ensureDefault("swfupload_preload_handler",null),this.ensureDefault("swfupload_load_failed_handler",null),this.ensureDefault("swfupload_loaded_handler",null),this.ensureDefault("file_dialog_start_handler",null),this.ensureDefault("file_queued_handler",null),this.ensureDefault("file_queue_error_handler",null),this.ensureDefault("file_dialog_complete_handler",null),this.ensureDefault("upload_resize_start_handler",null),this.ensureDefault("upload_start_handler",null),this.ensureDefault("upload_progress_handler",null),this.ensureDefault("upload_error_handler",null),this.ensureDefault("upload_success_handler",null),this.ensureDefault("upload_complete_handler",null),this.ensureDefault("mouse_click_handler",null),this.ensureDefault("mouse_out_handler",null),this.ensureDefault("mouse_over_handler",null),this.ensureDefault("debug_handler",this.debugMessage),this.ensureDefault("custom_settings",{}),this.customSettings=this.settings.custom_settings,this.settings.prevent_swf_caching&&(this.settings.flash_url=this.settings.flash_url+(this.settings.flash_url.indexOf("?")<0?"?":"&")+"preventswfcaching="+(new Date).getTime(),this.settings.flash9_url=this.settings.flash9_url+(this.settings.flash9_url.indexOf("?")<0?"?":"&")+"preventswfcaching="+(new Date).getTime()),this.settings.preserve_relative_urls||(this.settings.upload_url=SWFUpload.completeURL(this.settings.upload_url),this.settings.button_image_url=SWFUpload.completeURL(this.settings.button_image_url)),delete this.ensureDefault},SWFUpload.prototype.loadSupport=function(){this.support={loading:swfobject.hasFlashPlayerVersion("9.0.28"),imageResize:swfobject.hasFlashPlayerVersion("10.0.0")}},SWFUpload.prototype.loadFlash=function(){var t,e,n,s,i;if(this.support.loading){if(null!==document.getElementById(this.movieName))return this.support.loading=!1,void this.queueEvent("swfupload_load_failed_handler",["Element ID already in use"]);if(null==(t=document.getElementById(this.settings.button_placeholder_id)||this.settings.button_placeholder))return this.support.loading=!1,void this.queueEvent("swfupload_load_failed_handler",["button place holder not found"]);n="block"!==(t.currentStyle&&t.currentStyle.display||window.getComputedStyle&&document.defaultView.getComputedStyle(t,null).getPropertyValue("display"))?"span":"div",e=document.createElement(n),s=this.getFlashHTML();try{e.innerHTML=s}catch(t){return this.support.loading=!1,void this.queueEvent("swfupload_load_failed_handler",["Exception loading Flash HTML into placeholder"])}if(!(i=e.getElementsByTagName("object"))||i.length>1||0===i.length)return this.support.loading=!1,void this.queueEvent("swfupload_load_failed_handler",["Unable to find movie after adding to DOM"]);1===i.length&&(this.movieElement=i[0]),t.parentNode.replaceChild(e.firstChild,t),null==window[this.movieName]&&(window[this.movieName]=this.getMovieElement())}else this.queueEvent("swfupload_load_failed_handler",["Flash Player doesn't support SWFUpload"])},SWFUpload.prototype.getFlashHTML=function(t){return['<object id="',this.movieName,'" type="application/x-shockwave-flash" data="',this.support.imageResize?this.settings.flash_url:this.settings.flash9_url,'" width="',this.settings.button_width,'" height="',this.settings.button_height,'" class="swfupload">','<param name="wmode" value="',this.settings.button_window_mode,'" />','<param name="movie" value="',this.support.imageResize?this.settings.flash_url:this.settings.flash9_url,'" />','<param name="quality" value="high" />','<param name="allowScriptAccess" value="always" />','<param name="flashvars" value="'+this.getFlashVars()+'" />',"</object>"].join("")},SWFUpload.prototype.getFlashVars=function(){var t,e;return e=this.buildParamString(),t=this.settings.http_success.join(","),["movieName=",encodeURIComponent(this.movieName),"&amp;uploadURL=",encodeURIComponent(this.settings.upload_url),"&amp;useQueryString=",encodeURIComponent(this.settings.use_query_string),"&amp;requeueOnError=",encodeURIComponent(this.settings.requeue_on_error),"&amp;httpSuccess=",encodeURIComponent(t),"&amp;assumeSuccessTimeout=",encodeURIComponent(this.settings.assume_success_timeout),"&amp;params=",encodeURIComponent(e),"&amp;filePostName=",encodeURIComponent(this.settings.file_post_name),"&amp;fileTypes=",encodeURIComponent(this.settings.file_types),"&amp;fileTypesDescription=",encodeURIComponent(this.settings.file_types_description),"&amp;fileSizeLimit=",encodeURIComponent(this.settings.file_size_limit),"&amp;fileUploadLimit=",encodeURIComponent(this.settings.file_upload_limit),"&amp;fileQueueLimit=",encodeURIComponent(this.settings.file_queue_limit),"&amp;debugEnabled=",encodeURIComponent(this.settings.debug_enabled),"&amp;buttonImageURL=",encodeURIComponent(this.settings.button_image_url),"&amp;buttonWidth=",encodeURIComponent(this.settings.button_width),"&amp;buttonHeight=",encodeURIComponent(this.settings.button_height),"&amp;buttonText=",encodeURIComponent(this.settings.button_text),"&amp;buttonTextTopPadding=",encodeURIComponent(this.settings.button_text_top_padding),"&amp;buttonTextLeftPadding=",encodeURIComponent(this.settings.button_text_left_padding),"&amp;buttonTextStyle=",encodeURIComponent(this.settings.button_text_style),"&amp;buttonAction=",encodeURIComponent(this.settings.button_action),"&amp;buttonDisabled=",encodeURIComponent(this.settings.button_disabled),"&amp;buttonCursor=",encodeURIComponent(this.settings.button_cursor)].join("")},SWFUpload.prototype.getMovieElement=function(){if(null==this.movieElement&&(this.movieElement=document.getElementById(this.movieName)),null===this.movieElement)throw"Could not find Flash element";return this.movieElement},SWFUpload.prototype.buildParamString=function(){var t,e,n=[];if("object"==typeof(e=this.settings.post_params))for(t in e)e.hasOwnProperty(t)&&n.push(encodeURIComponent(t.toString())+"="+encodeURIComponent(e[t].toString()));return n.join("&amp;")},SWFUpload.prototype.destroy=function(){var t;try{if(this.cancelUpload(null,!1),t=this.cleanUp())try{t.parentNode.removeChild(t)}catch(t){}return window[this.movieName]=null,SWFUpload.instances[this.movieName]=null,delete SWFUpload.instances[this.movieName],this.movieElement=null,this.settings=null,this.customSettings=null,this.eventQueue=null,this.movieName=null,!0}catch(t){return!1}},SWFUpload.prototype.displayDebugInfo=function(){this.debug(["---SWFUpload Instance Info---\n","Version: ",SWFUpload.version,"\n","Movie Name: ",this.movieName,"\n","Settings:\n","\t","upload_url:               ",this.settings.upload_url,"\n","\t","flash_url:                ",this.settings.flash_url,"\n","\t","flash9_url:                ",this.settings.flash9_url,"\n","\t","use_query_string:         ",this.settings.use_query_string.toString(),"\n","\t","requeue_on_error:         ",this.settings.requeue_on_error.toString(),"\n","\t","http_success:             ",this.settings.http_success.join(", "),"\n","\t","assume_success_timeout:   ",this.settings.assume_success_timeout,"\n","\t","file_post_name:           ",this.settings.file_post_name,"\n","\t","post_params:              ",this.settings.post_params.toString(),"\n","\t","file_types:               ",this.settings.file_types,"\n","\t","file_types_description:   ",this.settings.file_types_description,"\n","\t","file_size_limit:          ",this.settings.file_size_limit,"\n","\t","file_upload_limit:        ",this.settings.file_upload_limit,"\n","\t","file_queue_limit:         ",this.settings.file_queue_limit,"\n","\t","debug:                    ",this.settings.debug.toString(),"\n","\t","prevent_swf_caching:      ",this.settings.prevent_swf_caching.toString(),"\n","\t","button_placeholder_id:    ",this.settings.button_placeholder_id.toString(),"\n","\t","button_placeholder:       ",this.settings.button_placeholder?"Set":"Not Set","\n","\t","button_image_url:         ",this.settings.button_image_url.toString(),"\n","\t","button_width:             ",this.settings.button_width.toString(),"\n","\t","button_height:            ",this.settings.button_height.toString(),"\n","\t","button_text:              ",this.settings.button_text.toString(),"\n","\t","button_text_style:        ",this.settings.button_text_style.toString(),"\n","\t","button_text_top_padding:  ",this.settings.button_text_top_padding.toString(),"\n","\t","button_text_left_padding: ",this.settings.button_text_left_padding.toString(),"\n","\t","button_action:            ",this.settings.button_action.toString(),"\n","\t","button_cursor:            ",this.settings.button_cursor.toString(),"\n","\t","button_disabled:          ",this.settings.button_disabled.toString(),"\n","\t","custom_settings:          ",this.settings.custom_settings.toString(),"\n","Event Handlers:\n","\t","swfupload_preload_handler assigned:  ",("function"==typeof this.settings.swfupload_preload_handler).toString(),"\n","\t","swfupload_load_failed_handler assigned:  ",("function"==typeof this.settings.swfupload_load_failed_handler).toString(),"\n","\t","swfupload_loaded_handler assigned:  ",("function"==typeof this.settings.swfupload_loaded_handler).toString(),"\n","\t","mouse_click_handler assigned:       ",("function"==typeof this.settings.mouse_click_handler).toString(),"\n","\t","mouse_over_handler assigned:        ",("function"==typeof this.settings.mouse_over_handler).toString(),"\n","\t","mouse_out_handler assigned:         ",("function"==typeof this.settings.mouse_out_handler).toString(),"\n","\t","file_dialog_start_handler assigned: ",("function"==typeof this.settings.file_dialog_start_handler).toString(),"\n","\t","file_queued_handler assigned:       ",("function"==typeof this.settings.file_queued_handler).toString(),"\n","\t","file_queue_error_handler assigned:  ",("function"==typeof this.settings.file_queue_error_handler).toString(),"\n","\t","upload_resize_start_handler assigned:      ",("function"==typeof this.settings.upload_resize_start_handler).toString(),"\n","\t","upload_start_handler assigned:      ",("function"==typeof this.settings.upload_start_handler).toString(),"\n","\t","upload_progress_handler assigned:   ",("function"==typeof this.settings.upload_progress_handler).toString(),"\n","\t","upload_error_handler assigned:      ",("function"==typeof this.settings.upload_error_handler).toString(),"\n","\t","upload_success_handler assigned:    ",("function"==typeof this.settings.upload_success_handler).toString(),"\n","\t","upload_complete_handler assigned:   ",("function"==typeof this.settings.upload_complete_handler).toString(),"\n","\t","debug_handler assigned:             ",("function"==typeof this.settings.debug_handler).toString(),"\n","Support:\n","\t","Load:                     ",this.support.loading?"Yes":"No","\n","\t","Image Resize:             ",this.support.imageResize?"Yes":"No","\n"].join(""))},SWFUpload.prototype.addSetting=function(t,e,n){return this.settings[t]=null==e?n:e},SWFUpload.prototype.getSetting=function(t){return null!=this.settings[t]?this.settings[t]:""},SWFUpload.prototype.callFlash=function(functionName,argumentArray){var movieElement,returnValue,returnString;argumentArray=argumentArray||[],movieElement=this.getMovieElement();try{null!=movieElement?(returnString=movieElement.CallFunction('<invoke name="'+functionName+'" returntype="javascript">'+__flash__argumentsToXML(argumentArray,0)+"</invoke>"),returnValue=eval(returnString)):this.debug("Can't call flash because the movie wasn't found.")}catch(t){this.debug("Exception calling flash function '"+functionName+"': "+t.message)}return null!=returnValue&&"object"==typeof returnValue.post&&(returnValue=this.unescapeFilePostParams(returnValue)),returnValue},SWFUpload.prototype.selectFile=function(){this.callFlash("SelectFile")},SWFUpload.prototype.selectFiles=function(){this.callFlash("SelectFiles")},SWFUpload.prototype.startUpload=function(t){this.callFlash("StartUpload",[t])},SWFUpload.prototype.startResizedUpload=function(t,e,n,s,i,o){this.callFlash("StartUpload",[t,{width:e,height:n,encoding:s,quality:i,allowEnlarging:o}])},SWFUpload.prototype.cancelUpload=function(t,e){!1!==e&&(e=!0),this.callFlash("CancelUpload",[t,e])},SWFUpload.prototype.stopUpload=function(){this.callFlash("StopUpload")},SWFUpload.prototype.requeueUpload=function(t){return this.callFlash("RequeueUpload",[t])},SWFUpload.prototype.getStats=function(){return this.callFlash("GetStats")},SWFUpload.prototype.setStats=function(t){this.callFlash("SetStats",[t])},SWFUpload.prototype.getFile=function(t){return"number"==typeof t?this.callFlash("GetFileByIndex",[t]):this.callFlash("GetFile",[t])},SWFUpload.prototype.getQueueFile=function(t){return"number"==typeof t?this.callFlash("GetFileByQueueIndex",[t]):this.callFlash("GetFile",[t])},SWFUpload.prototype.addFileParam=function(t,e,n){return this.callFlash("AddFileParam",[t,e,n])},SWFUpload.prototype.removeFileParam=function(t,e){this.callFlash("RemoveFileParam",[t,e])},SWFUpload.prototype.setUploadURL=function(t){this.settings.upload_url=t.toString(),this.callFlash("SetUploadURL",[t])},SWFUpload.prototype.setPostParams=function(t){this.settings.post_params=t,this.callFlash("SetPostParams",[t])},SWFUpload.prototype.addPostParam=function(t,e){this.settings.post_params[t]=e,this.callFlash("SetPostParams",[this.settings.post_params])},SWFUpload.prototype.removePostParam=function(t){delete this.settings.post_params[t],this.callFlash("SetPostParams",[this.settings.post_params])},SWFUpload.prototype.setFileTypes=function(t,e){this.settings.file_types=t,this.settings.file_types_description=e,this.callFlash("SetFileTypes",[t,e])},SWFUpload.prototype.setFileSizeLimit=function(t){this.settings.file_size_limit=t,this.callFlash("SetFileSizeLimit",[t])},SWFUpload.prototype.setFileUploadLimit=function(t){this.settings.file_upload_limit=t,this.callFlash("SetFileUploadLimit",[t])},SWFUpload.prototype.setFileQueueLimit=function(t){this.settings.file_queue_limit=t,this.callFlash("SetFileQueueLimit",[t])},SWFUpload.prototype.setFilePostName=function(t){this.settings.file_post_name=t,this.callFlash("SetFilePostName",[t])},SWFUpload.prototype.setUseQueryString=function(t){this.settings.use_query_string=t,this.callFlash("SetUseQueryString",[t])},SWFUpload.prototype.setRequeueOnError=function(t){this.settings.requeue_on_error=t,this.callFlash("SetRequeueOnError",[t])},SWFUpload.prototype.setHTTPSuccess=function(t){"string"==typeof t&&(t=t.replace(" ","").split(",")),this.settings.http_success=t,this.callFlash("SetHTTPSuccess",[t])},SWFUpload.prototype.setAssumeSuccessTimeout=function(t){this.settings.assume_success_timeout=t,this.callFlash("SetAssumeSuccessTimeout",[t])},SWFUpload.prototype.setDebugEnabled=function(t){this.settings.debug_enabled=t,this.callFlash("SetDebugEnabled",[t])},SWFUpload.prototype.setButtonImageURL=function(t){null==t&&(t=""),this.settings.button_image_url=t,this.callFlash("SetButtonImageURL",[t])},SWFUpload.prototype.setButtonDimensions=function(t,e){this.settings.button_width=t,this.settings.button_height=e;var n=this.getMovieElement();null!=n&&(n.style.width=t+"px",n.style.height=e+"px"),this.callFlash("SetButtonDimensions",[t,e])},SWFUpload.prototype.setButtonText=function(t){this.settings.button_text=t,this.callFlash("SetButtonText",[t])},SWFUpload.prototype.setButtonTextPadding=function(t,e){this.settings.button_text_top_padding=e,this.settings.button_text_left_padding=t,this.callFlash("SetButtonTextPadding",[t,e])},SWFUpload.prototype.setButtonTextStyle=function(t){this.settings.button_text_style=t,this.callFlash("SetButtonTextStyle",[t])},SWFUpload.prototype.setButtonDisabled=function(t){this.settings.button_disabled=t,this.callFlash("SetButtonDisabled",[t])},SWFUpload.prototype.setButtonAction=function(t){this.settings.button_action=t,this.callFlash("SetButtonAction",[t])},SWFUpload.prototype.setButtonCursor=function(t){this.settings.button_cursor=t,this.callFlash("SetButtonCursor",[t])},SWFUpload.prototype.queueEvent=function(t,e){var n=this;if(null==e?e=[]:e instanceof Array||(e=[e]),"function"==typeof this.settings[t])this.eventQueue.push(function(){this.settings[t].apply(this,e)}),setTimeout(function(){n.executeNextEvent()},0);else if(null!==this.settings[t])throw"Event handler "+t+" is unknown or is not a function"},SWFUpload.prototype.executeNextEvent=function(){var t=this.eventQueue?this.eventQueue.shift():null;"function"==typeof t&&t.apply(this)},SWFUpload.prototype.unescapeFilePostParams=function(t){var e,n,s,i=/[$]([0-9a-f]{4})/i,o={};if(null!=t){for(n in t.post)if(t.post.hasOwnProperty(n)){for(e=n;null!==(s=i.exec(e));)e=e.replace(s[0],String.fromCharCode(parseInt("0x"+s[1],16)));o[e]=t.post[n]}t.post=o}return t},SWFUpload.prototype.swfuploadPreload=function(){var t;if("function"==typeof this.settings.swfupload_preload_handler)t=this.settings.swfupload_preload_handler.call(this);else if(null!=this.settings.swfupload_preload_handler)throw"upload_start_handler must be a function";return void 0===t&&(t=!0),!!t},SWFUpload.prototype.flashReady=function(){this.cleanUp()?this.queueEvent("swfupload_loaded_handler"):this.debug("Flash called back ready but the flash movie can't be found.")},SWFUpload.prototype.cleanUp=function(){var t,e=this.getMovieElement();try{if(e&&"unknown"==typeof e.CallFunction)for(t in this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)"),e)try{"function"==typeof e[t]&&(e[t]=null)}catch(t){}}catch(t){}return window.__flash__removeCallback=function(t,e){try{t&&(t[e]=null)}catch(t){}},e},SWFUpload.prototype.mouseClick=function(){this.queueEvent("mouse_click_handler")},SWFUpload.prototype.mouseOver=function(){this.queueEvent("mouse_over_handler")},SWFUpload.prototype.mouseOut=function(){this.queueEvent("mouse_out_handler")},SWFUpload.prototype.fileDialogStart=function(){this.queueEvent("file_dialog_start_handler")},SWFUpload.prototype.fileQueued=function(t){t=this.unescapeFilePostParams(t),this.queueEvent("file_queued_handler",t)},SWFUpload.prototype.fileQueueError=function(t,e,n){t=this.unescapeFilePostParams(t),this.queueEvent("file_queue_error_handler",[t,e,n])},SWFUpload.prototype.fileDialogComplete=function(t,e,n){this.queueEvent("file_dialog_complete_handler",[t,e,n])},SWFUpload.prototype.uploadResizeStart=function(t,e){t=this.unescapeFilePostParams(t),this.queueEvent("upload_resize_start_handler",[t,e.width,e.height,e.encoding,e.quality])},SWFUpload.prototype.uploadStart=function(t){t=this.unescapeFilePostParams(t),this.queueEvent("return_upload_start_handler",t)},SWFUpload.prototype.returnUploadStart=function(t){var e;if("function"==typeof this.settings.upload_start_handler)t=this.unescapeFilePostParams(t),e=this.settings.upload_start_handler.call(this,t);else if(null!=this.settings.upload_start_handler)throw"upload_start_handler must be a function";void 0===e&&(e=!0),e=!!e,this.callFlash("ReturnUploadStart",[e])},SWFUpload.prototype.uploadProgress=function(t,e,n){t=this.unescapeFilePostParams(t),this.queueEvent("upload_progress_handler",[t,e,n])},SWFUpload.prototype.uploadError=function(t,e,n){t=this.unescapeFilePostParams(t),this.queueEvent("upload_error_handler",[t,e,n])},SWFUpload.prototype.uploadSuccess=function(t,e,n){t=this.unescapeFilePostParams(t),this.queueEvent("upload_success_handler",[t,e,n])},SWFUpload.prototype.uploadComplete=function(t){t=this.unescapeFilePostParams(t),this.queueEvent("upload_complete_handler",t)},SWFUpload.prototype.debug=function(t){this.queueEvent("debug_handler",t)},SWFUpload.prototype.debugMessage=function(t){var e,n,s;if(this.settings.debug)if(n=[],"object"==typeof t&&"string"==typeof t.name&&"string"==typeof t.message){for(s in t)t.hasOwnProperty(s)&&n.push(s+": "+t[s]);e=n.join("\n")||"",n=e.split("\n"),e="EXCEPTION: "+n.join("\nEXCEPTION: "),SWFUpload.Console.writeLine(e)}else SWFUpload.Console.writeLine(t)},SWFUpload.Console={},SWFUpload.Console.writeLine=function(t){var e,n;try{(e=document.getElementById("SWFUpload_Console"))||(n=document.createElement("form"),document.getElementsByTagName("body")[0].appendChild(n),(e=document.createElement("textarea")).id="SWFUpload_Console",e.style.fontFamily="monospace",e.setAttribute("wrap","off"),e.wrap="off",e.style.overflow="auto",e.style.width="700px",e.style.height="350px",e.style.margin="5px",n.appendChild(e)),e.value+=t+"\n",e.scrollTop=e.scrollHeight-e.clientHeight}catch(t){alert("Exception: "+t.name+" Message: "+t.message)}},swfobject=function(){var t,e,n,s,i,o,a="undefined",l="object",r="Shockwave Flash",u="application/x-shockwave-flash",p="SWFObjectExprInst",d="onreadystatechange",h=window,c=document,f=navigator,_=!1,g=[function(){_?function(){var t=c.getElementsByTagName("body")[0],e=x(l);e.setAttribute("type",u);var n=t.appendChild(e);if(n){var s=0;!function(){if(typeof n.GetVariable!=a){var i=n.GetVariable("$version");i&&(i=i.split(" ")[1].split(","),U.pv=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)])}else if(s<10)return s++,void setTimeout(arguments.callee,10);t.removeChild(e),n=null,I()}()}else I()}():I()}],m=[],y=[],S=[],v=!1,F=!1,b=!0,U=function(){var t=typeof c.getElementById!=a&&typeof c.getElementsByTagName!=a&&typeof c.createElement!=a,e=f.userAgent.toLowerCase(),n=f.platform.toLowerCase(),s=/win/.test(n||e),i=/mac/.test(n||e),o=!!/webkit/.test(e)&&parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")),p=!1,d=[0,0,0],g=null;if(typeof f.plugins!=a&&typeof f.plugins[r]==l)!(g=f.plugins[r].description)||typeof f.mimeTypes!=a&&f.mimeTypes[u]&&!f.mimeTypes[u].enabledPlugin||(_=!0,p=!1,g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),d[0]=parseInt(g.replace(/^(.*)\..*$/,"$1"),10),d[1]=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10),d[2]=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof h.ActiveXObject!=a)try{var m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");m&&(g=m.GetVariable("$version"))&&(p=!0,g=g.split(" ")[1].split(","),d=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)])}catch(t){}return{w3:t,pv:d,wk:o,ie:p,win:s,mac:i}}();U.w3&&((typeof c.readyState!=a&&"complete"==c.readyState||typeof c.readyState==a&&(c.getElementsByTagName("body")[0]||c.body))&&E(),v||(typeof c.addEventListener!=a&&c.addEventListener("DOMContentLoaded",E,!1),U.ie&&U.win&&(c.attachEvent(d,function(){"complete"==c.readyState&&(c.detachEvent(d,arguments.callee),E())}),h==top&&function(){if(!v){try{c.documentElement.doScroll("left")}catch(t){return void setTimeout(arguments.callee,0)}E()}}()),U.wk&&function(){v||(/loaded|complete/.test(c.readyState)?E():setTimeout(arguments.callee,0))}(),W(E)));function E(){if(!v){try{var t=c.getElementsByTagName("body")[0].appendChild(x("span"));t.parentNode.removeChild(t)}catch(t){return}v=!0;for(var e=g.length,n=0;n<e;n++)g[n]()}}function w(t){v?t():g[g.length]=t}function W(t){if(typeof h.addEventListener!=a)h.addEventListener("load",t,!1);else if(typeof c.addEventListener!=a)c.addEventListener("load",t,!1);else if(typeof h.attachEvent!=a)!function(t,e,n){t.attachEvent(e,n),S[S.length]=[t,e,n]}(h,"onload",t);else if("function"==typeof h.onload){var e=h.onload;h.onload=function(){e(),t()}}else h.onload=t}function I(){var t=m.length;if(t>0)for(var e=0;e<t;e++){var n=m[e].id,s=m[e].callbackFn,i={success:!1,id:n};if(U.pv[0]>0){var o=A(n);if(o)if(!q(m[e].swfVersion)||U.wk&&U.wk<312)if(m[e].expressInstall&&D()){var l={};l.data=m[e].expressInstall,l.width=o.getAttribute("width")||"0",l.height=o.getAttribute("height")||"0",o.getAttribute("class")&&(l.styleclass=o.getAttribute("class")),o.getAttribute("align")&&(l.align=o.getAttribute("align"));for(var r={},u=o.getElementsByTagName("param"),p=u.length,d=0;d<p;d++)"movie"!=u[d].getAttribute("name").toLowerCase()&&(r[u[d].getAttribute("name")]=u[d].getAttribute("value"));R(l,r,n,s)}else T(o),s&&s(i);else j(n,!0),s&&(i.success=!0,i.ref=C(n),s(i))}else if(j(n,!0),s){var h=C(n);h&&typeof h.SetVariable!=a&&(i.success=!0,i.ref=h),s(i)}}}function C(t){var e=null,n=A(t);if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=a)e=n;else{var s=n.getElementsByTagName(l)[0];s&&(e=s)}return e}function D(){return!F&&q("6.0.65")&&(U.win||U.mac)&&!(U.wk&&U.wk<312)}function R(i,o,l,r){F=!0,n=r||null,s={success:!1,id:l};var u=A(l);if(u){"OBJECT"==u.nodeName?(t=P(u),e=null):(t=u,e=l),i.id=p,(typeof i.width==a||!/%$/.test(i.width)&&parseInt(i.width,10)<310)&&(i.width="310"),(typeof i.height==a||!/%$/.test(i.height)&&parseInt(i.height,10)<137)&&(i.height="137"),c.title=c.title.slice(0,47)+" - Flash Player Installation";var d=U.ie&&U.win?"ActiveX":"PlugIn",f="MMredirectURL="+h.location.toString().replace(/&/g,"%26")+"&MMplayerType="+d+"&MMdoctitle="+c.title;if(typeof o.flashvars!=a?o.flashvars+="&"+f:o.flashvars=f,U.ie&&U.win&&4!=u.readyState){var _=x("div");l+="SWFObjectNew",_.setAttribute("id",l),u.parentNode.insertBefore(_,u),u.style.display="none",function(){4==u.readyState?u.parentNode.removeChild(u):setTimeout(arguments.callee,10)}()}N(i,o,l)}}function T(t){if(U.ie&&U.win&&4!=t.readyState){var e=x("div");t.parentNode.insertBefore(e,t),e.parentNode.replaceChild(P(t),e),t.style.display="none",function(){4==t.readyState?t.parentNode.removeChild(t):setTimeout(arguments.callee,10)}()}else t.parentNode.replaceChild(P(t),t)}function P(t){var e=x("div");if(U.win&&U.ie)e.innerHTML=t.innerHTML;else{var n=t.getElementsByTagName(l)[0];if(n){var s=n.childNodes;if(s)for(var i=s.length,o=0;o<i;o++)1==s[o].nodeType&&"PARAM"==s[o].nodeName||8==s[o].nodeType||e.appendChild(s[o].cloneNode(!0))}}return e}function N(t,e,n){var s,i=A(n);if(U.wk&&U.wk<312)return s;if(i)if(typeof t.id==a&&(t.id=n),U.ie&&U.win){var o="";for(var r in t)t[r]!=Object.prototype[r]&&("data"==r.toLowerCase()?e.movie=t[r]:"styleclass"==r.toLowerCase()?o+=' class="'+t[r]+'"':"classid"!=r.toLowerCase()&&(o+=" "+r+'="'+t[r]+'"'));var p="";for(var d in e)e[d]!=Object.prototype[d]&&(p+='<param name="'+d+'" value="'+e[d]+'" />');i.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+o+">"+p+"</object>",y[y.length]=t.id,s=A(t.id)}else{var h=x(l);for(var c in h.setAttribute("type",u),t)t[c]!=Object.prototype[c]&&("styleclass"==c.toLowerCase()?h.setAttribute("class",t[c]):"classid"!=c.toLowerCase()&&h.setAttribute(c,t[c]));for(var f in e)e[f]!=Object.prototype[f]&&"movie"!=f.toLowerCase()&&L(h,f,e[f]);i.parentNode.replaceChild(h,i),s=h}return s}function L(t,e,n){var s=x("param");s.setAttribute("name",e),s.setAttribute("value",n),t.appendChild(s)}function O(t){var e=A(t);e&&"OBJECT"==e.nodeName&&(U.ie&&U.win?(e.style.display="none",function(){4==e.readyState?function(t){var e=A(t);if(e){for(var n in e)"function"==typeof e[n]&&(e[n]=null);e.parentNode.removeChild(e)}}(t):setTimeout(arguments.callee,10)}()):e.parentNode.removeChild(e))}function A(t){var e=null;try{e=c.getElementById(t)}catch(t){}return e}function x(t){return c.createElement(t)}function q(t){var e=U.pv,n=t.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,e[0]>n[0]||e[0]==n[0]&&e[1]>n[1]||e[0]==n[0]&&e[1]==n[1]&&e[2]>=n[2]}function B(t,e,n,s){if(!U.ie||!U.mac){var r=c.getElementsByTagName("head")[0];if(r){var u=n&&"string"==typeof n?n:"screen";if(s&&(i=null,o=null),!i||o!=u){var p=x("style");p.setAttribute("type","text/css"),p.setAttribute("media",u),i=r.appendChild(p),U.ie&&U.win&&typeof c.styleSheets!=a&&c.styleSheets.length>0&&(i=c.styleSheets[c.styleSheets.length-1]),o=u}U.ie&&U.win?i&&typeof i.addRule==l&&i.addRule(t,e):i&&typeof c.createTextNode!=a&&i.appendChild(c.createTextNode(t+" {"+e+"}"))}}}function j(t,e){if(b){var n=e?"visible":"hidden";v&&A(t)?A(t).style.visibility=n:B("#"+t,"visibility:"+n)}}function k(t){return null!=/[\\\"<>\.;]/.exec(t)&&typeof encodeURIComponent!=a?encodeURIComponent(t):t}U.ie&&U.win&&window.attachEvent("onunload",function(){for(var t=S.length,e=0;e<t;e++)S[e][0].detachEvent(S[e][1],S[e][2]);for(var n=y.length,s=0;s<n;s++)O(y[s]);for(var i in U)U[i]=null;for(var o in U=null,swfobject)swfobject[o]=null;swfobject=null});return{registerObject:function(t,e,n,s){if(U.w3&&t&&e){var i={};i.id=t,i.swfVersion=e,i.expressInstall=n,i.callbackFn=s,m[m.length]=i,j(t,!1)}else s&&s({success:!1,id:t})},getObjectById:function(t){if(U.w3)return C(t)},embedSWF:function(t,e,n,s,i,o,r,u,p,d){var h={success:!1,id:e};U.w3&&!(U.wk&&U.wk<312)&&t&&e&&n&&s&&i?(j(e,!1),w(function(){n+="",s+="";var c={};if(p&&typeof p===l)for(var f in p)c[f]=p[f];c.data=t,c.width=n,c.height=s;var _={};if(u&&typeof u===l)for(var g in u)_[g]=u[g];if(r&&typeof r===l)for(var m in r)typeof _.flashvars!=a?_.flashvars+="&"+m+"="+r[m]:_.flashvars=m+"="+r[m];if(q(i)){var y=N(c,_,e);c.id==e&&j(e,!0),h.success=!0,h.ref=y}else{if(o&&D())return c.data=o,void R(c,_,e,d);j(e,!0)}d&&d(h)})):d&&d(h)},switchOffAutoHideShow:function(){b=!1},ua:U,getFlashPlayerVersion:function(){return{major:U.pv[0],minor:U.pv[1],release:U.pv[2]}},hasFlashPlayerVersion:q,createSWF:function(t,e,n){return U.w3?N(t,e,n):void 0},showExpressInstall:function(t,e,n,s){U.w3&&D()&&R(t,e,n,s)},removeSWF:function(t){U.w3&&O(t)},createCSS:function(t,e,n,s){U.w3&&B(t,e,n,s)},addDomLoadEvent:w,addLoadEvent:W,getQueryParamValue:function(t){var e=c.location.search||c.location.hash;if(e){if(/\?/.test(e)&&(e=e.split("?")[1]),null==t)return k(e);for(var n=e.split("&"),s=0;s<n.length;s++)if(n[s].substring(0,n[s].indexOf("="))==t)return k(n[s].substring(n[s].indexOf("=")+1))}return""},expressInstallCallback:function(){if(F){var i=A(p);i&&t&&(i.parentNode.replaceChild(t,i),e&&(j(e,!0),U.ie&&U.win&&(t.style.display="block")),n&&n(s)),F=!1}}}}(),swfobject.addDomLoadEvent(function(){"function"==typeof SWFUpload.onload&&SWFUpload.onload.call(window)});