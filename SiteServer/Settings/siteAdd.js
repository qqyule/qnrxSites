var $url="/pages/settings/siteAdd",data={pageLoad:!1,pageAlert:null,pageType:utils.getQueryString("type")||"selectType",siteTemplates:null,isRootExists:null,siteList:null,tableNameList:null,page:parseInt(utils.getQueryString("page")||1),word:utils.getQueryString("word"),tag:utils.getQueryString("tag"),price:utils.getQueryString("price"),order:utils.getQueryString("order"),templateInfoList:null,count:null,pages:null,allTagNames:[],createType:utils.getQueryString("createType"),createTemplateId:utils.getQueryString("createTemplateId"),siteName:"",isRoot:!1,parentId:0,siteDir:"",tableRule:"Choose",tableChoose:"",tableHandWrite:"",isImportContents:!0,isImportTableStyles:!0},methods={getConfig:function(){var t=this;$api.get($url).then(function(e){var a=e.data;t.siteTemplates=a.value,t.isRootExists=a.isRootExists,t.siteList=a.siteList,t.tableNameList=a.tableNameList}).catch(function(e){t.pageAlert=utils.getPageAlert(e)}).then(function(){t.pageLoad=!0,"selectCloud"==t.pageType&&t.load()})},getDisplayUrl:function(t){return"https://www.siteserver.cn/templates/template.html?id="+t},getTemplateUrl:function(t){return"https://templates.siteserver.cn/"+t},getPreviewUrl:function(t){return"https://demo.siteserver.cn/"+t},getPageUrl:function(t){return t<1||t>this.pages||t==this.page?"javascript:;":this.getUrl(t,this.word,this.tag,this.price,this.order)},getTagUrl:function(t){return this.getUrl(this.page,this.word,t,this.price,this.order)},getPriceUrl:function(t){return this.getUrl(this.page,this.word,this.tag,t,this.order)},getOrderUrl:function(t){return this.getUrl(this.page,this.word,this.tag,this.price,t)},getUrl:function(t,e,a,i,r){var s="?type=selectCloud&page="+t;return e&&(s+="&word="+e),a&&(s+="&tag="+a),i&&(s+="&price="+i),r&&(s+="&order="+r),s},priceChanged:function(){this.load()},orderChanged:function(){this.load()},load:function(){var t=this;this.pageLoad&&utils.loading(!0),$apiCloud.get("templates",{params:{page:this.page,word:this.word,tag:this.tag,price:this.price,order:this.order}}).then(function(e){var a=e.data;t.templateInfoList=a.value,t.count=a.count,t.pages=a.pages,t.allTagNames=a.allTagNames}).catch(function(e){t.pageAlert=utils.getPageAlert(e)}).then(function(){utils.loading(!1),this.pageLoad=!0})},getCreateType:function(){return"cloud"==this.createType?'使用在线站点模板创建站点，站点模板：<a href="'+this.getDisplayUrl(this.createTemplateId)+'" target="_blank">'+this.createTemplateId+"</a>":"local"==this.createType?"使用本地站点模板创建站点，站点模板："+this.createTemplateId:"创建空站点（不使用站点模板）"},btnLocalClick:function(){this.pageType="selectLocal",this.createType="local"},btnCloudClick:function(){this.pageType="selectCloud",this.createType="cloud",this.load()},btnCreateClick:function(t,e){this.createType=t,this.createTemplateId=e,this.pageType="create"},btnSubmitClick:function(){var t=this;this.$validator.validate().then(function(e){e&&(utils.loading(!0),$api.post($url,{createType:t.createType,createTemplateId:t.createTemplateId,siteName:t.siteName,isRoot:t.isRoot,parentId:t.parentId,siteDir:t.siteDir,tableRule:t.tableRule,tableChoose:t.tableChoose,tableHandWrite:t.tableHandWrite,isImportContents:t.isImportContents,isImportTableStyles:t.isImportTableStyles}).then(function(t){var e=t.data;location.href=e.value}).catch(function(e){utils.loading(!1),t.pageAlert=utils.getPageAlert(e)}))})}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){this.getConfig()}});