'use client';
import { ReactNode } from 'react';

export default function designSprint2021({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="portfolio-content">
            {children}
        </div>
    );
}
