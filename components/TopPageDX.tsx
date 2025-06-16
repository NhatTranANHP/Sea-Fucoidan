import { useTranslation } from "@/hook/useTranslation";
import Image from "next/image";
import Link from "next/link";
const TopPageDX = () => {
  const { t } = useTranslation();
  return (
    <section id="top-page-dx" className="shopify-section section">
      <div className="color-background-1 gradient">
        <div className="section-template-padding">
          <div className="toppage_dx">
            {/* Concept Block */}
            <div className="top-concept">
              <div className="top-concept-outline inner sphone-padding">
                <h2>
                  {t("より生のフコイダンを実感して頂くために")}
                </h2>
                <p>
                  {t("当社では”生”のフコイダンを実感頂くために、液体タイプをお勧めしております。")}
                  <br />
                  {t("シーフコイダンは独自の酵素分解技術を使用することで超低分子化（分子量500以下）に成功。特に液体タイプは飲んだ瞬間から舌下、食道、胃へスムーズに吸収されていく事を実感して頂けると思います。")}
                  <br />
                  {t("また、さらに高分子を加えることで口腔内や胃で分解されず、成分が腸まで到達。両方の特徴を兼ね備えることで、機能性、吸収率共に優れたフコイダン製品の実現にいたりました。もし海藻の匂いや味に抵抗がある方には、カプセルタイプもご用意しております。")}
                </p>
              </div>
            </div>

            {/* Video Block */}
            <div className="top-movie">
              <div className="top-movie-outline inner sphone-padding">
                <h3>
                  {t("この動画をみればシーフコイダンがわかる")}
                </h3>
                <Image
                  src="/top-fucoidanvideo.png"
                  alt="シーフコイダン Sea Fucoidan VIDEO"
                  width={400}
                  height={58}
                />
                <p>
                  {t("原料から製造・出荷までの様子やHORIUCHI FUCOIDANの特徴などをわかりやすく解説。")}
                  <br />
                  {t("あさひクリニック院長のインタビューも収録しております。")}
                </p>
                <div className="video-area">
                  <div id="video-thumnail">
                    <iframe
                      src="https://player.vimeo.com/video/299151581?background=1"
                      width="640"
                      height="360"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video-screen">
                    <ul className="video-nav">
                      <li id="video-close"></li>
                    </ul>
                    <div className="video-screen-in">
                      <iframe
                        id="en-popup-YouTube-player"
                        src="https://player.vimeo.com/video/298829914"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Section */}
            <div className="top-main-product">
              <div className="man-product-outline inner">
                <div className="main-product-copy sphone-padding">
                  <p>{t("PRODUCT TYPE")}</p>
                  <p>{t("２つのタイプをご用意しております。")}</p>
                </div>
                <ul className="top-2product">
                  {/* Product 1 */}
                  <li className="top-product-900 inview c-view slash">
                    <div className="top-product-wrapper">
                      <div className="product-ttl-outline">
                        <p>{t("超高濃縮海藻エキス")}</p>
                        <Image
                          src="/logo-dx-green.png"
                          alt="シーフコイダン Sea Fucoidan DX"
                          width={200}
                          height={56}
                        />
                        <span>SEA FUCOIDAN DX</span>
                      </div>
                      <div className="product-capa">
                        <p>{t("900ml×2本セット")}</p>
                      </div>
                      <div className="product-content">
                        <h4>
                          {t("シーフコイダン史上最高有用成分 1.87倍")}
                        </h4>
                        <p>
                          {t("シーフコイダン独自の低分子に、さらに昆布由来の高分子をプラス。")}
                          <br />
                          {t("フコイダンのエネルギーを瓶の中に温存するために独自のオリも配合。")}
                          <br />
                          {t("シーフコイダン史上最高クラスのモデルです。")}
                        </p>
                      </div>
                      <div className="product-price">
                        <p>{t("45,000円")}</p>
                        <span className="en">({t("税込：送料無料")})</span>
                      </div>
                      <div className="product-button">
                        <ul>
                          <li>
                            <Link href="/products/seafucoidandx">
                              <span>{t("詳しく見る")}</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/seafucoidandx#buy">
                              <span>{t("購入する")}</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <Image
                        src="/product-dx900.png"
                        alt="シーフコイダン Sea Fucoidan DX 900ml bottle"
                        width={180}
                        height={685}
                      />
                    </div>
                  </li>

                  {/* Product 2 */}
                  <li className="top-product-900 top-product-30 inview c-view slash">
                    <div className="top-product-wrapper">
                      <div className="product-ttl-outline">
                        <p>{t("超高濃縮海藻エキス")}</p>
                        <Image
                          src="/logo-dx-green.png"
                          alt="シーフコイダン Sea Fucoidan DX"
                          width={200}
                          height={56}
                        />
                        <span>SEA FUCOIDAN DX</span>
                      </div>
                      <div className="product-capa">
                        <p>
                          {t("30ml×2本セット(お試しセット)")}
                        </p>
                      </div>
                      <div className="product-content">
                        <h4>
                          {t("初回限定お一人様一回限り")}
                        </h4>
                        <p>
                          {t("初めてシーフコイダンをお飲みになる方へ、味の違う無糖と加糖の2本セットを特別価格にてご提供しております。ぜひこの機会にお試しください。")}
                        </p>
                      </div>
                      <div className="product-price">
                        <p>1,000円</p>
                        <span className="en">({t("税込：送料無料")})</span>
                      </div>
                      <div className="product-button">
                        <ul>
                          <li>
                            <Link href="/products/trial">
                              <span>{t("詳しく見る")}</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/trial#buy">
                              <span>{t("購入する")}</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <Image
                        src="/product-dx30.png"
                        alt="シーフコイダン Sea Fucoidan DX 30ml bottle"
                        width={96}
                        height={282}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPageDX;
