(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["file"],{"11e9":function(e,t,n){var a=n("52a7"),i=n("4630"),o=n("6821"),s=n("6a99"),r=n("69a8"),l=n("c69a"),c=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?c:function(e,t){if(e=o(e),t=s(t,!0),l)try{return c(e,t)}catch(n){}if(r(e,t))return i(!a.f.call(e,t),e[t])}},"52a7":function(e,t){t.f={}.propertyIsEnumerable},"5dbc":function(e,t,n){var a=n("d3f4"),i=n("8b97").set;e.exports=function(e,t,n){var o,s=t.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&a(o)&&i&&i(e,o),e}},"7f7f":function(e,t,n){var a=n("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,s="name";s in i||n("9e1e")&&a(i,s,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"8b97":function(e,t,n){var a=n("d3f4"),i=n("cb7c"),o=function(e,t){if(i(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:o}},9093:function(e,t,n){var a=n("ce10"),i=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,i)}},"94df":function(e,t,n){"use strict";const a=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],i=(e,t)=>{let n=e;return"string"===typeof t?n=e.toLocaleString(t):!0===t&&(n=e.toLocaleString()),n};e.exports=((e,t)=>{if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);if(t=Object.assign({},t),t.signed&&0===e)return" 0 B";const n=e<0,o=n?"-":t.signed?"+":"";if(n&&(e=-e),e<1){const n=i(e,t.locale);return o+n+" B"}const s=Math.min(Math.floor(Math.log10(e)/3),a.length-1);e=Number((e/Math.pow(1e3,s)).toPrecision(3));const r=i(e,t.locale),l=a[s];return o+r+" "+l})},"9c88":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.file?n("div",[n("nav",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.type")))]),n("p",{staticClass:"title is-4"},[e._v(e._s(e.file.extension.toUpperCase()))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.size")))]),n("p",{staticClass:"title is-4"},[e._v(e._s(e._f("humanBytes")(e.file.size)))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.downloaded")))]),n("p",{staticClass:"title is-4"},[e._v(e._s(e.file.downloadCount))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.visited")))]),n("p",{staticClass:"title is-4"},[e._v(e._s(e.file.visitCount))])])])]),n("hr"),n("h1",{staticClass:"title is-5 tracking-wide mt-12 text-center"},[e._v(e._s(e.file.name))]),n("div",{staticClass:"ads mt-10 text-center"},[n("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"9178412838"}}),n("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showDownloadButtons,expression:"showDownloadButtons"}],staticClass:"text-center"},[n("a",{staticClass:"button is-primary is-rounded mr-4",class:{"pointer-events-none":e.downloaded},attrs:{href:""+e.file.url,target:"_blank",disabled:e.downloaded},on:{click:e.onFileDownload}},[e._v(e._s(e.$t("file.downloadFile",{num:"1"})))]),n("a",{staticClass:"button is-rounded is-white",class:{"pointer-events-none":e.downloaded},attrs:{href:""+e.file.url_s3,target:"_blank",disabled:e.downloaded},on:{click:e.onFileDownload}},[e._v(e._s(e.$t("file.downloadFile",{num:"2"})))])]),n("div",{staticClass:"ads text-center"},[n("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}})],1),e._m(0)]):e._e()},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-20"},[n("h4",{staticClass:"title title--no-sp is-6"},[e._v("Bringing cloud services to the edge")]),n("p",[e._v("\n      There’s always been a tension, particularly among enterprise IT leaders, around cloud computing that stems from its use of centralized, third-party infrastructure that’s rented out to all comers.\n      Over time, enterprises have come to terms with the security, privacy and control issues of multi-tenant, outsourced operations by applying data encryption, virtual private networks and various layers of monitoring.\n      Where these were feared to be inadequate, organizations have employed a split, hybrid architecture in which they run some workloads on internal cloud-like systems, albeit generally not using the same software stack lacking all the services available of a public cloud.\n      What cloud users haven’t been able to overcome are the physical limitations imposed by centralized infrastructure, particularly the delays imposed by transporting data hundreds or thousands of miles between an application user and the application infrastructure provider.\n      While these seemed minute when people were already accustomed to waiting seconds on database transactions in a Web form, they become significant in an era of 5G wireless connectivity delivering streaming media and interactive multiplayer games. The speed of light quickens for no one, not even Einstein, meaning that data cannot travel 1,000 miles faster than about 5ms; add in the latency of the network equipment along the way and the round-trip time, even to the nearest regional cloud location becomes noticeable, if not intolerable for many applications.\n      The curse of latency is a primary argument for edge computing, but it’s not the only one as companies have long known the benefits of offloading popular content and workloads to geographically distributed locations closer to users. Indeed, the CDN market is a testament to the necessity of offloading central resources and Netflix has operated a private content network and server ecosystem with hundreds of sites for many years. With organizations generating and distributing more data than ever, and far more coming with the proliferation of intelligent devices (IoT) and faster wireless networks (5G), it’s no wonder that interest in edge computing has tripled over the past few years.\n    ")])])}],o=(n("7f7f"),n("c5f6"),n("cadf"),n("551c"),n("097d"),n("bc3a")),s=n.n(o),r=n("0c12"),l=n("94df"),c=n.n(l),d={data:function(){return{file:null,title:"",downloaded:!1,showDownloadButtons:!1}},filters:{humanBytes:function(e){return c()(Number(e))}},mounted:function(){var e=this;s.a.get("/api/files/".concat(this.$route.params.id)).then(function(t){var n=t.data;e.file=n,e.file.visitCount+=1,e.title="".concat(n.name," - "),setTimeout(function(){e.showDownloadButtons=!0},2e3)}).catch(function(t){return console.log(t),500===t.response.status?r["a"].$emit("error","Server Error: Unable to handle the request now. Please try again later."):e.$router.push("/404")})},methods:{onFileDownload:function(){this.file.downloadCount+=1,this.downloaded=!0,s.a.post("/api//download/".concat(this.file.encodedName))}},metaInfo:function(){return{title:this.title}}},u=d,f=n("2877"),p=Object(f["a"])(u,a,i,!1,null,null,null);t["default"]=p.exports},aa77:function(e,t,n){var a=n("5ca1"),i=n("be13"),o=n("79e5"),s=n("fdef"),r="["+s+"]",l="​",c=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),u=function(e,t,n){var i={},r=o(function(){return!!s[e]()||l[e]()!=l}),c=i[e]=r?t(f):s[e];n&&(i[n]=c),a(a.P+a.F*r,"String",i)},f=u.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(d,"")),e};e.exports=u},c5f6:function(e,t,n){"use strict";var a=n("7726"),i=n("69a8"),o=n("2d95"),s=n("5dbc"),r=n("6a99"),l=n("79e5"),c=n("9093").f,d=n("11e9").f,u=n("86cc").f,f=n("aa77").trim,p="Number",h=a[p],m=h,v=h.prototype,g=o(n("2aeb")(v))==p,w="trim"in String.prototype,y=function(e){var t=r(e,!1);if("string"==typeof t&&t.length>2){t=w?t.trim():f(t,3);var n,a,i,o=t.charCodeAt(0);if(43===o||45===o){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+t}for(var s,l=t.slice(2),c=0,d=l.length;c<d;c++)if(s=l.charCodeAt(c),s<48||s>i)return NaN;return parseInt(l,a)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(g?l(function(){v.valueOf.call(n)}):o(n)!=p)?s(new m(y(t)),n,h):y(t)};for(var b,_=n("9e1e")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;_.length>C;C++)i(m,b=_[C])&&!i(h,b)&&u(h,b,d(m,b));h.prototype=v,v.constructor=h,n("2aba")(a,p,h)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=file.b0cc0964.js.map