import Layout from "@/components/Layout";
import { useTranslation } from "@/hook/useTranslation";
import Link from "next/link";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export default function GuidePage() {
    const { t } = useTranslation();
  return (
    <Layout>
        <div className="page-width page-width--narrow section-template--21080933990685__main-padding">
  <h1 className="main-page-title page-title h0 scroll-trigger animate--fade-in">
    {t("ショッピングガイド")}
  </h1>
  <div className="rte scroll-trigger animate--slide-in">
    <div className="towa-guide" id="towa-guide">
    <h2>{t("ガイド一覧")}</h2>
    <dl>
        <dd>
            <Link href="/policies/shipping-policy">
                <span className="guide-cate">PAYMENT</span>
                <p>{t("お支払いについて")}</p>
            </Link>
        </dd>
        <dd>
            <Link href="/policies/shipping-policy#deli-01">
                <span className="guide-cate">DELIVERY</span>
                <p>{t("配送について")}</p>
            </Link>
        </dd>
        <dd>
            <Link href="/policies/refund-policy">
                <span className="guide-cate">RETURNS/EXHANGES</span>
                <p>{t("キャンセル・返品・交換について")}</p>
            </Link>
        </dd>
        <dd>
            <Link href="/pages/guide-01">
                <span className="guide-cate">MAIL</span>
                <p>{t("当店からのメールが届かないお客様へ")}</p>
            </Link>
        </dd>
        <dd>
            <Link href="/pages/guide-02">
                <span className="guide-cate">SUBSCRIPTION</span>
                <p>{t("定期購入について")}</p>
            </Link>
        </dd>
        <dd>
            <Link href="/pages/guide-03">
                <span className="guide-cate">COUPON</span>
                <p>{t("クーポンについて")}</p>
            </Link>
        </dd>
        <dd>
            <Link href="/pages/guide-04">
                <span className="guide-cate">ACCOUNT</span>
                <p>{t("アカウントについて")}</p>
            </Link>
        </dd>
        <dd>
            <Link href="/policies/terms-of-service">
                <span className="guide-cate">POLICY</span>
                <p>{t("ご利用規約")}</p>
            </Link>
        </dd>
        <dd>
            <Link href="/policies/privacy-policy">
                <span className="guide-cate">POLICY</span>
                <p>{t("プライバシーポリシー")}</p>
            </Link>
        </dd>
        <dd>
            <Link href="/policies/legal-notice">
                <span className="guide-cate">LEGAL NOTICE</span>
                <p>{t("特定商取引法")}</p>
            </Link>
        </dd>
        <dd>
            <Link href="/pages/about"> <span className="guide-cate">ABOUT US</span>
                <p>{t("会社概要")}</p>
            </Link>
        </dd>
    </dl>
</div>
  </div>
</div>
    </Layout>
  );
}
