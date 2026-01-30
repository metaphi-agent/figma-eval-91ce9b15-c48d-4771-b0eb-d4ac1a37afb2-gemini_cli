import React from 'react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#263238] py-16 text-white">
      <Container className="grid lg:grid-cols-4 gap-12">
        <div className="space-y-8 lg:col-span-1">
            <Logo mode="light" />
            <div className="space-y-2 text-sm text-[#F5F7FA]">
                <p>Copyright © 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
            </div>
            <div className="flex items-center gap-4">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
                        {/* Social Icon Placeholder */}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle cx="8" cy="8" r="4" fill="white" opacity="0.5"/>
                        </svg>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:col-span-2 gap-8">
            <div className="space-y-6">
                <h4 className="text-xl font-semibold">Company</h4>
                <ul className="space-y-3 text-sm text-[#F5F7FA] opacity-80">
                    {['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'].map(item => (
                        <li key={item}><a href="#" className="hover:text-white hover:underline">{item}</a></li>
                    ))}
                </ul>
            </div>
             <div className="space-y-6">
                <h4 className="text-xl font-semibold">Support</h4>
                <ul className="space-y-3 text-sm text-[#F5F7FA] opacity-80">
                    {['Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status'].map(item => (
                        <li key={item}><a href="#" className="hover:text-white hover:underline">{item}</a></li>
                    ))}
                </ul>
            </div>
             {/* Empty col for spacing or future links if needed, design shows 2 cols of links but aligned somewhat centrally */}
        </div>

        <div className="lg:col-span-1 space-y-6">
            <h4 className="text-xl font-semibold">Stay up to date</h4>
            <div className="relative">
                <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-[#FFFFFF] bg-opacity-20 rounded-lg py-2.5 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white hover:text-brand-primary">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.72949 14.8787L5.59016 10.3213L15.3902 2.60986L2.60986 8.39016L6.72949 9.52949V14.8787ZM6.96066 9.87616L12.435 5.56497L7.68536 10.9634L6.96066 9.87616Z" fill="currentColor"/>
                    </svg>
                </button>
            </div>
        </div>
      </Container>
    </footer>
  );
};
