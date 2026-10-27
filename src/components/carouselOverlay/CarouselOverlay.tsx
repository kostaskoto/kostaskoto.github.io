'use client';
import './carouselOverlay.scss';
import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import type { Dispatch, SetStateAction } from 'react';

import CloseIcon from '@mui/icons-material/Close';

export type Photo = {
    key: string;
    index: number;
};

interface CarouselOverlayPros {
    photos: { key: string }[];
    index: number;
    setOverlay: Dispatch<SetStateAction<boolean>>;
}

const CarouselOverlay = ({ photos, index, setOverlay }: CarouselOverlayPros) => {

    return (
        <div className='carousel-background'>
            <div className='carousel-container'>
                <button
                    className='close-button'
                    onClick={() => {
                        setOverlay(false)
                    }}>
                    <CloseIcon className='CloseIcon' />
                </button>
                <Carousel
                    showThumbs={false}
                    selectedItem={index}
                    useKeyboardArrows={true}
                    showStatus={false}
                    className='carousel'
                >
                    {photos.map(({ key }) => (
                        <div className='carousel-image-conteiner' key={key}>
                            <Image
                                src={assetPath(key)}
                                alt="N+1 Click Poster"
                                width={400}
                                height={600}
                                className='carousel-image'
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselOverlay;
