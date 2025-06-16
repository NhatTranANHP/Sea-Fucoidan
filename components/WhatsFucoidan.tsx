import Image from 'next/image';

export default function FucoidanPage() {
  return (
    <section className="section">
      <div className="color-background-1 gradient">
        <div className="section-padding">
          <div className="sf-section-whats common">
            <h1>フコイダンとは？</h1>
            <div className="whats-fv">
              <div className="inner sphone-padding">
                <div className="fv-outline">
                  <h2>
                    <span className="renner">FUCOIDAN</span>と<span className="nowrap renner">Sea Fucoidan</span>
                  </h2>
                </div>
                <div className="fv-copy">
                  <p>
                    あなたはフコイダンの事を本当に<span className="nowrap">知っていますか？</span><br />
                    このページではフコイダンの誕生からシーフコイダンの特徴を<span className="nowrap">わかりやすく</span><span className="nowrap">説明いたします。</span>
                  </p>
                </div>
                <div className="fv-img renner">
                  <Image src="/whats-fv.jpg" width={800} height={500} alt="Sea Fucoidan" />
                  <p>さぁ一緒にフコイダンに<span className="nowrap">ついて</span><span className="nowrap">学びましょう。</span></p>
                </div>
              </div>
            </div>

            {/* Whats-01 */}
            <div className="whats-01">
              <div className="whats-01-in inner sphone-padding">
                <h3 className="ttlbig">フコイダンが<span className="nowrap">発見されたのは</span><span className="nowrap">およそ<span className="renner">100</span>年前の</span><span className="nowrap"><span className="renner">1913</span>年</span></h3>
                <p>スウェーデンの学者Kylinによって1913年に発見され、<span className="nowrap">「フコイダン」</span>と名付けられ<span className="nowrap">ました。</span></p>
              </div>
              <div className="kylin-outline">
                <div className="whats-01-img">
                  <dl className="kylin">
                    <dd><Image src="/whats-kylin-01.jpg" width={400} height={300} alt="Sea Fucoidan" /></dd>
                    <dd><Image src="/whats-kylin-02.jpg" width={400} height={300} alt="Sea Fucoidan" /></dd>
                  </dl>
                  <dl className="kylin-2">
                    <dd><Image src="/whats-kylin-04.jpg" width={400} height={300} alt="Sea Fucoidan" /></dd>
                    <dd><Image src="/whats-kylin-06.jpg" width={400} height={300} alt="Sea Fucoidan" /></dd>
                  </dl>
                </div>
              </div>
              <div className="whats-01-in inner sphone-padding">
                <p>Kylin博士は沿岸地域で健康な人が多いことがきっかけで海藻には何か特有の作用があるのではないかと考え、海藻のヌルヌル成分を調べた結果、これが新たな成分だと発見しました。<br />これが今注目の成分フコイダンの最初の発見だと<span className="nowrap">言われて</span><span className="nowrap">います。</span></p>
              </div>
            </div>

            {/* You can continue this structure for the rest of the sections: whats-02 to whats-07 */}

            {/* Example for link */}
            {/* <Link href="/products/seafucoidandx">Sea Fucoidan DXはこちら</Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}