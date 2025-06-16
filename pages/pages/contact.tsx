import Link from "next/link";
import Layout from "@/components/Layout";
import { useTranslation } from "@/hook/useTranslation";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export default function FAQPage() {
    const { t } = useTranslation();
  return (
    <Layout>
        <main id="MainContent" className="content-for-layout focus-none" role="main">
  {/* <section id="shopify-section-template--20903563034909__c3df37c9-649d-4e1b-b486-ebc4de508545" className="shopify-section section">
    <div className="color-background-1 gradient">
      <div className="section-template--20903563034909__c3df37c9-649d-4e1b-b486-ebc4de508545-padding">
        <link href="//sea-fucoidan.com/cdn/shop/t/1/assets/sj-guide.css?v=8690176019021348751697088682" rel="stylesheet" type="text/css" media="all">
      </div>
    </div>
  </section> */}
  <section id="shopify-section-template--20903563034909__9ee4fb23-38ec-4dec-b8c2-b208b5538470" className="shopify-section section">
    <div className="color-background-1 gradient">
      <div className="section-template--20903563034909__9ee4fb23-38ec-4dec-b8c2-b208b5538470-padding">
        <div className="sf-contact">
          <div className="page-width page-width--narrow section-template--20903563034909__main-padding">
            <div className="ttl">
              <h1>Contact<span>{t("お問い合わせ")}</span></h1>
            </div>
            <div className="concept">
              <ul>
                <li>{t("お問い合わせいただく際は、")}<Link href="/pages/faq" className="contact-bold">{t("よくある質問")}</Link>{t("を予めご確認ください。")}
                </li>
                <li>{t("返品/交換をご希望の場合は、商品到着日より【7日以内】に")}<a href="/policies/refund-policy" className="contact-bold">{t("こちらのページより")}</a>{t("をご確認の上リクエストをしてください。")}
                </li>
                <li>{t("【現在ご注文されている件について】【返品/交換について】のお問合せは、")}<span className="contact-red">{t("注文番号")}</span>{t("(#から始まる番号)をお忘れなくご入力ください。")}</li>
                <li>{t("お問合せの内容によっては2営業日以内でのお返事ができない場合がございます。予めご了承くださいませ。")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="shopify-section-template--20903563034909__form" className="shopify-section section">
    {/* <link href="//sea-fucoidan.com/cdn/shop/t/1/assets/section-contact-form.css?v=124756058432495035521694594929" rel="stylesheet" type="text/css" media="all"> */}
    <div className="color-background-1 gradient">
      <div className="contact page-width page-width--narrow section-template--20903563034909__form-padding">
        <h2 className="visually-hidden">{t("お問い合わせフォーム")}</h2>
        <form method="post" action="/contact#ContactForm" id="ContactForm" accept-charset="UTF-8" className="isolate scroll-trigger animate--slide-in" name="ContactForm">
          <input type="hidden" name="form_type" value="contact"/>
          <input type="hidden" name="utf8" value="✓"/>
          <div className="contact__fields">
            <div className="field">
              <input className="field__input" autoComplete="name" type="text" id="ContactForm-name" name="contact[名前]" value="AB" placeholder={t("名前")}/> 
              <label className="field__label" htmlFor="ContactForm-name">{t("名前")}</label>
            </div>
            <div className="field field--with-error">
              <input autoComplete="email" type="email" id="ContactForm-email" className="field__input" name="contact[email]" spellCheck="false" autoCapitalize="off" value="b@bmail.com" aria-required="true" placeholder={t("メール")}/> <label className="field__label" htmlFor="ContactForm-email">{t("メール")} <span aria-hidden="true">*</span></label>
            </div>
          </div>
          <div className="field">
            <input type="tel" id="ContactForm-phone" className="field__input" autoComplete="tel" name="contact[電話番号]"  value="" placeholder={t("電話番号")}/> 
            <label className="field__label" htmlFor="ContactForm-phone">{t("電話番号")}</label>
          </div>
          <div className="sf-field">
            <label htmlFor="ContactForm-select">{t("お問い合わせの種類")}</label>
            <div className="sf-contact-select">
              <select id="ContactForm-select" name="contact[お問い合わせの種類]">
                <option value="">
                  -
                </option>
                <option value="注文について">
                  {t("注文について")}
                </option>
                <option value="定期購入について">
                  {t("定期購入について")}
                </option>
                <option value="商品について">
                  {t("商品について")}
                </option>
                <option value="お支払いについて">
                  {t("お支払いについて")}
                </option>
                <option value="配送について">
                  {t("配送について")}
                </option>
                <option value="キャンセルについて">
                  {t("キャンセルについて")}
                </option>
                <option value="返品について">
                  {t("返品について")}
                </option>
                <option value="交換について">
                  {t("交換について")}
                </option>
                <option value="ご意見／ご要望">
                  {t("ご意見／ご要望")}
                </option>
                <option value="アカウントについて">
                  {t("アカウントについて")}
                </option>
                <option value="その他">
                  {t("その他")}
                </option>
              </select>
            </div>
          </div>
          <div className="field">
            <input type="text" id="ContactForm-order-id" className="field__input" autoComplete="" name="contact[注文番号]"  value="" placeholder="注文番号(数字のみ)"/> 
            <label className="field__label" htmlFor="ContactForm-order-id">{t("注文番号(数字のみ)")}</label>
          </div>
          <div className="field">
            <textarea rows={10} id="ContactForm-body" className="text-area field__input" name="contact[お問い合わせの詳細]" placeholder="お問い合わせの詳細"></textarea> 
            <label className="form__label field__label" htmlFor="ContactForm-body">{t("お問い合わせの詳細")}</label>
          </div>
          <p style={{lineHeight: '1.5'}}>{t("送信する前に内容にお間違えがないか、ご確認をお願いします。")}</p>
          <div className="contact__button">
            <button type="submit" className="button">{t("送信する")}</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</main>
    </Layout>
  );
}
