var $api=new apiUtils.Api(apiUrl+"/pages/settings/userGroup"),data={pageLoad:!1,pageAlert:null,pageType:"list",items:null,adminNames:null},methods={getList:function(){var t=this;$api.get(null,function(e,i){!e&&i&&i.value&&(t.items=i.value,t.adminNames=i.adminNames,t.pageLoad=!0)})},delete:function(t){var e=this;pageUtils.loading(!0),$api.delete({id:t},function(t,i){pageUtils.loading(!1),!t&&i&&i.value&&(e.items=i.value)})},submit:function(t){var e=this;pageUtils.loading(!0),$api.post(t,function(i,a){pageUtils.loading(!1),i?e.pageAlert={type:"danger",html:i.message}:(e.pageAlert={type:"success",html:-1===t.id?"用户组添加成功！":"用户组修改成功！"},e.item=null,e.items=a.value,e.pageType="list")})},btnEditClick:function(t){this.pageType="add",this.item=t},btnAddClick:function(){this.pageType="add",this.item={id:-1,groupName:"",adminName:""}},btnDeleteClick:function(t){var e=this;pageUtils.alertDelete({title:"删除用户组",text:"此操作将删除用户组 "+t.groupName+"，确定吗？",callback:function(){e.delete(t.id)}})},btnSubmitClick:function(){var t=this;this.$validator.validate().then(function(e){e&&t.submit(t.item)})},btnCancelClick:function(){this.pageType="list"}};new Vue({el:"#main",data:data,methods:methods,created:function(){this.getList()}});