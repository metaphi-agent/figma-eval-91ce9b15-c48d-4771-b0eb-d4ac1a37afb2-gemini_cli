import React from 'react';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[144px] ${className}`}>
      {children}
    </div>
  );
};
