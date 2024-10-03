import ExperienceParagraph from "@/components/experience-paragraph";
import FullPageCertificate from "@/components/full-page-certificate";
import Certificates from "@/module/asset/presenter/certificates";
import Icons from "@/module/asset/presenter/icons";
import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <h2>A. 專題研究報告</h2>

      <h3>專題：會議軟體擴充功能之設計與實作</h3>

      <h2 className="mt-10">C. 研究計畫及自傳相關</h2>

      <section>
        <h3>簡歷</h3>
        <ul>
          <li><b>學歷：</b>國立中央大學資訊工程學系 <i>（預計畢業：2025/06）</i></li>
          <li><b>專業領域：</b>軟體工程實務、設計模式、專案管理、UI/UX 設計</li>
          <li><b>擅長語言與框架：</b>Flutter、Next.js、FastAPI、C/C++</li>
          <li><b>實習或工作經驗：</b>LINE、AIlicorn <i>（創業成員）</i>、中央衛保組網頁開發</li>
          <li><b>領導經驗：</b>課程平台開發團隊 TPM、必/選修課課程負責人、中央新生知訊網組長</li>
        </ul>
      </section>

      <section>
        <h3>獲獎與測驗紀錄</h3>

        <ExperienceParagraph
          title="入圍 14 強"
          subtitle="fiti 創新創業激勵計畫"
          dateString="Sep 2024"
          icons={[Icons.linux, Icons.docker, Icons.python, Icons.flutter]}
        >
          <p>
            <>我改善了我們新創公司中，資料蒐集的流程，並為其設計<b>自動化機制</b>，使 AI 模型訓練的效率提升，更新頻率提升超過 50%，</>
            <>使得競賽時能有好的 Demo 效果，進而獲得評選入圍的殊榮。</>

          </p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="第一名"
          subtitle="中山醫學大學 全國大專院校 創新、創意及創業競賽"
          dateString="Dec 2023"
          icons={[Icons.linux, Icons.docker, Icons.python, Icons.flutter]}
        >
          <p>
            <>為我們新創公司 AIlicorn 獲得的獎項，使得我們成功進駐中山醫學大學的創業加速器。我在競賽中準備了產品具體的解決方法，</>
            <>並開發出 MVP，讓產品規劃具有說服力。</>
          </p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="第二名"
          subtitle="梅竹黑客松 黑客組 LINE"
          dateString="Oct 2023"
          icons={[Icons.python, Icons.flutter]}
        >
          <p>
            <Link href="https://github.com/quan0715/NCU_Student_Helper">NCU Student Helper</Link>
            <> 是我們開發的 LINE Bot 服務，它串接了中央大學的課務系統 eeclass 以及大眾運輸工具，亦透過向量資料庫整理中央的</>
            <>行政、系所、周邊資訊，最後使用 <b>LangChain 大語言模型工具</b>，提供使用者以自然語言方便地進行校園生活各種操作。</>
          </p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="專業級 (4/7)"
          subtitle="Collegiate Programming Examination (CPE)"
          dateString="Mar 2023"
          icons={[Icons.cpp]}
        >
          <p>我在演算法與資料結構領域具亦具有不錯的能力，在當次測驗中排名<b>全國前 6.2%</b>。</p>
        </ExperienceParagraph>
      </section>

      <section>
        <h3>工作經歷</h3>

        <ExperienceParagraph
          title="CIO 資訊長"
          subtitle="AIlicorn 艾里空股份有限公司"
          dateString="Jan 2024 - Present"
          icons={[Icons.linux, Icons.docker, Icons.python, Icons.flutter]}
        >
          <p>
            <>艾里空是我與朋友創立的公司，專注於開發<b>非接觸式 AIoT</b> 裝置，而我身為公司的資訊長，負責公司的基礎設施、後端 API、前端</>
            <>應用程式、邊緣裝置部屬以及各項技術的串接與整合。目前已與數家長照機構簽署 MOU 正在進行 PoC，亦正在與桃園市合作進行</>
            <>的智慧公廁一案。</>
          </p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="LINE TechFRESH 實習生"
          subtitle="Android Team / Shopping App Project"
          dateString="Jul 2024 - Jun 2025 (Expected)"
          icons={[Icons.flutter, Icons.kotlin]}
        >
          <p>
            <>我以實習生的身分參與 LINE 購物 App 的專案開發，為一 <b>DAU 達 10 萬人次</b>的專案。專案使用 Flutter 框架，以 </>
            <><b>Clean Architecture 乾淨架構</b>為基礎，並引入 <b>ATDD 驗收測試驅動開發</b>等較為新興的開發方法。而我在</>
            <>專案中開發了多項 Native My Account Page 的功能，將改善應用程式該分頁的效能，提升使用者流暢度。</>
          </p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="開發者"
          subtitle="中央大學衛生保健組網頁開發"
          dateString="Apr 2024 - Sep 2024"
          icons={[Icons.nextJs, Icons.docker]}
        >
          <p>
            <>為兩人共同開發的</>
            <Link href="https://github.com/an920107/health-care-website">專案</Link>
            <>，協助處室開發一套新的且帶有完整後台功能的</>
            <Link href="https://health.ncu.edu.tw/">網站</Link>
            <>。其中，我負責伺服器硬體組裝、Spec 文件撰寫、UI 設計，以 <b>Next.js 套用 Clean Architecture</b> 開發前端，並善用 </>
            <>Docker 與 GitHub Workflow 進行<b>自動化集成與部屬</b>，提高開發與測試效率，使的我們能在半年內從零完成網站的開發與建置。</>
          </p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="開發者"
          subtitle="國防部後備查詢系統專案"
          dateString="Oct 2023 - Jan 2024"
          icons={[Icons.flutter]}
        >
          <p>兩人與國防部合作開發後備資源查詢 APP 的 MVP，我負責前端並使用 Flutter 進行開發，改善原本不流暢的作業流程。</p>
        </ExperienceParagraph>
      </section>

      <section>
        <h3>領導經歷</h3>

        <ExperienceParagraph
          title="專案負責人"
          subtitle="CSTP 中央資訊教育平台"
          dateString="Sep 2023 - Present"
          icons={[Icons.flutter, Icons.firebase]}
        >
          <p>
            <>我成立一個 6 人團隊，領導大家開發一個開放式線上課程平台。身為 TPM 的角色，我設計了開發規範，並將其整理成文件；</>
            <>在開會前將抽象的大功能，拆分成具體的實作票；在團隊成員遇到技術問題時，給予協助。技術方面，我們使用 Flutter 開發前端，</>
            <>串接 Firebase 作為 NoSQL 資料庫。</>
          </p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="課程負責人"
          subtitle="校必修 服務學習、系選修 資訊與社會服務"
          dateString="Sep 2022 - Jan 2024"
        >
          <p>
            <>課程培訓資工系同學，強調費曼學習、換位思考，辦理共計 14 場針對國小至高中的程式教育營隊、3 套線上課程影片，並經營網路</>
            <>社群媒體以及策劃開放式課程平台。</>
          </p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="組長"
          subtitle="2023 中央大學新生知訊網"
          dateString="Jan 2023 - Aug 2023"
          icons={[Icons.flutter, Icons.vueJs, Icons.python]}
        >
          <p>
            <Link href="https://23.ncufresh.ncu.edu.tw">新生知訊網</Link>
            <>以 Vue.js 為前端框架，彙整校園各個重要時程與資訊，提供給新生使其能快速適應校園生活。我在團隊中擔任影音組長，</>
            <>透過撰寫 <b>Python 自動化</b>字幕工具，使團隊工作效率提升。另外我也兼任</>
            <Link href="https://23.ncufresh.ncu.edu.tw/game">小遊戲</Link>
            <>開發者，以 Flutter 的 Flame 引擎開發網頁小遊戲。</>
          </p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="秘書長"
          subtitle="ideaNCU 創意社群 中央創遊"
          dateString="Feb 2023 - Jun 2023"
          icons={[Icons.unity, Icons.cs]}
        >
          <p>
            <>我在創遊社擔任秘書長，負責社團內部的行政事務，並且協助社團的活動舉辦。就任期間，曾代表中央大學赴日參訪鹿兒島大學，</>
            <>將過程的見聞以 Unity 開發成遊戲 3D 遊戲 </>
            <Link href="https://github.com/an920107/kagoshima-monopoly">Kagoshima Monopoly</Link>
            <>，成果被刊登於教學發展中心之</>
            <Link href="https://drive.google.com/file/d/1PSGtWNQGOGbMDn-74UwDhuQbT3wNzfoT/view?usp=sharing">刊物</Link>
            <>。</>
          </p>
        </ExperienceParagraph>
      </section>

      <section>
        <h3>其他專案</h3>

        <ExperienceParagraph
          title="獨立開發者"
          subtitle="Minecraft Server Installer"
          dateString="Apr 2020"
          icons={[Icons.cs]}
        >
          <p>
            <>我以 C# 撰寫遊戲 Minecraft 的伺服器安裝器，發佈至 </>
            <Link href="https://www.youtube.com/watch?v=yNis5vcueQY">YouTube</Link>
            <> 獲得了 <b>34 萬次</b>觀看，以及一千多則留言。</>
          </p>
        </ExperienceParagraph>
      </section>

      <section>
        <h3>自傳</h3>
        <p>
          <b className="text-black">對於軟體工程的嚮往</b>
        </p>
        <p>
          <>大一到大二這段時間中，我透過系上的課程學習到資工相關的基礎知識，並且參加了各項大小團隊，如新生知訊網、</>
          <>創遊社、服務學習課程負責人，透過這些活動，我不僅加強了個人的程式能力，也學習到了如何與人合作。在這過程中，</>
          <>不論課內外專案，都接觸到了各種不同的語言與技術，而我發現，儘管使用的技術在變，其核心價值——<b>軟體工程</b></>
          <>——確是不變的。若要將技術落地，勢必無法離開軟體工程的範疇，也因此我開始對軟體工程有著濃厚的興趣。</>
        </p>
        <p>
          <>從大三開始，我從參與專案的身份，轉變為主導專案的角色，開始嘗試透過專案管理方法帶領團隊，提升專案的效率。</>
          <>我從服務學習課程負責人開始，創立 CSTP 團隊，開發系上的開放式課程平台。另外也<b>與學校、政府合作</b>，開發校務系統</>
          <>以及政府內部系統。而比起書本上的理論，我更好奇業界的軟體工程實務，因此我在大三暑假開始在 LINE Android Team，</>
          <>進行為期一年的實習，經歷到<b>完整的 Scrum 流程</b>，並對於單元測試、設計模式的實踐有了更深的了解。</>
        </p>
        <p>
          <b className="text-black">想法創新，付諸實踐</b>
        </p>
        <p>
          <>經過這段時間的學習、各式各樣的專案，我希望能夠將自己所學的知識與經驗，付諸實踐，創造出更多有價值的產品。</>
          <>我以 CIO 的身份與幾位朋友成立艾里空股份有限公司，跟校內 AI 專業的實驗室合作，開發非接觸式智慧偵測裝置。</>
          <>我們在過程中有多項獲獎紀錄，亦爭取到許多政府計劃，期望以產學合作的形式，將實驗室的研究成果實際落地。</>
        </p>
        <p>
          <b className="text-black">Keep Learning, Keep Progressing</b>
        </p>
        <p>
          <>在資工系四年，我以一句話總結自己最深刻的體會 &ldquo;Keep learning, keep progressing.&rdquo;</>
        </p>
        <p>
          <>資工相較於其他領域很不一樣，從大一到現在，每年都有很不一樣的科技浪潮，元宇宙、區塊鏈、人工智慧......，</>
          <>資工是一個快速變遷的學科。身為資工人，我們不能停滯於課本上的知識，唯有不斷學習，才不會被時代淘汰。</>
          <>因此，我從大一開始就積極參與各種專案，不斷學習新技術，不斷提升自己的能力，最後實際將所學產出。</>
        </p>
      </section>

      <section>
        <h3>讀書計畫與研究計畫</h3>
      </section>

      <h2 className="mt-10">附. 經歷審查證明</h2>

      <FullPageCertificate
        title="LINE TechFRESH 在職證明"
        certificate={Certificates.line}
      />

      <FullPageCertificate
        title="AIlicorn 在職證明"
        certificate={Certificates.ailicorn}
      />

      <FullPageCertificate
        title="梅竹黑客松 黑客組 LINE 第二名"
        certificate={Certificates.hackathon}
      />

      <FullPageCertificate
        title="中山醫學大學 全國大專院校 創新、創意及創業競賽 第一名"
        certificate={Certificates.csmu}
      />

      <FullPageCertificate
        title="fiti 創新創業激勵計畫 入圍 14 強"
        certificate={Certificates.fiti}
      />

      <FullPageCertificate
        title="2023 中央大學新生知訊網 組長"
        certificate={Certificates.ncuFresh}
      />

      <FullPageCertificate
        title="中央創遊社 秘書組長證明"
        certificate={Certificates.ncuGame}
      />

      <FullPageCertificate
        title="清水高中人工智慧營隊 服務證明"
        certificate={Certificates.qingShuei}
      />
    </>
  );
}
