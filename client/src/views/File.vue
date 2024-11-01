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
          Microsoft and A16Z set aside differences, join hands in plea against
          AI regulation
        </h4>

        <p>
          Two of the biggest forces in two deeply intertwined tech ecosystems —
          large incumbents and startups — have taken a break from counting their
          money to jointly plead that the government cease and desist from even
          pondering regulations that might affect their financial interests, or
          as they like to call it, innovation. “Our two companies might not
          agree on everything, but this is not about our differences,” writes
          this group of vastly disparate perspectives and interests: Founding
          A16Z partners Marc Andreessen and Ben Horowitz, and Microsoft CEO
          Satya Nadella and President/Chief Legal Officer Brad Smith. A truly
          intersectional assemblage, representing both big business and big
          money. But it’s the little guys they’re supposedly looking out for.
          That is, all the companies that would have been affected by the latest
          attempt at regulatory overreach: SB 1047. Imagine being charged for
          improper open model disclosure! A16Z general partner Anjney Midha
          called it a “regressive tax” on startups and “blatant regulatory
          capture” by the Big Tech companies that could, unlike Midha and his
          impoverished colleagues, afford the lawyers necessary to comply.
          Except that was all disinformation promulgated by Andreessen Horowitz
          and the other moneyed interests that might actually have been affected
          as backers of billion-dollar enterprises. In fact, small models and
          startups would have been only trivially affected because the proposed
          law specifically protected them. It’s odd that the very type of
          purposeful cutout for “Little Tech” that Horowitz and Andreessen
          routinely champion was distorted and minimized by the lobbying
          campaign they and others ran against SB 1047. (The architect of that
          bill, California State Senator Scott Wiener, talked about this whole
          thing recently at Disrupt.) That bill had its problems, but its
          opposition vastly overstated the cost of compliance and failed to
          meaningfully support claims that it would chill or burden startups.
          It’s part of the established playbook that Big Tech — which, despite
          their posturing, Andreessen and Horowitz are closely aligned with —
          runs at the state level, where it can win (as with SB 1047), meanwhile
          asking for federal solutions that it knows will never come, or which
          will have no teeth due to partisan bickering and congressional
          ineptitude on technical issues. This joint statement of “policy
          opportunity” is the latter part of the play: after torpedoing SB 1047,
          they can say they only did so with an eye to supporting a federal
          policy. No matter that we are still waiting on the federal privacy law
          that tech companies have pushed for a decade while fighting state
          bills. And what policies do they support? “A variety of responsible
          market-based approaches,” in other words: hands off our money, Uncle
          Sam. Regulations should have “a science and standards-based approach
          that recognizes regulatory frameworks that focus on the application
          and misuse of technology,” and should “focus on the risk of bad actors
          misusing AI.” What is meant by this is we shouldn’t have proactive
          regulation, but instead reactive punishments when unregulated products
          are used by criminals for criminal purposes. This approach worked
          great for that whole FTX situation, so I can see why they espouse it.
          “Regulation should be implemented only if its benefits outweigh its
          costs.” It would take thousands of words to unpack all the ways this
          idea, expressed so, in this context, is hilarious. But basically, what
          they are suggesting is that the fox be brought in on the henhouse
          planning committee. Regulators should “permit developers and startups
          the flexibility to choose which AI models to use wherever they are
          building solutions and not tilt the playing field to advantage any one
          platform.” The implication is that there is some sort of plan to
          require permission to use one model or another. Since that’s not the
          case, this is a straw man. Here’s a big one that I have to just quote
          in its entirety: The right to learn: copyright law is designed to
          promote the progress of science and useful arts by extending
          protections to publishers and authors to encourage them to bring new
          works and knowledge to the public, but not at the expense of the
          public’s right to learn from these works. Copyright law should not be
          co-opted to imply that machines should be prevented from using data —
          the foundation of AI — to learn in the same way as people. Knowledge
          and unprotected facts, regardless of whether contained in protected
          subject matter, should remain free and accessible. To be clear, the
          explicit assertion here is that software, run by billion dollar
          corporations, has the “right” to access any data because it should be
          able to learn from it “in the same way as people.” First off, no.
          These systems are not like people; they produce data that mimics human
          output in their training data. They are complex statistical projection
          software with a natural language interface. They have no more “right”
          to any document or fact than Excel. Second, this idea that “facts” —
          by which they mean “intellectual property” — are the only thing these
          systems are interested in and that some kind of fact-hoarding cabal is
          working to prevent them is an engineered narrative we have seen
          before. Perplexity has invoked the “facts belong to everyone” argument
          in its public response to being sued for alleged systematic content
          theft, and its CEO Aravind Srinivas repeated the fallacy to me on
          stage at Disrupt, as if they are being sued over knowing trivia like
          the distance from the Earth to the Moon. While this is not the place
          to embark on a full accounting of this particular straw man argument,
          let me simply point out that while facts are indeed free agents, the
          way they are created — say, through original reporting and scientific
          research — involves real costs. That is why the copyright and patent
          systems exist: not to prevent intellectual property from being shared
          and used widely, but to incentivize its creation by ensuring that they
          can be assigned real value. Copyright law is far from perfect and is
          probably abused as much as it is used. But it is not being “co-opted
          to imply that machines should be prevented from using data” — it is
          being applied to ensure that bad actors do not circumvent the systems
          of value that we have built around intellectual property. That is
          quite clearly the ask: let the systems we own and run and profit from
          freely use the valuable output of others without compensation. To be
          fair, that part is “in the same way as humans,” because it is humans
          who design, direct, and deploy these systems, and those humans don’t
          want to pay for anything they don’t have to, and don’t want
          regulations to change that. There are plenty of other recommendations
          in this little policy document, which are no doubt given greater
          detail in the versions they’ve sent directly to lawmakers and
          regulators through official lobbying channels. Some ideas are
          undoubtedly good, if also a little self-serving: “fund digital
          literacy programs that help people understand how to use AI tools to
          create and access information.” Good! Of course, the authors are
          heavily invested in those tools. Support “Open Data Commons—pools of
          accessible data that would be managed in the public’s interest.”
          Great! “Examine its procurement practices to enable more startups to
          sell technology to the government.” Awesome! But these more general,
          positive recommendations are the kind of thing you see every year from
          industry: invest in public resources and speed up government
          processes. These palatable but inconsequential suggestions are just a
          vehicle for the more important ones that I outlined above. Ben
          Horowitz, Brad Smith, Marc Andreessen, and Satya Nadella want the
          government to back off regulating this lucrative new development, let
          industry decide what regulations are worth the trade-off, and nullify
          copyright in a way that more or less acts as a general pardon for
          illegal or unethical practices that many suspect enabled the rapid
          rise of AI. Those are the policies that matter to them, whether kids
          get digital literacy or not. SpaceX will attempt to transfer
          propellant from one orbiting Starship to another as early as next
          March, a technical milestone that will pave the way for an uncrewed
          landing demonstration of a Starship on the moon, a NASA official said
          this week. Much has been made of Starship’s potential to transform the
          commercial space industry, but NASA is also hanging its hopes that the
          vehicle will return humans to the moon under the Artemis program. The
          space agency awarded the company a $4.05 billion contract for two
          human-rated Starship vehicles, with the upper stage (also called
          Starship) landing astronauts on the surface of the moon for the first
          time since the Apollo era. The crewed landing is currently scheduled
          for September 2026. Kent Chojnacki, deputy manager of NASA’s Human
          Landing System program, provided more detail on exactly how the agency
          is working with the space company as it looks toward that critical
          mission in an interview with Spaceflight Now. It will come as no
          surprise that NASA is paying close attention to Starship’s test
          campaign, which has notched five launches so far. SpaceX made history
          during the most recent test on October 13 when it caught the Super
          Heavy rocket booster mid-air using “chopsticks” attached to the launch
          tower for the first time. “We learn a lot each time [a launch]
          happens,” Chojnacki said. Chojnacki’s work history includes numerous
          roles in the Space Launch System program, which oversees the
          development of a massive rocket of the same name that is being built
          by a handful of traditional aerospace primes. The first SLS rocket
          launched the Artemis I mission in December 2023, and future rockets
          will launch the subsequent missions under the Artemis program. No part
          of the rocket is reusable, however, so NASA is spending upwards of $2
          billion on each launch vehicle. The first contracts for the SLS
          program were awarded over a decade ago under what’s known as a
          “cost-plus” model, which means that NASA pays a base amount plus
          expenses. (This type of contract has been stringently criticized for
          incentivizing long development timelines and high expenses.) In
          contrast, HLS contracts are “fixed-price” — so SpaceX receives a
          one-time $2.99 billion payment provided it meets certain milestones.
          Chojnacki said NASA has taken very different approaches to the HLS
          versus SLS program, even beyond the contracting model. “SLS was a very
          traditional NASA program. NASA laid out a very strict set of
          requirements and dictated propellant inventory, dictated all the
          things to the various elements. They flowed down. They were cost-plus
          programs where the aerospace companies would respond, and we would
          work in a very traditional manner,” he said. “Moving to HLS, we’re
          doing a lot of moving parts at one time. On SpaceX’s contract right
          now, for their initial landing, there are 27 system requirements. 27,
          and we kept it as loose as possible.” Under SpaceX’s contract, they
          must meet mandatory design reviews, but SpaceX can also propose
          additional milestones for payment. One requirement that SpaceX
          requested is the ship-to-ship propellant transfer demonstration. Those
          tests are set to begin around March 2025, with testing concluding in
          the summer, Chojnacki said. “That would be the first time that’s
          demonstrated on this scale, so that is a big building block. And once
          you’ve done that, you’ve really cracked open the opportunity to move
          massive amounts of payload and cargo outside of the Earth’s sphere. If
          you can have a Starship with propellant aggregation, that’s going to
          be the next step to doing an uncrewed demonstration.” In addition to
          the testing, the next major review of Starship will be the Critical
          Design Review (CDR) in Summer 2025, which is when NASA certifies that
          the company met all 27 of those system requirements. Chojnacki said
          NASA astronauts also meet with SpaceX once a month to provide input on
          Starship’s interior. The company is building mockups of the crew
          cabin, including the sleeping quarters and laboratory, at Boca Chica.
          NASA anticipates getting a design update this month before looking at
          it during the CDR next year. That isn’t the only place where NASA has
          offered its input: it also offered input on some aspects of the rocket
          design, like the vehicle’s cryogenic components, as well as conducting
          some testing on the thermal tiles that help keep the cryogenic fuels
          cold. If all goes to plan, SpaceX will land astronauts on the moon in
          September 2026. “That is definitively the date we’re working towards.
          We don’t have any known road blocks. We do have some first-time things
          that have to be demonstrated, and we have a plan in place to go
          demonstrate those.
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
