(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["file"],{"9c88":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.file?t("div",[t("h1",{staticClass:"subtitle title--no-sp is-3"},[e._v(e._s(e.file.name))]),t("span",{staticClass:"subtitle is-6"},[e._v("\n      "+e._s(e.file.downloadCount)+"\n      "+e._s(e.$t("file.downloads"))+" / "+e._s(e.file.visitCount)+" "+e._s(e.$t("file.visits"))+"\n    ")]),t("div",{staticClass:"mt-6"},[t("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}}),t("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6778560334"}}),t("div",[t("a",{staticClass:"button is-danger",class:{"pointer-events-none":e.downloaded},attrs:{href:""+e.file.url,target:"_blank",disabled:e.downloaded},on:{click:e.onFileDownload}},[e._v(e._s(e.$t("file.downloadFile")))])]),t("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}})],1)]):e._e(),e._m(0)])},o=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mt-6"},[t("article",{staticClass:"message max-w-md mr-auto ml-auto"},[t("div",{staticClass:"message-header"},[t("p",{staticClass:"mb-0"},[e._v("Personal Loan vs. Home Equity Loan: Which Is Better?")])]),t("div",{staticClass:"message-body"},[e._v("\n        Loans, especially personal and home equity loans, can be a good way to pay for\n        a major home project or handle a financial emergency.\n        But before you apply for either type of loan – or an alternative,\n        such as a home equity line of credit – do some research and decide which\n        option best suits your needs.\n\n        What Is a Personal Loan?\n        Personal loans can cover a variety of financial needs and\n        have grown in popularity in recent years, with\n        balances reaching a record high in mid-2018.\n        These loans are often unsecured, which means they're not backed by your house or car\n        like a mortgage or auto loan would be. You receive the money upfront and make\n        payments over time, usually with fixed payment terms. The interest rates are\n        often higher than home or car loans, but lower than those for credit cards.\n\n      ")])])])}],s=(t("7f7f"),t("cadf"),t("551c"),t("097d"),t("bc3a")),i=t.n(s),l=t("0c12"),r={data:function(){return{file:null,title:"",downloaded:!1}},mounted:function(){var e=this;i.a.get("/api/files/".concat(this.$route.params.id)).then(function(a){var t=a.data;e.file=t,e.file.visitCount+=1,e.title="".concat(t.name," - ")}).catch(function(a){return console.log(a),500===a.response.status?l["a"].$emit("error","Server Error: Unable to handle the request now. Please try again later."):e.$router.push("/404")})},methods:{onFileDownload:function(){this.file.downloadCount+=1,this.downloaded=!0,i.a.post("/api//download/".concat(this.file.encodedName))}},metaInfo:function(){return{title:this.title}}},d=r,c=t("2877"),u=Object(c["a"])(d,n,o,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=file.97ebf283.js.map