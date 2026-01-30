import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-[#F5F7FA]">
      <Container className="text-center space-y-8">
        <h2 className="text-5xl lg:text-[64px] font-semibold text-[#263238] leading-tight">
            Pellentesque suscipit <br/> fringilla libero eu.
        </h2>
        <Button size="lg" className="inline-flex gap-2">
            Get a Demo
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        </Button>
      </Container>
    </section>
  );
};
