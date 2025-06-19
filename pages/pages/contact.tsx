import Link from "next/link";
import Layout from "@/components/Layout";
import { useTranslation } from "@/hook/useTranslation";
import { useState } from "react";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export default function FAQPage() {
    const { t } = useTranslation();
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [orderID, setOrderID] = useState('');
  const [select, setSelect] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(t('メッセージを送信中...'));
    try {
      if(!name) {
        setStatus(t("ご連絡できるようお名前を入力してください。"))
      }
      else if(!phone && !email) {
        setStatus(t("ご連絡できるよう、電話番号またはメールアドレスをご提供ください"))
      }
      else {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, select, orderID, message }),
      });
        if (res.ok) {
          setStatus(t('メッセージは送信されました。できるだけ早くご連絡いたします。'));
          setName('');
          setEmail('');
          setMessage('');
          setOrderID('');
          setSelect('');
          setPhone('');
        } else {
          setStatus(t('メッセージの送信に失敗しました。後ほど再送信いただくか、電話番号からご連絡ください。'));
        }
      }
    } catch (err) {
      console.error(err);
      setStatus(t('エラーが発生しました。'));
    }
  };
  return (
    <Layout>
      <main
        id="MainContent"
        className="content-for-layout focus-none"
        role="main"
      >
        {/* <section id="shopify-section-template--20903563034909__c3df37c9-649d-4e1b-b486-ebc4de508545" className="shopify-section section">
    <div className="color-background-1 gradient">
      <div className="section-template--20903563034909__c3df37c9-649d-4e1b-b486-ebc4de508545-padding">
        <link href="//sea-fucoidan.com/cdn/shop/t/1/assets/sj-guide.css?v=8690176019021348751697088682" rel="stylesheet" type="text/css" media="all">
      </div>
    </div>
  </section> */}
        <section
          id="shopify-section-template--20903563034909__9ee4fb23-38ec-4dec-b8c2-b208b5538470"
          className="shopify-section section"
        >
          <div className="color-background-1 gradient">
            <div className="section-template--20903563034909__9ee4fb23-38ec-4dec-b8c2-b208b5538470-padding">
              <div className="sf-contact">
                <div className="page-width page-width--narrow section-template--20903563034909__main-padding">
                  <div className="ttl">
                    <h1>
                      Contact<span>{t("お問い合わせ")}</span>
                    </h1>
                  </div>
                  <div className="concept">
                    <ul>
                      <li>
                        {t("お問い合わせいただく際は、")}
                        <Link href="/pages/faq" className="contact-bold">
                          {t("よくある質問")}
                        </Link>
                        {t("を予めご確認ください。")}
                      </li>
                      <li>
                        {t(
                          "返品/交換をご希望の場合は、商品到着日より【7日以内】に"
                        )}
                        <a
                          href="/policies/refund-policy"
                          className="contact-bold"
                        >
                          {t("こちらのページより")}
                        </a>
                        {t("をご確認の上リクエストをしてください。")}
                      </li>
                      <li>
                        {t(
                          "【現在ご注文されている件について】【返品/交換について】のお問合せは、"
                        )}
                        <span className="contact-red">{t("注文番号")}</span>
                        {t("(#から始まる番号)をお忘れなくご入力ください。")}
                      </li>
                      <li>
                        {t(
                          "お問合せの内容によっては2営業日以内でのお返事ができない場合がございます。予めご了承くださいませ。"
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="shopify-section-template--20903563034909__form"
          className="shopify-section section"
        >
          {/* <link href="//sea-fucoidan.com/cdn/shop/t/1/assets/section-contact-form.css?v=124756058432495035521694594929" rel="stylesheet" type="text/css" media="all"> */}
          <div className="color-background-1 gradient">
            <div className="contact page-width page-width--narrow section-template--20903563034909__form-padding">
              <h2 className="visually-hidden">{t("お問い合わせフォーム")}</h2>
              <form
                method="post"
                id="ContactForm"
                className="isolate scroll-trigger animate--slide-in"
                name="ContactForm"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form_type" value="contact" />
                <input type="hidden" name="utf8" value="✓" />
                <div className="contact__fields">
                  <div className="field">
                    <input
                      className="field__input"
                      autoComplete="name"
                      type="text"
                      id="ContactForm-name"
                      name="contact[名前]"
                      placeholder={t("名前")}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label className="field__label" htmlFor="ContactForm-name">
                      {t("名前")}
                    </label>
                  </div>
                  <div className="field field--with-error">
                    <input
                      autoComplete="email"
                      type="email"
                      id="ContactForm-email"
                      className="field__input"
                      name="contact[email]"
                      spellCheck="false"
                      autoCapitalize="off"
                      aria-required="true"
                      placeholder={t("メール")}
                      onChange={(e) => setEmail(e.target.value)}
                    />{" "}
                    <label className="field__label" htmlFor="ContactForm-email">
                      {t("メール")}
                    </label>
                  </div>
                </div>
                <div className="field">
                  <input
                    type="tel"
                    id="ContactForm-phone"
                    className="field__input"
                    autoComplete="tel"
                    name="contact[電話番号]"
                    placeholder={t("電話番号")}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <label className="field__label" htmlFor="ContactForm-phone">
                    {t("電話番号")}
                  </label>
                </div>
                <div className="sf-field">
                  <label htmlFor="ContactForm-select">
                    {t("お問い合わせの種類")}
                  </label>
                  <div className="sf-contact-select">
                    <select
                      id="ContactForm-select"
                      name="contact[お問い合わせの種類]"
                      onChange={(e) =>
                        setSelect(
                          e.target.value + " (" + t(e.target.value) + ")"
                        )
                      }
                    >
                      <option value="">-</option>
                      <option value="注文について">{t("注文について")}</option>
                      <option value="定期購入について">
                        {t("定期購入について")}
                      </option>
                      <option value="商品について">{t("商品について")}</option>
                      <option value="お支払いについて">
                        {t("お支払いについて")}
                      </option>
                      <option value="配送について">{t("配送について")}</option>
                      <option value="キャンセルについて">
                        {t("キャンセルについて")}
                      </option>
                      <option value="返品について">{t("返品について")}</option>
                      <option value="交換について">{t("交換について")}</option>
                      <option value="ご意見／ご要望">
                        {t("ご意見／ご要望")}
                      </option>
                      <option value="アカウントについて">
                        {t("アカウントについて")}
                      </option>
                      <option value="その他">{t("その他")}</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <input
                    type="text"
                    id="ContactForm-order-id"
                    className="field__input"
                    autoComplete=""
                    name="contact[注文番号]"
                    placeholder="注文番号(数字のみ)"
                    onChange={(e) => setOrderID(e.target.value)}
                  />
                  <label
                    className="field__label"
                    htmlFor="ContactForm-order-id"
                  >
                    {t("注文番号(数字のみ)")}
                  </label>
                </div>
                <div className="field">
                  <textarea
                    rows={10}
                    id="ContactForm-body"
                    className="text-area field__input"
                    name="contact[お問い合わせの詳細]"
                    placeholder="お問い合わせの詳細"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <label
                    className="form__label field__label"
                    htmlFor="ContactForm-body"
                  >
                    {t("お問い合わせの詳細")}
                  </label>
                </div>
                <p style={{ lineHeight: "1.5" }}>
                  {t(
                    "送信する前に内容にお間違えがないか、ご確認をお願いします。"
                  )}
                </p>
                <div className="contact__button">
                  <button type="submit" className="button">
                    {t("送信する")}
                  </button>
                </div>
                {status && <p className="text-sm text-gray-300">{status}</p>}
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
