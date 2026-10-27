'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import CarouselOverlay, {
    type Photo
} from '@/components/carouselOverlay/CarouselOverlay';

export default function eestecOther() {
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
            key: '/graphicDesign/eestecOther/eestecBadgeHOBOM.jpg',
            index: 0
        },
        {
            key: '/graphicDesign/eestecOther/eestecBadgePAX.jpg',
            index: 1
        },
        {
            key: '/graphicDesign/eestecOther/eestecBadgeBoard.jpg',
            index: 2
        },
        {
            key: '/graphicDesign/eestecOther/eestecOther.jpg',
            index: 3
        },
        {
            key: '/graphicDesign/eestecOther/eestecBadgeOC.jpg',
            index: 4
        }
    ];

    const drawings = [
        {
            key: '/graphicDesign/eestecOther/tShirtHobom.png',
            index: 0
        },
        {
            key: '/graphicDesign/eestecOther/tShirtWibom.png',
            index: 1
        }
    ];

    const certificates = [
        {
            key: '/graphicDesign/eestecOther/subomCertificate.png',
            index: 0
        },
        {
            key: '/graphicDesign/eestecOther/wibomCertificate.png',
            index: 1
        }
    ];

    const events = [
        {
            key: '/graphicDesign/eestecOther/eventPlanning (1).png',
            index: 0
        },
        {
            key: '/graphicDesign/eestecOther/eventPlanning (2).png',
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
                <h1>{t('eestecOther.title')}</h1>
                <iframe
                    src={'https://drive.google.com/file/d/1kxDBzS3cHVBO_27Q2P3za3d-rz3F2whU/preview?autoplay=1&mute=1&loop=1'}
                    title={'title'}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className='video'
                    loading="lazy"
                    style={{ filter: 'drop-shadow(0 0 150px #e52a40)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <p>{t('eestecOther.subtitle-2')}</p>
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eestecOther.badges')}</h4>
                <div className='horizontal-section'>
                    {posters.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="EESTEC Badges Design"
                            width={400}
                            height={600}
                            className='graphic-app-image'
                            onClick={() => { openCarousel(posters, index); }}
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eestecOther.tShirt')}</h4>
                <div
                    className='graphic-drawings'
                    style={{ filter: 'drop-shadow(0 0 150px #352B4D)' }}
                >
                    {drawings.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="EESTEC T-Shirt Designs"
                            width={400}
                            height={600}
                            className='graphic-drawing-image'
                            onClick={() => { openCarousel(drawings, index); }}
                            style={{
                                background: 'white'
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content z-4000'>
                <h4 className='graphic-poster-title'>{t('eestecOther.certificate')}</h4>
                <div
                    className='graphic-drawings'
                >
                    {certificates.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="EESTEC Certificate Designs"
                            width={400}
                            height={600}
                            className='graphic-drawing-image'
                            onClick={() => { openCarousel(certificates, index); }}
                            style={{
                                background: 'white'
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eestecOther.events')}</h4>
                <div
                    className='graphic-drawings'
                    style={{
                        filter: 'drop-shadow(0 0 150px #0E0436)'
                    }}
                >
                    {events.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="EESTEC Event Planning Designs"
                            width={400}
                            height={600}
                            className='graphic-drawing-image'
                            onClick={() => { openCarousel(events, index); }}
                            style={{
                                background: 'white'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
