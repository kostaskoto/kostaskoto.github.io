import initTranslations from '@/app/i18n';
import Header from '@/components/header/Header';
import TranslationsProvider from '@/providers/TranslationProvider';
import { ReactNode } from 'react';

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "el" },
  ];
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params: paramsPromise }: Readonly<LocaleLayoutProps>) {
  const param = await paramsPromise;
  const paramLocale = param.locale;

  const { resources } = await initTranslations(paramLocale);

  return (
    <TranslationsProvider locale={paramLocale} resources={resources}>
      <div className="layout">
        <Header />
          {children}
      </div>
    </TranslationsProvider>
  );
}
