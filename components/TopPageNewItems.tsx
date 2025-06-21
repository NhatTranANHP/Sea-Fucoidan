import React from "react";
import { useTranslation } from "@/hook/useTranslation";
import Link from "next/link";
import Image from "next/image";

export const TopPageNewItems: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="shopify-section-template--20903563198749__87623d6f-a496-44b3-afe8-b82766b08ac1"
      className="shopify-section section"
    >
      <div className="color-background-1 gradient">
        <div className="section-template--20903563198749__87623d6f-a496-44b3-afe8-b82766b08ac1-padding">
          {/* NEW TOPPAGE___NEW ITEMS */}
          <div className="toppage_newitems">
            <div className="top-new-product">
              <ul>
                <li style={{ display: "hidden"}}>
                  <div className="new-product-outline nk-fucoidan-plus">
                    <div className="new-product-in sphone-padding">
                      <p style={{textAlign:'center'}}>{t("カタチも成分も「プラス」")}</p>
                      <h3>NK-FUCOIDAN Plus</h3>
                      <Image
                        src="/product-nk-plus.png"
                        alt="NK-Fucoidan Plus"
                        width={430}
                        height={353}
                      />
                      <div className="more-button">
                        <Link href="/products/nk-fucoidan-plus">{t("詳しく見る")} &gt;</Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li style={{ display: "block"}}>
                  <div className="new-product-outline nk-fucoidan">
                    <div className="new-product-in sphone-padding">
                      <div className="nk-section-1">
                        <p style={{textAlign:'center'}}>{t("高含有・高純度")}</p>
                        <div className="nk-div">{t("新世代高分子フコイダン")}</div>
                      </div>
                      <div className="nk-section-2 clearfix">
                        <div className="nk-left">
                          <p className="nk-fucoidan-name min-990">NK-FUCOIDAN</p>
                          <div className="more-button min-990">
                            <Link href="/products/nk-fucoidan">{t("詳しく見る")} &gt;</Link>
                          </div>
                        </div>
                        <div className="nk-right">
                          <Image
                            src="/product-nk-top.png"
                            alt="NK-Fucoidan"
                            width={311}
                            height={428}
                          />
                          <h3 className="nk-fucoidan-name max-990">NK-FUCOIDAN</h3>
                        </div>
                      </div>
                      <div className="more-button max-990">
                        <Link href="/products/nk-fucoidan">{t("詳しく見る")} &gt;</Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
