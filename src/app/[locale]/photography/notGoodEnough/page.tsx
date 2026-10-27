'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import CarouselOverlay, {
    type Photo
} from '@/components/carouselOverlay/CarouselOverlay';

export default function NotGoodEnough() {
    const { t } = useTranslation('photography');
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
            key: '/photography/notGoodEnough/notGoodEnough (1).jpg',
            index: 0
        },
        {
            key: '/photography/notGoodEnough/notGoodEnough (2).jpg',
            index: 1
        },
        {
            key: '/photography/notGoodEnough/notGoodEnough (3).jpg',
            index: 2
        },
        {
            key: '/photography/notGoodEnough/notGoodEnough (4).jpg',
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
                <h1>{t('notGoodEnough.title')}</h1>
                <Image
                    src={assetPath('/photography/notGoodEnough/photoHeadNGE.jpg')}
                    alt="Not Good Enough photograph: man laying down naked on the bed during winter"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px rgba(6, 30, 50, 1))' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <h5>{t('notGoodEnough.subtitle-1')}</h5>
                    <p>{t('notGoodEnough.subtitle-2')}</p>
                </div>
            </div>
            <div className='portfolio-pages-content'>
                <p className='portfolio-pages-highlight'>{t('notGoodEnough.highlight')}</p>
                <div className='portfolio-pages-horizontal-text-image'>
                    <div className='portfolio-pages-text'>
                        <h4>{t('notGoodEnough.title')}</h4>
                        <p>
                            {t('notGoodEnough.notGoodEnough-1')}
                        </p>
                        <p>
                            {t('notGoodEnough.notGoodEnough-2')}
                        </p>
                        <p>
                            {t('notGoodEnough.notGoodEnough-3')}
                        </p>
                        <p>
                            {t('notGoodEnough.notGoodEnough-4')}
                        </p>
                        <p>
                            {t('notGoodEnough.notGoodEnough-5')}
                        </p>
                    </div>
                    <div className='portfolio-pages-image-container'>
                        <Image
                            src={assetPath('/photography/notGoodEnough/notGoodEnough.jpg')}
                            alt="Not Good Enough Poster"
                            width={400}
                            height={600}
                            className='portfolio-pages-image'
                            style={{ filter: 'drop-shadow(0 0 150px rgba(86, 62, 34, 1))' }}
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
                <h4>{t('notGoodEnough.presentation')}</h4>
                <Image
                    src={assetPath('/photography/notGoodEnough/notGoodEnoughExhibition.jpg')}
                    alt="I Am Not Good Enough exhibition"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #714D2B)' }}
                />
            </div>
        </div>
    );
}
