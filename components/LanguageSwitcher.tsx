// components/LanguageSwitcher.tsx
'use client';

import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = router.locale === 'vi' ? 'ja' : 'vi';
    router.push(pathname, pathname, { locale: newLocale });
  };

  return (
    <button onClick={toggleLocale}>
      {router.locale === 'vi' ? '日本語' : 'Tiếng Việt'}
    </button>
  );
}
