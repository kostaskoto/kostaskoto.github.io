'use client';
import { ReactNode } from 'react';

export default function eestecYearBook({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="portfolio-content">
            {children}
        </div>
    );
}
