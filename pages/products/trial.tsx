import { useTranslation } from "@/hook/useTranslation";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products, Product } from "@/data/products";


export default function TrialFucoidan() {
    const { t } = useTranslation();
    const { addToCart } = useCart();
    const product: Product | undefined = products.find(p => p.id === 'trial');
    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // prevent the link from navigating
        addToCart(product as Product);
    };
  return (
    <Layout>
      <div className="color-background-1 gradient">
        <div className="section-template--20903563362589__1ea15a48-f58b-441a-ba08-ef6b5162775d-padding">
          <div className="sf-section-trial">
            <div className="product-nav-wrapper">
              <div className="product-nav-in">
                <div className="product-nav-name">
                  <Link href="/products/trial">
                    <h1>
                      {t("シーフコイダンDX")}{" "}
                      <span className="nowrap">{t("お試しセット")}</span>
                    </h1>
                  </Link>
                </div>
                <div className="product-nav-buy">
                  <Link className="swing" href="/products/trial#buy" onClick={handleAddToCart}>
                    {t("購入")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="trial-fv">
              <div className="sphone-padding inner">
                <div className="trial-fv-in inview slash">
                  <div className="trial-logo-1">
                    <dl>
                      <dt>
                        <Image
                          src="/dx-logo-icon.png"
                          alt="SEA FUCOIDAN DX"
                          width={100}
                          height={88}
                        />
                      </dt>
                      <dd>{t("超高濃縮海藻エキス")}</dd>
                    </dl>
                  </div>
                  <div className="trial-logo-2">
                    <Image
                      src="/logo-dx-green.png"
                      alt="SEA FUCOIDAN DX"
                      width={200}
                      height={56}
                    />
                  </div>
                  <div className="trial-logo-3 inview slash">
                    <h2 className="big">{t("まずはお試し。")}</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="trial-section-01">
              <div className="trial-01">
                <div className="trial-01-copy">
                  <h2 className="big">{t("まずは、味と違いを感じてください。")}</h2>
                </div>
                <div className="trial-01-in inview slash">
                  <Image
                    src="/trial-1.png"
                    alt="SEA FUCOIDAN DX"
                    width={600}
                    height={264}
                  />
                </div>
                <div className="trial-01-concept">
                  <div className="sphone-padding inner">
                    <p>
                      {t("シーフコイダンDXでは、お客様にどちらのタイプが飲みやすいかをご確認いただくため、30mlの無糖タイプと加糖タイプの2種類をご用意しております。まずは初回限定・飲み比べセットを特別価格でお試しくださいませ。")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="trial-section-02">
              <div className="trial-02 inner sphone-padding">
                <div className="trial-spec-content t-spec-1">
                  <p className="trial-per-100">{t("・栄養成分表示(100g 当たり)")}</p>
                  <Image
                    src="/trial-bottle.jpg"
                    alt="SEA FUCOIDAN DX"
                    width={200}
                    height={595}
                  />
                </div>
                <div className="trial-spec-content t-spec-2">
                  <div className="trial-spec-in">
                    <dl className="type">
                      <dt>{t("無糖タイプ")}</dt>
                      <dd>{t("シーフコイダンDX本来の味")}</dd>
                    </dl>
                    <ul className="dx-spec-icon">
                      <li>
                        <Image
                          src="/dx-icon-01.png"
                          width={40}
                          height={39}
                          alt="icon"
                        />
                      </li>
                      <li>
                        <Image
                          src="/dx-icon-02.png"
                          width={40}
                          height={40}
                          alt="icon"
                        />
                      </li>
                      <li>
                        <Image
                          src="/dx-icon-03.png"
                          width={40}
                          height={40}
                          alt="icon"
                        />
                      </li>
                      <li>
                        <Image
                          src="/dx-icon-04.png"
                          width={40}
                          height={40}
                          alt="icon"
                        />
                      </li>
                      <li>
                        <Image
                          src="/dx-icon-05.png"
                          width={40}
                          height={40}
                          alt="icon"
                        />
                      </li>
                    </ul>
                    <div className="trial-energy">
                      <dl className="trial-energy-in">
                        <dd className="sec">
                          <dl>
                            <dt>{t("エネルギー")}</dt>
                            <dd>5 kcal</dd>
                          </dl>
                        </dd>
                        <dd className="sec">
                          <dl>
                            <dt>{t("ナトリウム")}</dt>
                            <dd>72.2mg</dd>
                          </dl>
                          <p className="hosoku">({t("食塩相当量 0.183g")})</p>
                        </dd>
                      </dl>
                      <dl className="trial-energy-in">
                        <dd className="sec">
                          <dl>
                            <dt>{t("たんぱく質")}</dt>
                            <dd>0.1 g</dd>
                          </dl>
                        </dd>
                        <dd className="sec">
                          <dl>
                            <dt>{t("脂質")}</dt>
                            <dd>0.1 g</dd>
                          </dl>
                        </dd>
                      </dl>
                      <dl className="trial-energy-in">
                        <dd className="sec">
                          <dl>
                            <dt>{t("炭水化物")}</dt>
                            <dd>1.9g</dd>
                          </dl>
                          <p className="hosoku">
                            {t("(糖質 0.6g、食物繊維 1.3g)")}
                          </p>
                        </dd>
                        <dd className="sec">
                          <dl>
                            <dt>{t("ビタミンC")}</dt>
                            <dd>200 mg</dd>
                          </dl>
                        </dd>
                      </dl>
                      <dl className="trial-energy-in">
                        <dd className="sec">
                          <dl>
                            <dt>{t("ビタミンB1")}</dt>
                            <dd>3.8mg</dd>
                          </dl>
                        </dd>
                        <dd className="sec">
                          <dl>
                            <dt>{t("ビタミンB6")}</dt>
                            <dd>1.3mg</dd>
                          </dl>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="trial-spec-in">
                    <dl className="type">
                      <dt>{t("加糖タイプ")}</dt>
                      <dd>
                        {t("飲みやすいハチミツタイプ")}
                      </dd>
                    </dl>
                    <ul className="dx-spec-icon">
                      <li>
                        <Image
                          src="/dx-icon-01.png"
                          width={40}
                          height={39}
                          alt="icon"
                        />
                      </li>
                      <li>
                        <Image
                          src="/dx-icon-02.png"
                          width={40}
                          height={40}
                          alt="icon"
                        />
                      </li>
                      <li>
                        <Image
                          src="/dx-icon-03.png"
                          width={40}
                          height={40}
                          alt="icon"
                        />
                      </li>
                      <li>
                        <Image
                          src="/dx-icon-04.png"
                          width={40}
                          height={40}
                          alt="icon"
                        />
                      </li>
                      <li>
                        <Image
                          src="/dx-icon-05.png"
                          width={40}
                          height={40}
                          alt="icon"
                        />
                      </li>
                      <li>
                        <Image
                          src="/trial-honey.png"
                          width={40}
                          height={23}
                          alt="icon"
                        />
                      </li>
                    </ul>
                    <div className="trial-energy">
                      <dl className="trial-energy-in">
                        <dd className="sec">
                          <dl>
                            <dt>{t("エネルギー")}</dt>
                            <dd>18 kcal</dd>
                          </dl>
                        </dd>
                        <dd className="sec">
                          <dl>
                            <dt>{t("ナトリウム")}</dt>
                            <dd>73.6mg</dd>
                          </dl>
                          <p className="hosoku">{t("(食塩相当量 0.187g)")}</p>
                        </dd>
                      </dl>
                      <dl className="trial-energy-in">
                        <dd className="sec">
                          <dl>
                            <dt>{t("たんぱく質")}</dt>
                            <dd>0.1 g</dd>
                          </dl>
                        </dd>
                        <dd className="sec">
                          <dl>
                            <dt>{t("脂質")}</dt>
                            <dd>0.1 g</dd>
                          </dl>
                        </dd>
                      </dl>
                      <dl className="trial-energy-in">
                        <dd className="sec">
                          <dl>
                            <dt>{t("炭水化物")}</dt>
                            <dd>5.0g</dd>
                          </dl>
                          <p className="hosoku">{t("(糖質 3.8g、食物繊維 1.2g)")}</p>
                        </dd>
                        <dd className="sec">
                          <dl>
                            <dt>{t("ビタミンC")}</dt>
                            <dd>200 mg</dd>
                          </dl>
                        </dd>
                      </dl>
                      <dl className="trial-energy-in">
                        <dd className="sec">
                          <dl>
                            <dt>{t("ビタミンB1")}</dt>
                            <dd>4.5mg</dd>
                          </dl>
                        </dd>
                        <dd className="sec">
                          <dl>
                            <dt>{t("ビタミンB6")}</dt>
                            <dd>1.3mg</dd>
                          </dl>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="trial-section-03">
              <div className="inner sphone-padding">
                <h3 className="trial-03 big">{t("同梱物")}</h3>
                <dl>
                  <dd>
                    <Image
                      src="/trial-pack-1.png"
                      alt="SEA FUCOIDAN DX"
                      width={210}
                      height={210}
                    />
                    <div className="trial-pack">
                      <p className="trial-pack-ttl">{t("シーフコイダンDX")}</p>
                      <p>{t("30mlx2本セット(お試しセット)")}</p>
                    </div>
                  </dd>
                  <dd>
                    <Image
                      src="/trial-pack-2.png"
                      alt="SEA FUCOIDAN DX"
                      width={210}
                      height={210}
                    />
                    <div className="trial-pack">
                      <p className="trial-pack-ttl">{t("パンフレットホワイト")}</p>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>

            <div className="trial-section-04">
              <div className="inner sphone-padding">
                <div className="flex">
                  <div className="trial-04-in" style={{width: '30%'}}>
                    <Image
                      src="/trial-2.jpg"
                      alt="SEA FUCOIDAN DX"
                      width={300}
                      height={267}
                    />
                  </div>
                  <div className="trial-04-in" style={{width: '60%'}}>
                    <div className="trial-04-1">
                      <h3 className="big">{t("日本国内送料無料")}</h3>
                      <span>{t("一部の地域を除く")}</span>
                    </div>
                    <div className="trial-04-2">
                      <p className="trial-product">{t("シーフコイダンDX")}</p>
                      <ul>
                        <li>{t("内容量")}: 30mL</li>
                        <li>{t("価格")}: 1,000円 ({t("税込")}) </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="trial-04-3">
                  <p>{t("お一人様一回限りとさせていただきます。")}</p>
                  <p className="red">
                    {t("※2回目以降は、ご注文いただきましてもキャンセルとさせていただきます。あらかじめご了承ください。")}
                  </p>
                </div>
              </div>
            </div>

            <div className="trial-05-before">
              <p className="big">{t("ご購入まえに")}</p>
            </div>
            <div className="trial-section-05">
              <div className="inner">
                <div className="trial-05 trial-05-text">
                  <h2 className="big">
                    {t("シーフコイダンDXについて")}
                  </h2>
                  <a className="trial-to-dx" href="/products/fucoidandx">
                    {t("詳しく知る")}
                  </a>
                </div>
                <div className="trial-05 trial-05-img">
                  <Image
                    src="/normal-dx.jpg"
                    alt="SEA FUCOIDAN DX"
                    width={310}
                    height={512}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div id="buy" style="display: block;"></div> */}
        </div>
      </div>
    </Layout>
  );}