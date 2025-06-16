import { useTranslation } from "@/hook/useTranslation";
import Image from "next/image";
const TopPageHero = () => {
  const { t } = useTranslation();
  return (
    <section id="top-page-hero" className="shopify-section section">
      <div className="color-background-1 gradient">
        <div className="section-template-padding">
          <div className="toppage_fv">
            <div className="fv-content">
              <div className="copy-01">
                <p className="feel">{t("新たなる実感。")}</p>
              </div>
              <div className="copy-02">
                <span>{t("超高濃縮海藻エキス")}</span>
                <Image
                  src="/logo-dx-white.png"
                  alt="Sea Fucoidan DX シーフコイダンDX"
                  width={500}
                  height={116}
                />
                <h1>{t("シーフコイダン DX")}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPageHero;
