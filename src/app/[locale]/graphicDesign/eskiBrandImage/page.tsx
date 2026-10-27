'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import CarouselOverlay, {
    type Photo
} from '@/components/carouselOverlay/CarouselOverlay';


export default function eskiBrandImage() {
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
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (1).png',
            index: 0
        },
        {
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (2).png',
            index: 1
        },
        {
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (3).png',
            index: 2
        },
        {
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (4).png',
            index: 3
        },
        {
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (5).png',
            index: 4
        },
        {
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (6).png',
            index: 5
        },
        {
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (7).png',
            index: 6
        }
    ];

    const drawings = [
        {
            key: '/graphicDesign/eskiBrandImage/eskiCard (1).png',
            index: 0
        },
        {
            key: '/graphicDesign/eskiBrandImage/eskiCard (2).png',
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
                <h1>{t('eskiBrandImage.title')}</h1>
                <Image
                    src={assetPath('/graphicDesign/eskiBrandImage/eski-head.png')}
                    alt="What is ESKI"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #6698CB)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <h5>{t('eskiBrandImage.subtitle-1')}</h5>
                    <p>{t('eskiBrandImage.subtitle-2')}</p>
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eskiBrandImage.poster-title')}</h4>
                <div className='horizontal-section'>
                    {posters.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="ESKI Brand Image"
                            width={400}
                            height={600}
                            className='graphic-poster-image'
                            onClick={() => { openCarousel(posters, index); }}
                        />
                    ))}
                </div>
            </div>
            <div className='portfolio-pages-content'>
                <p className='portfolio-pages-highlight'>{t('eskiBrandImage.highlight')}</p>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eskiBrandImage.drawing-title')}</h4>
                <div
                    className='graphic-drawings'
                    style={{ filter: 'drop-shadow(0 0 150px #3A60A0' }}
                >
                    {drawings.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="N+1 Click Drawing"
                            width={400}
                            height={600}
                            className='graphic-drawing-image'
                            onClick={() => { openCarousel(drawings, index); }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
