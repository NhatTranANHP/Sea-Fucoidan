import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hook/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import { useAuth } from '@/context/AuthContext';

interface MenuItem {
  id: string;
  label: string;
  href: string;
}

interface HeaderProps {
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItemQuantity, setCartItemQuantity] = useState(0);
  const { user } = useAuth();

  const mainMenuItems: MenuItem[] = [
    { id: 'whats-fucoidan', label: t('フコイダンとは'), href: '/pages/whats-fucoidan' },
    { id: 'product-list', label: t('商品一覧'), href: '/collections/product-list' },
    { id: 'subscription', label: t('定期購入'), href: '/pages/subscription' },
    { id: 'members-only', label: t('会員様限定'), href: '/pages/membersonly' }
  ];

  const contentLinks = [
    { label: t('シーフコイダンの安全性'), href: '/pages/safety' },
    { label: t('シーフコイダンの歴史'), href: '/pages/history' },
    { label: t('健康レポート'), href: '/pages/report' },
    { label: t('シーフコイダンを比較'), href: '/pages/compare' },
    { label: t('FAQ よくある質問'), href: '/pages/faq' }
  ];

  const guideLinks = [
    { label: t('ログイン'), href: '/account/login' },
    { label: t('ショッピングガイド'), href: '/pages/guide' },
    { label: t('お問い合わせ'), href: '/pages/contact' },
    { label: t('会社概要'), href: '/pages/about' }
  ];

  const worldFucoidanLinks = [
    { label: '日本語', href: '/pages/guide' },
    { label: 'English', href: 'https://sea-fucoidandx.com/', external: true },
    { label: '简体中文', href: 'http://sea-fucoidan.cn/', external: true },
    { label: '繁體中文', href: 'https://sea-fucoidandx.com/zh-tw', external: true },
    { label: 'Tiếng Việt', href: 'https://sea-fucoidan.com/shop-vn/', external: true },
    { label: '한국어', href: 'https://sea-fucoidandx.com/ko', external: true }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  // SVG Icons as components
  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none" viewBox="0 0 18 16">
      <path style={{color: 'white'}} d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor"/>
    </svg>
  );

  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none" viewBox="0 0 18 17">
      <path style={{color: 'white'}} d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor"/>
    </svg>
  );

  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none" viewBox="0 0 18 19">
      <path style={{color: 'white'}} fillRule="evenodd" clipRule="evenodd" d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z" fill="currentColor"/>
    </svg>
  );

  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none" viewBox="0 0 18 19">
      <path style={{color: 'white'}} fillRule="evenodd" clipRule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor"/>
    </svg>
  );

  const CartIcon = () => (
    <svg width="20px" height="20px" viewBox="0 0 65.6 65.6" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#FFFFFF" fill="none">
      <path points="4.62 9.96 15.34 9.96 21.71 37.85 49.69 37.85 56.17 16.35 16.67 15.79" d="M4.736 10.209L15.723 10.209L22.253 38.796L50.932 38.796L57.574 16.759L17.087 16.185"/><path d="M53.023 45.459H22.212a3.29 3.29 0 0 1 -3.362 -3.362c0 -3.3 3.403 -3.3 3.403 -3.3"/><path cx="24.95" cy="51.61" r="3.53" d="M29.192 52.9A3.618 3.618 0 0 1 25.574 56.518A3.618 3.618 0 0 1 21.955 52.9A3.618 3.618 0 0 1 29.192 52.9z"/><path cx="46.04" cy="51.61" r="3.53" d="M50.809 52.9A3.618 3.618 0 0 1 47.191 56.518A3.618 3.618 0 0 1 43.573 52.9A3.618 3.618 0 0 1 50.809 52.9z"/>
      </svg>
  );

   useEffect(() => {
    const updateCartCount = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItemQuantity(Array.isArray(cart) ? cart.length : 0);
      } catch {
        setCartItemQuantity(0);
      }
    };

    // Initial load
    updateCartCount();

    // Optional: listen to storage updates from other tabs
    window.addEventListener('storage', updateCartCount);

    // Optional: live updates if your app modifies localStorage directly
    const interval = setInterval(updateCartCount, 500);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        
      `}</style>

      {/* Sticky Header */}
      <div className="section-header" style={{ position: 'sticky', top: 0, zIndex: 50, background: '#002e50d9', borderBottom: '1px solid #e9ecef' }}>
        <header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
          <LanguageSwitcher />
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn"
            style={{ display: 'block' }}
            aria-label="メニュー"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Logo */}
          <div style={{ flexShrink: 0 }}>
            <Link href="/">
              <Image
                src="/logo-sea-fucoidan.png"
                alt="シーフコイダン日本公式"
                width={150}
                height={30}
                priority
                style={{ height: '30px', width: 'auto' }}
              />
            </Link>
          </div>

          {/* Right Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="btn"
              aria-label="検索"
            >
              <SearchIcon />
            </button>

            {/* Account Link */}
            <Link href={!user?"/account/login":"/history"} className="btn" aria-label="ログイン">
              <UserIcon />
              <span className="visually-hidden">{t("ログイン")}</span>
            </Link>

            {/* Cart Link */}
            <Link href="/cart" className="btn" style={{ position: 'relative' }} aria-label="カート">
              <div style={{ width: '20px', height: '20px' }}>
                <CartIcon />
              </div>
              {cartItemQuantity > 0 && (
                <span className="cart-badge">
                  {cartItemQuantity}
                </span>
              )}
              <span className="visually-hidden">{t("カート")}</span>
            </Link>
          </div>
        </header>

        {/* Secondary Navigation Bar */}
        <div className="header-nav" style={{ display: 'block' }}>
          <ul style={{ fontSize: "1rem"}}>
            {mainMenuItems.map((item) => (
              <li style={{display:"block"}} key={item.id}>
                <Link href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className={`menu-drawer ${isMenuOpen ? 'open' : ''}`}  style={{paddingTop: "calc(75px + 1.8rem)", fontSize: "1.8rem"}}>
            <div style={{ padding: '12px' }}>
              {/* Featured Product */}
              <ul className="sf-subscription-list">
                <li style={{display: isMenuOpen ? 'block' : 'none'}}>
                  <Link href="/products/teiki_fucoidandx">
                    <div className="sf-product-img">
                      <Image
                        src="/dx-lineup-900.png"
                        alt="シーフコイダンDX 900ml×2本"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="sf-product-test">
                      <span className="sub">{t("【定期購入】")}</span>{t("シーフコイダンDX")}<span className="nowrap">{t("(900ml×2本)")}</span>
                    </div>
                  </Link>
                </li>
              </ul>

              {/* Main Menu */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                {mainMenuItems.map((item) => (
                  <li style={{display: isMenuOpen?'block':'none', marginBottom: '8px'}} key={item.id}>
                    <Link
                      href={item.href}
                      style={{ display: 'block', padding: '8px 16px', textDecoration: 'none', color: '#495057', borderRadius: '4px' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      &lt;{item.label}&gt;
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Content Links */}
              <ul className="sf-content-list">
                {contentLinks.map((link, index) => (
                  <li style={{display: isMenuOpen?'block':'none'}} key={index}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Guide Links */}
              <ul className="sf-guide-list">
                {guideLinks.map((link, index) => (
                  <li style={{display: isMenuOpen?'block':'none'}} key={index}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* World Fucoidan */}
              <div className="sf-world-fucoidan">
                <p>World Fucoidan</p>
                <ul className="sf-world-list">
                  {worldFucoidanLinks.map((link, index) => (
                    <li style={{display: isMenuOpen?'block':'none'}} key={index}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </div>
        </>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="search-modal" onClick={() => setIsSearchOpen(false)}>
          <div className="search-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0, color: '#495057' }}>検索</h3>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="btn"
              >
                <CloseIcon />
              </button>
            </div>
            <form onSubmit={handleSearch}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="検索"
                  style={{
                    width: '100%',
                    padding: '12px 40px 12px 16px',
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                  autoFocus
                />
                <button
                  type="submit"
                  style={{ 
                    position: 'absolute', 
                    right: '8px', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#6c757d'
                  }}
                >
                  <SearchIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;