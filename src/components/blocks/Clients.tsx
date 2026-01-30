import React from 'react';
import { Container } from '../ui/Container';

const ClientLogo = ({ index }: { index: number }) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500 hover:text-brand-primary transition-colors cursor-pointer">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
        <path d={`M14 24 L${20 + index * 2} ${14 + index} L${34 - index} 24 L${20 + index * 2} ${34 - index} Z`} fill="currentColor"/>
    </svg>
);

export const Clients: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <Container className="text-center space-y-4">
        <div className="space-y-2">
            <h2 className="text-4xl font-semibold text-[#4D4D4D]">Our Clients</h2>
            <p className="text-[#717171]">We have been working with some Fortune 500+ clients</p>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 py-8">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <ClientLogo key={i} index={i} />
            ))}
        </div>
      </Container>
    </section>
  );
};
