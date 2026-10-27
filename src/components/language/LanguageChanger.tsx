'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import './LanguageChanger.scss';
import { ChangeEvent } from 'react';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname() ?? '';

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    router.push(
      currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
    );
    router.refresh();
  };

  return (
    <select className={'language-select'} onChange={handleChange} value={currentLocale}>
      <option value="en">EN</option>
      <option value="el">EL</option>
    </select>
  );
}
