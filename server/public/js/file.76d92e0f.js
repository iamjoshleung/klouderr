(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["file"],{"11e9":function(e,t,n){var i=n("52a7"),o=n("4630"),a=n("6821"),s=n("6a99"),r=n("69a8"),l=n("c69a"),h=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?h:function(e,t){if(e=a(e),t=s(t,!0),l)try{return h(e,t)}catch(n){}if(r(e,t))return o(!i.f.call(e,t),e[t])}},"5dbc":function(e,t,n){var i=n("d3f4"),o=n("8b97").set;e.exports=function(e,t,n){var a,s=t.constructor;return s!==n&&"function"==typeof s&&(a=s.prototype)!==n.prototype&&i(a)&&o&&o(e,a),e}},"8b97":function(e,t,n){var i=n("d3f4"),o=n("cb7c"),a=function(e,t){if(o(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,n){return a(e,n),t?e.__proto__=n:i(e,n),e}}({},!1):void 0),check:a}},9093:function(e,t,n){var i=n("ce10"),o=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,o)}},"94df":function(e,t,n){"use strict";const i=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],o=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],s=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],r=(e,t,n)=>{let i=e;return"string"===typeof t||Array.isArray(t)?i=e.toLocaleString(t,n):!0!==t&&void 0===n||(i=e.toLocaleString(void 0,n)),i};e.exports=(e,t)=>{if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);t=Object.assign({bits:!1,binary:!1},t);const n=t.bits?t.binary?s:a:t.binary?o:i;if(t.signed&&0===e)return" 0 "+n[0];const l=e<0,h=l?"-":t.signed?"+":"";let c;if(l&&(e=-e),void 0!==t.minimumFractionDigits&&(c={minimumFractionDigits:t.minimumFractionDigits}),void 0!==t.maximumFractionDigits&&(c=Object.assign({maximumFractionDigits:t.maximumFractionDigits},c)),e<1){const i=r(e,t.locale,c);return h+i+" "+n[0]}const u=Math.min(Math.floor(t.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),n.length-1);e/=Math.pow(t.binary?1024:1e3,u),c||(e=e.toPrecision(3));const d=r(Number(e),t.locale,c),m=n[u];return h+d+" "+m}},"9c88":function(e,t,n){"use strict";n.r(t);n("7f7f");var i=function(){var e=this,t=e._self._c;return e.file?t("div",[t("nav",{staticClass:"level is-mobile"},[t("div",{staticClass:"level-item has-text-centered"},[t("div",[t("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.type")))]),t("p",{staticClass:"title is-4"},[e._v(e._s(e.file.extension.toUpperCase()))])])]),t("div",{staticClass:"level-item has-text-centered"},[t("div",[t("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.size")))]),t("p",{staticClass:"title is-4"},[e._v(e._s(e._f("humanBytes")(e.file.size)))])])]),t("div",{staticClass:"level-item has-text-centered"},[t("div",[t("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.downloaded")))]),t("p",{staticClass:"title is-4"},[e._v(e._s(e.file.downloadCount))])])]),t("div",{staticClass:"level-item has-text-centered"},[t("div",[t("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.visited")))]),t("p",{staticClass:"title is-4"},[e._v(e._s(e.file.visitCount))])])])]),t("hr"),t("h1",{staticClass:"title is-5 tracking-wide mt-12 text-center"},[e._v(e._s(e.file.name))]),t("div",{staticClass:"ads mt-4 text-center"},[t("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"9178412838"}})],1),t("div",{staticClass:"ads mt-4 text-center"},[t("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}})],1),t("div",{staticClass:"ads mt-4 text-center"},[t("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}})],1),t("div",{staticClass:"text-center"},[t("a",{staticClass:"button is-primary is-rounded mt-2 mb-2 mr-4 uppercase font-bold",class:{"pointer-events-none":e.downloaded},attrs:{href:"".concat(e.file.url_s3),target:"_blank",disabled:e.downloaded},on:{click:e.onFileDownload}},[e._v(e._s(e.$t("file.downloadFile")))])]),"en"===e.$i18n.locale?t("div",{staticClass:"mt-20"},[e._m(0)]):e._e()]):e._e()},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"mt-20 mb-20"},[t("h4",{staticClass:"title title--no-sp is-6"},[e._v("\n        How I Pick My Stocks: Investing For Beginners\n      ")]),t("p",[e._v("\n        This is the best piece of advice I've ever heard about investing. It\n        came from a millionaire I looked up to as a kid. After overhearing him\n        talk about investing, I wanted to get involved. But as a complete\n        beginner, I didn't know where to start. So I asked him, \"How do I pick\n        the right stocks to invest in?\" His answer was very simple. \"Treat it\n        like finding a girlfriend.\" This is quite a clever way to look at it.\n        Because when you buy a share in a company, you actually become a part\n        owner. This is like a partnership between you and the company, and\n        just like a relationship, you want to make sure it's happy, long, and\n        successful. But look, I'm not gonna pretend that there's a crystal\n        ball that can tell you when to buy a stock before it rockets in value\n        like most of the fake gurus online. However, there are certainly a few\n        things you can do to tip the odds in your favor. When you're looking\n        for a partner, you need to have a strategy in mind. Are you gonna\n        shower them with gifts like a simp or treat them mean to keep them\n        keen? You'll get very different results depending on which strategy\n        you choose, and the same goes for stocks. So just like dating, you\n        need to figure out how you're gonna approach the stock market so that\n        you get the results you want. There are two strategies you can choose\n        from: the technical or the fundamental approach. Both of these options\n        are very different, so let's quickly go over what they involve.\n        Technical analysis is mainly for short-term day traders. They use\n        charts and price action to identify patterns that supposedly help them\n        predict if a stock is gonna go up or down in the short-term. I use the\n        word supposedly because, in my opinion, most of the people using this\n        strategy are glorified gamblers. Is it possible that they trade\n        successfully? Yes, but more than 95% of day traders lose money rather\n        than making it, according to The Motley Fool. Fundamental analysis is\n        like being a detective for a company. You look at everything, from\n        their financial reports to how well-known the brand is and who's\n        running the show. All these pieces of information help you understand\n        how the company is doing now and how it might perform in the future.\n        This approach can help you pick a range of stocks that can make you a\n        nice amount of money over a three to ten year period. I know saying\n        this will probably ruin my watch time, but I only want people getting\n        into this for the right reasons. So if you're looking for a way to get\n        rich quick, then stop watching my video now. My goal is to secure your\n        financial future, not just help you make a quick buck. Also, remember,\n        with any kind of investing, your money can go down as well as up. If\n        you're still with me, then comment down below, \"I'm in,\" so I know how\n        many of you are willing to invest for the long-term. Right, all done?\n        Cool. Let's jump into it. When you're on a dating app and checking out\n        someone's profile, you usually look at their pictures and read their\n        bio to see if they'd make a good match. It's exactly the same when\n        you're thinking about investing in a company. You have to check out\n        the company's profile, which in this case is something called a\n        balance sheet. A balance sheet is a financial statement that provides\n        a snapshot of a company's financial position at a specific point in\n        time. It details the company's assets, liabilities, and shareholders'\n        equity. Don't worry if that sounds a bit confusing. We'll take a look\n        at one together, and I'll break it down with you. I'm gonna be using\n        Trading 212 to do this, which is a great place to research and buy\n        stocks. You're welcome to download it and follow along. Trading 212 is\n        also sponsoring this portion of the video, and if you use the code\n        TILBURY, you'll also get a free fractional share worth up to a hundred\n        pounds when you open your account. I'll put the link in the\n        description. Plus, you can get more free stocks by inviting your\n        friends. Both of you will get a free share as long as they fund their\n        account. I'm gonna be using their desktop website for this video, but\n        you can do all of this on the mobile app if you want to. For everyone\n        in the USA, you can find the same information on Yahoo Finance.\n        Remember that nothing in this video should be taken as financial\n        advice. I'm not a financial advisor, and when investing, your capital\n        is at risk. So to find the balance sheet, just head to the stock\n        you're interested in. For this example, I'm gonna pick Coca-Cola.\n        Scroll down the page, click on Financials, then Balance Sheet, and\n        More Financials. This pulls up a pretty complicated looking page, but\n        trust me, it is actually very simple. To help you understand this\n        balance sheet, think of it like a cookie jar. At the top, you've got\n        the current assets. These are like the cookies you can grab and eat.\n        For a company, this is the cash, or anything that can be turned into\n        cash within 12 months. Next, you have the longer-term assets. These\n        are like the cookies that are deeper down in a jar. For a company,\n        this often includes the headquarters and equipment. Here, you have the\n        intangible assets. These are like the invisible things that make the\n        cookies taste good. You can't touch these things, but they bring a lot\n        of value. For a company, this is patents, intellectual property,\n        trademarks, and goodwill. This next section is all about liabilities.\n        These are like the cookies that you've promised to your friends for\n        borrowing their ingredients. I'm most interested in the current\n        liabilities as these will need to be paid back within one year or a\n        normal operating cycle. So now you know what all of this information\n        means, what should you actually do with it? Well, there's a simple\n        calculation you can do to easily know if a company is high-risk or\n        not, and that is total current assets divided by total current\n        liabilities. A good rule of thumb is this number should be above one.\n        But how does this actually work in practice? Well, let's put\n        Coca-Cola's numbers in. Their total current assets are $26.73 billion.\n        So if we divide that by their total current liabilities, which are\n        $23.57 billion, that comes to approximately 1.13. This means the\n        company has $1.3 in current assets for every $1 in current\n        liabilities, indicating they have enough short-term assets to cover\n        their short-term debts. This is a great indicator, but our work is far\n        from over. When you're getting to know someone new, you're probably\n        curious about their past relationships. It's like doing a bit of a\n        background check, right? You might wonder whether they've ever cheated\n        or how many partners they've had. It's pretty much the same when\n        you're considering investing. Before you put your hard-earned cash\n        into a company, you wanna check out its track record. That's where the\n        income statement comes in. And unlike people, public companies have to\n        be upfront and honest about their past. An income statement is like a\n        report card for a company showing how well it did over a specific\n        period, like a month, a quarter, or a year. Put simply, it tells you\n        how much money the company made and how much it spent. This is\n        normally found in the same place as the balance sheet. If you're using\n        the Trading 212 app like me, then just click on the first tab, and\n        you'll see all the information. Here at the top, we have the total\n        revenue, which is the total the business took in the time period. As\n        we can see from Coca-Cola, they took in 45.75 billion in 2023, which\n        isn't too shabby. If we scroll down a bit, we get to the net income,\n        which is the money the company makes after all expenses have been\n        deducted. For Coca-Cola, this is $10.71 billion. So, why does this\n        matter? Well, every business has two main types of expenses: the cost\n        of revenue and the cost of operations. If either of these are too\n        high, then it could be a red flag. Just think about it. If you were\n        selling custom T-shirts, you'd have to spend money on fabric and\n        printing. This is your cost of revenue, as you can't create custom\n        T-shirts without these materials, so this is a necessary expense. But\n        that's not it. You'd also have to spend money on marketing and\n        potentially staff. These are known as your operating expenses. Once\n        you subtract both the cost of revenue and the operating expenses from\n        the total money you make from selling your custom T-shirts, you get\n        your operating income. Now, if you just scale up that example, it's\n        the same idea for big companies like Coca-Cola. See here, this is the\n        operating income. So now you know what all this information means,\n        what should you actually do with it? Well, here's a simple calculation\n        to see if a business is making a healthy amount of profit. Operating\n        income divided by total revenue times a hundred. According to Tide\n        Banking, as a rule of thumb, 5% is a low profit margin, 10% is a\n        healthy margin, and 20% is a high margin. If we plug Coca-Cola's\n        numbers into this calculation, we get approximately 25.73%, which is a\n        high profit margin. This is a great indicator to use. However, it's\n        important to remember that older, more established companies will be\n        more profitable than newer, faster-growing companies. So profitability\n        isn't the most important thing. I mean, Amazon took years to make a\n        profit, and look at them now. But saying this, you should also keep in\n        mind that a company that's done well in the past doesn't mean that\n        it'll continue to do well in the future. Past performance doesn't\n        guarantee future results. Listen, it might not sound like a romantic\n        thing to say, but if you're thinking of getting involved with someone,\n        you don't want them to be bad with money. It can lead to a whole load\n        of issues, and the same is true when it comes to investing in a\n        company.\n      ")])])}],a=(n("c5f6"),n("bc3a")),s=n.n(a),r=n("94df"),l=n.n(r),h=n("0c12"),c={data:function(){return{file:null,title:"",downloaded:!1}},filters:{humanBytes:function(e){return l()(Number(e))}},mounted:function(){var e=this;s.a.get("/api/files/".concat(this.$route.params.id)).then((function(t){var n=t.data;e.file=n,e.file.visitCount+=1,e.title="".concat(n.name," - ")})).catch((function(t){return console.log(t),500===t.response.status?h["a"].$emit("error","Server Error: Unable to handle the request now. Please try again later."):e.$router.push("/404")}))},methods:{onFileDownload:function(){this.file.downloadCount+=1,this.downloaded=!0,s.a.post("/api//download/".concat(this.file.encodedName))}},metaInfo:function(){return{title:this.title}}},u=c,d=n("0c7c"),m=Object(d["a"])(u,i,o,!1,null,null,null);t["default"]=m.exports},aa77:function(e,t,n){var i=n("5ca1"),o=n("be13"),a=n("79e5"),s=n("fdef"),r="["+s+"]",l="​",h=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),u=function(e,t,n){var o={},r=a((function(){return!!s[e]()||l[e]()!=l})),h=o[e]=r?t(d):s[e];n&&(o[n]=h),i(i.P+i.F*r,"String",o)},d=u.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(h,"")),2&t&&(e=e.replace(c,"")),e};e.exports=u},c5f6:function(e,t,n){"use strict";var i=n("7726"),o=n("69a8"),a=n("2d95"),s=n("5dbc"),r=n("6a99"),l=n("79e5"),h=n("9093").f,c=n("11e9").f,u=n("86cc").f,d=n("aa77").trim,m="Number",p=i[m],f=p,y=p.prototype,g=a(n("2aeb")(y))==m,b="trim"in String.prototype,w=function(e){var t=r(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():d(t,3);var n,i,o,a=t.charCodeAt(0);if(43===a||45===a){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+t}for(var s,l=t.slice(2),h=0,c=l.length;h<c;h++)if(s=l.charCodeAt(h),s<48||s>o)return NaN;return parseInt(l,i)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(g?l((function(){y.valueOf.call(n)})):a(n)!=m)?s(new f(w(t)),n,p):w(t)};for(var v,k=n("9e1e")?h(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;k.length>I;I++)o(f,v=k[I])&&!o(p,v)&&u(p,v,c(f,v));p.prototype=y,y.constructor=p,n("2aba")(i,m,p)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=file.76d92e0f.js.map