import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Calendar: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <Container className="grid lg:grid-cols-2 gap-12 items-center">
                 <div className="flex justify-center order-last lg:order-first">
                    <svg width="441" height="433" viewBox="0 0 441 433" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm h-auto">
                        <rect x="120" y="50" width="200" height="350" rx="30" fill="white" stroke="#263238" strokeWidth="8"/>
                        <rect x="150" y="100" width="140" height="180" rx="4" fill="#F5F7FA"/>
                        <circle cx="220" cy="80" r="4" fill="#263238"/>
                        <rect x="190" y="380" width="60" height="4" rx="2" fill="#263238"/>
                        
                        {/* Lock Icon */}
                        <circle cx="360" cy="100" r="40" fill="#E8F5E9"/>
                        <rect x="340" y="90" width="40" height="30" rx="4" fill="#4CAF4F"/>
                        <path d="M350 90 V 80 A 10 10 0 0 1 370 80 V 90" stroke="#4CAF4F" strokeWidth="4"/>

                        <path d="M50 200 Q 100 250 120 250" stroke="#E8F5E9" strokeWidth="4" strokeDasharray="8 8"/>
                         <circle cx="50" cy="200" r="20" fill="#E8F5E9"/>
                         <path d="M50 190 L 50 205 M45 200 L55 200" stroke="#4CAF4F" strokeWidth="2"/>
                    </svg>
                 </div>
                 <div className="space-y-6">
                    <h2 className="text-4xl font-semibold text-[#4D4D4D]">How to design your site footer like we did</h2>
                    <p className="text-[#717171] text-sm leading-relaxed">
                        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                    </p>
                    <Button size="lg">Learn More</Button>
                 </div>
            </Container>
        </section>
    );
}
