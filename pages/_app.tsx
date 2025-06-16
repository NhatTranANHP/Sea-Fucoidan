import '@/styles/merged (2).css'
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import type { AppProps } from "next/app";
import Script from "next/script";

<Script
  src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=JPY`}
  strategy="afterInteractive"
/>

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </CartProvider>
    )
}
