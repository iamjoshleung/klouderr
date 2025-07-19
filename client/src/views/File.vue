<template>
  <div v-if="file">
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">{{ $t('file.type') }}</p>
          <p class="title is-4">{{ file.extension.toUpperCase() }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">{{ $t('file.size') }}</p>
          <p class="title is-4">{{ file.size | humanBytes }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">{{ $t('file.downloaded') }}</p>
          <p class="title is-4">{{ file.downloadCount }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">{{ $t('file.visited') }}</p>
          <p class="title is-4">{{ file.visitCount }}</p>
        </div>
      </div>
    </nav>

    <hr />

    <h1 class="title is-5 tracking-wide mt-12 text-center">{{ file.name }}</h1>

    <div v-if="countdownActive">
      <div class="ads mt-4 text-center">
        <Adsense
          data-ad-client="ca-pub-4679085340013866"
          data-ad-slot="9178412838"
        ></Adsense>
      </div>

      <div class="ads mt-4 text-center">
        <Adsense
          data-ad-client="ca-pub-4679085340013866"
          data-ad-slot="6511749031"
        ></Adsense>
      </div>

      <div class="ads mt-4 text-center">
        <Adsense
          data-ad-client="ca-pub-4679085340013866"
          data-ad-slot="6511749031"
        ></Adsense>
      </div>

      <div class="ads mt-4 text-center">
        <Adsense
          data-ad-client="ca-pub-4679085340013866"
          data-ad-slot="6511749031"
        ></Adsense>
      </div>
    </div>
    <div v-else>
      <div class="ads mt-4 text-center">
        <Adsense
          data-ad-client="ca-pub-4679085340013866"
          data-ad-slot="9178412838"
        ></Adsense>
      </div>

      <div class="ads mt-4 text-center">
        <Adsense
          data-ad-client="ca-pub-4679085340013866"
          data-ad-slot="6511749031"
        ></Adsense>
      </div>

      <div class="ads mt-4 text-center">
        <Adsense
          data-ad-client="ca-pub-4679085340013866"
          data-ad-slot="6511749031"
        ></Adsense>
      </div>

      <div class="ads mt-4 text-center">
        <Adsense
          data-ad-client="ca-pub-4679085340013866"
          data-ad-slot="6511749031"
        ></Adsense>
      </div>
    </div>

    <div v-if="noAdblocker">
      <div class="text-center">
        <a
          :href="`${file.url_s3}`"
          class="button is-primary is-rounded mt-2 mb-2 mr-4 uppercase font-bold"
          :class="{ 'pointer-events-none': downloaded || countdownActive }"
          target="_blank"
          @click="onFileDownload"
          :disabled="downloaded || countdownActive"
          >{{ countdownActive ? `${$t('file.downloadFile')} (${countdown}s)` : $t('file.downloadFile') }}</a
        >
      </div>
    </div>

    <div v-else class="text-center">
      <!-- Adblocker warning -->
      <h1>
        Please disable your AdBlocker to view the content.
        請關閉AdBlocker以瀏覽下載鏈結
      </h1>
    </div>

    <!-- <div class="text-center">
      <a
        :href="`${file.url_s3}`"
        class="button is-primary is-rounded mt-2 mb-2 mr-4 uppercase font-bold"
        :class="{ 'pointer-events-none': downloaded }"
        target="_blank"
        @click="onFileDownload"
        :disabled="downloaded"
        >{{ $t('file.downloadFile') }}</a
      >
    </div> -->

    <div class="mt-20" v-if="$i18n.locale === 'en'">
      <div class="mt-20 mb-20">
        <h4 class="title title--no-sp is-6">
          How I Pick My Stocks: Investing For Beginners
        </h4>

        <p>
          This is the best piece of advice I've ever heard about investing. It
          came from a millionaire I looked up to as a kid. After overhearing him
          talk about investing, I wanted to get involved. But as a complete
          beginner, I didn't know where to start. So I asked him, "How do I pick
          the right stocks to invest in?" His answer was very simple. "Treat it
          like finding a girlfriend." This is quite a clever way to look at it.
          Because when you buy a share in a company, you actually become a part
          owner. This is like a partnership between you and the company, and
          just like a relationship, you want to make sure it's happy, long, and
          successful. But look, I'm not gonna pretend that there's a crystal
          ball that can tell you when to buy a stock before it rockets in value
          like most of the fake gurus online. However, there are certainly a few
          things you can do to tip the odds in your favor. When you're looking
          for a partner, you need to have a strategy in mind. Are you gonna
          shower them with gifts like a simp or treat them mean to keep them
          keen? You'll get very different results depending on which strategy
          you choose, and the same goes for stocks. So just like dating, you
          need to figure out how you're gonna approach the stock market so that
          you get the results you want. There are two strategies you can choose
          from: the technical or the fundamental approach. Both of these options
          are very different, so let's quickly go over what they involve.
          Technical analysis is mainly for short-term day traders. They use
          charts and price action to identify patterns that supposedly help them
          predict if a stock is gonna go up or down in the short-term. I use the
          word supposedly because, in my opinion, most of the people using this
          strategy are glorified gamblers. Is it possible that they trade
          successfully? Yes, but more than 95% of day traders lose money rather
          than making it, according to The Motley Fool. Fundamental analysis is
          like being a detective for a company. You look at everything, from
          their financial reports to how well-known the brand is and who's
          running the show. All these pieces of information help you understand
          how the company is doing now and how it might perform in the future.
          This approach can help you pick a range of stocks that can make you a
          nice amount of money over a three to ten year period. I know saying
          this will probably ruin my watch time, but I only want people getting
          into this for the right reasons. So if you're looking for a way to get
          rich quick, then stop watching my video now. My goal is to secure your
          financial future, not just help you make a quick buck. Also, remember,
          with any kind of investing, your money can go down as well as up. If
          you're still with me, then comment down below, "I'm in," so I know how
          many of you are willing to invest for the long-term. Right, all done?
          Cool. Let's jump into it. When you're on a dating app and checking out
          someone's profile, you usually look at their pictures and read their
          bio to see if they'd make a good match. It's exactly the same when
          you're thinking about investing in a company. You have to check out
          the company's profile, which in this case is something called a
          balance sheet. A balance sheet is a financial statement that provides
          a snapshot of a company's financial position at a specific point in
          time. It details the company's assets, liabilities, and shareholders'
          equity. Don't worry if that sounds a bit confusing. We'll take a look
          at one together, and I'll break it down with you. I'm gonna be using
          Trading 212 to do this, which is a great place to research and buy
          stocks. You're welcome to download it and follow along. Trading 212 is
          also sponsoring this portion of the video, and if you use the code
          TILBURY, you'll also get a free fractional share worth up to a hundred
          pounds when you open your account. I'll put the link in the
          description. Plus, you can get more free stocks by inviting your
          friends. Both of you will get a free share as long as they fund their
          account. I'm gonna be using their desktop website for this video, but
          you can do all of this on the mobile app if you want to. For everyone
          in the USA, you can find the same information on Yahoo Finance.
          Remember that nothing in this video should be taken as financial
          advice. I'm not a financial advisor, and when investing, your capital
          is at risk. So to find the balance sheet, just head to the stock
          you're interested in. For this example, I'm gonna pick Coca-Cola.
          Scroll down the page, click on Financials, then Balance Sheet, and
          More Financials. This pulls up a pretty complicated looking page, but
          trust me, it is actually very simple. To help you understand this
          balance sheet, think of it like a cookie jar. At the top, you've got
          the current assets. These are like the cookies you can grab and eat.
          For a company, this is the cash, or anything that can be turned into
          cash within 12 months. Next, you have the longer-term assets. These
          are like the cookies that are deeper down in a jar. For a company,
          this often includes the headquarters and equipment. Here, you have the
          intangible assets. These are like the invisible things that make the
          cookies taste good. You can't touch these things, but they bring a lot
          of value. For a company, this is patents, intellectual property,
          trademarks, and goodwill. This next section is all about liabilities.
          These are like the cookies that you've promised to your friends for
          borrowing their ingredients. I'm most interested in the current
          liabilities as these will need to be paid back within one year or a
          normal operating cycle. So now you know what all of this information
          means, what should you actually do with it? Well, there's a simple
          calculation you can do to easily know if a company is high-risk or
          not, and that is total current assets divided by total current
          liabilities. A good rule of thumb is this number should be above one.
          But how does this actually work in practice? Well, let's put
          Coca-Cola's numbers in. Their total current assets are $26.73 billion.
          So if we divide that by their total current liabilities, which are
          $23.57 billion, that comes to approximately 1.13. This means the
          company has $1.3 in current assets for every $1 in current
          liabilities, indicating they have enough short-term assets to cover
          their short-term debts. This is a great indicator, but our work is far
          from over. When you're getting to know someone new, you're probably
          curious about their past relationships. It's like doing a bit of a
          background check, right? You might wonder whether they've ever cheated
          or how many partners they've had. It's pretty much the same when
          you're considering investing. Before you put your hard-earned cash
          into a company, you wanna check out its track record. That's where the
          income statement comes in. And unlike people, public companies have to
          be upfront and honest about their past. An income statement is like a
          report card for a company showing how well it did over a specific
          period, like a month, a quarter, or a year. Put simply, it tells you
          how much money the company made and how much it spent. This is
          normally found in the same place as the balance sheet. If you're using
          the Trading 212 app like me, then just click on the first tab, and
          you'll see all the information. Here at the top, we have the total
          revenue, which is the total the business took in the time period. As
          we can see from Coca-Cola, they took in 45.75 billion in 2023, which
          isn't too shabby. If we scroll down a bit, we get to the net income,
          which is the money the company makes after all expenses have been
          deducted. For Coca-Cola, this is $10.71 billion. So, why does this
          matter? Well, every business has two main types of expenses: the cost
          of revenue and the cost of operations. If either of these are too
          high, then it could be a red flag. Just think about it. If you were
          selling custom T-shirts, you'd have to spend money on fabric and
          printing. This is your cost of revenue, as you can't create custom
          T-shirts without these materials, so this is a necessary expense. But
          that's not it. You'd also have to spend money on marketing and
          potentially staff. These are known as your operating expenses. Once
          you subtract both the cost of revenue and the operating expenses from
          the total money you make from selling your custom T-shirts, you get
          your operating income. Now, if you just scale up that example, it's
          the same idea for big companies like Coca-Cola. See here, this is the
          operating income. So now you know what all this information means,
          what should you actually do with it? Well, here's a simple calculation
          to see if a business is making a healthy amount of profit. Operating
          income divided by total revenue times a hundred. According to Tide
          Banking, as a rule of thumb, 5% is a low profit margin, 10% is a
          healthy margin, and 20% is a high margin. If we plug Coca-Cola's
          numbers into this calculation, we get approximately 25.73%, which is a
          high profit margin. This is a great indicator to use. However, it's
          important to remember that older, more established companies will be
          more profitable than newer, faster-growing companies. So profitability
          isn't the most important thing. I mean, Amazon took years to make a
          profit, and look at them now. But saying this, you should also keep in
          mind that a company that's done well in the past doesn't mean that
          it'll continue to do well in the future. Past performance doesn't
          guarantee future results. Listen, it might not sound like a romantic
          thing to say, but if you're thinking of getting involved with someone,
          you don't want them to be bad with money. It can lead to a whole load
          of issues, and the same is true when it comes to investing in a
          company.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import prettyBytes from 'pretty-bytes';
import EventBus from '@/eventBus';

export default {
  data: () => ({
    file: null,
    title: '',
    downloaded: false,
    noAdblocker: false,
    countdown: 5,
    countdownActive: true,
  }),
  filters: {
    humanBytes(val) {
      return prettyBytes(Number(val));
    },
  },
  mounted() {
    // window.adblockDetector.init({
    //   debug: false,

    //   complete: (result) => {
    //     console.log('Detection complete. Adblock?', result);
    //     this.adblockDetected = result;
    //   },
    // });

    this.noAdblocker = !!document.getElementById('rpjMdOwCJNxQ');

    // Start countdown timer
    this.startCountdown();

    axios
      .get(`/api/files/${this.$route.params.id}`)
      .then(({ data: file }) => {
        this.file = file;
        this.file.visitCount += 1;
        this.title = `${file.name} - `;
      })
      .catch((err) => {
        console.log(err);

        if (err.response.status === 500) {
          return EventBus.$emit(
            'error',
            'Server Error: Unable to handle the request now. Please try again later.',
          );
        }

        return this.$router.push('/404');
      });
  },
  methods: {
    startCountdown() {
      const timer = setInterval(() => {
        this.countdown = this.countdown - 1;
        if (this.countdown <= 0) {
          this.countdownActive = false;
          clearInterval(timer);
        }
      }, 1000);
    },
    onFileDownload() {
      this.file.downloadCount += 1;
      this.downloaded = true;

      axios.post(`/api//download/${this.file.encodedName}`);
    },
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
};
</script>
