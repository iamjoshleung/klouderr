(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["file"],{"9c88":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.file?t("div",[t("h1",{staticClass:"subtitle title--no-sp is-3"},[e._v(e._s(e.file.name))]),t("span",{staticClass:"subtitle is-6"},[e._v("\n      "+e._s(e.file.downloadCount)+"\n      "+e._s(e.$t("file.downloads"))+" / "+e._s(e.file.visitCount)+" "+e._s(e.$t("file.visits"))+"\n    ")]),t("div",{staticClass:"mt-6"},[t("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}}),t("div",[t("a",{staticClass:"button is-danger",class:{"pointer-events-none":e.downloaded},attrs:{href:""+e.file.url,target:"_blank",disabled:e.downloaded},on:{click:e.onFileDownload}},[e._v(e._s(e.$t("file.downloadFile")))])]),t("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}})],1)]):e._e(),e._m(0)])},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mt-6"},[t("article",{staticClass:"message max-w-md mr-auto ml-auto"},[t("div",{staticClass:"message-header"},[t("p",{staticClass:"mb-0"},[e._v("What are Cloud Service Providers?")])]),t("div",{staticClass:"message-body"},[e._v("\n        Cloud service providers (CSP) are companies that offer network services,\n        infrastructure, or business applications in the cloud. The cloud services are\n        hosted in a data center that can be accessed by companies or individuals\n        using network connectivity.\n        The large benefit of using a cloud service provider comes in efficiency\n        and economies of scale. Rather than individuals and companies building\n        their own infrastructure to support internal services and applications,\n        the services can be purchased from the CSP, which provide the services to\n        many customers from a shared infrastructure.\n        There are several different forms of services that can be used “in the cloud”\n        by CSPs, including software, often referred to as Software as a Service (SaaS),\n        a computing platform for developing or hosting applications, known as Platform\n        as a Service (PaaS); or an entire networking or computing infrastructure, known as\n        Infrastructure as a Service (IaaS). The divisions, however, are not always clear-cut,\n        as many providers may offer multiple flavors of cloud services, include traditional web\n        or application hosting providers. For example, you might go to a cloud provider, such as\n        Rackspace, who started as a web hosting company and buy either PAAS or IAAS services.\n        Many cloud providers are focusing on specific verticals, such as hosting healthcare\n        applications in a secure IAAS environment.\n      ")])])])}],i=(t("7f7f"),t("cadf"),t("551c"),t("097d"),t("bc3a")),o=t.n(i),r=t("0c12"),c={data:function(){return{file:null,title:"",downloaded:!1}},mounted:function(){var e=this;o.a.get("/api/files/".concat(this.$route.params.id)).then(function(a){var t=a.data;e.file=t,e.file.visitCount+=1,e.title="".concat(t.name," - ")}).catch(function(a){return console.log(a),500===a.response.status?r["a"].$emit("error","Server Error: Unable to handle the request now. Please try again later."):e.$router.push("/404")})},methods:{onFileDownload:function(){this.file.downloadCount+=1,this.downloaded=!0,o.a.post("/api//download/".concat(this.file.encodedName))}},metaInfo:function(){return{title:this.title}}},l=c,d=t("2877"),u=Object(d["a"])(l,n,s,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=file.1ce66d64.js.map