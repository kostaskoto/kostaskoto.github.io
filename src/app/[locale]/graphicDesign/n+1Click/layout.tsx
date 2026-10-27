'use client';
import { ReactNode } from 'react';

export default function Np1ClickLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="portfolio-content">
            {children}
        </div>
    );
}
