var checkPassword=function(){var r,a=$("#TbAdminPassword").val();return r=checkPasswordLevel(a),$("#passwordLevel").removeClass().addClass(r),!0},checkPasswordLevel=function(r){var a=0;0==r.length?a+=0:r.length<8&&r.length>0?a+=5:r.length>10?a+=25:a+=10;var n=!1,t=!1,l=r.match(/[A-Z]{1}/),e=r.match(/[a-z]{1}/);null==l&&null==e?(a+=0,n=!1):null!=l&&null!=e?(a+=20,t=!0):(a+=10,t=!0);for(var h=!1,c=0,s=0;s<r.length;s++)r.charAt(s)<="9"&&r.charAt(s)>="0"&&(h=!0,c+=1);0==c?(a+=0,h=!1):c>2?(a+=20,h=!0):(a+=10,h=!0);var k=!1,o=0;for(s=0;s<r.length;s++)r.charAt(s)>="0"&&r.charAt(s)<="9"||r.charAt(s)>="A"&&r.charAt(s)<="Z"||r.charAt(s)>="a"&&r.charAt(s)<="z"||(o+=1,k=!0);0==o?(a+=0,k=!1):o>1?(a+=25,k=!0):(a+=10,k=!0),t&&h&&k?a+=5:n&&h&&k?a+=3:n&&h&&(a+=2);return(a>=70?"rank r7":a>=60?"rank r6":a>=50?"rank r5":a>=40?"rank r4":a>=30?"rank r3":a>20?"rank r2":a>10?"rank r1":"rank r0").toString()};