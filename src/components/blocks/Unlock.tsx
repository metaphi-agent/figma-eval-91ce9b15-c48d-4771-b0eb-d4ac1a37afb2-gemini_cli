import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Unlock: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <Container className="grid lg:grid-cols-2 gap-12 items-center">
                 <div className="flex justify-center">
                    <svg width="442" height="330" viewBox="0 0 442 330" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm h-auto">
                        <rect x="50" y="20" width="250" height="280" rx="10" fill="white" stroke="#E0E0E0" strokeWidth="2"/>
                        <rect x="65" y="40" width="220" height="150" rx="5" fill="#E8F5E9"/>
                        <circle cx="175" cy="115" r="40" fill="#4CAF4F" opacity="0.3"/>
                        <rect x="65" y="210" width="220" height="15" rx="7.5" fill="#E0E0E0"/>
                        <rect x="65" y="235" width="180" height="15" rx="7.5" fill="#E0E0E0"/>
                        <path d="M300 100 L350 310" stroke="#263238" strokeWidth="12" strokeLinecap="round"/>
                        <path d="M380 100 L330 310" stroke="#263238" strokeWidth="12" strokeLinecap="round"/>
                        <circle cx="340" cy="80" r="30" fill="#263238"/>
                        <path d="M300 110 Q340 110 380 110 L380 200 L300 200 Z" fill="#4CAF4F"/>
                    </svg>
                 </div>
                 <div className="space-y-6">
                    <h2 className="text-4xl font-semibold text-[#4D4D4D]">The unseen of spending three years at Pixelgrade</h2>
                    <p className="text-[#717171] text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <Button size="lg">Learn More</Button>
                 </div>
            </Container>
        </section>
    );
}
