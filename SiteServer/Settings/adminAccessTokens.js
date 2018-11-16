var $api=new apiUtils.Api(apiUrl+"/pages/settings/adminAccessTokens"),data={pageLoad:!1,pageAlert:{type:"warning",html:'API密钥可以用于访问 SiteServer REST API <a href="https://docs.siteserver.cn/api/" target="_blank">阅读更多</a>'},pageType:null,items:null,adminNames:null,scopes:null,adminName:null,item:null},methods={getList:function(){var e=this;$api.get(null,function(t,i){!t&&i&&i.value&&(e.items=i.value,e.adminNames=i.adminNames,e.scopes=i.scopes,e.adminName=i.adminName,e.pageLoad=!0)})},getItemScopes:function(e){if(!e.scopes)return"";for(var t=e.scopes.split(","),i=[],s=0;s<this.scopes.length;s++)-1!==t.indexOf(this.scopes[s])&&i.push(this.scopes[s]);return i.join(",")},delete:function(e){var t=this;pageUtils.loading(!0),$api.delete({id:e.id},function(e,i){pageUtils.loading(!1),!e&&i&&i.value&&(t.items=i.value)})},submit:function(e){var t=this;this.item.scopes=this.item.scopeList?this.item.scopeList.join(","):"",pageUtils.loading(!0),$api.post(e,function(i,s){pageUtils.loading(!1),i?t.pageAlert={type:"danger",html:i.message}:(t.pageAlert={type:"success",html:e.id?"API密钥修改成功！":"API密钥添加成功！"},t.item=null,t.items=s.value,t.pageType="list")})},btnAddClick:function(e){this.pageType="add",this.item=e,this.item.adminName=this.item.adminName?this.item.adminName:this.adminName,this.item.scopeList=this.item.scopes?this.item.scopes.split(","):[]},btnSubmitClick:function(){this.submit(this.item)},btnCancelClick:function(){this.pageType="list"},btnViewClick:function(e){pageUtils.openLayer({title:"获取密钥",url:"adminAccessTokensViewLayer.cshtml?id="+e.id,height:410})},btnDeleteClick:function(e){var t=this;pageUtils.alertDelete({title:"删除API密钥",text:"此操作将删除API密钥 "+e.title+"，确定吗？",callback:function(){t.delete(e),this.pageType="list"}})}};new Vue({el:"#main",data:data,methods:methods,created:function(){this.getList()}});