'use client';
import React, { ReactNode } from 'react';

export default function GraphicDesignLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="portfolio-layout">
      {children}
    </div>
  );
}
