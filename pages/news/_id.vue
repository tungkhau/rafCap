<template>
  <div>
    <Header />
      <main>
        <section class="banner">
          <div class="mask"></div>
          <div class="caption">
            <h2>
              {{['新聞', '新闻', 'NEWS'][$ti()]}}
            </h2>
            <p>
              {{['市場資訊', '市场资讯', 'Market News'][$ti()]}} 
            </p>
          </div>
        </section>
        <b-breadcrumb>
          <div class="container-lg d-flex text-nowrap overflow-auto">
            <b-breadcrumb-item :to="localePath('/')">
              {{['首頁', '首页', 'HOME'][$ti()]}}
            </b-breadcrumb-item>
            <b-breadcrumb-item :to="localePath('/news')">
              {{['市場資訊', '市场资讯', 'Market News'][$ti()]}} 
            </b-breadcrumb-item>
            <b-breadcrumb-item active >
              {{['内文', '内文', 'Content of News'][$ti()]}}
            </b-breadcrumb-item>            
          </div>
        </b-breadcrumb>    
        <section class="my-5" v-if="page">
          <div class="container-lg">
            <div class="row">
              <div class="col-1 writing-vertical my-5 d-flex align-items-center text-darkblue">
                  <svg width="16" height="16" class="bi bi-calendar2-event mb-3 text-darkblue" viewBox="0 0 16 16">
                      <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                  </svg> 
                  {{page.date}}                    
              </div>
              <div class="col-lg-9 col-11">
                <h4 class="text-darkblue text-serif font-weight-bold ">{{page.title}}</h4>
                <div class="my-4">
                  <span v-html="page.content.html"></span>
                </div>
                <div class="bg-gray my-5 rounded-lg py-4 px-3 shadow-sm">
                    <div class="text-secondary small mb-3">
                      {{['免責聲明', '免责声明', 'Disclaimer'][$ti()]}}
                    </div>
                    <div class="small">
                      <span v-html='[
                        `本文章及其提供的任何意見乃取自或基於相信為可靠的來源，但不保證其準確性。因本文章而造成的任何間接損失恕不負責。<br/>
                        本文章僅作資訊用途，並非出售之要約或買入之邀請。尤其是，任何持股和股票示例僅用於說明目的，不應視為投資建議。所表達的觀點是演講者在準備時的觀點，並且將來可能會更改。獲得本文章的任何人士有責任了解及遵守相關司法管轄區的所有適用法律及規例。<br/>
                        如果您對本文章內容有任何疑問，請諮詢您個人的獨立理財顧問。`, 
                        `本文章及其提供的任何意见乃取自或基於相信为可靠的来源，但不保证其准确性。因本文章而造成的任何间接损失恕不负责。<br/>
                        本文章仅作资讯用途，并非出售之要约或买入之邀请。尤其是，任何持股和股票示例仅用於说明目的，不应视为投资建议。所表达的观点是演讲者在准备时的观点，并且将来可能会更改。获得本文章的任何人士有责任了解及遵守相关司法管辖区的所有适用法律及规例。<br/>
                        如果您对本文章内容有任何疑问，请谘询您个人的独立理财顾问。`, 
                        `This article and any opinions it provides are taken from or based on sources believed to be reliable, but are not guaranteed to be accurate. We are not responsible for any consequential damages caused by this article.<br/>
                        This article is for informational purposes only and is not an offer to sell or an invitation to buy. In particular, any holdings and stock examples are for illustrative purposes only and should not be considered investment advice. The views expressed are those of the speaker at the time of preparation and may change in the future. Anyone accessing this article is responsible for knowing and complying with all applicable laws and regulations in the relevant jurisdiction.<br/>
                        If you have any questions about the content of this article, please consult your personal independent financial advisor.`
                      ][$ti()]'></span>                      
                    </div>                    
                </div>
              </div>
            </div>
          </div>        
          
        </section> 
        <section class="my-5 py-5 text-center" v-else>
          <b-spinner variant="primary" type="grow" label="Spinning" v-show="loading"></b-spinner>
          <span v-show="!loading">
            {{['文章已失效', '文章已失效', 'News not found.'][$ti()]}}
          </span> 
        </section>   
      </main>
    <Footer />
  </div>    
</template>

<script>
export default {
  data(){
    return {
      loading: true,
      items: [],
      page: null,
    }
  },
  async mounted() {
    this.items = await this.getNews(this.$i18n.locale);
    let page = this.items.find(item => item.title === this.$route.params.id) || null;
    if(!page?.content) {
      page = await(await fetch('/api/news/graph/slug/'+this.$route.params.id)).json();
    }
    this.page = page;
    this.loading = false;
  },  
  methods: {
    async getNews(lang){
      if(localStorage.getItem("news_"+lang)){
        let item = JSON.parse(localStorage.getItem("news_"+lang));
        if (Date.now() < item.expiry) {
          return item.value;
        }
        localStorage.removeItem("news_"+lang);
      }
      let rss = await(await fetch('/api/news/rss/'+lang)).json();
      rss.forEach( r => {
        r.date = new Date(r.isoDate).toLocaleString('sv-SE', { year: "numeric", month: "2-digit", day: "2-digit" });
        r.slug = r.title;
        const html = r.content;
        r.content = { html: html };
      });
      let news = await(await fetch('/api/news/graph/'+lang)).json();
      let json = [...news, ...rss];
      localStorage.setItem("news_"+lang, JSON.stringify({value: json, expiry: Date.now() + this.$store.state.expires }) );
      return json;
    },    
  }
}
</script>

<style lang="scss" scoped>
  .banner{
    background-image: url('/images/concept.jpeg');
  }

</style>