'use client';
import React, { ReactNode } from 'react';

export default function AboutMeLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="about-me-layout">
      {children}
    </div>
  );
}
