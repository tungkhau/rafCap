<template>
  <div>
    <Header />
      <main>
        <section class="banner">
          <div class="mask"></div>
          <div class="caption">
            <h2>
              {{['公告', '公告', 'ANNOUNCEMENTS'][$ti()]}}
            </h2>
            <p>
              {{['公告及通告', '公告及通告', 'Announcements and notices'][$ti()]}} 
            </p>
          </div>
        </section>
        <b-breadcrumb>
          <div class="container-lg d-flex text-nowrap overflow-auto">
            <b-breadcrumb-item :to="localePath('/')">
              {{['首頁', '首页', 'HOME'][$ti()]}}
            </b-breadcrumb-item>
            <b-breadcrumb-item active>
              {{['公告及通告', '公告及通告', 'Announcements and notices'][$ti()]}} 
            </b-breadcrumb-item>
          </div>
        </b-breadcrumb>    
        <section class="my-5">
          <div class="container-lg">
            <div class="row">
              <div class="col-lg-12">
                <h4 class="text-darkblue text-serif mb-4">
                  {{['公告及通告', '公告及通告', 'Announcements and notices'][$ti()]}} 
                </h4>
              </div>
            </div>
            <div class="row my-3">
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
                    <div class="text-center">
                      <b-spinner variant="primary" type="grow" label="Spinning" v-show="loading"></b-spinner>
                      <span v-show="!loading">                      
                        {{['無公告', '无公告', 'No Content'][$ti()]}} 
                      </span>
                    </div>
                  </template>                
                  <template #cell(slug)="data">
                    <nuxt-link :to="localePath(`/announcements/${data.item.slug}`)" class="text-darkblue d-flex align-items-center text-nowrap">
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
      loading: false,
      items: [],
      fields: [
        {
          key: 'date',
          label: ['日期', '日期', 'DATE'][this.$ti()],
          sortable: true,
          class: 'text-nowrap'
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
    this.items = await this.getAlerts(this.$i18n.locale);
    this.totalRows = this.items.length;
    this.loading = false;
  },  
  methods: {
    async getAlerts(lang){
      if(localStorage.getItem("alerts_"+lang)){
        let item = JSON.parse(localStorage.getItem("alerts_"+lang));
        if (Date.now() < item.expiry) {
          return item.value;
        }
        localStorage.removeItem("alerts_"+lang);
      }
      let json = await(await fetch('/api/alerts/graph/'+lang)).json();
      localStorage.setItem("alerts_"+lang, JSON.stringify({value: json, expiry: Date.now() + this.$store.state.expires }) );
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
    background-image: url('/images/iStock-485967825.jpg');
  }

</style>