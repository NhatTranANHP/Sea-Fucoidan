import { useTranslation } from '@/hook/useTranslation';
import React from 'react';

const FucoidanDescription = () => {
  const { t } = useTranslation();
  return (
    <section className="shopify-section section">
        <div className="color-background-1 gradient">
        <div className="section-padding">
          <div id="seafucoidan-discription">
            <div className="inner">
              <p>
                {t("シーフコイダン日本公式は、シーフコイダンシリーズやNK-FUCOIDAN、フコキサンチンEXなどのフコイダン製品を専門に扱う公式販売店です。")}<br />
                {t("人気のトンガ産低分子フコイダンをはじめ新商品の高分子フコイダンなどより専門性の高い商品を取り扱っております。")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FucoidanDescription;