import Layout from "@/components/Layout";
import { useTranslation } from "@/hook/useTranslation";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export default function ReportPage() {
  const { t } = useTranslation();
  return (
    <Layout>
         <div className="color-background-1 gradient">
      <div className="">
        <div className="sf-section-report common">
          <div className="report-pc-half min-768 inview slash">
            <ul className="slasher">
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="report-pc-half">
            <div className="report-section-01">
              <div className="report-content report-content-img max-767"></div>

              <div className="report-content report-content-text">
                <div className="report-in">
                  <div className="report-fv">
                    <div className="report-fv-copy">
                      <h1 className="big">
                        <span className="sub">{t("健康レポート")}</span>
                        {t("新しい僕はここから始まった。")}
                      </h1>
                      <p className="name">{t("高杢禎彦")}</p>
                    </div>
                  </div>
                </div>

                <div className="report-in">
                  <div className="report-interview">
                    <p className="big question">
                      {t("講演活動をはじめ全国を飛び回っていらっしゃる高杢さんですが、ご自身の健康について普段から心掛けていらっしゃることはありますか？")}
                    </p>
                    <div className="answer">
                      <p>
                        {t("強いてあげれば体力作りでしょうか。もう若くないので（笑）無理しない程度にですけど...")}
                      </p>
                    </div>
                  </div>

                  <div className="report-interview">
                    <p className="big question">
                      {t("体調もですが、精神面でもとても充実しているように見えますが。")}
                    </p>
                    <div className="answer">
                      <p>
                        {t("今までの人生を振り返っても、ここ数年はもっとも気持ちが安定しているように自分でも思います...")}
                      </p>
                    </div>
                  </div>

                  <div className="report-interview">
                    <p className="big question">
                      {t("ということは、健康食品などにも興味がおありなのでは？")}
                    </p>
                    <div className="answer">
                      <p>
                        {t("これまで食事以外で健康の為に特別何かを飲んだりということはなかったんですが、1年前に“シーフコイダン”と出会い...")}
                      </p>
                    </div>
                  </div>

                  <div className="report-interview">
                    <h2 className="big question">{t("フコイダンという成分は以前からご存知でしたか？")}</h2>
                    <div className="answer">
                      <p>
                        {t("海藻に含まれるヌルヌル成分のことですよね。僕は2年前から健康についていろいろ勉強し始めたのですが...")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="report-section-02 slashpoint inview">
              <div className="report-content report-content-img max-767"></div>

              <div className="report-content report-content-text">
                <div className="report-in">
                  <div className="report-interview">
                    <h2 className="big question">
                      {t("そして、「シーフコイダン」と出会われたわけですね。")}
                    </h2>
                    <div className="answer">
                      <p>
                        {t("どんなにカラダによいものでも、飲んでそのまま外に排泄されてしまっては意味がない...")}
                      </p>
                    </div>
                  </div>

                  <div className="report-interview">
                    <p className="big question">{t("それでは最後に、これからの高杢さんの健康づくりに対する思いを。")}</p>
                    <div className="answer">
                      <p>
                        {t("正直『もっと以前に“シーフコイダン”と出会っていれば．．．』とも思いましたね。若いころは...")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="report-in">
                  <div className="report-close">
                    <h3>
                      {t("とてもイキイキとした高杢さんのお話に、みなさんも元気になっていただけたのではないかと思います。今日はどうもありがとうございました。")}
                    </h3>
                  </div>
                </div>

                <div className="report-in">
                  <div className="report-profile">
                    <div className="report-profile profile-1">
                      <h3>{t("PROFILE")}</h3>
                    </div>

                    <div className="report-profile profile-2">
                      <div className="profile-img"></div>
                      <div className="profile-name">{t("高杢禎彦")}</div>
                      <dl className="birthplace">
                        <dt>{t("出身地")}</dt>
                        <dd>{t("福岡県久留米市")}</dd>
                      </dl>
                      <dl className="birthplace">
                        <dt>{t("出生年")}</dt>
                        <dd>{t("1962年9月9日")}</dd>
                      </dl>
                    </div>

                    <div className="report-profile profile-3">
                      <p>
                        {t("柳川高校卒。高校在学中の80年、チェッカーズ結成に参加。83年「ギザギザハートの子守唄」でメジャーデビュー...")}
                      </p>
                    </div>
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
