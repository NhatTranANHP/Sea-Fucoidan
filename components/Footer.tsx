import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hook/useTranslation';

export const metadata = {
  title: 'Footer',
  description: 'Static Footer Section',
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <section className="shopify-section shopify-section-group-footer-group section">
      <div className="color-background-1 gradient">
        <div className="sf-footer">
          <div id="footer-01">
            <div className="footer-01">
              <div className="inquiry">
                <div className="inquiry-copy">
                  <h2>{t("お問い合わせ")}</h2>
                  <p>
                    {t("お気軽にご相談・お問い合わせください。")}
                  </p>
                </div>
                <div className="inquiry-howto">
                  <dl>
                    <dd className="tel">
                      <p className="renner">0904350-4537</p>
                    </dd>
                    <dd className="mail">
                      <Link href="/pages/contact">
                        <p>{t("お問い合わせ")}</p>
                      </Link>
                    </dd>
                  </dl>
                </div>
                <div className="inquiry-time">
                  <div className="time-box">
                    <h3>{t("お電話での受付時間")}</h3>
                    <p className="time">
                      {t("【平日】")}<span className="renner"> 9:00～17:30</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-aboutus">
                <div className="company">
                  <h3>{t("株式会社RAKUEN")}</h3>
                  <p>
                    {t("福岡県福岡市東区名島4-8")}
                  </p>
                </div>
                <div className="guide">
                  <ul>
                    <li><Link href="/pages/about">{t("会社案内")}</Link></li>
                    <li><Link href="/policies/legal-notice">{t("特定商取引法")}</Link></li>
                    <li><Link href="/policies/privacy-policy">{t("プライバシーポリシー")}</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="footer-02">
            <div className="login_signin">
              <dl>
                <dd className="login">
                  <Link href="/account/login">{t("ログイン")}</Link>
                </dd>
                <dd className="signin">
                  <Link href="/account/register">{t("新規会員登録")}</Link>
                </dd>
              </dl>
            </div>
            <div className="footer-contents">
              <h4>{t("ヘルプ＆ガイド")}</h4>
              <ul>
                <li><Link href="/pages/guide">{t("ショッピングガイド")}</Link></li>
                <li><Link href="/pages/about">{t("会社概要")}</Link></li>
                <li><Link href="/pages/contact">{t("お問い合わせ")}</Link></li>
                <li><Link href="/pages/faq/">FAQ<span>（{t("よくある質問")}）</span></Link></li>
                <li><Link href="/policies/privacy-policy">{t("プライバシーポリシー")}</Link></li>
                <li><Link href="/policies/legal-notice">{t("特定商取引に関する表記")}</Link></li>
              </ul>
            </div>
          </div>
          <div id="world-fucoidan">
            <h4>World Fucoidan</h4>
            <ul>
              <li><Link href="https://sea-fucoidan.com/">日本語</Link></li>
              <li><Link href="https://sea-fucoidandx.com/">English</Link></li>
              <li><Link href="http://sea-fucoidan.cn/">简体中文</Link></li>
              <li><Link href="https://sea-fucoidandx.com/zh">繁體中文</Link></li>
              <li><Link href="/">Tiếng Việt</Link></li>
              <li><Link href="https://sea-fucoidandx.com/ko">한국어</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="footer color-background-1 gradient section-sections--20903564116253__footer-padding">
        <div
          className="footer__content-bottom scroll-trigger animate--slide-in"
          data-cascade=""
        >
          <div className="footer__content-bottom-wrapper page-width">
            <div className="footer__column footer__localization isolate"></div>
            <div className="footer__column footer__column--info"></div>
          </div>
          <div className="footer__content-bottom-wrapper page-width footer__content-bottom-wrapper--center">
            <div className="footer__copyright caption">
              <small className="copyright__content">
                © 2025, <Link href="/">シーフコイダン日本公式</Link>
              </small>
              <small style={{ display: 'none' }} className="copyright__content">
                Powered by Shopify
              </small>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;