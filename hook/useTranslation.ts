'use client';

import { useRouter } from 'next/router';
import viFromJa from '../translations.json';

export function useTranslation() {
  const { locale = 'vi' } = useRouter();

  const t = (text: string) => {
    if (locale === 'vi') {
      return viFromJa[text as keyof typeof viFromJa] || text;
    }
    return text; // Default is Japanese
  };

  return { t };
}
