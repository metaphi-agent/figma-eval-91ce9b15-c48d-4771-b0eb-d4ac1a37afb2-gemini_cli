import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="bg-[#F5F7FA] py-16 lg:py-24">
      <Container className="grid lg:grid-cols-3 gap-12 items-center">
        <div className="space-y-8 lg:col-span-2">
            <h1 className="text-5xl lg:text-[64px] font-semibold leading-[1.15] text-[#4D4D4D]">
                Lessons and insights <br />
                <span className="text-[#4CAF4F]">from 8 years</span>
            </h1>
            <p className="text-[#717171] text-base">
                Where to grow your business as a photographer: site or social media?
            </p>
            <Button size="lg">Register</Button>
        </div>
        
        <div className="flex justify-center lg:justify-end lg:col-span-1">
             <HeroIllustration />
        </div>
      </Container>
      
      {/* Carousel Dots */}
      <div className="flex justify-center gap-2 mt-12">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4CAF4F] cursor-pointer"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#4CAF4F] opacity-30 cursor-pointer"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#4CAF4F] opacity-30 cursor-pointer"></span>
      </div>
    </section>
  );
};

const HeroIllustration = () => (
    <svg width="391" height="407" viewBox="0 0 391 407" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-sm">
        <rect x="40" y="60" width="240" height="160" rx="4" fill="white" stroke="#D1D5DB" strokeWidth="2"/>
        <rect x="50" y="70" width="220" height="140" rx="2" fill="#E8F5E9"/>
        <path d="M70 110 H120 M70 130 H150 M70 150 H100" stroke="#4CAF4F" strokeWidth="4" strokeLinecap="round"/>
        <rect x="180" y="90" width="70" height="50" rx="2" fill="#4CAF4F" opacity="0.2"/>
        
        <path d="M120 220 L160 260 L200 220" fill="#263238"/>
        <ellipse cx="160" cy="270" rx="60" ry="10" fill="#D1D5DB" opacity="0.5"/>
        
        <path d="M280 150 L280 350" stroke="#263238" strokeWidth="16" strokeLinecap="round"/>
        <path d="M300 150 L300 350" stroke="#263238" strokeWidth="16" strokeLinecap="round"/>
        <circle cx="290" cy="130" r="25" fill="#263238"/>
        <rect x="250" y="160" width="80" height="100" rx="10" fill="#4CAF4F"/>
        <rect x="240" y="200" width="40" height="30" rx="2" fill="#E8F5E9" transform="rotate(-10 240 200)"/>
    </svg>
);
