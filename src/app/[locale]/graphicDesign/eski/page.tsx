'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import CarouselOverlay, {
    type Photo
} from '@/components/carouselOverlay/CarouselOverlay';

export default function eski() {
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
            key: '/graphicDesign/eski/eskiLanding.png',
            index: 0
        },
        {
            key: '/graphicDesign/eski/eskiLanding-1.png',
            index: 1
        },
        {
            key: '/graphicDesign/eski/eskiLanding-2.png',
            index: 2
        },
    ];

    const websitePosters = [
        {
            key: '/graphicDesign/eski/eskiWebsite (1).png',
            index: 0
        },
        {
            key: '/graphicDesign/eski/eskiWebsite (2).png',
            index: 1
        },
        {
            key: '/graphicDesign/eski/eskiWebsite (3).png',
            index: 2
        },
        {
            key: '/graphicDesign/eski/eskiWebsite (4).png',
            index: 3
        },
        {
            key: '/graphicDesign/eski/eskiWebsite (5).png',
            index: 4
        },
    ];

    const pmsPosters = [
        {
            key: '/graphicDesign/eski/eskiPMS (1).png',
            index: 0
        },
        {
            key: '/graphicDesign/eski/eskiPMS (2).png',
            index: 1
        },
        {
            key: '/graphicDesign/eski/eskiPMS (3).png',
            index: 2
        },
        {
            key: '/graphicDesign/eski/eskiPMS (4).png',
            index: 3
        },
        {
            key: '/graphicDesign/eski/eskiPMS (5).png',
            index: 4
        },
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
                <h1>{t('eski.title')}</h1>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eski.landing')}</h4>
                <div className='horizontal-section'>
                    {posters.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="ESKI Brand Image"
                            width={400}
                            height={600}
                            className='graphic-website-image'
                            onClick={() => { openCarousel(posters, index); }}
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eski.website')}</h4>
                <div className='horizontal-section'>
                    {websitePosters.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="ESKI Brand Image"
                            width={400}
                            height={600}
                            className='graphic-website-image'
                            onClick={() => { openCarousel(websitePosters, index); }}
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eski.pms')}</h4>
                <div className='horizontal-section'>
                    {pmsPosters.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="ESKI Brand Image"
                            width={400}
                            height={600}
                            className='graphic-website-image'
                            onClick={() => { openCarousel(pmsPosters, index); }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
