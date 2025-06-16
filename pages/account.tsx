import { useTranslation } from "@/hook/useTranslation";
import { useRouter } from 'next/router';
import Link from "next/link";
import Layout from "@/components/Layout";
import { auth } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';


export default function LoginPage() {
    const { t } = useTranslation();
    const { user } = useAuth();
      const router = useRouter();
    
      const logout = async () => {
        await auth.signOut();
        router.push('/');
      };
    
      if (!user) return null;
  return (
    <Layout>
        <main id="MainContent" className="content-for-layout focus-none" role="main">
  <div id="shopify-section-template--20903563526429__main" className="shopify-section">
    {/* <link href="//sea-fucoidan.com/cdn/shop/t/1/assets/customer.css?v=34961046807264576181694594917" rel="stylesheet" type="text/css" media="all"> */}
    <div className="customer account section-template--20903563526429__main-padding">
      <div>
        <h2 className="customer__title">{t("マイページ")}</h2>
        <div className="sf-customer-info">
          <p className="sf-hello"><span>A B</span> {t("様")}</p>
          <p className="sf-customer-id">{t("お客様ID")}: <span>{user.email}</span></p>
        </div>
      </div>
      <div>
        <div>
          <h2>{t("注文履歴")}</h2>
          <p>{t("注文はまだありません。")}</p>
        </div>
        <div>
          <h2>{t("現在の配送先")}</h2>
          <div className="sf-account-in">
            <div className="sf-default-add">
              <p>A B {t("様")}</p>
              <p>〒</p>
              <p>TEL:</p>
            </div>
          </div><Link href="/account/addresses" className="sf-account-address">{t("住所を確認")}</Link>
        </div>
      </div>
      <div className="sf-account-logout-area">
        <Link href="/account?hbSubscriptionPath=/" style={{marginRight: "20px"}}>{t("定期購買一覧")}</Link> <button onClick={logout} style={{display: 'flex'}}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 18 19">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor"></path>
            </svg> {t("ログアウト")}
        </button>
      </div>
    </div>
  </div>
</main>
    </Layout>
  );}