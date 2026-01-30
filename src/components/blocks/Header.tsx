import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Service', href: '#service' },
    { name: 'Feature', href: '#feature' },
    { name: 'Product', href: '#product' },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="bg-[#F5F7FA] sticky top-0 z-50 py-4 lg:py-6">
      <Container className="flex items-center justify-between">
        <Logo />
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-base font-medium text-[#18191F] hover:text-brand-primary transition-colors">
                    {link.name}
                </a>
            ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
            <Button variant="text" className="text-brand-primary">Login</Button>
            <Button variant="primary" size="sm">Sign up</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
        </button>

        {/* Mobile Nav */}
        {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden py-4 flex flex-col items-center gap-4">
                 {navLinks.map(link => (
                    <a key={link.name} href={link.href} className="text-base font-medium text-gray-900 hover:text-brand-primary" onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </a>
                ))}
                 <Button variant="text" className="text-brand-primary">Login</Button>
                 <Button variant="primary" size="sm">Sign up</Button>
            </div>
        )}
      </Container>
    </header>
  );
};
