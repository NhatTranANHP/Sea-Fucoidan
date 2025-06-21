import Image from "next/image";
import Layout from "@/components/Layout";
import { useTranslation } from "@/hook/useTranslation";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export default function HistoryPage() {
    const {t} = useTranslation()
  return (
    <Layout>
        <div className="color-background-1 gradient">
  <div className="section-template--20947874414877__784e537e-a022-4b94-8b4e-f05bf2899c7a-padding">
<div className="sf-section-history common">
    <div className="history-outline">
        <div id="section-1" className="history-fv inview slash">
            <div className="inner sphone-padding">
                <h1 className="big renner">{t("History of Sea fucoidan")}</h1>
                <p>{t("From 1913 to today")}</p>
            </div>
        </div>
        <div id="section-2" className="history-1913 inview slash">
            <div className="history-inner inner sphone-padding">
                <div className="history-content inview slash">
                    <div className="year">
                        <p className="big"><span className="renner">{t("1913年")}</span></p>
                        <p className="small">{t("フコイダンの発見")}</p>
                    </div>
                    <div className="event">
                        <p>{t("スウェーデン人科学者 H・Z・キリン (H. Z. Kylin) によって発見され、ヒバマタ属の学名 genus Fucus にちなんで命名されました。")}</p>
                    </div>
                </div>
                <div className="history-content inview slash">
                    <div className="year">
                        <p className="big"><span className="renner">{t("1970年代")}</span></p>
                        <p className="small">{t("1970年代以降フコイダンの研究が盛んにされるようになります。")}</p>
                    </div>
                    <div className="event">
                        <p>{t("1996年の日本癌学会で制癌作用が報告され、健康食品として注目を浴びるようになりました。")}</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="section-3" className="history-1997">
            <div className="history-inner inner sphone-padding">
                <div className="history-content inview slash">
                    <div className="year">
                        <p className="big"><span className="renner">{t("1997年")}</span></p>
                        <p className="small"><span className="small-span">{t("超低分子モズクエキス")}</span>{t("シーフコイダン誕生")}</p>
                    </div>
                    <div className="max-767">
                        <Image width={0}
  height={0}
  sizes="100%"
  style={{ width: 'auto', height: '100%' }} src="/history-1998_1.jpg" alt="Sea Fucoidan"/>
                    </div>
                    <div className="event">
                        <p>{t("現在の日本ではすっかりメジャーな存在となったフコイダン。その草分けとも言えるシーフコイダンの誕生。")}</p>
                    </div>
                </div>
                <div className="history-content min-768 inview slash">
                    <div className="image">
                        <Image width={0}
  height={0}
  sizes="100%"
  style={{ width: 'auto', height: '100%' }} src="/history-1998_1.jpg" alt="Sea Fucoidan"/>
                    </div>
                </div>
            </div>
        </div>
        <div id="section-4" className="history-2004">
            <div className="history-inner inner sphone-padding">
                <div className="history-content inview slash">
                    <div className="year">
                        <p className="big"><span className="renner">{t("2004年")}</span></p>
                        <p className="small">{t("シーフコイダンシリーズ化")}</p>
                    </div>
                    <div className="max-767">
                        <Image width={0}
  height={0}
  sizes="100%"
  style={{ width: 'auto', height: '100%' }} src="/history-2004.jpg" alt="Sea Fucoidan"/>
                    </div>
                    <div className="event">
                        <p>{t("豊富なサイズ展開、加糖・無糖のご選択が可能になるなど、多彩なシリーズを発表。")}</p>
                        
                        <div className="event-small inview slash">
                            <p>{t("外出先などで気軽に飲用できるスティックタイプのシーフコイダンも登場")}</p>
                            <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} src="/history-2004-small.jpg" alt="Sea Fucoidan"/>
                        </div>
                    </div>
                </div>
                <div className="history-content min-768 inview slash">
                    <div className="image">
                        <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} src="/history-2004.png" alt="Sea Fucoidan"/>
                    </div>
                </div>
            </div>
        </div>
        <div id="section-5" className="history-2005">
            <div className="history-inner inner sphone-padding">
                <div className="history-content inview slash">
                    <div className="year">
                        <p className="big"><span className="renner">{t("2005年")}</span></p>
                        <p className="small">{t("シーフコイダン30mlタイプ")}</p>
                    </div>
                    <div className="max-767">
                        <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} src="/history-2005.jpg" alt="Sea Fucoidan"/>
                    </div>
                    <div className="event">
                        <p>{t("お客様の強い要望により誕生した30mlタイプのフコイダン。はじめてフコイダンをお試しになる方に最適なモデルとして誕生。")}</p>
                    </div>
                </div>
                <div className="history-content min-768 inview slash">
                    <div className="image">
                        <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} src="/history-2005.jpg" alt="Sea Fucoidan"/>
                    </div>
                </div>
            </div>
        </div>
        <div id="section-6" className="history-2006">
            <div className="history-inner inner sphone-padding">
                <div className="history-content inview slash">
                    <div className="year">
                        <p className="big"><span className="renner">{t("2006年")}</span></p>
                    </div>
                    <div className="video max-767">
                        <iframe src="https://www.youtube.com/embed/Pz0vbJCjgFY?rel=0"></iframe>
                    </div>
                    <div className="event">
                        <p>{t("元チェッカーズの高杢禎彦さんによるTVCMを開始しました。")}</p>
                    </div>
                </div>
                <div className="history-content min-768 inview slash">
                    <div className="video">
                        <iframe src="https://www.youtube.com/embed/Pz0vbJCjgFY?rel=0" ></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div id="section-7" className="history-2012">
            <div className="history-inner inner sphone-padding">
                <div className="history-content inview">
                    <div className="year">
                        <p className="big"><span className="renner">{t("2012年")}</span></p>
                        <p className="small">{t("シーフコイダンリニューアル")}</p>
                    </div>
                    <div className="max-767">
                        <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} src="/history-2012.jpg" alt="Sea Fucoidan"/>
                    </div>
                    <div className="event">
                        <p>{t("1800ml入りの一升瓶を、注ぎやすい900mlの2本セットにマイナーチェンジ。")}</p>
                    </div>
                </div>
                <div className="history-content min-768 inview">
                    <div className="image">
                        <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} src="/history-2012.jpg" alt="Sea Fucoidan"/>
                    </div>
                </div>
            </div>
        </div>
        <div id="section-8" className="history-2013">
            <div className="history-inner inner sphone-padding">
                <div className="history-content inview">
                    <div className="year">
                        <p className="big"><span className="renner">{t("2013年")}</span></p>
                        <p className="small"><span className="small-span">{t("高濃縮海藻エキスシーフコイダンDX誕生")}</span></p>
                    </div>
                    <div className="max-767">
                        <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} src="/history-2013.jpg" alt="Sea Fucoidan"/>
                    </div>
                    <div className="event">
                        <p>{t("独自技術により、新成分をプラスする事に成功。シーフコイダンシリーズ最高級モデルとして販売開始。")}</p>
                    </div>
                </div>
                <div className="history-content min-768 inview">
                    <div className="image">
                        <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} src="/history-2013.jpg" alt="Sea Fucoidan"/>
                    </div>
                </div>
            </div>
        </div>
        <div id="section-9" className="history-2017">
            <div className="history-inner inner sphone-padding">
                <div className="history-content inview">
                    <div className="year">
                        <p className="big"><span className="renner">{t("2017年")}</span></p>
                        <p className="small"><span className="small-span">{t("トライアルセット")}</span>{t("シーフコイダンＤＸ")}</p>
                    </div>
                    <div className="max-767">
                        <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} src="/history-2017.jpg" alt="Sea Fucoidan"/>
                    </div>
                    <div className="event">
                        <p>{t("初めてフコイダンを飲用する方にお求め安い価格で皆様にお試しセットをご用意いたしました。")}</p>
                    </div>
                </div>
                <div className="history-content min-768">
                    <div className="image">
                        <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} src="/history-2017.jpg" alt="Sea Fucoidan"/>
                    </div>
                </div>
            </div>
        </div>
        <div id="section-last" className="history-last inview">
            <div className="history-inner inner sphone-padding">
                <div className="year">
                    <p className="big thisyear renner" style={{textAlign: 'center'}}>2025</p>
                </div>
                <p style={{textAlign: 'center'}}>{t("皆様の支えでシーフコイダンは2025年で28周年を迎えます。")}</p>
                <div className="th">
                    <p className="blue renner"><span className="howyear">{t("28th")}</span></p>
                </div>
                <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} className="last-Image" src="/history-last.png" alt="Sea Fucoidan"/>
            </div>
        </div>
    </div>
</div>
  </div>
</div>
    </Layout>
  );
}
