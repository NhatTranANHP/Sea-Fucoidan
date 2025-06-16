import { useTranslation } from "@/hook/useTranslation";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";


export default function Lapita() {
    const { t } = useTranslation();
    
  return (
    <Layout>
      <div className="color-background-1 gradient">
        <div className="section-template--20903563362589__be8925d5-f147-4450-914e-b8c21bb879cd-padding">
          <div className="sf-lapita">
            <div className="product-nav-wrapper">
              <div className="product-nav-in">
                <div className="product-nav-name">
                  <Link href="/products/lapita">
                    <h1>LAPITA</h1>
                  </Link>
                </div>
                <div className="product-nav-buy">
                  <Link className="swing" href="/products/lapita#buy">
                    {t("購入")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="sf-lapita-fv">
              <div className="lapita-fv-inner">
                <div className="fv-01">
                  <h2>
                    {t("海の恵みから生まれた保湿ローション")}
                  </h2>
                </div>
                <div className="fv-02">
                  <dl className="fv-flex">
                    <dd>
                      <Image
                        className="inview slash"
                        src="/lapita.png"
                        alt="lapita フコイダンスキンケア ラピタ フコイダンローション"
                        width={260}
                        height={800}
                      />
                    </dd>
                    <dd>
                      <dl className="lapita-logo">
                        <dd>
                          <Image
                            src="/lapita-logo-2.png"
                            alt="lapita フコイダンスキンケア ラピタ フコイダンローション"
                            width={600}
                            height={272}
                          />
                        </dd>
                        <dd>
                          <div className="lapita-logo-in">
                            <Image
                              src="/lapita-logo.png"
                              alt="lapita フコイダンスキンケア ラピタ フコイダンローション"
                              width={300}
                              height={188}
                            />
                            <p>{t("トンガ王国産フコイダン配合")}</p>
                          </div>
                        </dd>
                      </dl>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="sf-lapita-01">
              <div className="inner">
                <p className="ttl">{t("肌を潤す、ナチュラルな雫。")}</p>
                <dl className="inview seibun slash">
                  <dd>
                    <div className="point">{t("うるおい")}</div>
                  </dd>
                  <dd>
                    <div className="point">{t("肌荒れ防止")}</div>
                  </dd>
                  <dd>
                    <div className="point">{t("ハリツヤ")}</div>
                  </dd>
                  <dd>
                    <div className="point">{t("毛穴ケア")}</div>
                  </dd>
                </dl>
                <p className="concept">
                  {t("SEA ORGANICをコンセプトに、海の恵みフコイダンと植物由来天然成分にこだわった保湿ローション「ラピタ」。")}
                </p>
              </div>
            </div>
            <div className="sf-lapita-02">
              <div className="inner">
                <p className="ttl">Tongan Seaweed</p>
                <div className="lapita-02-in">
                  <div className="img">
                    <Image
                      src="/lapita_mozuku.jpg"
                      alt="lapita トンガ王国 モズク"
                      width={800}
                      height={600}
                    />
                    <span>{t("トンガ産天然モズク")}</span>
                  </div>
                  <div className="text">
                    <h3>{t("奇跡の海で育つ天然モズク")}</h3>
                    <p>
                      {t("人口わずか10万人、総面積697㎢の小国トンガ。汚染のない美しいトンガの海で、水深10,000mを超える海溝に南極からの海流が交わり、ミネラル豊かな海洋深層水が生まれます。この海洋深層水で育ったモズクはすべて天然であり、多種のミネラル、良質なフコイダンを豊富に含んでいます。トンガ産フコイダンは、保湿性も皮膚の弾力性改善もヒアルロン酸以上。モズクが自らを乾燥から守るチカラが、人に対してもさまざまな美肌効果を与えます。")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sf-lapita-03">
              <div className="inner">
                <p className="ttl">Organic Elements</p>
                <div className="lapita-03-in">
                  <dl className="inview slash">
                    <dd>
                      <div className="img">
                        <Image
                          src="/lapita_icon01.jpg"
                          alt="lapita シラカバ"
                          width={300}
                          height={300}
                        />
                        <span className="name">{t("シラカバ")}</span>
                      </div>
                    </dd>
                    <dd>
                      <div className="img">
                        <Image
                          src="/lapita_icon02.jpg"
                          alt="lapita トウキンセンカ"
                          width={300}
                          height={300}
                        />
                        <span className="name">{t("トウキンセンカ")}</span>
                      </div>
                    </dd>
                    <dd>
                      <div className="img">
                        <Image
                          src="/lapita_icon03.jpg"
                          alt="lapita ヤグルマギク"
                          width={300}
                          height={300}
                        />
                        <span className="name">{t("ヤグルマギク")}</span>
                      </div>
                    </dd>
                    <dd>
                      <div className="img">
                        <Image
                          src="/lapita_icon04.jpg"
                          alt="lapita ローマカミツレ・カミツレ"
                          width={300}
                          height={300}
                        />
                        <span className="name">{t("ローマカミツレ・カミツレ")}</span>
                      </div>
                    </dd>
                    <dd>
                      <div className="img">
                        <Image
                          src="/lapita_icon05.jpg"
                          alt="lapita フユボダイジュ"
                          width={300}
                          height={300}
                        />
                        <span className="name">{t("フユボダイジュ")}</span>
                      </div>
                    </dd>
                    <dd>
                      <div className="img">
                        <Image
                          src="/lapita_icon06.jpg"
                          alt="lapita セイヨウオトギリソウ"
                          width={300}
                          height={300}
                        />
                        <span className="name">{t("セイヨウオトギリソウ")}</span>
                      </div>
                    </dd>
                  </dl>
                  <div className="text">
                    <h3>{t("豊穣な大地から生まれる天然成分。")}</h3>
                    <p>
                      {t("花の美しさや樹木の景観は、人にちょっとした感動を与えます。同時に植物は、食物をはじめ、環境保全、薬効成分など、人が生きる上で、なくてはならない存在です。それは美容に対しても同じー。皮膚柔軟・水分付与・代謝促進・抗炎症・抗アレルギーなど、美肌を保つ上で欠かせない成分が植物には含まれています。トンガ産フコイダンに肌効果の高い七種の植物エキスを、理想的な配合でプラスしたナチュラルな雫、それが、LAPITA Lotionです。")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sf-lapita-04">
              <div className="inner">
                <p>{t("高い保湿性と皮膚の弾力性を求める方へ。")}</p>
                <Image
                  src="/lapita-logo-3.png"
                  alt="lapita ラピタ"
                  width={385}
                  height={99}
                />
                <p className="hosoku">
                  ※{t("Fucoidan: クラドシホンノバエカレドニアエ多糖体（保湿成分）")}
                </p>
              </div>
            </div>
          </div>
          {/* <div id="buy" style="display: block;"></div> */}
        </div>
      </div>
    </Layout>
  );}