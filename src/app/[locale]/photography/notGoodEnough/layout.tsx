'use client';
import React, { ReactNode } from 'react';

export default function NotGoodEnoughLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="portfolio-content">
      {children}
    </div>
  );
}
