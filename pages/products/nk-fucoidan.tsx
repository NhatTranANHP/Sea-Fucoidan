import { useTranslation } from "@/hook/useTranslation";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";


export default function NkFucoidan() {
    const { t } = useTranslation();
    
  return (
    <Layout>
      <section
        id="shopify-section-template--20903563362589__6378752b-218a-4cf4-a6ec-6f270a859d2d"
        className="shopify-section section"
      >
        <div className="color-background-1 gradient">
          <div className="section-template--20903563362589__6378752b-218a-4cf4-a6ec-6f270a859d2d-padding">
            <div className="sf-section-nk">
              <div className="product-nav-wrapper">
                <div className="product-nav-in">
                  <div className="product-nav-name">
                    <Link href="/products/nk-fucoidan">
                      <h1>NK-FUCOIDAN</h1>
                    </Link>
                  </div>
                  <div className="product-nav-buy">
                    <Link className="swing" href="/products/nk-fucoidan#buy">
                      {t("購入")}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="nk-fucoidan-outline">
                <div className="nk-section-01">
                  <div className="nk-fv inner sphone-padding">
                    <div className="nk-fv-ttl">
                      <p className="big">NK-FUCOIDAN</p>
                      <p>{t("新世代高分子フコイダン")}</p>
                      <div className="nk-fv-icon">
                        <span>NK</span>
                      </div>
                    </div>
                    <div className="nk-fv-img">
                      <ul className="flex inview slash">
                        <li style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                          <Image
                            src="/nk.png"
                            alt="NK-FUCOIDAN"
                            width={302}
                            height={585}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="nk-fv-copy">
                      <p>
                        {t("低分子フコイダンのパイオニアFCC堀内初の高分子フコイダン。チリ産のダービリアコンブから抽出した今までにない高分子フコイダン。しかも1カプセル当たりにHORIUCHI H-FUCOIDANを高配合したこだわりの製品です。")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="nk-section-02">
                  <div className="nk-02 inner sphone-padding">
                    <div className="nk-02-in">
                      <div className="blueback">
                        <p className="nk-02-in-ttl">{t("NK-FUCOIDANに含まれる")}</p>
                      </div>
                      <p className="big">
                        <span className="renner">
                          HORIUCHI&nbsp;
                          H-FUCOIDAN
                        </span>
                        {t("とは")}
                      </p>
                      <p>
                        {t("分子量が平均約40,000の高分子フコイダンです。")}
                      </p>
                      <p>
                        {t("チリ沿岸の南極海近海にて繁殖しているダービリアコンブから抽出した高純度フコイダン。ダービリアコンブは、南米チリの最南端地域に自生する天然昆布。チリでは昔から胃腸薬として愛されている褐藻類です。")}
                      </p>
                    </div>
                    <div className="nk-02-in">
                      <p>
                        {t("クロマトグラムのこの曲線こそがHORIUCHI H-FUCOIDAN.の証")}
                      </p>
                      <Image
                        src="/nk-kuromato.jpg"
                        alt="chromatogram"
                        width={460}
                        height={313}
                      />
                      <p>
                        {t("HORIUCHI H-FUCOLIDANのクロマトグラム")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="nk-section-03">
                  <div className="nk-03 inner sphone-padding">
                    <h2>
                      {t("2017年度・2018年度")}
                      <br />
                      {t("福岡県新事業開発支援事業として認定")}
                    </h2>

                    <div className="flex">
                      <div className="nk-03-in">
                        <div className="blueback">
                          <p className="nk-03-in-ttl">
                            {t("ホリウチエイチフコイダン")}
                          </p>
                        </div>
                        <div className="nk-03-copy">
                          <ul className="kakeru inview slash">
                            <li>
                              <p className="big">HORIUCHI H-FUCOIDAN</p>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <p className="big">{t("九州大学")}</p>
                            </li>
                          </ul>
                        </div>
                        <div className="kyudai sp-only">
                          <Image
                            src="/nk-kyudai.jpg"
                            alt="Kyushu University"
                            width={460}
                            height={306}
                          />
                        </div>
                        <div className="nk-03-text">
                          <p>
                            {t("HORIUCHI H-FUCOIDANは2017年度と2018年度に福岡県新事業開発支援事業として認定され、九州大学・福岡歯科大学との共同研究により誕生しました。")}
                          </p>
                        </div>
                      </div>
                      <div className="nk-03-in pc-only">
                        <Image
                          src="/nk-kyudai.jpg"
                          alt="Kyushu University"
                          width={460}
                          height={306}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nk-section-06">
                  <div className="nk-06 inner sphone-padding">
                    <div className="nk-fv-icon">
                      <span>NK</span>
                    </div>
                    <h3 className="big">
                      {t("この１粒が、まるごと")}
                      <br />
                      <span className="renner">
                        <span className="nowrap">HORIUCHI&nbsp;</span>
                        <span className="nowrap">H-FUCOIDAN</span>
                      </span>
                    </h3>
                    <Image
                      src="/nk-tsubu.png"
                      alt="capsule"
                      width={130}
                      height={98}
                    />
                    <p>
                      {t("NK-FUCOIDANには1粒(内容量220mg)あたり、211mgのHORIUCHI H-FUCOIDANが含有されています。")}
                    </p>
                  </div>
                  <div className="nk-06-blue">
                    <div className="nk-06-blue-in">
                      <p>{t("高配合")}</p>
                      <p>
                        {t("分子量6,000 ~ 40,000")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="nk-section-07-1">
                  <div className="nk-07-inner">
                    <div className="blueback">
                      <p className="nk-02-in-ttl">{t("2019年チリ現地風景")}</p>
                    </div>
                    <h3 className="big" style={{color: '#137c13'}}>
                     {t("私達の製品は原料調達から製造まで安心の自社一貫生産にこだわっています。")}
                    </h3>
                  </div>
                </div>
                <div className="nk-section-07-2">
                  <div className="nk-07-inner">
                    <div className="nk-07-in">
                      <div className="nk-07-in-ttl">
                        <div className="nk-07-copy">
                          <ul className="kakeru inview slash">
                            <li>
                              <p className="big">HORIUCHI H-FUCOIDAN</p>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <p>{t("ダービリアコンブ由来")}</p>
                              <p className="big">{t("高分子フコイダン")}</p>
                            </li>
                          </ul>
                        </div>
                        <p>
                          {t("ダービリアコンブの正式名はダービリア・アンタークティカ。(Durvillea antarctica)アンタークティカとは日本語で南極大陸です。南極は地球上で最も冷たい地域の一つといわれます。そこにはミネラルを多く含んだ海藻やプランクトン・小魚などの豊富な栄養が多く、クジラが世界でも希少な出産場所として選ぶほど。")}
                          <br />
                          <br />
                          {t("またダービリアコンブの体長は、最大で10m~20mです。その巨大な体を支えるため、幹や枝は蜂の巣のように六角形がびっしりと詰まったハニカム構造になっていて、非常に頑丈にできています。冬の間は厚い氷の下という過酷な環境で生息するダービリアコンブ。その生命力あふれる優秀な褐藻類からフコイダンを抽出しました。")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nk-section-08">
                  <div className="nk-08 inner sphone-padding">
                    <Image
                      src="/nk-logo.png"
                      alt="NK-FUCOIDAN"
                      width={650}
                      height={85}
                    />
                    <div className="nk-08-in">
                      <div className="nk-08-content">
                        <Image
                          src="/nk.png"
                          alt="NK-FUCOIDAN"
                          width={302}
                          height={585}
                        />
                      </div>
                      <div className="nk-08-content">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <div className="nk-icon">
                                  <Image
                                    src="/nk-icon-1.gif"
                                    alt=""
                                    width={90}
                                    height={90}
                                  />
                                </div>
                              </td>
                              <td>
                                <ul className="nk-icon-name">
                                  <li>{t("海藻")}</li>
                                  <li>{t("抽出")}</li>
                                </ul>
                              </td>
                              <td>
                                <p className="renner">
                                  100<span className="tanni">%</span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="nk-icon">
                                  <Image
                                    src="/nk-icon-2.gif"
                                    alt=""
                                    width={90}
                                    height={90}
                                  />
                                </div>
                              </td>
                              <td>
                                <ul className="nk-icon-name">
                                  <li>{t("１瓶あたり")}</li>
                                  <li>{t("フコイダン含有")}</li>
                                </ul>
                              </td>
                              <td>
                                <p className="renner">
                                  25,344<span className="tanni">mg</span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="nk-icon">
                                  <Image
                                    src="/nk-icon-3.gif"
                                    alt=""
                                    width={90}
                                    height={90}
                                  />
                                </div>
                              </td>
                              <td>
                                <ul className="nk-icon-name">
                                  <li>{t("１粒あたり")}</li>
                                  <li>{t("フコイダン含有")}</li>
                                </ul>
                              </td>
                              <td>
                                <p className="renner">
                                  211<span className="tanni">mg</span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="nk-icon">
                                  <Image
                                    src="/nk-icon-4.gif"
                                    alt=""
                                    width={90}
                                    height={90}
                                  />
                                </div>
                              </td>
                              <td>
                                <ul className="nk-icon-name">
                                  <li>{t("オーガニック")}</li>
                                  <li>{t("グルテンフリー")}</li>
                                </ul>
                              </td>
                              <td>
                                <p className="renner">
                                  100<span className="tanni">%</span>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nk-section-09">
                  <div className="nk-09 inner sphone-padding">
                    <h3 className="big">
                      {t("NK-FUCOIDANは安心・安全のHPMCカプセルを採用しております。")}
                    </h3>
                    <p>
                      {t("HPMCカプセルは動物成分を含まない、セルロースを原料とした完全植物由来のノンカロリーカプセルです。ベジタリアンおよびビーガンアクション協会の承認を受けており、多様な生活習慣のお客様へ安心してお飲みいただけます。")}
                    </p>
                  </div>
                </div>

                <div className="nk-section-10">
                  <div className="nk-10 inner sphone-padding">
                    <div className="nk-10-in">
                      <Image
                        src="/nk-jfrl.jpg"
                        alt="JFRL"
                        width={190}
                        height={80}
                      />
                      <div className="nk-10-copy">
                        <p>
                          {t("日本食品分析センター(JFRL)により製品の内容成分に関して幅広い検査で食品の安全衛生を確認。皆様に安心してご飲用いただけるよう品質保持に努めております。")}
                        </p>
                      </div>
                    </div>
                    <div className="nk-10-in">
                      <Image
                        src="/nk-jfrl-2.jpg"
                        alt="JFRL"
                        width={315}
                        height={444}
                      />
                    </div>
                  </div>
                </div>

                <div className="nk-section-11">
                  <div className="nk-11 inner sphone-padding">
                    <div className="nk-11-ttl">
                      <p>
                        HORIUCHI H-FUCOIDAN{" "}
                        <span className="nowrap">{t("高含有")}</span>
                      </p>
                      <h4>
                        {t("NK-FUCOIDAN の主な特徴")}
                      </h4>
                    </div>
                    <div className="nk-11-content">
                      <ul>
                        <li>
                          <div className="number inview slash">
                            <span className="renner">1.</span>
                          </div>
                          <p>
                            {t("シーフコイダンの堀内初の高分子フコイダン")}
                          </p>
                        </li>
                        <li>
                          <div className="number inview slash">
                            <span className="renner">2.</span>
                          </div>
                          <p>
                            {t("チリ産のダービリア昆布から抽出したフコイダン")}
                          </p>
                        </li>
                        <li>
                          <div className="number inview slash">
                            <span className="renner">3.</span>
                          </div>
                          <p>
                            {t("福岡県新事業開発支援事業として認定され、九州大学・福岡歯科大学との共同研究により誕生")}
                          </p>
                        </li>
                        <li>
                          <div className="number inview slash">
                            <span className="renner">4.</span>
                          </div>
                          <p>
                            {t("1カプセルにHORIUCHI H-FUCOIDANを高配合")}
                          </p>
                        </li>
                        <li>
                          <div className="number inview slash">
                            <span className="renner">5.</span>
                          </div>
                          <p>{t("安心のHPMCカプセルを採用")}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div id="buy" style="display: block;"></div> */}
          </div>
        </div>
      </section>
    </Layout>
  );}