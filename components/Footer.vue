<template>
  <footer>
    <div class="main">
      <div class="container-lg pb-4 position-relative">
        <div class="maskIcon">
          <img src="/images/logo_icon.svg" height="376" alt="椽盛資本有限公司" />
        </div>        
        <div class="row">
          <div class="col-lg-4">
            <div class="mb-3"> <img src="/images/logo_text.svg" height="100" alt="椽盛資本有限公司" /> </div>
            <address>
              <span class="mb-2 d-inline-block">{{['椽盛資本有限公司', '椽盛资本有限公司', 'Rafter Capital Limited'][$ti()]}}</span> <br/>
              <div class="op-08"> {{['辦公時間', '办公时间', 'Office Hours'][$ti()]}} </div>
              <div> {{['平日 | 上午9點至下午6點', '平日 | 上午9点至下午6点', 'Market trading day: 9am-6pm'][$ti()]}} </div>
              <div> {{['星期六及公眾假期 | 休息', '星期六及公众假期 | 休息', 'Saturdays and public holidays: Closed'][$ti()]}} </div>
            </address>
          </div>
          <div class="col-lg-4 col-6">
            <div class="mb-4">
              <div> {{['聯絡電話', '联络电话', 'Contact Number'][$ti()]}} </div>
              <div> <a :href="`tel:${$store.state.prex} ${$store.state.tel}`" target="_blank">{{$store.state.prex}} {{$store.state.tel}}</a> </div>
            </div>              
            <div class="mb-4">
              <div> {{['聯絡電郵', '联络电邮', 'Email Address'][$ti()]}} </div>
              <div> <a :href="`mailto: ${$store.state.email}`" target="_blank">{{$store.state.email}}</a> </div>
            </div>                    
            <div class="mb-4">
              <span> {{['辦事處地址', '办事处地址', 'Office Address'][$ti()]}} </span> <br/>
              <a :href="$store.state.googleMap" target="_blank">
                <span v-html="$store.state.address[$i18n.locale]"></span>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-6">
            <div class="mb-2 font-weight-bold"> {{['網站地圖', '网站地图', 'Site Map'][$ti()]}} </div>
            <div class="mb-4">
              <div> <nuxt-link :to="localePath('/about')"> {{['關於椽盛', '关於椽盛', 'About Us'][$ti()]}} </nuxt-link> </div>
              <div> <nuxt-link :to="localePath('/services')"> {{['我們的業務', '我们的业务', 'Our Services'][$ti()]}} </nuxt-link> </div>
              <div> <nuxt-link :to="localePath('/news')"> {{['市場資訊', '市场资讯', 'Market News'][$ti()]}} </nuxt-link> </div>
              <div> <nuxt-link :to="localePath('/support')"> {{['聯絡我們', '联络我们', 'Contact Us'][$ti()]}} </nuxt-link> </div>
            </div>
            <div class="mb-4">
              <div> <nuxt-link :to="switchLocalePath('zh')">繁體</nuxt-link> </div>
              <div> <nuxt-link :to="switchLocalePath('cn')">简体</nuxt-link> </div>
              <div> <nuxt-link :to="switchLocalePath('en')">ENG</nuxt-link> </div>
            </div>            
          </div>                    
        </div>
        <div class="row">
          <div class="col-12">                    
            <a :href="`tel:${$store.state.prex} ${$store.state.tel}`" target="_blank" class="mr-4">
              <svg viewBox="0 0 16 16"><path d="M483.34,3856.42a.69.69,0,0,0-1-.11l-.06.05-1,1a1.7,1.7,0,0,0-.45,1.77,17.74,17.74,0,0,0,10.77,10.77,1.7,1.7,0,0,0,1.77-.45l1-1a.69.69,0,0,0,0-1l-.07-.06-2.3-1.79a.68.68,0,0,0-.58-.12l-2.19.54a1.75,1.75,0,0,1-1.66-.45l-2.46-2.46a1.77,1.77,0,0,1-.46-1.66l.55-2.19a.68.68,0,0,0-.12-.58Zm-1.77-.81a1.74,1.74,0,0,1,2.46,0,1.14,1.14,0,0,1,.15.16l1.79,2.31a1.73,1.73,0,0,1,.32,1.49l-.55,2.19a.66.66,0,0,0,.18.64l2.46,2.46a.66.66,0,0,0,.64.18l2.19-.55a1.73,1.73,0,0,1,1.49.32l2.31,1.79a1.74,1.74,0,0,1,.16,2.61l-1,1a2.79,2.79,0,0,1-2.88.7,18.75,18.75,0,0,1-11.43-11.43,2.79,2.79,0,0,1,.7-2.88l1-1Z" transform="translate(-479.68 -3855.1)"/></svg>
            </a>
            <a :href="`mailto: ${$store.state.email}`" target="_blank" class="mr-4">
              <svg class="w1" viewBox="0 0 16 12"><path d="M518.76,3859.1a2,2,0,0,1,2-2h12a2,2,0,0,1,2,2v8a2,2,0,0,1-2,2h-12a2,2,0,0,1-2-2Zm2-1a1,1,0,0,0-1,1v.21l7,4.2,7-4.2v-.21a1,1,0,0,0-1-1Zm13,2.38-4.71,2.82,4.71,2.9Zm0,6.88-5.64-3.48-1.32.8-1.33-.8-5.64,3.47a1,1,0,0,0,1,.75h12A1,1,0,0,0,533.72,3867.36Zm-14-1.16,4.71-2.9-4.71-2.82Z" transform="translate(-518.76 -3857.1)"/></svg>
            </a>
            <a :href="$store.state.googleMap" target="_blank" class="mr-4">
              <svg viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
            </a>                
          </div>
        </div>
      </div>
    </div>
    <div class="container-lg my-4">
      <div class="row">
        <div class="col-lg-8 text-center text-lg-left mb-2">
          <nuxt-link :to="localePath('/disclaimer')" class="mr-4 text-hover-shadow"> {{['免責聲明', '免责声明', 'Disclaimer'][$ti()]}} </nuxt-link>
          <nuxt-link :to="localePath('/privacy')" class="mr-4 text-hover-shadow"> {{['私隱政策', '私隐政策', 'Privacy Policy'][$ti()]}} </nuxt-link>
        </div>
        <div class="col-lg-4 text-center text-lg-left mb-2">
          ©{{new Date().getFullYear()}} {{['椽盛資本有限公司 版權所有', '椽盛资本有限公司 版权所有', 'Rafter Capital Limited.'][$ti()]}}
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer{
    & .main{
      background-image: url('/images/footerbg.png');
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      padding-top: 80px;
      color: white;
      & a{
        color: rgba(255,255,255,.8);
        &:hover{
          color: white;
          text-shadow: 0 0 4px rgba(255,255,255,0.85);
        }
      }
      & .op-08{
        opacity: 0.8;
      }
      & svg{
        fill: rgba(255,255,255,.8);
        &:hover{
          fill: white;
          filter: drop-shadow(0px 0px 4px rgba(255,255,255,0.85));  
        }
      }
      & .maskIcon{
        position: absolute;
        top: -40px;
        left: -240px;
        @media (max-width: 767px) {
            left: -190px;
        }
      }
    }
    & .text-hover-shadow{
      &:hover{
        text-shadow: 0 0 .5rem rgba(var(--lightblue), .35);
      }
    }
  }
</style>