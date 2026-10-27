'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';

export default function chiPoster2026() {
    const { t } = useTranslation('graphicDesign');

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>{t('chiPoster2026.title')}</h1>
                <Image
                    src={assetPath('/graphicDesign/chiPoster2026/chiPoster2026.png')}
                    alt="chiPoster2026 Brand"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #E83D15)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <h5>{t('chiPoster2026.subtitle-1')}</h5>
                    <a href='https://dl.acm.org/doi/full/10.1145/3772363.3798728' target="_blank" rel="noopener noreferrer">
                        {t('chiPoster2026.subtitle-2')}
                    </a>

                </div>
            </div>
        </div>
    );
}
