'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import CarouselOverlay, {
    type Photo
} from '@/components/carouselOverlay/CarouselOverlay';

export default function Np1Click() {
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
            key: '/graphicDesign/n+1Click/n+1Click.png',
            index: 0
        },
        {
            key: '/graphicDesign/n+1Click/poster (1).png',
            index: 1
        },
        {
            key: '/graphicDesign/n+1Click/poster (2).png',
            index: 2
        },
        {
            key: '/graphicDesign/n+1Click/poster (3).png',
            index: 3
        },
        {
            key: '/graphicDesign/n+1Click/poster (4).png',
            index: 4
        },
        {
            key: '/graphicDesign/n+1Click/poster (5).png',
            index: 5
        },
        {
            key: '/graphicDesign/n+1Click/poster (6).png',
            index: 6
        },
        {
            key: '/graphicDesign/n+1Click/poster (7).png',
            index: 7
        },
        {
            key: '/graphicDesign/n+1Click/poster (8).png',
            index: 8
        },
        {
            key: '/graphicDesign/n+1Click/poster (9).png',
            index: 9
        },
        {
            key: '/graphicDesign/n+1Click/poster (10).png',
            index: 10
        },
        {
            key: '/graphicDesign/n+1Click/poster (11).png',
            index: 11
        },
        {
            key: '/graphicDesign/n+1Click/poster (12).png',
            index: 12
        },
        {
            key: '/graphicDesign/n+1Click/poster (13).png',
            index: 13
        },
        {
            key: '/graphicDesign/n+1Click/poster (14).png',
            index: 14
        },
        {
            key: '/graphicDesign/n+1Click/poster (15).png',
            index: 15
        },
        {
            key: '/graphicDesign/n+1Click/poster (16).png',
            index: 16
        }
    ];

    const drawings = [
        {
            key: '/graphicDesign/n+1Click/drawing1.png',
            index: 0
        },
        {
            key: '/graphicDesign/n+1Click/drawing2.png',
            index: 1
        }
    ];

    const photos = [
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-1.jpg',
            index: 0
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-2.jpg',
            index: 1
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-3.jpg',
            index: 2
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-4.jpg',
            index: 3
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-5.jpg',
            index: 4
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-6.jpg',
            index: 5
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-7.jpg',
            index: 6
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-8.jpg',
            index: 7
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-9.jpg',
            index: 8
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-10.jpg',
            index: 9
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-11.jpg',
            index: 10
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-12.jpg',
            index: 11
        }
    ];

    const calendar = [
        {
            key: '/graphicDesign/n+1Click/astoCalendar (1).png',
            index: 0
        },
        {
            key: '/graphicDesign/n+1Click/astoCalendar (2).png',
            index: 1
        },
        {
            key: '/graphicDesign/n+1Click/astoCalendar (3).png',
            index: 2
        },
        {
            key: '/graphicDesign/n+1Click/astoCalendar (4).png',
            index: 3
        },
        {
            key: '/graphicDesign/n+1Click/astoCalendar (5).png',
            index: 4
        },
        {
            key: '/graphicDesign/n+1Click/astoCalendar (6).png',
            index: 5
        },
        {
            key: '/graphicDesign/n+1Click/astoCalendar (7).png',
            index: 6
        },
        {
            key: '/graphicDesign/n+1Click/astoCalendar (8).png',
            index: 7
        },
        {
            key: '/graphicDesign/n+1Click/astoCalendar (9).png',
            index: 8
        },
        {
            key: '/graphicDesign/n+1Click/astoCalendar (10).png',
            index: 9
        },
        {
            key: '/graphicDesign/n+1Click/astoCalendar (11).png',
            index: 10
        },
        {
            key: '/graphicDesign/n+1Click/astoCalendar (12).png',
            index: 11
        },
        {
            key: '/graphicDesign/n+1Click/astoCalendar (13).png',
            index: 12
        },
        {
            key: '/graphicDesign/n+1Click/astoCalendar (14).png',
            index: 13
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
                <h1>{t('n+1Click.title')}</h1>
                <Image
                    src={assetPath('/graphicDesign/n+1Click/n+1ClickBanner.png')}
                    alt="Facebook Banner from the festival N+1 Click"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #F0EA18)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <h5>{t('n+1Click.subtitle-1')}</h5>
                    <p>{t('n+1Click.subtitle-2')}</p>
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('n+1Click.poster-title')}</h4>
                <div className='horizontal-section'>
                    {posters.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="N+1 Click Poster"
                            width={400}
                            height={600}
                            className='graphic-poster-image'
                            onClick={() => { openCarousel(posters, index); }}
                        />
                    ))}
                </div>
            </div>
            <div className='portfolio-pages-content'>
                <p className='portfolio-pages-highlight'>{t('n+1Click.highlight')}</p>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('n+1Click.drawing-title')}</h4>
                <div
                    className='graphic-drawings'
                    style={{ filter: 'drop-shadow(0 0 150px #ffffff99)' }}
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
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('n+1Click.calendar-title')}</h4>
                <div className='horizontal-section'>
                    {calendar.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="N+1 Click Calendar"
                            width={400}
                            height={600}
                            className='graphic-photo-image'
                            onClick={() => { openCarousel(calendar, index); }}
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('n+1Click.photo-title')}</h4>
                <div className='horizontal-section'>
                    {photos.map(({ key, index }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="N+1 Click Photo"
                            width={400}
                            height={600}
                            className='graphic-photo-image'
                            onClick={() => { openCarousel(photos, index); }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
