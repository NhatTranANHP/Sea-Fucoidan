import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hook/useTranslation";
export default function ToppageContentList() {
  const { t } = useTranslation();
  return (
    <section className="shopify-section section">
      <div className="color-background-1 gradient">
        <div className="section-template-padding">
          <div className="toppage_content-list">
            <div className="top-contents-list">
              <div className="contents-ttl">
                <h3 className="inview slash">{t("お客様のために")}</h3>
                <p>
                  {t("商品をより良く理解していただくために")}<br className="min-990" />
                  {t("様々なコンテンツをご用意しております。")}
                </p>
              </div>
              <ul className="pc-half clearfix">
                <li className="inview c-view slash" style={{display: "block"}}>
                  <div className="content-whats-fucoidan">
                    <div className="whats-fucoidan-outline clearfix sphone-padding">
                      <div className="whats-fucoidan-left">
                        <h4>{t("フコイダンとは？")}</h4>
                        <p>
                          {t("フコイダンの誕生からシーフコイダンの特徴を")}
                          <br className="min-990" />
                          {t("わかりやすく説明いたします。")}
                        </p>
                        <div className="whats-fucoidan-button">
                          <Link href="/pages/whats-fucoidan">
                            <span>{t("フコイダンについて")}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="whats-fucoidan-right">
                        <div className="whats-fucoidan-img">
                          <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}
                            src="/top-whatsfucoidan.jpg"
                            alt="シーフコイダン"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="inview c-view slash" style={{display: "block"}}>
                  <div className="content-takamoku">
                    <div className="takamoku-outline">
                      <div className="takamoku-inner">
                        <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}
                          src="/top-takamoku.png"
                          alt="シーフコイダン"
                        />
                        <h4>
                          {t("新しい僕はここから始まった。")}
                        </h4>
                        <p style={{ position: 'relative' }}>
                          {t("大病を患って感じた、いのちの大切さ健康の有難さ")}
                        </p>
                        <div className="takamoku-name">
                          <p>{t("シーフコイダン生活継続中")}</p>
                          <h5>{t("高杢禎彦")}</h5>
                        </div>
                        <div className="takamoku-button">
                          <Link href="/pages/report">
                            <span>{t("健康レポート")}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="inview c-view slash" style={{display: "block"}}>
                  <div className="content-compare">
                    <div className="compare-outline sphone-padding">
                      <div className="compare-copy">
                        <h4>
                          {t("シーフコイダンを比較。")}
                        </h4>
                        <p>
                          {t("あなたに適したフコイダンをお探しの方。")}
                        </p>
                        <Link href="/pages/compare">{t("さらに詳しく")}</Link>
                      </div>
                      <div className="compare-img">
                        <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}
                          src="/top-series.jpg"
                          alt="シーフコイダン Sea Fucoidan Series"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="inview c-view slash" style={{display: "block"}}>
                  <ul className="content-2sec clearfix sphone-padding">
                    <li>
                      <Link href="/pages/faq/">
                        <div className="content-faq">
                          <div className="content-2sec-inner">
                            <p>{t("よくある質問")}</p>
                            <h4 className="renner">FAQ<span>S</span></h4>
                            <p>{t("※お問合せの前にまずはご確認ください。")}</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/history">
                        <div className="content-history">
                          <div className="content-2sec-inner">
                            <div className="content-history-in">
                              <p>The History of SEA FUCOIDAN</p>
                              <h4>
                                {t("シーフコイダンの歴史")}
                              </h4>
                              <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}
                                src="/top-history-since.png"
                                alt="since 1997"
                              />
                            </div>
                            <Image 
                            width={100}
                            height={100}
                              src="/top-history.png"
                              alt="シーフコイダン"
                              className="min-990"
                            />
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="inview c-view slash" style={{display: "block"}}>
                  <div className="content-safety">
                    <div className="safety-outline sphone-padding">
                      <h4>
                        {t("シーフコイダンは安全性が高いミネラル豊富な海で育ったモズクを使用しております。")}
                      </h4>
                      <p>
                        {t("私たちの製品は、水質汚染の少ない環境でサンゴ礁の美しい海で育った希少なモズクを使用しております。ここでは、シーフコイダンの製品が生まれる現場をご紹介します。")}
                      </p>
                      <div className="safety-button">
                        <Link href="/pages/safety">
                          <span>{t("シーフコイダンの安心安全性")}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}