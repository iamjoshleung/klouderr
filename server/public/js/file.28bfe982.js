(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["file"],{"11e9":function(t,e,n){var i=n("52a7"),a=n("4630"),o=n("6821"),s=n("6a99"),r=n("69a8"),c=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=o(t),e=s(e,!0),c)try{return l(t,e)}catch(n){}if(r(t,e))return a(!i.f.call(t,e),t[e])}},"5dbc":function(t,e,n){var i=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var o,s=e.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&i(o)&&a&&a(t,o),t}},"7f7f":function(t,e,n){var i=n("86cc").f,a=Function.prototype,o=/^\s*function ([^ (]*)/,s="name";s in a||n("9e1e")&&i(a,s,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"8b97":function(t,e,n){var i=n("d3f4"),a=n("cb7c"),o=function(t,e){if(a(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:o}},9093:function(t,e,n){var i=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,a)}},"94df":function(t,e,n){"use strict";const i=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],a=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],o=(t,e)=>{let n=t;return"string"===typeof e?n=t.toLocaleString(e):!0===e&&(n=t.toLocaleString()),n};t.exports=(t,e)=>{if(!Number.isFinite(t))throw new TypeError(`Expected a finite number, got ${typeof t}: ${t}`);e=Object.assign({bits:!1},e);const n=e.bits?a:i;if(e.signed&&0===t)return" 0 "+n[0];const s=t<0,r=s?"-":e.signed?"+":"";if(s&&(t=-t),t<1){const i=o(t,e.locale);return r+i+" "+n[0]}const c=Math.min(Math.floor(Math.log10(t)/3),n.length-1);t=Number((t/Math.pow(1e3,c)).toPrecision(3));const l=o(t,e.locale),h=n[c];return r+l+" "+h}},"9c88":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.file?n("div",[n("nav",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[t._v(t._s(t.$t("file.type")))]),n("p",{staticClass:"title is-4"},[t._v(t._s(t.file.extension.toUpperCase()))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[t._v(t._s(t.$t("file.size")))]),n("p",{staticClass:"title is-4"},[t._v(t._s(t._f("humanBytes")(t.file.size)))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[t._v(t._s(t.$t("file.downloaded")))]),n("p",{staticClass:"title is-4"},[t._v(t._s(t.file.downloadCount))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[t._v(t._s(t.$t("file.visited")))]),n("p",{staticClass:"title is-4"},[t._v(t._s(t.file.visitCount))])])])]),n("hr"),n("h1",{staticClass:"title is-5 tracking-wide mt-12 text-center"},[t._v(t._s(t.file.name))]),n("div",{staticClass:"ads mt-10 text-center"},[n("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"9178412838"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showDownloadButtons,expression:"showDownloadButtons"}],staticClass:"text-center"},[n("a",{staticClass:"button is-primary is-rounded mr-4 uppercase font-bold",class:{"pointer-events-none":t.downloaded},attrs:{href:""+t.file.url_s3,target:"_blank",disabled:t.downloaded},on:{click:t.onFileDownload}},[t._v(t._s(t.$t("file.downloadFile",{num:"1"})))])]),n("div",{staticClass:"ads text-center"},[n("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}})],1),"en"===t.$i18n.locale?n("div",{staticClass:"mt-20"},[n("h4",{staticClass:"title title--no-sp is-6"},[t._v("Blockchain And Its Advantages For Online Sites")]),n("p",[t._v("\n          Blockchain technology is the talk of the town right now. Huge numbers of companies around the world are exploring the innovation to see how it can revolutionize the industry they do business in.\n\n          For those that don’t know, a blockchain is essentially a database. The thing that makes it unique is that it is distributed amongst participants of the network. The rules of the network dictate who can update the database. Public blockchains often demand that participants compete at computational problems for the right to add new data to the ledger. Private blockchains, like those used in supply chain applications, likely have unique rules that need to be satisfied before a given participant can update the chain.\n\n          Since they have no single, attackable point of failure, blockchains can be incredibly resilient to compromise. However, the security aspect of a blockchain depends on the specific rules of the network, whether it’s a public or private network, as well as other variables, such as hashing power on a public blockchain like Bitcoin.\n\n          As mentioned, a myriad of players from varied industries has started tinkering with blockchain technology. Aside from cryptocurrency, which brought the technology to the attention of the masses, most of these early initial applications have been related to proving the authenticity of something. Alaskan salmon fisheries, luxury goods manufacturers, and global motor vehicle companies are all currently trialing or using blockchain technology to prove to customers that the item they are selling is exactly what they claim it is.\n\n          To be honest, it’s a similar form of accountability that has made the technology appealing to casino designers. Imagine an online casino in which a player could count the cards in the blackjack shoe prior to every hand, checking that every card was indeed present and the player did stand a chance of winning. Well, blockchain technology makes that possible.\n\n          Blockchain technology is appealing to those designing casinos for more than just accountability’s sake. There are several other good reasons that online gambling in the future could take place primarily on the blockchain.\n        ")])]):n("div",{staticClass:"mt-20"},[n("h4",{staticClass:"title title--no-sp is-6"},[t._v("透视腾讯、阿里财报背后的云端新战局")]),n("p",[t._v("\n          腾讯、阿里两大巨头先后发布季度财报，让两家的云计算产业再次成为了外界讨论的热点。\n\n          腾讯率先放榜。腾讯2019财年Q2财报显示“金融科技及企业服务收入”收入为228.88亿元，撇除备付金余额的利息收入影响同比增长57%。腾讯一如既往地没有在季度财报中单独披露云计算收入，但提及“云服务收入稳健增长”。参考腾讯云近几个季度的同比增长速度都在三位数，财报中的“稳健”也说明腾讯云依然保持着很高的加速度。\n\n          阿里巴巴2020财年Q1财报隔日而至。财报显示，当季阿里云收入为77.87亿元，同比增长约66%。可以对比的是，2019财年Q4，阿里云收入为77.26亿元，同比增长76%。阿里云的营收能力在国内依旧是一枝独秀，但对比看，领头羊的增速压力在进一步显现。\n\n          对于云计算业务的增长动力，双方财报表述差异明显。阿里云表示，增长“由每位客户平均支出增加所推动”。腾讯则表示：“在企业服务方面，伴随销售团队及产品类型扩大，腾讯云获得了更多主要客户及大型合同，收入同比稳健增长。”——阿里侧重于展现对存量的挖掘，而腾讯的信心在于增量的快速提升。\n\n          两强并进之余，云计算市场竞争格局也正发生着微妙的变化。\n\n          此前Gartner发布的报告显示，腾讯云2018年在IaaS市场增速达到128%，整体市场份额位列全球第六名、亚太区第四名，增速全球第一。财报发布前，高盛也曾预估腾讯云可贡献38亿元营收，这一数字已经接近阿里云的一半，双方的收入差距进一步缩小。\n\n          最近半年来腾讯云与合作方对外公开宣布的、与营收直接相关的“市场打单”动作，也印证着外界的外界的评价。\n\n          今年6月上旬，腾讯云、腾讯产业投资基金、东华软件和华体科技的四方联合体中标成都市“智慧绿道”项目，成都将会建设锦城绿道和沿线的商业等设施，铺开城市“绿色网络”，腾讯云方面提供智慧化解决方案，该单价格高达8.7亿元。\n\n          紧接着在7月初，腾讯云中标长沙市城市超级大脑项目，根据长沙政府采购网公示内容，中标价格高达5.2亿元，主要用于打造长沙新型智慧城市建设的“神经中枢”，加快推动长沙的数字化发展进程。\n\n          这些动作与财报中“……获得更多主要客户及大型合同，云业务的收入同比稳健增长”相契合。\n\n          而上述营收可观的项目都指向一个领域：政务。事实上，它们某种程度上都可以看做腾讯云在政务领域标杆案例的规模化复制。\n\n          例如，长沙市城市超级大脑项目即是腾讯城市发展解决方案“WeCity未来城市”的首个落地项目，而WeCity是腾讯云标杆项目规模化复制在政务领域的主要载体。\n\n          WeCity被腾讯财报在谈到腾讯云不多的表述中重点提到，官方定义是“以腾讯云的基础产品和能力为底层，为数字政务、城市治理、城市决策和产业互联等领域提供解决方案，并通过微信、小程序等工具触达用户”，简单说就是一个全新的政务业务品牌，其目的是将腾讯在政务大本营广东的典型项目“数字广东”经验拓展到更多地区。\n\n          在这之前，腾讯云的政务相关解决方案已经在全国22个省份落地，在政务领域实现了三年25倍的增长。腾讯云通过WeCity开始“批量复制”政务案例并不意外。\n\n          由此可见，过去一段时间腾讯签署的那些“战略合作协议”，未来都有可能承载WeCity的规模化复制，带来可观的营收增长。\n\n          除了政务，腾讯云在金融方面也在走类似的规模化复制道路。截至目前，腾讯云已有6000+金融客户，150多家银行客户，公开信息中四大国有银行中有3家和腾讯云有合作。\n\n          放眼国际市场，同季度亚马逊AWS营收增长37%、微软Azure增长64%、阿里云增长66%，增速都出现相对下滑。\n\n          虽然这可以认为是因为体量越大、增长越难，但随之而来的是打法的变化。阿里财报中写到，阿里云“本季业务增长主要来自于平均每个用户消费额的提升”，这既可以看作是现有存量用户的深挖，也表明在快速复制的行业大背景下，阿里云实现客户数量到客户质量的换挡，这个过程降了一些增速未必是坏事。\n\n          事实上，自去年以来，阿里云在其基础设施优势基础上，先后提出了“达尔文计划”——通过一系列包括平台、芯片和微基站在内的全链路生态服务，交付给企业一张自有可控的物联网，以及“新制造”概念——加入更多物联网和人工智能技术，落地柔性供应链，实现按需定制，这很明显都是要把整体解决方案推广到更多客户群的动作。\n        ")])])]):t._e()},a=[],o=(n("7f7f"),n("c5f6"),n("bc3a")),s=n.n(o),r=n("94df"),c=n.n(r),l=n("0c12"),h={data:function(){return{file:null,title:"",downloaded:!1,showDownloadButtons:!1}},filters:{humanBytes:function(t){return c()(Number(t))}},mounted:function(){var t=this;s.a.get("/api/files/".concat(this.$route.params.id)).then(function(e){var n=e.data;t.file=n,t.file.visitCount+=1,t.title="".concat(n.name," - "),setTimeout(function(){t.showDownloadButtons=!0},2e3)}).catch(function(e){return console.log(e),500===e.response.status?l["a"].$emit("error","Server Error: Unable to handle the request now. Please try again later."):t.$router.push("/404")})},methods:{onFileDownload:function(){this.file.downloadCount+=1,this.downloaded=!0,s.a.post("/api//download/".concat(this.file.encodedName))}},metaInfo:function(){return{title:this.title}}},u=h,d=n("2877"),f=Object(d["a"])(u,i,a,!1,null,null,null);e["default"]=f.exports},aa77:function(t,e,n){var i=n("5ca1"),a=n("be13"),o=n("79e5"),s=n("fdef"),r="["+s+"]",c="​",l=RegExp("^"+r+r+"*"),h=RegExp(r+r+"*$"),u=function(t,e,n){var a={},r=o(function(){return!!s[t]()||c[t]()!=c}),l=a[t]=r?e(d):s[t];n&&(a[n]=l),i(i.P+i.F*r,"String",a)},d=u.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(h,"")),t};t.exports=u},c5f6:function(t,e,n){"use strict";var i=n("7726"),a=n("69a8"),o=n("2d95"),s=n("5dbc"),r=n("6a99"),c=n("79e5"),l=n("9093").f,h=n("11e9").f,u=n("86cc").f,d=n("aa77").trim,f="Number",p=i[f],v=p,b=p.prototype,g=o(n("2aeb")(b))==f,m="trim"in String.prototype,y=function(t){var e=r(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():d(e,3);var n,i,a,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var s,c=e.slice(2),l=0,h=c.length;l<h;l++)if(s=c.charCodeAt(l),s<48||s>a)return NaN;return parseInt(c,i)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(g?c(function(){b.valueOf.call(n)}):o(n)!=f)?s(new v(y(e)),n,p):y(e)};for(var w,_=n("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;_.length>k;k++)a(v,w=_[k])&&!a(p,w)&&u(p,w,h(v,w));p.prototype=b,b.constructor=p,n("2aba")(i,f,p)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=file.28bfe982.js.map