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
            <b-breadcrumb-item active>
              {{['市場資訊', '市场资讯', 'Market News'][$ti()]}} 
            </b-breadcrumb-item>
          </div>
        </b-breadcrumb>    
        <section class="my-5">
          <div class="container-lg">
            <div class="row">
              <div class="col-lg-12">
                <h4 class="text-darkblue text-serif mb-4">
                  {{['市場資訊', '市场资讯', 'Market News'][$ti()]}} 
                </h4>
                <p class="text_18 text-serif">
                  {{[
                    '金融市場瞬息萬變，我們為您搜羅本地及環球指數、財經新聞、市場統計等資訊，助您洞悉變化，運籌帷幄。', 
                    '金融市场瞬息万变，我们为您搜罗本地及环球指数丶财经新闻丶市场统计等资讯，助您洞悉变化，运筹帷幄。', 
                    'Within the ever-changing financial market, we will gather local and worldwide indices, financial news, market statistics, and more for you to assist you in adapting to changes, and to map out an investment strategy for you.'
                  ][$ti()]}}
                </p>
              </div>
            </div>
            <div class="row my-5">
              <div class="px-3 mb-3 d-flex align-items-center">
                <b-form-datepicker v-model="filter" :placeholder="['發佈日期', '发布日期', 'Release date'][$ti()]" /> 
                <b-button variant="light ml-2" v-show="filter" @click="filter = null">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser" viewBox="0 0 16 16">
                    <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
                  </svg>
                </b-button>
              </div>
              <div class="col-12">
                <b-table striped hover show-empty responsive="md" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filterText" :filter-included-fields="filterOn" @filtered="onFiltered">
                  <template #empty>
                    <div class="text-center" >
                      <b-spinner variant="primary" type="grow" label="Spinning" v-show="loading"></b-spinner>
                      <span v-show="!loading">
                        {{['無新聞', '无新闻', 'No Content'][$ti()]}} 
                      </span>
                    </div>
                  </template>
                  <template #cell(guid)="data">
                    <span v-if="!data.item.isoDate">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </span>
                    <span v-else>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                      </svg>                      
                    </span>
                  </template>                                     
                  <template #cell(slug)="data">
                    <nuxt-link :to="localePath(`/news/${encodeURIComponent(data.item.slug)}`)" class="text-darkblue d-flex align-items-center text-nowrap">
                      {{['更多詳情', '更多详情', 'MORE'][$ti()]}} 
                      <svg width="16" height="16" class="bi bi-chevron-right text-darkblue ml-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </nuxt-link>                   
                  </template>
                </b-table>
                <b-pagination class="my-5" v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="left" pills></b-pagination>   
              </div>
            </div>
          </div>
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
      fields: [
        {
          key: 'guid',
          label: ['置頂', '置顶', 'PIN'][this.$ti()],
          tdClass: 'w-1 text-darkblue'
        },        
        {
          key: 'date',
          label: ['日期', '日期', 'DATE'][this.$ti()],
          sortable: true,
          class: 'text-nowrap',
        },
        {
          key: 'title',
          label: ['標題', '标题', 'TITLE'][this.$ti()],
          class: 'min-width-375'
        },
        {
          key: 'slug',
          label: ['鏈結', '链结', 'URL'][this.$ti()],
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 15,
      filter: null,
      filterOn: ['date']
    }
  },
  computed:{
    filterText(){
      if(!this.filter) return '';
      return new Date(this.filter).toLocaleString('sv-SE', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }
  },
  async mounted() {
    this.items = await this.getNews(this.$i18n.locale);
    this.totalRows = this.items.length;
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
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1
    }
  }

}
</script>

<style lang="scss" scoped>
  .banner{
    background-image: url('/images/concept.jpeg');
  }

</style>