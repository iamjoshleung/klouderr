(function(e){function t(t){for(var o,a,s=t[0],l=t[1],u=t[2],c=0,f=[];c<s.length;c++)a=s[c],i[a]&&f.push(i[a][0]),i[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r=[];function a(e){return s.p+"js/"+({404:"404","file~file-delete":"file~file-delete",file:"file","file-delete":"file-delete",home:"home"}[e]||e)+"."+{404:"4fd5fe82","file~file-delete":"f324d19f",file:"9fd512b6","file-delete":"57ec0c6a",home:"d46072b1"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=i[e]=[t,o]});t.push(n[2]=o);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e),r=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,n[1](a)}i[e]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c12":function(e,t,n){"use strict";var o=n("2b0e");t["a"]=new o["a"]},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=n("0284"),r=n.n(i),a=n("d78e"),s=n.n(a),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("notification"),e._m(0),e._m(1),n("uploader",{on:{uploaded:e.onFileUploaded}}),n("uploaded-file-list",{attrs:{files:e.uploadedFiles}}),n("router-view")],1)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"mb-6 mt-6"},[n("h1",{staticClass:"title"},[e._v("Klouderr")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"message max-w-md mr-auto ml-auto"},[n("div",{staticClass:"message-body"},[n("p",[e._v("Klouderr is the fastest and most secure way to share your files.\n          Whether you want to send a confidential contract, over 100 holiday photos or\n          a multi-gigabyte video, then Klouderr is the service that fulfills your needs.")]),n("p",[e._v("There are some other services that you can use to transfer files\n          (WeTransfer, HighTail, ...),\n          but we think our service is easier to use, faster and more secure. But don't\n          take our word for it. Try it yourself and send your next transfer using Klouderr.")])])])}],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("file-upload",{ref:"upload",attrs:{maximum:e.maximum,drop:!0,multiple:!0,"post-action":e.postAction,accept:e.allowedExtentions,size:e.size||0},on:{input:e.updatetValue,"input-filter":e.inputFilter},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}},[n("div",{staticClass:"uploadArea"},[n("button",{staticClass:"button is-white"},[e._v("Select Files")])])]),n("p",{staticClass:"text-red mt-2"},[e._v(e._s(this.error))]),e.files.length>0?n("div",{staticClass:"mt-6"},[n("p",{staticClass:"mb-2"},[e._v("You chose "+e._s(e.files.length)+" file(s)。")]),n("ul",{staticClass:"fileList shadow"},e._l(e.files,function(t){return n("li",{key:t.id},[e._v("\n        "+e._s(t.name)+"\n        "),n("button",{attrs:{type:"button"},on:{click:function(n){n.preventDefault(),e.remove(t)}}},[e._v("Remove")]),t.active||"0.00"!==t.progress?n("span",[e._v(e._s(t.progress)+"%")]):e._e()])}),0),e.$refs.upload&&e.$refs.upload.active?e._e():n("a",{staticClass:"button is-rounded mt-5",on:{click:function(t){t.preventDefault(),e.$refs.upload.active=!0}}},[e._v("Upload Files")])]):e._e()],1)},d=[],f=(n("7f7f"),n("ac6a"),n("8019")),p=n.n(f),m=n("0c12"),h={data:function(){return{files:[],postAction:"/api/upload",putAction:"/api/upload",error:"",maximum:5,size:52428800,allowedExtentions:"image/*,video/*,application/pdf,application/zip,application/x-rar-compressed,application/x-bittorrent"}},components:{"file-upload":p.a},methods:{remove:function(e){this.$refs.upload.remove(e)},updatetValue:function(e){var t=this;e.forEach(function(e){e.success&&(t.remove(e),t.$emit("uploaded",e.response)),e.error&&m["a"].$emit("error","Unexpected server error, please try again later.")})},inputFilter:function(e,t,n){if(this.error="",0!==this.maximum&&this.files.length>=this.maximum&&e&&!t)return this.error="You can only upload ".concat(this.maximum," at a time。"),n();if(e&&!t){if(!/\.(jpeg|jpg|gif|png|webp|pdf|torrent|zip|rar|mp4)$/i.test(e.name))return this.error="You can't upload ".concat(e.name,"。"),n();if(e.size>this.size)return this.error="File exceeds the maximum size of 50MB",n()}return null}}},v=h,b=n("2877"),g=Object(b["a"])(v,c,d,!1,null,null,null),y=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-6"},[n("ul",{staticClass:"fileList shadow"},e._l(e.files,function(t){return n("li",{key:t.name},[n("div",[e._v(e._s(t.name))]),n("div",{staticClass:"flex justify-center items-center"},[n("span",{staticClass:"mr-4"},[e._v("Download Link")]),n("div",{staticClass:"relative w-3/4"},[n("input",{staticClass:"input cursor-pointer",attrs:{type:"text"},domProps:{value:e._f("fileDownloadPath")(t.encodedName)},on:{click:e.copyToClipboard}}),n("span",{staticClass:"flex items-center h-full px-2 text-white\n            pointer-events-none bg-orange absolute pin-t pin-r"},[e._v("Copy")])])]),n("div",{staticClass:"flex justify-center items-center"},[n("span",{staticClass:"mr-4"},[e._v("Remove Link")]),n("div",{staticClass:"relative w-3/4"},[n("input",{staticClass:"input cursor-pointer",attrs:{type:"text"},domProps:{value:e.getFileRemoveUrl(t.encodedName,t.removeCode)},on:{click:e.copyToClipboard}}),n("span",{staticClass:"flex items-center h-full px-2 text-white\n            pointer-events-none bg-orange absolute pin-t pin-r"},[e._v("Copy")])])])])}),0)])},w=[],x={props:["files"],filters:{fileDownloadPath:function(e){return"".concat(window.location.origin,"/files/").concat(e)}},methods:{getFileRemoveUrl:function(e,t){return"".concat(window.location.origin,"/files/").concat(e,"/delete/").concat(t)},copyToClipboard:function(e){this.copyToClipboardHelper(e.target.value);var t=e.target.nextSibling;t.textContent="Copied",setTimeout(function(){t.textContent="Copy"},1e3)},copyToClipboardHelper:function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))}}},C=x,j=Object(b["a"])(C,_,w,!1,null,null,null),k=j.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notification is-danger",class:{hide:!e.show}},[n("button",{staticClass:"delete",on:{click:e.close}}),e._v("\n  "+e._s(e.message)+"\n")])},$=[],P={data:function(){return{show:!1,message:""}},mounted:function(){var e=this;m["a"].$on("error",function(t){e.message=t,e.show=!0})},methods:{close:function(){this.show=!1}}},A=P,F=Object(b["a"])(A,T,$,!1,null,null,null),O=F.exports,E={data:function(){return{uploadedFiles:[]}},metaInfo:{title:"",titleTemplate:"%s Klouderr"},components:{uploader:y,"uploaded-file-list":k,notification:O},methods:{onFileUploaded:function(e){this.uploadedFiles.unshift(e)}}},S=E,z=(n("5c0b"),Object(b["a"])(S,l,u,!1,null,null,null)),R=z.exports,U=n("8c4f"),D=n("0a89"),K=n.n(D);o["a"].use(U["a"]),o["a"].use(K.a);var L=new U["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:n.e("home").then(n.bind(null,"bb51"))},{path:"/files/:id",name:"file-download",component:function(){return Promise.all([n.e("file~file-delete"),n.e("file")]).then(n.bind(null,"9c88"))}},{path:"/files/:id/delete/:code",name:"file-delete",component:function(){return Promise.all([n.e("file~file-delete"),n.e("file-delete")]).then(n.bind(null,"370f"))}},{path:"/404",name:"404",component:function(){return n.e("404").then(n.bind(null,"9703"))}},{path:"*",redirect:"/404"}]});n("9299");o["a"].use(n("395c")),o["a"].use(s.a.Adsense),o["a"].use(s.a.InArticleAdsense),o["a"].use(s.a.InFeedAdsense),o["a"].config.productionTip=!1,o["a"].use(r.a,{id:"UA-129732371-2",router:L}),new o["a"]({router:L,render:function(e){return e(R)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),i=n.n(o);i.a},"5e27":function(e,t,n){},9299:function(e,t,n){}});
//# sourceMappingURL=app.82576b66.js.map