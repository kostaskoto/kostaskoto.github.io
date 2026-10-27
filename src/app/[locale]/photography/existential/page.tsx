'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { localePath } from '@/lib/routes';
import { useState } from 'react';
import CarouselOverlay, {
  type Photo
} from '@/components/carouselOverlay/CarouselOverlay';

export default function Existential() {
  const router = useRouter();
  const { t } = useTranslation('photography');
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const [overlay, setOverlay] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<Photo[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openCarousel = (photos: Photo[], index: number) => {
    setSelectedPhotos(photos);
    setSelectedIndex(index);
    setOverlay(true);
  };


  const posters = [
    {
      key: '/photography/existential/existential (1).jpg',
      index: 0
    },
    {
      key: '/photography/existential/existential (2).jpg',
      index: 1
    },
    {
      key: '/photography/existential/existential (3).jpg',
      index: 2
    },
    {
      key: '/photography/existential/existential (4).jpg',
      index: 3
    }
  ];

  return (
    <div className='portfolio-pages-wrapper'>
      {overlay && (<CarouselOverlay
        photos={selectedPhotos}
        index={selectedIndex}
        setOverlay={setOverlay}
      />
      )}
      <div className='portfolio-pages-head'>
        <h1>{t('existential.title')}</h1>
        <Image
          src={assetPath('/photography/existential/photoHeadEx.jpg')}
          alt="Existential photograph: woman with the watermellon"
          width={1200}
          height={800}
          className='image'
          style={{ filter: 'drop-shadow(0 0 150px rgba(86, 62, 34, 1))' }}
        />
        <div className='portfolio-pages-head-subtitle'>
          <h5>{t('existential.subtitle-1')}</h5>
          <p>{t('existential.subtitle-2')}</p>
        </div>
      </div>
      <div className='portfolio-pages-content'>
        <p className='portfolio-pages-highlight'>{t('existential.highlight')}</p>
        <div className='portfolio-pages-horizontal-text-image'>
          <div className='portfolio-pages-text'>
            <h4>{t('notGoodEnough.title')}</h4>
            <button className='portfolio-pages-button' onClick={() => {
              router.push(localePath(currentLocale, 'photography/notGoodEnough'));
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}>
              <ArrowBackRoundedIcon className='portfolio-pages-button-icon' />
              <p>{t('existential.info-button')}</p>
            </button>
            <h4>{t('existential.loveMyself')}</h4>
            <p>
              {t('existential.loveMyself-1')}
            </p>
            <p>
              {t('existential.loveMyself-2')}
            </p>
            <p>
              {t('existential.loveMyself-3')}
            </p>
            <p>
              {t('existential.loveMyself-4')}
            </p>
            <p>
              {t('existential.loveMyself-5')}
            </p>
          </div>
          <div className='portfolio-pages-image-container'>
            <Image
              src={assetPath('/photography/existential/existential.jpg')}
              alt="Existential Poster"
              width={400}
              height={600}
              className='portfolio-pages-image'
              style={{ filter: 'drop-shadow(0 0 150px rgba(124, 40, 27, 1))' }}
            />
          </div>
        </div>
      </div>
      <div className='graphic-poster-wide-content'>
        <div className='horizontal-section'>
          {posters.map(({ key, index }) => (
            <Image
              key={key}
              src={assetPath(key)}
              alt="Existential Photos"
              width={400}
              height={600}
              className='graphic-poster-image'
              onClick={() => { openCarousel(posters, index); }}
            />
          ))}
        </div>
      </div>
      <div className='portfolio-pages-single-photo'>
        <h4>{t('existential.presentation')}</h4>
        <Image
          src={assetPath('/photography/existential/existentialExhibition.jpg')}
          alt="Existential exhibition"
          width={1200}
          height={800}
          className='image'
          style={{ filter: 'drop-shadow(0 0 150px #4E4228)' }}
        />
      </div>

    </div>

  );
}
