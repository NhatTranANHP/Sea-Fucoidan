import { useTranslation } from "@/hook/useTranslation";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Layout from "@/components/Layout";
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function LoginPage() {
    const { t } = useTranslation();
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/account');
    } catch (err) {
      alert((err as Error).message);
      setError((err as Error).message)
    }
  };
  return (
    <Layout>
        <main id="MainContent" className="content-for-layout focus-none" role="main">
  <div id="shopify-section-template--20903563755805__main" className="shopify-section">
    {/* <link href="//sea-fucoidan.com/cdn/shop/t/1/assets/customer.css?v=34961046807264576181694594917" rel="stylesheet" type="text/css" media="all"> */}
    <div className="customer login section-template--20903563755805__main-padding">
      <h2 id="recover">{t("パスワードをリセットする")}</h2>
      <div>
        <p>{t("パスワードをリセットするためのメールを送信します")}</p>
        <form method="post" action="/account/recover" acceptCharset="UTF-8">
          <input type="hidden" name="form_type" value="recover_customer_password"/>
          <input type="hidden" name="utf8" value="✓"/>
          <div className="field">
            <input type="email" value="" name="email" id="RecoverEmail" autoCorrect="off" autoCapitalize="off" autoComplete="email" placeholder="メール"/> <label htmlFor="RecoverEmail">{t("メール")}</label>
          </div>
          <button className="sf-account-btn">{t("送信")}</button> <Link href="#login">{t("キャンセル")}</Link>
        </form>
      </div>
      <h2 id="login">{t("ログイン")}</h2>
      <div>
        <form id="customer_login" acceptCharset="UTF-8"  noValidate={true} name="customer_login">
          <input type="hidden" name="form_type" value="customer_login"/>
          <input type="hidden" name="utf8" value="✓"/>
          <div className="field">
            <input type="email" value={email}
          onChange={e => setEmail(e.target.value)}
          required id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder={t("メール")} className=""/> 
            <label htmlFor="CustomerEmail">{t("メール")}</label>
          </div>
          <div className="field">
            <input type="password" id="CustomerPassword" value={password}
          onChange={e => setPassword(e.target.value)}
          required autoComplete="current-password" placeholder="パスワード" className=""/> 
            <label htmlFor="CustomerPassword">{t("パスワード")}</label>
          </div>
          <button type="button" onClick={login} className="sf-account-btn">{t("ログイン")}</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Link href="#recover" className="towa-login-foget">{t("パスワードを忘れた方はこちら")}</Link>
          <div className="towa-make-account">
            <p className="towa-register-ttl">{t("はじめてご利用の方")}</p>
            <div>
              <p>{t("▼アカウントをまだお持ちでない方▼")}</p>
              <Link href="/account/register">{t("新規会員登録する")}</Link>
            </div>
          </div>
          {/* <div className="h-captcha" data-sitekey="f06e6c50-85a8-45c8-87d0-21a2b65856fe" data-size="invisible">
            <iframe aria-hidden="true" data-hcaptcha-widget-id="079hwwva9vs" data-hcaptcha-response="" src="https://newassets.hcaptcha.com/captcha/v1/27f941962a3b54efe3a38c5d3ddcc9a78bea3bb2/static/hcaptcha.html#frame=checkbox-invisible" style="display: none;"></iframe> 
            <textarea id="h-captcha-response-079hwwva9vs" name="h-captcha-response" style="display: none;"></textarea>
          </div> */}
        </form>
      </div>
    </div>
  </div>
</main>
    </Layout>
  );}