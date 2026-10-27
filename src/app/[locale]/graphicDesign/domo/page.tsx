'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import CarouselOverlay, {
    type Photo
} from '@/components/carouselOverlay/CarouselOverlay';

export default function domo() {
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
            key: '/graphicDesign/domo/domoUI (1).png',
            index: 0
        },
        {
            key: '/graphicDesign/domo/domoUI (2).png',
            index: 1
        },
        {
            key: '/graphicDesign/domo/domoUI (3).png',
            index: 2
        },
        {
            key: '/graphicDesign/domo/domoUI (4).png',
            index: 3
        }
    ];

    const drawings = [
        {
            key: '/graphicDesign/domo/domoBrand (2).png',
            index: 0
        },
        {
            key: '/graphicDesign/domo/domoBrand (3).png',
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
                <h1>{t('domo.title')}</h1>
                <Image
                    src={assetPath('/graphicDesign/domo/domoBrand (1).png')}
                    alt="Domo Brand"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #9AA049)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <h5>{t('domo.subtitle-1')}</h5>
                    <p>{t('domo.subtitle-2')}</p>
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('domo.drawing-title')}</h4>
                <div
                    className='graphic-drawings'
                >
                    {drawings.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="Domo Brand"
                            width={400}
                            height={600}
                            className='graphic-drawing-image'
                            onClick={() => { openCarousel(drawings, index); }}
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('domo.poster-title')}</h4>
                <div className='horizontal-section'>
                    {posters.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="Domo UI"
                            width={400}
                            height={600}
                            className='graphic-app-image'
                            onClick={() => { openCarousel(posters, index); }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
