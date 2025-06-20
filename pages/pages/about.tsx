import Layout from "@/components/Layout";
import { useTranslation } from "@/hook/useTranslation";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export default function AboutCompanyPage() {
    const { t } = useTranslation();
  return (
    <Layout>
        <div className="page-width page-width--narrow section-template--21080391287069__main-padding">
  <h1 className="main-page-title page-title h0 scroll-trigger animate--fade-in">
    {t("会社概要")}
  </h1>
  <div className="rte scroll-trigger animate--slide-in">
    <div className="towa-guide-content" id="guide-02-04">
    <div className="towa-about-us">
        <dl>
            <dt>{t("店名")}</dt>
            <dd>{t("【公式】SEA FUCOIDAN（シーフコイダン）")}</dd>
        </dl>
        <dl>
            <dt>{t("会社名")}</dt>
            <dd>{t("株式会社RAKUEN")}</dd>
        </dl>
        <dl>
            <dt>{t("所在地")}</dt>
            <dd>{t("福岡県福岡市東区名島4-8")}</dd>
        </dl>
        <dl>
            <dt>{t("電話番号")}</dt>
            <dd>0904350-4537</dd>
        </dl>
        <dl>
            <dt>{t("営業時間")}</dt>
            <dd>
                <table className="time-table">
                    <tbody><tr>
                        <th>{t("日 ")}</th>
                        <td>{t("休業日")}</td>
                    </tr>
                    <tr>
                        <th>{t("月")}</th>
                        <td rowSpan={5}>09:00～17:30</td>
                    </tr>
                    <tr>
                        <th>{t("火")}</th>
                        </tr>
                    <tr>
                        <th>{t("水")}</th>
                        </tr>
                    <tr>
                        <th>{t("木")}</th>
                        </tr>
                    <tr>
                        <th>{t("金")}</th>
                        </tr>
                    <tr>
                        <th>{t("土")}</th>
                        <td>{t("出荷業務のみ")}<br/>{t("※お問合せ対応は行いません。")}</td>
                    </tr>
                    <tr>
                        <th>{t("祝日")}</th>
                        <td>{t("休業日")}</td>
                    </tr>
                </tbody></table>
            </dd>
        </dl>
    </div>
</div>

  </div>
</div>
    </Layout>
  );
}
