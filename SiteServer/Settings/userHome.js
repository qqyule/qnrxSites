var $api=new apiUtils.Api(apiUrl+"/pages/settings/userHome"),data={pageLoad:!1,pageAlert:null,pageType:null,config:null,files:[],uploadLogoUrl:null,homeDirectory:null,isHomeClosed:null,homeTitle:null,isHomeLogo:null,homeLogoUrl:null,homeDefaultAvatarUrl:null,userRegistrationAttributes:[],isUserRegistrationGroup:null,isHomeAgreement:null,homeAgreementHtml:null,styles:null},methods={getConfig:function(){var e=this;$api.get(null,function(t,o){!t&&o&&o.value&&(e.config=_.clone(o.value),e.homeDirectory=o.homeDirectory,e.isHomeClosed=o.value.isHomeClosed,e.homeTitle=o.value.homeTitle,e.isHomeLogo=o.value.isHomeLogo,e.homeLogoUrl=o.value.homeLogoUrl,e.homeDefaultAvatarUrl=o.value.homeDefaultAvatarUrl,o.value.userRegistrationAttributes&&(e.userRegistrationAttributes=o.value.userRegistrationAttributes.split(",")),e.isUserRegistrationGroup=o.value.isUserRegistrationGroup,e.isHomeAgreement=o.value.isHomeAgreement,e.homeAgreementHtml=o.value.homeAgreementHtml,e.uploadUrl=apiUrl+"/pages/settings/userHome/upload?adminToken="+o.adminToken,e.styles=o.styles,e.pageType="list",e.pageLoad=!0)})},inputLogo(e,t){Boolean(e)===Boolean(t)&&t.error===e.error||this.$refs.logo.active||(this.$refs.logo.active=!0),e&&t&&e.xhr&&e.success!==t.success&&(this.homeLogoUrl=e.response.value)},inputAvatar(e,t){Boolean(e)===Boolean(t)&&t.error===e.error||this.$refs.avatar.active||(this.$refs.avatar.active=!0),e&&t&&e.xhr&&e.success!==t.success&&(this.homeDefaultAvatarUrl=e.response.value)},getUserRegistrationAttributes:function(){for(var e="用户名, 密码",t=0;t<this.userRegistrationAttributes.length;t++){var o=this.userRegistrationAttributes[t],i=_.find(this.styles,function(e){return e.attributeName===o});i&&(e+=", "+i.displayName)}return e},getUserRegistrationAttribute:function(e){return e},submit:function(e){var t=this;pageUtils.loading(!0),$api.post({isHomeClosed:t.isHomeClosed,homeTitle:t.homeTitle,isHomeLogo:t.isHomeLogo,homeLogoUrl:t.homeLogoUrl,homeDefaultAvatarUrl:t.homeDefaultAvatarUrl,userRegistrationAttributes:t.userRegistrationAttributes.join(","),isUserRegistrationGroup:t.isUserRegistrationGroup,isHomeAgreement:t.isHomeAgreement,homeAgreementHtml:t.homeAgreementHtml},function(e,o){pageUtils.loading(!1),e?t.pageAlert={type:"danger",html:e.message}:(t.pageAlert={type:"success",html:"用户中心设置保存成功！"},t.config=_.clone(o.value),t.pageType="list")})},btnSubmitClick:function(){var e=this;this.$validator.validate().then(function(t){t&&e.submit(e.item)})}};new Vue({el:"#main",data:data,components:{FileUpload:VueUploadComponent},methods:methods,created:function(){this.getConfig()}});