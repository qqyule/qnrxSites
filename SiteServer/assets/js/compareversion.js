function compareversion(e,r,t){var n=e.split("-")[0],l=r.split("-")[0],i=t&&t.lexicographical,h=t&&t.zeroExtend,u=n.split("."),p=l.split(".");function a(e){return(i?/^\d+[A-Za-z]*$/:/^\d+$/).test(e)}if(!u.every(a)||!p.every(a))return NaN;if(h){for(;u.length<p.length;)u.push("0");for(;p.length<u.length;)p.push("0")}i||(u=u.map(Number),p=p.map(Number));for(var f=0;f<u.length;++f){if(p.length==f)return 1;if(u[f]!=p[f])return u[f]>p[f]?1:-1}return u.length!=p.length?-1:0}