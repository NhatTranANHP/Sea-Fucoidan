import Image from "next/image";
import Layout from "@/components/Layout";
import { useTranslation } from "@/hook/useTranslation";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export default function ComparePage() {
    const { t } = useTranslation();
    const [isHidden, setIsHidden] = useState(false);
  const slashPointRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
  const target = slashPointRef.current;

  if (!target) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsHidden(entry.isIntersecting);
    },
    { threshold: 0.1 }
  );

  observer.observe(target);

  return () => {
    observer.unobserve(target);
  };
}, []);
  return (
    <Layout>
      <div className="color-background-1 gradient">
        <div className="section-template--20947874414877__a1b0dd54-8a48-4851-885e-ff3b23bf1770-padding">
          <div className="sf-section-compare common">
            <div className="compare-fv">
              <div className="inner sphone-padding">
                <h1 className="big">{t("シーフコイダンのモデルを比較")}</h1>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "100%", maxWidth: '100%' }}
                  src="/history-last.jpg"
                  alt="Sea Fucoidan"
                />
              </div>
            </div>
            <div className="compare-outline">
              <div className="inner sphone-padding">
                <div className="compare-copy">
                  <p className="big" style={{textAlign: 'center'}}>
                    {t("シーフコイダンは")}
                    <br className="min-990" />
                    {t("2タイプご用意しております。")}
                  </p>
                </div>
                <div className="compare-product" style={{ zIndex: "1" }}>
                  <ul
                    className="sf-product-in slasher slash"
                    style={{ display: isHidden ? "none" : "flex" }}
                  >
                    <li className="dx">
                      <div
                        className="product-img"
                        style={{ display: "block", justifySelf: "center" }}
                      >
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/dx-lineup-900.png"
                          alt="Sea Fucoidan DX"
                        />
                      </div>
                    </li>
                    <li className="normal">
                      <div
                        className="product-img"
                        style={{ display: "block", justifySelf: "center" }}
                      >
                        <Image
                          width={0}
                          height={0}
                          sizes="100%"
                          style={{ width: "100%", height: "auto" }}
                          src="/normal-lineup-900.png"
                          alt="Sea Fucoidan Normal Type"
                        />
                      </div>
                    </li>
                  </ul>
                  <ul className="sf-product-in">
                    <li className="dx">
                      <div className="product-name">
                        <h2>{t("シーフコイダン DX")}</h2>
                      </div>
                    </li>
                    <li className="normal">
                      <div className="product-name">
                        <h2>{t("シーフコイダンノーマルタイプ")}</h2>
                      </div>
                    </li>
                  </ul>
                  <ul className="sf-product-in slasher slash">
                    <li className="dx">
                      <div className="product-type">
                        <p>{t("無糖&nbsp;/&nbsp;加糖")}</p>
                      </div>
                    </li>
                    <li className="normal">
                      <div className="product-type">
                        <p>{t("無糖&nbsp;/&nbsp;加糖")}</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="sf-product-in">
                    <li className="dx">
                      <div className="product-link">
                        <Link href="/products/seafucoidandx">
                          <span>{t("詳しく見る")}</span>
                        </Link>
                      </div>
                    </li>
                    <li className="normal">
                      <div className="product-link">
                        <Link href="/products/fucoidannormal">
                          <span>{t("詳しく見る")}</span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="slashpoint" ref={slashPointRef}>
                  <div className="compare-content margin-top">
                    <div className="compare-content-ttl">
                      <p className="big">{t("主な原料")}</p>
                    </div>
                    <div className="compare-content-in">
                      <ul>
                        <li className="dx">
                          <p>{t("モズク、コンブ")}</p>
                        </li>
                        <li className="normal">
                          <p>{t("モズク")}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="compare-content">
                    <div className="compare-content-ttl">
                      <p className="big">{t("特徴")}</p>
                    </div>
                    <div className="compare-content-in">
                      <ul>
                        <li className="dx">
                          <p>
                            {t("低分子フコイダン")}
                            <br />
                            {t("高分子フコイダン")}
                          </p>
                        </li>
                        <li className="normal">
                          <p>{t("低分子フコイダン")}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="compare-content">
                    <div className="compare-content-ttl">
                      <h3 className="big">{t("原材料")}</h3>
                    </div>
                    <div className="compare-content-in">
                      <ul className="flex-start">
                        <li className="dx">
                          <div className="type">
                            <div className="border">
                              <p>{t("無糖")}</p>
                            </div>
                            <p>
                              {t(
                                "褐藻類(モズク,ダービリア) / ビタミンC 酸味料(クエン酸) ビタミンB1 ニコチン酸アミド ビタミンB6 ビタミンB2"
                              )}
                            </p>
                          </div>
                        </li>
                        <li className="normal">
                          <div className="type">
                            <div className="border">
                              <p>{t("無糖")}</p>
                            </div>
                            <p>
                              {t(
                                "褐藻類(モズク) / ビタミンC クエン酸 ビタミンB1 ニコチン酸アミド ビタミンB6 ビタミンB2"
                              )}
                            </p>
                          </div>
                        </li>
                      </ul>
                      <ul className="flex-start">
                        <li className="dx">
                          <div className="type">
                            <div className="border">
                              <p>{t("加糖")}</p>
                            </div>
                            <p>
                              {t(
                                "褐藻類(モズク,ダービリア)　ハチミツ/ビタミンC　酸味料(クエン酸)　ビタミンB1　ニコチン酸アミド　ビタミンB6　ビタミンB2"
                              )}
                            </p>
                          </div>
                        </li>
                        <li className="normal">
                          <div className="type">
                            <div className="border">
                              <p>{t("加糖")}</p>
                            </div>
                            <p>
                              {t(
                                "褐藻類(モズク)　ハチミツ/ビタミンC　クエン酸　ビタミンB1　ニコチン酸アミド　ビタミンB6　ビタミンB2"
                              )}
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="compare-content">
                    <div className="compare-content-ttl">
                      <h3 className="big">{t("栄養成分(100gあたり)")}</h3>
                    </div>
                    <div className="compare-content-in">
                      <ul className="flex-start">
                        <li className="dx">
                          <div className="type">
                            <div className="border">
                              <p>{t("無糖")}</p>
                            </div>
                            <dl className="table">
                              <dt>{t("エネルギー")}</dt>
                              <dd>5 kcal</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("ナトリウム")}</dt>
                              <dd>72.2mg</dd>
                              <p className="hosoku">
                                ({t("食塩相当量")} 0.183g)
                              </p>
                            </dl>
                            <dl className="table">
                              <dt>{t("たんぱく質")}</dt>
                              <dd>0.1 g</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("脂質")}</dt>
                              <dd>0.1 g</dd>
                            </dl>
                            <dl className="table">
                              <dt style={{ overflowWrap: "break-word" }}>
                                {t("炭水化物")}
                              </dt>
                              <dd>1.9g</dd>
                              <p className="hosoku">
                                ({t("糖質")} 0.6g、{t("食物繊維")} 1.3g)
                              </p>
                            </dl>
                            <dl className="table">
                              <dt>{t("ビタミン")}C</dt>
                              <dd>200 mg</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("ビタミン")}B1</dt>
                              <dd>3.8mg</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("ビタミン")}B6</dt>
                              <dd>1.3mg</dd>
                            </dl>
                          </div>
                        </li>
                        <li className="normal">
                          <div className="type">
                            <div className="border">
                              <p>{t("無糖")}</p>
                            </div>
                            <dl className="table">
                              <dt>{t("エネルギー")}</dt>
                              <dd>5 kcal</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("ナトリウム")}</dt>
                              <dd>70mg</dd>
                              <p className="hosoku">
                                ({t("食塩相当量")} 0.178g)
                              </p>
                            </dl>
                            <dl className="table">
                              <dt>{t("たんぱく質")}</dt>
                              <dd>0.1 g</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("脂質")}</dt>
                              <dd>0.1 g</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("炭水化物")}</dt>
                              <dd>1.7g</dd>
                              <p className="hosoku">
                                ({t("糖質")} 0.5g、{t("食物繊維")} 1.2g)
                              </p>
                            </dl>
                            <dl className="table">
                              <dt>{t("ビタミン")}C</dt>
                              <dd>200 mg</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("ビタミン")}B1</dt>
                              <dd>4.0mg</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("ビタミン")}B6</dt>
                              <dd>1.3mg</dd>
                            </dl>
                          </div>
                        </li>
                      </ul>
                      <ul className="flex-start">
                        <li className="dx">
                          <div className="type">
                            <div className="border">
                              <p>{t("加糖")}</p>
                            </div>
                            <dl className="table">
                              <dt>{t("エネルギー")}</dt>
                              <dd>18kcal</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("ナトリウム")}</dt>
                              <dd>73.6mg</dd>
                              <p className="hosoku">
                                ({t("食塩相当量")} 0.187g)
                              </p>
                            </dl>
                            <dl className="table">
                              <dt>{t("たんぱく質")}</dt>
                              <dd>0.1 g</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("脂質")}</dt>
                              <dd>0.1 g</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("炭水化物")}</dt>
                              <dd>5.0g</dd>
                              <p className="hosoku">
                                ({t("糖質")} 3.8g、{t("食物繊維")} 1.2g)
                              </p>
                            </dl>
                            <dl className="table">
                              <dt>{t("ビタミン")}C</dt>
                              <dd>200 mg</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("ビタミン")}B1</dt>
                              <dd>4.5mg</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("ビタミン")}B6</dt>
                              <dd>1.3mg</dd>
                            </dl>
                          </div>
                        </li>
                        <li className="normal">
                          <div className="type">
                            <div className="border">
                              <p>{t("加糖")}</p>
                            </div>
                            <dl className="table">
                              <dt>{t("エネルギー")}</dt>
                              <dd>16kcal</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("ナトリウム")}</dt>
                              <dd>65mg</dd>
                              <p className="hosoku">
                                ({t("食塩相当量")} 0.165g)
                              </p>
                            </dl>
                            <dl className="table">
                              <dt>{t("たんぱく質")}</dt>
                              <dd>0.1 g</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("脂質")}</dt>
                              <dd>0.1 g</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("炭水化物")}</dt>
                              <dd>4.4g</dd>
                              <p className="hosoku">
                                ({t("糖質")} 3.4g、{t("食物繊維")} 1.0g)
                              </p>
                            </dl>
                            <dl className="table">
                              <dt>{t("ビタミン")}C</dt>
                              <dd>200 mg</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("ビタミン")}B1</dt>
                              <dd>4.0mg</dd>
                            </dl>
                            <dl className="table">
                              <dt>{t("ビタミン")}B6</dt>
                              <dd>1.3mg</dd>
                            </dl>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="compare-content">
                    <div className="compare-content-ttl">
                      <h3 className="big">{t("お召し上がり方")}</h3>
                    </div>
                    <div className="compare-content-in">
                      <ul>
                        <li className="dx">
                          <p className="per">60ml&nbsp;/&nbsp;1日</p>
                          <p>30ml×1～2</p>
                        </li>
                        <li className="normal">
                          <p className="per">120ml&nbsp;/&nbsp;1{t("日")}</p>
                          <p>30ml×2～4</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
