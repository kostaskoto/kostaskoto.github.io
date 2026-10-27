'use client';
import { ReactNode } from 'react';

export default function eestecOther({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="portfolio-content">
            {children}
        </div>
    );
}
