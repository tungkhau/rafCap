<template>
  <div>
    <Header />
      <main>
        <section class="banner">
          <div class="mask"></div>
          <div class="caption">
            <h2>
              {{['條款', '条款', 'Terms'][$ti()]}}
            </h2>
            <p>
              {{['免責聲明', '免责声明', 'Disclaimer'][$ti()]}}
            </p>
          </div>
        </section>     
        <section class="my-5">
          <div class="container-lg">
            <div v-html='[
              `椽盛資本有限公司(本公司)均竭力確保所提供資訊的準確和可靠度，但不能保證其絕對準確和可靠，且亦不會承擔因任何不準確或遺漏而引起的任何損失或損害的責任（不管是否侵權法下的責任或合約責任又或其他責任）
              <br/><br/>
              本網站包含的內容和資訊乃根據公開資料分析和演釋，該公開資料，乃從可靠來源搜集，這些分析和資訊並未經獨立核實和本公司並不保證其準確性、完整性、即時性或者正確性。在本網站的報價價格、圖、購買或出售評論應該謹慎作為參考使用，本公司不應該被視為游說任何訂戶或訪客執行任何交易，您須為所有跟隨在本網站的評論和購買或出售執行交易負責。
              <br/><br/>
              本公司之資訊服務基於（現況）及（現有）提供，網站的資訊和內容如有更改恕不另行通知。
              <br/><br/>
              本公司有權但無此義務，改善或更正在本網站的任何部分之錯誤或疏失。用戶在沒有本公司明確的書面同意情況下，不得以任何方式複製、傳播、出售、出版、廣播、公布、傳遞資訊內容或者利用在本網站的資訊和內容作商業用途。投資股票和其它有價證券附帶風險，本公司鼓勵您使用本網站的風險管理和教育工具，但本公司不能並不會保證任何在本網站現在或未來的購買或出售評論和訊息會否帶來贏利。過往之表現不一定反映未來之表現，本公司不可能作出該保證及用戶不應該作出該假設。
              <br/><br/>
              本公司也許連接訂戶或訪客至其有興趣的網站，但本公司只提供此服務給訂戶或訪客並不為此安排負責。
              <br/><br/>
              本公司對於任何從本網站有關服務所獲得的資訊、內容或廣告，不聲明或保證其內容之正確性或可靠性。對於您透過本網站上之廣告、資訊或邀約而展示、購買或取得之任何產品、資訊資料，本公司亦不負品質保證之責任。`,
              `椽盛资本有限公司(本公司)均竭力确保所提供资讯的准确和可靠度，但不能保证其绝对准确和可靠，且亦不会承担因任何不准确或遗漏而引起的任何损失或损害的责任（不管是否侵权法下的责任或合约责任又或其他责任）
              <br/><br/>
              本网站包含的内容和资讯乃根据公开资料分析和演释，该公开资料，乃从可靠来源搜集，这些分析和资讯并未经独立核实和本公司并不保证其准确性丶完整性丶即时性或者正确性。在本网站的报价价格丶图丶购买或出售评论应该谨慎作为参考使用，本公司不应该被视为游说任何订户或访客执行任何交易，您须为所有跟随在本网站的评论和购买或出售执行交易负责。
              <br/><br/>
              本公司之资讯服务基於（现况）及（现有）提供，网站的资讯和内容如有更改恕不另行通知。
              <br/><br/>
              本公司有权但无此义务，改善或更正在本网站的任何部分之错误或疏失。用户在没有本公司明确的书面同意情况下，不得以任何方式复制丶传播丶出售丶出版丶广播丶公布丶传递资讯内容或者利用在本网站的资讯和内容作商业用途。投资股票和其它有价证券附带风险，本公司鼓励您使用本网站的风险管理和教育工具，但本公司不能并不会保证任何在本网站现在或未来的购买或出售评论和讯息会否带来赢利。过往之表现不一定反映未来之表现，本公司不可能作出该保证及用户不应该作出该假设。
              <br/><br/>
              本公司也许连接订户或访客至其有兴趣的网站，但本公司只提供此服务给订户或访客并不为此安排负责。
              <br/><br/>
              本公司对於任何从本网站有关服务所获得的资讯丶内容或广告，不声明或保证其内容之正确性或可靠性。对於您透过本网站上之广告丶资讯或邀约而展示丶购买或取得之任何产品丶资讯资料，本公司亦不负品质保证之责任。`,
              `
              Rafter Capital Limited ("Rafter Capital", or "we") and HKEX Information Services Limited endeavor to ensure the accuracy and reliability of the information provided, but cannot guarantee its accuracy and reliability, and will not be liable for any inaccuracy or omission. Liability for any loss or damage (whether by liability under contractual tort or contractual liability or other liability)
              <br/><br/>
              The content and information contained in this website are prepared and interpreted based on publicly available information collected from reliable sources. These analyses and information have not been independently verified by us and we does not guarantee its accuracy, completeness, timeliness or correctness. The quoted price, map, purchase or sale comments on this website should be used with caution as a reference. We shall not be considered to lobby any subscriber or visitor to perform any transaction, you shall take responsible for the purchase or sale of the executed transaction.
              <br/><br/>
              The information services of we are provided based on (current status) and (existing). The information and contents of this website are subject to change without notice.
              <br/><br/>
              Rafter Capital has the right but not the obligation to improve or correct any errors or omissions in any part of this website. Users may not copy, distribute, sell, publish, broadcast, publish, transmit or use the information and content on this website for commercial purposes in any way without the written consent from Rafter Capital. Investing in stocks and other securities carries risks, Rafter Capital encourages you to use the risk management and educational tools of this website, but Rafter Capital cannot guarantee, and the subscriber or website visitor should not assume, that the we performance will equal past performance.
              <br/><br/>
              We may make available links from this website to other third party sites. But we are only providing the link service and assume no liability for such other sites and the services or content provided therein.
              <br/><br/>
              Rafter Capital does not represent or endorse the accuracy or reliability of any information, advertisements or contents contained on, distributed through, or linked, downloaded or accessed from any of the services on this website. Rafter Capital is also not responsible for the quality assurance of any products or products information that you purchase or obtain through advertisements, information or offers on this website.
              `
            ][$ti()]'></div>
          </div>
        </section>
      </main>
    <Footer />
  </div>    
</template>

<style lang="scss" scoped>
  .banner{
    background-image: url('/images/iStock-485967825.jpg');
  }

</style>