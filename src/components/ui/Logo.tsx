import React from 'react';

export const Logo: React.FC<{ className?: string, mode?: 'dark' | 'light' }> = ({ className = '', mode = 'dark' }) => (
  <a href="/" className={`flex items-center gap-2 ${className}`}>
    <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.0816 2.05943L13.7844 11.2335L8.48721 2.05943H19.0816ZM19.0816 2.05943L24.3788 11.2335L19.0816 20.4076H8.48721L13.7844 11.2335L19.0816 2.05943Z" fill="#4CAF4F"/>
        <path d="M0.323608 21.8219H10.918L5.6208 12.6479L0.323608 21.8219Z" fill="#4CAF4F"/>
        <path d="M27.2435 21.8219H37.8379L32.5407 12.6479L27.2435 21.8219Z" fill="#4CAF4F"/>
        <path d="M13.7844 11.2335L19.0816 2.05943H29.676L24.3788 11.2335H13.7844Z" fill="#4CAF4F"/>
    </svg>
    <span className={`text-3xl font-bold ${mode === 'light' ? 'text-white' : 'text-[#263238]'}`}>Nexcent</span>
  </a>
);
