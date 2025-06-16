import Image from "next/image";
import Link from "next/link";
import AnimatedImage from "@/components/AnimatedImage";
import Layout from "@/components/Layout";
import { useTranslation } from "@/hook/useTranslation";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export default function FucoidanPage() {
    const { t } = useTranslation()
  return (
    <Layout>
      <div id="MainContent" className="content-for-layout focus-none" role="main" tabIndex={-1}>
        <section className="color-background-1 gradient">
          <div className="sf-section-whats common">
            <h1>Fucoidan là gì?</h1>

            <div className="whats-fv">
              <div className="inner sphone-padding">
                <div className="fv-outline">
                  <h2>
                    <span className="renner">FUCOIDAN</span> {t("と")} <span className="nowrap renner">Sea Fucoidan</span>
                  </h2>
                </div>
                <div className="fv-copy">
                  <p>
                    {t("あなたはフコイダンの事を本当に知っていますか？")}
                    <br />
                    {t("このページではフコイダンの誕生からシーフコイダンの特徴をわかりやすく説明いたします。")}
                  </p>
                </div>
                <AnimatedImage
                  src="/whats-fv.png"
                  alt="Fucoidan biển"
                  width={600}
                  height={400}
                  triggerClass="fv-img renner whats-06-img"
                />
                <p>{t("さぁ一緒にフコイダンについて学びましょう。")}</p>
              </div>
            </div>

            <div className="whats-01">
                <div className="whats-01-in inner sphone-padding">
                    <h3 className="ttlbig">{t("フコイダンが発見されたのはおよそ100年前の1913年")}</h3>
                    <p>{t("スウェーデンの学者Kylinによって1913年に発見され、「フコイダン」と名付けられました。")}</p>
                </div>
                <div className="kylin-outline">
                    <div className="whats-01-img">
                        <dl className="kylin">
                            <dd><AnimatedImage src="/whats-kylin-01.png" alt="Sea Fucoidan" width={100} height={100}/></dd>
                            <dd><AnimatedImage src="/whats-kylin-02.png" alt="Sea Fucoidan" width={100} height={100}  style={{transform: "scale(1.5)"}}/></dd>
                        </dl>
                        <dl className="kylin-2">
                            <dd><AnimatedImage src="/whats-kylin-04.png" alt="Sea Fucoidan" width={200} height={200} style={{transform: "scale(1.5) translate(5px,15px)"}}/></dd>
                            <dd><AnimatedImage src="/whats-kylin-06.png" alt="Sea Fucoidan" width={100} height={100}/></dd>
                        </dl>
                    </div>
                </div>
                <div className="whats-01-in inner sphone-padding">
                    <p>{t("Kylin博士は沿岸地域で健康な人が多いことがきっかけで海藻には何か特有の作用があるのではないかと考え、海藻のヌルヌル成分を調べた結果、これが新たな成分だと発見しました。これが今注目の成分フコイダンの最初の発見だと言われています。")}</p>
                </div>
            </div>

            <div className="whats-02">
                <div className="whats-02-in inner sphone-padding">
                    <h3 className="ttlbig">{t("最初は注目されていなかったフコイダン")}</h3>
                    
                    <p>{t("フコイダンが発見されてからしばらくはフコイダンについてはあまり注目されていませんでした。発見された当初はフコイダンだけの抽出が困難だった事もあり、あらたな発見や研究報告も少なかったのです。しかし1970年代からフコイダンの研究が活発になっていきます。")}</p>
                    <Image  src="/whats-icon-01.jpg" alt="Sea Fucoidan" width={100} height={100}/>
                </div>
            </div>

            <div className="whats-03">
                <div className="whats-03-in inner sphone-padding">
                    <h3 className="ttlbig">{t("1996年にフコイダンに大きな転換期がおこります。")}</h3>
                    <p>{t("1996年の学会において、フコイダンが一躍脚光を浴びるようになりました。この発表をきっかけにフコイダン関連商品が多く発表される事となります。")}</p>
                    <div className="whats-anime">
                        <Image src="/whats-icon-02-1.gif" alt="Sea Fucoidan" width={100} height={100}/>
                        <Image src="/whats-icon-02-2.jpg" alt="Sea Fucoidan" width={100} height={100}/>
                    </div>
                </div>
            </div>

            <div className="whats-04">
                <div className="whats-04-in inner sphone-padding">
                    <h3 className="ttlbig">{t("翌年1997年にフコイダンを低分子化")}</h3>
                    <p>{t("1996年の学会においてフコイダンへの研究が発表された翌年の1997年、当社シーフコイダンの販売を開始しました。その後、シーフコイダンは世界で初めての低分子フコイダンの商品として世界中の方に日本が誇るフコイダン商品としてご愛飲される事となります。")}</p>
                    <div className="whats-anime">
                        <Image width={100} height={100} src="/whats-icon-03.jpg" alt="Sea Fucoidan"/>
                    </div>
                    <h4 className="ttlbig">{t("なぜフコイダンを低分子化したのでしょうか？")}</h4>
                    
                    <p>{t("フコイダンの構造は高分子多糖類と呼ばれ、分子量が非常に大きくて人間の体では吸収されません。人体が吸収できる分子量は約3000以下とされていますから、シーフコイダンの原料であるトンガ産天然モズクは平均分子量47万にもなりますので、フコイダンを低分子化する事で体内にスムーズに吸収するために低分子化されました。")}</p>
                    
                    <h4 className="ttlbig">{t("フコイダンを選ぶ決め手は低分子")}</h4>
                    
                    <dl className="whats-anime-2">
                        <dd>
                            <Image width={100} height={100} src="/whats-icon-03.jpg" alt="Sea Fucoidan"/>
                        </dd>
                        <dd>
                            <i className="fas fa-angle-double-right"></i>
                        </dd>
                        <dd>
                            <ul className="mol-bunkai">
                                <li><Image width={100} height={100} src="/whats-icon-03.jpg" alt="Sea Fucoidan"/></li>
                                <li><Image width={100} height={100} src="/whats-icon-04-1.jpg" alt="Sea Fucoidan"/></li>
                                <li><Image width={100} height={100} src="/whats-icon-04-2.jpg" alt="Sea Fucoidan"/></li>
                            </ul>
                        </dd>
                    </dl>
                    <dl className="whats-anime-2">
                        <dd>
                            <p>{t("高分子のフコイダン(トンガ産)分子量 47,0000")}</p>
                        </dd>
                        <dd></dd>
                        <dd>
                            <p>{t("低分子のフコイダン分子量 500")}</p>
                        </dd>
                    </dl>
                    <p>{t("フコイダンを選ぶ際に大事なのが吸収率です。その吸収率を高めるのが低分子化フコイダンいうことになります。胃腸の弱った方やお年寄りでも容易に吸収できるのも低分子フコイダンを選ぶ一つの決め手だと思います。")}</p>
                </div>
            </div>

            <div className="whats-05">
                <div className="whats-05-in inner sphone-padding">
                    <div className="whats-05-copy">
                        <p className="point">{t("パイオニア")}</p>                
                        <h2 className="ttlbig">{t("私たちのフコイダンは低分子フコイダンのパイオニア製品。")}<span className="sub">{t("いままでにないフコイダンの体験を。")}</span></h2>
                    </div>
                    <Image className="sp-only" src="/history-1998.jpg" alt="Sea Fucoidan" width={100} height={100}/>
                    <div className="whats-05-outline">
                        <div className="whats-05-content">
                            <p>{t("「フコイダンと言えば高分子」というのが私たちがフコイダンを製品化する前のフコイダンのイメージでした。効率よく体内にフコイダンを吸収される事を目指して１９９７年に低分子フコイダンが誕生しました。フコイダンの機能を維持したまま最大限にカラダに吸収されるフコイダンがここに誕生したのです。")}</p>
                        </div>
                        <div className="whats-05-content">
                            <Image className="pc-only" src="/history-1998.jpg" alt="Sea Fucoidan" width={100} height={100}/>
                            <p>{t("1997年低分子フコイダン誕生")} </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whats-06">
                <div className="whats-06-in inner sphone-padding">
                    <div className="whats-06-copy">
                        <p className="point">{t("バージョンアップ")}</p>
                        <h2 className="ttlbig">{t("フコイダンを飲んでいるすべての人に")}<span className="sub">{t("実感してもらうために。")}</span></h2>
                        <p>{t("1997年にフコイダン製品を販売・開発しておよそ「20年」。私たちは新たに、有用成分を多く含むチリ産のダービリアコンブに含まれた“ダービリアフコイダン”を新たに製品にプラスしました。これによりフコキサンチン・CCK等の有用成分がさらに充実し食物繊維･ミネラルが以前よりも大幅にアップしました。")}</p>
                    </div>
                    <div className="whats-06-outline">
                        <div className="whats-06-content">
                            <p className="double">{t("Double 海藻成分")}</p>
                            <dl className="double-fucoidan ttlbig">
                                <dd>{t("トンガ産モズク")}</dd>
                                <dd><span className="kakeru"></span></dd>
                                <dd>{t("チリ産コンブ")}</dd>
                            </dl>
                            <Image className="logo" src="/logo-dx-black.png" alt="Sea Fucoidan DX" width={100} height={100} />
                            <div className="whats-06-img sp-only slash">
                                <Image src="/product-dx900.png" alt="Sea Fucoidan DX" width={100} height={100}/>
                            </div>
                            <div className="whats-link"><Link href="/products/seafucoidandx">{t("Sea Fucoidan DXはこちら")}</Link></div>
                        </div>
                        <div className="whats-06-content pc-only inview slash">
                            <Image src="/product-dx900.png" alt="Sea Fucoidan DX" width={100} height={100}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whats-07">
                <div className="whats-07-in inner sphone-padding">
                    <div className="whats-07-content">
                        <h4 className="ttlbig">{t("トンガ産天然モズクで抽出したフコイダン")}</h4>
                        <p>{t("フコイダンは、いくつかの原料由来がありますが主要構成されるフコースなどに顕著な差異は認められていません。しかしながら、とりわけ水質の良い、天然モズクが自生するトンガ王国産モズク由来のフコイダンは最も高含有・高品質・安全なのです。")}</p>
                    </div>
                    <div className="whats-07-content">
                        <h4 className="ttlbig">{t("養殖モズクではなく天然モズクへのこだわり")}</h4>
                        <p>{t("私たちがフコイダンを抽出する上でこだわったのが自然に生育するモズクへのこだわりです。ほとんどのモズクは「人工的な種付け」をして養殖しておりますが、トンガモズクは自然に成育するモズクから種を網に付着させて育成するという手法で環境にも無理のない育成をしています。")}</p>
                    </div>
                    <div className="whats-07-more">
                        <Link href="/pages/safety">{t("さらに詳しく")}</Link>
                    </div>
                </div>
                <div className="whats-07-background">
                    <Image className="human" src="/whats-safety-02.gif" alt="Sea Fucoidan" width={100} height={100}/>
                    <ul className="sea">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
