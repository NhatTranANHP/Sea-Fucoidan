import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useCart } from '@/context/CartContext';
// import DeliverySection from '@/components/DeliverySection';
import { useTranslation } from "@/hook/useTranslation";
import dynamic from 'next/dynamic';
import DeliveryInformation from "@/components/DeliveryInformation";
import { useAuth } from "@/context/AuthContext";

const PayPalCheckout = dynamic(() => import('@/components/PayPalButton'), {
  ssr: false,
});

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export async function getStaticProps() {
  const res = await fetch('https://holidays-jp.github.io/api/v1/date.json');
  const holidaysJson = await res.json();
  const holidayDates = Object.keys(holidaysJson);

  return {
    props: {
      holidayDates,
    },
  };
}

export default function CartPage() {
    const { cart, removeFromCart, decreaseQuantity, getCartTotal, addToCart } = useCart();
    const { user } = useAuth();
    const { t } = useTranslation();

  const isEmpty = cart.length === 0;
  return (
    <Layout>
      <main
        id="MainContent"
        className="content-for-layout focus-none"
        role="main"
      >
        <div className="page-width section-template--cart-items-padding">
          <div className="title-wrapper-with-link">
            <h2 className="title title--primary">{t("カート")}</h2>
            <Link href="/collections/product-list" className="underlined-link">
              {t("買い物を続ける")}
            </Link>
          </div>
        </div>

        <div
          id="shopify-section-template--20903562772765__cart-footer"
          className="shopify-section cart__footer-wrapper"
        >
          <div
            className="page-width"
            id="main-cart-footer"
            data-id="template--20903562772765__cart-footer"
          >
            {isEmpty ? (
              <div className="cart__warnings">
                <h1 className="cart__empty-text">{t("カートは空です")}</h1>
                <Link href="/collections/product-list" className="button">
                  {t("買い物を続ける")}
                </Link>
                <h2 className="cart__login-title">
                  {t("アカウントをお持ちですか")}?
                </h2>
                <p className="cart__login-paragraph">
                  <Link href="/account/login" className="link underlined-link">
                    {t("ログイン")}
                  </Link>
                  {t("することで、ご購入手続きがスピーディーに行えます。")}
                </p>
              </div>
            ) : (
              <div>
                <form method="post" className="cart__contents">
                  <table className="cart-items">
                    <thead>
                      <tr>
                        <th colSpan={2}>{t("商品")}</th>
                        <th className="medium-hide large-up-hide right">
                          {t("合計")}
                        </th>
                        <th className="small-hide">{t("数量")}</th>
                        <th className="small-hide right">{t("合計")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr className="cart-item" key={item.id}>
                          <td className="cart-item__media">
                            <Link
                              href={item.href}
                              className="cart-item__link"
                              aria-hidden="true"
                              tabIndex={-1}
                            ></Link>
                            <div className="cart-item__image-container gradient">
                              <Image
                                src={item.image}
                                alt=""
                                className="cart-item__image"
                                width={150}
                                height={150}
                              />
                            </div>
                          </td>
                          <td className="cart-item__details">
                            <Link
                              href={item.href}
                              className="cart-item__name h4 break"
                            >
                              {t(item.title)}
                            </Link>
                            <div className="product-option">
                              {item.price} {t(item.currency)}
                            </div>
                          </td>
                          <td className="cart-item__totals right medium-hide large-up-hide">
                            <div className="cart-item__quantity-controls">
                              <button
                                type="button"
                                onClick={() => decreaseQuantity(item.id)}
                                className="quantity-btn"
                              >
                                −
                              </button>
                              <span className="price price--end">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => addToCart(item)}
                                className="quantity-btn"
                              >
                                ＋
                              </button>
                              <button
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                                className="remove-btn"
                              >
                                ✕
                              </button>
                            </div>
                          </td>

                          <td className="cart-item__quantity small-hide">
                            <div className="cart-item__quantity-controls">
                              <button
                                type="button"
                                onClick={() => decreaseQuantity(item.id)}
                                className="quantity-btn"
                              >
                                −
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                type="button"
                                onClick={() => addToCart(item)}
                                className="quantity-btn"
                              >
                                ＋
                              </button>
                              <button
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                                className="remove-btn"
                              >
                                ✕
                              </button>
                            </div>
                          </td>
                          <td className="cart-item__totals right small-hide">
                            <span className="price price--end">
                              {item.price * item.quantity} {t(item.currency)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </form>
                <div>
                  <div className="cart__footer section-template--20903562772765__cart-footer-padding">
                    {/* <DeliverySection holidayDates={holidayDates} /> */}
                    <DeliveryInformation />

                    <div className="cart__blocks">
                      {/* <div className="howto-use-coupon">
                      <div>
                        <a
                          href="/pages/guide-03#towa-coupon-01"
                          target="_blank"
                          style={{ color: "#999" }}
                        >
                          *クーポンの使い方
                        </a>
                      </div>
                    </div> */}

                      <div className="js-contents">
                        <div className="totals">
                          <h2 className="totals__total">{t("小計")}</h2>
                          <p className="totals__total-value">
                            {getCartTotal()} {t("円")}
                          </p>
                        </div>

                        <small className="tax-note caption-large rte">
                          {t("税込み。")}
                          <a href="/policies/shipping-policy">{t("配送料")}</a>
                          {t("と割引はご購入手続き時に計算されます")}
                        </small>
                      </div>
                      <div className="cart__ctas">
                        {/* <noscript>
                        <button
                          type="submit"
                          className="cart__update-button button button--secondary"
                          form="cart"
                        >
                          アップデート
                        </button>
                      </noscript> */}

                        {/* <button
                        type="submit"
                        id="checkout"
                        className="cart__checkout-button button"
                        name="checkout"
                        form="cart"
                      >
                        {t("ご購入手続きへ")}
                      </button> */}

                        {user ? <PayPalCheckout /> : ""}
                      </div>
                      {/* <div className="cart__dynamic-checkout-buttons additional-checkout-buttons">
                      <div
                        className="dynamic-checkout__content"
                        id="dynamic-checkout-cart"
                        data-shopify="dynamic-checkout-cart"
                      >
                        {" "}
                        <small
                          id="shopify-buyer-consent"
                          className="hidden"
                          aria-hidden="true"
                        >
                          {" "}
                          カートの中の1つ以上のアイテムは、定期購入または後払い購入です。続行することにより、
                          <span id="shopify-subscription-policy-button">
                            キャンセルポリシー
                          </span>
                          に同意し、注文がフルフィルメントされるまで、もしくは許可される場合はキャンセルするまで、このページに記載されている価格、頻度、日付で選択した決済方法に請求することを承認するものとします。{" "}
                        </small>{" "}
                      </div>
                    </div> */}

                      <div id="cart-errors"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <script>
  document.addEventListener('DOMContentLoaded', function () {
    function isIE() {
      const ua = window.navigator.userAgent;
      const msie = ua.indexOf('MSIE ');
      const trident = ua.indexOf('Trident/');

      return msie > 0 || trident > 0;
    }

    if (!isIE()) return;
    const cartSubmitInput = document.createElement('input');
    cartSubmitInput.setAttribute('name', 'checkout');
    cartSubmitInput.setAttribute('type', 'hidden');
    document.querySelector('#cart').appendChild(cartSubmitInput);
    document.querySelector('#checkout').addEventListener('click', function (event) {
      document.querySelector('#cart').submit();
    });
  });
</script> */}
        </div>
      </main>
    </Layout>
  );
}
