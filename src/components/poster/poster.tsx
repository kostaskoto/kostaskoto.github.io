'use client';

import './poster.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { localePath } from "@/lib/routes";
import { useTranslation } from 'react-i18next';
import { assetPath } from "@/lib/site";

interface PosterProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    square?: boolean;
}

const Poster = ({ title, description, imageUrl, link, square = false }: PosterProps) => {
    const router = useRouter();
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;

    return (
        <div className="poster" onClick={() => {
            router.push(localePath(currentLocale, link));
            window.scrollTo(0, 0);
        }}
        >
            <Image
                className="poster-image"
                src={assetPath(imageUrl)}
                alt="About Me"
                width={1080}
                height={square ? 1080 : 1528}
                loading="lazy"
            />
            <h5 className="poster-title">{title}</h5>
            <p className="poster-description">{description}</p>
        </div>
    );
};

export default Poster;
