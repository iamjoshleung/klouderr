(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["file"],{"11e9":function(t,e,i){var a=i("52a7"),n=i("4630"),r=i("6821"),o=i("6a99"),s=i("69a8"),c=i("c69a"),l=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?l:function(t,e){if(t=r(t),e=o(e,!0),c)try{return l(t,e)}catch(i){}if(s(t,e))return n(!a.f.call(t,e),t[e])}},"5dbc":function(t,e,i){var a=i("d3f4"),n=i("8b97").set;t.exports=function(t,e,i){var r,o=e.constructor;return o!==i&&"function"==typeof o&&(r=o.prototype)!==i.prototype&&a(r)&&n&&n(t,r),t}},"8b97":function(t,e,i){var a=i("d3f4"),n=i("cb7c"),r=function(t,e){if(n(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,i){return r(t,i),e?t.__proto__=i:a(t,i),t}}({},!1):void 0),check:r}},9093:function(t,e,i){var a=i("ce10"),n=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,n)}},"94df":function(t,e,i){"use strict";const a=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],n=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],r=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],o=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],s=(t,e,i)=>{let a=t;return"string"===typeof e||Array.isArray(e)?a=t.toLocaleString(e,i):!0!==e&&void 0===i||(a=t.toLocaleString(void 0,i)),a};t.exports=(t,e)=>{if(!Number.isFinite(t))throw new TypeError(`Expected a finite number, got ${typeof t}: ${t}`);e=Object.assign({bits:!1,binary:!1},e);const i=e.bits?e.binary?o:r:e.binary?n:a;if(e.signed&&0===t)return" 0 "+i[0];const c=t<0,l=c?"-":e.signed?"+":"";let d;if(c&&(t=-t),void 0!==e.minimumFractionDigits&&(d={minimumFractionDigits:e.minimumFractionDigits}),void 0!==e.maximumFractionDigits&&(d=Object.assign({maximumFractionDigits:e.maximumFractionDigits},d)),t<1){const a=s(t,e.locale,d);return l+a+" "+i[0]}const u=Math.min(Math.floor(e.binary?Math.log(t)/Math.log(1024):Math.log10(t)/3),i.length-1);t/=Math.pow(e.binary?1024:1e3,u),d||(t=t.toPrecision(3));const f=s(Number(t),e.locale,d),p=i[u];return l+f+" "+p}},"9c88":function(t,e,i){"use strict";i.r(e);i("7f7f");var a=function(){var t=this,e=t._self._c;return t.file?e("div",[e("nav",{staticClass:"level is-mobile"},[e("div",{staticClass:"level-item has-text-centered"},[e("div",[e("p",{staticClass:"heading"},[t._v(t._s(t.$t("file.type")))]),e("p",{staticClass:"title is-4"},[t._v(t._s(t.file.extension.toUpperCase()))])])]),e("div",{staticClass:"level-item has-text-centered"},[e("div",[e("p",{staticClass:"heading"},[t._v(t._s(t.$t("file.size")))]),e("p",{staticClass:"title is-4"},[t._v(t._s(t._f("humanBytes")(t.file.size)))])])]),e("div",{staticClass:"level-item has-text-centered"},[e("div",[e("p",{staticClass:"heading"},[t._v(t._s(t.$t("file.downloaded")))]),e("p",{staticClass:"title is-4"},[t._v(t._s(t.file.downloadCount))])])]),e("div",{staticClass:"level-item has-text-centered"},[e("div",[e("p",{staticClass:"heading"},[t._v(t._s(t.$t("file.visited")))]),e("p",{staticClass:"title is-4"},[t._v(t._s(t.file.visitCount))])])])]),e("hr"),e("h1",{staticClass:"title is-5 tracking-wide mt-12 text-center"},[t._v(t._s(t.file.name))]),e("div",{staticClass:"ads mt-4 text-center"},[e("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"9178412838"}})],1),e("div",{staticClass:"text-center mt-14"},[e("a",{staticClass:"button is-primary is-rounded mt-2 mb-2 mr-4 uppercase font-bold",class:{"pointer-events-none":t.downloaded},attrs:{href:"".concat(t.file.url_s3),target:"_blank",disabled:t.downloaded},on:{click:t.onFileDownload}},[t._v(t._s(t.$t("file.downloadFile")))])]),e("div",{staticClass:"ads text-center mt-14"},[e("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}})],1),"en"===t.$i18n.locale?e("div",{staticClass:"mt-20"},[t._m(0)]):t._e()]):t._e()},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-20 mb-20"},[e("h4",{staticClass:"title title--no-sp is-6"},[t._v("Worldwide IaaS Public Cloud Services Market Jumped 37.3% in 2019")]),e("p",[t._v("\n          We all know the overall cloud services and software business is growing at warp speed, but it can be beneficial to enterprise decision-makers if experts break down the categories (SaaS, IaaS, PaaS and others) for more clarity. \n\nIndustry analyst Gartner Inc. reported Aug. 10 that the worldwide infrastructure as a service (IaaS) market grew a whopping 37.3% in 2019 to total $44.5 billion, up from $32.4 billion in 2018. \n\nTo the surprise of few industry observers, Amazon retained the No. 1 position in the IaaS market in 2019, followed by Microsoft, Alibaba, Google and Tencent.\n\nIn 2019, the top five IaaS providers accounted for 80% of the market, up from 77% in 2018. Three-quarters of all IaaS providers had exhibited growth in 2018.\n\nAmazon continued to lead the worldwide IaaS market with an estimated $20 billion of revenue in 2019 and 45% of the total market. Amazon leveraged its No.1 spot in 2018 to build out its capabilities beyond the IaaS layer in the cloud stack and maintain its top position in 2019. \n\n“Cloud underpins the push to digital business, which remains at the top of CIOs’ agendas,” Sid Nag, research vice president at Gartner, said in a media advisory. “It enables technologies such as the edge, AI, machine learning and 5G, among others. At the end of the day, each of these technologies requires a scalable, elastic and high-capacity infrastructure platform like public cloud IaaS, which is why the market witnessed strong growth.” \n\nMicrosoft remained in the No. 2 position in the IaaS market with more than half of its nearly $8 billion in revenue coming from North America. Microsoft’s IaaS offering grew 57.8% in 2019 as the company leveraged its sales reach and ability to co-sell its Azure offerings with other Microsoft products and services in order to drive adoption.\n\nThe dominant IaaS provider in China, Alibaba Cloud, grew 62.4% in 2019 with revenue surpassing $4 billion, up from $2.5 billion in 2018. Alibaba Group will continue to expand its cloud infrastructure business in the coming years and aim to offer cloud-based intelligent solutions to its customers to support their digital transformation process.\n        ")])])}],r=(i("c5f6"),i("bc3a")),o=i.n(r),s=i("94df"),c=i.n(s),l=i("0c12"),d={data:function(){return{file:null,title:"",downloaded:!1}},filters:{humanBytes:function(t){return c()(Number(t))}},mounted:function(){var t=this;o.a.get("/api/files/".concat(this.$route.params.id)).then((function(e){var i=e.data;t.file=i,t.file.visitCount+=1,t.title="".concat(i.name," - ")})).catch((function(e){return console.log(e),500===e.response.status?l["a"].$emit("error","Server Error: Unable to handle the request now. Please try again later."):t.$router.push("/404")}))},methods:{onFileDownload:function(){this.file.downloadCount+=1,this.downloaded=!0,o.a.post("/api//download/".concat(this.file.encodedName))}},metaInfo:function(){return{title:this.title}}},u=d,f=i("0c7c"),p=Object(f["a"])(u,a,n,!1,null,null,null);e["default"]=p.exports},aa77:function(t,e,i){var a=i("5ca1"),n=i("be13"),r=i("79e5"),o=i("fdef"),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),u=function(t,e,i){var n={},s=r((function(){return!!o[t]()||c[t]()!=c})),l=n[t]=s?e(f):o[t];i&&(n[i]=l),a(a.P+a.F*s,"String",n)},f=u.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(d,"")),t};t.exports=u},c5f6:function(t,e,i){"use strict";var a=i("7726"),n=i("69a8"),r=i("2d95"),o=i("5dbc"),s=i("6a99"),c=i("79e5"),l=i("9093").f,d=i("11e9").f,u=i("86cc").f,f=i("aa77").trim,p="Number",h=a[p],b=h,m=h.prototype,v=r(i("2aeb")(m))==p,g="trim"in String.prototype,w=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():f(e,3);var i,a,n,r=e.charCodeAt(0);if(43===r||45===r){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var o,c=e.slice(2),l=0,d=c.length;l<d;l++)if(o=c.charCodeAt(l),o<48||o>n)return NaN;return parseInt(c,a)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof h&&(v?c((function(){m.valueOf.call(i)})):r(i)!=p)?o(new b(w(e)),i,h):w(e)};for(var _,y=i("9e1e")?l(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;y.length>I;I++)n(b,_=y[I])&&!n(h,_)&&u(h,_,d(b,_));h.prototype=m,m.constructor=h,i("2aba")(a,p,h)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=file.e6e54748.js.map