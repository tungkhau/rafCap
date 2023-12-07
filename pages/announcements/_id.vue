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
            <b-breadcrumb-item :to="localePath('/announcements')">
              {{['公告及通告', '公告及通告', 'Announcements and notices'][$ti()]}} 
            </b-breadcrumb-item>
            <b-breadcrumb-item active >
              {{['内文', '内文', 'Content of Announcements'][$ti()]}}
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
                    </svg> {{page.date}}
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
                        `公告內容具時效性，如果您對本文章內容有任何疑問，請諮詢本公司職員確實。`, 
                        `公告内容具时效性，如果您对本文章内容有任何疑问，请谘询本公司职员确实。`, 
                        `These notices are time sensitive/can change with time. If you have any queries about the content of this page, please feel free to reach out to us. Our staff would be more than happy to assist you.`
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
      page: null,
    }
  },
  async mounted() {
    this.page = await(await fetch('/api/alerts/graph/slug/'+this.$route.params.id)).json();
    this.loading = false;
  },  
}
</script>

<style lang="scss" scoped>
  .banner{
    background-image: url('/images/iStock-485967825.jpg');
  }
</style>