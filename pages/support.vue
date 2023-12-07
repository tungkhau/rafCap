<template>
  <div>
    <Header />
    <main>
      <section class="banner">
        <div class="mask"></div>
        <div class="caption">
          <h2>
            {{['支援', '支援', 'SUPPORT'][$ti()]}}
          </h2>
          <p>
            {{['聯絡我們', '联络我们', 'Contact Us'][$ti()]}}
          </p>
        </div>
      </section>
      <section class="my-5">
        <div class="container-lg">
          <div class="row">
            <div class="col-lg-4 my-3">
              <div class="d-flex align-items-center">
                <div class="ml-4">
                  <small>{{['辦事處地址', '办事处地址', 'Office Address'][$ti()]}}</small>
                  <h5 class="mb-0 mt-1 font-weight-normal"> 
                    <a class="text-hover-lightblue" :href="$store.state.googleMap" target="_blank">
                      <span class="small" v-html="$store.state.address[$i18n.locale]"></span>
                    </a>
                  </h5>
                </div>
              </div>
            </div>                 
            <div class="col-lg-4 my-3">
              <div class="d-flex align-items-center">
                <div class="ml-4">
                  <small>{{['聯絡電話', '联络电话', 'Contact Number'][$ti()]}}</small>
                  <h2 class="mb-0 mt-1"> 
                    <a class="text-hover-lightblue" :href="`tel:${$store.state.prex} ${$store.state.tel}`" target="_blank">
                      <span class="font-weight-lighter">{{ $store.state.prex }}</span> {{ $store.state.tel }} 
                    </a>
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-lg-4 my-3 overflow-auto">
              <div class="d-flex align-items-center">
                <div class="ml-4">
                  <small>{{['聯絡電郵', '联络电邮', 'Email Address'][$ti()]}}</small>
                  <h2 class="mb-0 mt-1 font-weight-normal"> 
                    <a class="text-hover-lightblue" :href="`mailto:${$store.state.email}`" target="_blank">
                      {{ $store.state.email }} 
                    </a>
                  </h2>
                </div>
              </div>
            </div>   
          </div>                        
        </div>
      </section>
      <section class="my-5">
        <div class="container-lg">
          <div class="d-flex align-items-center">
            <div class="leftBar mr-3"></div>
            <span class="text-secondary"> {{['一般查詢', '一般查询', 'General Enquiries'][$ti()]}} </span>
          </div>
          <div class="row">
            <div class="col-lg-7 my-4">
              <div class="ml-8">
                <h1 class="my-4">
                  {{['聯絡我們', '联络我们', 'Contact Us'][$ti()]}}
                </h1>
                <p>
                  {{[
                    '我們致力為客戶提供優質、專業、貼心的服務。', 
                    '我们致力为客户提供优质丶专业丶贴心的服务。', 
                    'We strive to provide quality, professional, and personable services to our clients.'
                  ][$ti()]}}
                </p>
                <p>
                  {{[
                    '辦公時間過後，您仍可經本頁表格向我們的職員提交查詢，我們的職員收到查詢後會在辦公時間盡快回覆閣下。', 
                    '办公时间过後，您仍可经本页表格向我们的职员提交查询，我们的职员收到查询後会在办公时间尽快回覆阁下。', 
                    'If we cannot be reached after office hours, you may fill in the form on the right with your enquiries, and we will get back to you soonest during our office hours.'
                  ][$ti()]}}                      
                </p>
                <div class="my-4">
                  <div class="font-weight-bold">
                    {{['辦公時間', '办公时间', 'Office Hours'][$ti()]}}
                  </div>
                  <div>
                    {{['平日 | 上午9點至下午6點', '平日 | 上午9点至下午6点', 'Market trading day: 9am-6pm'][$ti()]}}
                  </div>
                  <div>
                    {{['星期六及公眾假期 | 休息', '星期六及公众假期 | 休息', 'Saturdays and public holidays: Closed'][$ti()]}}
                  </div>
                </div>
                <div class="small text-secondary">* {{['為必填項目', '为必填项目', 'Fields are required'][$ti()]}}</div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="ml-8">
              <h5 class="mb-3 text-lightblue">
                {{['查詢表格', '查询表格', 'Inquiry Form'][$ti()]}}
              </h5>
              <div class="leftBar mb-4"></div>
              <b-form id="contactForm" @submit="formSubmit">
                <b-form-input class="mb-3" name="name" v-model="form.name" required :placeholder="['稱呼 *', '称呼 *', 'Name *'][$ti()]"></b-form-input>
                <b-form-input class="mb-3" name="email" v-model="form.email" required :placeholder="['聯絡電郵 *', '联络电邮 *', 'Email Address *'][$ti()]"></b-form-input>
                <b-form-input class="mb-3" name="tel" v-model="form.tel" :placeholder="['聯絡電話', '联络电话', 'Contact Number'][$ti()]"></b-form-input>
                <b-form-textarea class="mb-4" name="message" v-model="form.message" no-resize rows="3" :placeholder="['留言', '留言', 'Message'][$ti()]"></b-form-textarea>
                <b-button type="submit" variant="darkblue" class="mb-4 px-5" :disabled="loading"> 
                  <span v-show="loading"> <b-spinner small label="Loading..." /> </span>
                  <span v-show="!loading"> {{['提交', '提交', 'Submit'][$ti()]}} </span>                      
                </b-button>
              </b-form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section >
        <a :href="$store.state.googleMap" target="_blank" id="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d539.3566287394136!2d114.14988441815021!3d22.286827511314797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007c2b740001%3A0x1896a55c8c8b4825!2z6KW_5Y2A6Zu76KiK5aSn5buI!5e0!3m2!1szh-TW!2shk!4v1678767140280!5m2!1szh-TW!2shk" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </a>
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
      form: {
        name: '',
        email: '',
        tel: '',
        message: ''
      }
    }
  },
  methods: {
    async formSubmit(event){
      event.preventDefault();
      let formData = JSON.parse(JSON.stringify(this.form));
      this.loading = true;
      const json = await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      this.loading = false;
      if(json.status){
        this.form = {
          name: '',
          email: '',
          tel: '',
          message: ''
        }
      };
      this.$bvToast.toast(json.status ? ['發送成功', '发送成功', 'Success'][this.$ti()] :['網絡錯誤，請稍候再試', '网络错误，请稍候再试', 'Network Error'][this.$ti()], { noCloseButton: true, toaster: 'b-toaster-top-right', variant: json.status ? 'primary':'danger' });
    },   

  }
}
</script>

<style lang="scss" scoped>
  .banner{
    background-image: url('/images/iStock-904426582-2048x1463.webp');
  }
  .leftBar{
    height: 3px;
    width: 70px;
    background-color: rgb(var(--lightblue));
  }
  .ml-8{
    margin-left: 80px;
    @media (max-width: 575px) {
      margin-left: 60px;
    }
  }
  #contactForm{
    & input, textarea{
      border: none;
      border-radius: 0;
      background-color: transparent;
      transition: all .5s ease;
      border-bottom: solid 1px rgb(var(--whiteblue));
      &:hover, &:active, &:focus{
        outline: none;
        box-shadow: none;
      }
      &:focus{
        border-bottom: solid 1px rgb(var(--lightblue));
      }
    }
  }
  #map{
    filter: grayscale(100%);
  }
</style>