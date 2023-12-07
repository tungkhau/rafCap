<template>
  <header :class="['position-absolute', 'w-100', {'small-header' : $route.path !== '/'}]">
    <div class="container-lg">
      <div class="d-flex text-white align-items-start">
        <nuxt-link :to="localePath('/')">
          <img src="/images/logo.svg" class="logo" alt="椽盛資本有限公司" />
        </nuxt-link>
        <div class="ml-auto my-1 pt-1 d-flex overflow-auto">
          <div class="ml-auto mr-3 mr-md-5 d-flex align-items-end opacity-08">
            <svg class="mr-1 x075" style="margin-bottom: 3px" fill="currentColor" viewBox="0 0 32 32"><path d="M1122.5,61.27a1.34,1.34,0,0,0-1.9-.24l-.13.11-2.07,2.07a3.45,3.45,0,0,0-.9,3.54,35.35,35.35,0,0,0,21.56,21.55,3.43,3.43,0,0,0,3.54-.9l2.06-2.07a1.36,1.36,0,0,0,0-1.91l-.13-.12-4.62-3.58a1.34,1.34,0,0,0-1.16-.25l-4.38,1.1a3.53,3.53,0,0,1-3.31-.92l-4.91-4.92a3.46,3.46,0,0,1-.92-3.31l1.09-4.38a1.31,1.31,0,0,0-.24-1.16ZM1119,59.63a3.5,3.5,0,0,1,4.94,0,3.11,3.11,0,0,1,.29.33l3.58,4.61a3.49,3.49,0,0,1,.63,3l-1.09,4.38a1.35,1.35,0,0,0,.36,1.28l4.91,4.92a1.37,1.37,0,0,0,1.29.35l4.38-1.09a3.46,3.46,0,0,1,3,.63l4.62,3.59a3.49,3.49,0,0,1,.32,5.22l-2.07,2.07a5.54,5.54,0,0,1-5.75,1.4,37.5,37.5,0,0,1-22.86-22.86,5.56,5.56,0,0,1,1.41-5.75l2.06-2.07Z" transform="translate(-1115.19 -58.61)"/></svg>
            <a :href="`tel:${$store.state.prex} ${$store.state.tel}`" target="_blank">
              <div class="d-none d-sm-block"> {{$store.state.prex}} {{$store.state.tel}} </div>
              <div class="small opacity-08 compact text-nowrap" > {{['交易日', '交易日', 'Workday'][$ti()]}} 9:00 - 18:00 </div>
            </a>
          </div>
          <div class="ml-auto d-flex align-items-end opacity-08">
            <svg class="mr-1 x075" style="margin-bottom: 5px"  fill="currentColor" viewBox="0 0 32 24"><path d="M1324.26,66.58a4,4,0,0,1,4-4h24a4,4,0,0,1,4,4v16a4,4,0,0,1-4,4h-24a4,4,0,0,1-4-4Zm4-2a2,2,0,0,0-2,2V67l14,8.4,14-8.4v-.43a2,2,0,0,0-2-2Zm26,4.77L1344.84,75l9.42,5.79Zm-.07,13.75-11.28-6.94-2.65,1.59-2.66-1.59-11.28,6.94a2,2,0,0,0,1.94,1.48h24A2,2,0,0,0,1354.19,83.1Zm-27.93-2.31,9.41-5.79-9.41-5.65Z" transform="translate(-1324.26 -62.58)"/></svg>
            <a :href="`mailto: ${$store.state.email}`">
              <div class="d-none d-sm-block"> {{$store.state.email}} </div>
              <div class="small opacity-08 compact text-nowrap" > {{['一般查詢', '一般查询', 'General Enquiries'][$ti()]}} </div>
            </a>
          </div>
        </div>
        <div class="text-right d-none d-sm-block ml-3 ml-md-5 mt-auto position-relative">
          <b-dropdown toggle-class="p-0" variant="transparent" size="sm" menu-class="bg-glass" right no-caret >
            <template #button-content>
              <div class="text-white opacity-08 d-flex align-items-center small">
                <svg class="mr-1 x075" fill="currentColor" viewBox="0 0 16 16"><path d="M1415,19.26a8,8,0,1,0,8,8A8,8,0,0,0,1415,19.26Zm0,1a7.32,7.32,0,0,1,1.76.23l-1.68,1.42a.75.75,0,0,0-.34.69.76.76,0,0,0,.42.64l.35.18v2.07a.47.47,0,0,0-.17,0,.68.68,0,0,0-.59.32l-.57.93a1,1,0,0,0-.73.3l-.18.19a.74.74,0,0,0-.23.54.76.76,0,0,0,.23.55l.18.18v.31h-.71l-.73-1.46a.77.77,0,0,0-.57-.42.76.76,0,0,0-.67.22l-.63.62h-2.08a4.36,4.36,0,0,1,0-.51A7,7,0,0,1,1415,20.29Zm-6.79,8.52h1.93a1,1,0,0,0,.73-.31l.37-.37.57,1.14a1,1,0,0,0,.92.57h.72a1,1,0,0,0,1-1v-.3a1,1,0,0,0-.3-.72h0a1,1,0,0,0,.88-.5l.35-.58a1.29,1.29,0,0,0,.35,0,.78.78,0,0,0,.78-.77V23.45a1,1,0,0,0-.57-.93l1.91-1.6a6.94,6.94,0,0,1,3.75,8.44,1.09,1.09,0,0,0-.13-.17l-.16-.16v-.1a1.16,1.16,0,0,0-1.16-1.16H1420a1.06,1.06,0,0,0-.5.12,1.25,1.25,0,0,0-.54-.12h-.39a1.34,1.34,0,0,0-.75.24l-.76.55-1.24.49a1.27,1.27,0,0,0-.81,1.19v.33a1.32,1.32,0,0,0,.38.92l.39.38a1.54,1.54,0,0,0,1.09.45h.33a1.58,1.58,0,0,0,.38,0l.59-.15.35.35a1.58,1.58,0,0,0,.62.37,7,7,0,0,1-10.93-4Zm12,3.08h-.57a.51.51,0,0,1-.37-.15l-.42-.42a.88.88,0,0,0-.82-.23l-.68.18h-.46a.48.48,0,0,1-.36-.15l-.39-.38a.26.26,0,0,1-.07-.19v-.33a.26.26,0,0,1,.16-.24l1.27-.5.18-.1.76-.55a.28.28,0,0,1,.15,0h.39a.26.26,0,0,1,.24.15l.17.42a.13.13,0,0,0,.12.08h.12a.14.14,0,0,0,.13-.09l.13-.47a.13.13,0,0,1,.13-.09h.19a.12.12,0,0,1,.13.12v.42a.23.23,0,0,0,.08.18l.38.39a.51.51,0,0,1,.15.36v.61A6.46,6.46,0,0,1,1420.22,31.89Z" transform="translate(-1407.03 -19.26)"/></svg>
                <span class="mr-1 d-none d-sm-block">{{ $i18n.locale === 'zh' ? '繁體' : $i18n.locale === 'cn' ? '简体' : $i18n.locale === 'en' ? 'ENG' : '-'}}</span>
                <svg class="x05" fill="currentColor" viewBox="0 0 11.14 6"><path d="M1502.51,24.13a.43.43,0,0,1,.61,0h0L1508,29l4.84-4.84a.42.42,0,0,1,.6,0,.43.43,0,0,1,0,.61l-5.14,5.14a.42.42,0,0,1-.6,0h0l-5.15-5.14a.45.45,0,0,1,0-.61Z" transform="translate(-1502.39 -24)"/></svg>
              </div>
            </template>
            <b-dropdown-item class="small text-center" link-class="py-0" :to="switchLocalePath('zh')">繁體中文</b-dropdown-item>
            <b-dropdown-item class="divider"></b-dropdown-item>
            <b-dropdown-item class="small text-center" link-class="py-0" :to="switchLocalePath('cn')">简体中文</b-dropdown-item>
            <b-dropdown-item class="divider"></b-dropdown-item>
            <b-dropdown-item class="small text-center mb-3" link-class="py-0" :to="switchLocalePath('en')">ENGLISH</b-dropdown-item>              
            <div class="divider-bottom"></div>
          </b-dropdown>
        </div>
        <div class="sidebarBtn d-flex d-sm-none" role="button" v-b-toggle.sidebar>
          <div class="divider-1"></div>
          <div class="divider-2 mx-1"></div>
          <div class="divider-3"></div>
        </div>        
      </div>
      <nav class="d-none d-sm-block">
        <ul class="list-unstyled m-0 d-flex align-items-center justify-content-between text-white py-1">
          <li :class="{active : $route.path === '/'}">
            <nuxt-link :to="localePath('/')">
              {{['首頁', '首页', 'HOME'][$ti()]}}
              <div class="small opacity-08 compact">
                {{['主目錄', '主目录', 'Home Page'][$ti()]}}
              </div>
            </nuxt-link>
          </li>
          <li class="divider"></li>
          <li :class="{active : $route.path.startsWith('/about')}">
            <nuxt-link :to="localePath('/about')" >
              {{['簡介', '简介', 'ABOUT'][$ti()]}}
              <div class="small opacity-08 compact">
                {{['關於椽盛', '关於椽盛', 'About Us'][$ti()]}}
              </div>
            </nuxt-link>
          </li>
          <li class="divider"></li>
          <li :class="{active : $route.path.startsWith('/product')}">
            <nuxt-link :to="localePath('/services')">
              {{['服務', '服务', 'SERVICES'][$ti()]}}
              <div class="small opacity-08 compact">
                {{['我們的業務', '我们的业务', 'Our Services'][$ti()]}}
              </div>
            </nuxt-link>
          </li>
          <li class="divider"></li>
          <li :class="{active : $route.path.startsWith('/news')}">
            <nuxt-link :to="localePath('/news')">
              {{['新聞', '新闻', 'NEWS'][$ti()]}}
              <div class="small opacity-08 compact"> 
                {{['市場資訊', '市场资讯', 'Market News'][$ti()]}} 
              </div>
            </nuxt-link>
          </li>
          <li class="divider"></li>
          <li :class="{active : $route.path.startsWith('/support')}">
            <nuxt-link :to="localePath('/support')">
              {{['支援', '支援', 'SUPPORT'][$ti()]}}
              <div class="small opacity-08 compact"> 
                {{['聯絡我們', '联络我们', 'Contact Us'][$ti()]}}
              </div>
            </nuxt-link>
          </li> 
          <li class="divider"></li>
          <li >
            <nuxt-link :to="localePath('/announcements')" class="btn btn-outline-light btn-sm" > 
              {{['公告及通告', '公告及通告', 'ANNOUNCEMENTS'][$ti()]}} 
            </nuxt-link>
          </li>                                                            
        </ul>
      </nav>
      <b-sidebar id="sidebar" no-header shadow backdrop right bg-variant="glass" @change="toggleBodyScrollbar">
        <div class="d-flex justify-content-between align-items-center my-3">
          <span v-b-toggle.sidebar >
            <svg viewBox="0 0 512 512" class="color-blue" ><path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"/></svg>
          </span>
        </div>
        <ul class="list-unstyled sideBar-nav">
          <li :class="{active : $route.path === '/'}">
            <nuxt-link :to="localePath('/')">
              {{['首頁', '首页', 'HOME'][$ti()]}}
              <div class="small opacity-08 compact">
                {{['主目錄', '主目录', 'Home Page'][$ti()]}}
              </div>
            </nuxt-link>
          </li>
          <li class="divider"></li>
          <li :class="{active : $route.path.startsWith('/about')}">
            <nuxt-link :to="localePath('/about')">
              {{['簡介', '简介', 'ABOUT'][$ti()]}}
              <div class="small opacity-08 compact"> 
                {{['關於椽盛', '关於椽盛', 'About Us'][$ti()]}}
              </div>
            </nuxt-link>
          </li>
          <li class="divider"></li>
          <li :class="{active : $route.path.startsWith('/product')}">
            <nuxt-link :to="localePath('/services')">
              {{['服務', '服务', 'SERVICES'][$ti()]}}
              <div class="small opacity-08 compact"> 
                {{['我們的業務', '我们的业务', 'Our Services'][$ti()]}}
              </div>
            </nuxt-link>
          </li>
          <li class="divider"></li>
          <li :class="{active : $route.path.startsWith('/news')}">
            <nuxt-link :to="localePath('/news')">
              {{['新聞', '新闻', 'NEWS'][$ti()]}}
              <div class="small opacity-08 compact"> 
                {{['市場資訊', '市场资讯', 'Market News'][$ti()]}} 
              </div>
            </nuxt-link>
          </li>
          <li class="divider"></li>
          <li :class="{active : $route.path.startsWith('/about')}">
            <nuxt-link :to="localePath('/support')">
              {{['支援', '支援', 'SUPPORT'][$ti()]}}
              <div class="small opacity-08 compact"> 
                {{['聯絡我們', '联络我们', 'Contact Us'][$ti()]}}
              </div>
            </nuxt-link>
          </li> 
          <li class="divider"></li>
          <li :class="{active : $route.path.startsWith('/alter')}">
            <nuxt-link :to="localePath('/announcements')">
              {{['公告', '公告', 'ANNOUNCEMENTS'][$ti()]}}
              <div class="small opacity-08 compact"> 
                {{['公告及通告', '公告及通告', 'Announcements and notices'][$ti()]}} 
              </div>
            </nuxt-link>
          </li>           
        </ul>

        <div class="sideBar-lang mt-auto  pt-4">
          <img src="/images/logo_blue.svg" class="mb-2 position-absolute" alt="椽盛資本有限公司" style="bottom: -.5rem; left: 1rem; width: 33vw; z-index: -1" />
          <nuxt-link :to="switchLocalePath('zh')" :class="{'font-weight-bold':$i18n.locale === 'zh'}">繁</nuxt-link> ｜ 
          <nuxt-link :to="switchLocalePath('cn')" :class="{'font-weight-bold':$i18n.locale === 'cn'}">简</nuxt-link> ｜ 
          <nuxt-link :to="switchLocalePath('en')" :class="{'font-weight-bold':$i18n.locale === 'en'}">EN</nuxt-link>
        </div>
        <div class="divider-bottom mt-3"></div>
      </b-sidebar>      
    </div>
  </header>
</template>

<script>
export default {
  mounted(){
    document.getElementsByTagName('body')[0].classList.remove("overflow-hidden");
    document.addEventListener('scroll', ()=>{
      let _offsetTop = document.documentElement.scrollTop;
      if(_offsetTop >= 48){
        document.querySelector('.sidebarBtn').style.top = '1.5rem';
      }
      else
        document.querySelector('.sidebarBtn').style.top = null;

    });
  },
  methods: {
    toggleBodyScrollbar(visible) {
      const body = document.getElementsByTagName('body')[0];
      if(visible)
        body.classList.add("overflow-hidden");
      else
        body.classList.remove("overflow-hidden");
    },

  },  
}
</script>

<style lang="scss" scoped>
  header{
    z-index: 1000;
    &.small-header{
      padding-bottom: .5rem;
      & .logo{
        position: absolute;
        height: 68px;
        z-index: 1;
        @media (max-width: 575px){
          position: relative;
          height: 80px; 
        }
      }
      & nav{
        margin-top: .5rem;
        z-index: 2;
      }
    }     
    & .logo{
      height: 100px;
      transition: all .5s ease;
      @media(max-width: 575px){
        height: 80px;
      }
    }
    & .sidebarBtn{
      display: flex;
      height: 36px;
      width: 36px;
      opacity: 0.8;
      transition: all .5s ease;
      position: fixed;
      top: 3rem;
      right: 1rem;
      &::before{
        content: " ";
        position: absolute;
        width: 24px;
        height: 24px;
        top: -8px;
        left: -8px;
        border-radius: 50%;
        background-color: rgba(var(--darkblue), .8);
        z-index: -1;
        
      }
      &:hover{
        opacity: 1;
        cursor: pointer;
      }
      & div[class^="divider"]{
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background-color: rgba(255,255,255,1);
        box-shadow: 0 0 4px rgba(0,0,0,.35);
      }
      &.not-collapsed{
        transform: rotate(90deg);
      }
    }
    & .opacity-08{
      opacity: 0.8;
      transition: all .5s ease;
      &:hover{ 
        opacity: 1;
        cursor: pointer;
      }
    }
    & .compact{
      margin-top: -2px;
    }
    & .small{
      font-size: 12px;
    }
    & nav {
      margin-top: 1rem;
      border-top: 2px solid rgba(255,255,255, .3);
      & ul {
        & li {
          font-size: .875rem;
          transition: all .2s;
          position: relative;
          &:not(.divider):not(:last-child){
            &::before{
              content: " ";
              display: block;
              position: absolute;
              width: 0;
              height: 4px;
              top: -8px;
              background-color: rgba(var(--lightblue), 0.8);
              transition: all .5s ease;

            }
            &:not(:first-child){
              &::before{
                left: -1rem;
              }
            }
          }          
          &:hover{
            filter: brightness(1.5);
            text-shadow: 0 0 4px white;
            & .opacity-08{
              opacity: 1;
            }
            &:not(.divider):not(:last-child){
              &::before{
                width: calc(100% + 40px);
                @media (max-width: 767px){
                  width: calc(100% + 16px);
                }                
              }
            }
          }
          &.divider{
            width: 1px !important;
            height: 24px;
            background-color: white;
          }
          &.active{
            filter: brightness(1.5);
            text-shadow: 0 0 4px white;            
            &::before{
              content: " ";
              display: block;
              position: absolute;
              width: calc(100% + 40px) !important;
              @media (max-width: 767px){
                width: calc(100% + 16px) !important;
              }              
              height: 4px;
              top: -8px;
              background-color: rgba(var(--lightblue), 0.8);
              opacity: 1 !important;
            }
          }
        }
      }
    }
  }
  #sidebar {
    & .color-blue {
      fill: rgba(var(--lightblue), 1);
      color: rgba(var(--lightblue), 1);
      transition: all .5s ease;
      &:hover{
        filter: brightness(1.5);
      }
    }
    & .divider-bottom{
      background: linear-gradient(to right, rgba(var(--darkblue), .8), rgba(var(--lightblue), .8));
      width: 80px;
      height: 4px;
      min-height: 4px;
      border-radius: 2px;
      bottom: .875rem;
      margin-left: auto;
      margin-right: auto;
      text-align: center;    
    }
    & ul {
      & li {
        width: 100%;
        transition: all .5s ease;
        &:not(.divider){
          padding: .375rem 0;
        }
        &:hover{
          &:not(.divider){
            padding-left: 1rem;
            background-color: rgba(var(--lightblue), .15);
            border-radius: .5rem;
          }
        }
        &.divider {
          width: 100%;
          height: 1px;
          background-color: rgba(var(--lightblue), 1);
          margin: .375rem 0;
        }
        & a{
          width: 100%;
          display: inline-block;
        }
      }
    }
    & .btn-outline-lightblue{
      border: solid 1px rgba(var(--lightblue), 1);
      color: rgba(var(--lightblue), 1);
      transition: all .5s ease;
      &:hover{
        background: rgba(var(--lightblue), 1);
        color: white;
      }
    }
    & .sideBar-lang{
      font-size: 14px;
      color: rgba(var(--lightblue), 1);
      bottom: 2rem;
      text-align: center;   
      z-index: 1;
    }   
  }

</style>