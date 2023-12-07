<template>
  <div>
    <Header />
        <main>
          <section class="banner">
            <div class="mask"></div>
            <div class="caption">
              <h2>{{['簡介', '简介', 'ABOUT'][$ti()]}}</h2>
              <p>{{['關於椽盛', '关於椽盛', 'About Us'][$ti()]}}</p>
            </div>
          </section>
          
          <section class="mt-5 mb-4">
            <div class="container-lg">
              <div class="row">
                <div class="col-lg-9 offset-lg-2 text-serif my-3 my-lg-5">
                  <h1 class="text-darkblue mb-4">
                    {{['椽盛資本', '椽盛资本', 'Rafter Capital'][$ti()]}}
                  </h1>
                  <h5 class="mb-4 font-weight-lighter text_21">
                    <p v-html='[
                      `椽盛資本有限公司，為<strong class="font-weight-bold">香港證監會持牌之金融機構</strong>資產管理以及機構﹑家族信託及高值戶的投資顧問。以「椽盛資本」的專業品牌，於中港台金融界擁有豐富基金投資及管理經驗。管理團隊擁有豐富金融經驗和知識，同時亦擁有覆蓋全球之強大網絡。`,
                      `椽盛资本有限公司，为<strong class="font-weight-bold">香港证监会持牌之金融机构</strong>资产管理以及机构、家族信托及高值户的投资顾问。以「椽盛资本」的专业品牌，於中港台金融界拥有丰富基金投资及管理经验。管理团队拥有丰富金融经验和知识，同时亦拥有覆盖全球之强大网络。`,
                      `Rafter Capital Limited is a <strong class="font-weight-bold">Hong Kong Securities and Futures Commission’s licensed financial institution (License No. BRG363)</strong> specializing in asset management and investment advisory for corporations, family trusts, and high net-worth clients. Along with our professional branding and expertise, our Company possesses seasoned fund investment and management experiences in the Greater China financial sector. The management team retains rich financial skills and knowledge, and at the same time, has an extensive worldwide network connection.`
                    ][$ti()]'></p>  
                    <p v-html='[
                      `透過香港證監會核准的資產管理平台替客戶提供多元化服務，每時每刻盤旋於環球各主要金融市場，捕捉合適資時機，尋找成長型投資項目，通過前期融資PRE-IPO或新股投資IPO，貫徹執行客戶的平行風險與回報目標，以爭取最大化投資收益。`,
                      `透过香港证监会核准的资产管理平台替客户提供多元化服务，每时每刻盘旋於环球各主要金融市场，捕捉合适资时机，寻找成长型投资项目，通过前期融资PRE-IPO或新股投资IPO，贯彻执行客户的平行风险与回报目标，以争取最大化投资收益。`,
                      `Through the Hong Kong Securities and Futures Commission’s approved asset management platform, we can provide clients with diversified services and grasp every moment to monitor major financial markets around the world, looking for investment projects with growth potential through the early stages of financing in the pre-IPOs or new IPOs, so we can duly execute a balanced risk and return target for our clients to maximize their investment returns.`
                    ][$ti()]'></p>
                  </h5>
                </div>
              </div>
            </div>
            <div class="container-fluid my-3 my-lg-5 position-relative overflow-hidden">
              <div class="text-center position-absolute m-auto text-serif text-darkblue h-100 w-100 d-flex" >
                <div class="w-100 m-auto text-center">
                  <h2 class="text_21 font-weight-normal mb-2">
                    {{[ '連繫全球金融市場', '连系全球金融市场', `Connecting the world's financial markets`][$ti()]}}
                  </h2>              
                  <h1 class="text_48" >
                    {{['植根亞洲&#160;&#160;放眼全球', '植根亚洲&#160;&#160;放眼全球', 'Rooted in Asia, Global in Perspective'][$ti()]}}
                  </h1>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 px-0" style="opacity: 0.15">
                  <div class="embed-responsive embed-responsive-32by9 d-none d-lg-block">
                    <div class="embed-responsive-item" style="background-image: url('/images/globe.png'); background-size: cover; background-repeat: no-repeat; background-position: center 30%;">
                    </div>
                  </div>
                  <div class="embed-responsive embed-responsive-16by9 d-block d-lg-none">
                    <div class="embed-responsive-item" style="background-image: url('/images/globe.png'); background-size: cover; background-repeat: no-repeat; background-position: center top;">
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
          </section>
          <section class="my-3 my-lg-5">
            <div class="container-fluid">
              <div class="row my-3 my-lg-5">
                <div class="col-lg-12 text-center">
                  <h4 class="text-darkblue text-serif mb-4">
                    {{['投資理念', '投资理念', 'Investment Philosophy'][$ti()]}}
                  </h4>
                  <p class="text_21 text-serif">
                    {{[
                    '投資理念為椽盛資本能有效達到上述目標的基礎，兼能確保資產管理公司的持續長遠發展，我們衷心堅守以下的投資準則：', 
                    '投资理念为椽盛资本能有效达到上述目标的基础，兼能确保资产管理公司的持续长远发展，我们衷心坚守以下的投资准则：', 
                    'Rafter Capital believes our investment philosophy can efficiently achieve the above fundamental goals for our clients, while making sure the sustainable development of the Company. We truly uphold the below investment principles:'
                    ][$ti()]}}
                  </p>
                </div>
                <div class="horizontal-division my-3 my-lg-4"></div>     
              </div>
              <div class="row">
                <div class="col-md-6 px-0 px-lg-3 my-4">
                  <div class="embed-responsive embed-responsive-21by9">
                    <div class="embed-responsive-item" style="background-image: url('/images/concept.jpeg'); background-size: cover; background-repeat: no-repeat; background-position: center top;">
                    </div>
                  </div>                   
                  <h4 class="text-darkblue text-serif my-4 text-center">
                    {{['宏觀分析', '宏观分析', 'Macro analysis'][$ti()]}}
                  </h4>
                  <div class="text-center px-4 text_18 text-serif">
                    {{[
                      '關注國際政治與宏觀經濟的變化，著眼於亞洲及全球各主要國家政策的方向與變更，著力於分析不同重大宏觀因素與主要國家政策對於各個行業發展的深遠及潛在影響。', 
                      '关注国际政治与宏观经济的变化，着眼於亚洲及全球各主要国家政策的方向与变更，着力於分析不同重大宏观因素与主要国家政策对於各个行业发展的深远及潜在影响。', 
                      'We focus on changes in the macro economy and international political front, while eyeing the policy directions and movements of Asia and the world’s major countries. Emphasis on analyzing different major macro elements and the long-lasting, potential impact of major countries’ policies on individual industry’s development is also a key strategy.'
                    ][$ti()]}}
                  </div>
                </div>
                <div class="col-md-6 px-0 px-lg-3 my-4">
                  <div class="embed-responsive embed-responsive-21by9">
                    <div class="embed-responsive-item" style="background-image: url('/images/concept_2.jpeg'); background-size: cover; background-repeat: no-repeat; background-position: center center;">
                    </div>
                  </div>                   
                  <h4 class="text-darkblue text-serif my-4 text-center">
                    {{['行業分析', '行业分析', 'Industry analysis'][$ti()]}}
                  </h4>
                  <div class="text-center px-4 text_18 text-serif">
                    {{[
                    '對於不同行業的商業模式、盈利模式作深入剖析，分析各行業運作的關鍵因素與盈利成長潛力，並精細預測具長遠發展潛力的行業趨勢變化與未來前景，選擇投資具有美好發展前景的朝陽行業。', 
                    '对於不同行业的商业模式丶盈利模式作深入剖析，分析各行业运作的关键因素与盈利成长潜力，并精细预测具长远发展潜力的行业趋势变化与未来前景，选择投资具有美好发展前景的朝阳行业。', 
                    'We conduct deep and unique analyses on different industries’ business and revenue models, taking a look into various industries’ key factors and revenue growth potentials for their business operations. Furthermore, we strive to precisely forecast the long-term development potential for changes in industry trends and future outlook, and selecting growth industries with a positive outlook for investing.'
                    ][$ti()]}}                    
                  </div>
                </div>
              </div>
              <div class="row my-lg-5 my-3 bg-gray">
                <div class="col-xl-6 px-0 my-auto">
                  <div class="embed-responsive embed-responsive-21by9">
                    <div class="embed-responsive-item" style="background-image: url('/images/concept_3.webp'); background-size: cover; background-repeat: no-repeat; background-position: center top;">
                    </div>
                  </div>                                     
                </div>
                <div class="col-xl-6 my-auto px-8 py-4">
                  <h4 class="text-darkblue text-serif my-4 text-center">
                    {{['個股分析', '个股分析', 'Individual stock analysis'][$ti()]}}
                  </h4>
                  <div class="text-center text_18 text-serif">
                    {{[
                    '從基本股盈利情況、財務狀況以及主要基本面指標作全面評估。深入企業內部進行細緻考察，對主要股東進行探訪，瞭解股東對公司的未來願景，並與管理層討論和分析公司所面對的各種問題，從而綜合分析公司發展前景，較為準確地估計該股實際潛在價值。', 
                    '从基本股盈利情况丶财务状况以及主要基本面指标作全面评估。深入企业内部进行细致考察，对主要股东进行探访，了解股东对公司的未来愿景，并与管理层讨论和分析公司所面对的各种问题，从而综合分析公司发展前景，较为准确地估计该股实际潜在价值。', 
                    'We take into account each company’s ordinary shares earnings, financial situation, and fundamental indicators when conducting a comprehensive assessment. We also go into the internal operations of a business to make detailed observations, interviewing with major shareholders to gain their unique perspectives on their company’s future outlook, and meeting with their senior management to discuss on the potential obstacles, so as to consolidate the analysis on that company’s developmental outlook, and from this, accurately determine the potential value of that company.'
                    ][$ti()]}}                    
                  </div>
                </div>
              </div>
              <div class="row my-lg-5 my-3 bg-gray">
                <div class="col-xl-6 px-0 order-1 order-xl-2 my-auto">
                  <div class="embed-responsive embed-responsive-21by9">
                    <div class="embed-responsive-item" style="background-image: url('/images/concept_4.jpeg'); background-size: cover; background-repeat: no-repeat; background-position: center top;">
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 my-auto px-8 py-4 order-2 order-xl-1">
                  <h4 class="text-darkblue text-serif my-4 text-center">
                    {{['估值精算', '估值精算', 'Value evaluation'][$ti()]}}
                  </h4>
                  <div class="text-center text_18 text-serif">
                    {{[
                    '根據目標投資企業的企業與商業發展戰略，綜合分析企業本身的發展優勢與弱點，剖析企業於各業務市場的競爭優勢與其可持續性，並結合我們能對明星行業作透徹了解的資源與大數據優勢，掌握目標投資企業的精確估值。', 
                    '根据目标投资企业的企业与商业发展战略，综合分析企业本身的发展优势与弱点，剖析企业於各业务市场的竞争优势与其可持续性，并结合我们能对明星行业作透彻了解的资源与大数据优势，掌握目标投资企业的精确估值。', 
                    'We evaluate a target invested company’s value according to its corporate and business strategic development, a consolidated analysis on its development strengths and weaknesses, and its competitive advantage and sustainability in its respective market. This comprehensive look allows us to merge our capabilities to understand fully the operations and big data advantages on prominent industries, grasping the precise valuation on the target invested company.'
                    ][$ti()]}}                     
                  </div>
                </div>
              </div>              
            </div>              
          </section>          
          <section>
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12 my-auto py-5">
                  <h4 class="text-darkblue text-serif text-center my-4"> 
                    {{['我們的使命', '我们的使命', 'Our Mission'][$ti()]}}   
                  </h4>
                  <div class="text_21 text-serif">
                    <p class="text-center">
                      {{['椽盛資本自創立以來，根植亞洲，並尋求更多元化的發展，放眼全球', '椽盛资本自创立以来，根植亚洲，并寻求更多元化的发展，放眼全球', 'Rafter Capital has been rooted in Asia since our founding, and have continued to look for new avenues for growth and paths to success in the new and ever developing world'][$ti()]}}   
                    </p>
                    <div class="horizontal-division my-3 my-lg-4"></div>     
                    <div class="container-lg">
                      <p>
                        {{[
                          '作為亞太區規模的資產管理集團，椽盛資本不斷努力進取，務求成為一間管理完善、國際稱譽，以及靈活穩健的金融企業，驥能滿足客戶瞬息萬變的需求。', 
                          '作为亚太区规模的资产管理集团，椽盛资本不断努力进取，务求成为一间管理完善丶国际称誉，以及灵活稳健的金融企业，骥能满足客户瞬息万变的需求。', 
                          'As a sizable asset management company in APAC, Rafter Capital strives to improve ourselves unceasingly, aiming to be a well-managed, internationally-known, and adaptable financial company, hoping to satisfy the ever-changing demands and needs of our clients.'
                        ][$ti()]}}
                      </p>
                      <p>
                        {{[
                          '我們透過聆聽、開發和探索，執行和監測每一投資項目的實際表現去獲取客戶對我們的信任和認同。我們擁有優質的分析團隊及投資顧問，深入掌握熱門行業大數據，能針對每一位尊貴投資者的回報預期和風險承受能力，提供最合適的投資管理服務。', 
                          '我们透过聆听丶开发和探索，执行和监测每一投资项目的实际表现去获取客户对我们的信任和认同。我们拥有优质的分析团队及投资顾问，深入掌握热门行业大数据，能针对每一位尊贵投资者的回报预期和风险承受能力，提供最合适的投资管理服务。', 
                          'Through listening, exploring, pioneering, executing, and monitoring every investment project’s actual performance, we strive to gain our customer’s trust and recognition. We are comprised of a team of quality, analytical people and investment advisors, who take hold of the big data of some of the most popular sectors to match with each of our prestige customer’s expected return and acceptable risk level, in order that we can provide the most suitable investment management services.'
                        ][$ti()]}}                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>              
          </section>
        </main>
    <Footer />
  </div>    
</template>

<style lang="scss" scoped>
  .banner{
    background-image: url('/images/about.jpeg');
  }
  .bg-lightblue{
    background-color: rgb(var(--whiteblue));
  }
  .px-8{
    padding: 0 120px;
    @media (max-width: 575px){
      padding: 0 40px;
    }
  }
</style>