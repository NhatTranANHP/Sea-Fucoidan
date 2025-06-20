import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useTranslation } from "@/hook/useTranslation";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export default function MemberOnlyPage() {
    const { t } = useTranslation();
  return (
    <Layout>
            <div className="color-background-1 gradient">
                <div className="section-template--21176830165277__b353ded6-9094-40d4-a48c-67b6f40cc0aa-padding">
                    <div className="sf-section-joinus">
                        <div className="section-1">
                            <div className="inner sphone-padding">
                                <div className="join-us-ttl-copy" style={{justifyItems: 'center'}}>
                                    <Image src="/join-us-1.png?v=56166063213867287931696237339" alt="Sea Fucoidan 会員限定" width={100} height={100} style={{maxWidth: "290px"}}/>
                                </div>
                                <div className="link-to-create">
                                    <h1 className="big">{t("お得な会員登録はお済みですか？")}</h1>
                                    <ul>
                                        <li>
                                            <Link href="/account/register">{t("新規会員登録")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/account/login">{t("ログイン")}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="section-2">
                            <div className="inner sphone-padding">
                                <ul className="sf-benefits" style={{maxWidth: "960px", fontSize: "3.5rem"}}>
                                    <li>
                                        <div className="b-img">
                                            <Image src="/join-us-2-1.png" alt="Sea Fucoidan 会員限定" width={100} height={100} style={{maxWidth: "90px"}}/>
                                        </div>
                                        <div className="b-text" style={{textAlign:'center'}}>
                                            <p>{t("ご注文時に毎回住所などを入力する手間を省くことができます。")}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="b-img">
                                            <Image src="/join-us-2-2.png" alt="Sea Fucoidan 会員限定" width={100} height={100} style={{maxWidth: "90px"}}/>
                                        </div>
                                        <div className="b-text" style={{textAlign:'center'}}>
                                            <p>{t("今までの購入履歴などの確認ができるマイページをご利用いただけます。")}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="b-img">
                                            <Image src="/join-us-2-3.png" alt="Sea Fucoidan 会員限定" width={100} height={100} style={{maxWidth: "90px"}}/>
                                        </div>
                                        <div className="b-text" style={{textAlign:'center'}}>
                                            <p>{t("会員様限定へお得なクーポンをプレゼントいたします。（不定期）")}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="b-img">
                                            <Image src="/join-us-2-4.png" alt="Sea Fucoidan 会員限定" width={100} height={100} style={{maxWidth: "90px"}}/>
                                        </div>
                                        <div className="b-text" style={{textAlign:'center'}}>
                                            <p>{t("会員様限定商品や定期購入をご利用いただけます。")}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="section-3">
                            <ul className="link-to-create">
                                <li>
                                    <Link href="/account/register">{t("新規会員登録")}</Link>
                                </li>
                                <li>
                                    <Link href="/account/login">{t("ログイン")}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </Layout>
  );
}
