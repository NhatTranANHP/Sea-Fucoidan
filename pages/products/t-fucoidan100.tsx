'use client'; // Only needed if you're using this in app/ directory

import { useEffect, useRef } from 'react';
import { useTranslation } from "@/hook/useTranslation";
import Layout from "@/components/Layout";
import { useCart } from '@/context/CartContext';
import { products, Product } from '@/data/products';
import Image from "next/image";
import Link from 'next/link';


export default function TFucoidan100() {
    const { t } = useTranslation();
    const inviewRefs = useRef<NodeListOf<Element>>(null);
    const counterRef = useRef<HTMLDivElement>(null);
    const { addToCart } = useCart();
    const product: Product | undefined = products.find(p => p.id === 't-fucoidan100');
    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // prevent the link from navigating
        addToCart(product as Product);
    };

  useEffect(() => {
    // Animate slash
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slash');
        }
      });
    }, { threshold: 0.1 });

    inviewRefs.current = document.querySelectorAll('.inview');
    inviewRefs.current.forEach((el) => observer.observe(el));

    // Animate counters
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && counterRef.current) {
          const counters = counterRef.current.querySelectorAll('.counter');
          counters.forEach((counter) => {
            const target = parseInt(counter.textContent || '0', 10);
            const duration = 2000;
            const startTime = performance.now();

            const step = (currentTime: number) => {
              const progress = Math.min((currentTime - startTime) / duration, 1);
              const value = Math.ceil(progress * target);
              counter.textContent = value.toString();
              if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
          });

          counterObserver.unobserve(entry.target); // Only run once
        }
      });
    }, { threshold: 0.2 });

    if (counterRef.current) {
      counterObserver.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);
  return (
    <Layout>
        <div className="color-background-1 gradient">
  <div className="section-template--20903563362589__85c85418-a52b-4fbf-a70b-2426d564e91d-padding">
    



{/* <script>
    $(function() {
        $('.inview').on('inview', function(event, isInView) {
            if (isInView) {
              $(this).addClass('slash');
            } 
        });
    });
</script>
<script>
    $(function() {
        $('#counter-inview').on('inview', function(event, isInView) {
            if (isInView) {
                //要素が見えたときに実行する処理
                $("#counter-inview .counter").each(function(){
                    $(this).prop('Counter',0).animate({//0からカウントアップ
                        Counter: $(this).text()
                    }, {
                        // スピードやアニメーションの設定
                        duration: 2000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
                        easing: 'swing',//動きの種類。他にもlinearなど設定可能
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
        });
    });
</script> */}



<div className="sf-section-tfucoidan">
    <div className="product-nav-wrapper">
        <div className="product-nav-in">
            <div className="product-nav-name"><Link href="/products/t-fucoidan100"><h1>T-Fucoidan100</h1></Link></div>
            <div className="product-nav-buy"><Link className="swing" href="/products/t-fucoidan100#buy" onClick={handleAddToCart}>{t("購入")}</Link></div>
        </div>
    </div>

    <div className="tf-fv">
        <div className="tf-fv-line">
            <span className="tf-line-1"></span>
            <span className="tf-line-2"></span>
            <span className="tf-line-3"></span>
            <span className="tf-line-4"></span>
            <span className="tf-line-5"></span>
            <span className="tf-line-6"></span>
        </div>
        <div className="inner sphone-padding">
            <div className="tf-logo">
                <Image src="/tf_top-logo.png" alt="TFucoidan100" width={600} height={790}/>
            </div>
            <p className="tf-catch">{t("高純度フコイダンを限界まで")}</p>
            <div className="tf-bottle inview slash">
                <Image style={{maxWidth: "600px;",justifyItems: 'center'}} src="/tf_top-bottle.png" alt="TFucoidan100" width={434} height={95}/>
            </div>
            <p className="">Extracted from 100%<br/>MOZUKU Seaweed in Kingdom Tonga</p>
        </div>
    </div>

    <div className="tf-section-01 tf-01">
        <div className="inner sphone-padding">
            <div className="tf-catch">
                <h2 className="inview tf-yellow">{t("世界で唯一のフコイダン原料100%")}</h2>
            </div>
            <div className="tf-text">
                <p className="inview">{t("一般的なカプセルタイプのサプリメントには、賦形剤が使われていることをご存じですか?賦形剤とは、さらさらな粉末状の有用成分をカプセルへ充填しやすくする目的で加えられる添加剤。そのため、市場に出回っているカプセル・錠剤タイプのサプリメントは1粒に対する有用成分が100%ではないのです。")}</p>
                <p className="inview">{t("私たちは高含有・高純度のフコイダン製品を提供する企業として、皆様へより効率的にフコイダンを摂取していただくために賦形剤を加えず原料１００％のみを充填しようと何度もテストを重ねてきました。")} </p>
            </div>
        </div>
    </div>

    <div className="tf-section-02 tf-02">
        <div className="inner sphone-padding">
            <div className="tf-catch">
                <h2 className="inview"><span className="overthetop tf-white"> {t('"限界"を実現')} </span></h2>
            </div>
            <div className="tf-capsule100">
                <Image src="/tf_capsule100.png" alt="TFucoidan100" width={253} height={94}/>
            </div>
            <div className="tf-text">
                <p>{t("発案から幾度も”原料100%充填の壁”に挑み続けた結果,ついにフコイダン原料のみを充填した世界で唯一のフコイダン100%カプセルを誕生させました。")}</p>
            </div>
            <div id="counter-inview" className="tf-catch-2" ref={counterRef}>
                <p>{t("T-Fucoidan100は、内容量")}<span className="counter">200</span>mg.</p>
                <p>{t("1粒全部がフコイダンです。")}</p>
            </div>
        </div>
    </div>

    <div className="tf-section-03 tf-03">
        <iframe id="t-fucoidan-vimeo" src="https://player.vimeo.com/video/816143794?autoplay=1&amp;loop=1&amp;autopause=0&amp;background=1" style={{position:"absolute",top:'0',left:"0",width:"100%",height:"100%"}} title="ParticleIllusion" data-ready="true"></iframe>
        <div className="inner sphone-padding">
            <div className="tf-catch">
                <h2 className="tf-white">{t("T-Fucoidan100の")}<br/><span className="tf-yellow">{t("キーファクター硫酸基。")}</span></h2>
            </div>
            <div className="tf-text">
                <p>{t("フコイダンを選ぶうえで重要になってくるのが、硫酸基の結合率です。")}</p>
                <p>{t("我々の研究によると、フコイダンの分子構造のうち")}<span className="tf-yellow">{t("13%以上の硫酸基")}</span>{t("が安定的に形成されることがフコイダンの機能を発揮する上で重要になってくることを確認しています。")}</p>
            </div>
            <div className="tf-factor">
                <dl>
                    <dd>
                        <div className="tf-factor-in">
                            <div className="tf-factor-img-efe inview">
                                <div className="tf-factor-img">
                                    <Image src="/tf_factor-sb.png" alt="TFucoidan100" width={296} height={296}/>
                                </div>
                            </div>
                            <div className="tf-factor-name">
                                <p>{t("フコース含量")}</p>
                            </div>
                            <div className="tf-factor-per">
                                <p className="tf-yellow">{t("45%以上")}</p>
                            </div>
                        </div>
                    </dd>
                    <dd>
                        <div className="tf-factor-in">
                            <div className="tf-factor-img-efe inview">
                                <div className="tf-factor-img">
                                    <Image src="/tf_factor-fucose.png" alt="TFucoidan100" width={296} height={296}/>
                                </div>
                            </div>
                            <div className="tf-factor-name">
                                <p>{t("硫酸基結合含量")}</p>
                            </div>
                            <div className="tf-factor-per">
                                <p className="tf-yellow">{t("13%以上")}</p>
                            </div>
                        </div>
                    </dd>
                </dl>
                <div className="tf-factor-text">
                    <p>{t("独自開発の特許製法でフコイダンを抽出することにより、硫酸基を13%以上安定的に維持しています。")}</p>
                </div>
            </div>
        </div>
        {/* <script src="//sea-fucoidan.com/cdn/shop/t/1/assets/particles.js?v=177261174577315579081694681687" type="text/javascript"></script>
        <script src="//sea-fucoidan.com/cdn/shop/t/1/assets/particles-setting.js?v=39778613805940670811694681710" type="text/javascript"></script> */}
    </div>

    <div className="tf-section-04 tf-04">
        <div className="tf-04-inline">
            <div className="tf-04-inner">
                <p className="tf-04-concept">{t("T-Fucoidan100は約500,000の高分子フコイダン")}</p>
                <div className="tf-04-copy">
                    <div className="tf-04-copy-img">
                        <Image src="/tf_mol.png" alt="TFucoidan100 molecular" width={111} height={88}/>
                    </div>
                    <div className="tf-catch">
                        <h3 className="tf-green">{t("分子量50万のフコイダン")}</h3>
                    </div>
                </div>
                <div className="tf-text">
                    <p>{t("T-Fucoidan100は")}<span className="tf-green">{t("分子量50万の高分子フコイダン")}</span>{t("なので、胃の粘膜を保護したり、腸管へダイレクトに届き腸の免疫力を高める効果が期待されます。")}</p>
                    <p>{t("フコイダンの含有量や組成は、海藻の種類や育成環境、抽出方法によって異なります。")}</p>
                    <p>{t("高分子であること、")}<span className="tf-green">{t("硫酸基の結合含量が高い")}</span>{t("ことがヌルヌル成分”フコイダン”の有用性の目安です。")}</p>
                </div>
            </div>
        </div>
    </div>

    <div className="tf-section-05 tf-05">
        <div className="inner sphone-padding">
            <div className="tf-catch">
                <h3 className="tf-green">{t("環境汚染のない「トンガ王国」産モズク。")}</h3>
            </div>
            <div className="tf-text">
                <p>{t("T-Fucoidan100は重金属を含まない、海洋汚染のないトンガ王国産の天然モズクを使用。機械を使わずダイバーの手作業により丁寧に採取します。水質がよい環境でたっぷりの太陽を浴び、のびのびと育った天然のトンガ産モズク。それを独自の抽出方法によりヒ素も除去することで、「高含有・高品質・安全」なフコイダンの提供が可能となります。")} </p>
            </div>
            <div className="tf-link-area">
                <Link href="/pages/safety">
                    <div className="tf-link">
                        <p>{t("トンガ王国産モズクについて見る")}</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>

    <div className="tf-section-06 tf-06">
        <div className="inner sphone-padding">
            <div className="tf-06-concept">
                <p>{t("T-Fucoidan100は今までのフコイダン粉末とは違い、白い色をしています。")}</p>
            </div>
            <div className="tf-06-copy">
                <p>{t("白いカプセル。")}</p>
                <h3 className="tf-white">{t("カプセルの粉末が白いのは、高純度の証。")}</h3>
            </div>
            <div className="tf-06-capsule-text">
                <div className="tf-06-img">
                </div>
                <div className="tf-06-text">
                    <p>{t("通常のフコイダン粉末は茶褐色の色をしています。それはフコイダン以外の海藻の色素などが混ざっているからです。白い粉末は色素などの余分な物を取り除いた「純粋なフコイダン」の証です。")} </p>
                </div>
            </div>
            <div className="tf-06-fucoidan">
                <dl>
                    <dd>
                        <Image src="/tf_sample-1.png" alt="TFucoidan100 molecular" width={280} height={210}/>
                        <p>T-Fucoidan100</p>
                    </dd>
                    <dd>
                        <Image src="/tf_sample-2.png" alt="TFucoidan100 molecular" width={280} height={210}/>
                        <p>{t("他社のフコイダン")}</p>
                    </dd>
                </dl>
            </div>
        </div>
    </div>

    <div className="tf-section-07 tf-07">
        <div className="inner sphone-padding">
            <div className="tf-07-img">
                <Image src="/tf_icon-human.png" alt="TFucoidan100 molecular" width={168} height={161}/>
            </div>
            <div className="tf-07-copy">
                <p>{t("海藻の香りや味が苦手でも大丈夫！")}</p>
                
                <p className="tf-catch tf-blue wave-efe"><span>{t("無")}</span><span>{t("味")}</span><span>{t("無")}</span><span>{t("臭")}</span></p>
            </div>
            <div className="tf-07-text">
                <p>{t("T-Fucoidan100はフコイダンのみを抽出しているので、海藻の香りや海藻の風味が苦手な方でも大丈夫です。")}</p>
            </div>
        </div>
    </div>

    <div className="tf-section-08 tf-08">
        <div className="inner sphone-padding">
            <div className="tf-08-copy">
                <dl>
                    <dd>{t("研究")}</dd>
                    <dd>{t("認証")} </dd>
                    <dd>{t("分析")}</dd>
                </dl>
                <p>{t("確かな裏付けが本物の証")}</p>
            </div>
            <div className="tf-08-icon">
                <Image src="/tf_icon-note.png" alt="TFucoidan100" width={462} height={454}/>
            </div>
            <div className="tf-08-content-list">
                <dl>
                    <dd className="tf-08-content">
                        <h4 className="tf-08-ttl">{t("GMP認証工場")}</h4>
                        <p className="tf-08-text">{t("T-Fucoidan100は、原料から最終的に製品ができあがる全行程において、適正な製造管理と品質管理が行われている")}<span className="tf-red">{t("GMP認定工場")}</span>{t("で製造されています。")}</p>
                    </dd>
                    <dd className="tf-08-img">
                        <Image src="/tf-ev-1.jpg" alt="TFucoidan100" width={481} height={667}/>
                    </dd>
                </dl>
                <dl>
                    <dd className="tf-08-content">
                        <h4 className="tf-08-ttl">{t("九州大学との共同研究")}</h4>
                        <p className="tf-08-text">{t("トンガ産モズクに含まれる「機能性成分」に関する共同研究を、")}<span className="tf-red">{t("九州大学農学研究院")}</span>{t("と共に実施。")}</p>
                    </dd>
                    <dd className="tf-08-img">
                        <Image src="/tf-ev-2.jpg" alt="TFucoidan100" width={463} height={619}/>
                    </dd>
                </dl>
                <dl>
                    <dd className="tf-08-content">
                        <h4 className="tf-08-ttl"><span className="jfrl">JFRL</span>{t("日本食品分析センター")}</h4>
                        <p className="tf-08-text">{t("T-Fucoidan100はJFRL")}<span className="sub">（{t("日本食品分析センター")}）</span>{t("により製品の安全性を確認しています。")}</p>
                        <div className="jfrl-list">
                            <p className="tf-ex">{t("確認内容一例")}</p>
                            <ul>
                                <li><span className="tf-red">{t("放射性物質が基準値を下回っている")}</span>{t("ことを確認。")} </li>
                                <li><span className="tf-red">{t("ヒ素および有害性重金属が基準値を下回っている")}</span>{t("ことを確認。")}</li>
                            </ul>
                        </div>
                    </dd>
                    <dd className="tf-08-img">
                        <Image src="/tf-ev-3.jpg" alt="TFucoidan100" width={467} height={645}/>
                    </dd>
                </dl>
            </div>
        </div>
    </div>

    <div className="tf-section-09 tf-09">
        <div className="inner sphone-padding">
            <dl className="spec-img-text">
                <dd className="spec-img">
                    <Image src="/tf_spec.png" alt="TFucoidan100" width={462} height={454}/>
                </dd>
                <dd className="spec-text">
                    <p className="name">
                        <Image src="/tf_spec-logo.png" alt="TFucoidan100" width={83} height={83}/></p>
                    <p className="copy copy-1">{t("世界で唯一の")}<span>{t("フコイダン原料100%。")}</span></p>
                    <p className="copy copy-2">{t("高純度・高品質・安全な高分子フコイダン")}</p>
                </dd>
            </dl>
            <dl className="spec-icon">
                <dd>
                    <div className="spec-icon-img">
                        <Image src="/tf_icon-spec-1.png" alt="TFucoidan100" width={83} height={83}/>
                    </div>
                    <div className="spec-icon-text">
                        <p className="copy">{t("GMP認証工場で製造")}</p>
                    </div>
                </dd>
                <dd>
                    <div className="spec-icon-img">
                        <Image src="/tf_icon-spec-2.png" alt="TFucoidan100" width={83} height={83}/>
                    </div>
                    <div className="spec-icon-text">
                        <p className="copy">{t("高分子フコイダン")} <span>({t("分子量 500,000")})</span></p>
                    </div>
                </dd>
                <dd>
                    <div className="spec-icon-img">
                        <Image src="/tf_icon-spec-3.png" alt="TFucoidan100" width={83} height={83}/>
                    </div>
                    <div className="spec-icon-text">
                        <p className="copy">{t("硫酸基結合率")}<span>{t("13%以上")}</span></p>
                    </div>
                </dd>
                <dd>
                    <div className="spec-icon-img">
                        <Image src="/tf_icon-spec-4.png" alt="TFucoidan100" width={83} height={83}/>
                    </div>
                    <div className="spec-icon-text">
                        <p className="copy">{t("フコース含有量")}<span>{t("45%以上")}</span></p>
                    </div>
                </dd>
                <dd>
                    <div className="spec-icon-img">
                        <Image src="/tf_icon-spec-5.png" alt="TFucoidan100" width={83} height={83}/>
                    </div>
                    <div className="spec-icon-text">
                        <p className="copy"> {t("原料")}<span>{t("トンガ産モズク")}</span></p>
                    </div>
                </dd>
                <dd>
                    <div className="spec-icon-img">
                        <Image src="/tf_icon-spec-6.png" alt="TFucoidan100" width={83} height={83}/>
                    </div>
                    <div className="spec-icon-text">
                        <p className="copy">{t("安全基準")}<span>{t("クリア")}</span></p>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</div>
{/* <div id="buy" style="display: block;"></div> */}

  </div>
</div>
    </Layout>
  );}