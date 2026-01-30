import React from 'react';
import { Container } from '../ui/Container';

const features = [
  {
    title: 'Membership Organisations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
    icon: (
        <svg width="65" height="56" viewBox="0 0 65 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="55" height="46" rx="4" fill="#E8F5E9"/>
            <path d="M20 28H45" stroke="#4CAF4F" strokeWidth="4" strokeLinecap="round"/>
            <path d="M32.5 15V41" stroke="#4CAF4F" strokeWidth="4" strokeLinecap="round"/>
        </svg>
    )
  },
  {
    title: 'National Associations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
    icon: (
        <svg width="65" height="56" viewBox="0 0 65 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="55" height="46" rx="4" fill="#E8F5E9"/>
            <circle cx="32.5" cy="20" r="8" fill="#4CAF4F"/>
            <path d="M20 40C20 33 25 30 32.5 30C40 30 45 33 45 40" stroke="#4CAF4F" strokeWidth="4"/>
        </svg>
    )
  },
  {
    title: 'Clubs And Groups',
    description: 'Our membership management software provides full automation of membership renewals and payments',
    icon: (
        <svg width="65" height="56" viewBox="0 0 65 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="55" height="46" rx="4" fill="#E8F5E9"/>
             <path d="M15 40C15 35 20 35 25 35" stroke="#4CAF4F" strokeWidth="4"/>
             <path d="M50 40C50 35 45 35 40 35" stroke="#4CAF4F" strokeWidth="4"/>
             <circle cx="32.5" cy="20" r="8" fill="#4CAF4F"/>
        </svg>
    )
  }
];

export const Community: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-4xl font-semibold text-[#4D4D4D]">Manage your entire community in a single system</h2>
            <p className="text-[#717171]">Who is Nextcent suitable for?</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
            {features.map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-gray-100">
                    <div className="flex justify-center mb-6">
                        {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#4D4D4D] mb-4 text-pretty px-4">{feature.title}</h3>
                    <p className="text-[#717171] text-sm leading-relaxed">{feature.description}</p>
                </div>
            ))}
        </div>
      </Container>
    </section>
  );
};
