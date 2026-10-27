'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';

export default function astoWebsite2021() {
    const { t } = useTranslation('graphicDesign');

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>{t('astoWebsite2021.title')}</h1>
                <Image
                    src={assetPath('/graphicDesign/astoWebsite2021/astoWebsite2021Full.png')}
                    alt="astoWebsite2021 Brand"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #C0BD5C)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <h5>{t('astoWebsite2021.subtitle-1')}</h5>
                    <p>{t('astoWebsite2021.subtitle-2')}</p>
                </div>
            </div>
        </div>
    );
}
