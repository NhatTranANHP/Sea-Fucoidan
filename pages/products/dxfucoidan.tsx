import { useTranslation } from "@/hook/useTranslation";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products, Product } from "@/data/products";


export default function DXFucoidan() {
    const { t } = useTranslation();
    const { addToCart } = useCart();
    const product: Product | undefined = products.find(p => p.id === 'dxfucoidan');
    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // prevent the link from navigating
        addToCart(product as Product);
    };
  return (
    <Layout>
      <section
        id="shopify-section-template--20903563362589__c0f0da61-b5f8-42e8-9b1d-bbddb6951245"
        className="shopify-section section"
      >
        <div className="color-background-1 gradient">
          <div className="section-template--20903563362589__c0f0da61-b5f8-42e8-9b1d-bbddb6951245-padding">
            <div className="sf-section-fucoxanthinex">
              <div className="product-nav-wrapper">
                <div className="product-nav-in">
                  <div className="product-nav-name">
                    <Link href="/products/dxfucoidan">
                      <h1>
                        {t("DXフコイダンカプセルタイプ")}
                      </h1>
                    </Link>
                  </div>
                  <div className="product-nav-buy">
                    <Link className="swing" href="/products/dxfucoidan#buy" onClick={handleAddToCart}>
                      {t("購入")}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="capsule-fv">
                <div className="cap-fv sphone-padding">
                  <div className="cap-fv-in inview slash">
                    <div className="cap-fv-content">
                      <Image
                        src="/capsule.jpg"
                        alt="DXカプセル"
                        width={580}
                        height={333}
                      />
                    </div>
                    <div className="cap-fv-content">
                      <div className="cap-fv-content-in big">
                        {t("超低分子フコイダンをそのままカプセルに。")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="capsule-section-01">
                <div className="cap-01 inner sphone-padding">
                  <h2 className="big">
                    {t("超低分子フコイダンカプセル")}
                  </h2>
                  <div className="cap-01-in">
                    <p>
                      {t("超低分子フコイダンカプセルは、独自の技術によってフコイダン本来の機能はそのままに、分子量を500以下にしたフコイダンをパウダーカプセルにして、海藻の匂いなどが苦手な方や、外出先などでフコイダンを摂取したい方向けに開発した商品です。")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="capsule-section-02 inview slash">
                <div className="cap-02 inner sphone-padding">
                  <h2 className="big">
                    {t("安心して飲用していただくために")}
                  </h2>
                  <div className="cap-hpmc">
                    <Image
                      src="/capsule-hpmc.jpg"
                      alt="DXカプセル"
                      width={150}
                      height={134}
                    />
                    <p>{t("HPMCカプセルを採用")}</p>
                  </div>
                  <p>
                    {t("シーフコイダンのカプセルには、植物繊維由来で、ノンカロリーカプセルを採用しております。")}
                  </p>
                </div>
              </div>

              <div className="normal-section-03">
                <div className="normal-03 inner sphone-padding">
                  <div className="normal-03-copy">
                    <h3 className="dxcapsule">{t("シーフコイダン独自の技術")}</h3>
                    <p className="big">
                      {t("100%に近い体内吸収を実現させるために独自の低分子技術を採用。")}
                    </p>
                    <Image
                      src="/normal-icon-02.gif"
                      alt="Sea fucoidan Normal Type"
                      width={145}
                      height={145}
                    />
                  </div>
                  <div className="normal-03-outline">
                    <div className="normal-03-content">
                      <div className="normal-03-in inview slash">
                        <h3 className="big">{t("先進の超低分子技術")}</h3>
                        <span className="bar-01"></span>
                        <p>
                          {t("フコイダンは高分子多糖体といわれ、体内に吸収されにくいのが難点でした。しかし独自の超低分子技術により100%に近い体内吸収を実現させ、超低分子にしてもフコイダンの機能を維持する事にこだわりました。")}
                        </p>
                      </div>
                      <div className="normal-03-in inview slash">
                        <span className="bar-02"></span>
                        <p className="big">
                          {t("分子量は最小にフコイダンの機能は最大に。")}
                        </p>
                      </div>
                      <div className="normal-03-in inview slash">
                        <span className="bar-02"></span>
                        <p className="big">
                          {t("限界に挑戦した分子量")}
                          <span className="blue nowrap"> {t("500以下")}</span>
                        </p>
                      </div>
                    </div>
                    <div className="normal-03-content">
                      <div className="normal-03-in inview slash">
                        <h3 className="big">{t("安定的な硫酸基結合")}</h3>
                        <span className="bar-01"></span>
                        <p>
                          {t("フコイダンが生理機能を発揮するには、13%以上の硫酸基が結合している必要があると私たちは考えています。私たちは低分子にしても安定的に形成された硫酸基を実現しました。")}
                        </p>
                      </div>
                      <div className="normal-03-in inview slash">
                        <span className="bar-02"></span>
                        <p className="big">
                          {t("フコイダンの力を発揮する鍵は硫酸基")}
                        </p>
                      </div>
                      <div className="normal-03-in inview slash">
                        <span className="bar-02"></span>
                        <p className="big">
                          {t("結合含量は安定の")}
                          <span className="blue nowrap">{t("13％以上")}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dx-section-09">
                <div className="dx-09-in inner sphone-padding">
                  <div className="dx-09-copy">
                    <p>
                      <span className="ttl">{t("原料")}</span>
                      {t("超低分子フコイダンはトンガ産モズクを使用しています。")}
                    </p>
                    <p className="big">{t("南の楽園トンガ王国")}</p>
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

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );}