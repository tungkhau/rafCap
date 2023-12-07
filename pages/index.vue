<template>
  <div>
    <Header />
    <main>
      <section id="slider">
        <div class="content ">
          <div class="m-auto text-center text-serif">
            <h2 class="text_21 text-shadow-lg font-weight-normal">
              {{[ '連繫全球金融市場', '连系全球金融市场', `Connecting the world's financial markets`][$ti()]}}
            </h2>
            <h1 class="text_48 text-shadow-lg">
               {{['植根亞洲&#160;&#160;放眼全球', '植根亚洲&#160;&#160;放眼全球', 'Rooted in Asia, Global in Perspective'][$ti()]}}
            </h1>
            <div class="btn btn-slider">
              <nuxt-link :to="localePath('/support')">
                {{[ '立即開始', '立即开始', 'START NOW' ][$ti()]}}
              </nuxt-link>
            </div>
          </div>
          <div class="container-lg mb-5">
            <div class="alter text-nowrap">
              <svg viewBox="0 0 10.67 16"><path d="M428,701.91a.89.89,0,0,1,.51.8v14.23a.89.89,0,0,1-.89.89.87.87,0,0,1-.56-.2l-4.2-3.36h-4.13a.89.89,0,0,1-.89-.89v-7.11a.89.89,0,0,1,.89-.89h4.13L427,702A.91.91,0,0,1,428,701.91Z" transform="translate(-417.8 -701.83)"/></svg>
              <span class="mx-2"> 
                {{[ '公告', '公告', '' ][$ti()]}} |
              </span>
              <div class="w-100 h-100 overflow-hidden position-relative" v-if="alerts.length > 0" >
                <div class="marquee d-flex" >
                  <div v-for="(alter, i) in alerts" :key="'alterMsg-'+i">
                    <nuxt-link :to="localePath(`/announcements/${alter.slug}`)">
                      <span v-html="alter.title"></span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div v-else>
                {{[ '暫無公告', '暂无公告', 'No Announcements' ][$ti()]}}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="news">
        <div class="container-lg mb-4 mt-5">
          <h4 class="text-darkblue mb-4 text-serif">
            {{[ '市場資訊', '市场资讯', 'Market News' ][$ti()]}}
          </h4>
          <div class="newsBlock bg-grayblue shadow-sm">
            <div class="row">
              <transition-group name="slideUp">
              <div class="col-lg-auto" v-for="(msg, i) in news" :key="`news-${i}`" v-show="newsIndex === i">
                <span class="mr-2"> 
                  {{[ '日期', '日期', 'Date' ][$ti()]}} 
                </span>
                <strong class="text-blue mr-2"> {{msg.date}} </strong>     
                <nuxt-link :to="localePath(`/news/${encodeURIComponent(msg.slug)}`)" class="text-hover-blue" >
                  {{ msg.title }}
                </nuxt-link>
              </div>
              </transition-group>
              <div class="col-md-auto ml-auto">
                <div class="d-flex align-items-center justify-content-end no-select" @mouseover="newsSlidePause" @mouseleave="newsSlide">
                  <span class="mr-3 d-flex text-lightblue">
                    <span class="d-flex align-items-center text-hover-blue" role="button" @click="newsIndex > 0 ? newsIndex-- : newsIndex = news.length - 1" >
                      <svg class="w1 x075 mr-1 text-lightblue" viewBox="0 0 16 10.32"><path d="M1209,901.47a1.59,1.59,0,0,1,.13-.13,1.39,1.39,0,0,1,1.95.13l6.62,7.56a1.41,1.41,0,0,1,.34.91,1.38,1.38,0,0,1-1.38,1.38h-13.24a1.38,1.38,0,0,1-1-2.28l6.62-7.57Z" transform="translate(-1202.04 -901)"/></svg> 
                      {{['上一則', '上一则', 'Prev'][$ti()]}}
                    </span>                    
                    <span class="d-flex align-items-center mr-2 text-hover-blue" role="button" @click="newsIndex < news.length -1 ? newsIndex++ : newsIndex = 0" >
                      <svg class="w1 x075 mr-1 text-lightblue" viewBox="0 0 16 10.32"><path d="M1108,910.85l-6.62-7.56a1.38,1.38,0,0,1,1-2.29h13.24a1.38,1.38,0,0,1,1,2.29l-6.62,7.56a1.39,1.39,0,0,1-1.95.13.8.8,0,0,1-.13-.13Z" transform="translate(-1101.04 -901)"/></svg> 
                      {{['下一則', '下一则', 'Next'][$ti()]}}
                    </span>
                  </span>    
                  <nuxt-link :to="localePath('/news')" class="text-darkblue text-hover-blue ml-2 d-flex align-items-center" >
                    {{['更多', '更多', 'MORE'][$ti()]}}
                    <svg class="x05 text-darkblue" viewBox="0 0 16 10.29"><path d="M1476.7,905.1a.58.58,0,0,1,.57-.57h13.48l-3.6-3.59a.57.57,0,0,1,.81-.81l4.57,4.57a.57.57,0,0,1,0,.81h0l-4.57,4.57a.57.57,0,0,1-.81-.81l3.6-3.59h-13.48A.58.58,0,0,1,1476.7,905.1Z" transform="translate(-1476.7 -899.96)"/></svg>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="products" class="text-serif">
        <div class="container-lg my-4 ">
          <div class="d-flex overflow-auto my-4 scrollBar">
              <div class="grid mr-3">
                <figure class="effect-apollo">
                  <img src="/images/concept.jpeg" alt="資產管理賬戶" />
                  <figcaption>
                    <h2 v-html='[
                      `全權委託<br/><span class="font-weight-300 text-nowrap">資產管理賬戶</span>`, 
                      `全权委托<br/><span class="font-weight-300 text-nowrap">资产管理账户</span>`, 
                      `Discretionary<br/><span class="font-weight-300 text-nowrap h5">Asset Management Accounts</span>`
                    ][$ti()]'></h2>
                    <p>{{[
                      '為客户提供度身訂造的專項委托投資服務於各種市況下賺取最大的回報', 
                      '为客户提供度身订造的专项委托投资服务於各种市况下赚取最大的回报', 
                      'Tailor-make specific investment portfolios under all market circumstances.'
                      ][$ti()]}}
                      <br/>
                      <nuxt-link :to="localePath('/services#p1')" class="font-weight-bold text-shadow-white"><u> {{['更多詳情', '更多详情', 'MORE'][$ti()]}}</u></nuxt-link>
                    </p>
                  </figcaption>			
                </figure>
              </div>
              <div class="grid mr-3">
                <figure class="effect-apollo">
                  <img src="/images/concept_2.jpeg" alt="投資基金" />
                  <figcaption>
                    <h2 v-html='[
                      `<span class="font-weight-300 text-nowrap">椽盛</span><br/>投資基金`, 
                      `<span class="font-weight-300 text-nowrap">椽盛</span><br/>投资基金`, 
                      `<span class="font-weight-300 text-nowrap">Rafter </span><br/><span class="text-nowrap">investment fund</span>`
                    ][$ti()]'></h2>
                    <p>{{[
                      '研究宏觀，行業，個股分析以助駕馭各種市況及早著先機投資環球股市', 
                      '研究宏观，行业，个股分析以助驾驭各种市况及早着先机投资环球股市', 
                      'Harnessing various market conditions and capturing early opportunities to invest in global stock markets.'
                      ][$ti()]}}
                      <br/>
                      <nuxt-link :to="localePath('/services#p2')" class="font-weight-bold text-shadow-white"><u> 
                        {{['更多詳情', '更多详情', 'MORE'][$ti()]}}
                      </u></nuxt-link>
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div class="grid">
                <figure class="effect-apollo">
                  <img src="/images/concept_3.webp" alt="Pre IPO基金" />
                  <figcaption>
                    <h2 v-html='[
                      `<span class="font-weight-300 text-nowrap">椽盛</span><br/>Pre IPO基金`, 
                      `<span class="font-weight-300 text-nowrap">椽盛</span><br/>Pre IPO基金`, 
                      `<span class="font-weight-300 text-nowrap">Rafter </span><br/><span class="text-nowrap">pre-IPO fund</span>`
                    ][$ti()]'></h2>
                    <p>{{[
                      '研究即將上市優質公司的行業、背景和公司潛力，於上市前投資其股權', 
                      '研究即将上市优质公司的行业丶背景和公司潜力，於上市前投资其股权', 
                      'To acquire and invest in the stock options of outstanding pre-IPO companies prior to their listing.'
                      ][$ti()]}}
                      <br/>
                      <nuxt-link :to="localePath('/services#p3')" class="font-weight-bold text-shadow-white"><u> 
                        {{['更多詳情', '更多详情', 'MORE'][$ti()]}}
                      </u></nuxt-link>
                    </p>
                  </figcaption>
                </figure>
              </div>              
          </div>
          
        </div>
      </section>
      <section id="about" class="text-serif">
        <div class="desc">
          <div class="container-lg">
            <div class="row">
              <div class="col-lg-6 my-3">
                <h4 class="text-darkblue mb-4">
                  {{['椽盛資本有限公司', '椽盛资本有限公司', 'Rafter Capital Limited'][$ti()]}}
                </h4>
                <div class="mb-4">
                  <div v-html='[
                    `香港證監會持牌之金融機構BRG363資產管理以及機構﹑家族信託及高值戶的投資顧問。`,
                    `香港证监会持牌之金融机构BRG363资产管理以及机构、家族信托及高值户的投资顾问。`,
                    `Rafter Capital Limited is a Hong Kong Securities and Futures Commission’s licensed financial institution (License No. BRG363) specializing in asset management and investment advisory for corporations, family trusts, and high net-worth clients.`
                  ][$ti()]'></div>
                  <div v-html='[`
                  本公司以「椽盛資本」的專業品牌，於中港台金融界擁有豐富基金投資及管理經驗。管理團隊擁有豐富金融經驗和知識，同時亦擁有覆蓋全球之強大網絡。`,
                  `本公司以「椽盛资本」的专业品牌，於中港台金融界拥有丰富基金投资及管理经验。管理团队拥有丰富金融经验和知识，同时亦拥有覆盖全球之强大网络。`,
                  `Along with our professional branding and expertise, our Company possesses seasoned fund investment and management experiences in the Greater China financial sector. The management team retains rich financial skills and knowledge, and at the same time, has an extensive worldwide network connection.`
                  ][$ti()]'></div>
                  <div v-html='[
                    `透過香港證監會核准的資產管理平台替客戶提供多元化服務，貫徹執行客戶的平行風險與回報目標，以争取最大化投資收益。`,
                    `透过香港证监会核准的资产管理平台替客户提供多元化服务，贯彻执行客户的平行风险与回报目标，以争取最大化投资收益。`,
                    `Through the Hong Kong Securities and Futures Commission’s approved asset management platform, we can provide clients with diversified services, and duly execute a balanced risk and return target for our clients to maximize their investment returns.
                  `][$ti()]'></div>
                </div>
                <nuxt-link class="btn btn-sm btn-darkblue rounded-lg font-weight-bold px-5" :to="localePath('/about')"> 
                  {{['更多', '更多', 'MORE'][$ti()]}} 
                </nuxt-link>
              </div>
              <div class="col-lg-6 my-auto">
                <img src="/images/about.jpeg" class="w-100 rounded-lg shadow-lg" alt="透過香港證監會核准的資產管理平台替客戶提供多元化服務，貫徹執行客戶的平行風險與回報目標，以争取最大化投資收益。" style="max-width: 560px" />
              </div>
            </div>
          </div>
        </div>
        <div class="concept my-5">
          <div class="container-lg">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 order-3 my-auto">
                <img src="/images/concept.jpeg" class="w-100 rounded-lg shadow-lg" style="max-width: 560px" alt="投資理念為椽盛資本能有效達到上述目標的基礎，兼能確保資產管理公司的持續長遠發展，我們衷心堅守以下的投資準則" />
              </div>
              <div class="col-lg-6 order-1 order-lg-2 order-1 my-auto">
                <h4 class="text-darkblue"> 
                  {{['投資理念', '投资理念', 'Investment Philosophy'][$ti()]}}
                </h4>
                <div class="mb-4">
                  {{[
                  '投資理念為椽盛資本能有效達到上述目標的基礎，兼能確保資產管理公司的持續長遠發展，我們衷心堅守以下的投資準則：', 
                  '投资理念为椽盛资本能有效达到上述目标的基础，兼能确保资产管理公司的持续长远发展，我们衷心坚守以下的投资准则：', 
                  'Rafter Capital believes our investment philosophy can efficiently achieve the above fundamental goals for our clients, while making sure the sustainable development of the Company. We truly uphold the below investment principles:'
                  ][$ti()]}}
                </div>
                <div class="row">
                  <div class="col-6 my-3 text-center">
                    <div class="font-weight-bold text-darkblue shadow-sm rounded-lg"> 
                      {{['宏觀分析', '宏观分析', 'Macro analysis'][$ti()]}}
                    </div>
                  </div>
                  <div class="col-6 my-3 text-center">
                    <div class="font-weight-bold text-darkblue shadow-sm rounded-lg"> 
                      {{['行業分析', '行业分析', 'Industry analysis'][$ti()]}}
                    </div>
                  </div>
                  <div class="col-6 my-3 text-center">
                    <div class="font-weight-bold text-darkblue shadow-sm rounded-lg"> 
                      {{['個股分析', '个股分析', 'Individual stock analysis'][$ti()]}}
                    </div>
                  </div>  
                  <div class="col-6 my-3 text-center">
                    <div class="font-weight-bold text-darkblue shadow-sm rounded-lg"> 
                      {{['估值精算', '估值精算', 'Value evaluation'][$ti()]}}
                    </div>
                  </div>                                                    
                </div>
              </div>
              <div class="col-lg-12 order-lg-3 order-2 my-4 my-lg-5">
                <div class="row">
                  <div class="col-lg-6 mb-2">
                    <u class="font-weight-bold">
                      {{['宏觀分析', '宏观分析', 'Macro analysis'][$ti()]}}
                    </u>
                    <div>
                      {{[
                      '關注國際政治與宏觀經濟的變化，著眼於亞洲及全球各主要國家政策的方向與變更，著力於分析不同重大宏觀因素與主要國家政策對於各個行業發展的深遠及潛在影響。', 
                      '关注国际政治与宏观经济的变化，着眼於亚洲及全球各主要国家政策的方向与变更，着力於分析不同重大宏观因素与主要国家政策对於各个行业发展的深远及潜在影响。', 
                      'We focus on changes in the macro economy and international political front, while eyeing the policy directions and movements of Asia and the world’s major countries. Emphasis on analyzing different major macro elements and the long-lasting, potential impact of major countries’ policies on individual industry’s development is also a key strategy.'
                      ][$ti()]}}
                    </div>
                  </div>
                  <div class="col-lg-6 mb-2">
                    <u class="font-weight-bold">
                      {{['行業分析', '行业分析', 'Industry analysis'][$ti()]}}
                    </u>
                    <div>
                      {{[
                      '對於不同行業的商業模式、盈利模式作深入剖析，分析各行業運作的關鍵因素與盈利成長潛力，並精細預測具長遠發展潛力的行業趨勢變化與未來前景，選擇投資具有美好發展前景的朝陽行業。', 
                      '对於不同行业的商业模式丶盈利模式作深入剖析，分析各行业运作的关键因素与盈利成长潜力，并精细预测具长远发展潜力的行业趋势变化与未来前景，选择投资具有美好发展前景的朝阳行业。', 
                      'We conduct deep and unique analyses on different industries’ business and revenue models, taking a look into various industries’ key factors and revenue growth potentials for their business operations. Furthermore, we strive to precisely forecast the long-term development potential for changes in industry trends and future outlook, and selecting growth industries with a positive outlook for investing.'
                      ][$ti()]}}
                    </div>
                  </div>
                  <div class="col-lg-6 mb-2">
                    <u class="font-weight-bold">
                      {{['個股分析', '个股分析', 'Individual stock analysis'][$ti()]}}
                    </u>
                    <div>
                      {{[
                      '從基本股盈利情況、財務狀況以及主要基本面指標作全面評估。深入企業內部進行細緻考察，對主要股東進行探訪，瞭解股東對公司的未來願景，並與管理層討論和分析公司所面對的各種問題，從而綜合分析公司發展前景，較為準確地估計該股實際潛在價值。', 
                      '从基本股盈利情况丶财务状况以及主要基本面指标作全面评估。深入企业内部进行细致考察，对主要股东进行探访，了解股东对公司的未来愿景，并与管理层讨论和分析公司所面对的各种问题，从而综合分析公司发展前景，较为准确地估计该股实际潜在价值。', 
                      'We take into account each company’s ordinary shares earnings, financial situation, and fundamental indicators when conducting a comprehensive assessment. We also go into the internal operations of a business to make detailed observations, interviewing with major shareholders to gain their unique perspectives on their company’s future outlook, and meeting with their senior management to discuss on the potential obstacles, so as to consolidate the analysis on that company’s developmental outlook, and from this, accurately determine the potential value of that company.'
                      ][$ti()]}}
                    </div>
                  </div>  
                  <div class="col-lg-6 mb-2">
                    <u class="font-weight-bold">
                      {{['估值精算', '估值精算', 'Value evaluation'][$ti()]}}
                    </u>
                    <div>
                      {{[
                      '根據目標投資企業的企業與商業發展戰略，綜合分析企業本身的發展優勢與弱點，剖析企業於各業務市場的競爭優勢與其可持續性，並結合我們能對明星行業作透徹了解的資源與大數據優勢，掌握目標投資企業的精確估值。', 
                      '根据目标投资企业的企业与商业发展战略，综合分析企业本身的发展优势与弱点，剖析企业於各业务市场的竞争优势与其可持续性，并结合我们能对明星行业作透彻了解的资源与大数据优势，掌握目标投资企业的精确估值。', 
                      'We evaluate a target invested company’s value according to its corporate and business strategic development, a consolidated analysis on its development strengths and weaknesses, and its competitive advantage and sustainability in its respective market. This comprehensive look allows us to merge our capabilities to understand fully the operations and big data advantages on prominent industries, grasping the precise valuation on the target invested company.'
                      ][$ti()]}}                      
                      </div>
                  </div>                                                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="mission" class="text-serif">
        <div class="content">
          <div class="container-lg">
            <div class="row">
              <div class="col-lg-6 my-auto">
                <h4 class="text-white mb-4"> 
                  {{['我們的使命', '我们的使命', 'Our Mission'][$ti()]}} 
                </h4>
                <div class="text-white">
                  {{[
                  '椽盛資本自創立以來，根植亞洲，並尋求更多元化的發展，放眼全球。', 
                  '椽盛资本自创立以来，根植亚洲，并寻求更多元化的发展，放眼全球。', 
                  'Since Rafter Capital has been established, it has been rooted in Asia, and we are now seeking a more diversified development with an outward outlook to other parts of the world.'
                  ][$ti()]}}
                  <br/>
                  {{[
                  '我們透過聆聽、開發和探索，執行和監測每一投資項目的實際表現去獲取客戶對我們的信任和認同。', 
                  '我们透过聆听丶开发和探索，执行和监测每一投资项目的实际表现去获取客户对我们的信任和认同。', 
                  'Through listening, exploring, pioneering, executing, and monitoring every investment project’s actual performance, we strive to gain our customer’s trust and recognition.'
                  ][$ti()]}}                       
                </div>
              </div>
              <div class="col-lg-6 my-4">
                <img :src="`/images/mission_${$i18n.locale}.svg`" class="w-100" style="max-width: 560px" alt="我們透過聆聽、開發和探索，執行和監測每一投資項目的實際表現去獲取客戶對我們的信任和認同。" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="globe">
        <div class="max-960 text-lightblue">
          <div class="text_32 text-serif text-center my-8 font-weight-bold">
            {{[
            '透過香港證監會核准的資產管理平台', 
            '透过香港证监会核准的资产管理平台', 
            'Through the Hong Kong Securities and Futures Commission’s approved asset management platform, we can provide clients with diversified services.'
            ][$ti()]}} 
            <br />
            {{[
            '替客戶提供多元化服務', 
            '替客户提供多元化服务', 
            ''
            ][$ti()]}} 
          </div>
          <div class="row">
            <div class="col-md-6 mb-5">
              <h4 class="text-center mb-3 text-serif font-weight-bold"> 
                {{[
                '輕鬆投資全球市場', 
                '轻松投资全球市场', 
                'Invest in the global market at ease'
                ][$ti()]}} 
              </h4>
              <div class="text_18 text-center text-md-left text-secondary">
                {{[
                '一個帳戶即可透過香港證監會核准的資產管理平台替客戶提供多元化服務；', 
                '一个帐户即可透过香港证监会核准的资产管理平台替客户提供多元化服务；', 
                'To provide clients with diversified services through Hong Kong Securities and Futures Commission’s approved asset management platform in one account.'
                ][$ti()]}}
              </div>
            </div>    
            <div class="col-md-6 mb-5">
              <h4 class="text-center mb-3 text-serif font-weight-bold"> 
                {{[
                '全權委託管理', 
                '全权委托管理', 
                'Discretionary asset management services'
                ][$ti()]}}
              </h4>
              <div class="text_18 text-center text-md-left text-secondary">
                {{[
                '為客户提供度身訂造的專項委托投資服務於各種市況下賺取最大的回報；', 
                '为客户提供度身订造的专项委托投资服务於各种市况下赚取最大的回报；', 
                'To tailor-make unique investment services for clients in order to maximize returns at multiple market scenarios.'
                ][$ti()]}}                
              </div>
            </div>
            <div class="col-md-6 mb-5">
              <h4 class="text-center mb-3 text-serif font-weight-bold"> 
                {{[
                '專業分析', 
                '专业分析', 
                'Professional analysis'
                ][$ti()]}}               
              </h4>
              <div class="text_18 text-center text-md-left text-secondary">
                {{[
                '透過研究宏觀，行業，個股分析以助駕馭各種市況及早著先機投資環球股市；', 
                '透过研究宏观，行业，个股分析以助驾驭各种市况及早着先机投资环球股市；', 
                'Through an analytical look at the macro level, industry level, and the individual stock level to assist us in harnessing various market conditions and capturing early opportunities to invest in global stock markets.'
                ][$ti()]}}                 
              </div>
            </div>            
            <div class="col-md-6 mb-5">
              <h4 class="text-center mb-3 text-serif font-weight-bold"> 
                {{[
                '一站式服務', 
                '一站式服务', 
                'One-stop service'
                ][$ti()]}}                 
              </h4>
              <div class="text_18 text-center text-md-left text-secondary">
                {{[
                '交易日 9:00 AM - 5:00 PM', 
                '交易日 9:00 AM - 5:00 PM', 
                'Trading Days: 9am-5pm'
                ][$ti()]}}  
                <br/>   
                {{[
                '真人熱線客戶服務，解決客戶不同需求；', 
                '真人热线客户服务，解决客户不同需求；', 
                'In-person customer service hotline is also available to solve various needs and enquiries from our clients.'
                ][$ti()]}}                 
              </div>
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
      alerts: [],
      news: [],
      newsIndex: 0,
      newsInterval: false,
      newsSlideDuration: 8000
    }
  },
  async mounted(){
    this.news = await this.getNews(this.$i18n.locale);
    this.alerts = await this.getAlerts(this.$i18n.locale);
    this.newsSlide();
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
    newsSlide(){
      this.newsInterval = setInterval(()=> {
        if(this.newsIndex < this.news.length) this.newsIndex ++;
        if(this.newsIndex === this.news.length) this.newsIndex = 0;
      }, this.newsSlideDuration);
    },
    newsSlidePause(){
      clearInterval(this.newsInterval);
    }
  }
}
</script>

<style lang="scss" scoped>
  #slider{
    height: 765px;
    @media (max-width: 575px) {
      height: 100vh;
      max-height: 900px;
    }
    max-height: 100vh;
    width: 100%;
    background-image: url('/images/banner.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    & .content{
      position: relative;
      z-index: 2;
      height: 100%;
      width: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      padding-top: 8rem;
      & .btn-slider{
        background: rgba(255,255,255,.85);
        border-radius: 24px;
        height: 48px;
        line-height: 48px;
        width: 180px;
        text-align: center;
        color: rgba(var(--lightblue));
        font-weight: bold;
        font-size: 18px;
        padding: 0;
        margin: 2rem 0;
        transition: all .5s ease;
        &:hover{
          background: rgba(var(--lightblue), 0.85);
          color: white;
        }
        @media (max-width: 575px){
          font-size: 18px;
          width: 160px;
          height: 48px;
          line-height: 48px;
        }        
      }
    }
    & .alter{
      background: rgba(255,255,255,.35);
      border-radius: 6px;
      height: 40px;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      width: 100%;
      overflow: hidden;
      & svg{
        flex: none;
        fill: white;
      }
    }
  }
  #news{
    position: relative;
    overflow-x: hidden;
    & .newsBlock{
      padding: 1rem;
      border-radius: 6px;
    }
    & .slideUp-enter-active{
      animation-name: slideYDownIn;
      animation-fill-mode: both;
      animation-timing-function: cubic-bezier(.25,.8,.50,1);
      animation-duration: 1s;
      @keyframes slideYDownIn {
        from {
          opacity: 0;
          transform: translateY(15px);
        }
        to {
          opacity: 1;
        }
      }
    }
    & .slideUp-leave-active{
      animation-name: slideYDownOut;
      animation-fill-mode: both;
      animation-timing-function: cubic-bezier(.25,.8,.50,1);   
      animation-duration: .2s;
      position: absolute;
      @keyframes slideYDownOut {
        from {
          opacity: 0.1;
        }
        to {
          opacity: 0;
          transform: translateY(15px);
        }
      }      
    }
  }
  #products{
    .grid {
      position: relative;
      clear: both;
      margin: 0 auto;
      list-style: none;
      text-align: center;
      border-radius: .5rem;
      box-shadow: .25rem .25rem .5rem rgba(0,0,0,.35);
    }

    /* Common style */
    .grid figure {
      position: relative;
      float: left;
      overflow: hidden;
      margin: 0;
      width: 358px;
      max-width: max(320px, calc(100vw - 3rem));
      height: auto;
      aspect-ratio: 16 / 10;
      border-radius: .5rem;
      @media (max-width: 575px) {
      aspect-ratio: 16 / 11;
      }
      text-align: center;
      cursor: pointer;
    }

    .grid figure img {
      position: relative;
      display: block;
      height: 100%;
      width: auto;
      opacity: 0.6;
    }

    .grid figure figcaption {
      padding: 2em;
      color: #fff;
      font-size: 1.25em;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;     
      &::before, &::after{
        pointer-events: none;
      } 
      & h2, & p{
        letter-spacing: 1px;
        margin: 0;
        user-select: none;        
      }
      & h2 {
        font-weight: 800;
        @media (max-width: 575px){
          font-size: 1.75rem;
        }
      }
      & p {
        font-size: 50%;
        line-height: 1.5;
      }
    }

    /*-----------------*/
    /***** Apollo *****/
    /*-----------------*/

    figure.effect-apollo {
      background: rgba(var(--blackblue), 1);
    }

    figure.effect-apollo img {
      -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
      transition: opacity 0.35s, transform 0.35s;
      -webkit-transform: scale3d(1.05,1.05,1);
      transform: scale3d(1.05,1.05,1);
    }

    figure.effect-apollo figcaption::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255,255,255,0.5);
      content: '';
      -webkit-transition: -webkit-transform 0.6s;
      transition: transform 0.6s;
      -webkit-transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
      transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
    }

    figure.effect-apollo p {
      position: absolute;
      left: 0;
      bottom: 0;
      margin: 1.5rem !important;
      padding: 0 1rem;
      max-width: 320px;
      border-left: 4px solid #fff;
      text-align: left;
      opacity: 0;
      -webkit-transition: opacity 0.35s;
      transition: opacity 0.35s;
    }

    figure.effect-apollo h2 {
      text-align: left;
    }

    figure.effect-apollo:hover img {
      opacity: 0.35;
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1,1,1);
    }

    figure.effect-apollo:hover figcaption::before {
      -webkit-transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
      transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
    }

    figure.effect-apollo:hover p {
      opacity: 1;
      -webkit-transition-delay: 0.1s;
      transition-delay: 0.1s;
    }

  }
  #about{
    & .desc{
      background: rgb(var(--whiteblue));
      padding: 60px 0;
    }
  }
  #mission{
    background-image: url('/images/mission.png');
    background-repeat: no-repeat;
    background-position: center 20%;
    background-size: cover;
    padding: 60px 0;
  }
  #globe{
    position: relative;
    padding: 60px 0;    
    &::after{
      content: "";
      background-image: url('/images/globe.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;        
      opacity: 0.15;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1; 
    }
    & .max-960{
      width: 100%;
      max-width: 960px;
      padding: 0 1rem;
      margin: 0 auto;
      @media (max-width: 767px){
        & h3{
          font-size: 1.5rem;
        }
        & h4{
          font-size: 1.25rem;
        }
      }
      & .my-8{
        margin: 6rem 0;
        @media (max-width: 767px){
          margin: 4rem 0;
        }
      }
    }
  }

  .marquee{
    position: absolute;
    top: 0;
    left: 0;
    line-height: 40px;
    animation: leftToRight linear infinite;
    animation-duration: 25s;
    animation-play-state: running;
  }
  .marquee:hover{
    animation-play-state: paused;
  }
  .marquee > div {
    padding-right: 3rem;
  }
  .marquee > div::before {
    content: " • ";
  }
  @keyframes leftToRight {
    from{
      left: 100%;
      transform: translateX(0);
    }
    to{
      left: 0;
      transform: translateX(-100%);
    }
  }
</style>
