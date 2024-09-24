import ExperienceParagraph from "@/components/experience-paragraph";
import Icons from "@/module/asset/presenter/icons";
import Image from "next/image";

export default function RootPage() {
  return (
    <>
      <h2>A. 專題研究報告</h2>

      <h3>專題：會議軟體擴充功能之設計與實作</h3>
      <h3>校務系統開發：衛生保健組網頁</h3>
      <h3>黑客松競賽：NCU Helper</h3>
      <h3>政府計畫：後備查詢系統</h3>
      <h3>服務學習：CSTP 中央資訊教育平台</h3>
      <h3>LINE 專案參與：LINE 購物 App</h3>

      <h2 className="mt-10">C. 研究計畫及自傳相關</h2>

      <section>
        <h3>簡歷</h3>
        <ul>
          <li>學歷：國立中央大學資訊工程學系 <i>（預計畢業：2025/06）</i></li>
          <li>專業領域：軟體工程實務、設計模式、專案管理、UI/UX 設計</li>
          <li>擅長語言與框架：Flutter、Next.js、FastAPI、C/C++</li>
        </ul>
      </section>

      <section>
        <h3>自傳</h3>
        <p>
          <b>對於軟體工程的嚮往</b>
        </p>
        <p>
          <>大一到大二這段時間中，我透過系上的課程學習到資工相關的基礎知識，並且參加了各項大小團隊，如新生知訊網、</>
          <>創遊社、服務學習課程負責人，透過這些活動，我不僅加強了個人的程式能力，也學習到了如何與人合作。在這過程中，</>
          <>不論課內外專案，都接觸到了各種不同的語言與技術，而我發現，儘管使用的技術在變，其核心價值——軟體工程——</>
          <>確是不變的。若要將技術落地，勢必無法離開軟體工程的範疇，也因此我開始對軟體工程有著濃厚的興趣。</>
        </p>
        <p>
          <>從大三開始，我從參與專案的身份，轉變為主導專案的角色，開始嘗試透過專案管理方法帶領團隊，提升專案的效率。</>
          <>我從服務學習課程負責人開始，創立 CSTP 團隊，開發系上的開放式課程平台，並與政府、學校合作，開發校務系統</>
          <>以及政府內部系統。而比起書本上的理論，我更好奇業界的軟體工程實務，因此我在大三暑假開始在 LINE Client Team，</>
          <>進行為期一年的實習，經歷到完整的 Scrum 流程，並對於單元測試、設計模式的實踐有了更深的了解。</>
        </p>
        <p>
          <b>想法創新，付諸實踐</b>
        </p>
        <p>
          <>經過這段時間的學習、各式各樣的專案，我希望能夠將自己所學的知識與經驗，付諸實踐，創造出更多有價值的產品。</>
          <>我以 CIO 的身份與幾位朋友成立艾里空股份有限公司，跟校內 AI 專業的實驗室合作，開發非接觸式智慧偵測裝置。</>
          <>我們在過程中有多項獲獎紀錄，亦爭取到許多政府計劃，期望以產學合作的形式，將實驗室的研究成果實際落地。</>
        </p>
        <p>
          <b>Keep Learning, Keep Progressing</b>
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
        <h3>獲獎與測驗紀錄</h3>

        <ExperienceParagraph
          title="第一名"
          subtitle="中山醫學大學 全國大專院校 創新、創意及創業競賽"
          dateString="Dec 2023"
        >
          <p>為我們新創公司 AIlicorn 獲得的獎項，使得我們成功進駐中山醫學大學的創業加速器。</p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="第二名"
          subtitle="梅竹黑客松 黑客組 LINE"
          dateString="Oct 2023"
          icons={[Icons.python, Icons.flutter]}
        >
          <p>
            <>我們是一個 5 人團隊，開發了一款名為 NCU Student Helper 的 LINE Bot 服務，它串接了中央大學的</>
            <>課務系統 eeclass 以及大眾運輸工具，亦透過向量資料庫整理校園行政、系所、周邊資訊，最後使用 LangChain </>
            <>大語言模型工具，提供使用者以自然語言方便地進行校園生活各種操作。</>
          </p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="專業級 (4/7)"
          subtitle="Collegiate Programming Examination (CPE)"
          dateString="Mar 2023"
          icons={[Icons.cpp]}
        >
          <p>我在演算法與資料結構領域具亦具有不錯的能力，在當次測驗中排名全國前 6.2%。</p>
        </ExperienceParagraph>
      </section>

      <section>
        <h3>工作經歷</h3>

        <ExperienceParagraph
          title="CIO"
          subtitle="AIlicorn 艾里空股份有限公司"
          dateString="Jan 2024 - Present"
          icons={[Icons.linux, Icons.docker, Icons.python, Icons.flutter]}
        >
          <p>Description</p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="TechFRESH 實習生"
          subtitle="LINE (Client Team)"
          dateString="Jul 2024 - Jun 2025 (Expected)"
          icons={[Icons.flutter, Icons.kotlin]}
        >
          <p>Description</p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="開發者"
          subtitle="中央大學衛生保健組網頁開發"
          dateString="Apr 2024 - Sep 2024"
          icons={[Icons.nextJs, Icons.docker]}
        >
          <p>Description</p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="開發者"
          subtitle="國防部後備查詢系統專案"
          dateString="Oct 2023 - Jan 2024"
          icons={[Icons.flutter]}
        >
          <p>Description</p>
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
          <p>Description</p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="課程負責人"
          subtitle="112 學年度服務學習、資訊與社會服務"
          dateString="Sep 2023 - Jan 2024"
        >
          <p>Description</p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="組長"
          subtitle="2023 中央大學新生知訊網"
          dateString="Jan 2023 - Aug 2023"
          icons={[Icons.flutter, Icons.vueJs]}
        >
          <p>Description</p>
        </ExperienceParagraph>

        <ExperienceParagraph
          title="秘書長"
          subtitle="ideaNCU 創意社群 中央創遊"
          dateString="Feb 2023 - Jun 2023"
          icons={[Icons.unity, Icons.cs]}
        >
          <p>Description</p>
        </ExperienceParagraph>
      </section>

      <h3>讀書計畫與研究計畫</h3>

      <h2 className="mt-10">附. 經歷審查證明</h2>

      <section className="print:h-screen">
        <h3>LINE TechFRESH 在職證明</h3>
        <Image
          className="w-full h-auto print:w-auto print:h-full print:object-contain"
          src="/images/line_certificate.png"
          alt="LINE Certificate"
          width={595} height={841}
        />
      </section>
    </>
  );
}
