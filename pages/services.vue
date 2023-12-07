<template>
  <div>
    <Header />
      <main>
        <section class="banner">
          <div class="mask"></div>
          <div class="caption">
            <h2>
              {{['服務', '服务', 'SERVICES'][$ti()]}}
            </h2>
            <p>
              {{['我們的業務', '我们的业务', 'Our Services'][$ti()]}}
            </p>
          </div>
        </section>     
        <section class="my-5 text-serif">
          <div class="container-lg">
            <h4 class="text-darkblue text-center">
              {{['我們的業務', '我们的业务', 'Our Services'][$ti()]}}
            </h4>
            <div class="text_18 my-4 text-center">
              {{[
                '提供多元化的投資理財產品及服務，照顧客戶各方面的投資需要，讓客戶隨時隨地緊貼大市，把握投資機遇', 
                '提供多元化的投资理财产品及服务，照顾客户各方面的投资需要，让客户随时随地紧贴大市，把握投资机遇', 
                'To provide a range of diversified investment and wealth management products and services, to take care of our clients’ investment needs in all aspects, so that our clients can follow the markets at anytime, anywhere, to grasp all investment opportunities.'
              ][$ti()]}}
            </div>
            <div class="horizontal-division my-3 my-lg-4"></div>  
          </div> 
          <b-tabs content-class="mt-3" align="center" v-model="tabIndex">
              <b-tab>
                <template #title>
                  <span @click="$router.push('#p1')">
                  {{['全權委託資產管理賬戶', '全权委托资产管理账户', 'Discretionary Asset Management Accounts'][$ti()]}}
                  </span>
                </template>    
                <div class="container-lg">
                  <div class="row">
                    <div class="col-lg-6 my-auto">
                      <div class="text-darkblue text_21 font-weight-bold mb-3">
                        {{['全權委託資產管理賬戶', '全权委托资产管理账户', 'Discretionary Asset Management Accounts'][$ti()]}}
                      </div>
                      <div>
                        {{[
                          '本公司致力為客戶提供專業之資產管理服務。根據環球高資產個人及機構投資人客户個別的風險取向及回報期望等要求，以專業、獨立之管理方式，務求為客户提供度身訂造的專項委托投資服務於各種市況下賺取最大的回報。', 
                          '本公司致力为客户提供专业之资产管理服务。根据环球高资产个人及机构投资人客户个别的风险取向及回报期望等要求，以专业丶独立之管理方式，务求为客户提供度身订造的专项委托投资服务於各种市况下赚取最大的回报。', 
                          'Our company strives to provide professional asset management services to our clients. According to respective risk appetite and investment expectations from global individual high net worth clients and institutional investors, we will execute these requests in a professional and independent management style, so as to tailor-make specific investment portfolios under all market circumstances for our clients to maximize their returns.'
                        ][$ti()]}}                        
                      </div>
                    </div>
                    <div class="col-lg-6 my-3">
                      <div class="embed-responsive embed-responsive-21by9">
                        <div class="embed-responsive-item" style="background-image: url('/images/concept.jpeg'); background-size: cover; background-repeat: no-repeat; background-position: center top;">
                        </div>
                      </div>                       
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab >
                <template #title>
                  <span @click="$router.push('#p2')">
                    {{['椽盛投資基金', '椽盛投资基金', 'Rafter investment fund'][$ti()]}}
                  </span>
                </template>
                <div class="container-lg"> 
                  <div class="row">
                    <div class="col-lg-6 my-3 order-2 order-lg-1">
                      <div class="embed-responsive embed-responsive-21by9">
                        <div class="embed-responsive-item" style="background-image: url('/images/concept_2.jpeg'); background-size: cover; background-repeat: no-repeat; background-position: center top;">
                        </div>
                      </div>                       
                    </div>                    
                    <div class="col-lg-6 my-auto order-1 order-lg-2">
                      <div class="text-darkblue text_21 font-weight-bold mb-3">
                        {{['椽盛投資基金', '椽盛投资基金', 'Rafter investment fund'][$ti()]}}
                      </div>
                      <div>
                        {{[
                          '椽盛投資基金由專業基金經理管理，透過研究宏觀，行業，個股分析以助駕馭各種市況及早著先機投資環球股市。', 
                          '椽盛投资基金由专业基金经理管理，透过研究宏观，行业，个股分析以助驾驭各种市况及早着先机投资环球股市。', 
                          'Rafter investment fund is managed by seasoned fund managers. Through an analytical look at the macro level, industry level, and the individual stock level to assist us in harnessing various market conditions and capturing early opportunities to invest in global stock markets.'
                        ][$ti()]}}                         
                      </div>  
                    </div>
                  </div>                                 
                </div>                
              </b-tab>
              <b-tab>
                <template #title>
                  <span @click="$router.push('#p3')">
                  {{['椽盛Pre IPO基金', '椽盛Pre IPO基金', 'Rafter pre-IPO fund'][$ti()]}}
                  </span>
                </template>
                <div class="container-lg">
                  <div class="row">
                    <div class="col-lg-6 my-auto">
                      <div class="text-darkblue text_21 font-weight-bold mb-3">
                        {{['椽盛Pre IPO基金', '椽盛Pre IPO基金', 'Rafter pre-IPO fund'][$ti()]}}
                      </div>
                      <div>
                        {{[
                          '椽盛Pre IPO基金聚焦研究即將上市優質公司的行業、背景和公司潛力，於公司上市前投資其股權。', 
                          '椽盛Pre IPO基金聚焦研究即将上市优质公司的行业丶背景和公司潜力，於公司上市前投资其股权。', 
                          'Rafter pre-IPO fund focuses on researching the outstanding pre-IPO companies’ industry, background, and company potential to acquire and invest in the stock options of these companies prior to their listing.'
                        ][$ti()]}}                         
                      </div> 
                    </div>
                    <div class="col-lg-6 my-3">
                      <div class="embed-responsive embed-responsive-21by9">
                        <div class="embed-responsive-item" style="background-image: url('/images/concept_3.webp'); background-size: cover; background-repeat: no-repeat; background-position: center top;">
                        </div>
                      </div>                       
                    </div>
                  </div>

                </div>                
              </b-tab>
          </b-tabs>            
        </section>
      </main>
    <Footer />
  </div>    
</template>

<script>
  export default {
    data() {
      return {
        tabIndex: this.$route.hash === '#p1' ? 0 : this.$route.hash === '#p2' ? 1 : this.$route.hash === '#p3' ? 2 : 0,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .banner{
    background-image: url('/images/concept_3.webp');
  }
</style>