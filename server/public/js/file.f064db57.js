(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["file"],{"11e9":function(e,t,n){var i=n("52a7"),s=n("4630"),a=n("6821"),o=n("6a99"),r=n("69a8"),c=n("c69a"),l=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?l:function(e,t){if(e=a(e),t=o(t,!0),c)try{return l(e,t)}catch(n){}if(r(e,t))return s(!i.f.call(e,t),e[t])}},"52a7":function(e,t){t.f={}.propertyIsEnumerable},"5dbc":function(e,t,n){var i=n("d3f4"),s=n("8b97").set;e.exports=function(e,t,n){var a,o=t.constructor;return o!==n&&"function"==typeof o&&(a=o.prototype)!==n.prototype&&i(a)&&s&&s(e,a),e}},"7f7f":function(e,t,n){var i=n("86cc").f,s=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in s||n("9e1e")&&i(s,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},"8b97":function(e,t,n){var i=n("d3f4"),s=n("cb7c"),a=function(e,t){if(s(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(e,[]),t=!(e instanceof Array)}catch(s){t=!0}return function(e,n){return a(e,n),t?e.__proto__=n:i(e,n),e}}({},!1):void 0),check:a}},9093:function(e,t,n){var i=n("ce10"),s=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},"94df":function(e,t,n){"use strict";const i=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],s=(e,t)=>{let n=e;return"string"===typeof t?n=e.toLocaleString(t):!0===t&&(n=e.toLocaleString()),n};e.exports=((e,t)=>{if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);if(t=Object.assign({},t),t.signed&&0===e)return" 0 B";const n=e<0,a=n?"-":t.signed?"+":"";if(n&&(e=-e),e<1){const n=s(e,t.locale);return a+n+" B"}const o=Math.min(Math.floor(Math.log10(e)/3),i.length-1);e=Number((e/Math.pow(1e3,o)).toPrecision(3));const r=s(e,t.locale),c=i[o];return a+r+" "+c})},"9c88":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.file?n("div",[n("nav",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.type")))]),n("p",{staticClass:"title is-4"},[e._v(e._s(e.file.extension.toUpperCase()))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.size")))]),n("p",{staticClass:"title is-4"},[e._v(e._s(e._f("humanBytes")(e.file.size)))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.downloaded")))]),n("p",{staticClass:"title is-4"},[e._v(e._s(e.file.downloadCount))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.visited")))]),n("p",{staticClass:"title is-4"},[e._v(e._s(e.file.visitCount))])])])]),n("hr"),n("h1",{staticClass:"title is-5 tracking-wide mt-12 text-center"},[e._v(e._s(e.file.name))]),n("div",{staticClass:"ads mt-10 text-center"},[n("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"9178412838"}}),n("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showDownloadButtons,expression:"showDownloadButtons"}],staticClass:"text-center"},[n("a",{staticClass:"button is-primary is-rounded mr-4 uppercase font-bold",class:{"pointer-events-none":e.downloaded},attrs:{href:""+e.file.url_s3,target:"_blank",disabled:e.downloaded},on:{click:e.onFileDownload}},[e._v(e._s(e.$t("file.downloadFile",{num:"1"})))])]),n("div",{staticClass:"ads text-center"},[n("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}})],1),e._m(0)]):e._e()},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-20"},[n("h4",{staticClass:"title title--no-sp is-6"},[e._v("Research: 64% using or considering industry cloud services")]),n("p",[e._v("\n            With more specialized applications and tailored services, industry cloud, which targets vertical industries, has won over tech professionals. In a recent TechRepublic Premium survey, 64% of respondents said they either already use industry cloud services or plan to adopt it in the next 12 months. Of respondents, only 18% have no plans to consider or adopt industry cloud services.\n\nDespite the bells and whistles that industry cloud service vendors promote, respondents consider many additional factors. Not surprisingly, most survey respondents based their decisions on operational cost or security/data protection. Speed and agility was another popular consideration for more than half (54%) of respondents; while 44% said implementation cost was an important selection factor. Other factors ranked as important when choosing an industry cloud service included regulatory/industry compliance, vendor industry experience, and whether a vendor provides a turnkey system for a specific industry.\nAnnual budgets for industry cloud services varied significantly, topping out more than $1 million with some reporting in at less than $10,000.\n\nWith 61% of survey respondents citing easy management/administration, and 54% citing secure data protection as positive outcomes, it's no surprise that so many organizations are embracing this type of cloud service. Other industry cloud service benefits recognized by respondents include simpler cloud migration/adoption, more agile business processes, lower cost, and industry-specific turnkey core systems, not to mention simplified regulatory and industry compliance.\n\nHowever, not all respondents were fond of their industry cloud services. Some (41%) had difficulty integrating industry cloud services with existing business processes, and 37% faced migration and adoption challenges. Further, 31% of respondents cited cost as a negative factor, and 20% cited complex management and administration. A smaller percentage (19%) experienced complex management and administration, outages, poor service, and services not working as expected. Eleven percent stated that their industry cloud services were more difficult to use than expected.\n        ")])])}],a=(n("7f7f"),n("c5f6"),n("cadf"),n("551c"),n("097d"),n("bc3a")),o=n.n(a),r=n("0c12"),c=n("94df"),l=n.n(c),d={data:function(){return{file:null,title:"",downloaded:!1,showDownloadButtons:!1}},filters:{humanBytes:function(e){return l()(Number(e))}},mounted:function(){var e=this;o.a.get("/api/files/".concat(this.$route.params.id)).then(function(t){var n=t.data;e.file=n,e.file.visitCount+=1,e.title="".concat(n.name," - "),setTimeout(function(){e.showDownloadButtons=!0},2e3)}).catch(function(t){return console.log(t),500===t.response.status?r["a"].$emit("error","Server Error: Unable to handle the request now. Please try again later."):e.$router.push("/404")})},methods:{onFileDownload:function(){this.file.downloadCount+=1,this.downloaded=!0,o.a.post("/api//download/".concat(this.file.encodedName))}},metaInfo:function(){return{title:this.title}}},u=d,f=n("2877"),p=Object(f["a"])(u,i,s,!1,null,null,null);t["default"]=p.exports},aa77:function(e,t,n){var i=n("5ca1"),s=n("be13"),a=n("79e5"),o=n("fdef"),r="["+o+"]",c="​",l=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),u=function(e,t,n){var s={},r=a(function(){return!!o[e]()||c[e]()!=c}),l=s[e]=r?t(f):o[e];n&&(s[n]=l),i(i.P+i.F*r,"String",s)},f=u.trim=function(e,t){return e=String(s(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(d,"")),e};e.exports=u},c5f6:function(e,t,n){"use strict";var i=n("7726"),s=n("69a8"),a=n("2d95"),o=n("5dbc"),r=n("6a99"),c=n("79e5"),l=n("9093").f,d=n("11e9").f,u=n("86cc").f,f=n("aa77").trim,p="Number",h=i[p],v=h,m=h.prototype,g=a(n("2aeb")(m))==p,y="trim"in String.prototype,w=function(e){var t=r(e,!1);if("string"==typeof t&&t.length>2){t=y?t.trim():f(t,3);var n,i,s,a=t.charCodeAt(0);if(43===a||45===a){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+t}for(var o,c=t.slice(2),l=0,d=c.length;l<d;l++)if(o=c.charCodeAt(l),o<48||o>s)return NaN;return parseInt(c,i)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(g?c(function(){m.valueOf.call(n)}):a(n)!=p)?o(new v(w(t)),n,h):w(t)};for(var _,b=n("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;b.length>C;C++)s(v,_=b[C])&&!s(h,_)&&u(h,_,d(v,_));h.prototype=m,m.constructor=h,n("2aba")(i,p,h)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=file.f064db57.js.map