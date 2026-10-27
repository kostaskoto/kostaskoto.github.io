'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import CarouselOverlay, {
    type Photo
} from '@/components/carouselOverlay/CarouselOverlay';


export default function eestecYearBook() {
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
            key: '/graphicDesign/eestecYearBook/eestecYearBook (2).png',
            index: 0
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (3).png',
            index: 1
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (4).png',
            index: 2
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (5).png',
            index: 3
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (6).png',
            index: 4
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (7).png',
            index: 5
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (8).png',
            index: 6
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (9).png',
            index: 7
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (10).png',
            index: 8
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (11).png',
            index: 9
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (12).png',
            index: 10
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (13).png',
            index: 11
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (14).png',
            index: 12
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (15).png',
            index: 13
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (16).png',
            index: 14
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (17).png',
            index: 15
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (18).png',
            index: 16
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (19).png',
            index: 17
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (20).png',
            index: 18
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (21).png',
            index: 19
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (22).png',
            index: 20
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (23).png',
            index: 21
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (24).png',
            index: 22
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
                <h1>{t('eestecYearBook.title')}</h1>
            </div>
            <div className='portfolio-pages-content'
                style={{ filter: 'drop-shadow(0 0 150px #405056)' }}
            >
                <Image
                    src={assetPath('/graphicDesign/eestecYearBook/eestecYearBook (1).png')}
                    alt="Photo holding IEEE letters"
                    width={1200}
                    height={800}
                    className='image-v'
                />
                {posters.map(({ key, index }) => (
                    <Image
                        key={key}
                        src={assetPath(key)}
                        alt="eestecYearBook"
                        width={400}
                        height={600}
                        className='image'
                        onClick={() => { openCarousel(posters, index); }}
                    />
                ))}
                <Image
                    src={assetPath('/graphicDesign/eestecYearBook/eestecYearBook (25).png')}
                    alt="Photo holding IEEE letters"
                    width={1200}
                    height={800}
                    className='image-v'
                />
            </div>
        </div>
    );
}
