import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Script from 'next/script';

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
      <Script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"/>
      <Header />
      <main style={{marginTop: "30px"}}>{children}</main>
      <Footer />
    </>
  )
}