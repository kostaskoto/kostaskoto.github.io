'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import CarouselOverlay, {
    type Photo
} from '@/components/carouselOverlay/CarouselOverlay';

export default function astoCalendar2026() {
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
            key: '/graphicDesign/astoCalendar2026/astoCalendar (2).png',
            index: 0
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (3).png',
            index: 1
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (4).png',
            index: 2
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (5).png',
            index: 3
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (6).png',
            index: 4
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (7).png',
            index: 5
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (8).png',
            index: 6
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (9).png',
            index: 7
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (10).png',
            index: 8
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (11).png',
            index: 9
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (12).png',
            index: 10
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (13).png',
            index: 11
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (14).png',
            index: 12
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
                <h1>{t('astoCalendar2026.title')}</h1>
                <div className='portfolio-pages-content'>
                    <Image
                        src={assetPath('/graphicDesign/astoCalendar2026/astoCalendar (1).png')}
                        alt="astoCalendar2026 Brand"
                        width={1200}
                        height={800}
                        className='image-v'
                        style={{ filter: 'drop-shadow(0 0 150px #CF972A)' }}
                    />
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <div className='horizontal-section'>
                    {posters.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="astoCalendar2026 UI"
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
