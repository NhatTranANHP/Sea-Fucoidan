import { useTranslation } from "@/hook/useTranslation";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";


export default function Fucoxanthinex() {
    const { t } = useTranslation();
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
                      <Link href="/products/fucoxanthinex">
                        <h1>
                          {t("フコキサンチン")}EX
                        </h1>
                      </Link>
                    </div>
                    <div className="product-nav-buy">
                      <Link className="swing" href="/products/fucoxanthinex#buy">
                        {t("購入")}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="fv">
                  <div className="fv-in inner sphone-padding">
                    <div className="fv-copy copy-1">
                      <p className="big">Fucoxanthin EX</p>
                      <p>{t("もっとも希少でまったく新しい1粒。")}</p>
                    </div>
                    <div className="fv-copy copy-2">
                      <div className="copy-in">
                        <Image
                          src="/fuco.jpg"
                          width={750}
                          height={414}
                          alt="Fucoxanthin EX"
                        />
                      </div>
                      <div className="copy-in">
                        <p>{t("高濃度低分子")}</p>
                        <p className="big">{t("フコキサンチン")} EX</p>
                        <p>{t("褐藻由来カロテノイドソフトカプセル")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fuco-section-01">
                  <div className="fuco-01 inner sphone-padding">
                    <p className="big">
                      {t("この1粒に希望と技術を。")}
                    </p>
                    <p>
                      {t("フコキサンチンEXは今まで扱いにくかったフコキサンチンの安定化に成功。フコキサンチンは、希少価値の高い成分ですがフコキサンチン単体を抽出すると熱や光により不活性化してしまうという弱点をもっており、このことで高い機能性があると分かっていながら、商品化まで至らないという状況が続いていました。")}
                      <br />
                      <br />
                      {t("しかしこの度、長年の試行錯誤を重ねた結果、良質なフコキサンチン単体を抽出・安定化する独自製法を確立し、常温安定保存が可能になりました。")}
                    </p>
                  </div>
                  <div className="fuco-01-back">
                    <Image
                      src="/fuco-tsubu.jpg"
                      alt="Fucoxanthin"
                      width={1280}
                      height={547}
                    />
                  </div>
                </div>

                <div className="fuco-section-02">
                  <div className="fuco-02 inner sphone-padding">
                    <h2 className="big">{t("フコキサンチンとは")}</h2>
                    <div className="fuco-02-form">
                      <p>
                        {t("分子式")}
                        <span className="renner">
                          C<sub>42</sub>H<sub>58</sub>O<sub>6</sub>
                        </span>
                      </p>
                      <Image
                        src="/fuco-formula.jpg"
                        alt="Fucoxanthin"
                        width={890}
                        height={180}
                      />
                      <p>
                        {t("フコイダンは褐藻類「モズク・コンブ・ワカメ」から約0.001%しか抽出されません。フコキサンチンはさらに上をいく約0.0003~0.0006%しか抽出されない希少な成分です。")}
                      </p>
                    </div>
                    <div className="fuco-02-line">
                      <ul>
                        <li className="inview slash">
                          <p className="big">
                            {t("褐藻類 1t")}
                            &nbsp;=&nbsp;
                            {t("フコイダン 1kg")}
                          </p>
                        </li>

                        <li className="inview slash">
                          <p className="big">
                            {t("褐藻類 1t")}
                            &nbsp;=&nbsp;
                            {t("フコキサンチン 3~6g")}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="fuco-section-03">
                  <div className="fuco-03 inner sphone-padding">
                    <Image src="/fuco-cup.jpg" alt="" width={370} height={443} />
                    <h3 className="big">{t("特徴")}</h3>
                    <div className="fuco-03-in">
                      <div className="quote">
                        <p>
                          {t("フコキサンチンには様々な作用が大学や機関で研究・報告されています。")}
                          <i className="fas fa-quote-left"></i>
                          <i className="fas fa-quote-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fuco-section-05">
                  <div className="fuco-05 inner sphone-padding">
                    <h3 className="big">
                      {t("当社比でのフコキサンチン")}
                    </h3>
                    <h4 className="big">
                        <span className="fuco05-p">{t("フコキサンチンEX 1 粒")}
                      </span>
                      <span>&nbsp;=&nbsp;</span>
                      <br />
                      <span className="fuco05-p">
                        <span>{t("シーフコイダン ノーマルタイプ")}</span>
                      </span>
                      &nbsp;
                      <span>
                        <span className="renner">250 ml</span>
                      </span>
                    </h4>
                    <p>
                      {t("フコキサンチンEXは1粒でシーフコイダンノーマルタイプ250ml相当のフコキサンチンが含まれています。")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  );}