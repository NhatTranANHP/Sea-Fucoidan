'use clients'
import Layout from "@/components/Layout";
import { useTranslation } from "@/hook/useTranslation";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export default function PrivacyPolicyPage() {
    const { t } = useTranslation();
  return (
    <Layout>
        <main id="MainContent" className="content-for-layout focus-none" role="main">
      <div className="shopify-policy__container">
  <div className="shopify-policy__title">
    <h1>{t("プライバシーポリシー")}</h1>
  </div>

  <div className="shopify-policy__body">
    <div className="rte">
        <div id="towa-guide-privacy" className="towa-privacy-policy">
<h2>＜個人情報保護方針＞</h2>
<p>【公式】SEA FUCOIDAN（シーフコイダン）（以下「当社」といいます。）は、個人情報保護の重要性を認識し、適切な管理を行うことが社会的責務であると考えております。当社は、個人情報保護に関係する法令等を遵守するとともに、以下個人情報保護方針に基づき社会の信頼に応えるよう努めます。</p>
<ul className="towa-privacy">
<li>
<h3>1.法令遵守</h3>
<p>当社は、個人情報に関する法令およびその他規範を遵守します。</p>
</li>
<li>
<h3>2.利用目的</h3>
<p>当社は、個人情報を適法かつ公正な手段により取得します。取得する際は、ご本人に対して収集・利用目的を明確にし、その目的の範囲内において事業の用に供します。</p>
</li>
<li>
<h3>3.安全対策</h3>
<p>当社は、個人情報の安全性や正確性を確保すべく、適切な安全管理措置を講じます。個人情報を不正なアクセスや漏洩などから守るよう努め、且つ継続的に社員の教育・啓発を実行します。また、内部監査等を適宜行い、改善が必要な場合は、速やかにこれを是正します。</p>
</li>
<li>
<h3>4.第三者提供</h3>
<p>当社は、下記の場合を除き、ご本人の同意を得ることなく個人情報を第三者に開示または提供しません。開示または提供する場合は、個人情報の不適切な流出防止をはじめとする保護のための措置が、相手方で確保されるよう努めます。</p>
<ul>
<li>(1)業務委託先またはグループ企業が業務上必要な範囲内でのみ利用する場合</li>
<li>(2)合併、会社分割、営業譲渡その他の事由による、事業の法令等に基づく継承の場合</li>
<li>(3)法令等に従って提供が求められた場合、あるいは許容される場合</li>
</ul>
</li>
<li>
<h3>5.開示・訂正・削除</h3>
<p>当社は、その保有する個人情報について、ご本人から開示・訂正・削除等のご要請があった場合は、当該ご請求がご本人によるものであることが確認できた後に、合理的な期間内にこれに対応します。</p>
</li>
</ul>
<div className="towa-privacy-end">
<h4>【公式】SEA FUCOIDAN<span className="nowrap">（シーフコイダン）</span>
</h4>
<dl>
<dt>本社：MYM International 株式会社</dt>
<dd>〒830-0032　福岡県久留米市東町31-8</dd>
</dl>
<dl>
<dt>お問合せ先：</dt>
<dd>【公式】SEA FUCOIDAN（シーフコイダン）カスタマーサポート</dd>
</dl>
<dl>
<dt>電話：</dt>
<dd>0120-21-5959</dd>
</dl>
<dl>
<dt>受付時間：</dt>
<dd>9:00~17:30　<span className="nowrap">（土・日・祝日お休み）</span>
</dd>
</dl>
</div>
</div>
    </div>
  </div>
</div>

    </main>
    </Layout>
  );
}
