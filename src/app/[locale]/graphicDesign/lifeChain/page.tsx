'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import CarouselOverlay, {
    type Photo
} from '@/components/carouselOverlay/CarouselOverlay';

export default function lifeChain() {
    const { t } = useTranslation('graphicDesign');
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
            key: '/graphicDesign/lifeChain/lifeChainBrandImage-1.png',
            index: 0
        },
        {
            key: '/graphicDesign/lifeChain/lifeChainBrandImage-2.png',
            index: 1
        },
        {
            key: '/graphicDesign/lifeChain/lifeChainBrandImage-3.png',
            index: 2
        },
        {
            key: '/graphicDesign/lifeChain/lifeChainBrandImage-4.png',
            index: 3
        },
        {
            key: '/graphicDesign/lifeChain/lifeChainBrandImage-5.png',
            index: 4
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
                <h1>{t('lifeChain.title')}</h1>
                <Image
                    src={assetPath('/graphicDesign/lifeChain/lifeChainLogo.svg')}
                    alt="Life Chain Logo"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ background: 'white', filter: 'drop-shadow(0 0 150px #F30131)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <h5>{t('lifeChain.subtitle-1')}</h5>
                    <p>{t('lifeChain.subtitle-2')}</p>
                </div>
            </div>
            <div className='portfolio-pages-content'>
                <p className='portfolio-pages-highlight'>{t('lifeChain.highlight')}</p>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('lifeChain.poster-title')}</h4>
                <div className='horizontal-section'
                    style={{ filter: 'drop-shadow(0 0 150px #F20216)' }}
                >
                    {posters.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="Life Chain Brand Image"
                            width={400}
                            height={600}
                            className='graphic-poster-image'
                            onClick={() => { openCarousel(posters, index); }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
