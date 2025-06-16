import Image from "next/image";
import Layout from "@/components/Layout";
import { useTranslation } from "@/hook/useTranslation";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export default function SafetyPage() {
    const { t } = useTranslation();
  return (
    <Layout>
        <section id="shopify-section-template--20947874414877__b2df2e64-2a2a-44c5-a9ec-4f25a374592c" className="shopify-section section">
            <div className="color-background-1 gradient">
  <div className="section-template--20947874414877__b2df2e64-2a2a-44c5-a9ec-4f25a374592c-padding">
    



<div className="sf-section-safety common">
    <h1>{t("シーフコイダンの安全性")}</h1>
    <div className="safety-fv">
        <iframe className="earth" src="https://player.vimeo.com/video/269587187?autoplay=1&amp;loop=1&amp;autopause=0&amp;background=1"></iframe>
        <div className="safety-fv-copy">
            <h2 className="ttlbig">{t("安全で良質なフコイダン")}</h2>
            <p>{t("南太平洋トンガ")}</p>
        </div>
    </div>
    <div className="safety-section-01">
        <div className="inner sphone-padding">
            <Image src="/dx-logo-icon.png" alt="DXLogoIcon" width={100} height={100}/>
            <div className="safety-01-copy">
                <h2 className="ttlbig">{t("トンガ王国産の良質で安全なフコイダンを使用しています。")}</h2>
                <p>{t("トンガ王国は南太平洋上に浮かぶ大小170の島々からなる島国です。 日付変更線と南回帰線の交わるあたりに位置する人口10万人、総面積697K㎡（対馬とほぼ同じ）の小さな国です。王国を取り巻くトンガの海は「世界で2番目に深い海」と言われるトンガ海溝から上昇する清冷な海水が成し、ミネラルを豊富に含んでいます。また水質汚染のないこの海域からは重金属類の有害物質が検出されていません。")}</p>
            </div>
        </div>
    </div>
    
    <div className="safety-section-02">
        <div className="inner sphone-padding">
            <div className="safety-02-in">
                <span className="ttl">{t("安全性")}</span>
                <h2 className="ttlbig">{t("世界で2番目に深いトンガ海溝にミネラル豊富な南極の海流の海洋深層水で育つモズク。")}</h2>
                <Image src="/safety-drop.gif" alt="" width={100} height={100}/>
                <p>{t("ミネラル豊富で全く汚染されていない南極からの海流が、このトンガ海溝に当り、噴き上がります。その海洋深層水でトンガのモズクは育ちます。")}<br/>{t("本来、海藻はヒ素や鉛などの重金属を濃縮・蓄積するのですが、このような条件下で育ったトンガモズクは安全性が高く、かつ豊富なミネラルを蓄えているのです。更にトンガでは、戦争の歴史が無いため、鉄砲の銃弾や大砲の玉が沈んでいません。元々海が汚染されていない、ということもあります。")}</p>
            </div>
        </div>
    </div>
    
    <div className="safety-section-03">
        <div className="inner sphone-padding">
            <div className="safety-03-in">
                <span className="ttl">{t("天然のフコイダン")}</span>
                <h3 className="ttlbig">{t("トンガでは国全体で")}<span className="nowrap">{t("「自然を守る」")}</span><br className="pc-only"/>{t("取り組みが行われています。")}</h3>
                <Image src="/safety-futaba.gif" alt="" width={100} height={100}/>
                <p>{t("独自の採取方法により、収穫期を、現地の冬に当たる８月から１０月に限定し、生態系を守りながら資源を確保しています。さらに、ダイバーが海に潜って一つひとつ手で丁寧に天然モズクを採取しています。その結果、フコイダンに含まれる大切な成分を傷つける事なく採取しています。")}</p>
            </div>
        </div>
    </div>
    
    <div className="safety-section-04">
        <div className="inner sphone-padding">
            <div className="safety-04-copy">
                <h2 className="ttlbig">{t("徹底した品質管理")}</h2>
                <p>{t("フコイダンの抽出から限外濾過、噴霧乾燥、殺菌に至る独自の製造方法を経て高純度で高品質のフコイダンを精製しています。")}</p>
            </div>
            <div className="safety-04-in">
                <dl className="inview slash">
                    <dd>
                        <div className="quality-content">{t("独自の方法による抽出")}</div>
                    </dd>
                    <dd>
                        <i className="far fa-arrow-alt-circle-down"></i>
                    </dd>
                    <dd>
                        <div className="quality-content">{t("精製処理")}</div>
                    </dd>
                    <dd>
                        <i className="far fa-arrow-alt-circle-down"></i>
                    </dd>
                    <dd>
                        <div className="quality-content">{t("品質管理部にて一次検査")}</div>
                    </dd>
                    <dd>
                        <i className="far fa-arrow-alt-circle-down"></i>
                    </dd>
                    <dd>
                        <div className="quality-content">{t("第三者機関にて二次委託検査")}</div>
                    </dd>
                    <dd>
                        <i className="far fa-arrow-alt-circle-down"></i>
                    </dd>
                    <dd>
                        <div className="quality-content">{t("出荷")}</div>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
    
    <div className="safety-section-05">
        <div className="inner sphone-padding" style={{padding:'0'}}>
            <ul>
                <li className="inview slash">
                    <div className="question">
                        <i className="fas fa-question-circle"></i>
                        <h4>{t("放射能の影響が心配なのですが。")}</h4>
                    </div>
                    <div className="answer">
                        <p>{t("シーフコイダンに使用しているモズクはトンガ王国産で、昆布はチリ産のものを使用しておりますので、安心してお飲みいただけます。")}</p>
                    </div>
                </li>
                <li className="inview slash">
                    <div className="question">
                        <i className="fas fa-question-circle"></i>
                        <h4>{t("薬と併用しても大丈夫ですか?")}</h4>
                    </div>
                    <div className="answer">
                        <p>{t("シーフコイダンは医薬品ではない為、基本的には問題ありませんが、気になる場合はお医者様にご相談されてください。")}</p>
                    </div>
                </li>
                <li className="inview slash">
                    <div className="question">
                        <i className="fas fa-question-circle"></i>
                        <h4>{t("飲みすぎると、ヨウ素の多量摂取につながりますか?")}</h4>
                    </div>
                    <div className="answer">
                        <p>{t("弊社の製品におきましては、製造段階でヨウ素を完全に取り除いている為、問題ありません。")}</p>
                    </div>
                </li>
                <li className="inview slash">
                    <div className="question">
                        <i className="fas fa-question-circle"></i>
                        <h4>{t("副作用はありますか?")}</h4>
                    </div>
                    <div className="answer">
                        <p>{t("弊社のシーフコイダンは、天然由来のモズクや昆布から抽出している為、基本的には副作用はありませんが、多量摂取によりお腹が緩くなる場合が考えられます。その際には、お飲みになる量を調整していただくことをお勧めします。")}</p>
                    </div>
                </li>
                <li className="inview slash">
                    <div className="question">
                        <i className="fas fa-question-circle"></i>
                        <h4>{t("重金属などの有害物質は含まれていませんか？")}</h4>
                    </div>
                    <div className="answer">
                        <p>{t("トンガ王国では戦争の歴史が無いため、鉄砲の銃弾や大砲の玉が沈んでいません。そのため重金属・化学物質などによる海洋汚染がなく ミネラルも豊富で良質な​​​フコイダン​​​ が採取できるのです。")}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
  </div>
</div>


</section>
    </Layout>
  );
}
