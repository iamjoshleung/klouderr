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

    <div class="ads mt-4 text-center">
      <Adsense
        data-ad-client="ca-pub-4679085340013866"
        data-ad-slot="9178412838"
      ></Adsense>
    </div>

    <div class="text-center">
      <a
        :href="`${file.url_s3}`"
        class="button is-primary is-rounded mt-2 mb-2 mr-4 uppercase font-bold"
        :class="{ 'pointer-events-none': downloaded }"
        target="_blank"
        @click="onFileDownload"
        :disabled="downloaded"
        >{{ $t('file.downloadFile') }}</a
      >
    </div>

    <div class="ads text-center">
      <Adsense
        data-ad-client="ca-pub-4679085340013866"
        data-ad-slot="6511749031"
      ></Adsense>
    </div>

    <div class="mt-20" v-if="$i18n.locale === 'en'">
      <div class="mt-20 mb-20">
        <h4 class="title title--no-sp is-6">
          Worldwide IaaS Public Cloud Services Market Jumped 37.3% in 2024
        </h4>

        <p>
          We all know the overall cloud services and software business is
          growing at warp speed, but it can be beneficial to enterprise
          decision-makers if experts break down the categories (SaaS, IaaS, PaaS
          and others) for more clarity. Industry analyst Gartner Inc. reported
          Aug. 10 that the worldwide infrastructure as a service (IaaS) market
          grew a whopping 37.3% in 2019 to total $44.5 billion, up from $32.4
          billion in 2018. To the surprise of few industry observers, Amazon
          retained the No. 1 position in the IaaS market in 2019, followed by
          Microsoft, Alibaba, Google and Tencent. In 2019, the top five IaaS
          providers accounted for 80% of the market, up from 77% in 2018.
          Three-quarters of all IaaS providers had exhibited growth in 2018.
          Amazon continued to lead the worldwide IaaS market with an estimated
          $20 billion of revenue in 2019 and 45% of the total market. Amazon
          leveraged its No.1 spot in 2018 to build out its capabilities beyond
          the IaaS layer in the cloud stack and maintain its top position in
          2019. “Cloud underpins the push to digital business, which remains at
          the top of CIOs’ agendas,” Sid Nag, research vice president at
          Gartner, said in a media advisory. “It enables technologies such as
          the edge, AI, machine learning and 5G, among others. At the end of the
          day, each of these technologies requires a scalable, elastic and
          high-capacity infrastructure platform like public cloud IaaS, which is
          why the market witnessed strong growth.” Microsoft remained in the No.
          2 position in the IaaS market with more than half of its nearly $8
          billion in revenue coming from North America. Microsoft’s IaaS
          offering grew 57.8% in 2019 as the company leveraged its sales reach
          and ability to co-sell its Azure offerings with other Microsoft
          products and services in order to drive adoption. The dominant IaaS
          provider in China, Alibaba Cloud, grew 62.4% in 2019 with revenue
          surpassing $4 billion, up from $2.5 billion in 2018. Alibaba Group
          will continue to expand its cloud infrastructure business in the
          coming years and aim to offer cloud-based intelligent solutions to its
          customers to support their digital transformation process.
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
  }),
  filters: {
    humanBytes(val) {
      return prettyBytes(Number(val));
    },
  },
  mounted() {
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
            'Server Error: Unable to handle the request now. Please try again later.'
          );
        }

        return this.$router.push('/404');
      });

    // setTimeout(() => {
    //   const ad = document.querySelector('ins.adsbygoogle');
    //   if (ad && ad.innerHTML.replace(/\s/g, '').length === 0) {
    //     this.$router.push({ name: 'ad-blocker' });
    //   }
    // }, 1500);
  },
  methods: {
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
