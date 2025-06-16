import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useTranslation } from "@/hook/useTranslation";
import { useCart } from '@/context/CartContext';
import { products, Product } from '@/data/products';
import Script from "next/script";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu.",
};

export default function SeaFucoidan() {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const product: Product | undefined = products.find(p => p.id === 'seafucoidandx');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index)); // toggle
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent the link from navigating
    addToCart(product as Product);
  };

  useEffect(() => {
    const el1 = document.querySelector("ul.dx-bar li:nth-of-type(2) span.bar");
    if (el1 instanceof HTMLElement) {
      el1.style.transition = "width 2s cubic-bezier(.86, 0, .07, 1)";
      el1.style.width = "55%";
    }
    const el2 = document.querySelector(
      ".bar-graph-02 ul.dx-bar li:nth-of-type(2) span.bar"
    );
    if (el2 instanceof HTMLElement) {
      el2.style.transition = "width 2s cubic-bezier(.86, 0, .07, 1)";
      el2.style.width = "48%";
    }
    const bars = document.querySelectorAll(
      "ul.dx-bar li:nth-of-type(1) span.bar"
    );
    bars.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.transition = "width 2s cubic-bezier(.86, 0, .07, 1)";
        el.style.width = "100%";
      }
    });
  }, []);

  return (
    <Layout>
      <div className="sf-section-dx">
        <div className="product-nav-wrapper">
          <div className="product-nav-in">
            <div className="product-nav-name">
              <Link href="/products/seafucoidandx">
                <h1>{t("シーフコイダンDX")}</h1>
              </Link>
            </div>
            <div className="product-nav-buy">
              <Link className="swing" href="/products/seafucoidandx#buy" onClick={handleAddToCart}>
                Mua
              </Link>
            </div>
          </div>
        </div>

        <div className="dx-fv">
          <div className="dx-fv-in inner sphone-padding">
            <div className="dx-fv-copy copy-1" style={{justifyItems: "center"}}>
              <Image
                src="/dx-logo-white.png"
                alt="Biển Fucoidan DX"
                height={93}
                width={335}
              />
            </div>
            <div className="dx-fv-copy copy-2">
              <p className="big">
                {t("日本の技術をこの1本に")}
              </p>
            </div>
            <div className="dx-fv-copy copy-3 inview slash">
              <p>
                {t("シーフコイダンが発売されて20年以上。私たちは皆様に最高品質のフコイダンを提供すべく様々な研究機関と共に日々努力を重ね、フコイダンの純度・安全性・原料にいたるまで徹底的に商品に磨きをかけてきました")}
                <br />
                {t("そして2013年、シーフコイダンの最上位モデルとしてシーフコイダンDXの販売がスタートしました。")}
                <br />
                {t("シーフコイダンDX販売から5年、シーフコイダンDXにさらに磨きをかけて中身をグレードアップ。")}
                <br />
                {t("この革新的なフコイダンを世界の方々にお届けする事が私たちの使命です。")}
              </p>
            </div>
          </div>
        </div>

        <div className="dx-section-01">
          <div className="dx-movie dx-move-01">
            <iframe
              id="brandnew"
              src="https://player.vimeo.com/video/300121209?background=1&amp;loop=0&amp;autoplay=0"
            ></iframe>
          </div>
          <div className="dx-01-in" style={{justifyItems: 'center'}}>
            <p>
              {t("さらに新しくなった")} HORIUCHI FUCOIDAN
            </p>
            <div className="dx-section-logo">
              <p>
                {t("このすべてが海藻エキス")}
              </p>
              <Image
                src="/dx-logo-black.png"
                alt="Biển Fucoidan DX"
                height={112}
                width={400}
              />
            </div>
          </div>
        </div>
        <div className="dx-section-02">
          <div className="inner sphone-padding">
            <p>
              {t("私たちの商品はずっとこだわりを持ってお客様に提供しています。")}
              <br />
              {t("それは厳選された海藻のみで商品を作ること。")}
              <br />
              {t("無駄な物など入れず純粋に海藻エキスにこだわりぬいた商品を皆様へ提供する事。")}
            </p>
          </div>
        </div>

        <div className="dx-section-03">
          <div id="particles-js">
            <canvas
              className="particles-js-canvas-el"
              width="1232"
              height="4002"
              style={{ width: "100%", height: "100%" }}
            ></canvas>
          </div>
          <div className="dx-03-in inner sphone-padding">
            <div className="dx-03-copy" style={{ justifyItems: 'center'}}>
              <Image
                src="/dx-logo-icon.png"
                alt=""
                width="100"
                height="88"
              />
              <h2 className="big">
                {t("目指したのは新しいカタチのフコイダン。")}
                <br />
                HORIUCHI FUCOIDAN
              </h2>
              <p>
                {t("HORIUCHI FUCOIDANはFCC HORIUCHI独自の技術で抽出されたFUCOIDANです。")}
              </p>
            </div>
            <div className="dx-03-content-copy">
              <p className="big">{t("分子量")}</p>
              <p>
                {t("HORIUCHI FUCOIDANには高純度の2種類のFUCOIDANがあります。")}
              </p>
            </div>
            <dl>
              <dd>
                <div className="dx-03-content">
                  <div className="mol-in">
                    <p className="mol-copy">
                      {t("トンガ産のモズクから抽出した高純度フコイダンを独自技術により低分子化し配合。")}
                    </p>
                    <p className="mol-name">
                      <span>{t("【低分子フコイダン】")}</span>
                      HORIUCHI L-FUCOIDAN
                    </p>
                    <div className="dx-mol-capa">
                      <p>{t("分子量")}</p>
                      <p>{t("近似")}</p>
                      <p className="mol-number renner">500</p>
                    </div>
                  </div>
                </div>
              </dd>
              <dd>
                <div className="mol-in">
                  <p className="mol-copy">
                    {t("チリ産のダービリアコンブから丁寧に抽出した高純度フコイダン。")}
                  </p>
                  <p className="mol-name">
                    <span>{t("【高分子フコイダン】")}</span>HORIUCHI H-FUCOIDAN
                  </p>
                  <div className="dx-mol-capa">
                    <p>{t("分子量")}</p>
                    <p className="mol-number renner">
                      6000<span>~</span>40000
                    </p>
                  </div>
                </div>
              </dd>
            </dl>
            <div className="dx-03-horiuchi">
              <p className="big">
                {t("日本独自の酵素分解技術で低分子化した")}<span>HORIUCHI L-FUCOIDAN</span>
              </p>
              <p>
                {t("シーフコイダンDXは可能な限り海藻全体の成分を、長年培った独自の技術により、丸ごと低分子化する事でフコイダンを体内にスムーズに吸収する事ができます。フコイダンの分子量は元々２０万を超えます。人間が体内へ吸収するにはおよそ(分子量３０００)だと言われていますので、そのままではほとんど体外へ排出されてしまいます。シーフコイダンDXは平均分子量５００以下にする事で効率よくフコイダンを体内へ吸収する事を実現しました。")}
              </p>
            </div>
            <div className="dx-03-kombu">
              <div className="dx-kombu-in">
                <p className="big">
                  {t("九州大学との共同研究で生まれた高分子")}
                  <span>HORIUCHI H-FUCOIDAN</span>
                </p>
                <div className="dx-kombu-in-float">
                  <div className="kombu-float kombu-img pc-only">
                    <Image
                      src="/dx-durvillia.jpg"
                      alt="durvillia"
                      height={427}
                      width={300}
                    />
                  </div>
                  <div className="kombu-float kombu-text">
                    <p>
                      {t("2017年に福岡県と九州大学が一体となり、ダービリアコンブから抽出された高分子フコイダンの共同研究を開始しました。共同研究により誕生したのが、HORIUCHI H-FUCOIDANです。HORIUCHI H-FUCOIDANはチリ産のダービリアコンブから抽出された新たな高分子フコイダン。ダービリアコンブは南極大陸と南米チリの最南端地域に自生する天然昆布です。さらにダービリアコンブはチリでは胃腸薬として昔から愛されている褐藻類です。次のダービリアコンブのイラストはチリ領事館から送られてきた画像です。ダービリアコンブは最大で10m～20mにもなる大型の褐藻類で、有害物質などにまったく汚染されていないミネラルたっぷりの南極の海で育つため良質なフコイダンを含有しております。")}
                    </p>
                  </div>
                  <div className="kombu-float kombu-img sp-only">
                    <Image
                      src="/dx-durvillia.jpg"
                      alt="durvillia"
                      height={300}
                      width={427}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Script
            src="https://sea-fucoidan.com/cdn/shop/t/1/assets/particles.js"
            type="text/javascript"
          ></Script>
          <Script
            src="https://sea-fucoidan.com/cdn/shop/t/1/assets/particles-setting.js"
            type="text/javascript"
          ></Script>
        </div>

        <div className="dx-section-04">
          <div className="dx-movie dx-move-02">
            <iframe
              id="human-background"
              src="https://player.vimeo.com/video/299627452?autoplay=1&amp;background=1"
            ></iframe>
          </div>
          <div className="dx-04-in inner sphone-padding">
            <div className="dx-04-copy">
              <p>{t("低分子と高分子")}</p>
              <h2 className="big">
                {t("２つの分子の特徴を兼ね備えた、ハイブリッドフコイダン")}
              </h2>
            </div>
            <div className="dx-04-content">
              <div className="dx-04-content-in">
                <p className="big">HORIUCHI L-FUCOIDAN</p>
                <span>Horiuchi Low Molecular-Fucoidan</span>
                <p>
                  {t("フコイダンの働きはそのままに、超低分子化に成功。口腔内・胃からの積極的な吸収を可能にしました。")}
                </p>
              </div>
              <div className="dx-04-content-in">
                <p className="big">HORIUCHI H-FUCOIDAN</p>
                <span>Horiuchi High Molecular-Fucoidan</span>
                <p>{t("口腔内や胃で分解せず腸まで届き、腸壁を刺激・活性します。")}</p>
              </div>
            </div>
            <div className="dx-video-start video-start">
              <span>start</span>
            </div>
            <div className="video-screen video-screen-human_en">
              <ul className="video-nav">
                <li id="video-close"></li>
                <li id="mute">この動画には音声はありません。</li>
              </ul>
              <div className="video-screen-in">
                <iframe
                  id="en-popup-YouTube-player"
                  src="https://player.vimeo.com/video/277252784"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="dx-section-05">
          <div className="dx-05-in inner sphone-padding">
            <div className="dx-05-copy">
              <h3 className="big">
                {t("新しい技術でフコイダンの力を引き出します")}
                <br />
                {t("数字からでもわかるこだわり。")}
              </h3>
              <p>
                {t("SEA FUCOIDAN DX一瓶に対するHORIUCHI FUCOIDAN配合比率")}
              </p>
            </div>
            <table className="mol-table">
              <tbody>
                <tr>
                  <td className="mol-text">
                    <p className="big">{t("高分子フコイダン")}</p>
                    <p>Horiuchi H-Fucoidan</p>
                    <p className="mol-text-number">
                      {t("約")}<span className="nowrap renner">18%</span>{t("配合")}
                    </p>
                    <span className="mol-bar inview"></span>
                  </td>
                  <td className="mol-img">
                    <Image
                      src="/dx-bin.png"
                      alt=""
                      width={158}
                      height={158}
                      style={{ maxWidth: "1580px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="mol-text">
                    <p className="big">{t("低分子フコイダン")}</p>
                    <p>Horiuchi L-Fucoidan</p>
                    <p className="mol-text-number">
                      {t("約")}<span className="nowrap renner">80%</span>{t("配合")}
                    </p>
                    <span className="mol-bar inview"></span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mol-graph">
              <div className="mol-graph-in">
                <canvas id="graph"></canvas>
              </div>
              <ul className="graph-name">
                <li>
                  <span></span>Horiuchi L-Fucoidan(80%)
                </li>
                <li>
                  <span></span>Horiuchi H-Fucoidan(18%)
                </li>
                <li>
                  {t("その他2%はビタミン等防腐剤保存料なし")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="dx-section-06">
          <div className="dx-06-in inner sphone-padding">
            <div className="dx-06-copy">
              <p>{t("従来品との比較")}</p>
              <h3 className="big">
                {t("DXは中身もデラックス")}
              </h3>
              <p>{t("シーフコイダンDXは従来品より格段に進化しております。")}</p>
            </div>
            <div className="dx-06-link">
              <Link className="en" href="/pages/compare">
                {t("詳しい比較はコチラ")}
              </Link>
            </div>
            <div className="dx-06-graph bar-graph-01">
              <p className="big">{t("フコース")}</p>
              <div className="bar-graph-name">
                <p>{t("最大")}</p>
                <p>
                  <span className="renner">1.81</span>{t("倍")}
                </p>
              </div>
              <ul className="dx-bar">
                <li>
                  <p>
                    Sea Fucoidan DX
                  </p>
                  <span className="bar inview"></span>
                </li>
                <li>
                  <p>
                    Sea Fucoidan {t("ノーマルタイプ")}
                  </p>
                  <span className="bar inview"></span>
                </li>
              </ul>
            </div>
            <div className="dx-06-graph bar-graph-02">
              <p className="big">{t("硫酸基")}</p>
              <div className="bar-graph-name">
                <p>{t("最大")}</p>
                <p>
                  <span className="renner">2.08</span>{t("倍")}
                </p>
              </div>
              <ul className="dx-bar">
                <li>
                  <p>
                    Sea Fucoidan DX
                  </p>
                  <span className="bar inview"></span>
                </li>
                <li>
                  <p>
                    Sea Fucoidan {t("ノーマルタイプ")}
                  </p>
                  <span className="bar inview"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="dx-section-07">
          <div className="dx-07-in inner sphone-padding" style={{justifyItems:'center'}}>
            <Image src="/dx-attention.png" alt="" height={190} width={150} />
            <p className="big">
              {t("製品を安心して飲用して いただく ために")}
            </p>
            <div className="dx-07-content" style={{ width:'100%'}}>
              <p>
                {t("保存料や防腐剤は一切使用していません。")}
              </p>
            </div>
          </div>
        </div>
        <div className="dx-section-08">
          <div className="dx-08-in inner sphone-padding">
            <div className="dx-08-copy">
              <p>{t("検査・評価")}</p>
              <Image src="/dx.jpg" alt="" height={78} width={111} />
              <h4 className="big">
                {t("私たちのフコイダンは製造する上で高い基準を設定し、様々な外部機関にてクリアしております。")}
              </h4>
              <p>
                {t("当社のフコイダンが、世界的保証機構に認められた証です。皆様の健康のお手伝いをするためには、安心･安全であってほしい。常に徹底した品質管理をし、「安心･安全のフコイダン」をお届けします。")}
              </p>
            </div>
            <ul className="dx-08">
              <li>
                <p>{t("官能検査・放射能検査")}</p>
                <Image src="/dx-eva-01.png" alt="" height={185} width={260} />
              </li>
              <li>
                <p>
                  {t("食品・加工施設登録（FCE）")} {t("殺菌工程の認可(SID)")}
                </p>
                <Image src="/dx-eva-02.png" alt="" height={338} width={260} />
              </li>
            </ul>
          </div>
        </div>

        <div className="dx-section-09">
          <div className="dx-09-in inner sphone-padding">
            <div className="dx-09-copy">
              <p>
                <span className="ttl">{t("原料")}</span>
                {t("超低分子フコイダンはトンガ産モズクを使用しています。")}
              </p>
              <p className="big">南の楽園トンガ王国</p>
              <p>
                {t("フコイダンの原料には沖縄モズクやメカブやコンブなどありますが、シーフコイダンでは天然モズクが自生するトンガ王国産モズクを使用しております。トンガ産モズクはフコイダンが高含有・高品質・安全なのです。")}
              </p>
            </div>
            <div className="dx-09-link">
              <Link className="en" href="/pages/safety">
                {t("詳しくはコチラ")}
              </Link>
            </div>
          </div>
        </div>

        <div className="dx-section-10 sphone-padding">
          <h3 className="big">
            <span className="renner">Sea Fucoidan DX</span><br/>ラインナップ
          </h3>

          <ul id="dxlineup" className="dx-10-in inner">
            <li
              className={`dx-10-outline ${activeIndex === 0 ? 'active' : ''}`}
              onClick={() => handleClick(0)}
            >
              <h4>900ml×2{t("本")}</h4>
              <div className="dxlineup-in">
                <div className="img">
                  <Image
                    src="/dx-lineup-900.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="name">
                  <span className="renner">{t("900ml×2本セット")}</span>
                  <br />
                  <span className="sub">{t("[軽量カップ付]")}</span>
                </div>
                <div className="price">
                  <span className="kakaku">{t("価格")}：</span>
                  <span className="p-number">45,000</span>
                  <span className="tax">円 ({t("税込")})</span>
                </div>
                <div className="icon">
                  <dl>
                    <dd>
                      <Image
                        width={100}
                        height={100}
                        src="/dx-icon-01.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        width={100}
                        height={100}
                        src="/dx-icon-02.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        width={100}
                        height={100}
                        src="/dx-icon-03.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        width={100}
                        height={100}
                        src="/dx-icon-04.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        width={100}
                        height={100}
                        src="/dx-icon-05.png"
                        alt=""
                      />
                    </dd>
                  </dl>
                </div>
                <div className="caution">
                  <ul>
                    <li>{t("味のタイプは 無糖・加糖から選べます。")}</li>
                    <li>{t("はじめてご購入の方は詳しい資料が同梱されます。")}</li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              className={`dx-10-outline ${activeIndex === 1 ? 'active' : ''}`}
              onClick={() => handleClick(1)}
            >
              <h4>900ml×1{t("本")}</h4>
              <div className="dxlineup-in">
                <div className="img">
                  <Image
                    height={100}
                    width={100}
                    src="/dx-lineup-900x1.png"
                    alt=""
                  />
                </div>
                <div className="name">
                  <span className="renner">900ml</span>×
                  <span className="renner">1</span>{t("本")}<br />
                  <span className="sub">{t("[軽量カップ付]")}</span>
                </div>
                <div className="price">
                  <span className="kakaku">{t("価格")}：</span>
                  <span className="p-number">28,000</span>
                  <span className="tax">円({t("税込")})</span>
                </div>
                <div className="icon">
                  <dl>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-01.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-02.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-03.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-04.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-05.png"
                        alt=""
                      />
                    </dd>
                  </dl>
                </div>
                <div className="caution">
                  <ul>
                    <li>{t("味のタイプは 無糖・加糖から選べます。")}</li>
                    <li>{t("はじめてご購入の方は詳しい資料が同梱されます。")}</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={`dx-10-outline ${activeIndex === 2 ? 'active' : ''}`}
              onClick={() => handleClick(2)}>
              <h4>30ml×10{t("本")}</h4>
              <div className="dxlineup-in">
                <div className="img">
                  <Image
                    height={100}
                    width={100}
                    src="/dx-lineup-30.png"
                    alt=""
                  />
                </div>
                <div className="name">
                  <span className="renner">{t("30ml×10本セット")}</span>
                </div>
                <div className="price">
                  <span className="kakaku">{t("価格")}：</span>
                  <span className="p-number">13,000</span>
                  <span className="tax">円({t("税込")})</span>
                </div>
                <div className="icon">
                  <dl>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-01.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-02.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-03.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-04.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-05.png"
                        alt=""
                      />
                    </dd>
                  </dl>
                </div>
                <div className="caution">
                  <ul>
                    <li>{t("味のタイプは 無糖・加糖から選べます。")}</li>
                    <li>{t("はじめてご購入の方は詳しい資料が同梱されます。")}</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={`dx-10-outline ${activeIndex === 3 ? 'active' : ''}`}
              onClick={() => handleClick(3)}>
              <h4>{t("お試しセット")}</h4>
              <div className="dxlineup-in">
                <div className="img">
                  <Image
                    height={100}
                    width={100}
                    src="/dx-lineup-trial.png"
                    alt=""
                  />
                </div>
                <div className="name">
                  <span className="renner">{t("30ml×2本セット")}</span>
                  <br />
                  <span className="sub">{t("[お試しセット]")}</span>
                </div>
                <div className="price">
                  <span className="kakaku">{t("価格")}：</span>
                  <span className="p-number">1,000</span>
                  <span className="tax">円({t("税込")})</span>
                </div>
                <div className="icon">
                  <dl>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-01.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-02.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-03.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-04.png"
                        alt=""
                      />
                    </dd>
                    <dd>
                      <Image
                        height={100}
                        width={100}
                        src="/dx-icon-05.png"
                        alt=""
                      />
                    </dd>
                  </dl>
                </div>
                <div className="caution">
                  <ul>
                    <li>{t("味のタイプは 無糖・加糖から選べます。")}</li>
                    <li>
                      {t("フコイダンについての詳しい資料が一式、また解説ＤＶＤもついており充実の内容となっております。")}
                    </li>
                    <li>
                      {t("こちらの商品は初回限定お一人様一回限りのご購入になります。")}
                    </li>
                  </ul>
                </div>
                <div className="link-btn">
                  <Link href="/products/trial">{t("詳しくはこちら")}</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </Layout>
  );
}
