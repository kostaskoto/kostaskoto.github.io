'use client';

import { useEffect } from 'react';
import { DEFAULT_LOCALE, landingLocalePath } from '@/lib/routes';

export default function RootPage() {

    useEffect(() => {
        window.location.replace(
            landingLocalePath(DEFAULT_LOCALE)
        );
    }, []);

    return null;
}
