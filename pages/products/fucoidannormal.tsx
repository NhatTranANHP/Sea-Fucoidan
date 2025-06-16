import { useTranslation } from "@/hook/useTranslation";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";


export default function FucoidanNormal() {
    const { t } = useTranslation();
  return (
    <Layout>
        <main id="MainContent" className="content-for-layout focus-none" role="main">
      <section id="shopify-section-template--20903563362589__79696732-2a23-40ab-87de-0f220ff7eb84" className="shopify-section section">
        <div className="color-background-1 gradient">
  <div className="section-template--20903563362589__79696732-2a23-40ab-87de-0f220ff7eb84-padding">
    


{/* <script>
    $(function() {
        $('.link-to-dx').on('inview', function(event, isInView) {
            if (isInView) {
              $('.normal-05-img').addClass('slash');
            } 
        });
    });
</script> */}



<div className="sf-section-normal">
    
    <div className="product-nav-wrapper">
        <div className="product-nav-in">
            <div className="product-nav-name"><Link href="/products/fucoidannormal"><h1>{t("シーフコイダンノーマルタイプ")}</h1></Link></div>
            <div className="product-nav-buy"><Link className="swing" href="/products/fucoidannormal#buy">{t("購入")}</Link></div>
        </div>
    </div>
    
    
    <div className="normal-fv">
        <div className="normal-fv-in sphone-padding">
            <div className="normal-fv-copy inview slash">
                <p className="big">{t("低分子フコイダンの原点")}</p>
                <p className="fv-img-2">
                    <Image src="/normal-logo.jpg" alt="Sea fucoidan" width={200} height={731}/></p>
                <p className="since renner">Since 1997</p>
            </div>
        </div>
        <div className="normal-fv-img inview slash">
            <Image src="/normal-product.png" alt="Sea fucoidan Normal Type" width={300} height={76}/>
        </div>
    </div>
    
    <div className="normal-section-01">
        <div className="normal-01 inner sphone-padding">
            <div className="normal-01-copy">
                <h2 className="big">{t("皆様から愛され続けているロングセラー商品")}</h2>
                <p>{t("シーフコイダンが1997年に誕生して以来、低分子フコイダンの先駆けとして、長年にわたり愛され続けているフコイダンのスタンダードモデルの「シーフコイダンノーマルタイプ」。誕生以来少しずつマイナーチェンジを繰り返して商品の品質を向上してきました。今もなお低分子フコイダンの代表格として皆様に愛されている商品です。")}</p>
            </div>
            <div className="normal-01-link">
                <Link href="/pages/history">{t("シーフコイダンの歴史について")}</Link>
            </div>
        </div>
    </div>
    
    <div className="normal-section-02">
        <div className="normal-02 inner sphone-padding">
            <div className="normal-02-in">
                <Image src="/normal-icon-01.gif" alt="Sea fucoidan Normal Type" width={340} height={340}/>
                <h2 className="big">{t("シーフコイダンといえば独自の低分子技術。")}</h2>
                <p>{t("シーフコイダンの他のフコイダンとの１番の違いは、独自の低分子テクノロジーにあります。現在ではよく耳にする低分子ですが、シーフコイダンは低分子フコイダンの先駆け的な存在なのです。")}</p>
            </div>
        </div>
    </div>
    
    <div className="normal-section-03">
        <div className="normal-03 inner sphone-padding">
            <div className="normal-03-copy">
                <p className="big">{t("100%に近い体内吸収を実現させるために独自の低分子技術を採用。")}</p>
                <Image src="/normal-icon-02.gif" alt="Sea fucoidan Normal Type" width={145} height={145}/>
            </div>
            <div className="normal-03-outline">
                <div className="normal-03-content">
                    <div className="normal-03-in inview slash">
                        <h3 className="big">{t("先進の超低分子技術")}</h3>
                        
                        <span className="bar-01"></span>
                        <p>{t("フコイダンは高分子多糖体といわれ、体内に吸収されにくいのが難点でした。しかし独自の超低分子技術により100%に近い体内吸収を実現させ、超低分子にしてもフコイダンの機能を維持する事にこだわりました。")}</p>
                    </div>
                    <div className="normal-03-in inview slash">
                        <span className="bar-02"></span>
                        <p className="big">{t("分子量は最小にフコイダンの機能は最大に。")}</p>
                    </div>
                    <div className="normal-03-in inview slash">
                        <span className="bar-02"></span>
                        <p className="big">{t("限界に挑戦した分子量")} <span className="blue nowrap">{t("500以下")}</span></p>
                    </div>
                </div>
                <div className="normal-03-content">
                    <div className="normal-03-in inview slash">
                        <h3 className="big">{t("安定的な硫酸基結合")}</h3>
                        <span className="bar-01"></span>
                        <p>{t("フコイダンが生理機能を発揮するには、13%以上の硫酸基が結合している必要があると私たちは考えています。私たちは低分子にしても安定的に形成された硫酸基を実現しました。")}</p>
                    </div>
                    <div className="normal-03-in inview slash">
                        <span className="bar-02"></span>
                        <p className="big">{t("フコイダンの力を発揮する鍵は硫酸基")}</p>
                    </div>
                    <div className="normal-03-in inview slash">
                        <span className="bar-02"></span>
                        <p className="big">{t("結合含量は安定の")}<span className="blue nowrap">{t("13％以上")}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="dx-section-07">
        <div className="dx-07-in inner sphone-padding">
            <Image src="/dx-attention.png" alt="" width={150} height={190}/>
            <p className="big">{t("製品を安心して飲用していただくために。")}</p>
            <div className="dx-07-content">
                <p>{t("保存料や防腐剤は一切使用していません。")}</p>
            </div>
        </div>
    </div>
    
    <div className="dx-section-09">
        <div className="dx-09-in inner sphone-padding">
            <div className="dx-09-copy">
                <p><span className="ttl">{t("原料")}</span>{t("超低分子フコイダンはトンガ産モズクを使用しています。")}</p>
                <p className="big">{t("南の楽園トンガ王国")}</p>
                <p>{t("フコイダンの原料には沖縄モズクやメカブやコンブなどありますが、シーフコイダンでは天然モズクが自生するトンガ王国産モズクを使用しております。トンガ産モズクはフコイダンが高含有・高品質・安全なのです。")}</p>
            </div>
            <div className="dx-09-link">
                <Link className="en" href="/pages/safety">{t("詳しくはコチラ")}</Link>
            </div>
        </div>
    </div>
    
    <div className="normal-section-05">
        <div className="normal-05-img slash">
        </div>
        <div className="normal-05-img-2">
            <Image src="/normal-dx.jpg" alt="sea fucoidan dx" width={310} height={521}/>
        </div>
        <div className="normal-05 inner sphone-padding">
            <p>{t("より多くの有用成分をプラス")}</p>
            <p className="big">{t("さらに進化させたシーフコイダンDX")}</p>
            <div className="link-to-dx">
                <Link href="/products/fucoidandx">{t("シーフコイダンと比較する")}</Link>
            </div>
        </div>
    </div>
    
    
</div>
{/* <div id="buy" style="display: block;"></div> */}

  </div>
</div>
</section>
    </main>
    </Layout>
  );}