import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from '../../i18nConfig';

const namespaces = [
  'header',
  'home',
  'aboutMe',
  'photography',
  'graphicDesign',
];

import type { i18n, Resource } from 'i18next';

export default async function initTranslations(
  locale: string,
  i18nInstance?: i18n,
  resources?: Resource | undefined
) {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>{
          switch (language) {
            case "en":
              return import(`@/locales/en/${namespace}.json`);

            case "el":
              return import(`@/locales/el/${namespace}.json`);

            default:
              throw new Error(`Unsupported locale: ${language}`);
          }
        }
      )
    );
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales
  });

  return {
    i18n: i18nInstance,
    resources: { [locale]: i18nInstance.services.resourceStore.data[locale] },
    t: i18nInstance.t
  };
}
