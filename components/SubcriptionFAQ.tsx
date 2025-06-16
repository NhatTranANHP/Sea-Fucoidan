'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hook/useTranslation';

export default function SubscriptionFAQ() {
    const { t } = useTranslation();
  return (
    <div className="color-background-1 gradient">
  <div className="section-template--21176830132509__c0e49c33-b8c4-4900-9a48-fbc59d4bea4e-padding">

<p style={{textAlign:"center"}}>▼ FAQ（{t("定期購入について")}） ▼</p>

<div className="page-width">
    <div className="guide-teiki sf-guide-content">
        <ul className="towa-coupon-nav">
            <li><Link href="#teiki-05" className="swing">{t("定期購入は誰でも契約できますか？")}</Link></li>
            <li><Link href="#teiki-07" className="swing">{t("定期購入の支払い方法は何ですか？")}</Link></li>
            <li><Link href="#teiki-02" className="swing">{t("定期購入は1回で解約できますか?")}</Link></li>
            <li><Link href="#teiki-03" className="swing">{t("定期購入は途中で解約はできますか？")}</Link></li>
            <li><Link href="#teiki-06" className="swing">{t("定期購入マイページでできる事は何ですか？")}</Link></li>
            <li><Link href="#teiki-08" className="swing">{t("定期購入マイページはどうやって見れますか？")}</Link></li>
            <li><Link href="#teiki-01" className="swing">{t("次回のお届け日・お支払い日を確認したいのですが")}？</Link></li>
            <li><Link href="#teiki-04" className="swing">{t("定期購入の商品がたまって消化しきれないので、次回分の発送を停止したいのですが？")}</Link></li>
        </ul>


        <div id="teiki-05" className="teiki-content">
            <h2>{t("定期購入は誰でも契約できますか？")}</h2>
            <div className="t-c-content">
                <p>{t("はい。どなたでも契約していただけます。ご契約時には定期的なお届け先の登録のため、会員登録（無料）が必須となります。")}</p>
            </div>

        <div id="teiki-07" className="teiki-content">
            <h2>{t("定期購入の支払い方法は何ですか？")}</h2>
            <div className="t-c-content">
                <p>{t("【WEBからのご注文の場合】：クレジットカード払いのみご利用可能です。")}<br/>{t("●WEBからのご注文の場合、クレジットカードから代金引換への変更はできかねます。")}<br/><br/>{t("【お電話からのご注文の場合】：クレジットカードまたは代金引換がご利用可能です。")}<br/>{t("※お電話からのご注文の場合はマイページがご利用になれません。ご契約内容の変更・スキップ・解約などは全てお電話にてご連絡ください。")}</p>
            </div>
        </div>
        </div>

        <div id="teiki-02" className="teiki-content">
            <h2>{t("定期購入は1回で解約できますか？")}</h2>
            <div className="t-c-content">
                <p>{t("定期購入は、継続していただくことを前提としたお得なサービスですので、1回で解約はできません。<br/>1回のみのご購入をご希望の方は、")}「<Link href="/collections/product-list">{t("商品一覧")}</Link>」{t("よりお買い求めください。")}</p>
            </div>
        </div>

        <div id="teiki-03" className="teiki-content">
            <h2>{t("定期購入は途中で解約はできますか？")}</h2>
            <div className="t-c-content">
                <p>{t("はい。定期購入の解約は、会員様限定")}<Link href="/account">{t("マイページ")}</Link>{t("またはお電話などから承っております。なお、定期購入は最低3回以上のご購入をお願いしております。予めご了承くださいませ。")}</p>
            </div>
        </div>

        <div id="teiki-06" className="teiki-content">
            <h2>{t("定期購入マイページでできる事は何ですか？")}</h2>
            <div className="t-c-content">
                <p>{t("マイページでは下記のご利用が可能です。")}<br/><br/>{t("・現在のご契約内容の確認")}<br/>{t("・次回お届け日時の変更")}<br/>{t("・お届け周期の変更")}<br/>{t("・お届け先住所の変更")}<br/>{t("・お支払い方法（クレジットカード情報）の更新・変更")}<br/>{t("・スキップ、一時停止、解約（ボタンは最低3回以上ご購入完了後より表示されます。）")}</p>
            </div>
        </div>

        <div id="teiki-08" className="teiki-content">
            <h2>{t("定期購入マイページはどうやって見れますか？")}</h2>
            <div className="t-c-content">
                <dl className="teiki-howto_01">
                    <dd>
                        <p className="th-ttl"><span className="th-num">1</span>{t("ログインします。")}<br/>（<Link href="/account/login">{t("こちらのページ")}</Link>{t("よりログインできます。")}）</p>
                    </dd>
                    <dd>
                        <div className="th-text">
                            <p className="th-ttl"><span className="th-num">2</span>{t("マイページ下部にあります")}<span className="t-ichiran">{t("定期購入一覧")}</span>{t("ボタンを")}{t("クリック")}{t("します。")}</p>
                        </div>
                        <div className="th-img th-img-01">
                            <span className="th-close">閉じる</span>
                            <div className="th-img-in">
                                <Image src="/teiki_howto-01.png" alt="Sea Fucoidan 定期購入" width={100} height={100}/>
                            </div>
                            <div className="th-big th-big-01">
                                <span>画像を拡大する</span>
                            </div>
                        </div>
                    </dd>
                    <dd>
                        <div className="th-text">
                            <p className="th-ttl"><span className="th-num">3</span>{t("現在ご契約されている定期購入が一覧表示されます。")}<br/>{t("詳しい内容は")}<span className="th-kakunin">{t("詳細の確認をする")}</span>{t("ボタンからご覧いただけます。")}</p>
                        </div>
                        <div className="th-img th-img-02">
                            <span className="th-close">{t("閉じる")}</span>
                            <div className="th-img-in">
                                <Image src="/teiki_howto-02.png" alt="Sea Fucoidan 定期購入" width={100} height={100}/>
                            </div>
                            <div className="th-big th-big-02">
                                <span>{t("画像を拡大する")}</span>
                            </div>
                        </div>
                    </dd>
                    <dd>
                        <div className="th-text">
                            <p className="th-ttl"><span className="th-num">4</span>{t("現在ご契約されている定期購入の詳しい内容が表示されます。")}<br/>{t("「お届け予定日」「お届け周期」「お届け先住所」の変更は各ボタンより操作していただけます。")}</p>
                        </div>
                        <div className="th-img th-img-03">
                            <span className="th-close">{t("閉じる")}</span>
                            <div className="th-img-in">
                                <Image src="/teiki_howto-03.png" alt="Sea Fucoidan 定期購入" width={100} height={100}/>
                            </div>
                            <div className="th-big th-big-03">
                                <span>{t("画像を拡大する")}</span>
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>


        <div id="teiki-01" className="teiki-content">
            <h2>{t("次回のお届け日・お支払い日を確認したいのですが？")}</h2>
            <div className="t-c-content">
                <p>{t("会員様限定 ")}<Link href="/account">{t("マイページ")}</Link>{t("にていつでもご確認いただけます。")}<br/>{t("閲覧方法は")}<Link href="#teiki-08" className="swing">{t("こちら")}</Link>{t("をご確認ください。")}</p>
            </div>
        </div>

        <div id="teiki-04" className="teiki-content">
            <h2>{t("定期購入の商品がたまって消化しきれないので、次回分の発送を停止したいのですが？")}</h2>
            <div className="t-c-content">
                <p>{t("会員様限定 ")}<Link href="/account">{t("マイページ")}</Link>{t("にて「スキップ」または「一時停止」していただけます。")}<br/>{t("なお、「スキップ」または「一時停止」ボタンは最低3回以上のご購入が完了するまでご利用いただけません。予めご了承くださいませ。")}</p>
                <div className="tc-img">
                    <Image src="/teiki_howto-04.png" alt="Sea Fucoidan 定期購入 スキップ 一時停止" width={100} height={100} style={{maxWidth: "323px",     justifySelf: 'center'}}/>
                    <p>{t("※こちらのボタンは最低3回以上のご購入まで表示されません。")}</p>
                </div>
            </div>
        </div>
        
    </div>
</div>
  </div>
</div>
  );
}
