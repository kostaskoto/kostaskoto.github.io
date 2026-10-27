'use client';

import Image from "next/image";
import { useTranslation } from 'react-i18next';
import './home.scss';
import { assetPath } from "@/lib/site";

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <div className='home'>
      <div className='home-component'>
        <div className='home-title'>
          <h1>{t('title-1')}</h1>
          <h1>{t('title-2')}</h1>
        </div>
        <Image
          className='home-image'
          src={assetPath('/home/homeWelcome.jpg')}
          alt={t('image-alt')}
          width={2463}
          height={3695}
          loading="eager"
        />
        <div className='home-chapter'>
          <div className='home-title-2'>
            <h1>{t('title-1')}</h1>
            <h1>{t('title-2')}</h1>
          </div>
          <div className='home-subtitles'>
            <h2>{t('subtitle-1')}</h2>
            <h2>{t('subtitle-2')}</h2>
            <h2>{t('subtitle-3')}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
