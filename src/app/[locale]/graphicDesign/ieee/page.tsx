'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import CarouselOverlay, {
    type Photo
} from '@/components/carouselOverlay/CarouselOverlay';

export default function ieee() {
    const { t } = useTranslation('graphicDesign');
    const [overlay, setOverlay] = useState(false);
    const [selectedPhotos, setSelectedPhotos] = useState<Photo[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const openCarousel = (photos: Photo[], index: number) => {
        setSelectedPhotos(photos);
        setSelectedIndex(index);
        setOverlay(true);
    };

    const drawings = [
        {
            key: '/graphicDesign/ieee/ieee.png',
            index: 0
        },
        {
            key: '/graphicDesign/ieee/ieeeHoodie.png',
            index: 1
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
                <h1>{t('ieee.title')}</h1>
                <Image
                    src={assetPath('/graphicDesign/ieee/ieeeHead.jpg')}
                    alt="Photo holding IEEE letters"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #0072DC)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <p>{t('ieee.subtitle-2')}</p>
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('ieee.drawing-title')}</h4>
                <div
                    className='graphic-drawings'
                >
                    {drawings.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="IEEE SB UPatras Designs"
                            width={400}
                            height={600}
                            className='graphic-drawing-image-v'
                            onClick={() => { openCarousel(drawings, index); }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
